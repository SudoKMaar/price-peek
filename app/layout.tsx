import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ppeek.vercel.app"),
  title: "Price Peek",
  description:
    "The best way to track prices and save money on your favorite products.",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
    "Amazon",
    "Price Peek",
    "Abhishek KMaar",
    "Abhishek Kumar",
    "KMaar",
    "KMaar Miscellaneous Studio",
    "ppeek",
    "Price Tracker",
    "Real-Time",
    "Web Scrapper",
    "Price Drop",
    "Save Money",
    "Discount Alerts",
    "Price History",
    "Best Deals",
    "Online Shopping",
    "E-commerce",
    "Bargain Hunting",
    "Price Comparison",
    "Deal Tracker",
    "Savings",
    "Budget Shopping",
    "Online Deals",
    "Price Monitor",
    "Sale Alerts",
    "Price Reduction",
    "Lowest Price",
    "Price Change",
    "Amazon Sale",
    "Amazon Discount",
    "Price Alert App",
    "Amazon Deals",
    "Track Amazon Prices",
    "Amazon Bargains",
    "Save on Amazon",
    "Amazon Savings",
    "Amazon Price History",
    "Amazon Price Drop Alert",
    "Amazon Price Checker",
    "Amazon Discount Finder",
    "Amazon Deal Alert",
    "Amazon Price Tracking Website",
    "Amazon Price Trend",
    "Amazon Price Watch",
    "Amazon Price Monitor",
    "Amazon Price Alert Service",
    "Amazon Price Comparison Tool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
