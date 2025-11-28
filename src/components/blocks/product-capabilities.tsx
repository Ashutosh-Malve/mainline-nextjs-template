"use client";

import { ArrowRight, Database, Key, Search, Zap } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Real-time Database",
    description: "PostgreSQL with global replication and Hyperdrive integration. Execute queries without managing connection pools or capacity planning. Perfect for real-time apps, dashboards, and collaborative tools.",
    icon: Database,
    delay: 0,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Edge Functions",
    description: "Run serverless functions globally with zero cold starts and <60ms latency. Built for APIs, webhooks, and real-time processing without specialized infrastructure.",
    icon: Zap,
    delay: 0.1,
    gradient: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: "Auth & Storage",
    description: "Email, OAuth, JWT authentication out-of-the-box. R2-backed file storage with zero egress costs. Built for user management, file uploads, and content platforms.",
    icon: Key,
    delay: 0.2,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Vector Search",
    description: "Create intelligent search, recommendations, and context-aware features using vector embeddings. Seamlessly integrates with Durable Objects for complete AI workflows.",
    icon: Search,
    delay: 0.3,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

export const ProductCapabilities = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm"
          >
            <span className="text-primary">●</span>
            <span className="text-muted-foreground">EdgeBase</span>
          </motion.div>
          <motion.h2
            className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore a Rich Catalog of Backend Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real-world examples in action
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: capability.delay }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
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
                    {capability.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                    {capability.description}
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

