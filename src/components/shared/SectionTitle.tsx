"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3"
          style={{ color: "#d4af37" }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{
          fontFamily: "var(--font-playfair)",
          color: light ? "#fff8f0" : "#5b0e2d",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            color: light ? "rgba(255,248,240,0.75)" : "#333333",
            margin: centered ? "1rem auto 0" : "1rem 0 0",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="mt-5 h-0.5 w-16 rounded-full"
        style={{
          background: "#d4af37",
          margin: centered ? "1.25rem auto 0" : "1.25rem 0 0",
        }}
      />
    </motion.div>
  );
}
