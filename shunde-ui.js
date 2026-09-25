// Shunde views share place data, while each page owns one job.
let shundeClusterLayers = [];
let selectedShundeId = null;
const shundeAreas = ["全区", "大良", "容桂", "北滘", "伦教", "杏坛", "均安"];

function renderPageNav() {
  const nav = document.querySelector("#pageNav");
  const links = [["#/shunde", "顺德地图", "map"], ["#/shunde/routes", "两日路线", "routes"], ["#/shunde/foods", "全部美食", "foods"]];
  nav.innerHTML = links.map(([href, label, page]) => `<a href="${href}" ${currentCity === "顺德" && currentPage === page ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  document.title = currentPage === "detail" ? `${places.find(place => location.hash.endsWith('/' + place.id))?.name || "地点详情"} · 旅行地图` : `${currentCity === "顺德" ? links.find(link => link[2] === currentPage)?.[1] : "深圳地图"} · 旅行地图`;
}

function renderAreaControls() {
  const host = document.querySelector("#areaControls");
  host.innerHTML = `<label class="area-picker">片区 <select id="areaSelect">${shundeAreas.map(area => `<option ${currentArea === area ? "selected" : ""}>${area}</option>`).join("")}</select></label>`;
  host.querySelector("select").addEventListener("change", event => {
    currentArea = event.target.value;
    renderCards();
    updateMarkerVisibility();
  });
}

function renderShundeRoutePanel() {
  const panel = document.querySelector("#routePlanner");
  panel.hidden = false;
  const itinerary = shundeRoutes.find(route => route.id === currentShundeRoute) || shundeRoutes[0];
  currentShundeRoute = itinerary.id;
  panel.innerHTML = `<div class="route-switcher" aria-label="选择路线">${shundeRoutes.map(route => `<button class="route-choice ${route.id === itinerary.id ? "active" : ""}" data-route="${route.id}" aria-pressed="${route.id === itinerary.id}">${route.day} ${route.id === "old-town" ? "大良老城" : route.id === "park-night" ? "大良新城" : "容桂"}</button>`).join("")}</div>
    <article class="mini-route" style="--route-color:${itinerary.color}"><div class="mini-route-title"><strong>${itinerary.name}</strong></div><p>${itinerary.summary}</p>
      <ol>${itinerary.stops.map((id, index) => `<li><a href="#/place/${id}">${places.find(place => place.id === id)?.name || id}</a><em>${itinerary.times[index]}</em>${itinerary.segments[index] ? `<small>${itinerary.segments[index]}</small>` : ""}</li>`).join("")}</ol></article>
    <p class="route-footnote">D2 两条路线二选一。连线仅表达游览顺序，实际出行请按导航；住宿仍为国泰南路区域参考点。</p>`;
  panel.querySelectorAll("[data-route]").forEach(button => button.addEventListener("click", () => {
    currentShundeRoute = button.dataset.route;
    renderMap();
  }));
}

function renderFoodDirectory() {
  if (map) { map.off(); map.setMaxBounds(null); map.stop(); map.remove(); map = null; }
  fitMapButton.hidden = true;
  printButton.hidden = true;
  const foodPlaces = places.filter(place => place.city === "顺德" && place.category === "美食")
    .sort((a, b) => (a.foodTopRank || 99) - (b.foodTopRank || 99));
  app.innerHTML = `<section class="food-page"><header class="food-page-intro"><p class="eyebrow">SHUNDE · FOOD GUIDE</p><h1>顺德，吃什么？</h1><p>全部 ${foodPlaces.length} 个美食地点集中在这里。先选片区和想吃的，再到地图看位置。</p></header>
    <div class="food-tools"><label>搜索门店或菜品<input id="foodSearch" type="search" placeholder="例如：排骨饭、桑拿鸡、早茶" /></label><label>片区<select id="foodArea"><option value="">所有片区</option>${[...new Set(foodPlaces.map(place => shundeAreas.find(area => area !== "全区" && place.area.startsWith(area)) || place.area))].map(area => `<option>${escapeHtml(area)}</option>`).join("")}</select></label><span id="foodCount" aria-live="polite"></span></div>
    <div id="foodDirectory" class="food-directory"></div>
    <details class="directory-notes"><summary>点餐与行程提醒</summary><p>两个人先问最小份、茶位和等位。粥底火锅、桑拿鸡、煲仔饭可互相替换，不必按榜单连续吃。淡水鱼生不进主路线；需要时选择彻底熟制菜式。介意预制菜时逐道询问制作和备料。</p></details>
    <details class="directory-notes"><summary>榜单依据与来源</summary><p>${escapeHtml(shundeFoodResearch.method)}</p><p>以下保留原有调研资料；本次更新调整页面结构，不新增评论样本。</p><ol>${shundeFoodResearch.sources.map(([name, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a></li>`).join("")}</ol></details>
  </section>`;
  const draw = () => {
    const query = document.querySelector("#foodSearch").value.trim().toLowerCase();
    const area = document.querySelector("#foodArea").value;
    const results = foodPlaces.filter(place => (!area || place.area.startsWith(area)) && [place.name, place.food, place.summary, place.area].join(" ").toLowerCase().includes(query));
    document.querySelector("#foodCount").textContent = `${results.length} 个地点`;
    document.querySelector("#foodDirectory").innerHTML = results.map(place => {
      const review = shundeFoodResearch.ranking.find(item => item.placeId === place.id);
      return `<article class="food-entry"><div class="food-entry-head"><span class="food-number">${place.foodTopRank ? String(place.foodTopRank).padStart(2, "0") : "·"}</span><div><p>${escapeHtml(place.area)}${place.pendingLocation ? " · 地址片区参考" : ""}</p><h2><a href="#/place/${place.id}">${escapeHtml(place.name)}</a></h2></div></div><p class="food-dishes">${escapeHtml(place.food || place.features || place.summary)}</p>${review ? `<p class="food-verdict">${escapeHtml(review.note)}</p>` : ""}<div class="food-entry-links"><a href="#/place/${place.id}">门店详情 →</a><a href="#/shunde/map/${place.id}">地图定位 ↗</a></div></article>`;
    }).join("") || '<p class="empty-state">没有找到匹配门店，试试其他菜名或片区。</p>';
  };
  document.querySelector("#foodSearch").addEventListener("input", draw);
  document.querySelector("#foodArea").addEventListener("change", draw);
  draw();
}

async function drawShundeBoundary(targetMap) {
  // Limit panning even if the boundary request fails.

  try {
    const response = await fetch("shunde-boundary.json?v=20260925");
    if (!response.ok) throw new Error("Boundary unavailable");
    const data = await response.json();
    if (map !== targetMap || currentCity !== "顺德") return;
    const polygons = data.features.flatMap(feature => feature.geometry.type === "MultiPolygon" ? feature.geometry.coordinates : [feature.geometry.coordinates]);
    const rings = polygons.flatMap(polygon => polygon.map(ring => ring.map(([lng, lat]) => [lat, lng])));
    const pane = targetMap.createPane("shundeBoundary");
    pane.style.zIndex = 350;
    pane.style.pointerEvents = "none";
    L.polygon([[[85,-180],[85,180],[-85,180],[-85,-180]], ...rings], {
      pane: "shundeBoundary", interactive: false, stroke: false, fillColor: "#eef2ec", fillOpacity: 1, fillRule: "evenodd"
    }).addTo(targetMap);
    const outline = L.geoJSON(data, {pane: "shundeBoundary", interactive: false, style: {color: "#40806f", weight: 2, fill: false}}).addTo(targetMap);
    cityBounds = outline.getBounds();
    targetMap.fitBounds(cityBounds, {padding: [35, 45], animate: false});
    targetMap.setMaxBounds(cityBounds.pad(.04));
    // Match the minimum zoom to the actual viewport, including narrow phones.
    targetMap.setMinZoom(targetMap.getBoundsZoom(cityBounds, false, L.point(36, 36)));
    targetMap.attributionControl.addAttribution('<a href="https://geo.datav.aliyun.com/areas_v3/bound/440606.json" target="_blank" rel="noreferrer">顺德区界：DataV · 示意</a>');
    const legend = L.control({position: "topleft"});
    legend.onAdd = () => {
      const element = L.DomUtil.create("div", "boundary-legend");
      element.innerHTML = '<span></span>顺德区<small>区外已隐藏 · 点圆圈放大</small>';
      return element;
    };
    legend.addTo(targetMap);
    targetMap.getContainer().dataset.boundary = "shunde";
    if (mapFocusId) focusShundePoint();
    else fitAll();
  } catch (error) {
    if (map !== targetMap) return;
    targetMap.setMaxBounds([[22.65, 113.00], [23.04, 113.41]]);
    document.querySelector("#mapNoteText").textContent = "区界暂未加载 · 已限制在顺德附近";
    if (mapFocusId) focusShundePoint();
    console.warn("顺德区界暂未加载", error);
  }
}

function focusShundePoint() {
  const place = places.find(place => place.id === mapFocusId && place.city === "顺德");
  mapFocusId = null;
  if (!place || !map) return;
  currentArea = "全区";
  currentFilter = "全部";
  renderAreaControls();
  renderCards();
  selectedShundeId = place.id;
  map.setView([place.lat, place.lng], 17);
  refreshShundeMarkers();
  markers.get(place.id)?.openPopup();
}

function refreshShundeMarkers() {
  if (!map || currentCity !== "顺德") return;
  shundeClusterLayers.forEach(layer => map.removeLayer(layer));
  shundeClusterLayers = [];
  const visible = places.filter(place => matchesPlace(place) && hasMapPoint(place));
  const groups = [];
  // Group by screen distance instead of shifting the real coordinates.
  visible.forEach(place => {
    const point = map.project([place.lat, place.lng], map.getZoom());
    const group = map.getZoom() < 17 && place.id !== selectedShundeId
      ? groups.find(group => !group.selected && group.point.distanceTo(point) < (map.getZoom() < 14 ? 65 : 42)) : null;
    if (group) group.places.push(place);
    else groups.push({point, places: [place], selected: place.id === selectedShundeId});
  });
  const singles = new Set(groups.filter(group => group.places.length === 1).map(group => group.places[0].id));
  markers.forEach((marker, id) => { if (!singles.has(id) && map.hasLayer(marker)) map.removeLayer(marker); });
  groups.forEach(group => {
    if (group.places.length === 1) {
      const place = group.places[0];
      const marker = markers.get(place.id);
      if (!map.hasLayer(marker)) marker.addTo(map);
      marker.getElement()?.classList.toggle("active", selectedShundeId === place.id);
      return;
    }
    const bounds = L.latLngBounds(group.places.map(place => [place.lat, place.lng]));
    const label = `${group.places.length} 个相邻地点，点击展开`;
    const cluster = L.marker(bounds.getCenter(), {title: label, icon: L.divIcon({className: "place-cluster", html: `<span>${group.places.length}</span>`, iconSize: [44, 44], iconAnchor: [22, 22]})}).addTo(map);
    cluster.bindTooltip(label);
    cluster.on("click", () => map.fitBounds(bounds, {padding: [65, 65], maxZoom: 18}));
    shundeClusterLayers.push(cluster);
  });
  // Keep names hidden in overview; at street scale only show non-overlapping labels.
  const occupied = [];
  visible.forEach(place => {
    const element = markers.get(place.id)?.getElement();
    if (!element || !map.hasLayer(markers.get(place.id))) return;
    const label = element.querySelector(".pin-label");
    label.classList.remove("show-name");
    if (map.getZoom() < 15) return;
    const point = map.latLngToContainerPoint([place.lat, place.lng]);
    const width = Math.min(220, place.name.length * 11 + 16);
    const rect = {left: point.x - width / 2, right: point.x + width / 2, top: point.y + 15, bottom: point.y + 40};
    if (!occupied.some(other => rect.left < other.right && rect.right > other.left && rect.top < other.bottom && rect.bottom > other.top)) {
      label.classList.add("show-name");
      occupied.push(rect);
    }
  });
}
