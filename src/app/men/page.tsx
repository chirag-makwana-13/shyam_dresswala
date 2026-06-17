import type { Metadata } from "next";
import { Suspense } from "react";
import MenContent from "./MenContent";

export const metadata: Metadata = {
  title: "Men's Collection",
  description: "Explore Shyam Dresswala's premium men's rental collection — Sherwani, Suit, Blazer, Jodhpuri, Koti & Kurta Pajama.",
};

function PageHeader() {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 py-14 mb-8"
      style={{ background: "linear-gradient(135deg, #3d0920, #5b0e2d)" }}
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
          Men&apos;s Collection
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

export default function MenPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <PageHeader />
      <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
        <MenContent />
      </Suspense>
    </div>
  );
}
