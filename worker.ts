interface Fetcher {
  fetch(input: Request | string, init?: RequestInit): Promise<Response>;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Common CORS headers
    const corsHeaders: Record<string, string> = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // SEO Canonical Domain: Redirect www.gajun.kr or any other host to https://gajun.kr (301 Permanent)
    if (url.hostname !== 'gajun.kr' && !url.hostname.includes('localhost') && !url.hostname.endsWith('.workers.dev')) {
      url.hostname = 'gajun.kr';
      return Response.redirect(url.toString(), 301);
    }

    // 1. Health check endpoint
    if (url.pathname === '/api/health') {
      return new Response(
        JSON.stringify({
          status: 'ok',
          service: 'gajun-onesearch',
          timestamp: Date.now(),
        }),
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...corsHeaders,
          },
        }
      );
    }

    // 1-1. Google AdSense ads.txt endpoint
    if (url.pathname === '/ads.txt') {
      return new Response('google.com, pub-4030620718116834, DIRECT, f08c47fec0942fa0\n', {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          ...corsHeaders,
        },
      });
    }

    // 2. Serve static assets via Cloudflare Assets
    let response = await env.ASSETS.fetch(request);

    // 3. SPA Fallback: If asset not found for a GET page request, serve index.html
    if (response.status === 404 && request.method === 'GET' && !url.pathname.startsWith('/api/')) {
      const fallbackUrl = new URL('/index.html', request.url);
      response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return response;
  },
};
