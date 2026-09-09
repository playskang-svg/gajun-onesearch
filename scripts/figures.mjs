// 글에 넣을 도해. SVG로 그리면 모바일에서 글씨가 6px 수준으로 줄어 읽히지 않으므로
// HTML+CSS로 만든다. 화면 폭에 따라 다시 배치되고, 텍스트 선택·검색·스크린리더가 모두 동작한다.
// (공유용 이미지 파일은 og-image.mjs 가 따로 생성한다)

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function shell({ title, body, caption }) {
  return `<figure class="fig">
  <div class="fig-t">${esc(title)}</div>
  ${body}
  <figcaption>${esc(caption)}</figcaption>
</figure>`;
}

/** 순서 흐름도 — 모바일 세로, 데스크톱 가로 */
export function flowFigure({ title, steps, caption }) {
  const items = steps
    .map(
      (s, i) => `<li class="fl-step">
      <span class="fl-n">${i + 1}</span>
      <span class="fl-l">${esc(String(s.label).replace(/\n/g, ' '))}</span>
    </li>`
    )
    .join('\n    ');
  return shell({ title, caption, body: `<ol class="fl">\n    ${items}\n  </ol>` });
}

/** 부위·항목 지적도 — 중요도에 따라 색을 달리한다 */
export function partsFigure({ title, parts, caption }) {
  const rows = parts
    .map(
      (p, i) => `<li class="pt pt-${p.level}">
      <span class="pt-n">${i + 1}</span>
      <div class="pt-b">
        <div class="pt-h"><b>${esc(p.name)}</b><span class="pt-tag">${esc(p.tag)}</span></div>
        <div class="pt-d">${esc(p.desc)}</div>
      </div>
    </li>`
    )
    .join('\n    ');
  return shell({ title, caption, body: `<ul class="pts">\n    ${rows}\n  </ul>` });
}

/** 구간 눈금 — 온도처럼 범위가 있는 값 */
export function scaleFigure({ title, bands, caption }) {
  const rows = bands
    .filter((b) => b.label)
    .map(
      (b) => `<li class="sc" style="--sc:${b.color}">
      <span class="sc-k">${esc(b.label)}</span>
      <span class="sc-r">${esc(b.range)}</span>
      <span class="sc-n">${esc(b.note)}</span>
    </li>`
    )
    .join('\n    ');
  return shell({ title, caption, body: `<ul class="scs">\n    ${rows}\n  </ul>` });
}

/** 둘 중 무엇을 언제 쓰나 */
export function compareFigure({ title, left, right, caption }) {
  const col = (s) => `<div class="cp cp-${s.tone}">
      <div class="cp-n">${esc(s.name)}</div>
      <div class="cp-w">${esc(s.when)}</div>
      <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>`;
  return shell({
    title,
    caption,
    body: `<div class="cps">\n    ${col(left)}\n    ${col(right)}\n  </div>`,
  });
}

/** 판단 분기 */
export function decisionFigure({ title, question, yes, no, caption }) {
  return shell({
    title,
    caption,
    body: `<div class="dc">
    <div class="dc-q">${esc(question)}</div>
    <div class="dc-r">
      <div class="dc-y"><b>${esc(yes.label)}</b><span>${esc(yes.action)}</span></div>
      <div class="dc-n"><b>${esc(no.label)}</b><span>${esc(no.action)}</span></div>
    </div>
  </div>`,
  });
}

export const FIG = { flowFigure, partsFigure, scaleFigure, compareFigure, decisionFigure };
