"use client";

import Link, { type LinkProps } from "next/link";
import { useCallback } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  /** GA4 + GTM event name (e.g. "contact_intent") */
  eventName: string;
  /** Extra event params (will be added to dataLayer + gtag) */
  eventParams?: Record<string, unknown>;
  /** Adds a stable attribute for GTM selectors (optional) */
  dataGtm?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedLink({
  eventName,
  eventParams,
  dataGtm,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      // fire our tracking first (still allows navigation)
      const params = { ...(eventParams || {}) };

      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        ((...args: unknown[]) => {
          window.dataLayer?.push(args as unknown as Record<string, unknown>);
        });

      window.gtag("event", eventName, params);
      window.dataLayer.push({ event: eventName, ...params });

      onClick?.(e);
    },
    [eventName, eventParams, onClick]
  );

  return (
    <Link
      {...props}
      onClick={handleClick}
      {...(dataGtm ? { "data-gtm": dataGtm } : {})}
    />
  );
}

