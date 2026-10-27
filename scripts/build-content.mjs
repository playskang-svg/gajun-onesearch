import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CATEGORIES } from '../content/site.mjs';
import { posts } from '../content/posts.mjs';
import { pages } from '../content/pages.mjs';
import { figures } from '../content/figures-map.mjs';
import { faqs } from '../content/faqs.mjs';
import { REDIRECTS, isPublicPost } from '../content/publication.mjs';
import { renderPost, renderList, renderPage, renderHome } from './template.mjs';
import { toolsContent } from './tools-page.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'dist');

function write(relPath, html) {
  const full = resolve(OUT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, 'utf8');
}

// 애드센스·검색 품질 게이트: 짧은 초고를 지우지는 않되, 독자 판단에 필요한
// 근거·비교·실행 순서를 보강하기 전까지 목록·사이트맵에서 제외하고 noindex 처리한다.
const redirected = (p) => Boolean(REDIRECTS[`/guide/${p.slug}/`]);
const publicPosts = posts.filter(isPublicPost);
const heldPosts = posts.filter((p) => !isPublicPost(p) && !redirected(p));

/** 보강 대기(noindex) 글로 가는 본문 내부 링크는 글자만 남기고 링크를 제거한다 (보강 후 index 전환되면 자동으로 링크 복원) */
const heldSlugs = new Set(heldPosts.map((p) => p.slug));
const unlinkHeld = (html) =>
  html.replace(/<a href="\/guide\/([a-z0-9-]+)\/?"[^>]*>([\s\S]*?)<\/a>/g, (m, slug, text) => (heldSlugs.has(slug) ? text : m));

/** 같은 카테고리 우선, 부족하면 다른 공개 글로 채워 3개 */
function relatedFor(post) {
  const same = publicPosts.filter((p) => p.category === post.category && p.slug !== post.slug);
  const other = publicPosts.filter((p) => p.category !== post.category);
  return [...same, ...other].slice(0, 3);
}

