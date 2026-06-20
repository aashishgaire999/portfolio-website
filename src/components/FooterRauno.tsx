"use client";

import { motion } from "framer-motion";
import { manifesto, contactLinks, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ContactLinks from "./ContactLinks";
import { easeOut } from "@/lib/motion";

export default function FooterRauno() {
  return (
    <section id="contact" className="py-14 scroll-mt-28 mt-auto">
      <SectionHeading num="04" title="What's Next?" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="text-sm text-black/45 leading-relaxed max-w-xl mb-8"
      >
        Open to internships, freelance work, and full-time opportunities — reach out anytime.
      </motion.p>

      <motion.a
        href={`mailto:${profile.email}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: easeOut, delay: 0.05 }}
        className="footer-cta group"
      >
        <span className="footer-cta-label">Say hello</span>
        <span className="footer-cta-email">
          {profile.email}
          <span className="footer-cta-arrow" aria-hidden>
            ↗
          </span>
        </span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: easeOut, delay: 0.12 }}
        className="max-w-3xl mt-12 mb-12"
      >
        <p className="font-mono text-xs text-black/30 uppercase tracking-widest mb-5">
          Find me on
        </p>
        <ContactLinks links={contactLinks} layout="row" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.16 }}
        className="manifesto max-w-md"
      >
        {manifesto}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        className="footer-bottom"
      >
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-bottom-credit">
          Designed &amp; built with Next.js · Three.js · Framer Motion
        </span>
        <a href="#" className="footer-top-link">
          Back to top ↑
        </a>
      </motion.div>
    </section>
  );
}
