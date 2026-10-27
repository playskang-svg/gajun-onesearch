export const toolsContent = `
<div class="lead">같은 용량과 같은 시험 조건의 두 제품을 비교해 보세요. 구매가뿐 아니라 설치비·전기 사용량·소모품 비용을 함께 적으면, 초기 가격 차이를 언제 회수하는지 확인할 수 있습니다.</div>
<p>입력값은 이 화면에서만 계산하며 저장하거나 전송하지 않습니다. 공식 라벨과 견적서에 없는 수치는 추정해 채우지 말고 먼저 확인하세요. 아래 단가는 사용자가 정하는 가정값이며 한국전력의 실제 청구 단가가 아닙니다.</p>
<h2>제품 두 개의 사용 비용 비교</h2>
<form id="compare-form">
<div class="tool-columns">
${['a','b'].map((id,i)=>`<fieldset><legend>제품 ${i===0?'A':'B'}</legend>
<label for="${id}-name">모델명<input id="${id}-name" name="${id}-name" maxlength="100" placeholder="공식 모델명을 적어 주세요" required></label>
<label for="${id}-price">구매가 (원)<input id="${id}-price" name="${id}-price" type="number" min="0" max="1000000000" step="1" required></label>
<label for="${id}-install">설치·배송비 (원)<input id="${id}-install" name="${id}-install" type="number" min="0" max="100000000" step="1" value="0" required></label>
<label for="${id}-energy">월 사용 전력량 (kWh/월)<input id="${id}-energy" name="${id}-energy" type="number" min="0" max="100000" step="0.01" required></label>
<label for="${id}-care">연간 소모품·관리비 (원/년)<input id="${id}-care" name="${id}-care" type="number" min="0" max="100000000" step="1" value="0" required></label>
<label for="${id}-source">사양 출처·확인일 (선택)<input id="${id}-source" name="${id}-source" maxlength="250" placeholder="공식 라벨 주소 / 확인 날짜"></label>
</fieldset>`).join('')}
</div>
<div class="tool-columns">
<label for="unit-price">계산용 전력 단가 (원/kWh, 가정값)<input id="unit-price" name="unit-price" type="number" value="200" min="0" max="10000" step="0.01" required></label>
<label for="months">비교할 사용 기간 (개월)<input id="months" name="months" type="number" value="60" min="1" max="600" step="1" required></label>
</div>
<button class="action" type="submit">사용 비용 비교하기</button>
</form>
<div id="compare-result" class="tool-result" role="status" aria-live="polite" tabindex="-1"></div>
<h2>사양표에서 무엇을 옮겨 적나요?</h2>
<ol><li><strong>모델명 끝자리까지 맞춥니다.</strong> 판매명은 같아도 색상·유통 경로·부속품에 따라 모델 코드가 달라질 수 있습니다. 세탁기와 건조기 세트는 각 본체의 코드를 따로 적습니다.</li>
<li><strong>전력량의 단위를 확인합니다.</strong> 냉장고의 월간소비전력량(kWh/월)은 그대로 넣습니다. 세탁기처럼 Wh/회라면 1회 값 × 월 사용 횟수 ÷ 1,000으로 바꿉니다. W만 적혀 있다면 아래 계산기를 쓰되, 계속 정격으로 운전한다는 가정인지 확인하세요.</li>
<li><strong>시험 조건이 같을 때만 비교합니다.</strong> 용량·운전 모드·온도·측정 규격이 다른 두 숫자로 효율의 우열을 단정할 수 없습니다. 정격 W와 연간 kWh도 서로 다른 값입니다.</li>
<li><strong>설치 견적을 같은 범위로 받습니다.</strong> 배관 연장·철거·사다리차·문 분리·가구장 가공이 포함됐는지 적고, 필터처럼 반복 구매하는 소모품은 교체 횟수까지 반영합니다. 할인은 실제 적용 가능한 조건만 넣습니다.</li></ol>
<h2>가전 사용 전력량 계산기</h2>
<p>계산식은 소비전력(W) × 하루 사용 시간 × 사용 일수 ÷ 1,000입니다. 정격 소비전력을 일정하게 사용하는 경우의 단순 계산입니다. 냉장고·인버터 에어컨처럼 운전 세기가 바뀌는 제품은 라벨의 전력량이나 실측 전력량을 우선하세요.</p>
<form id="energy-form"><div class="tool-columns">
<label for="watts">소비전력 (W)<input id="watts" name="watts" type="number" min="0" max="100000" step="0.1" required></label>
<label for="hours">하루 사용 시간<input id="hours" name="hours" type="number" min="0" max="24" step="0.1" required></label>
<label for="days">사용 일수<input id="days" name="days" type="number" min="1" max="366" step="1" value="30" required></label>
</div><button class="action" type="submit">전력량 계산하기</button></form>
<div id="energy-result" class="tool-result" role="status" aria-live="polite" tabindex="-1"></div>
<noscript><p>계산 버튼은 자바스크립트가 필요합니다. 위 계산식으로 직접 계산할 수 있습니다.</p></noscript>
<h2>계산 예시: 10만 원 비싼 제품은 언제 이득일까요?</h2>
<p><strong>아래는 실제 상품이 아닌 가정 예시입니다.</strong> A는 구매가 80만 원·월 30kWh, B는 90만 원·월 20kWh이고 설치·관리비는 같다고 놓습니다. 단가를 200원/kWh로 정하면 B의 전기비용은 월 2,000원 적습니다. 초기 차액 10만 원 ÷ 월 절감액 2,000원 = 50개월입니다. 60개월 총비용은 A 116만 원, B 114만 원으로 계산됩니다.</p>
<p>반대로 36개월만 쓴다면 A 101만 6천 원, B 104만 4천 원입니다. 사용 기간이 짧으면 더 비싼 고효율 제품의 차액을 회수하지 못할 수 있습니다. 여기에는 수리·잔존가치·전기요금 변동이 포함되지 않으므로 결과는 최종 구매 추천 점수가 아닙니다.</p>
<h2>실제 전기요금과 다른 이유</h2>
<p>주택용 전기요금은 가구 전체 사용량, 계약 종류, 계절, 누진 구간과 각종 조정요금·세금·할인에 따라 달라집니다. 이 도구의 전력 단가는 비교를 위한 가정값입니다. 추가 요금은 같은 조건에서 <strong>기존 사용량의 예상 청구액</strong>과 <strong>기기 사용량을 더한 예상 청구액</strong>을 각각 계산해 차액으로 확인하세요. 계산 결과를 한국전력 고지서 금액으로 해석하지 마세요.</p>
<ul><li><a href="https://eep.energy.or.kr/certification/certi_intro.aspx" target="_blank" rel="noopener">한국에너지공단 효율등급 제품검색</a>에서 모델별 신고 전력량과 시험 기준을 확인할 수 있습니다.</li>
<li><a href="/guide/electricity-cost/">전력량과 전기요금 구분하는 법</a> · <a href="/guide/energy-grade/">효율등급 읽는 법</a> · <a href="/guide/aircon-install-check/">설치비 견적 확인 항목</a></li></ul>
<button type="button" class="action secondary" id="print-comparison">입력값과 결과 인쇄하기</button>
<script src="/tools.js" defer></script>`;
