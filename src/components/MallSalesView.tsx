import React from 'react';
import { ShoppingBag, ExternalLink, ShieldCheck, Sparkles, CreditCard, Truck, Gift, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface MallSalesViewProps {
  onOpenDetails: (product: Product) => void;
}

export const MallSalesView: React.FC<MallSalesViewProps> = ({ onOpenDetails }) => {
  const mallProducts = PRODUCTS.filter((p) => p.categoryId === 'mall_sales');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/40">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-20 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>2026 백화점 & 공식몰 가전 정기세일 특별 기획전</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight mb-3">
            백화점 가전 기획전 & 공식몰 <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              카드 청구할인 100% 챙기는 법
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            롯데백화점(롯데ON), 더현대닷컴, 신세계몰(SSG), 롯데하이마트, 전자랜드의 실시간 공식 가전 프로모션 혜택을 한눈에 비교하고, 사다리차 무료 지원과 제휴카드 청구할인 혜택을 놓치지 마세요.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 p-3 rounded-xl flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-blue-400 shrink-0" />
              <span>최대 10% 청구할인</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 p-3 rounded-xl flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>전국 무료 지정일 설치</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 p-3 rounded-xl flex items-center gap-2.5">
              <Gift className="w-4 h-4 text-amber-400 shrink-0" />
              <span>사은품 & 포인트 적립</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 p-3 rounded-xl flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>100% 본사 직영 정품</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Mall Exhibitions List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <span>검증된 백화점 & 전문몰 공식 기획전</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              가전비교연구소 제휴 파트너십을 통해 검증된 공식몰 딥링크로 안전하게 연결됩니다.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            실시간 {mallProducts.length}개 공식몰 참여
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mallProducts.map((mall) => (
            <div
              key={mall.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                {/* Mall Image */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={mall.image}
                    alt={mall.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {mall.brand}
                    </span>
                    {mall.mallSaleBadge && (
                      <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                        {mall.mallSaleBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {mall.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 bg-gray-50 p-2.5 rounded-lg border-l-2 border-indigo-500 italic">
                      "{mall.verdict}"
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5">
                    {mall.keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="text-gray-500">{spec.label}:</span>
                        <span className="font-semibold text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 space-y-2">
                <a
                  href={mall.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-center gap-2 transition shadow-xs text-center"
                >
                  <span>{mall.brand} 공식몰 혜택 바로가기</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenDetails(mall)}
                  className="w-full py-2 px-3 text-xs font-medium text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-center"
                >
                  세부 혜택 및 리뷰 분석 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Disclosure */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="leading-relaxed">
          <span className="font-bold">공정거래위원회 지침에 따른 공식 고지: </span>
          본 웹사이트의 백화점 및 공식몰 기획전 링크는 링크프라이스 및 제휴 마케팅 공식 파트너십 활동의 일환으로, 이용자가 제휴 링크를 통해 구매 시 가전비교연구소에 일정액의 수수료가 제공될 수 있습니다. (구매 가격에는 일체 영향이 없습니다.)
        </p>
      </div>
    </div>
  );
};
