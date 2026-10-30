import type { Metadata } from "next";
import { Suspense } from "react";
import CollectionHeader, { LoadingFallback } from "@/components/shared/CollectionHeader";
import WomenContent from "./WomenContent";

export const metadata: Metadata = {
  title: "Women's Collection",
  description: "Explore Shyam Dresswala's premium women's rental collection — Chaniya Choli, Lehenga, Gown, Saree & more.",
};

export default function WomenPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <CollectionHeader variant="women" />
      <Suspense fallback={<LoadingFallback />}>
        <WomenContent />
      </Suspense>
    </div>
  );
}
