"use client";

import { ArrowRight, Database, Key, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Serverless pricing",
    description: "Pay-per-request pricing with no idle costs. No guessing what.",
    icon: Zap,
    delay: 0,
  },
  {
    title: "Global edge network",
    description: "200+ cities worldwide. Zero cold starts, <60ms latency.",
    icon: Database,
    delay: 0.1,
  },
  {
    title: "Widely compatible",
    description: "One API call, works with any SDK or framework.",
    icon: Key,
    delay: 0.2,
  },
];

export const AnimatedFeatures = () => {
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
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            A complete backend platform with pricing and performance that scales with you
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: feature.delay }}
              >
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="h-5 w-5 text-primary" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

