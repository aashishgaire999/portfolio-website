"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { heroWords, heroFocus, profile, stats } from "@/data/portfolio";
import { easeOut, fadeUp, stagger } from "@/lib/motion";
import { useResume } from "@/components/ResumeModal";

const HeroVisual = dynamic(() => import("@/components/HeroVisual"), { ssr: false });

export default function Hero() {
  const { open: openResume } = useResume();

  return (
    <section className="min-h-[82vh] flex flex-col justify-center py-10 lg:py-16 mb-4">
      <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="hero-eyebrow font-mono text-xs tracking-widest uppercase mb-5 leading-relaxed"
          >
            Marshall, MN USA
          </motion.p>

          <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] tracking-[-0.02em] max-w-3xl mb-6">
            {heroWords.map((word, i) => {
              if (word.href) {
                return (
                  <motion.a
                    key={i}
                    href={word.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.5, ease: easeOut }}
                    className="word word-muted hero-link-word underline decoration-black/15 underline-offset-4"
                  >
                    {word.text}{" "}
                  </motion.a>
                );
              }
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.5, ease: easeOut }}
                  className={`word ${word.bold ? "word-bold" : "word-muted"}`}
                >
                  {word.text}{" "}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: easeOut }}
            className="text-[15px] text-black/45 leading-relaxed max-w-lg mb-5"
          >
            {profile.tagline} Co-founder of{" "}
            <a href={profile.website} className="text-black/70 hover:text-[#2dd4bf] transition-colors">
              Codyza
            </a>
            .
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger(0.06)}
            className="flex flex-wrap items-center gap-2 mb-7"
          >
            <motion.span variants={fadeUp} className="hero-focus-label">
              Core stack
            </motion.span>
            {heroFocus.map((item) => (
              <motion.span
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: easeOut }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="hero-focus-chip"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease: easeOut }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost"
            >
              Get in Touch
            </motion.a>
            <motion.button
              type="button"
              onClick={openResume}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost"
            >
              Résumé
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.07)}
            className="hero-stats-bar grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOut }}
                whileHover={{ y: -2 }}
                className="hero-stat"
              >
                <div className="font-mono text-xl font-semibold text-black/85">{s.value}</div>
                <div className="text-[11px] text-black/35 mt-0.5 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: easeOut }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
