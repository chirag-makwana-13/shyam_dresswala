"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

interface Props {
  /** "dark" = on the transparent/maroon background, "light" = on cream, "gold" = in the maroon mobile menu */
  tone: "dark" | "light" | "gold";
}

export default function LanguageSwitcher({ tone }: Props) {
  const { lang, setLang, t } = useLang();

  const palette = {
    dark: { border: "rgba(212,175,55,0.5)", text: "rgba(255,248,240,0.85)" },
    light: { border: "rgba(91,14,45,0.25)", text: "#5b0e2d" },
    gold: { border: "rgba(212,175,55,0.5)", text: "rgba(255,248,240,0.85)" },
  }[tone];

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className="inline-flex items-center rounded-full border p-0.5 text-xs font-semibold"
      style={{ borderColor: palette.border }}
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className="px-2.5 py-1 rounded-full transition-colors"
            style={
              active
                ? { backgroundColor: "#d4af37", color: "#3d0920" }
                : { color: palette.text }
            }
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
