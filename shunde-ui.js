// Shunde views share place data, while each page owns one job.
let shundeLabelLines = [];
let selectedShundeId = null;


function renderPageNav() {
  const nav = document.querySelector("#pageNav");
  const links = [["#/shunde", "顺德地图", "map"], ["#/shunde/routes", "两日路线", "routes"], ["#/shunde/foods", "全部美食", "foods"]];
  nav.innerHTML = links.map(([href, label, page]) => `<a href="${href}" ${currentCity === "顺德" && currentPage === page ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  document.title = currentPage === "detail" ? `${places.find(place => location.hash.endsWith('/' + place.id))?.name || "地点详情"} · 旅行地图` : `${currentCity === "顺德" ? links.find(link => link[2] === currentPage)?.[1] : "深圳地图"} · 旅行地图`;
}

function renderMapSearch() {
  const host = document.querySelector("#mapControls");
  host.innerHTML = '<label class="map-search">查找地点<input type="search" id="mapSearch" placeholder="搜索景点、店名或菜品" /></label><p id="mapResultCount" aria-live="polite"></p>';
  host.querySelector("input").value = mapSearch;
  host.querySelector("input").addEventListener("input", event => {
    mapSearch = event.target.value.trim();
    renderCards();
    updateMarkerVisibility();
  });
}

function shortPlaceName(name) {
  return name.replace(/[（(].*?[）)]/g, "").split("·")[0].split(" / ")[0].trim();
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
  app.innerHTML = `<section class="food-page"><header class="food-page-intro"><p class="eyebrow">SHUNDE · FOOD GUIDE</p><h1>顺德，吃什么？</h1><p>全部 ${foodPlaces.length} 个美食地点集中在这里。搜索想吃的菜或门店，再到地图看位置。</p></header>
    <div class="food-tools"><label>搜索门店或菜品<input id="foodSearch" type="search" placeholder="例如：排骨饭、桑拿鸡、早茶" /></label><span id="foodCount" aria-live="polite"></span></div>
    <div id="foodDirectory" class="food-directory"></div>
    <details class="directory-notes"><summary>点餐与行程提醒</summary><p>两个人先问最小份、茶位和等位。粥底火锅、桑拿鸡、煲仔饭可互相替换，不必按榜单连续吃。淡水鱼生不进主路线；需要时选择彻底熟制菜式。介意预制菜时逐道询问制作和备料。</p></details>
    <details class="directory-notes"><summary>榜单依据与来源</summary><p>${escapeHtml(shundeFoodResearch.method)}</p><p>以下保留原有调研资料；本次更新调整页面结构，不新增评论样本。</p><ol>${shundeFoodResearch.sources.map(([name, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(name)}</a></li>`).join("")}</ol></details>
  </section>`;
  const draw = () => {
    const query = document.querySelector("#foodSearch").value.trim().toLowerCase();
    const results = foodPlaces.filter(place => [place.name, place.food, place.summary, place.area].join(" ").toLowerCase().includes(query));
    document.querySelector("#foodCount").textContent = `${results.length} 个地点`;
    document.querySelector("#foodDirectory").innerHTML = results.map(place => {
      const review = shundeFoodResearch.ranking.find(item => item.placeId === place.id);
      return `<article class="food-entry"><div class="food-entry-head"><span class="food-number">${place.foodTopRank ? String(place.foodTopRank).padStart(2, "0") : "·"}</span><div><p>${escapeHtml(place.area)}${place.pendingLocation ? " · 地址片区参考" : ""}</p><h2><a href="#/place/${place.id}">${escapeHtml(place.name)}</a></h2></div></div><p class="food-dishes">${escapeHtml(place.food || place.features || place.summary)}</p>${review ? `<p class="food-verdict">${escapeHtml(review.note)}</p>` : ""}<div class="food-entry-links"><a href="#/place/${place.id}">门店详情 →</a><a href="#/shunde/map/${place.id}">地图定位 ↗</a></div></article>`;
    }).join("") || '<p class="empty-state">没有找到匹配门店，试试其他菜名或店名。</p>';
  };
  document.querySelector("#foodSearch").addEventListener("input", draw);
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
      element.innerHTML = '<span></span>顺德区<small>区外底图已隐藏</small>';
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
  mapSearch = "";
  currentFilter = "全部";
  renderMapSearch();
  renderCards();
  selectedShundeId = place.id;
  map.setView([place.lat, place.lng], 17);
  refreshShundeMarkers();
  markers.get(place.id)?.openPopup();
}

function refreshShundeMarkers() {
  if (!map || currentCity !== "顺德") return;
  shundeLabelLines.forEach(layer => map.removeLayer(layer));
  shundeLabelLines = [];
  const visible = places.filter(place => matchesPlace(place) && hasMapPoint(place));
  const ids = new Set(visible.map(place => place.id));
  markers.forEach((marker, id) => {
    if (ids.has(id) && !map.hasLayer(marker)) marker.addTo(map);
    if (!ids.has(id) && map.hasLayer(marker)) map.removeLayer(marker);
  });
  const size = map.getSize();
  // Keep each real location visible; spread name labels with leader lines.
  const occupied = [{left: 0, right: 160, top: 0, bottom: 65}, {left: size.x - 55, right: size.x, top: 0, bottom: 100}];
  const points = visible.map(place => ({place, point: map.latLngToContainerPoint([place.lat, place.lng])}));
  points.sort((a, b) => Number(b.place.id === selectedShundeId) - Number(a.place.id === selectedShundeId) || (a.place.playTopRank || a.place.foodTopRank || 99) - (b.place.playTopRank || b.place.foodTopRank || 99));
  points.forEach(({place, point}) => {
    const marker = markers.get(place.id);
    const element = marker.getElement();
    if (!element) return;
    element.classList.toggle("active", place.id === selectedShundeId);
    const label = element.querySelector(".pin-label");
    label.classList.remove("show-name");
    label.style.left = "18px";
    label.style.top = "-6px";
    if (point.x < 0 || point.y < 0 || point.x > size.x || point.y > size.y) return;
    const width = Math.min(196, shortPlaceName(place.name).length * 12 + 18);
    const candidates = [[16, -12], [-width - 16, -12], [-width / 2, 18], [-width / 2, -38]];
    for (let distance = 45; distance <= 250; distance += 28) {
      for (const side of [1, -1]) {
        candidates.push([side === 1 ? 18 : -width - 18, distance], [side === 1 ? 18 : -width - 18, -distance - 24]);
        candidates.push([side === 1 ? distance : -width - distance, -12]);
      }
    }
    const candidate = candidates.find(([x,y]) => {
      const rect = {left:point.x+x, right:point.x+x+width, top:point.y+y, bottom:point.y+y+26};
      return rect.left > 6 && rect.right < size.x - 6 && rect.top > 6 && rect.bottom < size.y - 48 && !occupied.some(other => rect.left < other.right+4 && rect.right > other.left-4 && rect.top < other.bottom+3 && rect.bottom > other.top-3);
    });
    if (!candidate) return;
    const [x,y] = candidate;
    occupied.push({left:point.x+x, right:point.x+x+width, top:point.y+y, bottom:point.y+y+26});
    label.style.left = `${x + 7}px`;
    label.style.top = `${y + 7}px`;
    label.classList.add("show-name");
    if (Math.abs(y) > 20 || Math.abs(x) > width + 20 || x > 25) {
      const end = map.containerPointToLatLng([point.x + x + (x < 0 ? width : 0), point.y + y + 13]);
      const line = L.polyline([[place.lat,place.lng], end], {color:place.category === "美食" ? "#a44f35" : "#28708a", weight:1, opacity:.55, interactive:false}).addTo(map);
      shundeLabelLines.push(line);
    }
  });
}
