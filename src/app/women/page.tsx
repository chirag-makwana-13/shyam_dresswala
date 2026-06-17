import type { Metadata } from "next";
import { Suspense } from "react";
import WomenContent from "./WomenContent";

export const metadata: Metadata = {
  title: "Women's Collection",
  description: "Explore Shyam Dresswala's premium women's rental collection — Chaniya Choli, Lehenga, Gown, Saree & more.",
};

function PageHeader() {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 py-14 mb-8"
      style={{ background: "linear-gradient(135deg, #8b1a4a, #5b0e2d)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
          style={{ color: "#d4af37" }}
        >
          Rental Collection
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
        >
          Women&apos;s Collection
        </h1>
        <div
          className="mx-auto mt-4"
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #d4af37, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default function WomenPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <PageHeader />
      <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
        <WomenContent />
      </Suspense>
    </div>
  );
}
