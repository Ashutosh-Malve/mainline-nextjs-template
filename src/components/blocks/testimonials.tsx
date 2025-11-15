import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "The future of backend infrastructure is at the edge. EdgeBase is making it accessible to everyone.",
    author: "Our Vision",
    role: "For Developers",
    company: "Global Performance",
  },
  {
    quote: "We believe every developer should have access to enterprise-grade infrastructure without enterprise complexity.",
    author: "Our Mission",
    role: "Zero to Global",
    company: "In Minutes",
  },
  {
    quote: "Building the platform we wish existed: Firebase's simplicity meets Cloudflare's edge network.",
    author: "Why We're Building",
    role: "The Best of",
    company: "Both Worlds",
  },
  {
    quote: "Join us in reimagining what backend infrastructure can be when built for the modern web.",
    author: "Join the Journey",
    role: "Early Access",
    company: "Coming Soon",
  },
  {
    quote: "The future of backend infrastructure is at the edge. EdgeBase is making it accessible to everyone.",
    author: "Our Vision",
    role: "For Developers",
    company: "Global Performance",
  },
  {
    quote: "We believe every developer should have access to enterprise-grade infrastructure without enterprise complexity.",
    author: "Our Mission",
    role: "Zero to Global",
    company: "In Minutes",
  },
  {
    quote: "Building the platform we wish existed: Firebase's simplicity meets Cloudflare's edge network.",
    author: "Why We're Building",
    role: "The Best of",
    company: "Both Worlds",
  },
  {
    quote: "Join us in reimagining what backend infrastructure can be when built for the modern web.",
    author: "Join the Journey",
    role: "Early Access",
    company: "Coming Soon",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Built for ambitious builders
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              EdgeBase is designed for teams who want to build fast, scale globally, and own their infrastructure. 
              Whether you're an indie builder shipping your first product or a team scaling beyond Firebase, 
              we're building the platform you need.
            </p>
            <Button variant="outline" className="shadow-md" asChild>
              <a href="/contact">
                Join the Waitlist <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-primary font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
