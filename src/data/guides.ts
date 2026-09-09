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
  {
    id: 'guide-refrigerator-compare-2026',
    categoryId: 'refrigerator',
    title: '2026 양문형 냉장고 vs 4도어 냉장고 실측 비교 및 가구별 용량 선택법',
    subtitle: '16만 검색량 키워드 분석! 신혼부부 600L vs 4인가구 800L 후회 없는 선택 기준',
    readTime: '4분',
    publishedAt: '2026.09.09',
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    summary: '냉장고 구매 전 가장 많이 고민하는 양문형과 4도어의 수납 동선 차이, 메탈쿨링 정온 기술, 1등급 인버터 전기요금 절약 팁을 완벽 정리했습니다.',
    keyPoints: [
      { title: '수납 동선', desc: '자주 쓰는 냉장실을 상단 전체로 넓게 쓰는 4도어가 허리 부담이 적고 피자 박스 등 와이드 수납에 압도적 유리' },
      { title: '가구별 용량 공식', desc: '기본 2인 가구 600L 내외, 3~4인 가구 800L 이상 권장 (김치냉장고 별도 보유 여부에 따라 조정)' },
      { title: '메탈쿨링 정온기술', desc: '내부 벽면 메탈 적용 여부에 따라 문을 여닫을 때 냉기 회복 속도가 2배 이상 차이' },
      { title: '인버터 1등급', desc: '24시간 365일 가동되는 가전인 만큼 1등급 선택 시 10년 기준 전기요금 40만원 이상 절약' }
    ],
    contentSections: [
      {
        heading: '1. 4도어와 양문형, 우리 집에 맞는 형태는?',
        body: '양문형은 좌측 냉동, 우측 냉장으로 나뉘어 긴 식재료나 냉동식품을 분류하기 좋고 가로폭이 좁은 주방에 유리합니다. 반면 4도어(상냉장 하냉동)는 하루 수십 번 여닫는 냉장실을 눈높이에 배치하여 허리를 숙일 필요가 없고, 가로로 넓은 냄비나 수박도 통째로 들어갑니다.',
        tip: '가전연구소 팁: 냉장고 앞 공간이 1m 미만으로 좁다면 문 열림 반경이 작은 양문형을, 조리대와 냉장고 동선이 넉넉하다면 4도어를 강력 추천합니다.'
      },
      {
        heading: '2. 에너지소비효율 1등급 환급과 전기세',
        body: '최신 인버터 리니어 컴프레서가 탑재된 1등급 모델은 월 소비전력량이 약 24~27kWh로, 한 달 전기요금이 약 4,000원~6,000원에 불과합니다. 정부 고효율 가전 환급 대상일 경우 구매 금액의 최대 10%를 돌려받을 수 있습니다.'
      },
      {
        heading: '3. 스마트 도어 및 UV 살균 필터',
        body: '손잡이를 잡지 않아도 센서 터치로 열리는 오토 도어와 식재료 냄새를 99% 잡아주는 UV 청정 필터는 실사용 만족도가 가장 높은 기능입니다. LG 디오스 오브제와 삼성 비스포크의 실측 스펙을 비교해 보세요.'
      }
    ],
    recommendedProductIds: ['prod-refrigerator-1', 'prod-refrigerator-2', 'prod-refrigerator-3']
  },
  {
    id: 'guide-washer-dryer-combo-2026',
    categoryId: 'washer_dryer',
    title: '세탁기 건조기 일체형(워시콤보) vs 직렬 워시타워 완전 분석',
    subtitle: '빨래 꺼낼 필요 없는 일체형의 편리함 vs 압도적 건조 용량의 워시타워',
    readTime: '4분',
    publishedAt: '2026.09.09',
    thumbnail: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    summary: '세탁 후 빨래를 옮기지 않아도 건조까지 끝나는 올인원 일체형과 대용량 이불 빨래에 특화된 상하 직렬 워시타워의 실측 장단점.',
    keyPoints: [
      { title: '세탁물 이전 불필요', desc: '일체형 콤보는 외출 전 버튼 한 번으로 귀가 시 보송보송한 건조 완료 의류 확인' },
      { title: '건조 용량 한계', desc: '일체형은 세탁 25kg 대비 건조 15kg 수준이므로 4인 이상 이불 건조는 워시타워가 우위' },
      { title: '필터 먼지 자동 세척', desc: '건조 후 콘덴서 및 먼지 필터가 자동 세척되는지 여부가 냄새 방지의 핵심' },
      { title: '설치 높이와 공간', desc: '워시타워는 189cm 높이 확보 필수, 일체형은 상부 수납장 설치 가능' }
    ],
    contentSections: [
      {
        heading: '1. 세탁 종료 후 잊어버려도 안심인 일체형의 혁신',
        body: '기존 직렬 분리형의 가장 큰 번거로움은 세탁이 끝나면 젖은 무거운 빨래를 상단 건조기로 일일이 옮겨 담아야 한다는 점이었습니다. 최신 일체형(LG 시그니처 세탁건조기, 삼성 비스포크 AI 콤보)은 저온 제습 인버터 히트펌프를 적용하여 한 통 안에서 99분 만에 세탁부터 건조까지 원스톱으로 끝냅니다.',
        tip: '주의사항: 일체형 건조 용량은 통 크기 한계로 세탁 용량보다 작으므로, 빨래를 꽉 채우지 않고 60~70% 수준으로 넣어야 바짝 마릅니다.'
      },
      {
        heading: '2. 가성비와 대용량을 원한다면 직렬 워시타워',
        body: '주 1~2회 대량 세탁이나 두꺼운 겨울 극세사 이불을 자주 세탁한다면 건조 용량 20kg 이상의 직렬 워시타워가 여전히 가장 안정적인 성능과 경제적인 가격대를 자랑합니다.'
      }
    ],
    recommendedProductIds: ['prod-washer_dryer-1', 'prod-washer_dryer-2']
  },
  {
    id: 'guide-laptop-buying-2026',
    categoryId: 'laptop',
    title: '2026 대학생·직장인 가성비 노트북 추천 TOP 5: 그램 vs 갤북 vs 맥북',
    subtitle: '15.8만 검색량! 인텔 코어 울트라 vs M3/M5 애플 실리콘 실사용 배터리·무게 비교',
    readTime: '5분',
    publishedAt: '2026.09.09',
    thumbnail: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
    summary: '강의실 필기, 과제, 직장인 외근, 영상 편집까지 용도별 최적의 스펙 기준(16GB 램 필수, 무게 1.3kg 이하, 배터리 15시간)을 제시합니다.',
    keyPoints: [
      { title: '램(RAM) 16GB 필수', desc: 'Windows 11 및 크롬 브라우저 멀티탭 작업 시 8GB는 버벅임 발생, 16GB 온보드 추천' },
      { title: '무게와 충전기', desc: '1.2kg 이하(LG 그램, 맥북에어) 모델에 65W GaN 소형 PD 충전기 조합이 휴대성 종결' },
      { title: '생태계 연동', desc: '갤럭시 스마트폰/태블릿 유저는 갤럭시북, 아이폰/아이패드 유저는 맥북 에어가 최상' },
      { title: '가성비 기준', desc: '문서/인강 위주라면 80~100만원대 베이직북·비보북, 그래픽/코딩은 코어 울트라·M시리즈' }
    ],
    contentSections: [
      {
        heading: '1. 운영체제(OS) 선택: 윈도우 vs 맥OS',
        body: '공공기관 사이트 접속, 오피스 문서(한글 HWP, 엑셀 매크로), 전공 프로그램(캐드, 공학용 툴) 사용이 필수라면 윈도우 기반의 LG 그램이나 삼성 갤럭시북이 안전합니다. 반면 영상 컷편집, 디자인, 압도적인 전성비와 스피커 음질을 중시한다면 맥북 에어 M3/M5가 대체 불가능한 만족도를 줍니다.'
      },
      {
        heading: '2. 디스플레이 밝기와 패널 반사율',
        body: '카페나 도서관 창가에서 작업할 일이 많다면 화면 밝기 최소 400니트 이상, 빛 반사를 줄여주는 안티글레어(저반사) 코팅이 적용되었는지 확인해야 눈의 피로를 막을 수 있습니다.'
      }
    ],
    recommendedProductIds: ['prod-laptop-1', 'prod-laptop-2', 'prod-laptop-3']
  },
  {
    id: 'guide-department-sale-hotdeal',
    categoryId: 'mall_sales',
    title: '백화점 가전 세일 & 하이마트 오픈런 혜택 극대화 꿀팁: 카드 청구할인 100% 챙기기',
    subtitle: '롯데ON, 더현대, SSG 쓱세일 공식몰 제휴 혜택으로 최저가보다 30만원 더 싸게 사는 비결',
    readTime: '3분',
    publishedAt: '2026.09.09',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
    summary: '대형가전 혼수·이사 준비 시 백화점 공식몰 기획전과 제휴몰 딥링크를 활용하여 카드 청구할인, 상품권 페이백, 사은품을 온전히 챙기는 실전 공략법.',
    keyPoints: [
      { title: '제휴카드 청구할인', desc: '결제일 할인(5~10%)과 카드사 무이자 24~36개월 할부 혜택을 결합하여 월 부담 최소화' },
      { title: '포인트 중복 적립', desc: '롯데 L.POINT, 현대 H.Point, 신세계 SSG MONEY 등 백화점 통합 마일리지 환급' },
      { title: '사다리차+폐가전 무상', desc: '하이마트 등 전문 가전몰 구매 시 구형 가전 무료 수거 및 사다리차 0원 지원' },
      { title: '본사 직영 배송보증', desc: '공식 백화점 출고로 병행수입이나 리퍼 걱정 없는 100% 본사 AS 보증' }
    ],
    contentSections: [
      {
        heading: '1. 온라인 최저가 검색만 보면 손해 보는 이유',
        body: '단순 포털 최저가는 사다리차 비용 별도, 지방 배송비 10만원 추가, 구형 가전 수거비가 따로 청구되는 경우가 많습니다. 반면 롯데백화점(롯데ON), 더현대닷컴, 신세계몰(SSG)의 공식 가전 기획전은 전국 무료 배송·설치가 기본 포함되어 있고, 결제 시 제휴카드 7~10% 청구할인과 백화점 상품권 페이백이 붙어 실구매가가 역전됩니다.',
        tip: '체크 포인트: 매주 금~일 주말 카드 프로모션이 가장 강력하므로 대형가전 결제는 금요일 이후를 노리세요.'
      },
      {
        heading: '2. 가전비교연구소 검증 공식몰 딥링크 활용',
        body: '본 사이트의 [백화점·몰 세일전] 탭에 등록된 바로가기 링크는 각 백화점 및 하이마트, 전자랜드의 공식 프로모션 페이지로 다이렉트 연결되어 안전하고 확실한 혜택을 제공합니다.'
      }
    ],
    recommendedProductIds: ['mall-lotteon-appliances', 'mall-thehyundai-living', 'mall-ssg-shinsegae', 'mall-himart-hotdeal']
  }
];
