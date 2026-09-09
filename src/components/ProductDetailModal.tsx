import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Scale, 
  Check, 
  ExternalLink, 
  Star, 
  FlaskConical, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isInCompare: boolean;
  onToggleCompare: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  isInCompare,
  onToggleCompare,
}) => {
  const [activeTab, setActiveTab] = useState<'verdict' | 'lab' | 'specs'>('verdict');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !product) return null;

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-t-3xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[94vh] sm:h-auto sm:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="sm:hidden w-full flex items-center justify-center pt-2 pb-1 bg-white">
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>

        {/* Modal Top Header */}
        <div className="px-5 py-3 sm:px-6 sm:py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
              {product.brand}
            </span>
            <span className="text-xs text-gray-500 font-mono">모델명: {product.modelCode}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition text-xs flex items-center gap-1 min-w-[40px] min-h-[40px] justify-center"
              title="링크 복사"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copied ? '복사됨!' : '공유'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Top Hero: Image + Overview & GAJUN Scorecard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Product Image */}
            <div className="md:col-span-5 bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-64 object-contain rounded-lg"
              />
            </div>

            {/* Right: Score, Title, Price */}
            <div className="md:col-span-7 space-y-4">
              <div>
                {product.pickLabel && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                    {product.pickLabel}
                  </span>
                )}
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* GAJUN Scorecard Box */}
              <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex flex-col items-center justify-center font-black">
                    <span className="text-[10px] uppercase font-bold text-blue-200">SCORE</span>
                    <span className="text-2xl leading-none text-white">{product.nosearchScore}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200">자체 기준 종합 점수</div>
                    <div className="text-xs text-slate-400">공개 사양을 항목별로 환산한 자체 점수 · 측정값 아님</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400">출시 연도</div>
                  <div className="text-sm font-semibold text-slate-200">{product.releaseYear}년</div>
                </div>
              </div>

              {/* 4 Score Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center">
                  <div className="text-xs text-gray-500">성능</div>
                  <div className="text-base font-black text-blue-600">{product.scores.performance}점</div>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center">
                  <div className="text-xs text-gray-500">편의성</div>
                  <div className="text-base font-black text-indigo-600">{product.scores.convenience}점</div>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center">
                  <div className="text-xs text-gray-500">관리/소음</div>
                  <div className="text-base font-black text-teal-600">{product.scores.maintenance}점</div>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100 text-center">
                  <div className="text-xs text-gray-500">가성비</div>
                  <div className="text-base font-black text-amber-600">{product.scores.valueForMoney}점</div>
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline justify-between pt-2 border-t border-gray-100 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-red-500 font-bold">{discountPercent}% 할인</span>
                    <span className="text-sm text-gray-400 line-through">₩{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-2xl font-black text-gray-900 flex items-center gap-2 flex-wrap">
                    ₩{product.price.toLocaleString()}
                    <span className="text-xs font-normal text-gray-500">온라인 최저가</span>
                    {product.mallName && (
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {product.mallName}
                      </span>
                    )}
                    {product.isRocket && (
                      <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                        🚀 로켓배송
                      </span>
                    )}
                    {product.mallSaleBadge && (
                      <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                        {product.mallSaleBadge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleCompare(product)}
                    className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition ${
                      isInCompare
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {isInCompare ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>비교함 담김</span>
                      </>
                    ) : (
                      <>
                        <Scale className="w-4 h-4" />
                        <span>비교함 담기</span>
                      </>
                    )}
                  </button>

                  <a
                    href={product.buyUrl || 'https://link.coupang.com/a/AF5563346?subid=gajun&subid2=modal_hero'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-1.5 transition shadow-sm"
                  >
                    <span>{product.mallName || '쿠팡'} 바로가기</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="overflow-x-auto scrollbar-none flex border-b border-gray-200 text-sm sm:text-base font-bold min-w-max gap-1">
            <button
              onClick={() => setActiveTab('verdict')}
              className={`pb-3 px-3.5 border-b-2 transition ${
                activeTab === 'verdict'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              종합 분석 & 장단점
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`pb-3 px-3.5 border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'lab'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>사양 비교표</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.2 rounded-full font-bold">
                {product.labTests.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 px-3.5 border-b-2 transition ${
                activeTab === 'specs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              전체 스펙 제원
            </button>
          </div>

          {/* Tab Content 1: Verdict & Pros/Cons */}
          {activeTab === 'verdict' && (
            <div className="space-y-6">
              {/* 가전비교 한줄평 */}
              <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span>가전비교연구소 한줄 최종 판정</span>
                </div>
                <p className="text-gray-800 text-base leading-relaxed font-medium">
                  "{product.verdict}"
                </p>
              </div>

              {/* 장점 vs 단점 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pros */}
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>이런 점이 특히 뛰어납니다 (장점)</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {product.pros.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-rose-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>구매 전 꼭 알아야 할 아쉬운 점 (단점)</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {product.cons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Specs Pills */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">핵심 스펙 하이라이트</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="text-xs text-gray-500 font-medium">{spec.label}</div>
                      <div className="text-sm font-bold text-gray-900 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Lab Test Data */}
          {activeTab === 'lab' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
                <span className="font-bold mr-1">🔬 데이터 출처:</span>
                제조사가 공개한 사양과 공인 시험 기준 자료를 같은 항목으로 맞춰 정리한 것입니다. 자체적으로 측정한 값이 아닙니다.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.labTests.map((test, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500">{test.title}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        test.rating === '최상' 
                          ? 'bg-blue-100 text-blue-700' 
                          : test.rating === '우수'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {test.rating}
                      </span>
                    </div>
                    <div className="text-xl font-black text-gray-900 mb-1">{test.value}</div>
                    {test.detail && (
                      <p className="text-xs text-gray-600">{test.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 3: Full Detailed Specs */}
          {activeTab === 'specs' && (
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody>
                  {Object.entries(product.detailedSpecs).map(([key, val], idx) => (
                    <tr 
                      key={key} 
                      className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                    >
                      <th className="py-3 px-4 font-semibold text-gray-600 w-1/3 bg-gray-50/80 border-r border-gray-100">
                        {key}
                      </th>
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab Content 4: Verified Reviews */}
        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col gap-2.5 sticky bottom-0 z-20 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => onToggleCompare(product)}
              className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition min-h-[48px] ${
                isInCompare 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isInCompare ? '비교함에서 제거' : '비교함에 담기'}</span>
            </button>

            <a
              href={product.buyUrl || 'https://link.coupang.com/a/AF5563346?subid=gajun&subid2=modal_bottom'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white flex items-center justify-center gap-2 transition text-center shadow-md shadow-blue-500/20 min-h-[48px]"
            >
              <span>{product.mallName || '쿠팡'} 바로가기</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] text-gray-500 text-center">
            ※ 이 포스팅은 쿠팡 파트너스 및 제휴 마케팅 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
