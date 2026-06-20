"use client";

import { techMarquee } from "@/data/portfolio";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="tech-marquee-wrap my-6 lg:my-10">
      <div className="tech-marquee-fade-left" aria-hidden />
      <div className="tech-marquee-fade-right" aria-hidden />

      <div className="tech-marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="tech-marquee-item">
            <span className="tech-marquee-dot" aria-hidden />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
