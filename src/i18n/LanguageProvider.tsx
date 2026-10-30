"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { dictionaries, productsGu, reviewsGu, type Dict, type Lang } from "./translations";
import type { Product } from "@/data/products";
import type { Review } from "@/data/reviews";

const STORAGE_KEY = "sd-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  /** Translate a data label (subcategory, size, hours, gallery text) – falls back to the original. */
  tr: (group: "sub" | "sizeNames" | "hours" | "galleryCats" | "galleryTitles", key: string) => string;
  product: (p: Product) => Product;
  review: (r: Review) => Review;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const listeners = new Set<() => void>();

function readLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "gu") return saved;
  } catch {}
  return "en";
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render use "en"; the saved choice is applied right after hydration.
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    listeners.forEach((cb) => cb());
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const t = dictionaries[lang];
    return {
      lang,
      setLang,
      t,
      tr: (group, key) => t[group][key] ?? key,
      product: (p) => (lang === "gu" && productsGu[p.id] ? { ...p, ...productsGu[p.id] } : p),
      review: (r) => (lang === "gu" && reviewsGu[r.id] ? { ...r, ...reviewsGu[r.id] } : r),
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
