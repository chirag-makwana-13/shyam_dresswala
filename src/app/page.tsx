import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GoogleReviews from "@/components/home/GoogleReviews";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <FeaturedCollection />
      <WhyChooseUs />
      <GoogleReviews />
      <ContactCTA />
    </>
  );
}
