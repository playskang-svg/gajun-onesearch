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
.brand{font-weight:900;font-size:16px;color:#111827;white-space:nowrap;letter-spacing:-.02em;flex:0 0 auto}
.brand span{display:none;font-size:11px;font-weight:600;color:#6b7280}
nav.main{display:flex;gap:2px;flex-wrap:nowrap;justify-content:flex-end;min-width:0}
nav.main a{padding:7px 8px;border-radius:9px;font-size:13px;font-weight:700;color:#4b5563;white-space:nowrap}
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

/* 도해 */
.fig{margin:0 0 26px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px 16px 12px}
.fig-t{font-size:15px;font-weight:800;color:#111827;padding-bottom:11px;margin-bottom:14px;border-bottom:1px solid #e5e7eb}
.fig figcaption{font-size:12.5px;color:#6b7280;margin-top:12px;line-height:1.6}
.fig ul,.fig ol{list-style:none;margin:0;padding:0}

.fl{display:flex;flex-direction:column;gap:8px;counter-reset:none}
.fl-step{display:flex;align-items:center;gap:10px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:11px 13px;margin:0}
.fl-step:first-child{background:#eff6ff;border-color:#bfdbfe}
.fl-n{flex:0 0 auto;width:22px;height:22px;border-radius:50%;background:#2563eb;color:#fff;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}
.fl-l{font-size:14px;font-weight:700;color:#111827;line-height:1.45}

.pts{display:flex;flex-direction:column;gap:9px}
.pt{display:flex;gap:11px;padding:12px 13px;border-radius:10px;margin:0;border:1px solid}
.pt-high{background:#fef2f2;border-color:#fecaca}
.pt-mid{background:#fffbeb;border-color:#fde68a}
.pt-low{background:#eff6ff;border-color:#bfdbfe}
.pt-n{flex:0 0 auto;width:24px;height:24px;border-radius:50%;color:#fff;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}
.pt-high .pt-n{background:#dc2626}
.pt-mid .pt-n{background:#d97706}
.pt-low .pt-n{background:#2563eb}
.pt-b{min-width:0;flex:1}
.pt-h{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px;margin-bottom:3px}
.pt-h b{font-size:14.5px;color:#111827}
.pt-tag{font-size:11.5px;font-weight:800}
.pt-high .pt-tag{color:#dc2626}
.pt-mid .pt-tag{color:#b45309}
.pt-low .pt-tag{color:#1d4ed8}
.pt-d{font-size:13px;color:#4b5563;line-height:1.6}

.scs{display:flex;flex-direction:column;gap:9px}
.sc{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 12px;padding:11px 13px;margin:0;border-radius:10px;background:#f8fafc;border:1px solid #e5e7eb;border-left:5px solid var(--sc)}
.sc-k{font-size:14px;font-weight:800;color:var(--sc)}
.sc-r{font-size:14px;font-weight:800;color:#111827}
.sc-n{font-size:13px;color:#6b7280;flex:1 1 100%}

.cps{display:flex;flex-direction:column;gap:10px}
.cp{border-radius:10px;padding:13px 15px;border:1px solid}
.cp-blue{background:#eff6ff;border-color:#bfdbfe}
.cp-green{background:#ecfdf5;border-color:#a7f3d0}
.cp-n{font-size:15px;font-weight:800;margin-bottom:2px}
.cp-blue .cp-n{color:#1d4ed8}
.cp-green .cp-n{color:#047857}
.cp-w{font-size:12.5px;font-weight:700;color:#6b7280;margin-bottom:9px}
.cp ul{display:flex;flex-direction:column;gap:5px}
.cp li{font-size:13.5px;color:#1f2937;padding-left:13px;position:relative;margin:0}
.cp li::before{content:"·";position:absolute;left:2px;font-weight:800}

.dc-q{background:#eff6ff;border:1.5px solid #2563eb;border-radius:10px;padding:13px 15px;font-size:14.5px;font-weight:800;color:#111827;text-align:center;margin-bottom:12px;line-height:1.5}
.dc-r{display:flex;flex-direction:column;gap:9px}
.dc-y,.dc-n{border-radius:10px;padding:12px 14px;border:1px solid}
.dc-y{background:#ecfdf5;border-color:#a7f3d0}
.dc-n{background:#fffbeb;border-color:#fde68a}
.dc-r b{display:block;font-size:12.5px;margin-bottom:3px}
.dc-y b{color:#047857}
.dc-n b{color:#b45309}
.dc-r span{font-size:14px;font-weight:700;color:#111827}

/* 푸터 */
footer{background:#fff;border-top:1px solid #e5e7eb;padding:26px 0 40px;font-size:13px;color:#6b7280}
footer .fnav{display:flex;gap:14px;flex-wrap:wrap;margin:0 0 14px}
footer .fnav a{color:#4b5563;font-weight:600}
.notice{background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:13px 15px;font-size:12.5px;line-height:1.65;color:#6b7280;margin:0 0 14px}

@media (min-width:640px){
  .topbar .meta{display:block}
  .brand{font-size:18px}
  .brand span{display:block}
  nav.main{gap:4px}
  nav.main a{padding:7px 11px;font-size:14px}
  h1{font-size:31px}
  .grid{grid-template-columns:1fr 1fr}
  .fig{padding:18px 20px 14px}
  /* 흐름도를 가로로 펴고 단계 사이에 화살표를 넣는다 */
  .fl{flex-direction:row;align-items:stretch}
  .fl-step{flex:1;flex-direction:column;align-items:flex-start;gap:8px;position:relative}
  .fl-step+.fl-step{margin-left:16px}
  .fl-step+.fl-step::before{content:"";position:absolute;left:-12px;top:50%;width:8px;height:8px;
    border-top:2px solid #cbd5e1;border-right:2px solid #cbd5e1;transform:translateY(-50%) rotate(45deg)}
  .cps{flex-direction:row}
  .cp{flex:1;min-width:0}
  .dc-r{flex-direction:row}
  .dc-y,.dc-n{flex:1;min-width:0}
  .sc-n{flex:1 1 auto}
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
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX">
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
  <span class="t"><b>가전 상식</b> 사용설명서와 공개 자료로 확인한 가전 관리·수명 정보</span>
  <span class="meta">제조사 공개 사양 기준</span>
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

/** 도입부 다음(첫 h2 직전)에 그림을 넣는다. 읽기 흐름을 끊지 않는 자리다. */
function insertFigure(body, figure) {
  if (!figure) return body;
  const at = body.indexOf('<h2>');
  if (at === -1) return body + figure;
  return body.slice(0, at) + figure + '\n' + body.slice(at);
}

/** FAQ 섹션 HTML */
function faqSection(list) {
  if (!list?.length) return '';
  return `<h2>자주 묻는 질문</h2>
${list
  .map(
    (f) => `<div class="box">
  <div class="bt">Q. ${esc(f.q)}</div>
  <p style="margin:0">${esc(f.a)}</p>
</div>`
  )
  .join('\n')}`;
}

/** 글 상세 페이지 */
export function renderPost(post, related = [], figure = '', faqList = []) {
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

  const iso = post.date.replace(/\./g, '-');
  const graph = [
    {
      '@type': 'Article',
      headline: post.title,
      description: post.summary,
      datePublished: iso,
      dateModified: iso,
      inLanguage: 'ko',
      author: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
      mainEntityOfPage: url,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '가전 상식', item: `${SITE.domain}/guide/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: catName(post.category),
          item: `${SITE.domain}/guide/category/${post.category}/`,
        },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (faqList?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqList.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  const ld = { '@context': 'https://schema.org', '@graph': graph };

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
  ${insertFigure(post.body, figure)}
  ${faqSection(faqList)}
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
