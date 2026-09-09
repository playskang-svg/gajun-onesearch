import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Info, Mail, ExternalLink, Award } from 'lucide-react';

export type PolicyTab = 'about' | 'privacy' | 'terms' | 'contact' | 'affiliate';

interface PolicyModalProps {
  isOpen: boolean;
  initialTab?: PolicyTab;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  initialTab = 'about',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  // Sync initial tab when reopened
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
              G
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-gray-900 leading-none">
                가전비교연구소 운영 및 법적 고지
              </h2>
              <p className="text-xs text-gray-500 mt-1">공정거래위원회 지침 및 구글 애드센스 정책 준수</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 bg-gray-50/50 px-3 sm:px-6 overflow-x-auto no-scrollbar gap-1 pt-2">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'about'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>사이트 소개</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>개인정보처리방침</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>이용약관 및 면책</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>문의하기</span>
          </button>
          <button
            onClick={() => setActiveTab('affiliate')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'affiliate'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>제휴 및 수익 구조</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm text-gray-700 leading-relaxed">
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-950 font-medium leading-relaxed">
                가전비교연구소(gajun.kr)는 소비자가 가전제품의 현란한 마케팅 문구에 현혹되지 않고, 
                <strong>공개된 객관적 사양 수치</strong>를 바탕으로 합리적인 선택을 내릴 수 있도록 돕는 독립 연구 플랫폼입니다.
              </div>
              <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-600 pl-2.5">
                핵심 운영 원칙 (E-E-A-T)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>공개 표준 사양 근거</strong>: 제조사 공식 사용설명서, 에너지관리공단 효율 데이터, KC 인증 검사표를 1차 근거로 분석합니다.</li>
                <li><strong>1:1 수평 스펙 비교</strong>: 동일한 측정 조건(소음 dB, 소비전력 W, 유효 용량 L)에서 편향 없이 나란히 비교합니다.</li>
                <li><strong>비판적 한계 명시</strong>: 제조사가 숨기고 싶은 소음, 필터 유지비, 패널 번인 위험, AS 한계를 가감 없이 밝힙니다.</li>
                <li><strong>안전 최우선 가이드</strong>: 전기·누수·누전 등 안전 위험이 따르는 자가 수리는 지양하고 전문 기사 위탁 기준을 명시합니다.</li>
              </ul>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-emerald-950 font-medium">
                본 사이트는 이용자의 프라이버시를 최우선으로 보호하며, 개인을 식별할 수 있는 정보를 직접 수집하거나 저장하지 않습니다.
              </div>
              <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-600 pl-2.5">
                Google 애드센스 및 제3자 광고 쿠키(Cookie) 안내
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Google을 포함한 제3자 광고 공급업체는 쿠키를 사용하여 이용자의 이전 방문 기록을 바탕으로 광고를 게재할 수 있습니다.</li>
                <li>Google의 광고 쿠키 사용으로 이용자의 관심사에 맞춘 개인 맞춤형 광고가 표시될 수 있습니다.</li>
                <li>
                  이용자는 언제든지 <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-600 underline font-bold">Google 광고 설정</a>에서 맞춤 광고를 해제할 수 있습니다.
                </li>
                <li>
                  서드파티 쿠키 비활성화는 <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" className="text-blue-600 underline font-bold">www.aboutads.info</a>를 통해서도 관리하실 수 있습니다.
                </li>
              </ul>
              <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-600 pl-2.5">
                개인정보 보호책임자
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                문의처: 가전비교연구소 운영국 (<a href="mailto:contact@gajun.kr" className="text-blue-600 font-bold">contact@gajun.kr</a>)
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-600 pl-2.5">
                정보 제공의 성격 및 법적 면책 사항
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>본 사이트의 모든 제품 사양, 실험실 점수, 관리 가이드는 <strong>일반적인 구매 참고 정보</strong>이며 특정 성능이나 고장 수리 결과를 보증하지 않습니다.</li>
                <li>실제 부품 사양과 수리 방법은 모델별·제조일자별로 상이하므로, <strong>제조사 공식 서비스센터 및 동봉된 사용설명서 안내가 항상 최우선</strong>합니다.</li>
                <li>게시된 제품 가격 및 할인율은 파트너사 API 수집 시점 기준이며 실시간 변동될 수 있습니다. 최종 구매 전 해당 판매처에서 확인하시기 바랍니다.</li>
                <li>가전 분해, 감전 위험, 가스관 분리 등 고위험 작업으로 인해 발생한 손해에 대해 본 사이트는 법적 책임을 지지 않습니다.</li>
              </ol>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                <div className="font-bold text-gray-900">공식 문의 이메일</div>
                <div className="text-blue-600 font-mono font-bold text-base">contact@gajun.kr</div>
                <p className="text-xs text-gray-500">평일 09:00 ~ 18:00 (접수 후 1~2 영업일 이내 회신)</p>
              </div>
              <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-600 pl-2.5">
                이런 문의를 환영합니다
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>게시된 가전 스펙 및 데이터 오탈자 제보 (확인 즉시 당일 정정 반영)</li>
                <li>다루어 주었으면 하는 가전 비교 분석 주제 제안</li>
                <li>제휴 및 광고 협력 제안</li>
                <li>저작권 및 정정보도 관련 요청</li>
              </ul>
            </div>
          )}

          {activeTab === 'affiliate' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950 text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">공정거래위원회 심사지침 준수 고지:</span><br />
                가전비교연구소는 쿠팡 파트너스 및 링크프라이스 등 공인된 제휴 마케팅 프로그램에 참여하고 있습니다. 
                본 사이트의 링크를 통해 구매가 이루어질 경우 플랫폼으로부터 일정액의 수수료를 지원받아 
                콘텐츠 제작 및 사이트 운영 비용으로 사용됩니다.
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                수수료 수취 여부는 구매자가 지불하는 최종 결제 가격에 일절 영향을 미치지 않으며, 
                특정 브랜드의 스펙 점수나 에디터 추천 순위에 어떠한 영향도 미치지 않습니다.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between">
          <a
            href={`/guide/${activeTab === 'affiliate' ? 'about' : activeTab}/`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-bold"
          >
            <span>웹 표준 문서(독립 페이지)로 크게 보기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
