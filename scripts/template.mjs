import { SITE, CATEGORIES } from '../content/site.mjs';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const CSS = `
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#f8f9fa;color:#1f2937;font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;line-height:1.75;font-size:16px;overflow-wrap:break-word}
img{max-width:100%;height:auto}
a{color:#2563eb;text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:760px;margin:0 auto;padding:0 20px}
.wide{max-width:1100px}

/* 헤더 */
.topbar{background:#0f172a;color:#cbd5e1;font-size:12px;padding:7px 0}
.topbar .wrap{display:flex;gap:10px;align-items:center;justify-content:space-between}
.topbar b{background:#2563eb;color:#fff;padding:2px 6px;border-radius:4px;font-size:10px;white-space:nowrap}
.topbar .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.topbar .meta{display:none;color:#94a3b8;white-space:nowrap}
header.site{background:#fff;border-bottom:1px solid #e5e7eb;position:sticky;top:0;z-index:20}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:60px}
.brand{font-weight:900;font-size:18px;color:#111827;white-space:nowrap;letter-spacing:-.02em}
.brand span{display:block;font-size:11px;font-weight:600;color:#6b7280}
nav.main{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
nav.main a{padding:7px 11px;border-radius:9px;font-size:14px;font-weight:700;color:#4b5563;white-space:nowrap}
nav.main a:hover{background:#f3f4f6;color:#111827;text-decoration:none}
nav.main a.cta{background:#2563eb;color:#fff}
nav.main a.cta:hover{background:#1d4ed8}

/* 카테고리 바 */
.catbar{background:#fff;border-bottom:1px solid #eef2f7;overflow-x:auto;-webkit-overflow-scrolling:touch}
.catbar::-webkit-scrollbar{display:none}
.catbar .row{display:flex;gap:8px;padding:11px 20px;min-width:max-content;max-width:1100px;margin:0 auto}
.catbar a{padding:7px 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;font-size:13px;font-weight:700;color:#374151;white-space:nowrap}
.catbar a.on{background:#2563eb;border-color:#2563eb;color:#fff}
.catbar a:hover{text-decoration:none;border-color:#9ca3af}

/* 본문 */
main{padding:28px 0 56px}
h1{font-size:26px;line-height:1.35;font-weight:900;letter-spacing:-.02em;margin:0 0 12px;color:#111827}
h2{font-size:20px;font-weight:800;margin:38px 0 12px;padding-top:14px;border-top:1px solid #e5e7eb;letter-spacing:-.01em;color:#111827}
h3{font-size:17px;font-weight:800;margin:26px 0 8px;color:#111827}
p{margin:0 0 15px}
ul,ol{margin:0 0 15px;padding-left:22px}
li{margin:0 0 7px}
.lead{font-size:17px;color:#374151;background:#fff;border:1px solid #e5e7eb;border-left:4px solid #2563eb;border-radius:10px;padding:16px 18px;margin:0 0 26px}
.meta{color:#6b7280;font-size:13px;margin:0 0 22px;display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.chip{background:#eff6ff;color:#1d4ed8;border:1px solid #dbeafe;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:700}
.box{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px 18px;margin:0 0 22px}
.box.warn{background:#fffbeb;border-color:#fde68a}
.box.tip{background:#f0f9ff;border-color:#bae6fd}
.box .bt{font-weight:800;margin:0 0 7px;font-size:15px}
table{width:100%;border-collapse:collapse;margin:0 0 22px;font-size:14px;background:#fff}
.tscroll{overflow-x:auto;margin:0 0 22px}
.tscroll table{margin:0;min-width:420px}
th,td{border:1px solid #e5e7eb;padding:9px 11px;text-align:left;vertical-align:top}
th{background:#f9fafb;font-weight:800;white-space:nowrap}

/* 카드 목록 */
.grid{display:grid;grid-template-columns:1fr;gap:14px;margin:0 0 30px}
.card{display:block;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:17px 19px;color:inherit}
.card:hover{border-color:#93c5fd;text-decoration:none;box-shadow:0 1px 8px rgba(37,99,235,.08)}
.card .k{font-size:12px;font-weight:800;color:#2563eb;margin:0 0 5px}
.card .t{font-size:16px;font-weight:800;color:#111827;line-height:1.45;margin:0 0 5px;letter-spacing:-.01em}
.card .d{font-size:13.5px;color:#6b7280;margin:0;line-height:1.6}
.sec-title{font-size:21px;font-weight:900;margin:34px 0 6px;letter-spacing:-.02em}
.sec-desc{color:#6b7280;font-size:14px;margin:0 0 16px}

/* 푸터 */
footer{background:#fff;border-top:1px solid #e5e7eb;padding:26px 0 40px;font-size:13px;color:#6b7280}
footer .fnav{display:flex;gap:14px;flex-wrap:wrap;margin:0 0 14px}
footer .fnav a{color:#4b5563;font-weight:600}
.notice{background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:13px 15px;font-size:12.5px;line-height:1.65;color:#6b7280;margin:0 0 14px}

@media (min-width:640px){
  .topbar .meta{display:block}
  h1{font-size:31px}
  .grid{grid-template-columns:1fr 1fr}
}
@media (min-width:1024px){
  h1{font-size:34px}
  .brand{font-size:20px}
}
`;

