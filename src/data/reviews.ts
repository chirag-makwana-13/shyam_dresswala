export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

/*
 * Real reviews copied from the Google Maps listing (newest first).
 * To add one: copy name / stars / date / text exactly as shown on Google,
 * give it the next id ("g2", "g3", …) and add its Gujarati version to
 * `reviewsGu` in src/i18n/translations.ts.
 */
export const reviews: Review[] = [
  {
    id: "g1",
    name: "Gaurang Bagda",
    rating: 5,
    date: "8 months ago",
    text: "Nice collection. Good behaviour. Must visit.",
    avatar: "GB",
  },
];

export const overallRating = {
  score: 4.9,
  total: 76,
  reviewUrl: "https://maps.app.goo.gl/NHhxa4wn6BCZ6RUp8",
};
