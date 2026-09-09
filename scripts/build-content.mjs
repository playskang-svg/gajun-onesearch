import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CATEGORIES } from '../content/site.mjs';
import { posts } from '../content/posts.mjs';
import { pages } from '../content/pages.mjs';
import { figures } from '../content/figures-map.mjs';
import { faqs } from '../content/faqs.mjs';
import { renderPost, renderList, renderPage } from './template.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'dist');

function write(relPath, html) {
  const full = resolve(OUT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, 'utf8');
}

/** 같은 카테고리 우선, 부족하면 다른 글로 채워 3개 */
function relatedFor(post) {
  const same = posts.filter((p) => p.category === post.category && p.slug !== post.slug);
  const other = posts.filter((p) => p.category !== post.category);
  return [...same, ...other].slice(0, 3);
}

// ── 글 상세
for (const post of posts) {
  const fig = figures[post.slug] ? figures[post.slug]() : '';
  write(`guide/${post.slug}/index.html`, renderPost(post, relatedFor(post), fig, faqs[post.slug] ?? []));
}

// ── 허브
const groups = CATEGORIES.map((c) => ({
  name: c.name,
  desc: c.desc,
  posts: posts.filter((p) => p.category === c.id),
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
  const list = posts.filter((p) => p.category === c.id);
  if (!list.length) continue;
  write(
    `guide/category/${c.id}/index.html`,
    renderList({
      title: `${c.name} 관리와 정보 | ${SITE.name}`,
      description: `${c.name} — ${c.desc}. 원인 진단부터 관리 주기까지 정리했습니다.`,
      canonical: `${SITE.domain}/guide/category/${c.id}/`,
      heading: c.name,
      intro: c.desc,
      groups: [{ name: `${c.name} 글 ${list.length}편`, desc: c.desc, posts: list }],
      activeCat: c.id,
    })
  );
}

// ── 정책·소개 페이지
for (const p of pages) {
  write(`guide/${p.slug}/index.html`, renderPage(p));
}

// ── sitemap.xml (앱 홈 + 허브 + 카테고리 + 글 + 정책)
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${SITE.domain}/`, pri: '1.0', freq: 'weekly' },
  { loc: `${SITE.domain}/guide/`, pri: '0.9', freq: 'weekly' },
  ...CATEGORIES.filter((c) => posts.some((p) => p.category === c.id)).map((c) => ({
    loc: `${SITE.domain}/guide/category/${c.id}/`,
    pri: '0.7',
    freq: 'weekly',
  })),
  ...posts.map((p) => ({ loc: `${SITE.domain}/guide/${p.slug}/`, pri: '0.8', freq: 'monthly' })),
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
const rssItems = posts
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
  `콘텐츠 생성 완료 — 글 ${posts.length}편, 카테고리 ${groups.length}개, 정책 ${pages.length}개, sitemap ${urls.length} URL`
);
