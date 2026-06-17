"use client";

import { motion } from "framer-motion";
import { Star, Tag, Package, Ruler, Sparkles, HeadphonesIcon } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
  {
    Icon: Star,
    title: "Premium Quality",
    desc: "Each outfit is carefully selected and maintained to the highest quality standards for an impeccable look.",
  },
  {
    Icon: Tag,
    title: "Affordable Rental Price",
    desc: "Experience luxury fashion without the luxury price tag. Our rentals save you up to 90% vs buying.",
  },
  {
    Icon: Package,
    title: "Large Collection",
    desc: "With 500+ outfits across men's, women's, and accessories — you'll always find your perfect match.",
  },
  {
    Icon: Ruler,
    title: "Perfect Fitting",
    desc: "We offer alterations and fitting services to ensure every outfit fits you flawlessly on your special day.",
  },
  {
    Icon: Sparkles,
    title: "Latest Designs",
    desc: "Our collection is updated seasonally with the latest bridal, festive, and reception wear trends.",
  },
  {
    Icon: HeadphonesIcon,
    title: "Customer Support",
    desc: "Our dedicated team is available 7 days a week to assist you in finding the perfect outfit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#5b0e2d" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Why Us"
          title="Why Choose Shyam Dresswala?"
          subtitle="We blend quality, affordability, and style to make your special occasion truly unforgettable."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border transition-all"
              style={{
                backgroundColor: "rgba(255,248,240,0.06)",
                borderColor: "rgba(212,175,55,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(212,175,55,0.15)" }}
              >
                <feature.Icon size={22} style={{ color: "#d4af37" }} />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,248,240,0.65)" }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
