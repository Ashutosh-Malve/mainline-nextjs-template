# Site Configuration Guide

This project uses a centralized site configuration file to manage all site-wide settings. Update values in one place to change them across the entire website.

## Configuration File

All site settings are located in: **`src/lib/site-config.ts`**

## Quick Start

To update the website address or other settings:

1. Open `src/lib/site-config.ts`
2. Update the values you need
3. Run `npm run generate:seo` to regenerate sitemap.xml and robots.txt
4. Rebuild your site

## Available Settings

### Site Identity
```typescript
name: "EdgeBase"                    // Site name
shortName: "EdgeBase"               // Short name (for badges, etc.)
description: "..."                  // Default meta description
tagline: "Build fast. Scale globally. Pay less."  // Site tagline
```

### URLs
```typescript
url: "https://edgebase.com"         // Primary site URL
baseUrl: "https://edgebase.com"     // Base URL (can differ for staging)
```

### Social Media
```typescript
twitter: {
  handle: "@edgebase",             // Twitter/X handle
  url: "https://x.com/edgebase",    // Twitter/X URL
},
github: {
  handle: "edgebase",               // GitHub username
  url: "https://github.com/edgebase", // GitHub URL
},
```

### Contact Information
```typescript
contact: {
  email: "privacy@edgebase.com",    // Privacy/contact email
  supportEmail: "support@edgebase.com", // Support email
},
```

### SEO Settings
```typescript
defaultTitle: "EdgeBase - Fully Managed Backend Platform for the Edge",
titleTemplate: "%s | EdgeBase",     // Template for page titles
ogImage: "/og-image.jpg",           // Open Graph image path
ogImageWidth: 1200,                 // OG image width
ogImageHeight: 630,                  // OG image height
locale: "en_US",                     // Site locale
```

### Internal Links
```typescript
links: {
  signup: "/signup",
  login: "/login",
  pricing: "/pricing",
  // ... etc
}
```

### Technical Names
```typescript
packageName: "@edgebase/client",     // NPM package name
cliName: "edgebase",                 // CLI command name
configFileName: "edgebase.config.ts", // Config file name
```

## Helper Functions

The config file exports helper functions:

### `getFullUrl(path?: string)`
Returns the full URL for a given path.

```typescript
import { getFullUrl } from "@/lib/site-config";

getFullUrl("/about")  // "https://edgebase.com/about"
getFullUrl()          // "https://edgebase.com"
```

### `getCanonicalUrl(path?: string)`
Returns the canonical URL for a given path (same as getFullUrl).

## Usage Examples

### In Page Components
```typescript
import { siteConfig, getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about us...",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
};
```

### In Components
```typescript
import { siteConfig } from "@/lib/site-config";

<a href={siteConfig.github.url}>GitHub</a>
<p>{siteConfig.tagline}</p>
```

## Regenerating SEO Files

After updating the site config, regenerate SEO files:

```bash
# Generate both sitemap and robots.txt
npm run generate:seo

# Or generate individually
npm run generate:sitemap
npm run generate:robots
```

## What Gets Updated Automatically

When you update `site-config.ts`, these are automatically updated throughout the site:

- ✅ All page metadata (titles, descriptions, canonical URLs)
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Footer links
- ✅ Social media links
- ✅ Contact information
- ✅ Package/CLI names in documentation

## What Needs Manual Regeneration

After updating the `baseUrl` in config, run:

```bash
npm run generate:seo
```

This updates:
- `public/sitemap.xml` - Sitemap with correct URLs
- `public/robots.txt` - Robots.txt with correct sitemap URL

## Best Practices

1. **Always use the config** - Don't hardcode URLs or site names
2. **Update config before deployment** - Ensure URLs match your environment
3. **Regenerate SEO files** - Run `npm run generate:seo` after URL changes
4. **Use helper functions** - Use `getFullUrl()` and `getCanonicalUrl()` for URLs
5. **Keep it consistent** - All site-wide values should come from config

## Environment-Specific Configs

For different environments (staging, production), you can:

1. Create environment-specific config files:
   - `site-config.prod.ts`
   - `site-config.staging.ts`

2. Or use environment variables in `site-config.ts`:
   ```typescript
   baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://edgebase.com"
   ```

3. Update `.env` files accordingly

