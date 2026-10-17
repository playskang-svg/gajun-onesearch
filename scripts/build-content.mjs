import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CATEGORIES } from '../content/site.mjs';
import { posts } from '../content/posts.mjs';
import { pages } from '../content/pages.mjs';
import { figures } from '../content/figures-map.mjs';
import { faqs } from '../content/faqs.mjs';
import { renderPost, renderList, renderPage, renderNotFound } from './template.mjs';

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

// ── 404 페이지 (worker.ts가 없는 주소에 404 상태로 내려준다 — 홈으로 돌리면 soft 404)
write('404.html', renderNotFound());

// ── 홈(SPA) 크롤러용 정적 마크업: JS 실행 전에도 전체 글 목록·정책 링크가 HTML에 들어가게 한다.
//    index.html 의 CRAWL-FALLBACK 마커 사이를 글 데이터로 다시 채운다(글 수·카테고리 수가 어긋나지 않도록).
{
  const indexPath = resolve(OUT, 'index.html');
  if (!existsSync(indexPath)) throw new Error('dist/index.html 이 없습니다 — vite build 를 먼저 실행하세요.');
  const START = '<!--CRAWL-FALLBACK:START-->';
  const END = '<!--CRAWL-FALLBACK:END-->';
  const src = readFileSync(indexPath, 'utf8');
  const i = src.indexOf(START);
  const j = src.indexOf(END);
  if (i === -1 || j === -1) throw new Error('index.html 에 CRAWL-FALLBACK 마커가 없습니다.');
  const e = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const cats = CATEGORIES.map((c) => ({ c, list: posts.filter((p) => p.category === c.id) })).filter((g) => g.list.length);
  const fallback = `${START}
      <main style="max-width: 800px; margin: 32px auto; padding: 0 20px; line-height: 1.7;">
        <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 12px;">가전제품 1:1 스펙 비교 &amp; 가전 상식 가이드</h2>
        <p style="color: #374151; font-size: 15px;">가전비교연구소는 냉장고, 세탁기·건조기, 에어컨, TV, 청소기, 주방가전, 노트북 등 생활 가전의 제조사 공개 사양과 관리·수명·전기요금 정보를 정리합니다. 비교표의 수치는 자체 측정값이 아니라 제조사가 공개한 사양을 같은 항목으로 맞춘 것입니다.</p>
        <p style="color: #374151; font-size: 15px;">가전 상식 글 ${posts.length}편을 ${cats.length}개 분야로 나눠 두었습니다.</p>
${cats
  .map(
    ({ c, list }) => `        <section style="margin-top: 24px;">
          <h3 style="font-size: 17px; font-weight: bold; margin: 0 0 6px;"><a href="/guide/category/${c.id}/" style="color: #111827;">${e(c.name)}</a> <span style="color: #6b7280; font-size: 13px; font-weight: normal;">${list.length}편 · ${e(c.desc)}</span></h3>
          <ul style="padding-left: 20px; margin: 0;">
${list.map((p) => `            <li><a href="/guide/${p.slug}/" style="color: #2563eb;">${e(p.title)}</a></li>`).join('\n')}
          </ul>
        </section>`
  )
  .join('\n')}
      </main>
      <footer style="margin-top: 40px; padding: 24px; background: #fff; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
        <p style="margin: 0 0 8px;"><a href="/guide/about/">사이트 소개</a> · <a href="/guide/privacy/">개인정보처리방침</a> · <a href="/guide/terms/">이용약관</a> · <a href="/guide/contact/">문의하기</a></p>
        <p style="margin: 0 0 6px;">${e(SITE.affiliateNotice)}</p>
        <p style="margin: 0;">© ${new Date().getFullYear()} ${e(SITE.name)} (gajun.kr)</p>
      </footer>
      ${END}`;
  writeFileSync(indexPath, src.slice(0, i) + fallback + src.slice(j + END.length), 'utf8');
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
  ...posts.map((p) => ({ loc: `${SITE.domain}/guide/${p.slug}/`, pri: '0.8', freq: 'monthly', lastmod: p.date.replace(/\./g, '-') })),
  ...pages.map((p) => ({ loc: `${SITE.domain}/guide/${p.slug}/`, pri: '0.3', freq: 'yearly' })),
];

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod ?? today}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.pri}</priority></url>`
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
