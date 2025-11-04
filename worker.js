/**
 * Worker script to serve Next.js static export from R2
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Remove trailing slash except for root
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    // Default to index.html for root
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    // Try to get the file from R2 bucket
    if (!env.ASSETS) {
      return new Response('ASSETS binding not configured. Please bind an R2 bucket named ASSETS.', { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // First, try the exact path
    let object = await env.ASSETS.get(pathname);
    
    // If not found and no extension, try adding .html
    if (!object && !pathname.includes('.')) {
      object = await env.ASSETS.get(`${pathname}.html`);
    }

    // If still not found, try index.html for directory paths
    if (!object && !pathname.endsWith('/index.html')) {
      const indexPath = pathname.endsWith('.html') 
        ? pathname.replace('.html', '/index.html')
        : `${pathname}/index.html`;
      object = await env.ASSETS.get(indexPath);
    }

    // If found, return the object
    if (object) {
      const contentType = getContentType(pathname);
      return new Response(object.body, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }

    // Return 404 page if it exists
    const notFound = await env.ASSETS.get('/404.html');
    if (notFound) {
      return new Response(notFound.body, {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('Not Found', { 
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};

function getContentType(pathname) {
  const ext = pathname.split('.').pop()?.toLowerCase();
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject',
  };
  return contentTypes[ext] || 'application/octet-stream';
}
