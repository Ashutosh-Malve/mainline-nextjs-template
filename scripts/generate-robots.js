/**
 * Generate robots.txt from site-config.ts
 * 
 * Run this script after updating site-config.ts to regenerate robots.txt
 * Usage: node scripts/generate-robots.js
 */

const fs = require('fs');
const path = require('path');

// Read site-config.ts and extract URL
const configPath = path.join(__dirname, '../src/lib/site-config.ts');
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract baseUrl from config (simple regex extraction)
const urlMatch = configContent.match(/baseUrl:\s*"([^"]+)"/);
const baseUrl = urlMatch ? urlMatch[1] : 'https://edgebase.com';

// Generate robots.txt
const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin/login pages
Disallow: /login
Disallow: /api/
`;

// Write to public/robots.txt
const robotsPath = path.join(__dirname, '../public/robots.txt');
fs.writeFileSync(robotsPath, robots, 'utf8');

console.log(`✅ Generated robots.txt with base URL: ${baseUrl}`);
console.log(`   Location: ${robotsPath}`);

