import React, { useState } from 'react';
import { BookOpen, Clock, ChevronRight, ArrowLeft, CheckCircle2, Lightbulb, Scale } from 'lucide-react';
import { BuyingGuide, Product } from '../types';
import { BUYING_GUIDES } from '../data/guides';
import { PRODUCTS } from '../data/products';

interface BuyingGuidesViewProps {
  onOpenDetails: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
}

export const BuyingGuidesView: React.FC<BuyingGuidesViewProps> = ({
  onOpenDetails,
  onToggleCompare,
  compareList,
}) => {
  const [selectedGuide, setSelectedGuide] = useState<BuyingGuide | null>(null);

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-10 px-4">
      {selectedGuide ? (
        /* Single Guide Article Reader */
        <article className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden animate-in fade-in duration-200">
          
          {/* Top Bar */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <button
              onClick={() => setSelectedGuide(null)}
              className="text-xs font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>전체 가이드 목록으로 돌아가기</span>
            </button>
            <span className="text-xs text-gray-400">발행일: {selectedGuide.publishedAt}</span>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Title & Subtitle */}
            <header className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                <BookOpen className="w-3.5 h-3.5" />
                <span>원써치 공식 구매 리포트</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
                {selectedGuide.title}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed">
                {selectedGuide.subtitle}
              </p>
            </header>

            {/* Hero Image */}
            <div className="h-64 sm:h-80 w-full overflow-hidden rounded-2xl">
              <img
                src={selectedGuide.thumbnail}
                alt={selectedGuide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span>원써치 30초 핵심 요약</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedGuide.keyPoints.map((point, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-blue-100/60 shadow-2xs">
                    <div className="font-bold text-xs text-gray-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{point.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Sections */}
            <div className="space-y-8 text-gray-800">
              {selectedGuide.contentSections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    {sec.body}
                  </p>
                  {sec.tip && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 font-medium">
                      {sec.tip}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Recommended Products inside Guide */}
            <div className="pt-8 border-t border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-gray-900">
                  가이드 본문 추천 모델
                </h3>
                <span className="text-xs text-gray-500">원써치 랩 실측 검증 완료</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedGuide.recommendedProductIds.map((pid) => {
                  const p = PRODUCTS.find((item) => item.id === pid);
                  if (!p) return null;
                  const inCompare = compareList.some((c) => c.id === p.id);

                  return (
                    <div
                      key={p.id}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="h-28 bg-white rounded-lg p-2 mb-2 flex items-center justify-center">
                          <img
                            src={p.image}
                            alt={p.name}
                            referrerPolicy="no-referrer"
                            className="max-h-full object-contain"
                          />
                        </div>
                        <div className="text-[11px] text-gray-400 font-medium">{p.brand}</div>
                        <h4 
                          onClick={() => onOpenDetails(p)}
                          className="text-xs font-bold text-gray-900 line-clamp-2 cursor-pointer hover:text-blue-600"
                        >
                          {p.name}
                        </h4>
                        <div className="text-xs font-bold text-blue-600 mt-1">
                          원써치 {p.nosearchScore}점
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-200 flex items-center gap-1.5">
                        <button
                          onClick={() => onToggleCompare(p)}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${
                            inCompare
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {inCompare ? '비교중' : '비교담기'}
                        </button>
                        <button
                          onClick={() => onOpenDetails(p)}
                          className="px-2.5 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800"
                        >
                          상세
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </article>
      ) : (
        /* Guides Catalog / Magazine Grid */
        <div className="space-y-8">
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>원써치 가전 분석 리포트 & 구매 가이드</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              가전 구매 전 꼭 읽어야 할 체크리스트
            </h1>
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              마케팅 문구에 현혹되지 마세요. 한번에 한눈에 비교하는 원써치 연구소의 분해 분석과 실측 테스트를 통해 알짜 정보를 투명하게 공개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUYING_GUIDES.map((guide) => (
              <div
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition cursor-pointer flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={guide.thumbnail}
                    alt={guide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{guide.readTime} 소요</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">{guide.publishedAt} 발행</div>
                    <h3 className="font-bold text-gray-950 text-base leading-snug group-hover:text-blue-600 transition">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>가이드 전문 읽기</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};
