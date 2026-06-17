export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Rahul Patel",
    rating: 5,
    date: "March 2024",
    text: "Absolutely stunning sherwani rental experience! The quality was top-notch and the fitting was perfect. My wedding photos look incredible thanks to Shyam Dresswala. Highly recommend!",
    avatar: "RP",
  },
  {
    id: "r2",
    name: "Priya Shah",
    rating: 5,
    date: "February 2024",
    text: "Rented a beautiful Chaniya Choli for Navratri. The fabric quality was amazing and everyone kept asking where I got it from. Will definitely visit again for the wedding season!",
    avatar: "PS",
  },
  {
    id: "r3",
    name: "Amit Desai",
    rating: 5,
    date: "January 2024",
    text: "Best rental shop in Ahmedabad! The collection is huge and the staff is very helpful. Got a Jodhpuri suit for a corporate event and received so many compliments. Great service!",
    avatar: "AD",
  },
  {
    id: "r4",
    name: "Meera Joshi",
    rating: 5,
    date: "December 2023",
    text: "Took a bridal lehenga on rent and it was beyond my expectations. The zari work and embroidery were exquisite. The price was very reasonable compared to buying. Very happy!",
    avatar: "MJ",
  },
  {
    id: "r5",
    name: "Deepak Mehta",
    rating: 4,
    date: "November 2023",
    text: "Good collection of men's sherwanis and suits. Prices are very affordable and the quality is excellent for rental wear. Staff was cooperative and helped with last-minute alterations.",
    avatar: "DM",
  },
  {
    id: "r6",
    name: "Sneha Trivedi",
    rating: 5,
    date: "October 2023",
    text: "Wonderful experience renting a gown for my cousin's reception. The outfit was clean, well-maintained and looked brand new. Will definitely recommend Shyam Dresswala to family and friends!",
    avatar: "ST",
  },
];

export const overallRating = {
  score: 4.8,
  total: 248,
  reviewUrl: "https://g.page/shyamdresswala/review",
};
