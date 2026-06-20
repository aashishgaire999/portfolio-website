"use client";

import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import { easeOut, fadeUp, stagger } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-28">
      <SectionHeading num="03" title="Some Things I've Built" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger(0.1)}
        className="space-y-8 mb-12"
      >
        {featuredProjects.map((project) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
            whileHover={{ y: -4 }}
            className="project-card-featured group grid md:grid-cols-[200px_1fr] gap-5 p-4 -mx-4 rounded-xl"
          >
            <ProjectPreview
              name={project.name}
              label={project.label}
              year={project.year}
              href={project.href}
              previewUrl={project.previewUrl}
              previewImage={project.previewImage}
              gradient={project.gradient}
            />
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-base font-medium text-black/85 group-hover:text-[#2dd4bf] transition-colors flex items-center gap-2">
                  {project.name}
                  <span className="project-arrow opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2dd4bf]">
                    ↗
                  </span>
                </h3>
                <span className="font-mono text-[10px] text-black/25 uppercase">{project.role}</span>
              </div>
              <p className="text-sm text-black/45 leading-relaxed mb-3">{project.description}</p>
              <ul className="space-y-1 mb-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs text-black/40 flex gap-2">
                    <span className="text-[#2dd4bf]">▹</span>{h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-black/30 uppercase tracking-widest mb-4"
      >
        Other Projects
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger(0.06)}
        className="grid sm:grid-cols-2 gap-3"
      >
        {otherProjects.map((p) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOut }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="other-project-card group p-4 rounded-lg"
          >
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-sm font-medium text-black/75 group-hover:text-[#2dd4bf] transition-colors">
                {p.name}
              </span>
              <span className="font-mono text-[10px] text-black/25">{p.year}</span>
            </div>
            <p className="text-xs text-black/40 leading-relaxed">{p.description}</p>
            {p.language && (
              <span className="inline-block mt-2 font-mono text-[10px] text-black/25">{p.language}</span>
            )}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
