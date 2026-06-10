import { useEffect, useRef } from "react";

const images = Array.from({ length: 19 }, (_, i) => `${import.meta.env.BASE_URL}carousel/${i + 1}.webp`);
const doubled = [...images, ...images];

export function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const speed = 1.8;

    const step = () => {
      pos += speed;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full py-6 overflow-hidden">
      <div ref={trackRef} className="flex gap-3 will-change-transform" style={{ width: "max-content" }}>
        {doubled.map((src, i) => (
          <div
            key={i}
            className="shrink-0 rounded-2xl overflow-hidden"
            style={{
              width: "clamp(160px, 40vw, 220px)",
              height: "clamp(160px, 40vw, 220px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            }}
          >
            <img
              src={src}
              alt={`ideia ${(i % images.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
