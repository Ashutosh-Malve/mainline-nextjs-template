import Link from "next/link";

import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:gap-20">
      {/* Text Content */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="The team"
          paragraphs={[
            "EdgeBase is built from the ground up for the edge. Every component is designed to run on edge infrastructure — with zero cold starts, sub-200ms latency worldwide, and automatic scaling.",
            "We're focused on giving developers the simplest path to building global backends. No servers to manage, no DevOps overhead, just deploy and scale.",
            "If you're interested in building the future of edge computing, check out our open roles below.",
          ]}
          ctaButton={{
            href: "/careers",
            text: "View open roles",
          }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "At EdgeBase, we're building the backend platform that developers have been waiting for. EdgeBase gives you simplicity and edge performance without the cost or lock-in.",
            "We're committed to open, portable infrastructure. Your data stays yours, your code stays yours, and you can run it anywhere. When you succeed, we succeed.",
          ]}
        />
      </div>
    </section>
  );
};

export default About;

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
