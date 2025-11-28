import { DashedLine } from "@/components/dashed-line";

export function VisionHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The EdgeBase Vision
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Future-Ready Fully Managed Backend Platform
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            EdgeBase is a fully managed backend for modern apps — fast to build, scalable by design, 
            and built on edge-native primitives. It replaces 5+ tools and lets you ship faster, debug easier, 
            and scale cheaper.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                Edge-Native
              </div>
              <div className="text-muted-foreground">Speed, reliability, no cold starts</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                Unified DX
              </div>
              <div className="text-muted-foreground">No glue code or duct tape</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                Optional AI Stack
              </div>
              <div className="text-muted-foreground">Memory, tools, gateway built-in</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

