import type { Metadata } from "next";

import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EdgeBase Privacy Policy. Learn how we collect, use, and protect your data when using our fully managed backend platform.",
  alternates: {
    canonical: getCanonicalUrl("/privacy"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

