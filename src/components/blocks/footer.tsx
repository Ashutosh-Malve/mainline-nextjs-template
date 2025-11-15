import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "GitHub", href: "https://github.com" },
    { name: "X (Twitter)", href: "https://x.com/malve" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" }
  ];


  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          EdgeBase — Fully managed backend on the edge
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Build fast. Scale globally. Pay less.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/signup">
              Sign up to waitlist →
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          width="1570"
          height="293"
          viewBox="0 0 1570 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <text
            x="785"
            y="180"
            textAnchor="middle"
            fontSize="200"
            fontWeight="700"
            fill="url(#paint0_linear_59_191)"
            style={{ fontFamily: 'var(--font-display), sans-serif', letterSpacing: '0.05em' }}
            className="select-none"
          >
            EDGEBASE
          </text>
          <defs>
            <linearGradient
              id="paint0_linear_59_191"
              x1="742.5"
              y1="0"
              x2="742.5"
              y2="218.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.41" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
