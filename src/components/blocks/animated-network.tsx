"use client";

import { useEffect, useState } from "react";

import { Cloud, Database, Globe, Zap } from "lucide-react";
import { motion } from "motion/react";

export const AnimatedNetwork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const edgeNodes = 5;
  const radius = 100;

  return (
    <div className="relative flex items-center justify-center py-12 md:py-20">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-120 -120 240 240"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Animated connections to edge nodes */}
        {Array.from({ length: edgeNodes }).map((_, index) => {
          const angle = (index * 360) / edgeNodes;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.line
              key={`edge-line-${index}`}
              x1="0"
              y1="0"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className="text-primary/20"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isVisible
                  ? { pathLength: 1, opacity: 0.2 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Connections to side nodes */}
        <motion.line
          x1="0"
          y1="0"
          x2="120"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="text-primary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isVisible
              ? { pathLength: 1, opacity: 0.2 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: "easeOut",
          }}
        />
        <motion.line
          x1="0"
          y1="0"
          x2="-120"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="text-primary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isVisible
              ? { pathLength: 1, opacity: 0.2 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 1.2,
            delay: 0.7,
            ease: "easeOut",
          }}
        />
      </svg>

      {/* Center node - EdgeBase */}
      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-xl border-2 border-primary bg-background shadow-lg md:h-24 md:w-24"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <Cloud className="h-8 w-8 text-primary md:h-10 md:w-10" />
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-primary"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Outer edge nodes */}
      {Array.from({ length: edgeNodes }).map((_, index) => {
        const angle = (index * 360) / edgeNodes;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={`edge-${index}`}
            className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card shadow-sm md:h-14 md:w-14"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Globe className="h-5 w-5 text-muted-foreground md:h-6 md:w-6" />
            <motion.div
              className="absolute inset-0 rounded-lg bg-primary/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        );
      })}

      {/* Side nodes - Database and Functions */}
      <motion.div
        className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 translate-x-8 items-center justify-center rounded-lg border border-border bg-card shadow-sm md:h-14 md:w-14 md:translate-x-12"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
      >
        <Database className="h-5 w-5 text-muted-foreground md:h-6 md:w-6" />
      </motion.div>

      <motion.div
        className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 -translate-x-8 items-center justify-center rounded-lg border border-border bg-card shadow-sm md:h-14 md:w-14 md:-translate-x-12"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.9, type: "spring", stiffness: 200 }}
      >
        <Zap className="h-5 w-5 text-muted-foreground md:h-6 md:w-6" />
      </motion.div>
    </div>
  );
};

