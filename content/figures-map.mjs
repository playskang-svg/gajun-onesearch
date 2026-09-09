// slug → 그 글에 들어갈 SVG 다이어그램 정의.
// 기존 글 파일을 건드리지 않고 붙이기 위해 별도 파일로 둔다.
import {
  flowFigure,
  partsFigure,
  scaleFigure,
  compareFigure,
  decisionFigure,
} from '../scripts/figures.mjs';

export const figures = {
  'washer-drum-clean': () =>
    flowFigure({
      title: '세탁기 청소 순서 — 손으로 닦는 곳을 먼저',
      caption: '통세척을 먼저 돌리면 떨어져 나온 이물질이 필터에 다시 걸립니다.',
      steps: [
        { label: '배수 필터\n비우기' },
        { label: '세제함\n분리 세척' },
        { label: '고무패킹\n주름 닦기' },
        { label: '통세척\n코스' },
        { label: '문 열어\n건조' },
      ],
    }),

  'laundry-sour-smell': () =>
    partsFigure({
      title: '쉰내가 생기는 세 가지 조건',
      caption: '세 가지 모두 수분이 오래 머무는 시간이 핵심입니다.',
      parts: [
        { name: '젖은 채 방치', desc: '세탁 후 세탁조에 두거나 쓴 수건을 뭉쳐 둠', tag: '가장 흔함', level: 'high' },
        { name: '덜 마른 상태로 개기', desc: '겉은 말랐지만 접힌 안쪽에 수분이 남음', tag: '재발 원인', level: 'mid' },
        { name: '세제·유연제 과다', desc: '헹굼으로 빠지지 않은 잔여물이 세균의 먹이', tag: '악화 요인', level: 'low' },
      ],
    }),

  'washer-gasket-clean': () =>
    partsFigure({
      title: '드럼세탁기 고무패킹 — 곰팡이가 자리 잡는 곳',
      caption: '문을 닫아 두면 주름 안쪽 물이 마르지 않아 곰팡이가 정착합니다.',
      parts: [
        { name: '주름 안쪽 아래(6시 방향)', desc: '물이 가장 오래 고이는 자리. 검은 점이 여기부터 생깁니다', tag: '집중 발생', level: 'high' },
        { name: '주름 옆면 전체', desc: '손가락으로 젖혀야 보이는 면. 표면만 닦으면 놓칩니다', tag: '놓치기 쉬움', level: 'mid' },
        { name: '패킹 아래 작은 배수 구멍', desc: '이물질이 끼면 물이 빠지지 않고 계속 고입니다', tag: '확인 필요', level: 'low' },
      ],
    }),

  'toploader-clean': () =>
    partsFigure({
      title: '통돌이 세탁기 — 때가 쌓이는 곳은 보이지 않는다',
      caption: '눈에 보이는 안쪽 통이 아니라 통 사이 틈이 청소 대상입니다.',
      parts: [
        { name: '세탁조 바깥면 ↔ 외조 사이', desc: '손이 닿지 않는 공간. 검은 부스러기의 출처', tag: '핵심 대상', level: 'high' },
        { name: '외조 바닥', desc: '세탁 후에도 물이 완전히 빠지지 않고 남습니다', tag: '곰팡이', level: 'mid' },
        { name: '먼지 거름망·세제 투입구', desc: '매 세탁마다 비우면 부담이 크게 줄어듭니다', tag: '직접 관리', level: 'low' },
      ],
    }),

  'dryer-filter-clean': () =>
    partsFigure({
      title: '건조기에서 공기가 막히는 곳',
      caption: '건조 시간이 길어졌다면 고장이 아니라 이 중 하나가 막힌 것입니다.',
      parts: [
        { name: '먼지 필터 (도어 안쪽)', desc: '여기를 거르면 나머지 관리가 무의미해집니다', tag: '매 회', level: 'high' },
        { name: '물통', desc: '가득 차면 동작이 멈추고, 오래 두면 냄새가 납니다', tag: '매 회', level: 'high' },
        { name: '2차 필터·콘덴서', desc: '먼지가 쌓이면 건조 성능이 눈에 띄게 떨어집니다', tag: '1~3개월', level: 'mid' },
        { name: '드럼 내부', desc: '이염과 냄새 예방', tag: '2~3개월', level: 'low' },
      ],
    }),

  'washer-lifespan': () =>
    decisionFigure({
      title: '세탁기 — 수리와 교체 사이',
      caption: '부품이 단종된 경우에는 이 판단 자체가 불가능합니다.',
      question: '수리비가 새 제품 값의 40% 미만이고, 사용 7년 미만인가?',
      yes: { label: '둘 다 해당', action: '수리가 유리한 편' },
      no: { label: '하나라도 아니오', action: '교체 검토 · 부품 보유 여부 확인' },
    }),

  'dryer-lifespan': () =>
    flowFigure({
      title: '건조기 이상 — 판단 순서',
      caption: '청소로 해결되는 증상을 고장으로 오해해 수리를 부르는 경우가 많습니다.',
      steps: [
        { label: '필터·콘덴서\n청소' },
        { label: '증상이\n남는지 확인' },
        { label: '모델명으로\n견적 문의' },
        { label: '40%·7년\n기준 판단' },
      ],
    }),

  'aircon-water-drip': () =>
    partsFigure({
      title: '에어컨 물 떨어짐 — 원인 네 가지',
      caption: '위에서부터 확인하면 대부분 첫 두 가지에서 원인이 잡힙니다.',
      parts: [
        { name: '배수 호스 막힘', desc: '호스 끝에서 물이 안 나오면 이 경우입니다', tag: '가장 흔함', level: 'high' },
        { name: '호스 기울기 불량', desc: '중간이 위로 꺾이거나 U자로 처지면 배수가 안 됩니다', tag: '직접 확인', level: 'mid' },
        { name: '필터 오염 → 결빙', desc: '공기가 안 통해 얼음이 맺히고, 녹으면서 넘칩니다', tag: '냉방 약화 동반', level: 'mid' },
        { name: '실내기 수평 불량', desc: '설치 직후부터 그랬다면 시공 문제입니다', tag: '재시공', level: 'low' },
      ],
    }),

  'aircon-smell': () =>
    partsFigure({
      title: '냄새는 어디서 나는가 — 위치별 난이도',
      caption: '필터를 씻어도 냄새가 그대로라면 원인은 더 안쪽에 있습니다.',
      parts: [
        { name: '필터', desc: '직접 분리해 세척할 수 있습니다', tag: '셀프 가능', level: 'low' },
        { name: '송풍구 날개', desc: '전원을 끄고 손이 닿는 범위까지 닦습니다', tag: '부분 가능', level: 'mid' },
        { name: '열교환기·송풍팬', desc: '검은 가루의 출처. 분해가 필요합니다', tag: '전문가', level: 'high' },
        { name: '배수 트레이', desc: '물이 고인 채 방치되면 곰팡이가 계속 자랍니다', tag: '전문가', level: 'high' },
      ],
    }),

  'aircon-filter-clean': () =>
    flowFigure({
      title: '에어컨 필터 청소 순서',
      caption: '물에 바로 넣으면 먼지가 뭉쳐 그물에 박힙니다. 마른 먼지를 먼저 걷어내세요.',
      steps: [
        { label: '전원 차단\n플러그 뽑기' },
        { label: '필터\n분리' },
        { label: '청소기로\n먼지 제거' },
        { label: '미지근한 물\n헹굼' },
        { label: '그늘에서\n완전 건조' },
      ],
    }),

  'wall-aircon-self-clean': () =>
    compareFigure({
      title: '셀프 청소의 경계선',
      caption: '경계를 넘으면 아끼려던 비용보다 수리비가 더 나올 수 있습니다.',
      left: {
        name: '직접 해도 되는 것',
        when: '전원 차단 후, 도구 없이',
        tone: 'green',
        items: ['필터 분리 세척', '앞 커버 표면·안쪽', '손 닿는 송풍구 날개', '배수 호스 끝 이물질', '실외기 주변 정리'],
      },
      right: {
        name: '전문가에게',
        when: '분해·물 사용이 필요한 작업',
        tone: 'blue',
        items: ['열교환기 세정제 분사', '송풍팬 분리 세척', '본체 분해', '냉매 관련 일체', '외벽 실외기 작업'],
      },
    }),

  'aircon-mold-remove': () =>
    partsFigure({
      title: '곰팡이 진행 단계 — 지금 어디인가',
      caption: '검은 가루가 날리는 단계라면 표면 청소로는 해결되지 않습니다.',
      parts: [
        { name: '필터에만 먼지', desc: '필터 세척으로 충분한 단계', tag: '초기', level: 'low' },
        { name: '송풍구 날개에 검은 점', desc: '표면 청소와 건조 습관을 함께', tag: '진행', level: 'mid' },
        { name: '냄새가 강하고 안 빠짐', desc: '내부까지 퍼진 상태. 분해 세척 권장', tag: '상당', level: 'mid' },
        { name: '검은 가루가 날림', desc: '송풍팬에 붙은 덩어리가 떨어져 나오는 것', tag: '심각', level: 'high' },
      ],
    }),

  'aircon-clean-cost': () =>
    partsFigure({
      title: '견적을 비교할 때 물어볼 것',
      caption: '같은 이름의 "분해 세척"이라도 뜯는 범위가 업체마다 다릅니다.',
      parts: [
        { name: '송풍팬을 분리하는가', desc: '검은 가루의 출처라 이걸 빼지 않으면 근본 해결이 어렵습니다', tag: '가장 중요', level: 'high' },
        { name: '세척·헹굼 방식', desc: '고압수인지, 약품만인지. 세정제를 어떻게 헹궈내는지', tag: '품질 차이', level: 'mid' },
        { name: '실외기 포함 여부', desc: '대부분 별도 비용입니다', tag: '추가금', level: 'mid' },
        { name: '부품 파손 시 처리', desc: '오래된 제품은 플라스틱이 삭아 분해 중 깨질 수 있습니다', tag: '사전 확인', level: 'low' },
      ],
    }),

  'aircon-install-check': () =>
    partsFigure({
      title: '기본 설치를 벗어나면 붙는 비용',
      caption: '주문 전에 이 항목들을 확인하면 당일 견적이 달라지지 않습니다.',
      parts: [
        { name: '배관 길이 초과', desc: '기본 제공 길이를 넘으면 미터당 과금됩니다', tag: '가장 흔함', level: 'high' },
        { name: '벽 타공(코어)', desc: '구멍이 없거나 위치를 옮겨야 할 때', tag: '조건부', level: 'mid' },
        { name: '실외기 앵글·고층 작업', desc: '벽에 매달거나 높은 곳이면 안전 장비가 추가됩니다', tag: '조건부', level: 'mid' },
        { name: '기존 제품 철거·전용 콘센트', desc: '철거와 전기 공사는 별도 항목입니다', tag: '별도', level: 'low' },
      ],
    }),

  'fridge-temperature': () =>
    scaleFigure({
      title: '냉장고 권장 온도 구간',
      caption: '냉장실은 3℃ 안팎이 무난합니다. 0℃ 아래로 내리면 채소가 업니다.',
      min: -20,
      max: 10,
      unit: '℃',
      bands: [
        { from: -20, to: -18, label: '냉동', range: '-18℃ 이하', note: '수분이 완전히 얼어야 품질 유지', color: '#1d4ed8' },
        { from: -18, to: 0, label: '', range: '', note: '', color: '#93c5fd' },
        { from: 0, to: 5, label: '냉장', range: '0~5℃', note: '3℃ 전후가 무난', color: '#059669' },
        { from: 5, to: 10, label: '위험', range: '5℃ 초과', note: '상하는 속도가 빨라짐', color: '#dc2626' },
      ],
    }),

  'fridge-lifespan': () =>
    decisionFigure({
      title: '냉장고 — 수리와 교체 사이',
      caption: '압축기는 가장 비싼 부품입니다. 배수구 막힘·패킹 노후는 가벼운 수리에 속합니다.',
      question: '고장 부위가 압축기이고, 사용 10년 이상인가?',
      yes: { label: '둘 다 해당', action: '교체 검토가 합리적' },
      no: { label: '아니오', action: '수리 견적 먼저 확인' },
    }),

  'fridge-organize': () =>
    partsFigure({
      title: '냉장고 자리별 온도와 어울리는 식품',
      caption: '같은 냉장고 안에서도 위치마다 온도가 다릅니다.',
      parts: [
        { name: '안쪽 위 (냉기 배출구 근처)', desc: '가장 차갑습니다 · 육류, 어류, 유제품', tag: '가장 차가움', level: 'high' },
        { name: '가운데 선반', desc: '온도가 안정적입니다 · 반찬, 조리된 음식', tag: '안정', level: 'low' },
        { name: '야채칸', desc: '습도가 높게 유지됩니다 · 채소, 과일', tag: '고습도', level: 'low' },
        { name: '문쪽 선반', desc: '여닫을 때마다 외부 공기가 닿습니다 · 음료, 소스', tag: '변화 큼', level: 'mid' },
      ],
    }),

  'kimchi-fridge-guide': () =>
    compareFigure({
      title: '익힘과 보관은 다른 단계',
      caption: '갓 담근 김치를 바로 보관 모드에 넣으면 좀처럼 익지 않습니다.',
      left: {
        name: '익힘(숙성)',
        when: '갓 담근 김치',
        tone: 'green',
        items: ['상대적으로 높은 온도', '유산균 활동을 촉진', '원하는 맛이 나면 보관으로', '오래 두면 금방 시어짐'],
      },
      right: {
        name: '보관',
        when: '익은 김치',
        tone: 'blue',
        items: ['0℃ 전후', '익은 상태를 붙잡음', '시어지는 속도를 늦춤', '지금 먹는 김치를 여기에'],
      },
    }),

  'energy-grade': () =>
    compareFigure({
      title: '등급만 보면 놓치는 것',
      caption: '700L 1등급이 300L 4등급보다 실제 전기를 더 쓸 수 있습니다.',
      left: {
        name: '효율 등급',
        when: '같은 용량대끼리 비교할 때만 유효',
        tone: 'blue',
        items: ['같은 체급 안의 상대 순위', '용량이 다르면 비교 불가', '기준이 주기적으로 강화됨', '가격이 대체로 비쌈'],
      },
      right: {
        name: '월간 소비전력량 (kWh/월)',
        when: '실제 요금을 가늠할 때',
        tone: 'green',
        items: ['절대적인 전력 사용량', '용량이 달라도 비교 가능', '요금 계산에 바로 사용', '라벨에 함께 표시됨'],
      },
    }),

  'electricity-cost': () =>
    flowFigure({
      title: '전기요금 계산 순서',
      caption: '같은 kWh라도 우리 집 총 사용량에 따라 요금이 달라집니다.',
      steps: [
        { label: '소비전력(W)\n확인' },
        { label: '× 사용시간\n÷ 1,000' },
        { label: 'kWh\n산출' },
        { label: '누진 구간\n반영' },
      ],
    }),

  'dehumidifier-vs-aircon': () =>
    compareFigure({
      title: '무엇을 언제 쓰나',
      caption: '더위도 같이 잡아야 하면 에어컨, 춥지 않게 습기만 잡으려면 제습기입니다.',
      left: {
        name: '에어컨 제습',
        when: '덥고 습한 한여름',
        tone: 'blue',
        items: ['실내 온도가 내려감', '열을 실외기로 버림', '넓은 공간에 유리', '이동 불가'],
      },
      right: {
        name: '제습기',
        when: '덥지 않은데 습할 때',
        tone: 'green',
        items: ['실내 온도가 오히려 오름', '물통에 물이 모임', '빨래 건조에 유리', '방마다 옮겨 사용'],
      },
    }),

  'outdoor-unit-care': () =>
    partsFigure({
      title: '냉방이 약할 때 실외기에서 볼 것',
      caption: '실외기는 열을 버리는 장치라 주변 공기가 흘러야 제 역할을 합니다.',
      parts: [
        { name: '밀폐된 실외기실·닫힌 창문', desc: '버린 열이 그대로 머물러 효율이 크게 떨어집니다', tag: '가장 흔함', level: 'high' },
        { name: '주변에 쌓인 물건', desc: '베란다 짐이 열을 가둡니다. 가장 쉽게 해결됩니다', tag: '즉시 조치', level: 'high' },
        { name: '벽과의 간격·토출구 앞', desc: '뜨거운 공기가 다시 빨려 들어갑니다', tag: '이격 확인', level: 'mid' },
        { name: '방열판 먼지·낙엽', desc: '전원을 끄고 부드럽게 걷어냅니다. 물은 금물', tag: '주기 관리', level: 'low' },
      ],
    }),
};
