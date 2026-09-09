// 정적 글의 메타데이터만 뽑아 React 앱이 쓸 인덱스를 만든다.
// 본문(body)까지 앱 번들에 들어가면 용량이 크게 늘어나므로 여기서 분리한다.
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from '../content/posts.mjs';
import { CATEGORIES } from '../content/site.mjs';

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
