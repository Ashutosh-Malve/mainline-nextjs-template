import Link from "next/link";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

export const Vision = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Why EdgeBase Exists
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-balance leading-relaxed">
            Frontend engineers want to build production-grade apps—fast—without dealing with fragmented backend infrastructure, 
            poor observability, or edge-incompatible platforms. But today's backend options are either too generic or too AI-specific, 
            lacking balance and modern design.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            CORE DIFFERENTIATORS
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              Edge-Native
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Speed, reliability, no cold starts. Built entirely on edge infrastructure for global performance and massive cost savings.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              Modern Dev Ergonomics
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              SDK + CLI + dashboard. Designed for modern product engineers, not backend specialists. No boilerplate, instant setup.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              Optional AI Stack
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Memory, tools, gateway, observability. Built-in support for AI-enhanced products without requiring additional frameworks or custom code.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              Unified DX
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fullstack without glue code or duct tape. Replaces 5+ tools and lets you ship faster, debug easier, and scale cheaper.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="outline" asChild>
            <Link href="/vision">
              Read the full vision →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

