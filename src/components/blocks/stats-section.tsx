"use client";

import { Database, Globe, TrendingUp, Zap } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    value: "200+",
    label: "Cities Worldwide",
    description: "Global edge network coverage",
    icon: Globe,
    delay: 0,
  },
  {
    value: "<60ms",
    label: "Latency",
    description: "Average response time",
    icon: Zap,
    delay: 0.1,
  },
  {
    value: "0",
    label: "Cold Starts",
    description: "Always warm, always ready",
    icon: Database,
    delay: 0.2,
  },
  {
    value: "100%",
    label: "Serverless",
    description: "Pay only for what you use",
    icon: TrendingUp,
    delay: 0.3,
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for Global Scale
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            Performance metrics that matter for modern applications
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: stat.delay }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="mb-1 text-sm font-semibold">{stat.label}</div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

