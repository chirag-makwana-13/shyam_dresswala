"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const waUrl = getWhatsAppUrl(product.name, undefined, product.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5] bg-cream-dark">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        </motion.div>

        {/* Subcategory badge */}
        <div
          className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold"
          style={{ backgroundColor: "#5b0e2d", color: "#d4af37" }}
        >
          {product.subcategory}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <h3
          className="text-sm sm:text-lg font-semibold leading-snug mb-1 sm:mb-2 line-clamp-2"
          style={{ fontFamily: "var(--font-playfair)", color: "#1a1a1a" }}
        >
          {product.name}
        </h3>

        <p className="hidden sm:block text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2 flex-1" style={{ color: "#555" }}>
          {product.description}
        </p>

        {/* Sizes */}
        {product.sizes.length > 0 && (
          <div className="mb-3 sm:mb-4 hidden sm:block">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#888" }}>
              Sizes:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.sizes.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded border"
                  style={{ borderColor: "#d4af37", color: "#5b0e2d" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-auto pt-2 sm:pt-3 border-t" style={{ borderColor: "#f5e6d3" }}>
          <div>
            <span className="text-base sm:text-xl font-bold" style={{ color: "#5b0e2d" }}>
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs ml-1" style={{ color: "#888" }}>
              / event
            </span>
          </div>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors"
            style={{ backgroundColor: "#25D366", color: "white" }}
          >
            <MessageCircle size={15} />
            Enquire
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
