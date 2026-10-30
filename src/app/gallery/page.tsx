"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Groom Collection",
  "Bride Collection",
  "Couple Collection",
  "Family Collection",
  "Traditional Collection",
];

const galleryItems = [
  // Groom Collection
  { id: 1, category: "Groom Collection", src: "/products/m-sh-1.png", title: "Royal Sherwani Groom" },
  { id: 2, category: "Groom Collection", src: "/products/m-jo-1.png", title: "Ivory Jodhpuri Groom" },
  { id: 3, category: "Groom Collection", src: "/products/m-su-1.png", title: "Navy Suit Groom" },
  { id: 4, category: "Groom Collection", src: "/products/m-sh-2.png", title: "Classic Sherwani" },
  // Bride Collection
  { id: 5, category: "Bride Collection", src: "/products/w-le-1.png", title: "Bridal Lehenga" },
  { id: 6, category: "Bride Collection", src: "/products/w-cc-1.png", title: "Red Chaniya Choli" },
  { id: 7, category: "Bride Collection", src: "/products/w-go-1.png", title: "Royal Blue Gown" },
  // Couple Collection
  { id: 8, category: "Couple Collection", src: "/products/w-le-1.png", title: "Wedding Couple" },
  { id: 9, category: "Couple Collection", src: "/products/m-su-3.png", title: "Reception Couple" },
  { id: 10, category: "Couple Collection", src: "/products/w-sa-1.png", title: "Traditional Couple" },
  // Family Collection
  { id: 11, category: "Family Collection", src: "/products/m-sh-3.png", title: "Wedding Family" },
  { id: 12, category: "Family Collection", src: "/products/w-le-2.png", title: "Festive Family" },
  { id: 13, category: "Family Collection", src: "/products/m-ko-1.png", title: "Family Celebration" },
  // Traditional Collection
  { id: 14, category: "Traditional Collection", src: "/products/w-cc-2.png", title: "Navratri Chaniya" },
  { id: 15, category: "Traditional Collection", src: "/products/w-cc-3.png", title: "Garba Night" },
  { id: 16, category: "Traditional Collection", src: "/products/m-kp-3.png", title: "Diwali Kurta" },
  { id: 17, category: "Traditional Collection", src: "/products/w-sa-2.png", title: "Traditional Saree" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      {/* Page header */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-14 mb-10"
        style={{ background: "linear-gradient(135deg, #3d0920, #7a1240)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
            style={{ color: "#d4af37" }}
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(255,248,240,0.65)" }}
          >
            Real customers, real moments — see how our outfits make every occasion magical.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-8 sm:mb-10 sm:justify-center overflow-x-auto sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shrink-0"
              style={
                activeCategory === cat
                  ? { backgroundColor: "#5b0e2d", color: "#d4af37" }
                  : { backgroundColor: "white", color: "#5b0e2d", border: "1px solid rgba(91,14,45,0.2)" }
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="break-inside-avoid mb-3 sm:mb-4 rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={750}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(61,9,32,0.8), transparent)" }}>
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md max-h-[90vh] w-full rounded-2xl overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={600}
                height={750}
                className="w-full h-auto"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(61,9,32,0.9), transparent)" }}
              >
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
                >
                  {selectedImage.title}
                </p>
                <p className="text-sm" style={{ color: "#d4af37" }}>
                  {selectedImage.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
