import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shyam Dresswala — 20+ years of premium rental fashion in Ahmedabad, Gujarat.",
};

export default function AboutPage() {
  return <AboutClient />;
}
