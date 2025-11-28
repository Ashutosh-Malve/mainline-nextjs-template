import type { Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";
import { siteConfig, getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with EdgeBase. Have questions about our fully managed backend platform? Contact us for support, partnerships, or general inquiries.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with EdgeBase. Have questions about our fully managed backend platform?",
    url: getCanonicalUrl("/contact"),
  },
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
