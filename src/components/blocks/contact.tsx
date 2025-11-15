import React from "react";

import Link from "next/link";

import { Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-14 lg:mt-20">
          <p className="text-muted-foreground text-center text-lg leading-snug">
            Reach out on X
          </p>
          <Link
            href="https://x.com/malve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 flex items-center gap-2 text-xl font-semibold transition-colors"
          >
            <Twitter className="size-6" />
            @malve
          </Link>
        </div>
      </div>
    </section>
  );
}
