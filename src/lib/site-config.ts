/**
 * Site Configuration
 * 
 * Centralized configuration for the EdgeBase website.
 * Update these values to change site-wide settings.
 */

export const siteConfig = {
  // Site Identity
  name: "EdgeBase",
  shortName: "EdgeBase",
  description: "Fully Managed Backend Platform built for the edge. Real-time data, auth, storage, and functions — built entirely on edge infrastructure. Zero servers. Zero DevOps. Zero cold starts.",
  tagline: "Build fast. Scale globally. Pay less.",
  
  // URLs
  url: "https://edgebase.malve.co",
  baseUrl: "https://edgebase.malve.co", // Can be different for staging/production
  
  // Social Media
  twitter: {
    handle: "@edgebase",
    url: "https://x.com/edgebase",
  },
  github: {
    handle: "edgebase",
    url: "https://github.com/edgebase",
  },
  
  // Contact
  contact: {
    email: "privacy@edgebase.com",
    supportEmail: "support@edgebase.com",
  },
  
  // SEO
  defaultTitle: "EdgeBase - Fully Managed Backend Platform for the Edge",
  titleTemplate: "%s | EdgeBase",
  
  // Open Graph
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  
  // Locale
  locale: "en_US",
  
  // Links
  links: {
    signup: "/signup",
    login: "/login",
    pricing: "/pricing",
    about: "/about",
    vision: "/vision",
    faq: "/faq",
    contact: "/contact",
    privacy: "/privacy",
    github: "https://github.com/edgebase",
    twitter: "https://x.com/edgebase",
  },
  
  // Package/Technical Names
  packageName: "@edgebase/client",
  cliName: "edgebase",
  configFileName: "edgebase.config.ts",
} as const;

// Helper function to get full URL
export function getFullUrl(path: string = ""): string {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// Helper function to get canonical URL
export function getCanonicalUrl(path: string = ""): string {
  return getFullUrl(path);
}

