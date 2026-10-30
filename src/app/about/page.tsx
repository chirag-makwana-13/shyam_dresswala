import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shyam Dresswala — 7+ years of premium rental fashion in Jamnagar, Gujarat.",
};

export default function AboutPage() {
  return <AboutClient />;
}
