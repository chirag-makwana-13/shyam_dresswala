import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shyam Dresswala. Visit our store, call us, or WhatsApp for rental enquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
