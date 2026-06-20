"use client";

import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import SceneOverlays from "@/components/SceneOverlays";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import FooterRauno from "@/components/FooterRauno";
import ScrollProgress from "@/components/ScrollProgress";

const AmbientScene = dynamic(() => import("@/components/AmbientScene"), { ssr: false });

export default function PageShell() {
  return (
    <>
      {/* Premium ambient 3D background */}
      <AmbientScene />
      <div className="ambient-glow" aria-hidden />
      <SceneOverlays />
      <ScrollProgress />

      <Sidebar />

      <main className="content-surface min-h-screen pt-20 pb-16">
        <div className="page-inner">
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Projects />
          <FooterRauno />
        </div>
      </main>
    </>
  );
}
