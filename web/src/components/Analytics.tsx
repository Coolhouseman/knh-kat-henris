"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || "G-MZ0XH7KNV2";
    // Even if no GA4 ID, we might want to fire GTM events, but keeping existing logic for now.
    
    const page_path = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

    // Ensure queueing exists even if gtag.js hasn't loaded yet
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer?.push(args as unknown as Record<string, unknown>);
      });

    if (ga4Id) {
      // GA4 SPA pageviews
      // We manually fire this on every route change, including the first one (because layout has send_page_view: false)
      window.gtag("config", ga4Id, {
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // GTM-friendly pageview event
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });

    // Meta Pixel PageView
    // The <Script> in MetaPixel.tsx handles the initial PageView automatically.
    // We only want to fire subsequent PageViews on route changes.
    if (window.fbq && !isFirstLoad.current) {
      window.fbq('track', 'PageView');
    }

    isFirstLoad.current = false;
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}
