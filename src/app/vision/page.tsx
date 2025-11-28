import type { Metadata } from "next";

import { Background } from "@/components/background";
import { VisionContent } from "@/components/blocks/vision-content";
import { VisionHero } from "@/components/blocks/vision-hero";
import { DashedLine } from "@/components/dashed-line";
import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Learn about EdgeBase's vision for the future of backend infrastructure. Built for modern product teams with edge-native architecture, unified developer experience, and optional AI stack.",
  alternates: {
    canonical: getCanonicalUrl("/vision"),
  },
  openGraph: {
    title: "Vision",
    description:
      "Learn about EdgeBase's vision for the future of backend infrastructure. Built for modern product teams.",
    url: getCanonicalUrl("/vision"),
  },
};

export default function VisionPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <VisionHero />
        <div className="pt-20 lg:pt-24">
          <VisionContent />
        </div>
        <div className="pt-20 lg:pt-24">
          <DashedLine className="container max-w-5xl scale-x-115" />
        </div>
      </div>
    </Background>
  );
}

