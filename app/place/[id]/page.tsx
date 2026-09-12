import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, MapPin, Navigation, TrainFront } from "lucide-react";
import { places, type Place } from "@/lib/places";

function distanceKm(a: Place, b: Place) {
  const rad = (value: number) => (value * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const value = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function amapUrl(place: Place) {
  return "https://uri.amap.com/marker?position=" + place.lng + "," + place.lat +
    "&name=" + encodeURIComponent(place.name) +
    "&src=shenzhen-trip&coordinate=gaode&callnative=1";
}

export function generateStaticParams() {
  return places.map((place) => ({ id: place.id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const place = places.find((item) => item.id === id);
  return place
    ? { title: place.name + " · 深圳之旅", description: place.summary }
    : { title: "地点未找到 · 深圳之旅" };
}

export default async function PlacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = places.find((item) => item.id === id);
  if (!place) notFound();

  const nearby = places
    .filter((item) => item.id !== place.id)
    .map((item) => ({ place: item, distance: distanceKm(place, item) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4);

  return (
    <main className="place-page">
      <header className="place-page-nav">
        <a href="/"><ArrowLeft /> 返回地图</a>
        <span>深圳之旅 · 2026 秋</span>
      </header>

      <div className="place-page-wrap">
        <section className="place-hero">
          {place.cover ? (
            <figure>
              <img src={place.cover} alt={place.name + "实景"} />
              {place.credit && (
                <figcaption>
                  <a href={place.sourceUrl} target="_blank" rel="noreferrer">
                    {place.credit} · via Wikimedia Commons
                  </a>
                </figcaption>
              )}
            </figure>
          ) : (
            <div className="place-hero-placeholder" data-category={place.category}>
              <MapPin /><span>等待补充你的实拍照片</span>
            </div>
          )}
          <div className="place-hero-copy">
            <div><span className="place-badge">{place.category}</span><span>{place.district}</span></div>
            <h1>{place.name}</h1>
            <p>{place.summary}</p>
          </div>
        </section>

        <section className="place-page-grid">
          <div className="place-main">
            <div className="facts-grid">
              <div><Clock3 /><span>建议停留<strong>{place.duration}</strong></span></div>
              <div><TrainFront /><span>附近交通<strong>{place.metro}</strong></span></div>
              <div><MapPin /><span>推荐时段<strong>{place.bestTime}</strong></span></div>
            </div>

            <section className="detail-section">
              <p className="eyebrow">可以体验</p>
              <div className="highlight-list">
                {place.highlights.map((highlight, index) => (
                  <div key={highlight}>
                    <span>{String(index + 1).padStart(2, "0")}</span><strong>{highlight}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="tip-card">
              <p className="eyebrow">出发前留意</p><p>{place.tips}</p>
            </section>
          </div>

          <aside className="place-side">
            <section>
              <p className="eyebrow">离这里最近</p>
              <div className="nearby-list">
                {nearby.map(({ place: item, distance }) => (
                  <a key={item.id} href={"/place/" + item.id}>
                    <span><strong>{item.name}</strong><small>{item.district}</small></span>
                    <em>约 {distance.toFixed(1)} km</em>
                  </a>
                ))}
              </div>
              <p className="distance-note">以上为直线距离，用于快速判断位置关系。</p>
            </section>
            <a className="ui-button navigation-button" href={amapUrl(place)} target="_blank" rel="noreferrer">
              <Navigation /> 在高德地图中打开
            </a>
          </aside>
        </section>
      </div>
    </main>
  );
}
