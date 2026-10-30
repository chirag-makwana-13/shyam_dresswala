"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLang } from "@/i18n/LanguageProvider";

const menCategories = [
  { label: "Sherwani", href: "/men?cat=Sherwani", emoji: "🥻" },
  { label: "Suit", href: "/men?cat=Suit", emoji: "🤵" },
  { label: "Blazer", href: "/men?cat=Blazer", emoji: "👔" },
  { label: "Jodhpuri", href: "/men?cat=Jodhpuri", emoji: "🎩" },
  { label: "Koti", href: "/men?cat=Koti", emoji: "✨" },
  { label: "Kurta Pajama", href: "/men?cat=Kurta+Pajama", emoji: "👘" },
];

const womenCategories = [
  { label: "Chaniya Choli", href: "/women?cat=Chaniya+Choli", emoji: "💃" },
  { label: "Lehenga", href: "/women?cat=Lehenga", emoji: "🌸" },
  { label: "One Piece", href: "/women?cat=One+Piece", emoji: "👗" },
  { label: "Gown", href: "/women?cat=Gown", emoji: "🌟" },
  { label: "Saree", href: "/women?cat=Saree", emoji: "🪷" },
];

const accessoryCategories = [
  { label: "Safa / Turban", href: "/accessories?cat=Safa", emoji: "🎀" },
  { label: "Chunni / Dupatta", href: "/accessories?cat=Dupatta", emoji: "🧣" },
  { label: "Mojdi", href: "/accessories?cat=Mojdi", emoji: "👞" },
  { label: "Brooch", href: "/accessories?cat=Brooch", emoji: "💎" },
  { label: "Pagdi", href: "/accessories?cat=Pagdi", emoji: "🪆" },
];

const sections = [
  {
    key: "men" as const,
    href: "/men",
    categories: menCategories,
    color: "#5b0e2d",
    bg: "rgba(91,14,45,0.06)",
  },
  {
    key: "women" as const,
    href: "/women",
    categories: womenCategories,
    color: "#8b1a4a",
    bg: "rgba(139,26,74,0.06)",
  },
  {
    key: "accessories" as const,
    href: "/accessories",
    categories: accessoryCategories,
    color: "#a88b2a",
    bg: "rgba(168,139,42,0.08)",
  },
];

export default function Categories() {
  const { t, tr } = useLang();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fff8f0" }}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label={t.categories.label}
          title={t.categories.title}
          subtitle={t.categories.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          {sections.map((section, si) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: si * 0.15 }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(212,175,55,0.2)" }}
            >
              {/* Header */}
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{ backgroundColor: section.color }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
                >
                  {t.categories[section.key]}
                </h3>
                <Link
                  href={section.href}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{ backgroundColor: "#d4af37", color: "#3d0920" }}
                >
                  {t.common.viewAll}
                </Link>
              </div>

              {/* Category grid */}
              <div className="p-5 grid grid-cols-2 gap-3">
                {section.categories.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: si * 0.1 + ci * 0.05 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <Link
                      href={cat.href}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all hover:shadow-md"
                      style={{ backgroundColor: section.bg, border: "1px solid rgba(212,175,55,0.15)" }}
                    >
                      <span className="text-2xl">{cat.emoji}</span>
                      <span
                        className="text-sm font-medium leading-tight"
                        style={{ color: section.color }}
                      >
                        {tr("sub", cat.label)}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
