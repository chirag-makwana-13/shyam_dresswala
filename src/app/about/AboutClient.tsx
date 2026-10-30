"use client";

import { motion } from "framer-motion";
import { Users, Award, Package, Heart, CheckCircle } from "lucide-react";
import Link from "next/link";
import { business } from "@/data/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLang } from "@/i18n/LanguageProvider";

export default function AboutClient() {
  const { t, lang } = useLang();
  const stats = [
    { Icon: Award, value: business.stats.experience, label: t.about.stats.years },
    { Icon: Users, value: business.stats.customers, label: t.about.stats.customers },
    { Icon: Package, value: business.stats.collection, label: t.about.stats.outfits },
    { Icon: Heart, value: business.stats.satisfaction, label: t.about.stats.satisfaction },
  ];
  const missionVision = [
    { ...t.about.mission, icon: "🎯" },
    { ...t.about.vision, icon: "✨" },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      {/* Hero */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-20"
        style={{ background: "linear-gradient(135deg, #3d0920, #5b0e2d, #7a1240)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
            style={{ color: "#d4af37" }}
          >
            {t.about.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,248,240,0.7)" }}
          >
            {t.about.hero}
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-md border"
              style={{ borderColor: "rgba(212,175,55,0.2)" }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: "rgba(91,14,45,0.08)" }}
              >
                <Icon size={22} style={{ color: "#5b0e2d" }} />
              </div>
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
              >
                {value}
              </p>
              <p className="text-sm mt-1" style={{ color: "#666" }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#d4af37" }}
            >
              {t.about.est} {business.established}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
            >
              {t.about.storyTitle}
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#444" }}>
              {t.about.story.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8"
            style={{ backgroundColor: "#5b0e2d" }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#d4af37" }}
            >
              {t.about.commitment}
            </h3>
            <ul className="space-y-4">
              {t.about.values.map((value, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#d4af37" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,248,240,0.8)" }}>
                    {value}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#f5e6d3" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white p-8 rounded-2xl border shadow-sm"
                style={{ borderColor: "rgba(212,175,55,0.2)" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
                >
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
        >
          {t.about.visitTitle}
        </motion.h2>
        <p className="text-base mb-8" style={{ color: "#666" }}>
          {t.about.visitText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold"
            style={{ backgroundColor: "#5b0e2d", color: "#d4af37" }}
          >
            {t.about.getDirections}
          </Link>
          <a
            href={getWhatsAppUrl(undefined, undefined, undefined, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2"
            style={{ borderColor: "#5b0e2d", color: "#5b0e2d" }}
          >
            {t.common.whatsappEnquiry}
          </a>
        </div>
      </div>
    </div>
  );
}
