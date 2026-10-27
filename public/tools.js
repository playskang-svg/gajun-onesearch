// All arithmetic stays in the page. User strings are rendered as text, never as HTML.
const money = value => Math.round(value).toLocaleString('ko-KR') + '원';
const number = value => Number(value.toFixed(2)).toLocaleString('ko-KR');
const value = id => Number(document.getElementById(id).value);
const input = id => document.getElementById(id).value.trim();
function paragraph(parent, text) { const node = document.createElement('p'); node.textContent = text; parent.append(node); }
function row(table, cells, heading = false) {
  const tr = document.createElement('tr');
  for (const text of cells) { const td = document.createElement(heading ? 'th' : 'td'); td.textContent = text; if (heading) td.scope = 'col'; tr.append(td); }
  table.append(tr);
}
document.getElementById('compare-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const months = value('months'), unit = value('unit-price');
  const products = ['a','b'].map(id => ({
    name: input(id+'-name'), initial: value(id+'-price') + value(id+'-install'),
    energy: value(id+'-energy'), care: value(id+'-care'), source: input(id+'-source'),
    monthly: value(id+'-energy') * unit + value(id+'-care') / 12,
  }));
  const out = document.getElementById('compare-result'); out.replaceChildren();
  paragraph(out, months + '개월 사용 비용 비교 · 전력 단가 ' + number(unit) + '원/kWh 가정');
  const scroll = document.createElement('div'); scroll.className = 'tscroll';
  const table = document.createElement('table');
  const caption = document.createElement('caption'); caption.textContent = '입력한 두 모델의 비용 계산 결과'; table.append(caption);
  row(table,['항목',products[0].name,products[1].name],true);
  row(table,['구매·설치비',...products.map(p=>money(p.initial))]);
  row(table,['기간 중 전기비용 (가정)',...products.map(p=>money(p.energy*unit*months))]);
  row(table,['기간 중 소모품·관리비',...products.map(p=>money(p.care*months/12))]);
  row(table,['예상 합계',...products.map(p=>money(p.initial+p.monthly*months))]);
  row(table,['사양 출처·확인일',...products.map(p=>p.source||'미입력 — 공식 라벨을 확인하세요')]);
  scroll.append(table); out.append(scroll);
  const totals = products.map(p=>p.initial+p.monthly*months);
  paragraph(out, Math.abs(totals[0]-totals[1])<0.005 ? '입력한 조건에서는 두 제품의 합계가 같습니다.' : products[totals[0]<totals[1]?0:1].name+'의 합계가 '+money(Math.abs(totals[0]-totals[1]))+' 적습니다.');
  const expensive = products[0].initial>products[1].initial ? 0 : 1;
  const extra = products[expensive].initial-products[1-expensive].initial;
  const saving = products[1-expensive].monthly-products[expensive].monthly;
  if (extra>0 && saving>0) paragraph(out,'초기 비용이 더 큰 '+products[expensive].name+'의 차액 회수 시점: 약 '+number(extra/saving)+'개월 (입력 조건이 계속 유지되는 경우).');
  else if (extra>0) paragraph(out,'초기 비용이 더 큰 제품의 월 운영비도 같거나 더 높아, 입력 조건에서는 비용 절감으로 차액을 회수하지 못합니다.');
  else paragraph(out,'초기 비용이 같으므로 월 전기·관리비를 함께 비교하세요.');
  paragraph(out,'수리비·잔존가치·요금 변동은 제외했습니다. 성능·안전·설치 가능 여부는 별도로 확인하세요.');
  out.focus();
});
document.getElementById('energy-form').addEventListener('submit', event => {
  event.preventDefault(); if (!event.currentTarget.reportValidity()) return;
  const kwh=value('watts')*value('hours')*value('days')/1000;
  const out=document.getElementById('energy-result'); out.replaceChildren();
  paragraph(out,number(value('watts'))+'W × '+number(value('hours'))+'시간 × '+value('days')+'일 ÷ 1,000 = '+number(kwh)+'kWh');
  paragraph(out,'일정한 소비전력으로 운전한다는 가정의 전력량입니다. 실제 청구 요금과는 다릅니다.'); out.focus();
});
document.getElementById('print-comparison').addEventListener('click',()=>window.print());
