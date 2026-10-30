"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLang } from "@/i18n/LanguageProvider";
import { business } from "@/data/business";

export default function HeroBanner() {
  const { t, lang } = useLang();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3d0920 0%, #5b0e2d 40%, #7a1240 70%, #3d0920 100%)",
      }}
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #d4af37 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #d4af37 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Gold border lines */}
      <div className="absolute inset-8 md:inset-12 border pointer-events-none hidden md:block" style={{ borderColor: "rgba(212,175,55,0.2)", borderRadius: "2px" }} />
      <div className="absolute inset-10 md:inset-14 border pointer-events-none hidden md:block" style={{ borderColor: "rgba(212,175,55,0.1)", borderRadius: "2px" }} />

      {/* Floating decorative circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#d4af37" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#d4af37" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-32 md:pt-32 md:pb-36 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
          style={{ color: "#d4af37" }}
        >
          <span className="hidden sm:inline">✦ </span>{t.brand.since} {business.established} · {t.brand.location}<span className="hidden sm:inline"> ✦</span>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
        >
          {t.hero.title1}{" "}
          <span style={{ color: "#d4af37" }}>{t.hero.titleAccent}</span>
          <br />
          {t.hero.title2}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mb-6"
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #d4af37, transparent)",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,248,240,0.75)" }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/men">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base cursor-pointer"
              style={{ backgroundColor: "#d4af37", color: "#3d0920" }}
            >
              {t.hero.browse}
              <ArrowRight size={18} />
            </motion.span>
          </Link>

          <a href={getWhatsAppUrl(undefined, undefined, undefined, lang)} target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 cursor-pointer"
              style={{ borderColor: "rgba(255,248,240,0.5)", color: "#fff8f0" }}
            >
              <MessageCircle size={18} />
              {t.hero.contactUs}
            </motion.span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "7+", label: t.hero.stats.years },
            { value: "500+", label: t.hero.stats.outfits },
            { value: "10K+", label: t.hero.stats.customers },
            { value: "98%", label: t.hero.stats.satisfaction },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#d4af37" }}
              >
                {stat.value}
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,248,240,0.6)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(212,175,55,0.5)" }}
        >
          <div
            className="w-1.5 h-2.5 rounded-full"
            style={{ backgroundColor: "#d4af37" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
