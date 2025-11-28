import {
  ArrowRight,
  Database,
  FolderOpen,
  Key,
  Zap,
  Brain,
  BarChart,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Auth",
    description: "Email, OAuth, JWT out-of-the-box — no setup required.",
    icon: Key,
  },
  {
    title: "PostgreSQL",
    description: "Global-ready SQL via Hyperdrive or native connection.",
    icon: Database,
  },
  {
    title: "File Storage",
    description: "Cloudflare R2-backed object storage with zero egress costs.",
    icon: FolderOpen,
  },
  {
    title: "Functions",
    description: "Global compute via Workers, zero cold starts, <60ms latency.",
    icon: Zap,
  },
  {
    title: "Memory",
    description: "Per-user/session scoped durable memory via Durable Objects.",
    icon: Brain,
  },
  {
    title: "Observability",
    description: "Tracing, cost, usage, and failure introspection built-in.",
    icon: BarChart,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl"> EdgeBase — Future-Ready Fully Managed Backend Platform
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl"> 
            <span className="text-lg md:text-xl lg:text-2xl">
              Zero servers. Zero DevOps. Zero cold starts.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <div className="flex items-center gap-2">
              <Button asChild>
                <a href="/signup">
                  Sign up to waitlist
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
                View on GitHub
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
