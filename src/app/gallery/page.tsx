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
  { id: 1, category: "Groom Collection", seed: "groom-1", w: 600, h: 800, title: "Royal Sherwani Groom" },
  { id: 2, category: "Groom Collection", seed: "groom-2", w: 600, h: 750, title: "Ivory Jodhpuri Groom" },
  { id: 3, category: "Groom Collection", seed: "groom-3", w: 600, h: 900, title: "Navy Suit Groom" },
  { id: 4, category: "Groom Collection", seed: "groom-4", w: 600, h: 700, title: "Classic Sherwani" },
  // Bride Collection
  { id: 5, category: "Bride Collection", seed: "bride-1", w: 600, h: 850, title: "Bridal Lehenga" },
  { id: 6, category: "Bride Collection", seed: "bride-2", w: 600, h: 750, title: "Red Chaniya Choli" },
  { id: 7, category: "Bride Collection", seed: "bride-3", w: 600, h: 900, title: "Royal Blue Gown" },
  // Couple Collection
  { id: 8, category: "Couple Collection", seed: "couple-1", w: 800, h: 600, title: "Wedding Couple" },
  { id: 9, category: "Couple Collection", seed: "couple-2", w: 600, h: 750, title: "Reception Couple" },
  { id: 10, category: "Couple Collection", seed: "couple-3", w: 600, h: 800, title: "Traditional Couple" },
  // Family Collection
  { id: 11, category: "Family Collection", seed: "family-1", w: 800, h: 600, title: "Wedding Family" },
  { id: 12, category: "Family Collection", seed: "family-2", w: 600, h: 750, title: "Festive Family" },
  { id: 13, category: "Family Collection", seed: "family-3", w: 600, h: 800, title: "Family Celebration" },
  // Traditional Collection
  { id: 14, category: "Traditional Collection", seed: "trad-1", w: 600, h: 800, title: "Navratri Chaniya" },
  { id: 15, category: "Traditional Collection", seed: "trad-2", w: 600, h: 750, title: "Garba Night" },
  { id: 16, category: "Traditional Collection", seed: "trad-3", w: 600, h: 900, title: "Diwali Kurta" },
  { id: 17, category: "Traditional Collection", seed: "trad-4", w: 600, h: 800, title: "Traditional Saree" },
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
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
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
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="break-inside-avoid mb-4 rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/${item.w}/${item.h}`}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
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
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
            >
              <Image
                src={`https://picsum.photos/seed/${selectedImage.seed}/${selectedImage.w}/${selectedImage.h}`}
                alt={selectedImage.title}
                width={selectedImage.w}
                height={selectedImage.h}
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
