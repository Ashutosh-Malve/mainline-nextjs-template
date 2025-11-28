import type { Metadata } from "next";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";
import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about EdgeBase - the fully managed backend platform for the edge. Learn about features, pricing, deployment, and more.",
  alternates: {
    canonical: getCanonicalUrl("/faq"),
  },
  openGraph: {
    title: "FAQ",
    description:
      "Frequently asked questions about EdgeBase - the fully managed backend platform for the edge.",
    url: getCanonicalUrl("/faq"),
  },
};

const Page = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes EdgeBase different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EdgeBase is a full backend platform built natively for the edge. You own the data, we manage the runtime. No servers, no DevOps overhead.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to manage servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It's 100% serverless — we deploy your data, logic, and storage across edge infrastructure globally.",
        },
      },
      {
        "@type": "Question",
        name: "Can I self-host?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — EdgeBase is open-core. Run your own or use our managed edge.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Background>
        <FAQ
          className="py-28 text-center lg:pt-44 lg:pb-32"
          className2="max-w-xl lg:grid-cols-1"
          headerTag="h1"
        />
        <DashedLine className="mx-auto max-w-xl" />
        <Testimonials dashedLineClassName="hidden" />
      </Background>
    </>
  );
};

export default Page;
