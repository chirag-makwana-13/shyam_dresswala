"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/shared/ProductCard";
import { featuredProducts } from "@/data/products";
import { useLang } from "@/i18n/LanguageProvider";

export default function FeaturedCollection() {
  const { t } = useLang();
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f5e6d3" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label={t.featured.label}
          title={t.featured.title}
          subtitle={t.featured.subtitle}
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/men">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all cursor-pointer"
              style={{ borderColor: "#5b0e2d", color: "#5b0e2d" }}
            >
              {t.featured.viewAll}
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
