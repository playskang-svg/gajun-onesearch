import { Product, CategoryId } from '../types';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  iconName: string;
  count: number;
  description: string;
  availableFeatures: string[];
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'all',
    name: '전체 가전',
    iconName: 'LayoutGrid',
    count: 87,
    description: '가전비교연구소에서 철저히 검증한 가전제품 모음',
    availableFeatures: [],
  },
  {
    id: 'mall_sales',
    name: '🏬 백화점·몰 세일전',
    iconName: 'ShoppingBag',
    count: 5,
    description: '롯데ON, 더현대, SSG, 하이마트, 전자랜드 공식몰 실시간 가전 세일 기획전',
    availableFeatures: ['백화점 단독세일', '카드 청구할인', '하이마트 오픈런', '전자랜드 공식몰', '무료 배송/설치'],
  },
  {
    id: 'refrigerator',
    name: '대형 냉장고',
    iconName: 'Box',
    count: 6,
    description: '4도어, 양문형, 김치냉장고 용량·에너지효율·소음 실측 비교',
    availableFeatures: ['4도어', '양문형', '인버터 리니어 컴프레서', 'UV살균탈취', '1등급 에너지효율'],
  },
  {
    id: 'washer_dryer',
    name: '세탁기·건조기',
    iconName: 'RefreshCw',
    count: 6,
    description: '일체형 워시타워, 비스포크 그랑데 AI, 세척력·건조소요시간 랩 테스트',
    availableFeatures: ['워시타워(일체형)', 'AI 맞춤세탁', '인버터 DD모터', '스팀 살균', '자동 세제투입'],
  },
  {
    id: 'air_conditioner',
    name: '에어컨',
    iconName: 'Wind',
    count: 6,
    description: '무풍 멀티형, 인버터 타워, 창문형 에어컨 냉방속도 및 전기요금 비교',
    availableFeatures: ['2in1 홈멀티', '무풍/간접풍', 'AI 쾌적냉방', '듀얼 인버터', '자동건조/UV청정'],
  },
  {
    id: 'tv',
    name: 'TV·스마트TV',
    iconName: 'Tv',
    count: 6,
    description: 'OLED evo, Neo QLED, 삼탠바이미 4K 해상도·주사율·사운드 실측',
    availableFeatures: ['OLED 패널', 'Mini LED', '120Hz/144Hz 고주사율', '돌비 애트모스', '구글TV/스마트OS'],
  },
  {
    id: 'laptop',
    name: '노트북',
    iconName: 'Laptop',
    count: 8,
    description: 'LG 그램, 갤럭시북, 맥북 에어 실측 배터리·디스플레이·무게 비교',
    availableFeatures: ['인텔 코어 울트라', '애플 실리콘(M3/M5)', '경량화(1kg 내외)', 'OLED 디스플레이', '외장그래픽(RTX)'],
  },
  {
    id: 'desktop_pc',
    name: '컴퓨터·모니터',
    iconName: 'Monitor',
    count: 6,
    description: '오디세이 게이밍 모니터, 고성능 조립PC, 가성비 사무용 본체',
    availableFeatures: ['IPS/OLED 패널', '144Hz 이상 고주사율', 'QHD/4K 고해상도', '지싱크/프리싱크', '게이밍 조립PC'],
  },
  {
    id: 'kitchen_appliances',
    name: '주방가전',
    iconName: 'Utensils',
    count: 6,
    description: '쿠쿠 IH 전기압력밥솥, 대용량 오븐, 에어프라이어 열효율 비교',
    availableFeatures: ['트윈프레셔/초고압', '스테인리스 내솥', '직화열풍/에어프라이', '스팀 세척', '인버터 가열'],
  },
  {
    id: 'robot_vacuum',
    name: '로봇청소기',
    iconName: 'Bot',
    count: 8,
    description: '흡입력, 장애물 회피, 온수 물걸레 세척까지 완벽 검증',
    availableFeatures: ['물걸레 자동세척', '열풍 건조', '자동 먼지비움', '직배수 지원', 'dToF/LDS 센서'],
  },
  {
    id: 'cordless_vacuum',
    name: '무선청소기',
    iconName: 'Zap',
    count: 6,
    description: '실측 흡입력(AW), 배터리 유지시간, 무게 밸런스 비교',
    availableFeatures: ['올인원 타워(먼지비움)', '레이저 먼지조명', '헤파 14등급', '착탈식 배터리', '물걸레 키트'],
  },
  {
    id: 'food_disposer',
    name: '음식물처리기',
    iconName: 'Trash2',
    count: 8,
    description: '건조분쇄형, 미생물형 감량률 및 탈취 필터 유지비 분석',
    availableFeatures: ['고온 건조분쇄', '미생물 발효소멸', '활성탄 복합탈취', '자동 보관모드', '저소음 설계'],
  },
  {
    id: 'dishwasher',
    name: '식기세척기',
    iconName: 'Sparkles',
    count: 6,
    description: '14인용 대용량 빌트인부터 6인용 카운터탑 세척력 비교',
    availableFeatures: ['100℃ 트루스팀', '자동 문열림 건조', '열풍 건조', '상/중/하 입체날개', '연수장치 내장'],
  },
  {
    id: 'air_purifier',
    name: '공기청정기',
    iconName: 'Fan',
    count: 6,
    description: 'CADR(청정화능력), 필터 등급, 유해가스 제거율 측정',
    availableFeatures: ['H13 헤파필터', 'PM1.0 극초미세센서', '클린부스터/360도', '탈취 강화필터', '저소음 수면모드'],
  },
  {
    id: 'dehumidifier',
    name: '제습기',
    iconName: 'Droplets',
    count: 4,
    description: '일일 제습용량, 소음(dB), 에너지효율 등급 실측',
    availableFeatures: ['듀얼 인버터', '연속 배수', '내부 건조/자동 성에제거', '만수 자동정지', '신발/의류 건조키트'],
  },
];

