// 정적 글의 메타데이터만 뽑아 React 앱이 쓸 인덱스를 만든다.
// 본문(body)까지 앱 번들에 들어가면 용량이 크게 늘어나므로 여기서 분리한다.
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from '../content/posts.mjs';
import { CATEGORIES } from '../content/site.mjs';
import { isPublicPost } from '../content/publication.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const index = posts.map((p) => ({
  slug: p.slug,
  title: p.title,
  summary: p.summary,
  category: p.category,
  categoryName: CATEGORIES.find((c) => c.id === p.category)?.name ?? '가전 상식',
  keyword: p.keywords[0],
  date: p.date,
}));

const out = `// 자동 생성 파일 — scripts/gen-index.mjs 가 만든다. 직접 수정하지 말 것.
export interface GuidePost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  categoryName: string;
  keyword: string;
  date: string;
}

export const GUIDE_POSTS: GuidePost[] = ${JSON.stringify(index, null, 2)};

export const GUIDE_CATEGORIES = ${JSON.stringify(
  CATEGORIES.map((c) => ({ ...c, count: posts.filter((p) => p.category === c.id).length })),
  null,
  2
)};
`;

writeFileSync(resolve(ROOT, 'src/data/guideIndex.ts'), out, 'utf8');
console.log(`guideIndex.ts 생성 — ${index.length}편`);

// ── index.html 크롤러용 정적 폴백(카테고리·최신글)을 실제 공개 글 기준으로 갱신한다.
// build-content.mjs 와 같은 기준(본문 1,000자 이상만 공개)을 쓴다.
const pub = posts.filter(isPublicPost);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cats = CATEGORIES.map((c) => ({ c, n: pub.filter((p) => p.category === c.id).length }))
  .filter((x) => x.n)
  .map(({ c, n }) => `            <li><a href="/guide/category/${c.id}/" style="color: #2563eb;">${esc(c.name)} — ${esc(c.desc)} (${n}편)</a></li>`)
  .join('\n');
const latest = [...pub]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 8)
  .map((p) => `            <li><a href="/guide/${p.slug}/" style="color: #2563eb;">${esc(p.title)}</a> <span style="color:#6b7280;font-size:12px">(${p.date})</span></li>`)
  .join('\n');
let html = readFileSync(resolve(ROOT, 'index.html'), 'utf8');
const fill = (name, inner) => {
  const re = new RegExp(`<!--GEN:${name}-->[\\s\\S]*?<!--/GEN:${name}-->`);
  html = html.replace(re, `<!--GEN:${name}-->\n          <ul style="padding-left: 20px; color: #1f2937; line-height: 1.8;">\n${inner}\n          </ul>\n          <!--/GEN:${name}-->`);
};
fill('CATS', cats);
fill('LATEST', latest);
writeFileSync(resolve(ROOT, 'index.html'), html, 'utf8');
console.log(`index.html 정적 폴백 갱신 — 공개 글 ${pub.length}편`);
