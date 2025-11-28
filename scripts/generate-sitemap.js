/**
 * Generate sitemap.xml from site-config.ts
 * 
 * Run this script after updating site-config.ts to regenerate sitemap.xml
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Read site-config.ts and extract URL
const configPath = path.join(__dirname, '../src/lib/site-config.ts');
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract baseUrl from config (simple regex extraction)
const urlMatch = configContent.match(/baseUrl:\s*"([^"]+)"/);
const baseUrl = urlMatch ? urlMatch[1] : 'https://edgebase.com';

// Define pages with their priorities and change frequencies
const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/vision', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/signup', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
];

// Generate current date in YYYY-MM-DD format
const lastmod = new Date().toISOString().split('T')[0];

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path || '/'}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

// Write to public/sitemap.xml
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

console.log(`✅ Generated sitemap.xml with base URL: ${baseUrl}`);
console.log(`   Location: ${sitemapPath}`);

