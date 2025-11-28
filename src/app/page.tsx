import type { Metadata } from "next";

import { Background } from "@/components/background";
import { AnimatedFeatures } from "@/components/blocks/animated-features";
import { BenefitsSection } from "@/components/blocks/benefits-section";
import { CodeExample } from "@/components/blocks/code-example";
import { FAQ } from "@/components/blocks/faq";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ProductCapabilities } from "@/components/blocks/product-capabilities";
import { StatsSection } from "@/components/blocks/stats-section";
import { Testimonials } from "@/components/blocks/testimonials";
import { UseCases } from "@/components/blocks/use-cases";
import { siteConfig, getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EdgeBase",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.description,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Background className="via-muted to-muted/80">
        <Hero />
        <StatsSection />
        <AnimatedFeatures />
        <BenefitsSection />
        <ProductCapabilities />
        <CodeExample />
        <UseCases />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
