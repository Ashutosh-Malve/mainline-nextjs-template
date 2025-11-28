import { Background } from "@/components/background";
import { VisionHero } from "@/components/blocks/vision-hero";
import { VisionContent } from "@/components/blocks/vision-content";
import { DashedLine } from "@/components/dashed-line";

export default function VisionPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <VisionHero />
        <VisionContent />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
        </div>
      </div>
    </Background>
  );
}

