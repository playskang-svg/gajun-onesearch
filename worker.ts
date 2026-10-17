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

    // SEO Canonical Domain + HTTPS: redirect http:// or any non-canonical host to https://gajun.kr (301 Permanent)
    const isLocal = url.hostname.includes('localhost') || url.hostname.endsWith('.workers.dev');
    if (!isLocal && (url.protocol !== 'https:' || url.hostname !== 'gajun.kr')) {
      url.protocol = 'https:';
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

    // 3. Not found: 진짜 404 상태로 404 페이지를 내려준다.
    //    예전처럼 index.html(→ 307 /)로 넘기면 없는 주소가 전부 홈으로 가는 soft 404가 되어
    //    검색엔진·애드센스 크롤러가 사이트 품질을 낮게 본다. SPA는 경로 라우팅을 쓰지 않으므로 폴백이 필요 없다.
    if (response.status === 404 && (request.method === 'GET' || request.method === 'HEAD')) {
      let notFound = await env.ASSETS.fetch(new Request(new URL('/404', request.url), { method: 'GET' }));
      if (!notFound.ok) {
        notFound = await env.ASSETS.fetch(new Request(new URL('/404.html', request.url), { method: 'GET' }));
      }
      const body = notFound.ok ? await notFound.text() : 'Not Found';
      return new Response(request.method === 'HEAD' ? null : body, {
        status: 404,
        headers: {
          'Content-Type': notFound.ok ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=300',
        },
      });
    }

    return response;
  },
};
