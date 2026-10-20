// 글별 "확인한 출처". 2026-10-20에 URL을 직접 열어 응답(200)과 해당 내용을 확인한 것만 넣는다.
// 새 출처를 추가할 때는 반드시 직접 열어 확인한 뒤 CHECKED 날짜를 갱신한다.
export const CHECKED = '2026-10-20';
export const CHECKED_LABEL = '2026년 10월 20일';

export const SRC = {
  fsk_temp: { org: '식품의약품안전처 식품안전나라', doc: '온도, 시간 관리 (찬 음식 4℃ 이하 냉장, 4~60℃ 위험 온도 구간)', url: 'https://www.foodsafetykorea.go.kr/portalmobile/content/detail.do?bbs_no=bbs427&ntctxt_no=1069308' },
  fsk_fridge10: { org: '식품의약품안전처 식품안전나라', doc: '냉장고 안전 10계명 (70% 이하로 채우기, 위치별 온도, 뜨거운 음식은 식힌 뒤 보관)', url: 'https://www.foodsafetykorea.go.kr/portal/board/boardDetail.do?bbs_no=bbs001&menu_grp=MENU_NEW01&menu_no=3120&ntctxt_no=21709' },
  korea_fridge: { org: '대한민국 정책브리핑(식품의약품안전처 식중독 예방 6대 수칙 소개)', doc: '우리집 냉장고 보관온도가 궁금해졌다 (냉장 5℃, 냉동 -18℃ 이하)', url: 'https://www.korea.kr/news/customizedNewsView.do?newsId=148943131' },
  kepco: { org: '한국전력공사 사이버지점', doc: '주요 전기요금제도(주택용전력 요금 누진제) (200kWh 단위 3단계, 계절별 요금표)', url: 'https://cyber.kepco.co.kr/ckepco/front/jsp/CY/H/C/CYHCHP00206.jsp' },
  eep_summary: { org: '한국에너지공단 효율관리제도', doc: '효율등급제도 제도개요 (1~5등급, 최저소비효율기준)', url: 'https://eep.energy.or.kr/business_introduction/effi_summary.aspx' },
  eep_compare: { org: '한국에너지공단 효율관리제도', doc: '에너지절약 효과 비교 (1·3·5등급 소비전력량 비교, 기준 강화에 따라 달라질 수 있음)', url: 'https://eep.energy.or.kr/more/compare_efficiency.aspx' },
  eep_knowhow7: { org: '한국에너지공단 효율관리제도', doc: '전기장판, 전기온풍기 등 전기난방기기 사용을 자제하세요', url: 'https://eep.energy.or.kr/more/knowhow7.aspx' },
  kca_mat2013: { org: '한국소비자원', doc: '소비자안전주의보 「전기장판류 안전사고 사례분석」 (2013.12.31)', url: 'https://www.kca.go.kr/home/sub.do?menukey=4006&mode=view&no=1001470015&page=4' },
  kca_mat2020: { org: '한국소비자원', doc: '소비자안전주의보 「겨울철 전기장판 사용 시 저온화상 주의」 (2020.12.14)', url: 'https://www.kca.go.kr/home//sub.do?menukey=4006&mode=view&no=1003052349' },
  kca_test2020: { org: '한국소비자원', doc: '『전기장판』 품질 비교시험 결과 (소비전력량 930Wh~1,503Wh)', url: 'https://www.kca.go.kr/smartconsumer/board/download.do?bid=00000146&did=1003056039&fno=10029050&menukey=7301' },
  korea_carbon: { org: '대한민국 정책브리핑(한국소비자원 보도자료)', doc: '카본 전기매트 10개 제품 비교정보 제공 (2025.12)', url: 'https://www.korea.kr/briefing/policyBriefingView.do?newsId=156734593' },
  kfsi: { org: '한국소방안전원', doc: '소방안전플러스 VOL.09 「겨울철 난방용품 안전하게 사용하기」', url: 'https://www.kfsi.or.kr/contents/webzine/201812/sub03-03.html' },
  law_dispute: { org: '공정거래위원회 고시 (국가법령정보센터)', doc: '소비자분쟁해결기준 [공정거래위원회고시 제2023-28호]', url: 'https://www.law.go.kr/LSW/admRulInfoP.do?admRulSeq=2100000236196&chrClsCd=010201' },
  samsung_dispute: { org: '삼성전자서비스 (소비자분쟁해결기준 별표 Ⅲ 전재)', doc: '품목별 품질보증기간 및 부품보유기간 (TV·냉장고 9년, 에어컨 8년, 세탁기·건조기·제습기·가습기 7년)', url: 'https://www.samsungsvc.co.kr/info/fee?tab=conflict' },
  kca_dispute: { org: '한국소비자원', doc: '소비자분쟁해결기준 목록 (별표 3 품질보증기간·부품보유기간, 별표 4 내용연수표)', url: 'https://www.kca.go.kr/odr/pg/pi/osPgBjResolvW.do' },
  safetykorea: { org: '국가기술표준원 제품안전정보센터', doc: '제품안전정보센터 (KC 인증·리콜 정보 조회)', url: 'https://www.safetykorea.kr' },
  kca_dehum2024: { org: '한국소비자원 소비자24 (비교공감 제2024-12호)', doc: '제습기 품질비교 시험평가 결과 (2024.7.17 게시, 9개 제품: 제습량·소음·제습효율·전기요금)', url: 'https://www.consumer.go.kr/user/ftc/consumer/cnsmrBBS/79/selectInfoRptDetail.do?infoId=A1080439&cntntsId=00000566' },
  kca_humid2025: { org: '한국소비자원 소비자24 (비교공감 제2025-18호)', doc: '가습기 품질비교 시험평가 결과 (2025.10.30 게시, 13개 제품: 가습량·소음·유지관리비용·화상·세척)', url: 'https://www.consumer.go.kr/user/ftc/consumer/cnsmrBBS/79/selectInfoRptDetail.do?infoId=A1081112' },
  eep_aircon_list: { org: '한국에너지공단 효율관리제도', doc: '효율등급제도 제품검색: 전기냉방기 (월간소비전력량, 효율등급, 제조일자에 따른 등급 변동 안내)', url: 'https://eep.energy.or.kr/certification/certi_list_260.aspx' },
  kca_aircon2026: { org: '한국소비자원', doc: '에어컨 사전 안전점검 캠페인 보도자료 (2026.3.3, 자가점검 항목·실외기 설치 수칙·화재 위해정보 267건)', url: 'https://www.kca.go.kr/home/sub.do?menukey=4002&mode=view&no=1004013059' },
  eep_knowhow4: { org: '한국에너지공단 효율관리제도', doc: '에어컨 에너지 절약 노하우 (필터 청소 시 소비전력 3~5% 차이, 2주에 1번 중성세제 세척)', url: 'https://eep.energy.or.kr/more/knowhow4.aspx' },
  kca_purifier2020: { org: '한국소비자원', doc: '가정용 정수기, 주기적인 위생관리 필요 (2020.10.13 보도자료, 40가구 수질 조사·취수부 소독 결과)', url: 'https://www.kca.go.kr/home/sub.do?menukey=4002&mode=view&no=1003003350' },
  easylaw_purifier: { org: '생활법령정보(법제처, 환경부·국립환경과학원 먹는물 수질기준 해설서 인용)', doc: '정수기 설치·관리 (필터는 설명서에 따라 정기 교환, 다중이용시설 6개월 1회 이상 소독)', url: 'https://easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=1455&ccfNo=1&cciNo=2&cnpClsNo=1' },
  kca_styler2026: { org: '대한민국 정책브리핑(한국소비자원 브리핑)', doc: '의류관리기 3종 품질 비교정보 제공 (2026.9.16, 표준스타일링 소비전력량 332~397Wh, 연간 전기요금 7,600~9,100원)', url: 'https://www.korea.kr/briefing/policyBriefingView.do?newsId=156781885' },
  ehtis_indoor: { org: '환경보건종합정보시스템(한국환경산업기술원)', doc: '실내공기질 관리방법 (온도 18~22℃, 습도 40~60%, 결로·곰팡이 관리, 환기)', url: 'https://www.ehtis.or.kr/cmn/sym/mnu/mpm/60001024/htmlMenuView.do' },
  dt_news: { org: '디지털타임스(다음 뉴스 전재, 공정위·소비자원 보도자료 인용)', doc: '겨울 난방용품 안전사고 1위? 전기장판…공정위, 소비자안전주의보 (2025.12.7, 2020~2024년 4,154건)', url: 'https://v.daum.net/v/PbYoZ1YCCj?f=p' },
};

