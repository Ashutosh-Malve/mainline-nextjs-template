"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";


import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Vision", href: "/vision" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(95%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300 overflow-hidden",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="text-foreground text-lg font-bold tracking-tight sm:text-xl">
            EdgeBase 
          </span>
          <Badge variant="beta" className="text-xs">Beta</Badge>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block flex-1 min-w-0">
          <NavigationMenuList className="justify-center gap-1">
            {ITEMS.map((link) => (
              <NavigationMenuItem key={link.label} className="shrink-0">
                <Link
                  href={link.href}
                  className={cn(
                    "relative bg-transparent px-1.5 text-xs sm:text-sm font-medium transition-opacity hover:opacity-75 whitespace-nowrap",
                    pathname === link.href && "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <ThemeToggle />
          <Link href="/signup" className="hidden lg:block">
            <Button className="h-8 px-3 text-xs sm:text-sm">
              <span className="relative z-10 whitespace-nowrap">Sign up to waitlist</span>
            </Button>
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 shrink-0 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                pathname === link.href && "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};
