"use client";

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Up to 100K requests/day, 1GB storage, 1 project",
    features: [
      "Unlimited users",
      "Global edge replication",
      "Zero egress cost",
      "1 project",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$9",
    yearlyPrice: "$9",
    features: [
      "All free plan features and...",
      "Unlimited projects",
      "Higher limits",
      "Triggers & realtime",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      "All Pro plan features and...",
      "SLAs",
      "Private regions",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Start free, scale as you grow. All plans include unlimited users, global edge replication, and zero egress cost.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "Startup"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-foreground font-semibold">{plan.name}</h3>
                    {plan.name !== "Free" && (
                      <Badge variant="comingSoon" className="text-xs">Coming Soon</Badge>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && plan.name !== "Scale" && (
                        <span className="text-muted-foreground">
                          /month
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name === "Free" && (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}
                {plan.name === "Scale" && (
                  <span className="text-muted-foreground text-sm">
                    Contact us for custom pricing
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Pro" ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Sign up to waitlist →" : plan.name === "Scale" ? "Contact Sales" : "Sign up to waitlist"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            All plans include: <span className="text-foreground font-medium">Unlimited users</span>, <span className="text-foreground font-medium">Global edge replication</span>, <span className="text-foreground font-medium">Zero egress cost</span>
          </p>
        </div>
      </div>
    </section>
  );
};
