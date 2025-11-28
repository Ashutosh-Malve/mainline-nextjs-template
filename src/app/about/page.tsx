import type { Metadata } from "next";

import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Investors } from "@/components/blocks/investors";
import { DashedLine } from "@/components/dashed-line";
import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EdgeBase - a fully managed backend platform built from the ground up for the edge. Zero cold starts, sub-200ms latency worldwide, and automatic scaling.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About",
    description:
      "Learn about EdgeBase - a fully managed backend platform built from the ground up for the edge.",
    url: getCanonicalUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <Investors />
        </div>
      </div>
    </Background>
  );
}
