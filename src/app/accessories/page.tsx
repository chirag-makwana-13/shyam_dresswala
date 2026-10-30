import type { Metadata } from "next";
import { Suspense } from "react";
import CollectionHeader, { LoadingFallback } from "@/components/shared/CollectionHeader";
import AccessoriesContent from "./AccessoriesContent";

export const metadata: Metadata = {
  title: "Accessories",
  description: "Rent Safa, Dupatta, Mojdi, Brooch, Pagdi & more accessories from Shyam Dresswala to complete your look.",
};

export default function AccessoriesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen" style={{ backgroundColor: "#fff8f0" }}>
      <CollectionHeader variant="accessories" />
      <Suspense fallback={<LoadingFallback />}>
        <AccessoriesContent />
      </Suspense>
    </div>
  );
}
