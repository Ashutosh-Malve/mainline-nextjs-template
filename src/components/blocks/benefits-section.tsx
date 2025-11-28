"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    title: "Zero Infrastructure Management",
    description: "No servers to provision, configure, or maintain. Focus on building features, not managing infrastructure.",
    icon: CheckCircle2,
  },
  {
    title: "Global by Default",
    description: "Your backend runs in 200+ cities automatically. Users get the same fast experience everywhere.",
    icon: CheckCircle2,
  },
  {
    title: "Real-time Everything",
    description: "Built-in real-time capabilities for databases, functions, and storage. Perfect for collaborative apps.",
    icon: CheckCircle2,
  },
  {
    title: "Cost Effective",
    description: "Pay only for what you use. No idle costs, no minimum commitments. Scale from zero to millions.",
    icon: CheckCircle2,
  },
];

const traditionalPainPoints = [
  "Complex infrastructure setup",
  "Cold start delays",
  "Regional limitations",
  "High operational costs",
];

export const BenefitsSection = () => {
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
            Why Choose EdgeBase?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg">
            Everything you need to build modern backends, without the complexity
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="mb-6 text-xl font-semibold">Traditional Backends</h3>
            <div className="space-y-4">
              {traditionalPainPoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm font-medium">
                <span className="text-primary">EdgeBase eliminates</span> all of these pain points with a single, unified platform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

