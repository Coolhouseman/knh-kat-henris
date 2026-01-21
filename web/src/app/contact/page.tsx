import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Begin your bespoke commission. Contact Kate Henris to discuss your vision for hand-painted wallpaper and interior artistry.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Kate Henris",
    description: "Begin your bespoke commission. Contact Kate Henris to discuss your vision for hand-painted wallpaper and interior artistry.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kate Henris",
    description: "Begin your bespoke commission. Contact Kate Henris to discuss your vision for hand-painted wallpaper and interior artistry.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
