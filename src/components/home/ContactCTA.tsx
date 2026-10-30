"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business } from "@/data/business";
import { getWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";
import { useLang } from "@/i18n/LanguageProvider";

export default function ContactCTA() {
  const { t, lang, tr } = useLang();
  const actions = [
    {
      Icon: Phone,
      label: t.common.callNow,
      sublabel: business.phone,
      href: getCallUrl(),
      external: false,
      primary: false,
    },
    {
      Icon: MessageCircle,
      label: t.cta.whatsappNow,
      sublabel: t.cta.instantReply,
      href: getWhatsAppUrl(undefined, undefined, undefined, lang),
      external: true,
      primary: true,
    },
    {
      Icon: MapPin,
      label: t.cta.visitStore,
      sublabel: t.brand.location,
      href: business.mapUrl,
      external: true,
      primary: false,
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #d4af37 0%, #a88b2a 50%, #d4af37 100%)",
      }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #5b0e2d 0%, transparent 60%),
                              radial-gradient(circle at 80% 50%, #5b0e2d 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "rgba(61,9,32,0.7)" }}
        >
          {t.cta.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)", color: "#3d0920" }}
        >
          {t.cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base mb-12 max-w-xl mx-auto"
          style={{ color: "rgba(61,9,32,0.75)" }}
        >
          {t.cta.subtitle}
        </motion.p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-1.5 px-8 py-5 rounded-2xl font-semibold transition-all"
              style={
                action.primary
                  ? { backgroundColor: "#3d0920", color: "#d4af37" }
                  : { backgroundColor: "rgba(61,9,32,0.1)", color: "#3d0920", border: "2px solid rgba(61,9,32,0.2)" }
              }
            >
              <action.Icon size={22} />
              <span className="text-base font-bold">{action.label}</span>
              <span className="text-xs opacity-70">{action.sublabel}</span>
            </motion.a>
          ))}
        </div>

        {/* Working hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {business.hours.map((h) => (
            <div key={h.days} className="text-sm" style={{ color: "rgba(61,9,32,0.7)" }}>
              <span className="font-semibold">{tr("hours", h.days)}:</span> {tr("hours", h.time)}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
