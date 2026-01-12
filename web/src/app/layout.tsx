import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://knh.nz'),
  alternates: {
    canonical: 'https://knh.nz',
  },
  title: {
    default: "Kate Henris | Bespoke Hand-Painted Wallpapers",
    template: "%s | Kate Henris"
  },
  description: "Exquisite hand-painted wallpapers for the discerning few. Kate Henris creates bespoke, high-end wall coverings using silk, gold leaf, and traditional artistry.",
  keywords: ["hand-painted wallpaper", "bespoke wallpaper", "luxury wall coverings", "silk wallpaper", "gold leaf wallpaper", "mural art", "high-end interior design", "New Zealand luxury"],
  authors: [{ name: "Kate Henris" }],
  creator: "Kate Henris",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://knh.nz",
    title: "Kate Henris | The Art of Living",
    description: "Transforming residences into living galleries with exquisite hand-painted wallpapers.",
    siteName: "Kate Henris",
    images: [
      {
        url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Kate Henris Luxury Wallpaper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kate Henris | Bespoke Hand-Painted Wallpapers",
    description: "Exquisite hand-painted wallpapers for the discerning few.",
    images: ["https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kate Henris",
    url: "https://knh.nz",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kate Henris",
    url: "https://knh.nz",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