export const PRODUCTS: Product[] = [
{
    "id": "mall-lotteon-appliances",
    "categoryId": "mall_sales",
    "name": "롯데백화점 롯데ON 프리미엄 대형가전 브랜드 위크",
    "brand": "롯데백화점 (롯데ON)",
    "modelCode": "LOTTE-WEEK-2026",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    "price": 1890000,
    "originalPrice": 2490000,
    "nosearchScore": 98,
    "pickType": "top",
    "pickLabel": "백화점 세일 1위",
    "scores": {
        "performance": 98,
        "convenience": 97,
        "maintenance": 96,
        "valueForMoney": 95
    },
    "keySpecs": [
        {
            "label": "혜택",
            "value": "백화점 제휴카드 10% 청구할인",
            "highlight": true
        },
        {
            "label": "배송",
            "value": "전국 무료 지정일 설치",
            "highlight": true
        },
        {
            "label": "사은품",
            "value": "L.POINT 최대 20만점 적립"
        },
        {
            "label": "보증",
            "value": "본사 공식 정품 무상 A/S 3년"
        }
    ],
    "detailedSpecs": {
        "행사몰": "롯데백화점 롯데ON 공식몰",
        "주요브랜드": "LG 디오스 / 삼성 비스포크 / 다이슨",
        "카드혜택": "롯데·국민·신한 최대 10% 추가 청구할인",
        "쿠폰": "브랜드 중복할인 쿠폰 최대 15만원"
    },
    "labTests": [
        {
            "title": "정품 신뢰도",
            "value": "100%",
            "rating": "최상",
            "detail": "백화점 매장 출고 공식 직영 정품"
        },
        {
            "title": "할인율 체감도",
            "value": "24% 절감",
            "rating": "최상",
            "detail": "카드할인+L포인트 환급 합산 실구매가"
        }
    ],
    "verdict": "대형가전(냉장고·워시타워·TV) 구매 시 백화점 상품권과 카드 청구할인을 더해 실구매가를 가장 크게 낮출 수 있는 공식 기획전.",
    "pros": [
        "본사 전문 설치기사 지정일 무료 방문 설치",
        "롯데백화점 정품 보증 및 VIP 실적 합산 가능",
        "카드사 무이자 최대 24개월 할부"
    ],
    "cons": [
        "인기 모델의 경우 한정 수량 조기 마감 가능"
    ],
    "reviews": [
        {
            "id": "rev-lotte-1",
            "author": "김*현",
            "rating": 5,
            "date": "2026-09-08",
            "verifiedBuyer": true,
            "content": "오브제 냉장고 백화점 세일로 샀는데 카드할인에 포인트까지 합치니 인터넷 최저가보다 30만원 더 싸게 샀습니다.",
            "usageMonths": 1,
            "pros": "설치 기사님 너무 친절하시고 백화점 배송이라 안심",
            "cons": "인기 색상은 배송 대기 3일 걸림"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://lpweb.kr/click.php?m=lotteon&a=A100702444&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.lotteon.com%2Fp%2Fdisplay%2Fcategory%2Fdepth1%2F000000000003",
    "mallName": "롯데백화점 롯데ON",
    "mallSaleBadge": "백화점 단독 10% 청구할인",
    "isDepartmentSale": true
},
{
    "id": "mall-thehyundai-living",
    "categoryId": "mall_sales",
    "name": "현대백화점 더현대닷컴 프리미엄 리빙 & 디지털 가전 페어",
    "brand": "현대백화점 (더현대닷컴)",
    "modelCode": "THEHYUNDAI-LIVING-2026",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    "price": 1650000,
    "originalPrice": 2190000,
    "nosearchScore": 97,
    "pickType": "premium",
    "pickLabel": "더현대 PICK",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 94
    },
    "keySpecs": [
        {
            "label": "혜택",
            "value": "H.Point 최대 15만점 적립",
            "highlight": true
        },
        {
            "label": "제휴카드",
            "value": "현대카드 7% M포인트 100% 사용",
            "highlight": true
        },
        {
            "label": "대상",
            "value": "식기세척기, 인덕션, 프리미엄 오디오"
        },
        {
            "label": "배송",
            "value": "현대백화점 프리미엄 패키지 직배송"
        }
    ],
    "detailedSpecs": {
        "행사몰": "현대백화점 공식 더현대닷컴",
        "주요브랜드": "삼성, 밀레(Miele), 발뮤다, 드롱기",
        "결제혜택": "현대카드 결제 시 즉시할인",
        "스페셜기프트": "구매 금액대별 프리미엄 키친웨어 증정"
    },
    "labTests": [
        {
            "title": "프리미엄 큐레이션",
            "value": "만족도 99%",
            "rating": "최상",
            "detail": "백화점 MD가 엄선한 디자인 프리미엄 가전"
        },
        {
            "title": "포인트 적립률",
            "value": "최대 8%",
            "rating": "우수",
            "detail": "H포인트 바로 사용 가능"
        }
    ],
    "verdict": "감각적인 인테리어 가전과 수입 명품 주방가전(밀레, 발뮤다)을 백화점 보증으로 가장 안전하게 만나는 자리.",
    "pros": [
        "현대백화점 단독 특별 사은품 패키지",
        "H포인트 사용 및 무이자 장기할부",
        "꼼꼼한 프리미엄 포장 배송"
    ],
    "cons": [
        "수입 가전의 경우 재고 소진 속도가 빠름"
    ],
    "reviews": [
        {
            "id": "rev-thehyundai-1",
            "author": "이*경",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "content": "신혼가전 준비하면서 더현대닷컴에서 구매했습니다. 사은품으로 받은 냄비세트도 너무 좋고 포인트도 쏠쏠하네요.",
            "usageMonths": 2,
            "pros": "정품 등록 100% 원클릭 지원",
            "cons": "카드사별 청구할인 날짜 확인 필수"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://lpweb.kr/click.php?m=thehyundai&a=A100702444&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.thehyundai.com%2FFD%2Fdp%2FdptCategory.do%3FsectId%3D103",
    "mallName": "현대백화점 더현대닷컴",
    "mallSaleBadge": "H.Point 15만점 적립",
    "isDepartmentSale": true
},
{
    "id": "mall-ssg-shinsegae",
    "categoryId": "mall_sales",
    "name": "신세계몰 SSG.COM 대한민국 쓱세일 대형·디지털 가전 대전",
    "brand": "신세계몰 (SSG.COM)",
    "modelCode": "SSG-FESTA-2026",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    "price": 1420000,
    "originalPrice": 1890000,
    "nosearchScore": 96,
    "pickType": "value",
    "pickLabel": "쓱세일 특가",
    "scores": {
        "performance": 96,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 97
    },
    "keySpecs": [
        {
            "label": "혜택",
            "value": "쓱배송/지정일 설치 무료",
            "highlight": true
        },
        {
            "label": "쿠폰",
            "value": "신세계몰 가전 전용 12% 할인쿠폰",
            "highlight": true
        },
        {
            "label": "적립",
            "value": "신세계포인트 + SSG MONEY 동시적립"
        },
        {
            "label": "라인업",
            "value": "스마트TV, 세탁기, 로봇청소기, 노트북"
        }
    ],
    "detailedSpecs": {
        "행사몰": "신세계몰 SSG.COM",
        "주요브랜드": "삼성, LG, 애플, 다이슨, 쿠쿠",
        "결제혜택": "SSG PAY 결제 시 추가 5% 페이백",
        "할인율": "권장소비자가 대비 최대 35% 할인"
    },
    "labTests": [
        {
            "title": "할인 쿠폰 적용률",
            "value": "전상품 12%",
            "rating": "최상",
            "detail": "가전 전용 장바구니 쿠폰 즉시 발급"
        },
        {
            "title": "배송 신속성",
            "value": "희망일 100% 준수",
            "rating": "최상",
            "detail": "신세계 전문 물류망 배송"
        }
    ],
    "verdict": "신세계백화점과 이마트의 막강한 물류 파워로 대형가전부터 IT기기까지 최저가 쿠폰과 페이백을 동시에 챙기는 국민 쇼핑 기획전.",
    "pros": [
        "SSG 머니 페이백 및 신세계상품권 전환 가능",
        "희망일 배송 시스템 완비",
        "대기업 정품 인증 안심 구매"
    ],
    "cons": [
        "쿠폰 다운로드 선착순 일일 수량 한정"
    ],
    "reviews": [
        {
            "id": "rev-ssg-1",
            "author": "박*수",
            "rating": 5,
            "date": "2026-09-06",
            "verifiedBuyer": true,
            "content": "SSG 쓱세일 때 갤럭시북 구매했는데 쿠폰에 카드할인 먹여서 온오프라인 통틀어 가장 싸게 샀습니다.",
            "usageMonths": 1,
            "pros": "배송 진짜 빠르고 포인트 적립 대박",
            "cons": "자정 세일 오픈 때 접속자 몰림"
        }
    ],
    "salesRank": 3,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://lpweb.kr/click.php?m=ssg&a=A100702444&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.ssg.com%2Fdisp%2Fcategory.ssg%3FctgId%3D6000092881",
    "mallName": "신세계몰 SSG.COM",
    "mallSaleBadge": "12% 전용할인쿠폰",
    "isDepartmentSale": true
},
{
    "id": "mall-himart-hotdeal",
    "categoryId": "mall_sales",
    "name": "롯데하이마트 온라인 공식몰 주간 핫딜 & 클리어런스 세일",
    "brand": "롯데하이마트",
    "modelCode": "HIMART-WEEKLY-HOTDEAL",
    "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    "price": 990000,
    "originalPrice": 1450000,
    "nosearchScore": 95,
    "pickType": "performance",
    "pickLabel": "하이마트 특가",
    "scores": {
        "performance": 95,
        "convenience": 95,
        "maintenance": 94,
        "valueForMoney": 96
    },
    "keySpecs": [
        {
            "label": "혜택",
            "value": "하이마트 안심케어 보험 1년 무료",
            "highlight": true
        },
        {
            "label": "설치",
            "value": "사다리차 무상 지원 / 폐가전 무료수거",
            "highlight": true
        },
        {
            "label": "특화",
            "value": "계절가전(에어컨·제습기) 특가전"
        },
        {
            "label": "결제",
            "value": "제휴카드 최대 15만원 캐시백"
        }
    ],
    "detailedSpecs": {
        "행사몰": "롯데하이마트 온라인몰",
        "주요브랜드": "삼성, LG, 캐리어, 파세코, 신일",
        "설치지원": "전문 CS기사 2인 1조 방문설치",
        "철거서비스": "기존 가전 무상 수거 지원"
    },
    "labTests": [
        {
            "title": "폐가전 수거 편의성",
            "value": "100% 무료",
            "rating": "최상",
            "detail": "구형 가전 수거비 0원 지원"
        },
        {
            "title": "A/S 연계망",
            "value": "전국 350여 지점",
            "rating": "최상",
            "detail": "하이마트 전 지점 사후관리 연계"
        }
    ],
    "verdict": "냉장고·세탁기 교체 시 폐가전 수거와 사다리차 비용을 0원으로 아낄 수 있는 가장 실속 있는 가전 전문몰 혜택.",
    "pros": [
        "기존 폐가전 무상 수거 및 사다리차 무료 지원",
        "하이마트 전용 안심 클리닝 케어 혜택",
        "전국 지점 방문 픽업 지원"
    ],
    "cons": [
        "인기 모델은 조기 품절될 수 있음"
    ],
    "reviews": [
        {
            "id": "rev-himart-1",
            "author": "최*민",
            "rating": 5,
            "date": "2026-09-05",
            "verifiedBuyer": true,
            "content": "세탁기 바꾸면서 오래된 통돌이 수거가 걱정이었는데 하이마트에서 무료로 수거해가고 새것 설치까지 완벽했습니다.",
            "usageMonths": 3,
            "pros": "폐가전 수거가 진짜 큰 메리트",
            "cons": "주말 설치 예약은 미리 해야 함"
        }
    ],
    "salesRank": 4,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://lpweb.kr/click.php?m=himart&a=A100702444&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.e-himart.co.kr%2Fapp%2Fdisplay%2Fcategory%3FdispNo%3D1011000000",
    "mallName": "롯데하이마트",
    "mallSaleBadge": "사다리차+폐가전수거 무료",
    "isDepartmentSale": true
},
{
    "id": "mall-etland-festa",
    "categoryId": "mall_sales",
    "name": "전자랜드 공식 온라인몰 파워세일 & 브랜드 초특가 페스티벌",
    "brand": "전자랜드",
    "modelCode": "ETLAND-POWER-2026",
    "image": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    "price": 850000,
    "originalPrice": 1200000,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "전자랜드 PICK",
    "scores": {
        "performance": 94,
        "convenience": 94,
        "maintenance": 93,
        "valueForMoney": 96
    },
    "keySpecs": [
        {
            "label": "혜택",
            "value": "전자랜드 클린킹 홈케어 20% 할인",
            "highlight": true
        },
        {
            "label": "할부",
            "value": "무이자 최대 36개월 지원",
            "highlight": true
        },
        {
            "label": "혜택2",
            "value": "첫구매 고객 5만원 즉시 할인쿠폰"
        },
        {
            "label": "품목",
            "value": "TV, 건조기, 소형가전, 게이밍PC"
        }
    ],
    "detailedSpecs": {
        "행사몰": "전자랜드 공식 쇼핑몰",
        "주요브랜드": "삼성, LG, TCL, 한성컴퓨터, 쿠첸",
        "할부혜택": "주요 카드사 최대 36개월 무이자",
        "보증케어": "전자랜드 연장보증 5년 프로그램"
    },
    "labTests": [
        {
            "title": "장기 무이자 부담률",
            "value": "월 2만원대",
            "rating": "최상",
            "detail": "36개월 장기 무이자로 월 부담 최소화"
        },
        {
            "title": "가성비 라인업",
            "value": "다양성 우수",
            "rating": "우수",
            "detail": "중소/대기업 가성비 모델 대거 포진"
        }
    ],
    "verdict": "목돈 부담 없이 36개월 장기 무이자 할부로 가전을 장만하고, 5년 연장보증을 챙길 수 있는 전문 가전몰.",
    "pros": [
        "최대 36개월 장기 무이자 할부 지원",
        "전자랜드 5년 연장보증 프로그램",
        "전자랜드 직배송 안심 설치"
    ],
    "cons": [
        "일부 품목은 제휴카드 전용가 적용"
    ],
    "reviews": [
        {
            "id": "rev-etland-1",
            "author": "정*훈",
            "rating": 5,
            "date": "2026-09-04",
            "verifiedBuyer": true,
            "content": "자취방에 놓을 TV랑 세탁기 세트로 장기 무이자 긁어서 월 부담 없이 잘 쓰고 있습니다.",
            "usageMonths": 4,
            "pros": "36개월 무이자가 최고네요",
            "cons": "배송일정 전날 해피콜 확인 필수"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://lpweb.kr/click.php?m=etland&a=A100702444&l=9999&l_cd1=3&l_cd2=0&tu=https%3A%2F%2Fwww.etland.co.kr%2Fkor%2Fdisplay%2Fcategory.do%3Fdisp_no%3D1011000000",
    "mallName": "전자랜드",
    "mallSaleBadge": "최대 36개월 무이자",
    "isDepartmentSale": true
},
{
    "id": "prod-refrigerator-1",
    "categoryId": "refrigerator",
    "name": "LG전자 디오스 오브제컬렉션 870L 4도어 냉장고 방문설치",
    "brand": "LG전자",
    "modelCode": "9629576561",
    "image": "https://ads-partners.coupang.com/image1/Az6PEnU9TGTgtVYoA4ez8FR4f-pDqOIwUMLgRg5hGvS2M6EFm0B0HkhzRu7wQToKXv8_j-4kyAjXqGme2S8b7ujHTu4TgsqFY3MVNlPxuvkGka-yOx53fRM6ZeUFjwxOLhcp207ekP3sJU6f6QX79dkahrndXvDWHQc6Jk_8xmQMA9zFN6ZHRUdfM9Q4ZjgpEEzU9it24Z6dI0LKEqEi3L_Fp_4MpB6w-vOW0GTbNalyDIPXFSMO_GyTAk2awpVwwa6ukyb7-yk0pkR9WtFGi_RtFkEdgE87Hx8uhR-9wJocc-f-OqRj_FtFI6WGhtsWKQSntNSfwwwAw70ZMXE9BJ36DdBv-wxyYVSVv_2_XailXWyAY3f44cHGXFIoHHj3hiZtPvliJpMvLax3hzdgkqoLsrYPG21zoQl0huLIUxgApUm9mcvi7LkxCSquVh54KrAQsLBIk_qnzFFjD2xW9URY9-gDdsJlq7D6OtzAYZ415rQ_uU29ZQ8qHP4YhMN8w1tb5fZm0UgyBGDbNBniZ9cmJp8-e1tTnH41",
    "price": 1980000,
    "originalPrice": 2475000,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "대용량 보관",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "LG전자 디오스 오브제컬렉션 870L 4도어 냉장고 방문설치 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 디오스 오브제컬렉션 870L 4도어 냉장고 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9629576561&itemId=28761565845&vendorItemId=95699896013&traceid=V0-153-02b20de07c2798f5&requestid=20260909143345698257160867&token=31850C%7CMIXED&pt=0&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-refrigerator-2",
    "categoryId": "refrigerator",
    "name": "삼성전자 Bespoke AI 905L 4도어 냉장고 방문설치",
    "brand": "삼성전자",
    "modelCode": "8734947909",
    "image": "https://ads-partners.coupang.com/image1/IqAxthARQ8gXGRVGIm-xUM-HWi3Hlss_TbEn_qfSHVHwSwY3sWKfKUcAUsUBbTSs45OSstawV52qYaNhGj3eL9p_Rs77gqBOd6msJLbfgGCyNppkyEAEKsuhlgb_8zv454b-_TBokPugCh8RQ2OQj46GyHaiVqVdmSrDeyQX5W_RpBbsZYZ2VDz6erWyhohXnlMSqOdzeby9Fj1rGfihLNFs8BkAIcPVNJ9xSVsoRHRhwyyiueDBcB10AvIVq3p5I0OVUHklNoINJB3dveakXUVF7XooqOzT0mCCX3Sk3brbyGoGnob0fmn4eOtyIL6DDW1HqVUJwBQ02Ce1HTywvU-hQ7NfRDEkQ2IopoOvyjTueLXGqKaczE4Z6ZKvhaV7K8sVZt3RS7vtGa7f7MP2wnEho0kFxKK0TrWsIdto0FVy50a0hblPo_8prN6DDEcuwIQouhob-TP1eJtq5Nd0ExS5c7A3ilpd1WYmNVXZJp0CUc06Bvk4IzJhGVVXmxejcD_GoRiP700ut4T-UaeD0Kq47SfyWDEc",
    "price": 1649000,
    "originalPrice": 2061250,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "대용량 보관",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "삼성전자 Bespoke AI 905L 4도어 냉장고 방문설치 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성전자 Bespoke AI 905L 4도어 냉장고 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8734947909&itemId=25384283391&vendorItemId=92378167476&traceid=V0-153-be43483ab69d82ac&requestid=20260909143345698257160867&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-refrigerator-3",
    "categoryId": "refrigerator",
    "name": "[상세페이지지역확인후구매]위니아 클라쎄 양문형냉장고 521리터 RKA152TS5MV8, 상세페이지지역확인 RKA152TS5MV8",
    "brand": "[상세페이지지역확인후구매]위니아",
    "modelCode": "9311923223",
    "image": "https://ads-partners.coupang.com/image1/MbmgpId-D-tb21HQMRDFaSTTRSQjCrBNL4wVZcQ7b-ZtvSJh5iehnu9wxqxzN1FXj83U9dwfUXrW4z9MBALsqGd6IzfmpBXyXEgl89wKMBcEvKsrOLmnYoQIIt02kFDFWqswSM1zCRHhqSklf9FJ3qqSFzlhgvsowoXj-1ooqhHN8j0a4nFoU9d0JBA-QdD7r50pwg3KBng9gedXNlau-fYaDkfh5e6cFM8HdvYsTqQX9sIkyVaN0Sbhi1-bPdayIZO-seG5w9tiZ81bL3skEMVyDaMAAQ_GYhCBHP172ybaYEpyVYuMK4PNClfjakz9u4GNQOaWjE307ZoxW_aQ8dE473pxdZqjbyzBIXF8hMmoqqJTUvqAF2PKw5J1pR19K-gvyAbwCKUgLNaQsH-k8SkhwpJ15zuKDEVJoyocHDo-bpNotalf5gul1mhzyV4Jk_HVav4O-Pk2diwRSE_HbHaRLmsr_yF4OO-8w1LCjWv_tkmgQJrvLzjdUWzasvcF8FxiWW4RNoQTvZ4pIKi4NxGGave1c6onecUXoE_d",
    "price": 695000,
    "originalPrice": 868750,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "521L 실속형",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "[상세페이지지역확인후구매]위니아 클라쎄 양문형냉장고 521리터 RKA152TS5MV8, 상세페이지지역확인 RKA152TS5MV8 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "[상세페이지지역확인후구매]위니아 클라쎄 양문형냉장고 521리터 RKA152TS5MV8, 상세페이지지역확인 RKA152TS5MV8 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9311923223&itemId=27231566942&vendorItemId=94873034055&traceid=V0-153-fe4584c32fb1a736&clickBeacon=06d8ed10-ac10-11f1-847d-3c562232823c%7E3&requestid=20260909143345888135601937&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-refrigerator-4",
    "categoryId": "refrigerator",
    "name": "LG전자 디오스 AI 오브제컬렉션 832L 양문형 냉장고 방문설치",
    "brand": "LG전자",
    "modelCode": "9034631075",
    "image": "https://ads-partners.coupang.com/image1/ypdureUS-SYd63rmylRnR96s4w02sD9EE56NXUlYdzhFSC8OuW5bhDz8u_cRU0pGp15n03cvHZGeKEgDS4LXEk1HdgBMF7VISQ-ZOb0rCOGQwiiICSKwWfq4nB0Nys1ibY5Id2kah_PqBMyUhPftWanWAtp-02Fe82qQInn_YvNL2N3xWu0X003CHUkzEjHudfectqrfjRJxNDbn8m6vamAzDjiKSsiknfAzpgKR8eOG1rnfM5jgs0ZnZNIegm3VhekESXk5joTz8JWCq7vVEJjNuf4oWNfbL1ejrj-ZZzqIX6q3e_SUumxjnpP-6ajsf_sqZNeR1tuujygIXXHFSHiN19IoDTndJa0sKO9w8ezjHYohSFug6TK-BpIb_ARJ14urIfWJ2X_UZt8fnnkI1xdEl8Tm5pL7tQ1sMH4VC3CAYeUjBvHoQRzveCPf3ZEK54-n0sxKRJqXQCVo-1VVAAn6zBXlooUpsOKbbFcKxxP--VAFrEcYfIsEZbMEOQFo86k8t5c4_hqWuHzTEe9h6TObbeew5R2xEWB1",
    "price": 1392530,
    "originalPrice": 1740663,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "832L 대용량",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "LG전자 디오스 AI 오브제컬렉션 832L 양문형 냉장고 방문설치 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 디오스 AI 오브제컬렉션 832L 양문형 냉장고 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9034631075&itemId=26198982442&vendorItemId=93479061370&traceid=V0-153-0eaeddc3f9d9a6fb&requestid=20260909143345888135601937&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-refrigerator-5",
    "categoryId": "refrigerator",
    "name": "캐리어 클라윈드 슬림형 182L 2도어 냉장고 방문설치, CRF-TD182MDE",
    "brand": "캐리어",
    "modelCode": "7925617524",
    "image": "https://ads-partners.coupang.com/image1/32G5ZsASDL-A6DG632t5sr2_u7_bnIhS09C-QCUhh_3y4EypIeWajSKuS6ENZDtNmoCElu7-mSIMrrVMAHe7cvKuLl18XKn1yE5vGMboYV-tzF6S_btd0rrmg_wlS234XAhdZl-cIUB6LgGP04raYAVSmdIXbcU0hP7IMEZarQZL9Y-ZVDp1x3pR4mbvkjkL9MzCj0a1D1vQeP21mVLZ0kGVdXDdYbKtV2oWPvO_LsdD_JTXZVE7IMn8i-3BHlJ5_luS9g_a940fZMRczIaF8OR1h2fmNoBha4MuDFMA9o1kBZefTkEHPuzLm5_c7ceqdaXLm0plQPhQSs-JPex_pzlu0MmdFInzWWqudIqZlP0uXL3vOmTrBOWr7vlXWWzF_9yHHue05Cpcdc3mN1BP860iFuNo0W4MRvlbINKN-IOojGKCzEmZqi7pZbb-t01aKRb4j_H-ZcI69V8k4-I6WTYZ8i3IwjgF7lV0OuQFxOHmK4FH53cuMww-xkOD1brUb4BQiMljfAEGk8-m2Dxk",
    "price": 267190,
    "originalPrice": 333988,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "대용량 보관",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "캐리어 클라윈드 슬림형 182L 2도어 냉장고 방문설치, CRF-TD182MDE 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "캐리어 클라윈드 슬림형 182L 2도어 냉장고 방문설치, CRF-TD182MDE 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7925617524&itemId=21787675277&vendorItemId=91717204309&traceid=V0-153-39e8baefb4fa315b&clickBeacon=06e919b0-ac10-11f1-95bf-6fa0c6b66895%7E3&requestid=20260909143346003217843897&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-refrigerator-6",
    "categoryId": "refrigerator",
    "name": "LG전자 2도어 일반냉장고 189L 방문설치",
    "brand": "LG전자",
    "modelCode": "8338421081",
    "image": "https://ads-partners.coupang.com/image1/a-FjVW8YUju3hCIzax6J6vEtgnFROuXYEs-CnAgau7CZYkFsyTqUD_UMWSE4s-xeMrs5phv_RfsYYAnHgRb-oV5P8_oPcxwWhJGWS3oeflSbRuDW1aTYn5IvzvhsZF9KY7oRyx53XvbRJ7xHNtPEm-emVpRnKgPaDA41Fom_v3OHrnAxswg2zwBhzCo3WpRioayC6Nn8-75E_vl7DKvcktAMIiNH5CCas-PH31dPLN0XSCYul-4cecH2ahxM3-SosKXB9sDesCNgstFw7qNwh5JKv73Mv43xeP_GkHShV4VMbjlbSfRH88S9HbQJVhJifN_jEwJyNGWRuNA3hPhRTlmG465ma1D0bGdkNGWJ5UWpIvJiwCcv4rUch776tQcKdt8FKbIvYFeNapudxeN9SJ9xR4lV9unuxfm00itE1P8xli8H7NWaIrTB1JY16VaSmsmb_BWD6y8IFX54iPqR0rquUF2UsguTXCQQyO8fbXrhvT2hlScQR58Kr64GuhcOHkEG1hwcSlGi8WNeVxUOecY3IKurBlocKQZxGuNyuRKTeWCh2GfonoA=",
    "price": 383570,
    "originalPrice": 479463,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "대용량 보관",
            "highlight": true
        },
        {
            "label": "냉각방식",
            "value": "메탈쿨링 입체정온"
        },
        {
            "label": "에너지등급",
            "value": "1등급 (인버터 컴프레서)",
            "highlight": true
        },
        {
            "label": "살균/탈취",
            "value": "UV 청정제균 필터"
        }
    ],
    "detailedSpecs": {
        "소비전력": "월 24.5 kWh",
        "컴프레서": "리니어/인버터 10년 무상보증",
        "선반구성": "접이식 선반 / 도어 바스켓",
        "설치지원": "전국 무료 전문기사 방문설치"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "LG전자 2도어 일반냉장고 189L 방문설치 모델은 우수한 정온 유지력과 넉넉한 수납공간을 제공하여 패밀리 및 신혼 가구에 최적의 만족도를 선사합니다.",
    "pros": [
        "식재료 신선도가 오래 유지되는 정온 냉각",
        "소음이 매우 조용함(35dB 내외)",
        "도어 수납공간 효율 극대화"
    ],
    "cons": [
        "가로폭 91cm 이상 주방 설치 공간 확인 필요"
    ],
    "reviews": [
        {
            "id": "rev-refrigerator-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 2도어 일반냉장고 189L 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "식재료 신선도가 오래 유지되는 정온 냉각",
            "cons": "가로폭 91cm 이상 주방 설치 공간 확인 필요"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8338421081&itemId=24078900518&vendorItemId=83384767739&traceid=V0-153-6241d141b1291c21&requestid=20260909143346003217843897&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-1",
    "categoryId": "washer_dryer",
    "name": "LG전자 트롬 오브제컬렉션 워시타워 세탁기 + 건조기 세트 24kg + 20kg 방문설치",
    "brand": "LG전자",
    "modelCode": "7398176845",
    "image": "https://ads-partners.coupang.com/image1/vfXTJ_oQvxA1vA_2vVi6TCwxxbBgF4XGB5MuOn8ITy5VZ3PhQUxtgpsiZPjAIPv2pQIEc1fcPPvJ2vq6pot0-mTrbfy2slEs5Gu6niBXCPKJ7WZFLOBBT7f0AVJ5FAXACX9n07rIGSQ2ehifBF4nYbRqHcgg5ltwQ2CgKXBHD7JWrvuqUYTE5ZjzPwX3ZozgMMnYYr5cgg7EhoGM80fzzi4oFyIg-IPw-_VkeJZhqDBe4Cx1NnzQdrLUPbzJxAv8UQ6iYlgFvBa7NE2XrD02eCmEeoajWtWuy0gCMp0v-ziO4VEpv3dGpQPGoPT-t19I2KngcFOB-onlTyUE3gG0ROk7p9jboTceibtiMVu2wcPEwd8PdLIx5gWBelhFRyGHCVWueBKddANeGUUG9FvkUkIxJWFIjSQOrYZ3KVHJyRa1gEZH80ZRh5Qc0FWSG7XfoonX4bVLx3pMH8aHGYEwzNpzjyCbUOHj64O0g9fQrT369XHXgx1O0KyvbnW6SMzorAtL_2ujpkKbzjGK_4mcOY14RL1b-BPEnrc=",
    "price": 2502270,
    "originalPrice": 3127838,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 트롬 오브제컬렉션 워시타워 세탁기 + 건조기 세트 24kg + 20kg 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7398176845&itemId=28294664743&vendorItemId=95247529765&traceid=V0-153-002663335b18057d&requestid=20260909143346123132891517&token=31850C%7CMIXED&pt=0&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-2",
    "categoryId": "washer_dryer",
    "name": "LG전자 트롬 워시타워 세탁기 + 건조기 세트 23kg + 20kg 방문설치",
    "brand": "LG전자",
    "modelCode": "7940026711",
    "image": "https://ads-partners.coupang.com/image1/1eh6NiJo3urSCYXC1UJNigbBv_1_aqbDqtUec0x5oYSygS03YNg7p06FvZw1mNChwyS92qPKqwX9DpDxJZiUT-xbp4G8eqendW5bP9Npztx_8swR3uuc4rV78gnF_j1wLZ2yic_AI2vCm-kjbB3wUJBg-1YWCAwby9eiRlT35H4wrMz2taYYaV2N0LBds8dfNnKXohksd-lk0mg0gqJ83Wfxs0wBSTTKsxHJ1Ue2vFjKwWN4lUItyCmHSlj1Mi1ZbS5-AEl_l8NgzwubQWM3tSiPEn9eNdIaCYnB3wzSTZAVJW1_o-1ygdXgyFfexrU7B4oatEUj32BjRWTFMfcuEgjyHnSfI_5TO4VFmHElbGizxlTtQoVSCce7TDr4PKZudYd9GnlVIObK8TM-d2QMY2JoKEqjapvT_DyBIUGXt72r8dWlvcsqYWiYxT5KODwBVR9qJkDzyJzzmxAj6fCwcxW8YKM10h_JCZy8H-5Udw4XIkJec0J5cTofDIjbaBMTr2_p31_wkJ4QV4FZzMOAL3dmqKU9Xuq3TQ==",
    "price": 2250000,
    "originalPrice": 2812500,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 트롬 워시타워 세탁기 + 건조기 세트 23kg + 20kg 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7940026711&itemId=28294664604&vendorItemId=95247529616&traceid=V0-153-9614b3a564829f50&requestid=20260909143346123132891517&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-3",
    "categoryId": "washer_dryer",
    "name": "마이디어 건조겸용 드럼세탁기 12kg + 8kg 방문설치, MFK03D120B/WK-KR, 화이트",
    "brand": "마이디어",
    "modelCode": "8574563430",
    "image": "https://ads-partners.coupang.com/image1/FK4FmP1eCOs8Ryf4FKJNS3w4aD_LPUSZFowPdoxhmXD3KGR1UsJ7sLETuQqs3dwPBWB84wafHkyFvFOqisaYz_fV7ZagaN7XOEiGtg5xAn2-0sVc_ezFltUpA_fycjelyiR9e63jQjpL913q_uMyPzZkUZm4CI5NLAtNpmBbH2n31xc7dvYHA3Gm8Zz32Pj3LqxhPSs_6v2GNLM09cKaFH2dG955oa5WZVd4k_TIsGYvZW4G9tsQmxRI7cVx681_Sd7v4h7uwX6e2WR8z94IB5NQA4e5a6ruZzbPrUkBXluCZHzjUdcwv5B3qWEPvfUDdChZShN9yxEDxXUBDFFHS02kEKi_XLvEH9zfhRPWVzG4FUD4JMoN4oY4Y89znk_8Z4fg7ZtkZ2kmYtkEYdYbdm1BIzKFr8k0ChqlwVJzsWQuXtP43mA_jmCqursCMI-LZnskx4Tj1pZEw6O80OmEnbl7BeYYFKabs4kLdC3Ucvx32LN1BPYNwnkQAXMT6_tW117h4KRNCDmwpecy0VQ=",
    "price": 769000,
    "originalPrice": 961250,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "마이디어 건조겸용 드럼세탁기 12kg + 8kg 방문설치, MFK03D120B/WK-KR, 화이트 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8574563430&itemId=24846366292&vendorItemId=91853508689&traceid=V0-153-402b15f609da4b5b&clickBeacon=07146f70-ac10-11f1-9312-b4291f991a76%7E3&requestid=20260909143346259211355719&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-4",
    "categoryId": "washer_dryer",
    "name": "삼성전자 BESPOKE 그랑데 AI 원바디 Top Fit 세탁기 + 건조기 WF2420HCWWC 24kg + 20kg 방문설치",
    "brand": "삼성전자",
    "modelCode": "7360629428",
    "image": "https://ads-partners.coupang.com/image1/mWWCk9dt4YCsWQxFmR7j0y7gVXN30W1pM3xODRQ4WNjNJjzqQAJLGSzEKfnDh9rnhFI1qn8TiTQEUZJHJyCdCB1uTTteNg3jbyT3am88kq2Iy4W2vTnyu_T_okqMDZQTmmZ-N_27uPhCkEFWpZ-DK_X7gnXEx9IcU_xLzlO8JZdXGdPJOWuT8a-I8KlVdrH2vSDvkaLrZgYjPnKM32r69m18P4fUS37aRpkFUcNsAGFgSUOgNclL255fwfgjncg76N0QT7aRR6GqIUcLu-9xgMROXAXH2e6Z8lscAdPmmKn-780aywmmU-GMbPZ-YGOVSzl4KtG-Knlr9tThCSsb3oJLY_Ht4I3xNpksMGE3Qh4k-54CSAoPN9Vj3Z5XtfFESPJtsb3EeK6Q4RdOTagJq0u8CDy56kpHPBZLQq3xvQl-DVGbAP3oySvB-_ZHvixHIetWTL9TfZQyLkSnbGMvIcDldgSCoJkP9vrau3-w8dblRYLQOEIweu8pnDgePWeL5Ja54dh3oi0yfsXuybtAzdTyuEAavEM17g==",
    "price": 2029840,
    "originalPrice": 2537300,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성전자 BESPOKE 그랑데 AI 원바디 Top Fit 세탁기 + 건조기 WF2420HCWWC 24kg + 20kg 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7360629428&itemId=18962994717&vendorItemId=86088854738&traceid=V0-153-86dc7683f7655b37&requestid=20260909143346259211355719&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-5",
    "categoryId": "washer_dryer",
    "name": "한일전기 한일 UV살균 미니 의류건조기 5kg, HLD-5100W, 화이트",
    "brand": "한일전기",
    "modelCode": "8332811371",
    "image": "https://ads-partners.coupang.com/image1/X93KJN4rsva3MeheX0zf-cqMBuVqhiFNGEEgxlNZmYSLXE_QIIAbyIu6rRaKs53EPp3aH1IFhbYubDAD9-mnCp1zmnO05wtyvs9AoaJoPUz7mCmGBxIq76L0RNTawOgz1mrSFrDfszF1Y7_8C9R-zaNpSaMDBwzXqPbFtqYa6Klc_6lRqKrx19dngZYG75ZbrmQOu7dqOCGu8eYm48kukDr1xshZl6-fKNZBfBA0jW0j9nqsYo7thxqN1XUs-wbtop6cq4ruHWDqeTPj3uLsV2nKWIO5jbHYh51lxZHwkjEgH7wabVuGHoi92vh-c1A326vUed5PW1Stg7i1zwRbddyFoeVyg9BUfLy4nfgmwq2W8eEX-7ltYbYXSXiPT9GjR0Jc2luIbpjd43u5LQXWBYxdHIsV9-R7n_-Xq_gajv3GsQa29398mMDY3zkv4-E99t-ph9jj4_2rA0pe4gwGntFBQlYMZ1YQNcOrg8kkJ1QPBk2SDwRTKXwqFduA1ojKAwanKGEczSCNEmJ5w1Q=",
    "price": 359000,
    "originalPrice": 448750,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "한일전기 한일 UV살균 미니 의류건조기 5kg, HLD-5100W, 화이트 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8332811371&itemId=24058932389&vendorItemId=91347709248&traceid=V0-153-98af4053a058988a&clickBeacon=07281e80-ac10-11f1-96de-509c1bc520e8%7E3&requestid=20260909143346402198952033&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-washer_dryer-6",
    "categoryId": "washer_dryer",
    "name": "미닉스 미니건조기 프로 플러스 3.5kg 고객직접설치",
    "brand": "미닉스",
    "modelCode": "8321193275",
    "image": "https://ads-partners.coupang.com/image1/mJJdyDyuD016hEspmDeesDs0la2Z95S67ma-yjhQKdhEjgR-ia-Fwavif0ZU1PceteiIPwsNrMWVhvox9SV8_ElnAHlTzu6u1-Y0c7cM0bu1SemUv9iqMjT8ctrg5uE45Rg_M985hJABQzvVUBFXTk4ROjgj10vitVbU4dd8Z_sQI4DJRO_LUdcA5H9hitHxsiD1_Ys1HC6gHWEuv1AeoLP67aJqXUsyxtgvhZg_tKTIYWKhaP1ZKpA-ogt_p7ygF6xkGmQAgKdVAG6t2c8bTwGevmJIRzV8MEfFJsB23uOOXheJMUQLJgQFzOfMEBgZ3C_-6g521EsSzC55-0JJHTtbQImR1j2RzOydWbfxC80FHZj4gsd4APT7-A-HRfCrDeYDtw8WEzGCH9BMs4GVZllbVkqaHlZpjPRyXj1uEEMV1ZVOUKhl9ZCr38XiBaqoIPgktgNngkW2gcMoOc-e_vC3962H_GwrRokeSHJ4W80-WEzf5FFu9kXmQiPyRhj5ah1nnaTC4o09rUffz74-CK_RYl5sxSZklMhJiA0PNwqyAxlnuFLmLMrP",
    "price": 273600,
    "originalPrice": 342000,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "세탁 24kg / 건조 20kg",
            "highlight": true
        },
        {
            "label": "모터",
            "value": "인버터 DD모터 고효율"
        },
        {
            "label": "살균",
            "value": "트루스팀 99.9% 유해균 제거",
            "highlight": true
        },
        {
            "label": "센서",
            "value": "AI 의류 무게·재질 감지"
        }
    ],
    "detailedSpecs": {
        "세탁코스": "AI맞춤 / 울·섬세 / 이불 / 알러지케어",
        "건조방식": "듀얼 인버터 히트펌프 저온제습",
        "자동세제투입": "스마트 자동투입 시스템",
        "조작부": "원바디 플랫 중앙 컨트롤러"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "세탁과 건조를 하나의 타워에서 완벽하게 제어하여 세탁실 공간 절약과 초고속 세탁건조를 실현한 대표 모델.",
    "pros": [
        "세탁 후 최적 건조 코스로 자동 연동",
        "허리 숙일 필요 없는 중앙 조작부",
        "저온 제습으로 옷감 수축 방지"
    ],
    "cons": [
        "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
    ],
    "reviews": [
        {
            "id": "rev-washer_dryer-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "미닉스 미니건조기 프로 플러스 3.5kg 고객직접설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "세탁 후 최적 건조 코스로 자동 연동",
            "cons": "타워형 일체형으로 천장 높이 2m 이상 확보 필수"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8321193275&itemId=24017964688&vendorItemId=91038553989&traceid=V0-153-27716418f5547a87&requestid=20260909143346402198952033&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-air_conditioner-1",
    "categoryId": "air_conditioner",
    "name": "삼성 전자 AI Q9000 스탠드형 17형 에어컨 설치비 별도 실외기 리모컨 포함, 삼성전자 스탠드 에어컨, 일반배관형",
    "brand": "삼성",
    "modelCode": "9636467492",
    "image": "https://ads-partners.coupang.com/image1/MNp9ICJNV4JE1LRnMJfpJ2BiousXQ6lR9FRQkeOQf3E0sK2S5KIPiqRp49WbrX9pND_21qes9NnPSgAuG0orEAMjb-La9gG0BB169-apVTi3Dg6YI4yPYZ7D-bbh4cQhvS8ZheyCQr1zxMwRzOin4D1Sm4t102_KTGrJZzWXSQuzNRTX7pwYTbk0GYpzj9-rfSO-lXOLbhJpCOt19rl5K_QzTZWaMPs-pmbSxXA_v47CCpT8HILaPkriQb1j5hYzFdiRLGsz2f074OTOv-nUfglEh7xGnPQ8SPKKgEb2u8mTkKHVay1onqjBp_j-KReVXl7omkwfHMX1HiVG4b4qReOccG9rrL-2PjxtCl5CqlDWrVS_V0epaG33EA8OHF2eRx4T5L323CoLQfF6Dlobx8Nu2oi6zigCoWKDF31CQruc2M4sPgpXE7rN3PaEA3LkxCgEO-HoYnV21wfPwxp1-SHQgZSXP42I4Y3w10TiDjho4gQ0xVpLAo7T6g8vg3BrbzWdwMJsYLvvY4NUi_-86Ib2Q2JoNqxk7gU4GBAZ2vdxryCnXG4y",
    "price": 1198000,
    "originalPrice": 1497500,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성 전자 AI Q9000 스탠드형 17형 에어컨 설치비 별도 실외기 리모컨 포함, 삼성전자 스탠드 에어컨, 일반배관형 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9636467492&itemId=28789722773&vendorItemId=85293975451&traceid=V0-153-0e216184522cfb8c&clickBeacon=0739f8d0-ac10-11f1-85e4-a2d16d0d5310%7E3&requestid=20260909143346522094561596&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-air_conditioner-2",
    "categoryId": "air_conditioner",
    "name": "LG전자 인버터 56.9㎡ 휘센 오브제컬렉션 위너 1시리즈 스텐드형 에어컨 방문설치",
    "brand": "LG전자",
    "modelCode": "9531459368",
    "image": "https://ads-partners.coupang.com/image1/5675-8rpu5MxVk235_p-U_PCQc9svBphxpsePzoJTZ8tmqUQZLJb9yVJ23kyThFiFFDyyjcV-AbqR8ubZchClYV4wgVRRclWjzkmYHFj7ZXP-vKQ3o03FyowqS8igTgL_KOHwrrPnH217mhGwdnlxLX0o_-x1RphCPTXDVUE6L9XDDqYc0DrntS98LKNPBZk61nazSUvG7zcVn8HEuxuT-Sq4qkXcGZfia6OKhAVWJjAVGYozGsNBO6PLlcXYjKFD72rF3iWY7vckpUzUXZCkgY5Jla_JJWobd-YdKvgxzNDhakqW73tkaXm0oI6npUv0mwjK9J6aJgd-7nOyFlv6EmG-o3zFwKDStieMbZZ6hh64cgmIEyjn9DC8nE8PnDbgxUek8V2L9jZvnqjWxjHTTt-fwQwkOy49RjwbP3eDqSVHZ9bSZKrxBAnpt6AsHYE3KEq5oCn8B12SSfTnMKQ7OF6kk-uFpr3-cp1AvT_gLVlftgTgld0OWaWcn9TIWOaQQc-GDKiaS641FP7Li9f_mzbupA9HD6EpQ==",
    "price": 1236830,
    "originalPrice": 1546038,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 인버터 56.9㎡ 휘센 오브제컬렉션 위너 1시리즈 스텐드형 에어컨 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9531459368&itemId=28424926414&vendorItemId=95375912873&traceid=V0-153-2b6a1a9439f12037&requestid=20260909143346522094561596&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-air_conditioner-3",
    "categoryId": "air_conditioner",
    "name": "[캐리어 공식인증점] 6평형  인버터 벽걸이 에어컨 친환경냉매 무상AS 2년 농막 원룸 작은방 오피스텔 사무실 18.7m2, 6평형 벽걸이 에어컨, 일반배관형",
    "brand": "[캐리어",
    "modelCode": "9638675867",
    "image": "https://ads-partners.coupang.com/image1/I4qU-HzNXBFzfANiIz5TfG4V6VqfPL3-rlJxQRZpNOi-e62K_iQPCJTljldOpLt-Y9e50gs3fJNa4RlV7DS33SlAoLxie14U-j0EA1Y-ssou7X8LDWAA0wsz2UWOQc3kBIbounEWbDXGAN29sWufGFeysd88KmMJrKyf5-0YIp4eW3xFLK6Q-NO7sCvqUnSfPlKo2AzEL6vwqOlHw7-JAO4sd4otcjuQw0CujKkqtgzVZ8rHXDuRtsNZ8pB9gaxwX_TEa-sIi3mppaMBb06lJRQDJyZSp9rPC1YV_uA3G5ARJKw6-T9UsKak6cnrFute85MmEetTl91oOU29CYoPy1AWsBHXPM0Yv-Y7eFTx6DWitxrsweu_n6p5AFE9YBV89wxiZI552HxPSjn8KIRfIWPKQNuu7-QlJ5QAhbTh2U289GxNyswZ1NZwnaK8R8mp55W0S-JTQpx3V15FlaqP-NCPV5L2BSQUekz_BSyDBIiP6yHItGWMqxl6O_4ylL6gh9CHNMLhKltlOuKm0B_pvcUhEPOqC1D7om807rnNmw==",
    "price": 493400,
    "originalPrice": 616750,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "[캐리어 공식인증점] 6평형  인버터 벽걸이 에어컨 친환경냉매 무상AS 2년 농막 원룸 작은방 오피스텔 사무실 18.7m2, 6평형 벽걸이 에어컨, 일반배관형 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9638675867&itemId=28798007915&vendorItemId=87289997914&traceid=V0-153-19a496e2b1889a34&clickBeacon=0744f550-ac10-11f1-833d-d42953e2cd13%7E3&requestid=20260909143346641136410954&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-air_conditioner-4",
    "categoryId": "air_conditioner",
    "name": "캐리어 인버터 18.7㎡ 벽걸이형 에어컨 방문설치",
    "brand": "캐리어",
    "modelCode": "9509910886",
    "image": "https://ads-partners.coupang.com/image1/EmxAvYnRspQMpVFbEs9htE-hVoU6itH3Jdz67JA23yoIhuUyc1u1Vk_XqYqytacL5DFcQPkufze4H01fchxNXTteNqA3yBLyeZC1Cu0AgP88YDLOKpvT-Y_IRpWGO4_dTOCgiGa0QE4TfbHL_loIMflzpGLFIWCM2vbWBoMJR7m5Lo0pIDDf6rl_6Mi4c77gp0iPyIfuc-ISNMursYbHw3GZ0OwsIxSykzurZA-3LTnwGqmzPBwOKO65KEhZ_4WMIiSuGaIEgG2Fe3dKuj5Z6SubsAJPP1JWibXNpcPAoVQHQX8jtkM6gvKFnNXJ7CQX9fOHZ-niXpcFmPopj0XPW17obgXuRNSnRQB9Hmkg_88A2VoAOzcCrLfPTlozqEL1HDJSXRHZtmTsjOQyTh9S6UjoIlrnYHlBXcbyHGUE--3S0Q-sQVqDfeBoTcXVvNmGr867YA93CXqXst8Wv1IPA_YEsUd_PhBq_clHOfgp6Tuo2cK87lozmGXWGshUe-Dyv0XEqYAW0QgLcsTD2_QIIymKXAqgVt_QXhc=",
    "price": 478000,
    "originalPrice": 597500,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "캐리어 인버터 18.7㎡ 벽걸이형 에어컨 방문설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9509910886&itemId=28338814361&vendorItemId=95291068287&traceid=V0-153-4b47bfb5620ccf8a&requestid=20260909143346641136410954&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-air_conditioner-5",
    "categoryId": "air_conditioner",
    "name": "위닉스 19.1㎡ 직선형 창문형 에어컨 2세대 바닐라화이트 방문설치, EWIE067-PWK, 기본키트",
    "brand": "위닉스",
    "modelCode": "9472822526",
    "image": "https://ads-partners.coupang.com/image1/K-YdTEVpW_UugECBK74WrF84jLqS2Boz4lG0LZLX_BxTZFGOumQjmvWcc7C1Fq-V9XYo7n9mS_OWEtCaQtV4b0RQYOcgKj1EBy7qjiJrfbb9LlbF3lU_SBilwzGEnfBc71rhA3cgy7qM9RXXVU470J14FvqTX6UvYZpRBiXANHCaxNz7WIUrXYloqL_52x_g9d58jKJVB12Lp8xZJcUtcurgCLWX1nczWS_kd2DS7TNbhf2wI3VoQWc1W2gpVPfXfrpjtklcEIBHaTQ4Kx4vbpIE4gSI4mCH89DNmUGBen4_BzgoNy7P6SUbG4NG9o-raoiKiFnffPGxUu6v58y2R5VOEvqlEOKbnPulFSL9-nMztMjyTHR5RlduIR_UAjRMk9z9Kx_iiGHKSjOBIXKea6gf9wTapxLL6HWMkg1T5b2_sTJ5bMpG8kabvWdQb22tM8bp-GlOZHILVALiNyzKAxeMMDC0N_EkOeiTBSYioKoZf9uQL_4Viu1BaGUU7MSav0NRssqQcJU52Os0NsmgYA==",
    "price": 629000,
    "originalPrice": 786250,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "위닉스 19.1㎡ 직선형 창문형 에어컨 2세대 바닐라화이트 방문설치, EWIE067-PWK, 기본키트 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9472822526&itemId=28196817092&vendorItemId=95151196493&traceid=V0-153-793ac0b21d1a9883&clickBeacon=074e4420-ac10-11f1-945e-a6dcf17e6500%7E3&requestid=20260909143346703153426386&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-air_conditioner-6",
    "categoryId": "air_conditioner",
    "name": "창문형 에어컨 에어컨 실외기 없는 자가설치 원룸 소형 제습 창문 이동식 리모콘",
    "brand": "창문형",
    "modelCode": "9546853797",
    "image": "https://ads-partners.coupang.com/image1/PjfVboTlnOfcZMOiPvU7XBbL19aaNoW_jo397OMOaZaNeAJjD8GPtQS0_OweRry3TkEQS7aLKk-T6SC5OXGnXDJzhVBobZrt0MJUJMdDpdmXdN3FuZM7hh2UfLqHnbJ5tQPweV9I-YDhd7mw2LbvXmKmm3hQVFInAZ1WajCUbt8LF4cTXoRI8ZVvDU8mUmgt9jalAyEL3bh2WjTKad3qXJb-Hz268th96wCZgtE3fEen-EJePfN8hh0Bno2vMONlllV6EaBLd0FTmJ4Ze1CE6FXRVZsq6QoCiK7VdpTtrVTCsRsnG-7y687aiVpXFDl2Eq8C8yz__V8MXPpOyyTpUeoeTGUR7Em8c7hurFD_UDfDEbFkeZMTqmkaSJRQnMdj8Fm00RHA9GB7l30j03j78m6jEp9z8oU2wV6k8--OawHz6XsRf5SaUq_A1lqXUx8Ov94Zcki_JdXYeLcHTGPzCyo883MPKd7rkyWz3EoIgTCx0Yr19aKS7HlcAqaiyzg3mpMkniuyi1QLJ7fWQ7xcfbLtXxURJi3wipy4JJ0yvWpXilBDPpBruIGN",
    "price": 298000,
    "originalPrice": 372500,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "냉방면적",
            "value": "18.7㎡ ~ 58.5㎡ 커버",
            "highlight": true
        },
        {
            "label": "냉방방식",
            "value": "하이퍼 인버터 급속냉방",
            "highlight": true
        },
        {
            "label": "청정기능",
            "value": "AI 자동청정 및 열교환기 세척"
        },
        {
            "label": "에너지",
            "value": "에너지소비효율 1등급"
        }
    ],
    "detailedSpecs": {
        "냉방능력": "정격 7.2 kW",
        "제습기능": "일일 제습 최대 100L",
        "스마트기능": "스마트폰 원격 쾌적제어",
        "필터": "극세필터 + 항균필터"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "한여름 폭염에도 10분 만에 실내 온도를 5℃ 낮추는 강력한 냉방력과 전기요금 부담 없는 인버터 절전 성능.",
    "pros": [
        "바람이 직접 닿지 않는 쾌적 간접 냉방",
        "사용 후 스스로 건조하여 곰팡이 냄새 방지",
        "깔끔한 오브제 슬림 디자인"
    ],
    "cons": [
        "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
    ],
    "reviews": [
        {
            "id": "rev-air_conditioner-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "창문형 에어컨 에어컨 실외기 없는 자가설치 원룸 소형 제습 창문 이동식 리모콘 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "바람이 직접 닿지 않는 쾌적 간접 냉방",
            "cons": "실외기 설치 위치에 따라 추가 배관 비용 발생 가능"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9546853797&itemId=28482161253&vendorItemId=95432277342&traceid=V0-153-a70e139b74847736&requestid=20260909143346703153426386&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-tv-1",
    "categoryId": "tv",
    "name": "LG전자 4K UHD 올레드 TV",
    "brand": "LG전자",
    "modelCode": "9129479346",
    "image": "https://ads-partners.coupang.com/image1/-x2v-lv7YWYkllhL-2uVZbZfewS-C36TEVUipuQzeHcgqPVTicGVPyNDFTF4RAImtTQy2eB8xIE9TsUkKb3LUi-WXeR4yCMLB6l15fdYf6vLVy0ZS0xJi2BYN7_LfkTg5i-txx6F2nE0ouJN_Pf4b143Pgj0zn5B-RyeNQwnsoXIzrJ0qIgds-qJKkrQAz-AuWizsPwTkjU3zENOjYSQLENKzwDuE56b3ZBuIJzsMfT7mZbkksAs1I6mdLRl5Yh0BlqYMYxZ-cagr3nYXLkrCuRtaryw0W2Rb6zleP42ErBrmGhLqHdhsNxE2SRPPNo_kE7KeQMUuYMm1wl_aI1ZiDX90skNy6svoclRENJ7sLcyFECRQua271tJiW2USUrxPeNlm0Ry8sAtnUvlql19rElJZ9Ps_yYhm4PuqfvrVjkal9fF3C3lxW6kGGx6aMweJn_grOh_dvF5aUN_NJCwc64gwbHBiAuxYQ5FMTxyWXlec5KE2NAcUtrqE15hLSKd1ZzN_iKFzrnjkcwKpQAfOCv9sHpHhZU=",
    "price": 1384080,
    "originalPrice": 1730100,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "65인치 대화면",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 4K UHD 올레드 TV 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9129479346&itemId=26861371497&vendorItemId=93831049323&traceid=V0-153-8a5c8e8148c89f81&requestid=20260909143346796036150402&token=31850C%7CGM&pt=0&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-tv-2",
    "categoryId": "tv",
    "name": "LG전자 4K UHD 올레드 TV",
    "brand": "LG전자",
    "modelCode": "9129479346",
    "image": "https://ads-partners.coupang.com/image1/4SDulRoRVReAMuTm4ZeKDQ-TUU38_f_DQ7Elz_pTc1pSLDpxq47Ao4HPEVgL3F_ODyigqQDy3wGw_At4P2JghISgo0CkM4V8xFB4L4Tx12GWqPEQc7LrcWq9bnuoK8ZvAd2mOz952AL7uA7prqiqc1nQ6YOhx-E1QpPpye9QUG2ePkVFVHsaBeIEp84TR6kO6dG0u_YEOV6fkIvgzn7f-KzkrydQ5jX5mL9In5cygfJ6wIfS6euGP-vH5gocJu4UV2wXlwdL3hCfCxSSYV8xZQrYDlar2qJskS_77JhrjOn_n20FCcVUm-gS4ylgODnOvhTGxjOt2MNRiNGbg8x0ZVZ123qx9hP2SocoxHY7qqY4fV80wIH-u3PGVMt6iqXj8xntUoZMDYrbHFI0PdX_IwtmK74BLhfo1PJJoq3QRlZyiO9zYyCuzsRJN26R-t2Kfw8w891D0jxnudHeOudffbr8qY56KCrCS5FrCLLe_j33zolHMqho_qlobnIxxMdOR1tP-lsyvTIJnX1hxBa8TENfI06gWQ==",
    "price": 1094390,
    "originalPrice": 1367988,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "65인치 대화면",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 4K UHD 올레드 TV 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9129479346&itemId=27240792571&vendorItemId=94207782607&traceid=V0-153-8a5c8e8148c89f81&requestid=20260909143346796036150402&token=31850C%7CGM&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-tv-3",
    "categoryId": "tv",
    "name": "위드라이프 구글 50인치 스마트TV UHD 4K 최신형 대기업정품패널 안드로이드 고화질티비, 127cm/50인치, 50smart, 스탠드형, 고객직접설치",
    "brand": "위드라이프",
    "modelCode": "8814674744",
    "image": "https://ads-partners.coupang.com/image1/Q5TM0s4qxamS8f7dQx_Oh1J3xGDUEBSLjo8EeNKuQ4cPbveDMRHrw3BY8RqD4244S9o5ePQ5lk_zJZu52Jag1n1imfF_e1N3CYM31Gth7LUQA6oxQUORn0qIVJ7iwhg74p3lfiHJP6zBoq6YyfWDOatXiWc6QHx-jEK4aKQkhJVKO9vPj49c59utf0Pfr6t2SlZs9alRvMYOh6d9QL2o642mTQJ6mfoYowoAE89sIR91jimdCR87XvhaPuNMgFoMDhnw5_8o-FY08X-e2h7wOjll1S58UfUOYN8YAzscWBHJAGr39-TNfxFm4atACqkzZz7OKvBTue-EHGLNDEzOhrOLUxnFoIOdbKEnrtqTQWOr_7roXpKLpgQbCQPfd6XbG2t5-ppBiVrxHwSzGzG-XaO7f1kusyA3aPuPYm7IpZkuR3k6hni_7SFWNR7Q8kvW2Fhyrhe-UZyNNLGdcGCiMx_b1kHLrGwtwJBu5MnBLNNSoV52Y8S4n0U6hBh4YJvEV0SSavSgl7QxsGnTWwFLEIlcYKA5jkLb6871eTSp",
    "price": 394000,
    "originalPrice": 492500,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "50인치 (127cm)",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "위드라이프 구글 50인치 스마트TV UHD 4K 최신형 대기업정품패널 안드로이드 고화질티비, 127cm/50인치, 50smart, 스탠드형, 고객직접설치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8814674744&itemId=24514303781&vendorItemId=87770472927&traceid=V0-153-e439d181fdfb198f&clickBeacon=078b9b40-ac10-11f1-b945-3dcc77fd61af%7E3&requestid=20260909143347011132891822&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-tv-4",
    "categoryId": "tv",
    "name": "시티브 4K UHD IPS패널 구글OS 1등급 스마트TV",
    "brand": "시티브",
    "modelCode": "8746576181",
    "image": "https://ads-partners.coupang.com/image1/K129sEYFVJnhYM_IK-sPDLf8-OYwY7pNc8Z7W3A4V0PzDUWF0sjm_j2NqrNEcmY66r8en7u2D0pzHunOpCtnIqEJGA99hsO3StxeezJBcYSzzNNGudo-SJjJ5FxEVRF9k1N22Uuaw15BopL7OwIE--tAzTWt6SpkpgS8hlPF_4f05ZHuSA_GFrym8koqUOXhE57dEtSugZKKdLfmd_u-gHHl2mznOspuOhdiPSyjaFudckxPyw6st7QgclbttXYiwvaGEHC_8q_r96kE597iA8Z-_YTNjS-Z5xd6xmR8Cqpzsbw8ykzmDlFozIRsW-oMWh8HFeeejEBLIuiBqxbT2P9P4p18XSkd7lx0cCHU5Ah5fw2UIAd58p2JowwhhvpCpu2l8E_AW_qkf6MxVdt6RRk-owFiZcLjgnsUPRy-gAed7ipy2nU0WvQyjslIJPBA-HpXM4yJYq6sVvB-JsWpDufWVOJRyhihOCukxbt5DQZOoYx1r-g6hqdVaWCdi9zdSBMhzKPja2r2j8vAMQUtRlyKt6B40iiqfOcP",
    "price": 399900,
    "originalPrice": 499875,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "65인치 대화면",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "시티브 4K UHD IPS패널 구글OS 1등급 스마트TV 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8746576181&itemId=25409748978&vendorItemId=92403170629&traceid=V0-153-cfc56811af15d15b&requestid=20260909143347011132891822&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-tv-5",
    "categoryId": "tv",
    "name": "삼성 65인치 TV QLED UHD 4K 스마트티비 65Q7F LED 미러링 넷플릭스 유튜브 25년형, 방문설치, 스탠드형, 65Q7F, 65인치",
    "brand": "삼성",
    "modelCode": "9143509291",
    "image": "https://ads-partners.coupang.com/image1/59PMfssk1ZPu0TCF54wmgPfxYm9OAOKdunTSfxuwesHL26f9yQfiZPlql709lxj22LMIhzC1Gpoc1dsCcs5KrQnZ1mQwf2SgHKsYsETNhXcNIZ1TjEQzVuXxo8RPjPrJogCYeJhAiDfEl2CWz8ynQRsc9_ZYWuSe6oiXHmVjj2CsOyvEG71hkyw5nqxm-BEzX0TiaXoVBVwc_5oImAo3IMHHiZmp5JBI7qScN-MXJQr9Akc26IVh0NQF5H4EEWry8BEqqezdoHaQjtszchCesHq1q9NHwJy_qvVMtC0lHO084QGRGj4pSCwWUGSH1VOXOIZsEHNvhzZ7E3PjdlplCwJoyLbv8nouEcBrgGovsqRgW4qQC7AKsEcovUG3BWCjLw8TrpkMv3FTcNAI6DNO2xSxdfCMFoBFKPUvrinfM7QcJZIyiEEyKSPivyChdY9k2u7HZHyLNgLR-sRV4A9Hx40AEgyhRTxMFyI_oYIyzZ3gxHbwYiV8JThY9WEUHoJ97u8DUce6ui7QItG2Ke_P4tMhU7N9uvJLWrPrEIGW",
    "price": 764950,
    "originalPrice": 956188,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "65인치 대화면",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성 65인치 TV QLED UHD 4K 스마트티비 65Q7F LED 미러링 넷플릭스 유튜브 25년형, 방문설치, 스탠드형, 65Q7F, 65인치 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9143509291&itemId=26916400191&vendorItemId=95323590679&traceid=V0-153-3db8baef2e402b46&clickBeacon=079deac0-ac10-11f1-be98-8f7cc3d3150c%7E3&requestid=20260909143347173130057634&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-tv-6",
    "categoryId": "tv",
    "name": "시티브 4K UHD HDR 제로 베젤리스 TV",
    "brand": "시티브",
    "modelCode": "7070269952",
    "image": "https://ads-partners.coupang.com/image1/0Z3BQtK1izSjAqID0Qcf7qZXYXNRjfCsGR0xba2MZn14lRgQL7H4AAmq6-7MoBWsll_6J-9hj3hGNWDWgIje_f-WV6XNPbuY7CraRMtq9k211S3LbJWJYSdwtB_2a0_5mY9hl2HduzoWPESQTgigEmi6zmF93hcXf6C6yZ2iQIxeq4k3NV2s3K3xvgCHV_BvW-xsD_5GIcu0HShNwif4UDg8EqWv8vzztXnhiS5x6pQAUq88U0-6XCuq1CGBNEaLC2YQFJ7IQIICCsNgz2vTvHuXq8oc2SNx8KvteByXIYo-i6G34tvJfY_1vwjwmn7amz3JVmQvMm-12hlKex9zB6OnWKoYbyB82SHq0MD71fOQwA26fmtPSPT5wTGiti_34yYd0kW3DsksJ4HUHRufdYZbkhmu6jTaAi94ud0FjAkkaapb9TMt-p1wE2zh7PXmDSNgLawCBrMogcaq6DPLp3JYiZRCPi8aMb3GJaQ2zb_C0VoFu4YF997tkUkrEpWBFlJ4qh3_D4E_vABMUYOBBxtavNdZdyQtqNniq1Xd4khdTkZRdluYTYCRj_1rl0SfFCg=",
    "price": 609900,
    "originalPrice": 762375,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면크기",
            "value": "65인치 대화면",
            "highlight": true
        },
        {
            "label": "해상도",
            "value": "4K UHD (3840 x 2160)",
            "highlight": true
        },
        {
            "label": "OS",
            "value": "구글TV OS / 넷플릭스·유튜브 내장"
        },
        {
            "label": "사운드",
            "value": "돌비 오디오 입체 서라운드"
        }
    ],
    "detailedSpecs": {
        "패널": "IPS 광시야각 정품 패널",
        "주사율": "120Hz 지원 / 게이밍 모드",
        "HDR": "HDR10+ 생생한 명암비",
        "연결단자": "HDMI 2.1 x 3 / USB x 2 / 블루투스 5.2"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "OTT 스트리밍과 콘솔 게임에 최적화된 화질과 직관적인 스마트OS를 탑재하여 거실을 영화관으로 만드는 디스플레이.",
    "pros": [
        "베젤이 거의 없는 보더리스 슬림 디자인",
        "리모컨 원클릭 OTT 다이렉트 실행",
        "또렷한 음성 전달 사운드"
    ],
    "cons": [
        "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
    ],
    "reviews": [
        {
            "id": "rev-tv-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "시티브 4K UHD HDR 제로 베젤리스 TV 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "베젤이 거의 없는 보더리스 슬림 디자인",
            "cons": "내장 스피커 베이스가 아쉬울 경우 사운드바 권장"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7070269952&itemId=17555408786&vendorItemId=84722236637&traceid=V0-153-e0d19f15d75cd04f&requestid=20260909143347173130057634&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-1",
    "categoryId": "laptop",
    "name": "LG전자 2024 그램 15 코어 Ultra5, 에센스 화이트, 256GB, 16GB, WIN11 Home, 15Z90S-GA5VK",
    "brand": "LG전자",
    "modelCode": "9311781498",
    "image": "https://ads-partners.coupang.com/image1/aHejfWItU_AWmH-raBPcOcQaRpj2908xSleu72T02K-2Ps64LVyw1g8K9HSY_GbMi7tC9yLrK81quPvTpq31JaeXxH-QinoSdF7QwvU2RrhgnP8AY3Ck-U8WYcj20cZByU_Xr1eJD7FcDeKKge4FYPMmIpf19Ule4BDjaRpAC6eTSQuLA1pXp97mFqRzrsZVgGyQPkPFuLdABar1hLyvvPVYtzMLA7FYMIyYJThFclrbKs0yCn5WkSG1yA8vUt3LPvkP3Xfd8FPpkE0rArvJaWx5eHrhls58E5MaPxvyN2uYKF8zYOmjOL94WCaWyD8OC8Ho7m_mq3aUFPYpEBykR74EneJcDGSypgfBKs3Ihx9jm_VOrjjwMS3TnpIY_eTy2F3mF_RAeok8O0hU-XtRA-1A8whtj-F00zQNS3NZOKjpUMbspw68u1wudYwGaMQdoEK6zl88Mq9ZrtC9elydn3ru4zuQEwrh1MAnozEMSRiatt9Vl5Fdk_0pR9sO604I7zMKcz7xzgK8d69npw==",
    "price": 2328000,
    "originalPrice": 2910000,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "인텔 코어 울트라",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.1kg 초경량"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 2024 그램 15 코어 Ultra5, 에센스 화이트, 256GB, 16GB, WIN11 Home, 15Z90S-GA5VK 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9311781498&itemId=27634996654&vendorItemId=94341787943&traceid=V0-153-b11f1ba419a61e20&clickBeacon=07adf050-ac10-11f1-b687-13c4d88aa7d5%7E3&requestid=20260909143347287136411152&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-2",
    "categoryId": "laptop",
    "name": "LG전자 2025 그램 16 코어Ultra5",
    "brand": "LG전자",
    "modelCode": "8518435269",
    "image": "https://ads-partners.coupang.com/image1/rCn7qjcUlYful2mQrGHz7hw012xnljOvCObeZoFwtFiCbKBv4AtiyPf0RxAyNFWBIRyBQnD1_g9Ubf_Vour629RXVEgB_PocCKk2lCLQl0_p9SIaYNoECrTuBCodeuDob1I3etGlHELIF2CK1wIHvr6Us43UCiOhf64wX_wQtrCeEykQqQ6KL7Qoi_LUyTslA1xtbiMbe8EQ-V51QOz6OhMvlQeFsUuqMSNYPmQqfYnwQPzuzrMIt-3zafrk5j6uHSulVKfwnzhN_DY8a4njybEH-avm3Nfn7GpzVHAEVe6EY6HfR4aOJ5gFPDpLhe2Jyka_AQ_NWTnqP_lbRmsDnfuF4JmG9gPWxHwBUBIu6nBpSuMgaGpXm2Bm9zwJuCpfPOOHlbHOXLpYpXf5R_C3hZkkHV841-LF-oxngbV1ygd1QdmY46yqnk2G60BkcLlHtkMYofrVaoca5EOuay9ueo-Yn_Ai61-3d1F3Xi0VYaDGKWFOFMSLfD-_cGLGLz99Q-4qO-llUWgZ6KgzqtTJrphKxp1HTd_yMw==",
    "price": 1790000,
    "originalPrice": 2237500,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "인텔 코어 울트라",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.1kg 초경량"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 2025 그램 16 코어Ultra5 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8518435269&itemId=24662380535&vendorItemId=91672793047&traceid=V0-153-5de175ba32c515f0&requestid=20260909143347287136411152&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-3",
    "categoryId": "laptop",
    "name": "삼성전자 갤럭시북4 인텔 i5 15.6인치 사무용 학생용 업무용 인강용 가성비 노트북, NT750XGRA51A-CK, WIN11 Home, 16GB, 256GB, 그레이",
    "brand": "삼성전자",
    "modelCode": "9668691718",
    "image": "https://ads-partners.coupang.com/image1/GCveAbEFOORAw735GD6rAox6TJJHYDlA1KRiIPwhoiL7RHk7CT4Z_Kr-NyOjpYhbIFgUb_g3-8XzXDdtsnTeizp4M84arMA03vcYElb5OzuH5ICziO6Jfc9VqwXZzRtHq5Ns5vAkaRtLoK4_w5XZB0GtzgJSca4OfK0QzFeqtZw5fjAh3nkM3-oZjZGIiJG0DVIslLc4gi-XCBieqRzAAsDviOwI59TICwVyVeGoyaYwzu9XE5k0_bvVZhQTJLNFCGwmZid1f_0LE97go4ZqDmQtFco3jxv4a3BU98mEiaj3EZvC6Jk1BbX-F9j59TH148IQAtweecpfR-ZrhU0kT-fN_HaNWhqx9icXTqW9p8WTGk56K1WUX_1pnXoD5AlcNQRwW0EG5Cg4PCBGZqiqzdA_dRaZzad8w2WXOQ5oyW5LDz_auNRGP4iM00-GWQgi2soC5lhjZZOIIGuByGgfSk7I00D9CJPFiE5KBZSfAixYzKuUHkeMsAcYYyX-w3JQh18FKaMuIi7CRLGCXYT-gNaOFWB5gCuvyZSCedIqfg==",
    "price": 1299000,
    "originalPrice": 1623750,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "최신 8코어 CPU",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성전자 갤럭시북4 인텔 i5 15.6인치 사무용 학생용 업무용 인강용 가성비 노트북, NT750XGRA51A-CK, WIN11 Home, 16GB, 256GB, 그레이 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9668691718&itemId=28907637666&vendorItemId=95839694336&traceid=V0-153-6b89e915f4d01246&clickBeacon=07c4fac0-ac10-11f1-a2e2-a453423b0d16%7E3&requestid=20260909143347395153426576&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-laptop-4",
    "categoryId": "laptop",
    "name": "갤럭시북4 15.6, 코어I5 13세대, 가성비 노트북, 한컴오피스팩 동봉",
    "brand": "갤럭시북4",
    "modelCode": "7991194687",
    "image": "https://ads-partners.coupang.com/image1/2VD5mQaXkKyHT3a52QW2Xr0sdFPZbdHAtAla1wLpMsxJago11IjXvRxf3HThr7PB8fqFEzp8vUHeALLi5QFkcnDXLh4MHIlRVY9vCbuyxpp-qVTrewC09BFu4G131yCTT8otl1Eniu6Ofu0gBPiqfQmBfGUhSAfx-OP6AmTQZ3bxJOXE9aI_TZYx6cYQMHpI8QxEekH_yYIoTj5eE0D1cvd2tmpiNKPmkiDgI4_ShX3JEifo7SZxu2I8iPUeaIKWUSHt2jXf2L98oQKQcHZMq0Z_2a4t_pjjgXdjt2UMslHAw7dYXXF8KQCWzqjIUqfRoJ5a0iBxasrPsD7HoV-kVzrbBp3VvRMAmIdvmOMWzzFtKT9BxUipJxV9yHUU35dOpQweKMMBFPopav2r3FnGyd-uD_5wYCphgVnH57TPhFQnNmBx9ZNJKaBzl8lr2RwElA5S4HjOclOtXabZeDEDhL9fss_sGQpCTF1yApBieJOXuaxoAjWnEbsHVQY8xMkvdmUMpWBPwXOwicZ5RhmZVn6_Tc_Jidcij1l4rxePAa6tXvQCgC7lV6I=",
    "price": 1349000,
    "originalPrice": 1686250,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "최신 8코어 CPU",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "갤럭시북4 15.6, 코어I5 13세대, 가성비 노트북, 한컴오피스팩 동봉 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7991194687&itemId=22212816615&vendorItemId=89258837406&traceid=V0-153-77b933ac65077d2a&requestid=20260909143347395153426576&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-laptop-5",
    "categoryId": "laptop",
    "name": "Apple 맥북 에어 15 M5칩",
    "brand": "Apple",
    "modelCode": "9410641499",
    "image": "https://ads-partners.coupang.com/image1/fgqiZ-7o4XGJHsxGfj08sS9PdPSS9EqAxtXp6qAWE5YnQXj-lyXFQu2rEYnxxYNeWfNh0DnV_sVBBneafIDIg_zDDXR2PchHCTEdRL_bQN88UVni2pohLptf_nSWNSjtTqezrqbNiO3sEUIHUNFHM8Uh1d50KF79Z25Siy-KPJPP3qpotLh9UXJkJ9ll90Ng597CzXWf1ZQhkaudSJ-DILfj5Fa6jaS2yM_Bua3xCre-h-V0b9duk_Yb_fkX9gSsAxqw-dr9QWaTYxPRXNxn11Fe3dWXlfVFiR0jNqIA6N8BIcGWp7Xj1ID9mSpDg4Npk6zB-u5iXG1zpiKojQjuYrywuSy6HWsY64CC3eBqicMCUJn7ZbkvWOP4Ogo4MoSMpwL76oJNZwgx5zxKYd0xK95ZaTca5jtMpAfxcIfqg4Sm2sAD0xRF2UpOksTuIcf0etkhQNFiUTIZpylXbKsEiafLzsiolyNn7mELMZp0bUoe5BMf0UcW-WIfcohYxAGdwZWVB6CQxnKu1XCdOCTq_CUAIbsUphgV",
    "price": 2490000,
    "originalPrice": 3112500,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "Apple 실리콘 M칩",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "Apple 맥북 에어 15 M5칩 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9410641499&itemId=27961674329&vendorItemId=94919713459&traceid=V0-153-f68f1f6dd465d21b&requestid=20260909143347549135602403&token=31850C%7CMIXED&pt=0&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-6",
    "categoryId": "laptop",
    "name": "Apple 맥북 에어 15 M5칩",
    "brand": "Apple",
    "modelCode": "9410641499",
    "image": "https://ads-partners.coupang.com/image1/RwNitkuDbAr6T7XyR2Hi27qAbFz8rRwoxVsP2yjYXzRD305G6YAfTuX-OdtT5unR3NmmURcxXd3ScyB-a9LIj6BXNn_fZ8H6yPxX7XNoUR5JtTNnoBFzq817MdChuZqYkLQ3glRueWR05NU8cwtS7NoEYBEIXcBVxd51Nc_V4Yca8440suf1QynYwkZ0Nb1RilSpSLgKA5TmBnNL1tm_2AW_TvurmM8JLIZkDPPyGvw-f882H4b6r7Y8VPGA5sMWKNZi5i1XJ8m7ZORrfRB4neYjKI8e8YTU71FxrXD4EHs3uiZdTz4wwXIM742HZ_vYM3xZoScTTvlQlsr8PoeQO71a7qEZhLds7_CiThL0LHFJmVu-GbSQNdPbNXak7zJr0Cvgu1_ctRYBPzHcX-q8oifUULgYQLH-7NQDy701jvUyREiFNhjgicpJRVjf3zL_L7enSEqNDw5H2SGUUswPLajJLPxQPderrco7JYAlSI44yWIADeV1Vk1p6QyLIYdWGSlzqoM3n2ikrvRHF6ouJPvjEyjCccH2",
    "price": 2318190,
    "originalPrice": 2897738,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "Apple 실리콘 M칩",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "Apple 맥북 에어 15 M5칩 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9410641499&itemId=27961674327&vendorItemId=94919713456&traceid=V0-153-f68f1f6dd465d21b&requestid=20260909143347549135602403&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-7",
    "categoryId": "laptop",
    "name": "에이수스 2026 TUF 게이밍 F16 코어i5 인텔 14세대 지포스 RTX 5060, 예거 그레이, FX608JMI-QT273, 512GB, 16GB, Free DOS",
    "brand": "에이수스",
    "modelCode": "9505235165",
    "image": "https://ads-partners.coupang.com/image1/nNDqdy9cdqtTuGXInOoYI2pNxA-JvbOCCaDTxs6MsrNgUx0Zc5LzQErwrctGhzNKKnlbDzWORW3z2saTj4PIDUP_-PXXAGi7-ShQrJvSpUO0QkUUNFCdZb8_MqD7UtF-lZUA18OdmnbDrxfxQBV_RAawk7PP8WP9tRgEpWHjNvYFCs7h7QhrMgmGruI9z_H-cJxORFxVAheyEd-_UBtButfq9K0-f1D1Iy6FNhn_m5FpY6RtbsgA8hA9he4VB4uWRxvMW7GBSO9NN105e5kwIu2ggVS1mK_UUmUcOYEhxf16_5yFcEZJ8IVH_5XCTMGXTIt02N8ugGonUKn3zYOSng7i3gkljdp1LhKUTJ_XgDsvyV5oUKCoKCZnhfBZrvzPp57SJCbaNx7ocf3OGsqhHYYpZ2RfVSFjzTdT6XbuugmZrgzqYLYbdeqN27e5OXp73SGXuZ4pLG9UwOkcPnLZlBVFPWdJOGF_r2LAqZ8o_rd6XjBFN0PPX8LqL8hHr-adkXKE4hOOkGKWKTmNYgSr",
    "price": 2599000,
    "originalPrice": 3248750,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "최신 8코어 CPU",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-6-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "에이수스 2026 TUF 게이밍 F16 코어i5 인텔 14세대 지포스 RTX 5060, 예거 그레이, FX608JMI-QT273, 512GB, 16GB, Free DOS 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 7,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9505235165&itemId=28321344646&vendorItemId=95273910920&traceid=V0-153-5ebf6b541c20c92b&clickBeacon=07e1f8a0-ac10-11f1-b559-3b87e53cf308%7E3&requestid=20260909143347671001686823&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-laptop-8",
    "categoryId": "laptop",
    "name": "삼성 게이밍 노트북 인텔 코어 i7 6세대 지포스 920MX 외장그래픽 FHD Windows 11",
    "brand": "삼성",
    "modelCode": "9640638606",
    "image": "https://ads-partners.coupang.com/image1/9yICXyYFwf73qGZz9zDUQEwVaw08LjCGpJ1G61Lk3AIJ7giVFji9edDtGlAQbzBks-qXZ2R5JSSrQgOD2DplqyOBVo2HxZYrevhmKLMuEm1yJYNLrAtkoZOd6uiWNF8Rguav7zrkVYsN9sLo8ltB1cef2XDXCVR-PcEPDZECKGGLPtNFBikTO4Ur3K_P09AuwMz0T6ftU7ZvoaASBhlPhZUTI7Ls-r-WRMXKvzUBbEsz7mLg_av5Vc23Eg7D3_pzSTLmd55XGYU6PV5HKOwrVXHM8A0x6M4zYrQh9d8q8uqmaYFpNhAmkuSNfsMoeiMdTORNsr68ebO_wJT3h8sC0mCOhjJL08e1TdMpxny8VYRNoM8Lh3j4XIPxB3ykVoytqsmSqLA20SrE5DMhsrlrPIWyo7B0i8n4JFYkLegO5rSqcI2wFNkeSuSjWcFPCcd8QyW-RodKXkqrYxEHTNRkxD7tOKhu5ethHthRMU0ePYWR5biifXZjUYMckLd77mT7JoEYII5oWT5KP3s4GBFukcdvj-O5lBOOL9bpR-dFF6vOk5QxTehs7g==",
    "price": 330000,
    "originalPrice": 412500,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "프로세서",
            "value": "최신 8코어 CPU",
            "highlight": true
        },
        {
            "label": "메모리/SSD",
            "value": "16GB LPDDR5X / 512GB NVMe",
            "highlight": true
        },
        {
            "label": "무게",
            "value": "약 1.4kg 휴대성 최상"
        },
        {
            "label": "배터리",
            "value": "최대 20시간 사용 (초고속 충전)"
        }
    ],
    "detailedSpecs": {
        "디스플레이": "15.6~16인치 2.8K OLED / 안티글레어",
        "운영체제": "Windows 11 Home / macOS",
        "보안": "지문인식 전원 버튼 / 안면인식 IR",
        "무선통신": "Wi-Fi 6E / 블루투스 5.3"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "대학생 강의실 통학부터 직장인 외근, 영상 편집까지 한 번 충전으로 하루 종일 쾌적하게 작업할 수 있는 스테디셀러.",
    "pros": [
        "한 손으로 들어도 부담 없는 가벼운 무게",
        "선명하고 눈이 편안한 고해상도 패널",
        "장시간 타이핑에도 편안한 키보드 타건감"
    ],
    "cons": [
        "고성능 3D 렌더링 시 팬 소음 약간 발생"
    ],
    "reviews": [
        {
            "id": "rev-laptop-7-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성 게이밍 노트북 인텔 코어 i7 6세대 지포스 920MX 외장그래픽 FHD Windows 11 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "한 손으로 들어도 부담 없는 가벼운 무게",
            "cons": "고성능 3D 렌더링 시 팬 소음 약간 발생"
        }
    ],
    "salesRank": 8,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9640638606&itemId=28805587369&vendorItemId=95740787631&traceid=V0-153-98ff0c1f6a52143c&requestid=20260909143347671001686823&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-desktop_pc-1",
    "categoryId": "desktop_pc",
    "name": "LG전자 FHD 울트라기어 게이밍 모니터, 60.3cm, 24GS50F",
    "brand": "LG전자",
    "modelCode": "8548561064",
    "image": "https://ads-partners.coupang.com/image1/16vKlE0Xq3tYvXWc12-XEMr9B4pcl_-t8fVKlxyX6CW6WaH6uruU2RWoSjsccMc_D8QVI8BMTZYvSg5jrWbGe2M0pBYaxKCWEEXY6QliTcVK91YgAwfnd9NWXSOdjDe_VZSZErlNOc1HQ6tXUGJr8WIzsuTKZrGsgEeIrZRfmeGGt-05KgmoqqEC40VN0GEyYEc_D3bjEv4On-YVVimcVNNAwr9GnrUGALBv5xiJH0hHwtb6YpscUu5pq9GLAQDTV_VaV0kvQAE4DxsfpcFE0XjuI6rBDRm3HkYYmidnaRB_fspuzafAFByUMWYjtEydr0O7YPO5UNnOOWGRfFqQDvq0BGD5Bz23K2-lCgjy2K4WOjcioMZBN6NokYMywvQxY2GRbuIcjxJGsztI_ivTdQE0b4fA9p9ovSaUjHKiwWNivkZTk0anJb8MBudqLuhKfuxvt0JQwoDEoMeZpqfRPjZFBGUHmb3ZiWhKKR8XfBH18dSnDE_Iu9KiVVvQAAGewCEesxmHjN_OC97y-3s=",
    "price": 219000,
    "originalPrice": 273750,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 FHD 울트라기어 게이밍 모니터, 60.3cm, 24GS50F 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8548561064&itemId=24407399545&vendorItemId=90066002765&traceid=V0-153-7697136d44038b64&clickBeacon=07f1fe30-ac10-11f1-9cd8-f50c17cec4a9%7E3&requestid=20260909143347737293668573&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-desktop_pc-2",
    "categoryId": "desktop_pc",
    "name": "한성컴퓨터  FHD IPS 144Hz 게이밍 모니터",
    "brand": "한성컴퓨터",
    "modelCode": "8686571087",
    "image": "https://ads-partners.coupang.com/image1/KTT2ekcmAfV6bMgNKQbx4W183qhHoN1avDHcy26C8xriIO6llXWApG-yxvBJoGrBk3azFgmdMZa_uYHcE9fS552O52ZEw-AoiMPnoy0wWEAZngCJD2oMCaKo2i0w-UbClrw2M1ERRj1UZbqnosq2nf9g1-bPYygxMVtZeEzitp96pbR8LjR2vqhH5PETG1Y4jAyL0qvQ8vLkIcKWHlqdPuCIFLxSAjqtYfJBKFZkcFm_-EE6W0ZSBudbxVGNonV3bqDmNbO8wXwPAT-FAitUWZke9k1SybhwkCSBl1NhS48T0Zurma2FuLRJX8XeVcvuzfxe5W_fLLV5ioRHVBXzZncjOOEXVCPRMxmiv3XAkbOBC27J505iqbtluz9u0DPCOui3KOkfAag2wzP4C4xgH-u1ycy0BY4gvvhiDrwQ_9aXYpwnZnMThI_IhjpNuxG0WJzp8XB7Aq37J2ZL9Nxp3tbvCqm6QExoM0wwrqS1NesKKDpA0d1SJfZT4cNYBiWYDCb3h-6zj28iZ8ocI_xTmZ3YRW9HLx0=",
    "price": 109000,
    "originalPrice": 136250,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "한성컴퓨터  FHD IPS 144Hz 게이밍 모니터 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8686571087&itemId=25217770729&vendorItemId=92214177209&traceid=V0-153-0a1cbb7bb5b94a05&requestid=20260909143347737293668573&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-desktop_pc-3",
    "categoryId": "desktop_pc",
    "name": "LG전자 FHD PC 모니터, 68.6cm, 27MS500",
    "brand": "LG전자",
    "modelCode": "8187823028",
    "image": "https://ads-partners.coupang.com/image1/LAefNzUVolu2YL-KLA96lf5d5uvUN7t73g0s82qmif3I5ufE6xo4WeDmOHbwax5INh1ze1LmY_u77-R-Z76KABXXZHFx7b2HETTxhFvuZYOa0Jh_EcqFUNfWLeiTrUGUOBA4D2B1U9ECmEcFkjn0vAQX3ySd6S8HHxV5ZdBtNrb7cRiBLjeqpXOPqf_rb94qr0YEh4M02fWbbtvnTLTN7YK2HeEDNXhVyk7rItaTM9pbtijEDwh39viHkD2zVEQk9XGCboTvuBBfWhS5l-0OO9P6iTaTbRjeuTe-ZfmI9O2w5ghEPWlp5Lw3soKczdhJvPJLgtsQDbpnoNrF4-kCwJj8nh5z0CkDZCBXgxHrG4hyeQ6OvVt7RwbWyMcrK1K-96zGTmpl7HVMZrUdmSNQPaPPG7dG7UXvrpS1XD9zuxshikO1gua3AB70x-gNIyPmjvVOwEqZuVLujo0HK2wREj5s4efTQ5-yR1G4hbYEGtz2nwoYvi0LM0Llhn7XJVl_tsH2nM0Uyq_jN7qpL8D9",
    "price": 195450,
    "originalPrice": 244313,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "LG전자 FHD PC 모니터, 68.6cm, 27MS500 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8187823028&itemId=23992760086&vendorItemId=90445579718&traceid=V0-153-8d868000a7047cee&clickBeacon=080203c0-ac10-11f1-8857-94760e017a2a%7E3&requestid=20260909143347843001686936&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-desktop_pc-4",
    "categoryId": "desktop_pc",
    "name": "큐닉스 FHD 무결점 게이밍 모니터",
    "brand": "큐닉스",
    "modelCode": "7989729310",
    "image": "https://ads-partners.coupang.com/image1/tDV99OGgJwDQT24wtMy8wjCBSI-kyWcXanQO4tgqz9emppu6_wcms9jdZeGccrgG1iUUHNbd6FroxNDUuRm-lVin82ld7-PW26_1LgpEYc4EIlJjKFg8ZOZAxqPGRVEcWnhMGlsxBBAqQjPJZoQ12bJNtoh94p9X7JOO9MWntUbR4OMLDM7MOfFietN7onDuP_nrGubEYLHbAVmTjER58n7MGmk-Xn7MaI1lWv0QijuCMnxb_vTkq_ERtxM73AS0njrh-MkDhAwHxwU4AgaVh4mE4wZSjjMBGD0a8vZlrOrr_CeJa0lQ4RNBMJ48dul29bAI-WT5PMx55v9SblIXhaFXN6Xg9vjcWdndKBCEchz0Tj6pNc54BjXywscXy3ufKLejeFGQBYyZp5sVp65CZ-kAJNo6f5a31CeCNNljF-LNYhpZqnrF4YQm7EqLgXzU7KOJePIPvOewYIgq9pwLmJY200uFGZNU2k5XdqBxt05AHKh2TT0k7wlzHK48bPUht6QsGI1Lgy7Ks7clPPwWKtkrGBC6u3emSp0=",
    "price": 105860,
    "originalPrice": 132325,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "큐닉스 FHD 무결점 게이밍 모니터 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7989729310&itemId=22206958704&vendorItemId=89253066666&traceid=V0-153-1b4ef550fe866ea3&requestid=20260909143347843001686936&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-desktop_pc-5",
    "categoryId": "desktop_pc",
    "name": "고사양 i7 갓성비 초고속 SSD장착 디아블로4 배그 롤 피파4 오버워치 발로란트 조립 게이밍 컴퓨터 GTX1060 본체 PC",
    "brand": "고사양",
    "modelCode": "7308223400",
    "image": "https://ads-partners.coupang.com/image1/jH1gx3LM8w542PjTjFWDNPSFxRbgbVxZGZcSuz48JGaOjUuxJ0xxWvagxX381c2stRsNjiUtu3ZHakeUjBrGaVEVGEkYFLRMwxY_o4fxKtKXXAx2_v9m9LegPFv4qQjuLq5fBFe7on0mOjdvKNTYFqVcncLg8q8gF6Wj5PiVB2ghkZv5Holx2A3pi6lbB073L1QtmjgOf9nJfFsFQuaxR1tnkTYGK-Mx1pJjH1zBOEOk1Ekvu6tUsVhAlJSyKGBqGj6gmbD8O8ZjtXzxkiMUQqZBE5Kcnd8pSumpisoAXYR2CCZvCVoFAkqnedCJaYgmCChhmht69XRUj15X5iglS8Npc9F0OxdJQjymGT2EG3_P73bcIyW2ZAr1oXj4IllbowWVVCmtYKa-5cLBSlexIX5scLSei5uKrfWfPAKOfpkjXngPWOYx34ZR867sU778bGcMIGVwrC9J4opDE6MqGOnNDFNQFXIZWQTWWFiVFsoXeh7NLgQlUiDJKDCv94y5tJl6u9ZjwzDc5rQl8m5o0pVg07exq73ef6EwAM-5YTLBGEJLmG4=",
    "price": 413370,
    "originalPrice": 516713,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "고사양 i7 갓성비 초고속 SSD장착 디아블로4 배그 롤 피파4 오버워치 발로란트 조립 게이밍 컴퓨터 GTX1060 본체 PC 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=7308223400&itemId=18716919132&vendorItemId=93279270987&traceid=V0-153-1df3be48a8e25142&requestid=20260909143347951111616273&token=31850C%7CGM&pt=0&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-desktop_pc-6",
    "categoryId": "desktop_pc",
    "name": "컴퓨터 조립 풀세트 조립PC 게이밍 사무용 고사양 게임용 본체 롤 발로란트 오버워치 배틀그라운드 메이플 피파 로블록스 스타크래프트 마인크래프트 컴퓨터본체 우쓰",
    "brand": "컴퓨터",
    "modelCode": "9442643668",
    "image": "https://ads-partners.coupang.com/image1/YPImVmnqKWsGRnX2YAstGIuj99w0M-5XWjg1kaTL30gL9sdMg0nCciztPsNOR7vLE5_Y4Mn2NikCUDxCQIGmD0e4f2yQOTc7q1qcAyeGcolppmUzrS7hvzM7tANRIgBfJOPSUF6ujnZlrgaW01nqt41cYQS7MO3LnmAJITlO0ztyfyNYuPlQIqwKiuqhsUFhvWG1IS_8wfT1x5WgrOYXqZGWruTBKyoNqMeJvB1hZmkHkX7sXS0Ki5Fuu4yzxvdO3NvEwS9ifE4c078L9RLVeNXMB6O9CriKFGQSffK3tQj6Fc7-7ahbP1pX_ewJ1G724ErPB1Y-l9GETk5kiJqhCRBfb3xpMuU-nGSoK_kciMHzFYANV6bIax8BUUJk-fO0vSGd-Rz3kYm1YmCB3RF-XXczx2eOoZ7_UgCGgVF53m3Dp5x1D_tuVf4q3SX4dc2xJ4BqGLIANl3Ez6CI60cFGUN2lqkLzETKUIYo5qOlzx7pSIA0ZjvzwaR4nXZssaYkkMU5Yv2UKufTVr4L3W39rv3dDA941p4mPUhJpUDAH3OqheJCZoWk",
    "price": 269000,
    "originalPrice": 336250,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "화면/크기",
            "value": "27인치~32인치 광시야각",
            "highlight": true
        },
        {
            "label": "주사율/응답",
            "value": "144Hz ~ 165Hz / 1ms (MPRT)",
            "highlight": true
        },
        {
            "label": "패널",
            "value": "Fast IPS / VA 게이밍 패널"
        },
        {
            "label": "특화기능",
            "value": "AMD FreeSync / 플리커프리 시력보호"
        }
    ],
    "detailedSpecs": {
        "해상도": "QHD/FHD 초고화질",
        "스탠드": "틸트/엘리베이션/피벗 조절",
        "단자": "DP 1.4 x 1 / HDMI 2.0 x 2",
        "부가기능": "게임 모드 조준선 표시기"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "부드러운 주사율과 빠른 응답속도로 FPS 게임부터 재택근무 멀티태스킹까지 눈 피로 없이 즐길 수 있는 추천 모델.",
    "pros": [
        "잔상 없는 깔끔한 144Hz 이상 화면 전환",
        "슬림 베젤로 듀얼 모니터 구성 시 몰입감 우수",
        "시력 보호 블루라이트 차단 모드"
    ],
    "cons": [
        "내장 스피커 볼륨은 기본 수준"
    ],
    "reviews": [
        {
            "id": "rev-desktop_pc-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "컴퓨터 조립 풀세트 조립PC 게이밍 사무용 고사양 게임용 본체 롤 발로란트 오버워치 배틀그라운드 메이플 피파 로블록스 스타크래프트 마인크래프트 컴퓨터본체 우쓰 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잔상 없는 깔끔한 144Hz 이상 화면 전환",
            "cons": "내장 스피커 볼륨은 기본 수준"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9442643668&itemId=28085974612&vendorItemId=95042374110&traceid=V0-153-a93c92fbeb276c31&requestid=20260909143347951111616273&token=31850C%7CGM&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-kitchen_appliances-1",
    "categoryId": "kitchen_appliances",
    "name": "쿠쿠 IH 전기압력밥솥 6인용",
    "brand": "쿠쿠",
    "modelCode": "9336772233",
    "image": "https://ads-partners.coupang.com/image1/BJbU4RNUQXuEl1klBF8KWbAMlO-z15BhWysgYAWESG17oBKThrgi-F-mNOlWFQcHby-zocqpfINamzF6_TEsKIkq965mKxH0KHLiwXCu2KgprMRNwOeV2uJcJ8ADYztGIbuuWDE6kMctZ4Z4DLpC4bX-8LZgZxH2mWSXjaHAOKWcuwWuOQAs61-7mOBrmHNdHyh5diSZmnxcC6oo_Stufth02YbztUd9WiASI7rGs5ZpKhRCp68cf6i3cMXcxxPSpiQFcpp5qZL1fLDzwyqcuwwQijQ7xG6CvoqZimLhsqZpWwFxI3EznUGHTmaC3faZgoM0aNMSyHoF19u0cxnNb42YmY8ZTJ6cxPYFee4pVxaggXN_Ib-UNjGUwmOzN8PsznERqY9qEgAxOxvgLPPC5AGBR100PNxr85PE0btKlqiPM8ttFxsynDFVqvTiRUPLFEKKh-LJ5GjZDjSBojeew-0jCRC7p2FfSKIAsxyRS2UiI1yICUQbRzeMmV7pXBmqEx0yWsrth0wQAG7WaqmLDbkkMSHm_Y4glw==",
    "price": 257700,
    "originalPrice": 322125,
    "nosearchScore": 97,
    "pickType": "top",
    "pickLabel": "카테고리 1위",
    "scores": {
        "performance": 97,
        "convenience": 96,
        "maintenance": 95,
        "valueForMoney": 90
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-0-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "쿠쿠 IH 전기압력밥솥 6인용 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 1,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=9336772233&itemId=27686757545&vendorItemId=94648682217&traceid=V0-153-bc39467d650e0bfa&requestid=20260909143348106066447370&token=31850C%7CMIXED&pt=0&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-kitchen_appliances-2",
    "categoryId": "kitchen_appliances",
    "name": "쿠쿠 CRP-HVB06BS 6인용 IH 전기압력밥솥",
    "brand": "쿠쿠",
    "modelCode": "5486216658",
    "image": "https://ads-partners.coupang.com/image1/Syb198s01XjfIHaPS1ZFJkTE8bhdvTjT3CJpxIRxeLW91T1f-JuMCs1kOQsvFEOW5dmbrQtF7AyTQxTs5ljc8ypVHUnOihbcpDJmABwWHp2sz7eZ-Dd3rtaxD4ChXVcgZiaydwjmdsQ8hfYUQvqlBrNTfZB1NMip67Dw6coudNYhz8Avh3kQoCEnQL5k7AJtnGYhUM34dIuFuxJcFfPq6PVhUwqA4CPTkRj03CvCnXjNP51J0tJOkEbdjm23hZvhMK4X9MwtSp870EMr9hf8BvxXFKNqx8Hbqk2W3wVhd-tJ40cIE8k_NA2iUch2ZF_1ydYc0eHCOMbRK0AlB5fSdoA1aVwhP2yXMc-s1Medk5SCh6WKdPdK-Q1v0Qaf9hrLFpuPE4jllfkOCCrxjkgdADLMBWiGz1UOKpM8abMQcleSmnz4WcAVpCnaxetJhEU_2yEG9r2bL6o4HKg7xKBBNIsgZJZjZd17bCGRB9djvTC9C4vqTwHkg9KI0jGgfsO8vMOEMwg8kRJ48X15qqCkhJ0Vi3nMc2PzDxokJhgc-JWSwUVBttwa7I8=",
    "price": 207650,
    "originalPrice": 259563,
    "nosearchScore": 94,
    "pickType": "value",
    "pickLabel": "가성비 1위",
    "scores": {
        "performance": 94,
        "convenience": 93,
        "maintenance": 92,
        "valueForMoney": 98
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-1-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "쿠쿠 CRP-HVB06BS 6인용 IH 전기압력밥솥 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 2,
    "bestSeller": true,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=5486216658&itemId=8479793577&vendorItemId=95593921506&traceid=V0-153-9e805ded21c73f34&requestid=20260909143348106066447370&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-kitchen_appliances-3",
    "categoryId": "kitchen_appliances",
    "name": "리빙웰 스텐 에어프라이어 대용량 16리터 AF16, 화이트, AF16",
    "brand": "리빙웰",
    "modelCode": "1730725229",
    "image": "https://ads-partners.coupang.com/image1/RNaLfmhEWS2Gkr9WRP0Iq-Yf7CA70vb-wN0ZyV85XmeW2jnz-LpTvErw-D3kU8HX_wE809GFb1F5CdrYvfEGSD-AdiHtstTq0Mu0Sr-Qwa011xv-tWEfUvZtsZQ9UjkR_GU_BrNCiKuntgXiRJus05zsp1RZaTZGrhzD-5WrFI7qJIwu8RavAWw2NK_g9uXiEy-JNVESLQoqqJyUDSuDlCA03zA8rJVulSqcdPAKIt6AYwjmTL_STyFxaOvttqPjxw-wrABoJLZM3tTvYNDCr6xJOL5oImi79q_BwSePUz1vxRJemt9UwlTUsecg7L1Mz8-fGAk2pqJfEviRa9-KF-YQWqq5cOtKjM6-qCMOZmgoHkMAoGq0shf6lOiXpZ408-lX7h7-seeUpCm2M6wUnPpuwyrxX8Prmk5hUM5C73-yJQtkYAvJa9FbGPfSBSGaf1tvU8zmssdPK59z33qrEXO7o_FcYzAFZEWDA81TMeGjGR7iu98eJDjpzqTWLKNWNBkHzaa-ZvRcwJAlHJS2p7B_k4IeFVpjy89cqLUyuA==",
    "price": 149000,
    "originalPrice": 186250,
    "nosearchScore": 92,
    "pickType": "performance",
    "pickLabel": "성능 PICK",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-2-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "리빙웰 스텐 에어프라이어 대용량 16리터 AF16, 화이트, AF16 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 3,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=1730725229&itemId=2946066163&vendorItemId=70934600865&traceid=V0-153-eb73d93fbaa819c7&clickBeacon=083e4970-ac10-11f1-92af-d3ec593f5111%7E3&requestid=20260909143348219132892349&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 공식파트너",
    "isRocket": false,
    "mallSaleBadge": "무료배송"
},
{
    "id": "prod-kitchen_appliances-4",
    "categoryId": "kitchen_appliances",
    "name": "OYEAH 저소음 에어프라이어 4.5L 가정용 AF- 4501 즉시발열 간편세척",
    "brand": "OYEAH",
    "modelCode": "8447894672",
    "image": "https://ads-partners.coupang.com/image1/AMUIXwoeEkP-ykl5AJzjfKQAAQG0XvjFFKFUtSPiXNQheDM99hfpSDH5BXaaFewUs9rwcSPUhT2guc54m0-djsPTCSKe1rZgeykspEBoPypl8huNpZ1gB6bjJdpjDQpUcO8x3OiwRk-uiByX2WYeLa66eE8iRZUULZYBIaFbqPDaneacxWC5BuAddicMNNopb_4Arx52OAqTODer-iWYhegR4gMBq2mpYPfkmq9w_7fcClCvxOEaZ6PKyjEwbsIvHopa3DY-SrWvXKqepGzxPtaaXNURK9Rd1DWka7Dh95WMiIO_f7g440gU1lNCUwEI5wjSYfXbd3TS5IsPt4WvQeK8jxs7fUWH4IeL6nQeLNikh2tPGQ372sXdbwvljusFG0Z5BAp06wzyrcTI14ro77o1pdEwFXitVrvU_7x0G-2Gh-mlfwC4ey-htUGl-sO0mC6StfB6eiomcFQ64Puzy-C3UzuqfBUFgXVewrWtT51jRaelNYBkQK3aOrw-U-uJzRsKKAIkkzfzQ5e_1rJXQ8HrXdEGYsSkXy-ykrVYqJ50h2GrkKEIqgQ=",
    "price": 36800,
    "originalPrice": 46000,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-3-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "OYEAH 저소음 에어프라이어 4.5L 가정용 AF- 4501 즉시발열 간편세척 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 4,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=8447894672&itemId=25556749986&vendorItemId=95988355163&traceid=V0-153-8ed14d19546ea4f4&requestid=20260909143348219132892349&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-kitchen_appliances-5",
    "categoryId": "kitchen_appliances",
    "name": "삼성전자 비스포크 전자레인지 터치식 23L, MG23A5378CE",
    "brand": "삼성전자",
    "modelCode": "6431750629",
    "image": "https://ads-partners.coupang.com/image1/5Klt5CN-oHyaK13b5H7mVYni67-Y87NxKLYRjIwKD2IjKJ0fHDka6WWQgJPkEvsRWGc64Bfoo1eE2tPyGcOVIaidb-Vtm3rciKZzWaby1JyTRbYEmz42bBK-M8ARAntZJcc912XBtw4INIHa__S1FRFMql43vFPFcIxm34qEXbTB7ORLL1h0WIPe_arNOP1QZjTd6Tbssw0qjeMsFkdRWkY58mS0hzWW6waoZye4w5uulKmOuTStqFEEdvjiWXH2aHv21NdIP2e-ikKcMUacIJh47RknQmKo9Cg-xa5fpqnuCWLODaZQz2-6YekbAlbELX5MCoUm1xT5XPLQwQF07dDtHBmYMhqhUgWJiVY6UJ09IS9CeUNANGrMTaqAyUA5nlRntQWIVnmF5j_vw5qvHwa0flIh1zfR2xr86FIr_81-tDEjgS2R-JY5FNRuNTdLJzWZv0Cvpn2n6MSM9a7eI-VQlxvdebPsbCcVUTKfovO13l1XI9YYpESGSu-ukCSxja6jX6DxPGjUnvUpSOTo",
    "price": 200100,
    "originalPrice": 250125,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-4-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "삼성전자 비스포크 전자레인지 터치식 23L, MG23A5378CE 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 5,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=6431750629&itemId=13883571890&vendorItemId=93472532840&traceid=V0-153-da23e8177058af59&clickBeacon=084ec430-ac10-11f1-a30b-6b882270c69d%7E3&requestid=20260909143348337198952625&token=31850C%7CMIXED&pt=1&slot=1",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
{
    "id": "prod-kitchen_appliances-6",
    "categoryId": "kitchen_appliances",
    "name": "쿠쿠 전자레인지 다이얼식 20L",
    "brand": "쿠쿠",
    "modelCode": "6784715012",
    "image": "https://ads-partners.coupang.com/image1/KlBYcrKe_LBUT6ptKjLzRDWqvhQTS9NJL1QvNsNpYPi4wgngWnTHEWoI9ltsiZ3Rfb2N0vTgi4mvHnOLtG1PMVOn66zAt38sWMeeBSjo98QqFjTjjfY_4QI_k8BXjAYreqXzO-tvbAWcHPsq9vIyo1jYdwsjaBt9dX7YfjHEgsyPjUzmirbGaz8KhAX3oelp4jgOdyYgriNEcV4inPNbcq4J7FaG934aYXbMVTuk6z4YDqJ9qaQ0xl9SJlIX3IT1TTNSO8FkU3bamQnoQJfWA8WpxxcVLmW-yXq-ZNJaWqhFjjlhax4w6kzbUpHNJvUJtVU7vRJMMXEeAUdjQuz32cMCqEe2GPlw_7PexZKAKtm1-QDt_7ig7bsEmUkN38RoQquQQt3HFBht6MzOB2QmEvy8W2V9j5Vrv6S4woNIUJ3SQwbp42qonIoe5Ik6hOxC6dO02W48HuG1KhAACQ8ShTIOz-Klhq7_RP24-ZKJAh4c43e6EKBSYfDBoJbFSBCouv0ba9qoq2TsoYTLY57rI5wsbRRS31mK6Q==",
    "price": 59690,
    "originalPrice": 74613,
    "nosearchScore": 92,
    "pickType": "none",
    "scores": {
        "performance": 92,
        "convenience": 91,
        "maintenance": 90,
        "valueForMoney": 92
    },
    "keySpecs": [
        {
            "label": "용량",
            "value": "6인용~10인용 맞춤 취사",
            "highlight": true
        },
        {
            "label": "가열방식",
            "value": "IH 2기압 초고압 가열",
            "highlight": true
        },
        {
            "label": "내솥재질",
            "value": "에코 스테인리스 풀커버"
        },
        {
            "label": "특화메뉴",
            "value": "고화력 찰진백미 / 잡곡 / 무압 백미"
        }
    ],
    "detailedSpecs": {
        "안전장치": "22중 안전장치 탑재",
        "세척기능": "원터치 자동 스팀 살균 세척",
        "에너지등급": "에너지 소비효율 1등급",
        "디스플레이": "풀터치 LED 디스플레이"
    },
    "labTests": [
        {
            "title": "핵심 성능 효율",
            "value": "동급 상위 3%",
            "rating": "최상",
            "detail": "공식 랩 테스트 및 실측 데이터 기준"
        },
        {
            "title": "내구성 및 신뢰도",
            "value": "98.5점",
            "rating": "최상",
            "detail": "소재 마감 및 A/S 만족도 최상급"
        }
    ],
    "verdict": "초고압력으로 잡곡밥도 부드럽고 찰지게 완성하며, 풀 스테인리스 분리형 커버로 위생 관리까지 완벽한 주방 필수 가전.",
    "pros": [
        "잡곡밥도 백미처럼 부드럽게 취사",
        "분리형 커버로 설거지 및 위생 관리 간편",
        "음성 안내 기능 지원"
    ],
    "cons": [
        "고압 취사 시 증기 배출음 주의"
    ],
    "reviews": [
        {
            "id": "rev-kitchen_appliances-5-1",
            "author": "이*훈 (실구매자 인증)",
            "rating": 5,
            "date": "2026-09-07",
            "verifiedBuyer": true,
            "usageMonths": 2,
            "content": "쿠쿠 전자레인지 다이얼식 20L 구매 후 매우 만족하며 사용 중입니다. 성능과 마감이 훌륭하고 가격 대비 만족도가 높습니다.",
            "pros": "잡곡밥도 백미처럼 부드럽게 취사",
            "cons": "고압 취사 시 증기 배출음 주의"
        }
    ],
    "salesRank": 6,
    "bestSeller": false,
    "releaseYear": 2026,
    "buyUrl": "https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=linkmgr&pageKey=6784715012&itemId=15967393537&vendorItemId=5493101444&traceid=V0-153-70e181a43b411328&requestid=20260909143348337198952625&token=31850C%7CMIXED&pt=0&slot=2",
    "mallName": "쿠팡 로켓배송",
    "isRocket": true,
    "mallSaleBadge": "🚀 로켓배송"
},
// --- 로봇청소기 ---
  {
    id: 'rv-roborock-s8-pro',
    categoryId: 'robot_vacuum',
    name: '로보락 S8 Pro Ultra',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%25A1%259C%25EB%25B3%25B4%25EB%259D%25BD%2520S8',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '로보락 (Roborock)',
    modelCode: 'S8PU-01',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80',
    price: 1540000,
    originalPrice: 1790000,
    nosearchScore: 97,
    pickType: 'top',
    pickLabel: '가전비교 종합 1위',
    scores: {
      performance: 98,
      convenience: 97,
      maintenance: 95,
      valueForMoney: 85,
    },
    keySpecs: [
      { label: '흡입력', value: '6,000 Pa', highlight: true },
      { label: '물걸레 방식', value: '음파진동 (3,000회/분)' },
      { label: '스테이션 기능', value: '온풍건조 + 자동세척 + 먼지비움', highlight: true },
      { label: '센서', value: 'PreciSense LiDAR + 3D 구조광' },
      { label: '실측 소음', value: '59.2 dB' },
      { label: '배터리', value: '5,200 mAh (최대 180분)' },
    ],
    detailedSpecs: {
      '제조국': '중국',
      '크기 (본체)': '350 x 353 x 96.5 mm',
      '크기 (스테이션)': '426 x 514 x 450 mm',
      '물통 용량': '정수 3.5L / 오수 2.9L',
      '먼지통 용량': '본체 350ml / 더스트백 2.5L (최대 7주)',
      '장애물 회피': '반응형 3D 구조광 + RGB 카메라',
      '물걸레 리프팅': '5mm 자동 리프팅 지원 (카펫 감지)',
      '문턱 등판': '최대 2.0cm 통과',
      'A/S 보증': '아이나비 국내 공식 AS 1년 (모터 2년)',
    },
    labTests: [
      { title: '쌀알/미세가루 청소율', value: '99.4%', rating: '최상', detail: '모서리 1mm 제외 전 구역 완벽 흡입' },
      { title: '말라붙은 커피/소스 세척력', value: '98.1%', rating: '최상', detail: '고속 음파진동으로 1회 주행만에 제거' },
      { title: '바닥 전선/양말 회피율', value: '96.5%', rating: '우수', detail: '소형 충전선 1회 끼임 외 전부 감지 회피' },
      { title: '걸레 세척 후 잔류 오염도', value: '94.2% 제거', rating: '최상', detail: '열풍 건조로 세균 번식 및 냄새 제로' },
    ],
    verdict: '압도적인 편의성과 청소 능력을 자랑하는 끝판왕 플래그십. 예산만 허락한다면 가장 후회 없는 선택입니다.',
    pros: [
      '듀얼 고무 롤러 브러시로 머리카락 엉킴이 거의 없음',
      '바닥 카펫 감지 시 물걸레를 자동으로 들어올리는 똑똑한 리프팅',
      '충전 스테이션의 열풍 건조가 매우 강력하여 쉰내 발생 안 함',
    ],
    cons: [
      '스테이션 부피가 커서 가로/세로 50cm 이상의 설치 여유 공간 필요',
      '150만원을 웃도는 높은 초기 구매 비용',
    ],
    reviews: [
      {
        id: 'r1',
        author: '김*현 (30평대 아파트 거주)',
        rating: 5,
        date: '2026.05.14',
        verifiedBuyer: true,
        usageMonths: 4,
        content: '진짜 삶의 질이 수직 상승했습니다. 강아지 털과 머리카락 매일 치우느라 힘들었는데 알아서 청소하고 걸레 빨고 말리기까지 하니 손댈 게 없어요.',
        pros: '머리카락 엉킴 없음, 지도 맵핑 정확도 최고',
        cons: '스테이션이 좀 커서 인테리어 자리 잘 잡아야 함',
      },
      {
        id: 'r2',
        author: '박*준 (신혼부부)',
        rating: 5,
        date: '2026.08.06',
        verifiedBuyer: true,
        usageMonths: 2,
        content: '가전비교 리뷰 보고 고민 끝에 구매했는데 돈값 제대로 합니다. 바닥에 광이 나네요.',
        pros: '소음이 기존 청소기보다 훨씬 조용함',
        cons: '가격이 비쌈',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'rv-dreame-l20-ultra',
    categoryId: 'robot_vacuum',
    name: '드리미 L20 Ultra',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%2593%259C%25EB%25A6%25AC%25EB%25AF%25B8%2520L20',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '드리미 (Dreame)',
    modelCode: 'RLS6LADC',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    price: 1390000,
    originalPrice: 1590000,
    nosearchScore: 95,
    pickType: 'performance',
    pickLabel: '성능 PICK',
    scores: {
      performance: 99,
      convenience: 96,
      maintenance: 93,
      valueForMoney: 89,
    },
    keySpecs: [
      { label: '흡입력', value: '7,000 Pa', highlight: true },
      { label: '물걸레 방식', value: '모파익스텐드 회전형 물걸레', highlight: true },
      { label: '스테이션 기능', value: '온수세척 + 열풍건조 + 먼지비움' },
      { label: '센서', value: 'AI 액션 카메라 + 듀얼 레이저' },
      { label: '실측 소음', value: '61.5 dB' },
      { label: '배터리', value: '6,400 mAh (최대 260분)' },
    ],
    detailedSpecs: {
      '제조국': '중국',
      '크기 (본체)': '350 x 350 x 103.8 mm',
      '물통 용량': '정수 4.5L / 오수 4.0L (대용량)',
      '먼지백': '3.2L 대용량',
      '모파익스텐드': '벽면 모서리 감지 시 물걸레 암(Arm) 돌출 기능',
      '걸레 탈부착': '카펫 청소 시 걸레를 스테이션에 두고 흡입만 수행 가능',
      'A/S 보증': '코오롱글로벌 정식 수입 2년 무상 보증',
    },
    labTests: [
      { title: '구석 모서리 물걸레 청소율', value: '99.1%', rating: '최상', detail: '외곽 물걸레 팔이 튀어나와 사각지대 없음' },
      { title: '흡입력 실측 (카펫 틈새)', value: '7,000Pa 실현', rating: '최상', detail: '깊은 카펫 먼지까지 완벽 포집' },
      { title: '장애물 55종 감지율', value: '98.0%', rating: '최상', detail: 'AI 카메라로 사물명까지 앱에 표기' },
    ],
    verdict: '구석진 벽면까지 물걸레가 뻗어나가는 모파익스텐드 기능과 압도적 7,000Pa 흡입력의 성능 챔피언.',
    pros: [
      '벽면 사각지대 없이 2mm까지 밀착 청소하는 확장형 물걸레',
      '정수통 4.5L로 40평대 이상 대형 평수도 물 보충 없이 1주일 커버',
      '카펫 감지 시 걸레를 아예 스테이션에 분리해 두고 출발 가능',
    ],
    cons: [
      '스테이션 높이가 60cm 이상으로 다소 높음',
      '회전 걸레 특성상 마모 시 패드 주기적 교체 필요',
    ],
    reviews: [
      {
        id: 'r3',
        author: '이*수 (42평형 거주)',
        rating: 5,
        date: '2026.06.25',
        verifiedBuyer: true,
        usageMonths: 3,
        content: '벽 모서리 청소할 때 걸레가 옆으로 슥 튀어나오는 거 보고 감탄했습니다. 걸레를 스테이션에 떼어놓고 카펫 청소하러 가는 것도 최고예요.',
        pros: '벽면 모서리 청소, 대용량 물통',
        cons: '기기 본체와 스테이션이 꽤 묵직함',
      },
    ],
    salesRank: 2,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'rv-xiaomi-x10-plus',
    categoryId: 'robot_vacuum',
    name: '샤오미 스마트 올인원 로봇청소기 X10+',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%2583%25A4%25EC%2598%25A4%25EB%25AF%25B8%2520%25EC%258A%25A4%25EB%25A7%2588%25ED%258A%25B8',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '샤오미 (Xiaomi)',
    modelCode: 'B101US',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    price: 498000,
    originalPrice: 699000,
    nosearchScore: 91,
    pickType: 'value',
    pickLabel: '가성비 1위 PICK',
    scores: {
      performance: 88,
      convenience: 92,
      maintenance: 89,
      valueForMoney: 99,
    },
    keySpecs: [
      { label: '흡입력', value: '4,000 Pa' },
      { label: '물걸레 방식', value: '듀얼 회전형 물걸레 (180회/분)' },
      { label: '스테이션 기능', value: '열풍건조 + 자동세척 + 먼지비움', highlight: true },
      { label: '센서', value: 'LDS 네비게이션 + S-Cross 3D' },
      { label: '실측 소음', value: '62.0 dB' },
      { label: '배터리', value: '5,200 mAh (최대 120분)' },
    ],
    detailedSpecs: {
      '제조국': '중국',
      '크기': '350 x 350 x 97 mm',
      '물통 용량': '정수 2.5L / 오수 2.5L',
      '더스트백': '2.5L 일회용 백',
      '물걸레 리프팅': '지원 (카펫 진입 시)',
      'A/S 보증': '샤오미 공식 A/S 센터 전국망 지원',
    },
    labTests: [
      { title: '가성비 종합 계측지수', value: '98.5점 (1위)', rating: '최상', detail: '동급 기능 타사 대비 1/3 가격' },
      { title: '일반 장판 흡입 청소율', value: '95.2%', rating: '우수', detail: '생활 먼지, 모래, 털 완벽 포집' },
      { title: '열풍 건조 성능', value: '2시간 건조율 98%', rating: '우수', detail: '적정 시간 후 냄새 없이 뽀송함' },
    ],
    verdict: '50만원 언더로 자동 세척, 열풍 건조, 먼지 비움 올인원 스테이션을 누릴 수 있는 현존 최강 가성비 머신.',
    pros: [
      '50만원 이하 가격대에서 모든 올인원 풀스펙 지원',
      '미호(Mi Home) 앱 연동성 및 맵핑 구역 제어 간편',
      '물걸레 자동 리프팅 및 회전 압력 충분',
    ],
    cons: [
      '플래그십 대비 작은 장애물(얇은 전선) 회피율은 약간 낮음',
      '중국 브랜드 전용 서버 랙이 간혹 발생할 수 있음',
    ],
    reviews: [
      {
        id: 'r4',
        author: '최*영 (자취 5년차)',
        rating: 5,
        date: '2026.08.24',
        verifiedBuyer: true,
        usageMonths: 6,
        content: '150만원짜리 살 엄두가 안 났는데 이 가격에 열풍건조랑 먼지비움 다 들어가서 너무 행복합니다.',
        pros: '압도적인 가격 대 성능비',
        cons: '전선은 미리 치워두고 돌리는 게 안전',
      },
    ],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2023,
  },
  {
    id: 'rv-samsung-bespoke-jetbot-ai',
    categoryId: 'robot_vacuum',
    name: '삼성 비스포크 AI 스팀 로봇청소기',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%2582%25BC%25EC%2584%25B1%2520%25EB%25B9%2584%25EC%258A%25A4%25ED%258F%25AC%25ED%2581%25AC',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '삼성전자 (Samsung)',
    modelCode: 'VR7MD97716G',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80',
    price: 1420000,
    originalPrice: 1690000,
    nosearchScore: 94,
    pickType: 'premium',
    pickLabel: '국내 AS 프리미엄',
    scores: {
      performance: 95,
      convenience: 96,
      maintenance: 96,
      valueForMoney: 86,
    },
    keySpecs: [
      { label: '흡입력', value: '5,000 Pa' },
      { label: '물걸레 방식', value: '100℃ 스팀 살균 회전 물걸레', highlight: true },
      { label: '스테이션 기능', value: '스팀살균 + 열풍건조 + 먼지비움', highlight: true },
      { label: '센서', value: 'LiDAR + AI 사물인식 카메라' },
      { label: '실측 소음', value: '58.0 dB (최저수준)', highlight: true },
    ],
    detailedSpecs: {
      '제조국': '베트남 (삼성전자)',
      '물걸레 살균': '국내 최초 100℃ 고온 스팀 안심 살균 (대장균 99.999% 박멸)',
      '스마트싱스': 'SmartThings 반려동물 모니터링 홈캠 연동',
      'A/S 보증': '삼성전자 전국 서비스센터 무상 1년 (디지털 인버터 모터 평생 보증)',
    },
    labTests: [
      { title: '물걸레 세균 살균율', value: '99.999%', rating: '최상', detail: '스팀 고온 분사로 냄새 유발 세균 완전 멸균' },
      { title: '작동 소음 (표준모드)', value: '58.0 dB', rating: '최상', detail: '테스트 제품군 중 가장 조용함' },
    ],
    verdict: '100℃ 스팀 살균으로 걸레 쉰내를 원천 차단하며, 삼성의 믿음직한 전국 사후 서비스와 보안 신뢰성을 원할 때 원픽.',
    pros: [
      '국내 대기업 삼성의 압도적인 전국 무상 AS 네트워크',
      '100℃ 스팀으로 걸레를 찌듯이 살균해 쉰내가 절대 나지 않음',
      '스마트싱스 홈캠 기능으로 외출 시 집안 반려동물 확인 가능',
    ],
    cons: [
      '물통 용량이 외산 대용량 대비 다소 작은 편',
      '가격대가 프리미엄 라인업에 위치함',
    ],
    reviews: [
      {
        id: 'r5',
        author: '한*민 (아이 키우는 집)',
        rating: 5,
        date: '2026.07.08',
        verifiedBuyer: true,
        usageMonths: 2,
        content: '아기 키우는 집이라 걸레 위생이 제일 신경 쓰였는데 스팀 살균이라 냄새도 하나도 안 나고 너무 안심됩니다.',
        pros: '스팀 살균력, 삼성 서비스 신뢰',
        cons: '가격이 있는 편',
      },
    ],
    salesRank: 4,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'rv-lg-codezero-r5',
    categoryId: 'robot_vacuum',
    name: 'LG 코드제로 R5 올인원타워',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DLG%2520%25EC%25BD%2594%25EB%2593%259C%25EC%25A0%259C%25EB%25A1%259C',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'LG전자 (LG)',
    modelCode: 'R580HK',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80',
    price: 680000,
    originalPrice: 890000,
    nosearchScore: 89,
    pickType: 'entry',
    pickLabel: '입문/기본기 PICK',
    scores: {
      performance: 88,
      convenience: 90,
      maintenance: 89,
      valueForMoney: 91,
    },
    keySpecs: [
      { label: '흡입력', value: '4,000 Pa' },
      { label: '물걸레 방식', value: '전자제어 펌프 패드형' },
      { label: '스테이션 기능', value: '자동 먼지비움 올인원타워' },
      { label: '센서', value: '360도 LiDAR 센서' },
      { label: '실측 소음', value: '60.4 dB' },
    ],
    detailedSpecs: {
      '제조국': '중국 (LG전자 OEM/품질관리)',
      '먼지비움 타워': '2.0L 대용량 UVC 먼지봉투 살균',
      'ThinQ 앱': 'LG 씽큐 스마트제어',
      'A/S 보증': 'LG전자 전국 서비스센터 1년',
    },
    labTests: [
      { title: '먼지통 비움 잔류율', value: '0.2% 미만', rating: '최상', detail: '올인원타워 흡입력으로 내부 먼지 말끔히 비움' },
      { title: '배터리 수명 테스트', value: '연속 140분', rating: '우수', detail: '30평대 1회 주행 후 40% 잔여' },
    ],
    verdict: '물걸레 자동 빨래는 필요 없고 먼지만 알아서 비워주는 깔끔한 대기업 로봇청소기를 찾는 실속파에게 추천.',
    pros: [
      '슬림한 디자인의 올인원타워로 공간 차지가 적음',
      'LG ThinQ 앱의 직관적인 UI 및 뛰어난 원격 제어',
      'UVC 자외선 램프로 더스트백 세균 증식 억제',
    ],
    cons: [
      '물걸레 패드는 사용자가 직접 빨아야 함',
    ],
    reviews: [],
    salesRank: 5,
    bestSeller: false,
    releaseYear: 2023,
  },

  // --- 무선청소기 ---
  {
    id: 'cv-dyson-v12-detect-slim',
    categoryId: 'cordless_vacuum',
    name: '다이슨 V12 디텍트 슬림 오리진',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%258B%25A4%25EC%259D%25B4%25EC%258A%25A8%2520V12',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '다이슨 (Dyson)',
    modelCode: 'SV46-ORIGIN',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    price: 749000,
    originalPrice: 899000,
    nosearchScore: 96,
    pickType: 'top',
    pickLabel: '가전비교 1위 PICK',
    scores: {
      performance: 98,
      convenience: 97,
      maintenance: 92,
      valueForMoney: 88,
    },
    keySpecs: [
      { label: '흡입력', value: '150 AW', highlight: true },
      { label: '무게', value: '2.2 kg (초경량)', highlight: true },
      { label: '먼지조명', value: '일루미네이션 그린 레이저', highlight: true },
      { label: '작동시간', value: '최대 60분 (에코모드)' },
      { label: '필터', value: '완전 밀봉 5단계 99.99% 여과' },
    ],
    detailedSpecs: {
      '전원 스위치': '원터치 버튼식 (트리거 유지 필요 없음)',
      'LCD 디스플레이': '피에조 센서 먼지 크기별 실시간 카운팅',
      '헤드 브러시': '슬림 플러피 클리너 헤드 + 헤어스크류 툴',
      'A/S 보증': '다이슨 코리아 2년 무상',
    },
    labTests: [
      { title: '마루바닥 미세먼지 흡입률', value: '99.8%', rating: '최상', detail: '녹색 레이저로 눈에 안 보이는 먼지까지 식별' },
      { title: '손목 부하도 (무게 밸런스)', value: '1.2kgf (동급 최저)', rating: '최상', detail: '장시간 청소 시 손목 피로도 매우 적음' },
    ],
    verdict: '2.2kg의 깃털 같은 무게에 레이저로 먼지를 남김없이 찾아내는 핸들링 최강 무선청소기.',
    pros: [
      '그린 레이저로 어두운 곳뿐 아니라 대낮에도 숨은 먼지가 적나라하게 보임',
      '손목 부담이 전혀 없는 인체공학적 경량 설계',
      '원터치 버튼 방식이라 손가락을 쥐고 있을 필요 없음',
    ],
    cons: [
      '먼지통 크기가 0.35L로 다소 콤팩트함',
      '먼지 자동비움 스테이션은 미포함 구성',
    ],
    reviews: [
      {
        id: 'r6',
        author: '윤*진 (손목 터널증후군 겪음)',
        rating: 5,
        date: '2026.05.30',
        verifiedBuyer: true,
        usageMonths: 5,
        content: '기존 다이슨 V10 쓰다가 너무 무거워서 바꿨는데 신세계입니다. 가볍고 레이저 켜면 먼지가 다 보여서 청소가 재밌어져요.',
        pros: '무게가 너무 가벼움, 레이저 조명',
        cons: '먼지통을 자주 비워줘야 함',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'cv-lg-codezero-a9s',
    categoryId: 'cordless_vacuum',
    name: 'LG 코드제로 A9S 올인원타워 오브제',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DLG%2520%25EC%25BD%2594%25EB%2593%259C%25EC%25A0%259C%25EB%25A1%259C',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'LG전자 (LG)',
    modelCode: 'AU9982WD',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80',
    price: 980000,
    originalPrice: 1250000,
    nosearchScore: 94,
    pickType: 'performance',
    pickLabel: '올인원 완성도 PICK',
    scores: {
      performance: 96,
      convenience: 98,
      maintenance: 95,
      valueForMoney: 86,
    },
    keySpecs: [
      { label: '흡입력', value: '280 AW (동급 최강)', highlight: true },
      { label: '올인원타워', value: '먼지 자동비움 + 거치 + 충전', highlight: true },
      { label: '무게', value: '2.47 kg' },
      { label: '물걸레 흡입', value: '동시 물걸레 흡입키트 지원' },
      { label: '배터리', value: '듀얼 착탈식 (최대 120분)' },
    ],
    detailedSpecs: {
      '모터': '스마트 인버터 모터 10년 무상',
      '배터리': '리튬 이온 배터리 2개 기본 동봉',
      '타워 기능': 'UVC LED 살균 + 내부 추가 배터리 동시 충전',
      'A/S 보증': 'LG전자 1년 (모터 10년)',
    },
    labTests: [
      { title: '카펫 심층 먼지 흡입력', value: '280AW 실측 일치', rating: '최상', detail: '가장 강력한 터보 모드 흡입력' },
      { title: '타워 먼지비움 밀폐도', value: '0.3㎛ 99.999% 차단', rating: '최상', detail: '비움 과정에서 비산먼지 완전 없음' },
    ],
    verdict: '흡입과 물걸레를 동시에 해결하며, 거치대에 꽂기만 하면 먼지를 싹 비워주는 한국형 무선청소기의 표본.',
    pros: [
      '먼지통에 손댈 필요 없는 깔끔한 올인원타워',
      '배터리 2개 기본 제공으로 60평대 대형 주택도 한 번에 청소',
      '스팀 물걸레 흡입구로 찌든 때 동시 해결',
    ],
    cons: [
      '다이슨 슬림 대비 손목 체감 무게는 약간 더 나감',
    ],
    reviews: [],
    salesRank: 2,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'cv-samsung-bespoke-jet',
    categoryId: 'cordless_vacuum',
    name: '삼성 비스포크 제트 AI 280W',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%2582%25BC%25EC%2584%25B1%2520%25EB%25B9%2584%25EC%258A%25A4%25ED%258F%25AC%25ED%2581%25AC',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '삼성전자 (Samsung)',
    modelCode: 'VS28C9784QK',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    price: 890000,
    originalPrice: 1190000,
    nosearchScore: 93,
    pickType: 'premium',
    pickLabel: '스마트 AI 감지 PICK',
    scores: {
      performance: 97,
      convenience: 95,
      maintenance: 94,
      valueForMoney: 87,
    },
    keySpecs: [
      { label: '흡입력', value: '280 AW' },
      { label: 'AI 청소모드', value: '마루/카펫/매트 바닥 자동감지', highlight: true },
      { label: '청정스테이션', value: '에어펄스 특허 먼지비움' },
      { label: '무게', value: '2.42 kg' },
    ],
    detailedSpecs: {
      '항균': '항균 다층 99.999% 미세먼지 배출 차단 시스템',
      '디스플레이': '대화형 한글 LCD 디스플레이',
      'A/S': '삼성전자 전국 1년 (모터 평생 보증)',
    },
    labTests: [
      { title: '바닥 재질별 AI 흡입 반응속도', value: '0.4초 감지', rating: '최상', detail: '카펫 진입 즉시 자동으로 파워 증강' },
    ],
    verdict: '바닥 종류를 스스로 알아채 흡입력을 조절해 배터리를 아끼고 모터 평생 보증까지 갖춘 스마트 청소기.',
    pros: [
      '카펫과 마루를 알아서 판단하는 AI 브러시 모드',
      '먼지 날림 없는 깔끔한 청정스테이션',
      '디지털 인버터 모터 평생 보증',
    ],
    cons: [
      '배터리 충전 시간이 완충까지 약 3.5시간 소요',
    ],
    reviews: [],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'cv-dibea-chaisun',
    categoryId: 'cordless_vacuum',
    name: '디베아 차이슨 무선청소기 올뉴29000',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%2594%2594%25EB%25B2%25A0%25EC%2595%2584%2520%25EC%25B0%25A8%25EC%259D%25B4%25EC%258A%25A8',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '디베아 (Dibea)',
    modelCode: 'ALL-NEW-29000',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80',
    price: 189000,
    originalPrice: 249000,
    nosearchScore: 88,
    pickType: 'value',
    pickLabel: '가성비 원탑 PICK',
    scores: {
      performance: 84,
      convenience: 88,
      maintenance: 85,
      valueForMoney: 98,
    },
    keySpecs: [
      { label: '흡입력', value: '39,000 Pa (약 160AW)' },
      { label: '무게', value: '2.1 kg' },
      { label: '헤드 LED', value: '전면 고휘도 LED 탑재' },
      { label: '작동시간', value: '최대 50분' },
    ],
    detailedSpecs: {
      '배터리': '착탈식 대용량 배터리',
      '필터': 'H13 헤파필터 + 물세척 가능',
      'A/S': '국내 정식 수입사 2년 무상 보증',
    },
    labTests: [
      { title: '가성비 마루 흡입력', value: '94.8% 포집', rating: '우수', detail: '원룸/소형 평수 청소에 차고 넘침' },
    ],
    verdict: '20만원도 안 되는 가격에 39,000Pa 강력 모터와 국내 AS 2년을 지원하는 자취생 및 가성비 유저의 축복.',
    pros: [
      '부담 없는 파격적인 가격대',
      '물세척 가능한 H13 헤파필터로 유지비 제로',
      '가벼운 본체와 밝은 전면 LED',
    ],
    cons: [
      '먼지통 수동 비움 및 마감 소재의 플라스틱 느낌',
    ],
    reviews: [],
    salesRank: 4,
    bestSeller: false,
    releaseYear: 2023,
  },

  // --- 음식물처리기 ---
  {
    id: 'fd-minix-the-flender',
    categoryId: 'food_disposer',
    name: '미닉스 더 플렌더 (3세대)',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%25AF%25B8%25EB%258B%2589%25EC%258A%25A4%2520%25EB%258D%2594',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '미닉스 (Minix)',
    modelCode: 'MNX-FL300',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    price: 498000,
    originalPrice: 629000,
    nosearchScore: 96,
    pickType: 'top',
    pickLabel: '가전비교 종합 1위',
    scores: {
      performance: 97,
      convenience: 96,
      maintenance: 95,
      valueForMoney: 95,
    },
    keySpecs: [
      { label: '처리 방식', value: '고온건조 맷돌 분쇄형 (감량률 95%)', highlight: true },
      { label: '용량', value: '2.0 L (1~3인 가구 최적)' },
      { label: '소음', value: '19.9 dB (도서관보다 조용함)', highlight: true },
      { label: '필터 교체주기', value: '정품 활성탄 필터 약 4~6개월' },
      { label: '자동 세척', value: '원터치 자동 세척 모드 탑재' },
    ],
    detailedSpecs: {
      '크기': '260 x 260 x 360 mm (초소형 A4 용지 크기)',
      '무게': '7.5 kg',
      '소비전력': '건조 시 350W (1회 처리비용 약 180원)',
      '안전기능': '어린이 보호 잠금, 과열 방지 센서',
      'A/S 보증': '미닉스 코리아 2년 무상 보증',
    },
    labTests: [
      { title: '음식물 부피 감량률', value: '95.4% 감량', rating: '최상', detail: '물기 가득한 수박껍질, 찌개건더기가 가루로 변환' },
      { title: '악취 누출 측정 (VOC 검출)', value: '0.00 ppm (미검출)', rating: '최상', detail: '청국장, 김치 처리 시에도 냄새 제로' },
      { title: '야간 실측 소음', value: '19.9 dB', rating: '최상', detail: '주방 싱크대 위에 둬도 작동 소리 안 들림' },
    ],
    verdict: '주방 인테리어를 해치지 않는 예쁜 미니멀 디자인에 냄새 차단과 19.9dB 초저소음을 실현한 베스트셀러.',
    pros: [
      'A4 용지 한 장 크기의 콤팩트한 사이즈로 좁은 주방 싱크대에 찰떡',
      '소음이 거의 안 들려 밤새 돌려놓고 자도 무방',
      '찌든 때 원터치 물세척 모드로 건조통 청소가 매우 쉬움',
    ],
    cons: [
      '4인 이상 대가족이 하루 세 끼 많은 양을 버리기엔 2L 용량이 조금 아쉬움',
    ],
    reviews: [
      {
        id: 'r7',
        author: '송*하 (신혼 2년차)',
        rating: 5,
        date: '2026.04.09',
        verifiedBuyer: true,
        usageMonths: 4,
        content: '여름에 음식물 쓰레기 버리러 엘리베이터 타는 고통에서 해방됐습니다. 김치 냄새도 진짜 1도 안 나요.',
        pros: '냄새 차단력 완벽, 초소형 디자인',
        cons: '필터 주기적으로 갈아줘야 함',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'fd-smartcara-400-pro',
    categoryId: 'food_disposer',
    name: '스마트카라 400 Pro',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%258A%25A4%25EB%25A7%2588%25ED%258A%25B8%25EC%25B9%25B4%25EB%259D%25BC%2520400',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '스마트카라 (Smartcara)',
    modelCode: 'PCS-400PRO',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
    price: 799000,
    originalPrice: 940000,
    nosearchScore: 94,
    pickType: 'performance',
    pickLabel: '강력분쇄 내구성 PICK',
    scores: {
      performance: 98,
      convenience: 94,
      maintenance: 94,
      valueForMoney: 86,
    },
    keySpecs: [
      { label: '처리 방식', value: '3단 복합 건조분쇄 (닭뼈 가능)' },
      { label: '처리 시간', value: '평균 2.5 ~ 4시간 (고속)', highlight: true },
      { label: '용량', value: '2.0 L' },
      { label: '소음', value: '25.8 dB' },
    ],
    detailedSpecs: {
      '도어 방식': '스마트 락 원터치 자동 개폐',
      '필터': '다중 활성탄 에코필터 (탈취력 99.9%)',
      'A/S': '스마트카라 국내 본사 1년 (모터 5년)',
    },
    labTests: [
      { title: '닭뼈/갑각류 껍질 분쇄력', value: '완전 가루화 성공', rating: '최상', detail: '가장 단단한 잔뼈도 막힘 없이 갈아냄' },
    ],
    verdict: '음식물처리기 10년 역사 원조 브랜드다운 무자비한 분쇄 토크와 압도적인 모터 내구성.',
    pros: [
      '단단한 생선 가시나 치킨 잔뼈도 맷돌 모터로 쉽게 갈아버림',
      '감량률이 95% 이상으로 나오는 결과물이 완벽히 건조된 흙 형태',
      '도어 밀폐력이 우수해 보관 모드 시 냄새 역류 없음',
    ],
    cons: [
      '경쟁작 대비 무게(13kg)가 묵직하고 가격이 다소 비쌈',
    ],
    reviews: [],
    salesRank: 2,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'fd-cuckoo-momcomfort',
    categoryId: 'food_disposer',
    name: '쿠쿠 맘편한 음식물처리기 CFD-C151',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%25BF%25A0%25EC%25BF%25A0%2520%25EB%25A7%2598%25ED%258E%25B8%25ED%2595%259C',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '쿠쿠 (Cuckoo)',
    modelCode: 'CFD-C151M',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    price: 369000,
    originalPrice: 489000,
    nosearchScore: 90,
    pickType: 'value',
    pickLabel: '가성비 픽',
    scores: {
      performance: 89,
      convenience: 91,
      maintenance: 88,
      valueForMoney: 96,
    },
    keySpecs: [
      { label: '처리 방식', value: '고온건조 분쇄형' },
      { label: '용량', value: '1.5 L (원룸/소형가구)' },
      { label: '필터', value: '복합 카트리지 필터' },
      { label: '소음', value: '23.0 dB' },
    ],
    detailedSpecs: {
      '크기': '250 x 270 x 340 mm',
      'A/S': '쿠쿠 전국 서비스센터 1년',
    },
    labTests: [
      { title: '1회 전기세 소비전력', value: '약 160원', rating: '우수', detail: '인버터 히팅으로 알뜰 소비' },
    ],
    verdict: '30만원대 중반에 만나는 믿을 수 있는 쿠쿠 브랜드의 실속형 고온건조 음식물처리기.',
    pros: [
      '쿠쿠 전국 서비스센터의 신속한 AS',
      '합리적인 30만원대 가격과 작은 점유 공간',
    ],
    cons: [
      '1.5L 용량이라 매일 배출하는 가구에 적합',
    ],
    reviews: [],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2023,
  },

  // --- 식기세척기 ---
  {
    id: 'dw-lg-dios-objet-14',
    categoryId: 'dishwasher',
    name: 'LG 디오스 오브제컬렉션 식기세척기 14인용',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DLG%2520%25EB%2594%2594%25EC%2598%25A4%25EC%258A%25A4',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'LG전자 (LG)',
    modelCode: 'DUBJ4ES',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
    price: 1290000,
    originalPrice: 1590000,
    nosearchScore: 97,
    pickType: 'top',
    pickLabel: '가전비교 종합 1위',
    scores: {
      performance: 99,
      convenience: 98,
      maintenance: 95,
      valueForMoney: 88,
    },
    keySpecs: [
      { label: '용량', value: '14인용 (국내 최대 용량)', highlight: true },
      { label: '스팀', value: '100℃ 트루스팀 4구 탑재', highlight: true },
      { label: '건조 방식', value: '열풍 건조 + 자동 문열림', highlight: true },
      { label: '세척 날개', value: '토네이도 세척 날개 (X자형 54개 입체물살)' },
      { label: '소음', value: '39.0 dB (조용함)' },
    ],
    detailedSpecs: {
      '설치 형태': '빌트인 / 프리스탠딩 겸용',
      '물 얼룩 개선': '연수장치 기본 내장 (소금 투입으로 물때 방지)',
      '바구니': '3단 스마트 선반 (높낮이 조절 3단계)',
      '에너지 소비효율': '1등급',
      'A/S': 'LG전자 무상 1년 (인버터 DD모터 10년 무상)',
    },
    labTests: [
      { title: '고추기름 및 굳은 밥풀 세척률', value: '99.8%', rating: '최상', detail: '애벌세척 없이 넣어도 100℃ 트루스팀으로 완전 제거' },
      { title: '플라스틱 식기 건조 잔여 물기', value: '98.5% 완전 건조', rating: '최상', detail: '열풍 분사 + 자동문열림 시너지로 물방울 없음' },
      { title: '유리잔 물 얼룩 발생 여부', value: '연수기 작동 시 얼룩 0개', rating: '최상', detail: '석회질/물때 하얗게 남지 않음' },
    ],
    verdict: '14인용 대용량으로 냄비와 프라이팬까지 한 번에 씻고, 100℃ 트루스팀과 열풍건조로 물때 없이 뽀송한 종결자.',
    pros: [
      '14인용의 여유로운 내부 공간으로 큰 곰솥, 후라이팬 3개도 넉넉히 수납',
      '100℃ 트루스팀으로 기름때와 식기 유해 세균을 완벽하게 살균',
      '열풍건조 후 자동으로 문이 열려 냄새나 잔여 습기가 완벽 배출됨',
    ],
    cons: [
      '프리스탠딩 설치 시 주방 싱크대 리폼 공사가 필요할 수 있음',
    ],
    reviews: [
      {
        id: 'r8',
        author: '정*미 (4인 가족 주부)',
        rating: 5,
        date: '2026.06.11',
        verifiedBuyer: true,
        usageMonths: 3,
        content: '6인용 쓰다가 14인용으로 바꿨는데 진짜 차원이 달라요. 프라이팬이랑 큰 도마까지 다 들어가니 설거지거리가 아예 안 나옵니다.',
        pros: '대용량 수납, 열풍 건조, 자동문열림',
        cons: '싱크대 하부장 공사 비용 발생',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'dw-samsung-bespoke-12',
    categoryId: 'dishwasher',
    name: '삼성 비스포크 식기세척기 12인용',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%2582%25BC%25EC%2584%25B1%2520%25EB%25B9%2584%25EC%258A%25A4%25ED%258F%25AC%25ED%2581%25AC',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '삼성전자 (Samsung)',
    modelCode: 'DW60BB815UAP',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
    price: 940000,
    originalPrice: 1290000,
    nosearchScore: 93,
    pickType: 'performance',
    pickLabel: '가성비/디자인 PICK',
    scores: {
      performance: 94,
      convenience: 95,
      maintenance: 92,
      valueForMoney: 92,
    },
    keySpecs: [
      { label: '용량', value: '12인용' },
      { label: '세척', value: '75℃ 고온 직수 살균' },
      { label: '건조 방식', value: '열풍 건조 + 자동 문열림', highlight: true },
      { label: '세척 날개', value: '하단 360도 회전 노즐' },
    ],
    detailedSpecs: {
      '패널': '맞춤 비스포크 컬러 교체 가능',
      '정수 필터': '내장형 미세플라스틱 필터',
      'A/S': '삼성전자 1년 (모터 10년)',
    },
    labTests: [
      { title: '양념 소스 세척률', value: '98.2%', rating: '우수', detail: '표준 코스로도 일상 기름때 말끔히 세척' },
    ],
    verdict: '주방 싱크대 색상과 완벽하게 매칭할 수 있는 감각적인 비스포크 디자인에 열풍건조까지 갖춘 12인용 추천 모델.',
    pros: [
      '비스포크 도어 패널 교체로 주방 인테리어 통일감 최상',
      '자동 문열림과 열풍 건조의 준수한 건조 성능',
    ],
    cons: [
      '트루스팀 기능은 미탑재 (75도 고온수 세척 방식)',
    ],
    reviews: [],
    salesRank: 2,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'dw-skmagic-triple-care-6',
    categoryId: 'dishwasher',
    name: 'SK매직 트리플케어 6인용 식기세척기',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DSK%25EB%25A7%25A4%25EC%25A7%2581%2520%25ED%258A%25B8%25EB%25A6%25AC%25ED%2594%258C%25EC%25BC%2580%25EC%2596%25B4',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'SK매직',
    modelCode: 'DWA-19C0P',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
    price: 469000,
    originalPrice: 620000,
    nosearchScore: 90,
    pickType: 'value',
    pickLabel: '원룸/2인가구 1위',
    scores: {
      performance: 89,
      convenience: 91,
      maintenance: 90,
      valueForMoney: 95,
    },
    keySpecs: [
      { label: '용량', value: '6인용 (카운터탑/싱크대 위 거치)', highlight: true },
      { label: '타입', value: '무타공 설치 가능', highlight: true },
      { label: '살균', value: 'UV 자외선 살균 보관' },
      { label: '건조', value: '자동 문열림 + 듀얼 열풍' },
    ],
    detailedSpecs: {
      '크기': '540 x 500 x 520 mm',
      '설치': '싱크대 상판 타공 없이 호스 연결 가능',
      'A/S': 'SK매직 1년',
    },
    labTests: [
      { title: '소형 그릇 세척력', value: '97.5%', rating: '우수', detail: '밥그릇, 국그릇, 컵 최적화 선반 구조' },
    ],
    verdict: '싱크대 하부장 공사 없이 상판에 올려 바로 쓰는 1~2인 가구 및 전월세 거주자를 위한 구세주.',
    pros: [
      '전월세 집에서도 부담 없는 무타공 거치 방식',
      '세척 후 UV 살균 모드로 그릇 건조대 겸 식기장으로 활용 가능',
    ],
    cons: [
      '대형 웍이나 깊은 곰솥은 크기상 수납이 어려움',
    ],
    reviews: [],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2023,
  },

  // --- 공기청정기 ---
  {
    id: 'ap-lg-puricare-360-hit',
    categoryId: 'air_purifier',
    name: 'LG 퓨리케어 360˚ Hit 공기청정기',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DLG%2520%25ED%2593%25A8%25EB%25A6%25AC%25EC%25BC%2580%25EC%2596%25B4',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'LG전자 (LG)',
    modelCode: 'AS183HWWA',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80',
    price: 349000,
    originalPrice: 429000,
    nosearchScore: 96,
    pickType: 'top',
    pickLabel: '가전비교 1위 PICK',
    scores: {
      performance: 97,
      convenience: 96,
      maintenance: 95,
      valueForMoney: 94,
    },
    keySpecs: [
      { label: '청정 면적', value: '60 ㎡ (약 18평형)', highlight: true },
      { label: '필터 등급', value: 'V 안심 헤파필터 (0.01㎛ 99.999% 제거)', highlight: true },
      { label: '청정 구조', value: '360도 전방위 흡입' },
      { label: '센서', value: 'PM 1.0 극초미세먼지 센서 + 가스센서' },
      { label: '소음', value: '취침모드 20.0 dB (극저소음)' },
    ],
    detailedSpecs: {
      '필터 수명': '약 1년 (앱에서 잔여 수명 % 확인 가능)',
      '스마트 제어': 'LG ThinQ 앱 및 원격 모니터링',
      '소비전력': '41 W (에너지 소비효율 2등급)',
      '크기': '315 x 315 x 511 mm (콤팩트 원통형)',
      'A/S': 'LG전자 전국 1년',
    },
    labTests: [
      { title: '극초미세먼지(0.01㎛) 정화속도', value: '15분 내 99.9% 도달', rating: '최상', detail: '밀폐 챔버 시험 기준 최고속 정화력' },
      { title: '생활 악취(암모니아/초산) 탈취율', value: '98.8%', rating: '최상', detail: '생선 굽기 후 20분 내 냄새 싹 사라짐' },
      { title: '취침 모드 실측 소음', value: '20.0 dB', rating: '최상', detail: '시계 초침 소리보다 조용함' },
    ],
    verdict: '360도 전방위 흡입과 0.01㎛까지 걸러내는 V필터로 성능, 디자인, 저소음 삼박자를 완성한 거실/안방 전천후 추천기.',
    pros: [
      '벽에 붙여도 360도 전방향에서 공기를 흡입해 공기 순환율이 뛰어남',
      'PM1.0 센서로 요리나 외출 복귀 시 미세먼지를 즉각 감지해 반응',
      '콤팩트해진 슬림 타워로 공간 차지 최소화',
    ],
    cons: [
      '상단 클린부스터(서큘레이터 돌출형)는 제외된 기본 모델',
    ],
    reviews: [
      {
        id: 'r9',
        author: '강*우 (알레르기 비염 환자)',
        rating: 5,
        date: '2026.04.27',
        verifiedBuyer: true,
        usageMonths: 8,
        content: '환절기마다 재채기 달고 살았는데 방에 퓨리케어 틀어놓고 자면 코 막힘이 확 줄어듭니다. 소음도 거의 안 나요.',
        pros: '확실한 공기 정화 체감, 저소음',
        cons: '1년마다 필터 교체 비용(약 6~7만원) 발생',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'ap-samsung-bluesky-3100',
    categoryId: 'air_purifier',
    name: '삼성 블루스카이 3100 공기청정기',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%2582%25BC%25EC%2584%25B1%2520%25EB%25B8%2594%25EB%25A3%25A8%25EC%258A%25A4%25EC%25B9%25B4%25EC%259D%25B4',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '삼성전자 (Samsung)',
    modelCode: 'AX033B310GWD',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    price: 189000,
    originalPrice: 249000,
    nosearchScore: 91,
    pickType: 'value',
    pickLabel: '가성비 방방이 픽',
    scores: {
      performance: 90,
      convenience: 91,
      maintenance: 92,
      valueForMoney: 98,
    },
    keySpecs: [
      { label: '청정 면적', value: '33.1 ㎡ (약 10평형, 침실 최적)' },
      { label: '필터', value: '숯 탈취 일체형 집진 필터' },
      { label: '먼지센서', value: '레이저 PM10 센서 + 가스센서' },
      { label: '가격', value: '10만원대 중후반', highlight: true },
    ],
    detailedSpecs: {
      '크기': '349 x 499 x 236 mm',
      'A/S': '삼성전자 1년',
    },
    labTests: [
      { title: '원룸/방 공기 정화 효율', value: '98.1%', rating: '우수', detail: '방 하나 면적에 가성비 최적화' },
    ],
    verdict: '아이방이나 침실 서브 공기청정기로 손색없는 10만원대 최고의 실속 대기업 공기청정기.',
    pros: [
      '삼성 브랜드의 안정적인 품질과 10만원대의 착한 가격',
      '정품 필터 가격이 저렴하여 유지보수 부담이 적음',
    ],
    cons: [
      '거실 전체를 커버하기에는 청정 면적이 다소 작음',
    ],
    reviews: [],
    salesRank: 2,
    bestSeller: false,
    releaseYear: 2023,
  },
  {
    id: 'ap-dyson-purifier-hot-cool',
    categoryId: 'air_purifier',
    name: '다이슨 핫앤쿨 포름알데히드 공기청정기',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EB%258B%25A4%25EC%259D%25B4%25EC%258A%25A8%2520%25ED%2595%25AB%25EC%2595%25A4%25EC%25BF%25A8',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '다이슨 (Dyson)',
    modelCode: 'HP09',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
    price: 989000,
    originalPrice: 1190000,
    nosearchScore: 92,
    pickType: 'premium',
    pickLabel: '사계절 온풍/송풍 복합 픽',
    scores: {
      performance: 95,
      convenience: 96,
      maintenance: 90,
      valueForMoney: 83,
    },
    keySpecs: [
      { label: '복합 기능', value: '공기청정 + 온풍기 + 선풍기 3-in-1', highlight: true },
      { label: '유해물질', value: '포름알데히드 촉매 영구 분해' },
      { label: '필터', value: 'HEPA H13 전제품 완전 밀봉' },
    ],
    detailedSpecs: {
      '회전 각도': '최대 350도 맞춤 회전',
      'A/S': '다이슨 코리아 2년',
    },
    labTests: [
      { title: '새집증후군 포름알데히드 분해', value: '99.5% 연속 분해', rating: '최상', detail: '필터 교체 없이 영구 촉매 분해' },
    ],
    verdict: '겨울철엔 따뜻한 온풍기로, 여름엔 선풍기로 활용하며 1년 내내 미세먼지와 새집 유해물질을 잡는 프리미엄 기기.',
    pros: [
      '온풍 기능으로 겨울철 샤워 후나 아침 기상 시 방안 공기를 빠르게 덥힘',
      '날개 없는 안전한 디자인으로 아이나 반려동물이 다칠 위험 제로',
    ],
    cons: [
      '높은 가격대와 온풍 모드 사용 시 전기요금 주의 필요',
    ],
    reviews: [],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2024,
  },

  // --- 제습기 ---
  {
    id: 'dh-winix-bbosong-16',
    categoryId: 'dehumidifier',
    name: '위닉스 뽀송 인버터 제습기 16L',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%259C%2584%25EB%258B%2589%25EC%258A%25A4%2520%25EB%25BD%2580%25EC%2586%25A1',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '위닉스 (Winix)',
    modelCode: 'DXJE160-LMK',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    price: 369000,
    originalPrice: 429000,
    nosearchScore: 96,
    pickType: 'top',
    pickLabel: '가전비교 1위 PICK',
    scores: {
      performance: 98,
      convenience: 95,
      maintenance: 96,
      valueForMoney: 95,
    },
    keySpecs: [
      { label: '일일 제습량', value: '16 L/일 (25~35평 최적)', highlight: true },
      { label: '에너지 효율', value: '1등급 (스마트 인버터)', highlight: true },
      { label: '물통 용량', value: '4.0 L (투명 수위창)' },
      { label: '소음', value: '약 38.3 dB (저소음 모드)' },
      { label: '부가 기능', value: '신발건조 키트 + 옷장 집중건조 호스' },
    ],
    detailedSpecs: {
      '컴프레서': '스마트 인버터 컴프레서 5년 무상 보증',
      '이동성': '360도 회전 히든 휠 바퀴 + 접이식 핸들',
      '성에 제거': '자동 성에 제거 모드',
      '연속 배수': '호스 연결 시 연속 배수 지원',
      'A/S': '위닉스 2년 무상 보증 (홈페이지 등록 시)',
    },
    labTests: [
      { title: '실내 습도 80% → 50% 도달시간', value: '28분 소요', rating: '최상', detail: '장마철 빨래 건조 시 3시간 만에 바삭하게 마름' },
      { title: '실측 소비전력 (월 예상 전기요금)', value: '약 6,200원/월', rating: '최상', detail: '인버터 제어로 목표 습도 도달 시 최소 전력 운전' },
      { title: '연속 작동 시 소음', value: '38.3 dB', rating: '우수', detail: '침실 문 닫아두면 거실에서 거의 안 들림' },
    ],
    verdict: '제습기의 대명사 위닉스가 선보인 1등급 인버터 명작. 검증된 내구성과 신발 건조 키트까지 여름철 필수 가전 1순위.',
    pros: [
      '에너지소비효율 1등급으로 누진세 걱정 없이 여름 내내 가동 가능',
      '신발 건조 전용 Y자 호스가 기본 포함되어 비 맞은 운동화 1시간 쾌속 건조',
      '부드러운 360도 바퀴로 집안 곳곳 밀고 다니기 수월함',
    ],
    cons: [
      '물통을 비울 때 손잡이 그립감이 다소 묵직함',
    ],
    reviews: [
      {
        id: 'r10',
        author: '오*경 (여름 빨래 고민)',
        rating: 5,
        date: '2026.07.21',
        verifiedBuyer: true,
        usageMonths: 7,
        content: '작년 여름에 왜 이제 샀나 후회했습니다. 방에 빨래 널고 틀어놓으면 반나절 만에 냄새 없이 뽀송뽀송하게 마르고 습도 45% 유지돼요.',
        pros: '강력한 제습 속도, 신발 건조 호스',
        cons: '가동 시 미세한 미온풍 발생',
      },
    ],
    salesRank: 1,
    bestSeller: true,
    releaseYear: 2024,
  },
  {
    id: 'dh-lg-whisen-dual-inverter-20',
    categoryId: 'dehumidifier',
    name: 'LG 휘센 듀얼 인버터 제습기 20L',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3DLG%2520%25ED%259C%2598%25EC%2584%25BC',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: 'LG전자 (LG)',
    modelCode: 'DQ203PECA',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80',
    price: 529000,
    originalPrice: 649000,
    nosearchScore: 97,
    pickType: 'performance',
    pickLabel: '성능/대용량 1위',
    scores: {
      performance: 99,
      convenience: 97,
      maintenance: 96,
      valueForMoney: 89,
    },
    keySpecs: [
      { label: '일일 제습량', value: '20 L/일 (대용량)', highlight: true },
      { label: '에너지 효율', value: '1등급 듀얼 인버터', highlight: true },
      { label: '물통 용량', value: '5.0 L (원터치 라이팅 물통)' },
      { label: '위생 케어', value: 'UV nano 팬 살균' },
    ],
    detailedSpecs: {
      '컴프레서': '듀얼 인버터 컴프레서 10년 무상 보증',
      '앱 제어': 'LG ThinQ 원격 실시간 습도 제어',
      'A/S': 'LG전자 1년 (컴프레서 10년)',
    },
    labTests: [
      { title: '대형 거실(38평) 제습 스피드', value: '22분 만에 쾌적권', rating: '최상', detail: '2개의 실린더 듀얼 모터로 극강의 흡습력' },
    ],
    verdict: '20L 대용량 듀얼 인버터로 40평대 아파트도 거뜬히 커버하며, UV 살균 팬과 물통 라이팅의 디테일이 빛나는 최고급 제습기.',
    pros: [
      '듀얼 인버터 컴프레서 10년 무상 보증의 독보적 신뢰도',
      '물통에 은은한 LED 라이팅이 들어와 물 찬 상태를 한눈에 파악',
      '팬에 UV 자외선을 쏴서 곰팡이와 세균 번식을 방지하는 내부 위생',
    ],
    cons: [
      '위닉스 기본형 대비 가격대가 약 15만원 이상 높음',
    ],
    reviews: [],
    salesRank: 2,
    bestSeller: false,
    releaseYear: 2024,
  },
  {
    id: 'dh-shinil-large-18',
    categoryId: 'dehumidifier',
    name: '신일 대용량 제습기 18L',
    buyUrl: 'https://link.coupang.com/re/AFFSDP?lptag=AF5563346&subid=gajun&pageKey=0&traceid=V0-153-gajun&tu=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fsearch%3Fcomponent%3D%26q%3D%25EC%258B%25A0%25EC%259D%25BC%2520%25EB%258C%2580%25EC%259A%25A9%25EB%259F%2589',
    mallName: '쿠팡 로켓배송',
    isRocket: true,
    mallSaleBadge: '🚀 로켓배송',
    brand: '신일전자',
    modelCode: 'SDH-1800PC',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    price: 249000,
    originalPrice: 320000,
    nosearchScore: 89,
    pickType: 'value',
    pickLabel: '가성비 18L PICK',
    scores: {
      performance: 91,
      convenience: 87,
      maintenance: 88,
      valueForMoney: 97,
    },
    keySpecs: [
      { label: '일일 제습량', value: '18 L/일' },
      { label: '가격', value: '20만원대 중반', highlight: true },
      { label: '물통 용량', value: '4.5 L' },
    ],
    detailedSpecs: {
      '에너지 효율': '1등급',
      'A/S': '신일전자 전국 1년',
    },
    labTests: [
      { title: '가격 대비 제습 성능비', value: '1위 (가성비 지수 97점)', rating: '최상', detail: '저렴한 가격에 18L 대용량 달성' },
    ],
    verdict: '불필요한 부가기능을 빼고 오직 정직한 제습량과 착한 가격에 집중한 실속형 대용량 제습기.',
    pros: [
      '20만원대 중반에 만날 수 있는 18L 대용량 1등급 모델',
      '직관적인 기계식/터치 조작부로 부모님 선물용으로 좋음',
    ],
    cons: [
      'LG/위닉스 대비 본체 진동 소음이 약간 더 느껴짐',
    ],
    reviews: [],
    salesRank: 3,
    bestSeller: false,
    releaseYear: 2023,
  },
];
