"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/data/business";
import { getCallUrl } from "@/lib/whatsapp";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/men", key: "men" },
  { href: "/women", key: "women" },
  { href: "/accessories", key: "accessories" },
  { href: "/gallery", key: "gallery" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor:
            scrolled || !isHome ? "rgba(255,248,240,0.97)" : "transparent",
          backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
          boxShadow:
            scrolled || !isHome ? "0 2px 20px rgba(91,14,45,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "#5b0e2d", color: "#d4af37" }}
              >
                SD
              </div>
              <div className="hidden sm:block">
                <p
                  className="text-lg font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: scrolled || !isHome ? "#5b0e2d" : isHome ? "white" : "#5b0e2d",
                  }}
                >
                  {t.brand.name}
                </p>
                <p className="text-xs" style={{ color: "#d4af37" }}>
                  {t.brand.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                const onLight = scrolled || !isHome;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={{
                      color: active
                        ? onLight
                          ? "#5b0e2d"
                          : "#d4af37"
                        : onLight
                        ? "#333"
                        : "rgba(255,248,240,0.9)",
                      fontWeight: active ? 600 : 500,
                    }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          backgroundColor: onLight ? "rgba(212,175,55,0.22)" : "rgba(212,175,55,0.18)",
                          boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.45)",
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{t.nav[link.key]}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher tone={scrolled || !isHome ? "light" : "dark"} />
              <a
                href={getCallUrl()}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{ backgroundColor: "#5b0e2d", color: "#d4af37" }}
              >
                <Phone size={14} />
                {business.phone}
              </a>

              <button
                className="lg:hidden p-2 rounded-lg"
                style={{ color: scrolled || !isHome ? "#5b0e2d" : "white" }}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={t.common.toggleMenu}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-30 lg:hidden"
            style={{ backgroundColor: "#5b0e2d" }}
          >
            <div className="flex flex-col h-full pt-24 px-8 pb-12">
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 text-2xl font-semibold border-b transition-colors"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          color: active ? "#d4af37" : "rgba(255,248,240,0.85)",
                          borderColor: "rgba(212,175,55,0.2)",
                        }}
                      >
                        {t.nav[link.key]}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 mt-8">
                <a
                  href={getCallUrl()}
                  className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold"
                  style={{ backgroundColor: "#d4af37", color: "#5b0e2d" }}
                >
                  <Phone size={18} />
                  {t.common.callNow}
                </a>
                <p className="text-center text-sm" style={{ color: "rgba(212,175,55,0.7)" }}>
                  {business.phone}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
