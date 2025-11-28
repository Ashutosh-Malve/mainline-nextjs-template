"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const codeExample = `import { EdgeBase } from '@edgebase/client';

const client = new EdgeBase({
  apiKey: process.env.EDGEBASE_API_KEY,
});

// Real-time database query
const users = await client.db
  .from('users')
  .select('*')
  .eq('status', 'active')
  .subscribe((data) => {
    console.log('Real-time update:', data);
  });

// Serverless function
const result = await client.functions.invoke('process-payment', {
  amount: 100,
  currency: 'USD',
});

// File upload
const file = await client.storage
  .bucket('uploads')
  .upload('image.jpg', fileData);`;

export const CodeExample = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Developer Experience
              <br />
              <span className="text-primary">That Just Works</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg">
              Get started in minutes with our intuitive SDK. Type-safe APIs, comprehensive documentation, and examples for every use case.
            </p>
            <ul className="mb-6 space-y-3">
              {[
                "TypeScript-first with full type safety",
                "Real-time subscriptions out of the box",
                "Works with any framework or runtime",
                "Comprehensive error handling",
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="outline" asChild>
                <a href={siteConfig.github.url}>
                  View full documentation
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#1e1e1e] shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 bg-[#252526] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="h-7 text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-3 w-3" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6">
                <pre className="text-sm text-[#d4d4d4]">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

