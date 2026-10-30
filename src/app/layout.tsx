import type { Metadata } from "next";
import { Playfair_Display, Poppins, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shyam Dresswala | Premium Rental Fashion For Every Occasion",
    template: "%s | Shyam Dresswala",
  },
  description:
    "Shyam Dresswala offers premium rental clothing for weddings, receptions, and traditional events. Explore Sherwani, Lehenga, Chaniya Choli, Gown & more in Jamnagar.",
  keywords: [
    "wedding dress rental Jamnagar",
    "sherwani rental",
    "lehenga rental",
    "chaniya choli rental",
    "groom dress rental",
    "bridal wear rental",
    "Shyam Dresswala",
    "rental fashion Gujarat",
  ],
  authors: [{ name: "Shyam Dresswala" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shyam-dresswala.vercel.app",
    siteName: "Shyam Dresswala",
    title: "Shyam Dresswala | Premium Rental Fashion For Every Occasion",
    description:
      "Premium rental clothing for weddings and traditional events in Jamnagar.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppinsSans.variable} ${notoGujarati.variable}`}
    >
      <body
        style={{ fontFamily: "var(--font-poppins)" }}
        className="bg-cream text-charcoal antialiased"
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
