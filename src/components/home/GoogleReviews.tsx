"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import { reviews, overallRating } from "@/data/reviews";
import { useLang } from "@/i18n/LanguageProvider";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          fill={s <= rating ? "#d4af37" : "transparent"}
          style={{ color: s <= rating ? "#d4af37" : "#ccc" }}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { t, review: localizeReview } = useLang();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#fff8f0" }}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label={t.reviews.label}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle.replace("{total}", String(overallRating.total))}
        />

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #5b0e2d, #7a1240)",
          }}
        >
          <div className="text-center">
            <p
              className="text-6xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#d4af37" }}
            >
              {overallRating.score}
            </p>
            <div className="flex justify-center mt-2 gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill="#d4af37" style={{ color: "#d4af37" }} />
              ))}
            </div>
            <p className="text-sm mt-2" style={{ color: "rgba(255,248,240,0.7)" }}>
              {t.reviews.outOf}
            </p>
          </div>

          <div
            className="w-px h-16 hidden sm:block"
            style={{ backgroundColor: "rgba(212,175,55,0.3)" }}
          />

          <div className="text-center">
            <p
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#fff8f0" }}
            >
              {overallRating.total}+
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,248,240,0.7)" }}>
              {t.reviews.googleReviews}
            </p>
          </div>

          <div
            className="w-px h-16 hidden sm:block"
            style={{ backgroundColor: "rgba(212,175,55,0.3)" }}
          />

          <a
            href={overallRating.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#d4af37", color: "#3d0920" }}
          >
            <ExternalLink size={16} />
            {t.reviews.viewOnGoogle}
          </a>
        </motion.div>

        {/* Review cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map(localizeReview).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border bg-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ borderColor: "rgba(212,175,55,0.2)" }}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ backgroundColor: "#5b0e2d", color: "#d4af37" }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>
                    {review.name}
                  </p>
                  <StarRating rating={review.rating} />
                  <p className="text-xs mt-0.5" style={{ color: "#888" }}>
                    {review.date}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
