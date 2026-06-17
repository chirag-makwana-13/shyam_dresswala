import type { Metadata } from "next";
import { Suspense } from "react";
import AccessoriesContent from "./AccessoriesContent";

export const metadata: Metadata = {
  title: "Accessories",
  description: "Rent Safa, Dupatta, Mojdi, Brooch, Pagdi & more accessories from Shyam Dresswala to complete your look.",
};

function PageHeader() {
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 py-14 mb-8"
      style={{ background: "linear-gradient(135deg, #a88b2a, #d4af37, #a88b2a)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.25em] uppercase font-semibold mb-3"
          style={{ color: "#3d0920" }}
        >
          Rental Collection
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "var(--font-playfair)", color: "#3d0920" }}
        >
          Accessories
        </h1>
        <div
          className="mx-auto mt-4"
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #3d0920, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default function AccessoriesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <PageHeader />
      <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
        <AccessoriesContent />
      </Suspense>
    </div>
  );
}
