import type { Metadata } from "next";
import { Suspense } from "react";
import CollectionHeader, { LoadingFallback } from "@/components/shared/CollectionHeader";
import MenContent from "./MenContent";

export const metadata: Metadata = {
  title: "Men's Collection",
  description: "Explore Shyam Dresswala's premium men's rental collection — Sherwani, Suit, Blazer, Jodhpuri, Koti & Kurta Pajama.",
};

export default function MenPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <CollectionHeader variant="men" />
      <Suspense fallback={<LoadingFallback />}>
        <MenContent />
      </Suspense>
    </div>
  );
}
