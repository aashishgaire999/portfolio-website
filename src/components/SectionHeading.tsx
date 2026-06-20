"use client";

import { motion } from "framer-motion";
import { easeOut, fadeUp } from "@/lib/motion";

export default function SectionHeading({
  num,
  title,
}: {
  num: string;
  title: string;
}) {
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      variants={fadeUp}
    >
      <span className="section-num">{num}.</span>
      <h2 className="section-title">{title}</h2>
      <motion.span
        className="section-heading-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
      />
    </motion.div>
  );
}
