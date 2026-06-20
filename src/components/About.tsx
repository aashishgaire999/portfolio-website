"use client";

import { motion } from "framer-motion";
import { profile, skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { easeOut, fadeUp, stagger } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-28">
      <SectionHeading num="01" title="About Me" />

      <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#2dd4bf]/25 to-[#818cf8]/15 blur-sm" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative w-20 h-20 rounded-xl border border-black/[0.08] shadow-sm object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="space-y-4 text-[15px] text-black/45 leading-relaxed"
        >
          <p>{profile.bio}</p>
          {profile.longBio.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-black/30 uppercase tracking-widest mb-4"
        >
          Tech Stack
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.07)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: easeOut }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="skill-card p-4 rounded-lg"
            >
              <p className="font-mono text-[11px] text-[#2dd4bf] mb-2">{group.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="text-xs text-black/50">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