// ── 글 상세 (REDIRECTS 에 있는 옛 주소는 새 글로 보내는 stub 만 쓴다)
for (const [from, to] of Object.entries(REDIRECTS)) {
  write(
    `${from.replace(/^\//, '')}index.html`,
    `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical" href="${SITE.domain}${to}"><meta http-equiv="refresh" content="0;url=${to}"><title>이동 중</title></head><body><a href="${to}">새 주소로 이동</a></body></html>`
  );
}
write('_redirects', Object.entries(REDIRECTS).map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n');

for (const post of posts.filter((p) => !redirected(p))) {
  const fig = figures[post.slug] ? figures[post.slug]() : '';
  const noindex = !publicPosts.includes(post);
  write(
    `guide/${post.slug}/index.html`,
    unlinkHeld(renderPost(post, relatedFor(post), fig, faqs[post.slug] ?? [], { noindex }))
  );
}

// ── 허브
const groups = CATEGORIES.map((c) => ({
  name: c.name,
  desc: c.desc,
  posts: publicPosts.filter((p) => p.category === c.id),
})).filter((g) => g.posts.length);

write(
  'guide/index.html',
  renderList({
    title: `가전 상식 | ${SITE.name}`,
    description:
      '세탁기·에어컨·냉장고 관리부터 수명, 전기요금까지. 실제로 쓰면서 부딪히는 문제를 기준과 함께 정리했습니다.',
    canonical: `${SITE.domain}/guide/`,
    heading: '가전 상식',
    intro:
      '가전은 사고 나서가 더 깁니다. 냄새가 나고, 물이 떨어지고, 전기요금이 오를 때 무엇부터 봐야 하는지 정리했습니다. 직접 할 수 있는 것과 전문가에게 맡길 것을 구분해 적었습니다.',
    groups,
    activeCat: 'hub',
  })
);

// ── 카테고리별
for (const c of CATEGORIES) {
  const list = publicPosts.filter((p) => p.category === c.id);
  if (!list.length) continue;
  write(
    `guide/category/${c.id}/index.html`,
    renderList({
      title: `${c.name} 관리와 정보 | ${SITE.name}`,
      description: `${c.name} — ${c.desc}. 원인 진단부터 관리 주기까지 정리했습니다.`,
      canonical: `${SITE.domain}/guide/category/${c.id}/`,
      heading: c.name,
      intro: c.intro,
      groups: [{ name: `${c.name} 글 ${list.length}편`, desc: c.desc, posts: list }],
      activeCat: c.id,
    })
  );
}

// ── 정책·소개 페이지
for (const p of pages) {
  write(`guide/${p.slug}/index.html`, renderPage(p));
}

// ── 비용 비교 도구 (/compare/)
write(
  'compare/index.html',
  renderPage({
    title: '가전 사용 비용 비교 계산기',
    description: '두 제품의 구매가·설치비·월 전력량·소모품 비용을 넣어 사용 기간 전체 비용과 차액 회수 시점을 계산합니다. 입력값은 저장하지 않습니다.',
    heading: '가전 사용 비용 비교',
    html: toolsContent,
    path: '/compare/',
  })
);

// ── 홈(/): vite 가 만든 SPA 는 /finder/ (noindex) 로 옮기고, / 는 서버에서 완성된 HTML 로 낸다.
//    애드센스가 "제휴 링크 위주의 얇은 메인"으로 거절한 원인을 바로잡는 핵심 단계.
const spaPath = resolve(OUT, 'index.html');
if (existsSync(spaPath)) {
  const spa = readFileSync(spaPath, 'utf8')
    .replace(/<link rel="canonical" href="[^"]*" \/>/, '<link rel="canonical" href="https://gajun.kr/finder/" />')
    .replace('<meta name="twitter:card"', '<meta name="robots" content="noindex, follow" />\n    <meta name="twitter:card"');
  if (!/noindex/.test(spa)) throw new Error('finder: noindex 삽입 실패 — index.html 구조가 바뀌었는지 확인');
  write('finder/index.html', spa);
}
const latestPosts = [...publicPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
write(
  'index.html',
  renderHome({
    latest: latestPosts,
    categories: CATEGORIES.map((cat) => {
      const list = publicPosts.filter((p) => p.category === cat.id);
      return { cat, posts: list.slice(0, 3), total: list.length };
    }).filter((g) => g.total),
  })
);

// ── sitemap.xml (앱 홈 + 허브 + 카테고리 + 글 + 정책)
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${SITE.domain}/`, pri: '1.0', freq: 'weekly' },
  { loc: `${SITE.domain}/guide/`, pri: '0.9', freq: 'weekly' },
  { loc: `${SITE.domain}/compare/`, pri: '0.6', freq: 'yearly' },
  ...CATEGORIES.filter((c) => publicPosts.some((p) => p.category === c.id)).map((c) => ({
    loc: `${SITE.domain}/guide/category/${c.id}/`,
    pri: '0.7',
    freq: 'weekly',
  })),
  ...publicPosts.map((p) => ({ loc: `${SITE.domain}/guide/${p.slug}/`, pri: '0.8', freq: 'monthly' })),
  ...pages.map((p) => ({ loc: `${SITE.domain}/guide/${p.slug}/`, pri: '0.3', freq: 'yearly' })),
];

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.pri}</priority></url>`
  )
  .join('\n')}
</urlset>
`
);

// ── rss.xml (글만, 최신순)
const rssItems = publicPosts
  .slice(0, 20)
  .map((p) => {
    const d = new Date(p.date.replace(/\./g, '-') + 'T09:00:00+09:00');
    return `    <item>
      <title>${p.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>
      <link>${SITE.domain}/guide/${p.slug}/</link>
      <guid>${SITE.domain}/guide/${p.slug}/</guid>
      <pubDate>${d.toUTCString()}</pubDate>
      <description>${p.summary.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</description>
    </item>`;
  })
  .join('\n');

write(
  'rss.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE.name}</title>
    <link>${SITE.domain}/</link>
    <description>${SITE.description}</description>
    <language>ko</language>
${rssItems}
  </channel>
</rss>
`
);

// ── robots.txt
write(
  'robots.txt',
  `User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`
);

// ── ads.txt (Google AdSense crawler compliance)
write(
  'ads.txt',
  `google.com, pub-4030620718116834, DIRECT, f08c47fec0942fa0
`
);

console.log(
  `콘텐츠 생성 완료 — 공개 글 ${publicPosts.length}편, 보강 대기(noindex) ${heldPosts.length}편, 카테고리 ${groups.length}개, 정책 ${pages.length}개, sitemap ${urls.length} URL`
);
