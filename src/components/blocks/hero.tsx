"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { AnimatedNetwork } from "./animated-network";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40">
      <div className="container">
        {/* Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="beta" className="gap-2 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fully Managed Backend Platform</span>
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build Backend Infrastructure
            <br />
            <span className="text-primary">Globally in Minutes</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mb-4 max-w-3xl text-lg leading-relaxed md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            EdgeBase gives you real-time database, authentication, storage, and serverless functions — all running on Cloudflare's global edge network. Zero servers. Zero DevOps. Zero cold starts.
          </motion.p>

          <motion.p
            className="text-muted-foreground mx-auto mb-10 max-w-2xl text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Deploy to 200+ cities worldwide with a single API call. Start building production-ready backends in minutes, not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mb-16 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="text-base" asChild>
              <a href="/signup">
                Start building for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href={siteConfig.github.url}>
                View documentation
              </a>
            </Button>
            <Badge variant="comingSoon" className="ml-2">
              Coming Soon
            </Badge>
          </motion.div>
        </div>

        {/* Animated Network Diagram */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <AnimatedNetwork />
        </motion.div>
      </div>
    </section>
  );
};
