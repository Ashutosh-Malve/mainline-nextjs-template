import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";
import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "EdgeBase pricing plans. Start free with 100K requests/day, 1GB storage. Scale with Pro and Enterprise plans. All plans include unlimited users, global edge replication, and zero egress cost.",
  alternates: {
    canonical: getCanonicalUrl("/pricing"),
  },
  openGraph: {
    title: "Pricing",
    description:
      "Start free, scale as you grow. All plans include unlimited users, global edge replication, and zero egress cost.",
    url: getCanonicalUrl("/pricing"),
  },
};

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
      <PricingTable />
    </Background>
  );
};

export default Page;
