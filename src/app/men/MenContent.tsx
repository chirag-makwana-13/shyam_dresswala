"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ProductCard from "@/components/shared/ProductCard";
import { products, menSubcategories } from "@/data/products";

export default function MenContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  useEffect(() => {
    setActiveCategory(searchParams.get("cat") || "All");
  }, [searchParams]);

  const tabs = ["All", ...menSubcategories];
  const menProducts = products.filter((p) => p.gender === "men");
  const filtered =
    activeCategory === "All"
      ? menProducts
      : menProducts.filter((p) => p.subcategory === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory(tab)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={
              activeCategory === tab
                ? { backgroundColor: "#5b0e2d", color: "#d4af37" }
                : { backgroundColor: "white", color: "#5b0e2d", border: "1px solid rgba(91,14,45,0.2)" }
            }
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-lg" style={{ color: "#888" }}>No products found.</p>
        </div>
      )}
    </div>
  );
}
