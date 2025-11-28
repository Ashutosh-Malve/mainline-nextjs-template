"use client";

import { ArrowRight, BarChart, MessageSquare, ShoppingCart, Users } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const useCases = [
  {
    title: "Real-time Collaboration",
    description: "Build collaborative apps like Figma, Notion, or Google Docs. Real-time sync, conflict resolution, and presence indicators built-in.",
    icon: Users,
    gradient: "from-blue-500/10 to-cyan-500/10",
    delay: 0,
  },
  {
    title: "E-commerce Platforms",
    description: "Power online stores with real-time inventory, payment processing, and order management. Global edge network ensures fast checkout.",
    icon: ShoppingCart,
    gradient: "from-purple-500/10 to-pink-500/10",
    delay: 0.1,
  },
  {
    title: "Social & Messaging",
    description: "Create chat apps, social networks, and community platforms. Real-time messaging, notifications, and feed updates.",
    icon: MessageSquare,
    gradient: "from-orange-500/10 to-yellow-500/10",
    delay: 0.2,
  },
  {
    title: "Analytics & Dashboards",
    description: "Build real-time analytics platforms and dashboards. Stream data, aggregate metrics, and visualize insights instantly.",
    icon: BarChart,
    gradient: "from-green-500/10 to-emerald-500/10",
    delay: 0.3,
  },
];

export const UseCases = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Built for Modern Applications
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            Power everything from real-time collaboration to global e-commerce platforms
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: useCase.delay }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>

                  <h3 className="mb-3 text-xl font-semibold md:text-2xl">
                    {useCase.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                    {useCase.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="group/btn h-auto p-0 text-primary hover:text-primary/80"
                    asChild
                  >
                    <a href="#">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

