import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bolehdicoba.com"),
  title: "Jasa Digital Marketing Agency - BDD",
  description:
    "BDD Digital Marketing Agency menyediakan solusi Digital Ads,Perfomance Creative,SEO,website development dan community development untuk meningkatkan visibilitas dan penjualan bisnis Anda.",
  keywords: [
    "digital marketing",
    "digital advertising",
    "performance creative",
    "web development",
    "seo",
    "BDD Digital Marketing Agency",
    "Boleh Dicoba Digital",
    "Digital Marketing Agency Indonesia",
  ],
  authors: [
    { name: "BDD Digital Marketing Agency", url: "https://bolehdicoba.com" },
  ],
  alternates: {
    canonical: "https://bolehdicoba.com/",
    languages: {
      "en-US": "https://bolehdicoba.com/",
      "id-ID": "https://bolehdicoba.com/id/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jasa Digital Marketing Agency - BDD",
    description:
      "BDD Digital Marketing Agency menyediakan solusi Digital Ads,Perfomance Creative,SEO,website development dan community development untuk meningkatkan visibilitas dan penjualan bisnis Anda.",
    url: "https://bolehdicoba.com/",
    siteName: "Boleh Dicoba Digital",
    images: [
      {
        url: "https://bolehdicoba.com/wp-content/uploads/2024/03/Frame-770087.png",
        width: 1440,
        height: 724,
        alt: "Boleh Dicoba Digital Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Digital Marketing Agency - BDD",
    description:
      "BDD Digital Marketing Agency menyediakan solusi Digital Ads,Perfomance Creative,SEO,website development dan community development untuk meningkatkan visibilitas dan penjualan bisnis Anda.",
    images: [
      "https://bolehdicoba.com/wp-content/uploads/2024/03/Frame-770087.png",
    ],
  },
  icons: {
    icon: [
      {
        url: "https://bolehdicoba.com/wp-content/uploads/2024/03/Group-81518.png",
        sizes: "32x32",
      },
      {
        url: "https://bolehdicoba.com/wp-content/uploads/2024/03/Group-81518.png",
        sizes: "192x192",
      },
    ],
    apple: "https://bolehdicoba.com/wp-content/uploads/2024/03/Group-81518.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
