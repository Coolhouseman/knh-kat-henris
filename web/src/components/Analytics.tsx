"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "G-MZ0XH7KNV2";
    if (!ga4Id) return;

    const page_path = `${pathname}${window.location.search || ""}`;

    // Ensure queueing exists even if gtag.js hasn't loaded yet
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer?.push(args as unknown as Record<string, unknown>);
      });

    // GA4 SPA pageviews
    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });

    // Optional: a simple GTM-friendly pageview event
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}