// slug → 출처 id 목록 (본문이 이미 자체 출처 목록을 가진 글은 넣지 않는다)
export const POST_SOURCES = {
  'wall-aircon-self-clean': ['kca_aircon2026', 'eep_knowhow4', 'safetykorea'],
  'water-purifier-filter-hygiene': ['kca_purifier2020', 'easylaw_purifier'],
  'air-styler-electricity-cost': ['kca_styler2026', 'kepco'],
  'humidifier-humidity-placement': ['ehtis_indoor', 'kca_humid2025'],
  'energy-grade1-dehumidifier': ['eep_summary', 'eep_compare', 'kca_dehum2024'],
  'low-noise-dehumidifier': ['kca_dehum2024', 'kca_humid2025'],
  'energy-grade1-aircon': ['eep_compare', 'eep_aircon_list'],
  'humidifier-newborn-safety': ['kca_humid2025', 'safetykorea'],
  'fridge-temperature': ['fsk_temp', 'korea_fridge', 'fsk_fridge10'],
  'fridge-lifespan': ['law_dispute', 'samsung_dispute', 'kca_dispute', 'fsk_fridge10'],
  'electricity-cost': ['kepco', 'eep_summary', 'eep_compare'],
  'energy-grade': ['eep_summary', 'eep_compare'],
  'washer-lifespan': ['law_dispute', 'samsung_dispute', 'kca_dispute'],
  'dryer-lifespan': ['law_dispute', 'samsung_dispute', 'kca_dispute'],
  'heating-mat-compare': ['kca_mat2020', 'kca_test2020', 'korea_carbon', 'kca_mat2013', 'kfsi', 'eep_knowhow7', 'dt_news', 'safetykorea'],
  'electric-heater-types-guide': ['eep_knowhow7', 'kfsi', 'kca_mat2013', 'safetykorea'],
  'electric-range-vs-induction': ['kepco', 'eep_summary', 'safetykorea'],
  'induction-capacity-guide': ['kepco', 'eep_summary'],
  'dehumidifier-air-purifier-combo': ['eep_summary', 'law_dispute', 'samsung_dispute'],
};
