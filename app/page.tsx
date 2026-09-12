"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin, Navigation, Route } from "lucide-react";
import { places, type Category, type Place } from "@/lib/places";

const categories: Array<"全部" | Category> = ["全部", "海边自然", "城市地标", "人文艺术", "特色街区"];
const bounds = { minLng: 113.84, maxLng: 114.64, minLat: 22.45, maxLat: 22.69 };

function positionFor(place: Place) {
  return {
    left: ((place.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100,
    top: ((bounds.maxLat - place.lat) / (bounds.maxLat - bounds.minLat)) * 100,
  };
}

function amapUrl(place: Place) {
  return "https://uri.amap.com/marker?position=" + place.lng + "," + place.lat +
    "&name=" + encodeURIComponent(place.name) +
    "&src=shenzhen-trip&coordinate=gaode&callnative=1";
}

declare global {
  interface Window {
    AMap?: any;
    _AMapSecurityConfig?: { serviceHost: string };
  }
}

export default function Home() {
  const [category, setCategory] = useState<"全部" | Category>("全部");
  const [selected, setSelected] = useState<Place>(places[0]);
  const [mapReady, setMapReady] = useState(false);
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markers = useRef<Array<{ marker: any; place: Place }>>([]);

  const visiblePlaces = useMemo(
    () => category === "全部" ? places : places.filter((place) => place.category === category),
    [category],
  );
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_AMAP_KEY;
    if (!key || !mapElement.current) return;
    window._AMapSecurityConfig = { serviceHost: "/api/amap" };
    const script = document.createElement("script");
    script.src = "https://webapi.amap.com/maps?v=2.0&key=" +
      encodeURIComponent(key) + "&plugin=AMap.Scale";
    script.async = true;
    script.onload = () => {
      if (!window.AMap || !mapElement.current) return;
      const map = new window.AMap.Map(mapElement.current, {
        zoom: 10,
        center: [114.09, 22.56],
        viewMode: "2D",
        mapStyle: "amap://styles/whitesmoke",
      });
      mapInstance.current = map;
      markers.current = places.map((place) => {
        const marker = new window.AMap.Marker({
          position: [place.lng, place.lat],
          title: place.name,
          content: '<button class="amap-trip-marker" aria-label="' +
            place.name + '"><span></span></button>',
          offset: new window.AMap.Pixel(-17, -17),
        });
        marker.on("click", () => setSelected(place));
        marker.setMap(map);
        return { marker, place };
      });
      map.setFitView(markers.current.map((item) => item.marker), false, [90, 80, 90, 440], 12);
      setMapReady(true);
    };
    document.head.appendChild(script);
    return () => {
      markers.current = [];
      mapInstance.current?.destroy?.();
      mapInstance.current = null;
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapReady || !mapInstance.current) return;
    markers.current.forEach(({ marker, place }) => {
      marker.setMap(category === "全部" || place.category === category ? mapInstance.current : null);
    });
  }, [category, mapReady]);

  function choose(place: Place) {
    setSelected(place);
    mapInstance.current?.setZoomAndCenter?.(13, [place.lng, place.lat], false, 320);
  }

  return (
    <main className="trip-shell">
      <header className="trip-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true"><MapPin /></span>
          <div><h1>深圳之旅</h1><p>一起看看，哪里值得去</p></div>
        </div>
        <div className="trip-meta">
          <span>{places.length} 个候选地点</span><span className="meta-divider" /><span>2026 · 秋</span>
        </div>
      </header>

      <div className="trip-workspace">
        <aside className="places-panel">
          <div className="panel-intro">
            <p className="eyebrow">地点浏览</p>
            <h2>先感受位置，再决定去哪</h2>
            <p>选择一种场景，地图与地点列表会一起更新。</p>
          </div>
          <div className="category-row" aria-label="地点分类">
            {categories.map((item) => (
              <button key={item}
                className={item === category ? "category-pill active" : "category-pill"}
                onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="places-count">{visiblePlaces.length} 个地点</div>
          <div className="places-list">
            {visiblePlaces.map((place) => (
              <button key={place.id}
                className={selected.id === place.id ? "place-row selected" : "place-row"}
                onClick={() => choose(place)}>
                <span className="place-index">{String(places.indexOf(place) + 1).padStart(2, "0")}</span>
                <span className="place-copy">
                  <strong>{place.name}</strong><small>{place.district} · {place.duration}</small>
                </span>
                <span className="row-arrow">→</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="map-panel" aria-label="深圳地点地图">
          <div ref={mapElement} className={mapReady ? "amap-surface ready" : "amap-surface"} />
          {!mapReady && (
            <div className="map-fallback">
              <span className="water-label">珠江口</span><span className="bay-label">大鹏湾</span>
              <span className="region-label west">深圳西部</span>
              <span className="region-label center">中心城区</span>
              <span className="region-label east">深圳东部</span>
              <div className="city-corridor" />
              {visiblePlaces.map((place) => {
                const position = positionFor(place);
                return (
                  <button key={place.id}
                    className={selected.id === place.id ? "map-pin selected" : "map-pin"}
                    style={{ left: position.left + "%", top: position.top + "%" }}
                    onClick={() => choose(place)} aria-label={place.name}>
                    <span>{places.indexOf(place) + 1}</span><em>{place.name}</em>
                  </button>
                );
              })}
              <div className="preview-note"><Route /><span>位置关系预览 · 接入高德 Key 后显示真实地图</span></div>
            </div>
          )}
          <article className="map-card">
            <div className="map-card-top">
              <span className="place-badge">{selected.category}</span>
              <span>{selected.district}</span>
            </div>
            <h2>{selected.name}</h2><p>{selected.summary}</p>
            <div className="map-card-actions">
              <a className="ui-button" href={"/place/" + selected.id}>查看详情</a>
              <a className="ui-button ui-button-outline" href={amapUrl(selected)} target="_blank" rel="noreferrer">
                <Navigation /> 高德导航
              </a>
            </div>
          </article>
        </section>
      </div>

    </main>
  );
}
