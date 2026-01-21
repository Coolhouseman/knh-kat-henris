import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import { Analytics } from "@/components/Analytics";

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
  title: {
    default: "Kate Henris | Bespoke Hand-Painted Wallpapers",
    template: "%s | Kate Henris"
  },
  description: "Exquisite hand-painted wallpapers for the discerning few. Kate Henris creates bespoke, artisanal designs and high-end wall coverings using silk, gold leaf, and traditional artistry.",
  keywords: [
    "hand-painted wallpaper",
    "hand painted wallpaper",
    "hand-painted wallpapers",
    "hand painted wallpapers",
    "bespoke wallpaper",
    "luxury wall coverings",
    "silk wallpaper",
    "hand-painted fabric",
    "hand painted fabric",
    "hand-painted fabrics",
    "hand painted fabrics",
    "artisanal designs",
    "gold leaf wallpaper",
    "mural art",
    "high-end interior design",
    "Auckland wallpaper",
    "New Zealand wallpaper",
    "Australia wallpaper",
  ],
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-N2RZP23J";
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "G-MZ0XH7KNV2";

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

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kate Henris",
    url: "https://knh.nz",
    telephone: "+64 278877007",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
    areaServed: [
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Australia" },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        {gtmId ? (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}

        {/* GA4 (gtag.js). If you also configure GA4 inside GTM, you can remove this. */}
        {ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}', { send_page_view: false });`,
              }}
            />
          </>
        ) : null}
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {/* Google Tag Manager (noscript) */}
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
