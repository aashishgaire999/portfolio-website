"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectPreviewProps = {
  name: string;
  label: string;
  year: string;
  href: string;
  previewUrl?: string;
  previewImage?: string;
  gradient: string;
};

function screenshotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`;
}

export default function ProjectPreview({
  name,
  label,
  year,
  href,
  previewUrl,
  previewImage,
  gradient,
}: ProjectPreviewProps) {
  const [imgError, setImgError] = useState(false);

  const siteUrl = previewUrl ?? (href.includes("github.com") ? null : href);
  const imageSrc =
    previewImage ?? (siteUrl && !imgError ? screenshotUrl(siteUrl) : null);

  return (
    <div className="project-preview relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[120px] border border-black/[0.08] bg-[#f5f5f5] shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#ebebeb] border-b border-black/[0.06] shrink-0 z-10 relative">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-1 flex-1 truncate font-mono text-[8px] text-black/30 px-2 py-0.5 bg-white/80 rounded">
          {siteUrl?.replace(/^https?:\/\//, "") ?? name.toLowerCase()}
        </span>
      </div>

      {/* Preview body */}
      <div className="relative overflow-hidden bg-white min-h-[100px] md:min-h-[140px] flex-1">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name} website preview`}
            fill
            unoptimized
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            sizes="200px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: gradient }}
          >
            <span className="text-white/90 font-medium text-sm">{name}</span>
            <span className="text-white/40 text-[10px] font-mono mt-1 uppercase tracking-wider">
              {label}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <span className="absolute top-8 left-2 font-mono text-[10px] text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded z-10">
        {year}
      </span>
    </div>
  );
}
