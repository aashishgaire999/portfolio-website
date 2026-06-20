"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { easeOut, fadeUp, stagger } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-28">
      <SectionHeading num="02" title="Where I've Worked" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger(0.08)}
        className="space-y-1"
      >
        {experience.map((job) => (
          <motion.div
            key={job.company + job.period}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: easeOut }}
            whileHover={{ x: 4 }}
            className="experience-row relative"
          >
            <span className="font-mono text-[11px] text-black/30 pt-1 leading-relaxed">{job.period}</span>
            <div>
              <h3 className="text-sm font-medium text-black/85 mb-0.5">
                {job.title}{" "}
                <span className="text-[#2dd4bf]">
                  @{" "}
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <p className="text-sm text-black/40 mb-3 leading-relaxed">{job.description}</p>
              <ul className="space-y-1.5 mb-3">
                {job.bullets.map((b) => (
                  <li key={b} className="text-xs text-black/45 flex gap-2 leading-relaxed">
                    <span className="text-[#2dd4bf]">▹</span>{b}
                  </li>
                ))}
              </ul>
              {job.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        whileHover={{ scale: 1.005 }}
        className="mt-10 p-5 rounded-lg border border-[#2dd4bf]/10 bg-[#2dd4bf]/[0.04] education-card"
      >
        <p className="font-mono text-xs text-[#2dd4bf] mb-1">{education.period}</p>
        <h4 className="text-sm font-medium text-black/85">{education.degree}</h4>
        <p className="text-sm text-black/40 mt-0.5 mb-3">{education.school}</p>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
