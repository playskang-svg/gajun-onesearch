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

const NOT_FOUND_HTML = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>페이지를 찾을 수 없습니다 | 가전비교연구소</title>
<style>body{margin:0;background:#f8f9fa;color:#1f2937;font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;line-height:1.7}main{max-width:640px;margin:0 auto;padding:64px 20px}h1{font-size:26px;margin:0 0 12px}a{color:#2563eb}ul{padding-left:20px}</style>
</head>
<body>
<main>
<h1>요청하신 페이지를 찾을 수 없습니다 (404)</h1>
<p>주소가 바뀌었거나 없는 페이지입니다. 아래에서 찾아보세요.</p>
<ul>
<li><a href="/">가전비교연구소 홈</a></li>
<li><a href="/guide/">가전 꿀팁 전체 글</a></li>
<li><a href="/guide/about/">사이트 소개</a> · <a href="/guide/editorial/">편집 원칙</a> · <a href="/guide/contact/">문의하기</a></li>
</ul>
</main>
</body>
</html>`;

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

    // 1-2. 자주 입력되는 짧은 경로는 실제 문서 위치로 301 이동
    const SHORT_PATHS: Record<string, string> = {
      '/about': '/guide/about/',
      '/privacy': '/guide/privacy/',
      '/terms': '/guide/terms/',
      '/contact': '/guide/contact/',
      '/editorial': '/guide/editorial/',
      '/disclosure': '/guide/disclosure/',
      '/sitemap_index.xml': '/sitemap.xml',
    };
    const shortKey = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
    if (SHORT_PATHS[shortKey] && (request.method === 'GET' || request.method === 'HEAD')) {
      return Response.redirect(new URL(SHORT_PATHS[shortKey], url.origin).toString(), 301);
    }

    // 2. Serve static assets via Cloudflare Assets
    const response = await env.ASSETS.fetch(request);

    // 3. 없는 주소는 진짜 404로 응답한다 (예전에는 모든 주소가 홈 HTML + 200이어서 soft 404였다).
    //    이 사이트에서 앱 화면(홈)은 '/' 하나뿐이고, 글·가이드는 정적 파일로 존재한다.
    if (response.status === 404) {
      return new Response(NOT_FOUND_HTML, {
        status: 404,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=300',
          'X-Robots-Tag': 'noindex',
        },
      });
    }

    return response;
  },
};
