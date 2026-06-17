"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock, ExternalLink } from "lucide-react";
import { business } from "@/data/business";
import { getWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

const contactItems = [
  {
    Icon: Phone,
    title: "Call Us",
    value: business.phone,
    href: getCallUrl(),
    cta: "Call Now",
    external: false,
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    value: business.phone,
    href: getWhatsAppUrl(),
    cta: "Chat Now",
    external: true,
    highlight: true,
  },
  {
    Icon: Mail,
    title: "Email",
    value: business.email,
    href: `mailto:${business.email}`,
    cta: "Send Email",
    external: false,
  },
  {
    Icon: MapPin,
    title: "Visit Store",
    value: business.address,
    href: business.mapUrl,
    cta: "Get Directions",
    external: true,
  },
];

export default function ContactClient() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      {/* Header */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{ background: "linear-gradient(135deg, #3d0920, #5b0e2d)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ color: "#d4af37" }}
          >
            We&apos;d love to hear from you
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,248,240,0.65)" }}
          >
            Visit our store, give us a call, or reach out on WhatsApp — we&apos;re here
            7 days a week to help you find the perfect outfit.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border shadow-sm"
              style={{
                borderColor: item.highlight ? "#d4af37" : "rgba(212,175,55,0.2)",
                boxShadow: item.highlight ? "0 0 0 2px rgba(212,175,55,0.3)" : undefined,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: item.highlight ? "#5b0e2d" : "rgba(91,14,45,0.08)" }}
              >
                <item.Icon size={24} style={{ color: item.highlight ? "#d4af37" : "#5b0e2d" }} />
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
              >
                {item.title}
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "#666" }}>
                {item.value}
              </p>
              <motion.a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={
                  item.highlight
                    ? { backgroundColor: "#5b0e2d", color: "#d4af37" }
                    : { backgroundColor: "rgba(91,14,45,0.08)", color: "#5b0e2d" }
                }
              >
                {item.cta}
                {item.external && <ExternalLink size={13} />}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Business hours + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border shadow-sm"
            style={{ borderColor: "rgba(212,175,55,0.2)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(91,14,45,0.08)" }}
              >
                <Clock size={20} style={{ color: "#5b0e2d" }} />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#5b0e2d" }}
              >
                Working Hours
              </h2>
            </div>

            <div className="space-y-4">
              {business.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: "rgba(212,175,55,0.15)" }}
                >
                  <span className="font-medium text-sm" style={{ color: "#333" }}>
                    {h.days}
                  </span>
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(91,14,45,0.08)", color: "#5b0e2d" }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: "rgba(212,175,55,0.08)" }}>
              <div className="flex gap-3">
                <MapPin size={18} style={{ color: "#d4af37" }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#5b0e2d" }}>
                    {business.name}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {business.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border shadow-sm"
            style={{ borderColor: "rgba(212,175,55,0.2)", minHeight: "400px" }}
          >
            <iframe
              src={business.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shyam Dresswala Location"
            />
          </motion.div>
        </div>

        {/* Quick WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, #5b0e2d, #7a1240)" }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
          >
            Prefer to Chat?
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,248,240,0.7)" }}>
            Send us a WhatsApp message for quick assistance, availability checks, or booking.
          </p>
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
            style={{ backgroundColor: "#25D366", color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
