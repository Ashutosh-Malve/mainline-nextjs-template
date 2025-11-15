import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { Vision } from "@/components/blocks/vision";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Vision />
        <Features />
        <ResourceAllocation />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
