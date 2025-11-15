import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Edge Performance",
    description: "Sub-200ms latency worldwide with automatic scaling and zero cold starts.",
    icon: CircleDot,
  },
  {
    title: "Fully Managed",
    description: "We handle provisioning, scaling, caching, and replication automatically.",
    icon: Blend,
  },
  {
    title: "Real-Time Data",
    description: "Instant sync for users across continents with Firestore-style API.",
    icon: Diamond,
  },
  {
    title: "Zero Egress Cost",
    description: "Upload, serve, and stream globally with zero egress fees.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            EdgeBase —<br className="hidden lg:block" />
            Fully Managed Backend
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Real-time data, auth, storage, and functions — built entirely on Cloudflare's edge network.
            <br />
            <span className="text-lg md:text-xl lg:text-2xl">
              Zero servers. Zero DevOps. Zero vendor lock-in.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <div className="flex items-center gap-2">
              <Button asChild>
                <a href="/signup">
                  🚀 Sign up to waitlist
                </a>
              </Button>
              <Badge variant="comingSoon">Coming Soon</Badge>
            </div>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://github.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                💻 View on GitHub
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