function head({ title, description, canonical, keywords }) {
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ''}
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
<style>${CSS}</style>
</head>
<body>`;
}

function header(activeCat) {
  const cats = CATEGORIES.map(
    (c) =>
      `<a href="/guide/category/${c.id}/"${activeCat === c.id ? ' class="on"' : ''}>${esc(c.name)}</a>`
  ).join('');
  return `
<div class="topbar"><div class="wrap wide">
  <span class="t"><b>가전 상식</b> 실측과 사용설명서로 확인한 가전 관리·수명 정보</span>
  <span class="meta">독립 연구소 실측 기준</span>
</div></div>
<header class="site"><div class="wrap wide">
  <a class="brand" href="/">${esc(SITE.name)}<span>${esc(SITE.tagline)}</span></a>
  <nav class="main">
    <a href="/guide/"${activeCat === 'hub' ? ' style="color:#2563eb;background:#eff6ff"' : ''}>가전 상식</a>
    <a href="/">스펙 비교</a>
    <a href="/guide/about/">사이트 소개</a>
  </nav>
</div></header>
<div class="catbar"><div class="row">
  <a href="/guide/"${activeCat === 'hub' ? ' class="on"' : ''}>전체</a>${cats}
</div></div>`;
}

function footer() {
  return `
<footer><div class="wrap wide">
  <div class="notice">${esc(SITE.affiliateNotice)}</div>
  <div class="fnav">
    <a href="/guide/">가전 상식</a>
    <a href="/">스펙 비교</a>
    <a href="/guide/about/">사이트 소개</a>
    <a href="/guide/privacy/">개인정보처리방침</a>
    <a href="/guide/terms/">이용약관</a>
    <a href="/guide/contact/">문의하기</a>
  </div>
  <div>© ${new Date().getFullYear()} ${esc(SITE.name)} (gajun.kr). 본 사이트의 정보는 일반적인 참고용이며,
  제품별 실제 사양과 조치 방법은 제조사 사용설명서와 공식 서비스센터 안내를 우선합니다.</div>
</div></footer>
</body></html>`;
}

/** 글 상세 페이지 */
export function renderPost(post, related = []) {
  const url = `${SITE.domain}/guide/${post.slug}/`;
  const rel = related.length
    ? `<h2>함께 보면 좋은 글</h2><div class="grid">${related
        .map(
          (r) =>
            `<a class="card" href="/guide/${r.slug}/"><div class="k">${esc(
              catName(r.category)
            )}</div><div class="t">${esc(r.title)}</div><div class="d">${esc(r.summary)}</div></a>`
        )
        .join('')}</div>`
    : '';

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: url,
  };

  return (
    head({
      title: `${post.title} | ${SITE.name}`,
      description: post.summary,
      canonical: url,
      keywords: post.keywords.join(', '),
    }) +
    header(post.category) +
    `<main><div class="wrap">
  <div class="meta"><span class="chip">${esc(catName(post.category))}</span><span>${esc(
      post.date
    )} 작성</span></div>
  <h1>${esc(post.title)}</h1>
  <div class="lead">${esc(post.summary)}</div>
  ${post.body}
  ${rel}
</div></main>` +
    `<script type="application/ld+json">${JSON.stringify(ld)}</script>` +
    footer()
  );
}

/** 목록(허브·카테고리) 페이지 */
export function renderList({ title, description, canonical, heading, intro, groups, activeCat }) {
  const body = groups
    .map(
      (g) => `<h2 class="sec-title">${esc(g.name)}</h2>
<p class="sec-desc">${esc(g.desc)}</p>
<div class="grid">${g.posts
        .map(
          (p) =>
            `<a class="card" href="/guide/${p.slug}/"><div class="k">${esc(
              p.keywords[0]
            )}</div><div class="t">${esc(p.title)}</div><div class="d">${esc(p.summary)}</div></a>`
        )
        .join('')}</div>`
    )
    .join('');

  return (
    head({ title, description, canonical }) +
    header(activeCat) +
    `<main><div class="wrap wide">
  <h1>${esc(heading)}</h1>
  <div class="lead">${esc(intro)}</div>
  ${body}
</div></main>` +
    footer()
  );
}

/** 정책·소개 등 단일 문서 */
export function renderPage({ title, description, slug, heading, html }) {
  const url = `${SITE.domain}/guide/${slug}/`;
  return (
    head({ title: `${title} | ${SITE.name}`, description, canonical: url }) +
    header(null) +
    `<main><div class="wrap"><h1>${esc(heading)}</h1>${html}</div></main>` +
    footer()
  );
}

export function catName(id) {
  return CATEGORIES.find((c) => c.id === id)?.name ?? '가전 상식';
}
