"use client";

import { useLang } from "@/i18n/LanguageProvider";

const variants = {
  men: {
    background: "linear-gradient(135deg, #3d0920, #5b0e2d)",
    label: "#d4af37",
    title: "#fff8f0",
    line: "linear-gradient(to right, transparent, #d4af37, transparent)",
  },
  women: {
    background: "linear-gradient(135deg, #8b1a4a, #5b0e2d)",
    label: "#d4af37",
    title: "#fff8f0",
    line: "linear-gradient(to right, transparent, #d4af37, transparent)",
  },
  accessories: {
    background: "linear-gradient(135deg, #a88b2a, #d4af37, #a88b2a)",
    label: "#3d0920",
    title: "#3d0920",
    line: "linear-gradient(to right, transparent, #3d0920, transparent)",
  },
} as const;

export default function CollectionHeader({ variant }: { variant: keyof typeof variants }) {
  const { t } = useLang();
  const v = variants[variant];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-14 mb-8" style={{ background: v.background }}>
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
          style={{ color: v.label }}
        >
          {t.common.rentalCollection}
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "var(--font-playfair)", color: v.title }}
        >
          {t.collection[variant]}
        </h1>
        <div
          className="mx-auto mt-4"
          style={{ width: "60px", height: "2px", background: v.line }}
        />
      </div>
    </div>
  );
}

export function LoadingFallback() {
  const { t } = useLang();
  return <div className="text-center py-20 text-gray-500">{t.common.loading}</div>;
}
