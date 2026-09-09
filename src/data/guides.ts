import { BuyingGuide } from '../types';

export const BUYING_GUIDES: BuyingGuide[] = [
  {
    id: 'guide-robot-vacuum-2025',
    categoryId: 'robot_vacuum',
    title: '2025년 로봇청소기 완벽 구매 가이드: 온수세척과 센서의 모든 것',
    subtitle: '150만원대 플래그십 vs 50만원대 가성비, 나에게 꼭 필요한 기능만 쏙쏙 고르기',
    readTime: '4분',
    publishedAt: '2025.02.15',
    thumbnail: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80',
    summary: '단순 먼지 흡입을 넘어 물걸레 온수 세척, 열풍 건조, 직배수까지 진화한 로봇청소기 시장에서 핵심 체크포인트 4가지를 정리했습니다.',
    keyPoints: [
      { title: '센서 종류', desc: 'dToF/LDS 센서 + 3D 구조광 카메라 조합이 복잡한 한국형 거실(전선/양말) 회피에 필수' },
      { title: '물걸레 방식', desc: '음파진동식 vs 회전형 중 압력과 분당 회전수, 벽면 모서리 돌출 여부 확인' },
      { title: '스테이션 열풍건조', desc: '자연건조는 걸레 쉰내의 주원인! 최소 45℃ 이상의 열풍 건조 기능 탑재 필수' },
      { title: '카페트 리프팅', desc: '카페트가 있는 집이라면 최소 5mm 이상 걸레를 들어올리는 오토 리프팅 확인' },
    ],
    contentSections: [
      {
        heading: '1. 흡입력(Pa) 숫자에 속지 마세요',
        body: '제조사들이 5,000Pa, 7,000Pa 등 높은 수치를 강조하지만, 4,000Pa 이상이면 쌀알이나 모래 흡입에는 차이가 없습니다. 오히려 듀얼 고무 롤러 브러시가 적용되어 머리카락이 엉키지 않는지, 브러시가 바닥에 얼마나 밀착되는지가 실질 체감 청소력을 좌우합니다.',
        tip: '가전비교 팁: 반려동물을 키우거나 머리카락이 긴 가족이 있다면 솔 브러시보다는 실리콘/고무 재질의 엉킴 방지 롤러를 고르세요.',
      },
      {
        heading: '2. 물걸레 세척 및 열풍 건조는 필수인가?',
        body: '로봇청소기 만족도의 80%는 "걸레를 내가 직접 빨지 않아도 되는가"에서 갈립니다. 스테이션에서 걸레를 빨아주고 45~60℃ 열풍으로 바짝 말려주는 모델은 걸레 쉰내와 곰팡이 번식을 완벽히 막아줍니다. 가성비를 원한다면 50만원대 샤오미 X10+, 끝판왕을 원한다면 로보락 S8 Pro Ultra나 드리미 L20을 추천합니다.',
      },
      {
        heading: '3. 직배수 키트 설치 가능 여부',
        body: '물통을 일주일에 1~2번 채우고 비우는 것도 귀찮다면 싱크대나 세탁실 수도관에 직결하는 직배수 키트를 지원하는 모델을 고려해보세요. 호텔 청소처럼 1년 내내 물통을 열어보지 않아도 됩니다.',
      },
    ],
    recommendedProductIds: ['rv-roborock-s8-pro', 'rv-dreame-l20-ultra', 'rv-xiaomi-x10-plus'],
  },
  {
    id: 'guide-food-disposer-type',
    categoryId: 'food_disposer',
    title: '음식물처리기 방식 비교: 건조분쇄 vs 미생물 vs 습식분쇄',
    subtitle: '여름철 날파리와 악취 지옥 탈출! 주거 환경별 최적의 처리기 선택법',
    readTime: '3분',
    publishedAt: '2025.01.28',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    summary: '싱크대 하부 설치형(불법 논란) 대신 합법적이고 냄새 없는 스탠드형 건조분쇄와 미생물 처리기의 장단점을 객관적으로 비교합니다.',
    keyPoints: [
      { title: '건조분쇄 방식', desc: '고온으로 바짝 말려 가루로 분쇄. 감량률 90% 이상으로 부피 감소 최고' },
      { title: '미생물 발효 방식', desc: '투입 즉시 미생물이 분해. 필터 교체비가 적으나 분해 속도가 느리고 관리가 필요' },
      { title: '소음 및 탈취 필터', desc: '도서관 수준인 25dB 이하인지, 활성탄 필터 유지비용(연 4~6만원) 고려 필수' },
    ],
    contentSections: [
      {
        heading: '1. 왜 지금은 "고온 건조분쇄형"이 대세일까?',
        body: '과거 미생물 방식은 맵고 짠 한국 음식이나 기름진 고기를 넣으면 미생물이 죽어 악취가 나는 문제가 있었습니다. 반면 최신 건조분쇄형(미닉스, 스마트카라)은 닭뼈, 생선가시, 찌개 건더기까지 수분을 날려 커피가루처럼 바삭하게 만들어 위생적입니다.',
      },
      {
        heading: '2. 1회 전기세와 필터 유지비 계산',
        body: '소비전력 350W 기준 1회 작동 시 전기요금은 약 150~200원 수준입니다. 1달 내내 매일 돌려도 전기세는 5~6천원에 불과합니다. 단, 활성탄 복합 필터는 3~6개월마다 교체해주어야 하므로 정품 필터 가격을 미리 확인해야 합니다.',
      },
    ],
    recommendedProductIds: ['fd-minix-the-flender', 'fd-smartcara-400-pro', 'fd-cuckoo-momcomfort'],
  },
  {
    id: 'guide-dishwasher-capacity',
    categoryId: 'dishwasher',
    title: '식기세척기 용량 선택 가이드: 6인용 vs 12인용 vs 14인용',
    subtitle: '가족 수대로 사면 무조건 후회한다? 프라이팬과 냄비 수납의 진실',
    readTime: '5분',
    publishedAt: '2025.02.05',
    thumbnail: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
    summary: '2인 가구라도 12인용/14인용을 사야 하는 이유와, 100℃ 고온 스팀 및 열풍 건조 유무가 만드는 세척 결과의 차이.',
    keyPoints: [
      { title: '용량 기준의 비밀', desc: '식기세척기 "인용"은 밥그릇+국그릇+수저 1세트 기준! 냄비/프라이팬은 계산 안 됨' },
      { title: '자동 문열림 + 열풍건조', desc: '둘 중 하나만 있으면 물방울 잔여 발생. 두 기능이 모두 있어야 뽀송한 플라스틱 건조' },
      { title: '빌트인 시공 시 체크', desc: '싱크대 걸레받이 높이(15cm or 10cm)와 가로 폭 60cm 규격 공간 확보 필요' },
    ],
    contentSections: [
      {
        heading: '1. "거거익선"이 진리인 이유',
        body: '식기세척기를 사고 가장 후회하는 말 1위는 "조금 더 큰 걸 살 걸"입니다. 6인용은 접시와 밥그릇만 들어가서結局 큰 조리도구(웍, 냄비, 도마)는 손설거지를 해야 합니다. 2인 이상 가구라면 주방 공간이 허락하는 한 무조건 12인용 또는 14인용 빌트인을 추천합니다.',
      },
      {
        heading: '2. 열풍 건조가 꼭 필요한가요?',
        body: '일반 응축 건조(자연 건조)는 도자기 그릇은 잘 마르지만 락앤락 같은 플라스틱 밀폐용기에 물방울이 맺힌 채 남습니다. 열풍 건조 팬이 탑재된 모델은 뜨거운 바람을 강제로 순환시켜 플라스틱 구석구석까지 보송보송하게 건조해 줍니다.',
      },
    ],
    recommendedProductIds: ['dw-lg-dios-objet-14', 'dw-samsung-bespoke-12', 'dw-skmagic-triple-care-6'],
  },
  {
    id: 'guide-dehumidifier-selection',
    categoryId: 'dehumidifier',
    title: '제습기 평수 계산법: 10L vs 16L vs 20L 무엇을 사야 할까?',
    subtitle: '일일 제습량과 물통 크기, 인버터 1등급으로 전기세 폭탄 피하기',
    readTime: '3분',
    publishedAt: '2025.01.12',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    summary: '실제 아파트 평수 나누기 2 공식으로 내 집에 딱 맞는 제습 용량 찾기.',
    keyPoints: [
      { title: '평수 공식', desc: '아파트 공급면적의 약 1/2이 적정 일일 제습량(L) 기준 (예: 30평형 = 15~16L 추천)' },
      { title: '듀얼 인버터 1등급', desc: '정속형 대비 전기요금 40% 절감 및 목표 습도 도달 시 최저 소음 운전' },
      { title: '신발 집중건조 키트', desc: '장마철 젖은 운동화와 옷장 깊숙한 곳 제습을 위한 전용 연장 호스 필수' },
    ],
    contentSections: [
      {
        heading: '1. 제습 용량(L)은 물통 크기가 아닙니다',
        body: '일일 제습량(16L, 20L)은 온도 27℃, 상대습도 60% 환경에서 24시간 동안 공기 중에서 빨아들일 수 있는 수분의 총량입니다. 물통 크기는 보통 4~5L 정도이며, 하루 1~2번 비우는 것이 표준입니다.',
      },
      {
        heading: '2. 스마트 인버터를 골라야 하는 결정적 이유',
        body: '일반 정속형 제습기는 켜져 있는 내내 컴프레서가 100% 돌아 전기를 많이 먹고 덜덜거리는 소음이 큽니다. 반면 듀얼 인버터는 습도가 낮아지면 모터 회전수를 줄여 전력 소비를 획기적으로 낮추고 도서관 수준으로 조용해집니다.',
      },
    ],
    recommendedProductIds: ['dh-winix-bbosong-16', 'dh-lg-whisen-dual-inverter-20', 'dh-shinil-large-18'],
  },
];
