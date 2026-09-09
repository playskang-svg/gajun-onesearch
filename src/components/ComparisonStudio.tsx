import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Check, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  Share2,
  Download,
  BarChart3,
  Sparkles,
  Zap
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ComparisonShareModal } from './ComparisonShareModal';
import { ComparisonVisualizer } from './ComparisonVisualizer';

interface ComparisonStudioProps {
  compareList: Product[];
  onRemove: (productId: string) => void;
  onAdd: (product: Product) => void;
  onClose: () => void;
  onOpenDetails: (product: Product) => void;
}

export const ComparisonStudio: React.FC<ComparisonStudioProps> = ({
  compareList,
  onRemove,
  onAdd,
  onClose,
  onOpenDetails,
}) => {
  const [diffOnly, setDiffOnly] = useState(false);
  const [highlightWinner, setHighlightWinner] = useState(true);
  const [highlightItems, setHighlightItems] = useState(true); // 비교 항목 강조
  const [showShareModal, setShowShareModal] = useState(false); // 비교 결과 공유
  const [showVisualizer, setShowVisualizer] = useState(false); // 비교 데이터 시각화
  const [showAddModal, setShowAddModal] = useState(false);

  // Available products not yet in compare list
  const availableToAdd = PRODUCTS.filter(
    (p) => !compareList.some((item) => item.id === p.id)
  );

  // Collect all unique key specs from the products
  const allSpecLabels: string[] = Array.from(
    new Set<string>(
      compareList.flatMap((p) => p.keySpecs.map((s) => s.label))
    )
  );

  // Collect all unique detailed spec keys
  const allDetailKeys: string[] = Array.from(
    new Set<string>(
      compareList.flatMap((p) => Object.keys(p.detailedSpecs))
    )
  );

  // Check if a row differs across products
  const hasSpecDifference = (label: string) => {
    const values = compareList.map(
      (p) => p.keySpecs.find((s) => s.label === label)?.value || '-'
    );
    return new Set(values).size > 1;
  };

  const hasDetailDifference = (key: string) => {
    const values = compareList.map((p) => p.detailedSpecs[key] || '-');
    return new Set(values).size > 1;
  };

  const getScoreWinnerId = (scoreKey: keyof Product['scores'] | 'nosearchScore') => {
    if (compareList.length < 2) return null;
    let highest = -1;
    let winnerId: string | null = null;
    let hasTie = false;

    compareList.forEach((p) => {
      const val = scoreKey === 'nosearchScore' ? p.nosearchScore : p.scores[scoreKey];
      if (val > highest) {
        highest = val;
        winnerId = p.id;
        hasTie = false;
      } else if (val === highest) {
        hasTie = true;
      }
    });
    return hasTie ? null : winnerId;
  };

  const getLowestPriceId = () => {
    if (compareList.length < 2) return null;
    let lowest = Infinity;
    let winnerId: string | null = null;
    compareList.forEach((p) => {
      if (p.price < lowest) {
        lowest = p.price;
        winnerId = p.id;
      }
    });
    return winnerId;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex flex-col animate-in fade-in duration-200">
      
      {/* Studio Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3.5 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              VS
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-gray-900">
                가전비교 1:1 스펙 맞대결 비교함
              </h2>
              <p className="text-xs text-gray-500 hidden sm:block">
                한번에 한눈에 비교! 선택한 가전의 점수, 실측 성능, 장단점 차이를 한눈에 대조 분석합니다.
              </p>
            </div>
          </div>

          {/* Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition"
              title="닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Dark Action Pill Bar (Matching the user image exactly) */}
      <div className="bg-[#1f1f1f] border-b border-neutral-800 px-4 py-3 sticky top-[65px] z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* The 3 Pill Buttons from User Uploaded Image */}
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto py-0.5">
            {/* 1. 비교 항목 강조 */}
            <button
              id="pill-btn-highlight-items"
              onClick={() => {
                const nextVal = !highlightItems;
                setHighlightItems(nextVal);
                setHighlightWinner(nextVal);
              }}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                highlightItems
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/50'
                  : 'bg-[#333333] text-neutral-200 hover:bg-[#404040] hover:text-white border border-white/10'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${highlightItems ? 'text-white' : 'text-neutral-400'}`} />
              <span>비교 항목 강조</span>
              {highlightItems && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs animate-pulse" />
              )}
            </button>

            {/* 2. 비교 결과 공유 */}
            <button
              id="pill-btn-share-result"
              onClick={() => setShowShareModal(true)}
              className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium bg-[#333333] text-neutral-200 hover:bg-[#404040] hover:text-white border border-white/10 transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-98"
            >
              <Share2 className="w-4 h-4 text-neutral-400" />
              <span>비교 결과 공유</span>
            </button>

            {/* 3. 비교 데이터 시각화 */}
            <button
              id="pill-btn-visualize-data"
              onClick={() => setShowVisualizer(!showVisualizer)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                showVisualizer
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/50'
                  : 'bg-[#333333] text-neutral-200 hover:bg-[#404040] hover:text-white border border-white/10'
              }`}
            >
              <BarChart3 className={`w-4 h-4 ${showVisualizer ? 'text-white' : 'text-neutral-400'}`} />
              <span>비교 데이터 시각화</span>
              {showVisualizer && (
                <span className="text-[10px] bg-blue-700 text-blue-100 px-2 py-0.5 rounded-full font-bold">
                  차트 ON
                </span>
              )}
            </button>
          </div>

          {/* Quick Sub-controls (차이점만 보기 필터) */}
          <div className="flex items-center gap-2 text-neutral-400 text-xs">
            <label className="flex items-center gap-2 cursor-pointer hover:text-neutral-200 select-none bg-[#2c2c2c] px-3.5 py-1.5 rounded-full border border-neutral-700/80 transition">
              <input
                type="checkbox"
                checked={diffOnly}
                onChange={(e) => setDiffOnly(e.target.checked)}
                className="w-3.5 h-3.5 text-blue-600 rounded border-neutral-600 bg-neutral-800 focus:ring-0"
              />
              <span className="font-medium">차이점만 모아보기</span>
            </label>
          </div>

        </div>
      </div>

      {/* Main Table Body */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6">
        
        {/* Visualizer Panel (Toggleable by '비교 데이터 시각화') */}
        {showVisualizer && compareList.length > 0 && (
          <ComparisonVisualizer 
            compareList={compareList} 
            onClose={() => setShowVisualizer(false)} 
          />
        )}
        
        {compareList.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto my-12 border border-gray-200 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 font-black text-2xl">
              VS
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">비교함이 비어 있습니다</h3>
            <p className="text-xs text-gray-500 mb-6">
              가전 탐색 목록에서 '비교담기'를 눌러 비교할 모델들을 추가해 보세요.
            </p>
            <button
              onClick={() => {
                onClose();
              }}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition"
            >
              가전제품 둘러보기
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                
                {/* 1. Header: Product Top Cards */}
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50/70">
                    <th className="p-4 w-40 sm:w-48 text-left text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                      비교 대상 모델 ({compareList.length}개)
                    </th>
                    {compareList.map((product) => (
                      <th
                        key={product.id}
                        className="p-4 min-w-[220px] sm:min-w-[260px] max-w-[300px] align-top text-left font-normal border-r border-gray-100 last:border-r-0"
                      >
                        <div className="relative flex flex-col h-full justify-between">
                          {/* Remove button */}
                          <button
                            onClick={() => onRemove(product.id)}
                            className="absolute -top-1 -right-1 p-1 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-full transition"
                            title="비교에서 제거"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div>
                            {/* Pick Badge */}
                            {product.pickLabel && (
                              <span className="inline-block text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded mb-2">
                                {product.pickLabel}
                              </span>
                            )}

                            {/* Image */}
                            <div 
                              className="h-32 bg-white rounded-xl p-2 border border-gray-200 mb-3 flex items-center justify-center cursor-pointer overflow-hidden group"
                              onClick={() => onOpenDetails(product)}
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                referrerPolicy="no-referrer"
                                className="h-full object-contain group-hover:scale-105 transition"
                              />
                            </div>

                            <div className="text-xs text-gray-400 font-medium mb-0.5">
                              {product.brand}
                            </div>
                            <div 
                              className="font-bold text-sm text-gray-900 leading-snug cursor-pointer hover:text-blue-600 transition mb-2"
                              onClick={() => onOpenDetails(product)}
                            >
                              {product.name}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="pt-2 border-t border-gray-100 flex items-baseline justify-between">
                            <span className="text-xs text-gray-400">최저가</span>
                            <div className="text-right">
                              <span className="text-base font-black text-gray-950">
                                ₩{product.price.toLocaleString()}
                              </span>
                              {highlightItems && getLowestPriceId() === product.id && (
                                <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-0.5 inline-block">
                                  💰 최저가 우위
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </th>
                    ))}

                    {/* Add product slot if < 4 */}
                    {compareList.length < 4 && (
                      <th className="p-4 min-w-[180px] align-middle text-center bg-gray-50/40">
                        <button
                          onClick={() => setShowAddModal(true)}
                          className="w-full h-48 border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50/50 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-blue-600 transition p-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center">
                            <Plus className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold">비교 제품 추가</span>
                          <span className="text-[11px] text-gray-400">최대 4개까지</span>
                        </button>
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {/* SECTION 1: 가전비교 평가 점수 */}
                  <tr className="bg-slate-900 text-white">
                    <td colSpan={compareList.length + 2} className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider">
                      📊 가전비교 종합 점수 및 4대 지표 평가
                    </td>
                  </tr>

                  {/* 가전비교 종합 점수 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <th className="p-3.5 text-xs font-bold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      종합 점수
                    </th>
                    {compareList.map((p) => {
                      const isWinner = highlightWinner && getScoreWinnerId('nosearchScore') === p.id;
                      return (
                        <td
                          key={p.id}
                          className={`p-3.5 border-r border-gray-100 ${
                            isWinner ? 'bg-blue-50/80 font-black' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-gray-900">
                              {p.nosearchScore}점
                            </span>
                            {isWinner && (
                              <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Award className="w-3 h-3" /> 우위
                              </span>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* 성능 점수 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      성능 지수
                    </th>
                    {compareList.map((p) => {
                      const isWinner = highlightWinner && getScoreWinnerId('performance') === p.id;
                      return (
                        <td key={p.id} className={`p-3 border-r border-gray-100 ${isWinner ? 'bg-blue-50/60 font-bold' : ''}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900">{p.scores.performance}점</span>
                            {isWinner && <Check className="w-4 h-4 text-blue-600" />}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* 편의성 점수 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      편의성 지수
                    </th>
                    {compareList.map((p) => {
                      const isWinner = highlightWinner && getScoreWinnerId('convenience') === p.id;
                      return (
                        <td key={p.id} className={`p-3 border-r border-gray-100 ${isWinner ? 'bg-indigo-50/60 font-bold' : ''}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900">{p.scores.convenience}점</span>
                            {isWinner && <Check className="w-4 h-4 text-indigo-600" />}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* 관리/소음 점수 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      유지관리 & 소음
                    </th>
                    {compareList.map((p) => {
                      const isWinner = highlightWinner && getScoreWinnerId('maintenance') === p.id;
                      return (
                        <td key={p.id} className={`p-3 border-r border-gray-100 ${isWinner ? 'bg-teal-50/60 font-bold' : ''}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900">{p.scores.maintenance}점</span>
                            {isWinner && <Check className="w-4 h-4 text-teal-600" />}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* 가성비 점수 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      가격 대비 가치 (가성비)
                    </th>
                    {compareList.map((p) => {
                      const isWinner = highlightWinner && getScoreWinnerId('valueForMoney') === p.id;
                      return (
                        <td key={p.id} className={`p-3 border-r border-gray-100 ${isWinner ? 'bg-amber-50/60 font-bold' : ''}`}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900">{p.scores.valueForMoney}점</span>
                            {isWinner && <Check className="w-4 h-4 text-amber-600" />}
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* SECTION 2: 핵심 스펙 대조 */}
                  <tr className="bg-slate-100 text-slate-800">
                    <td colSpan={compareList.length + 2} className="py-2 px-4 font-bold text-xs uppercase">
                      ⚡ 핵심 기능 및 제원 비교
                    </td>
                  </tr>

                  {allSpecLabels.map((label) => {
                    const differs = hasSpecDifference(label);
                    if (diffOnly && !differs) return null;

                    const isHighlightedDiff = differs && highlightItems;

                    return (
                      <tr 
                        key={label} 
                        className={`border-b border-gray-100 transition-colors ${
                          isHighlightedDiff 
                            ? 'bg-blue-50/40 hover:bg-blue-50/60' 
                            : 'hover:bg-gray-50/50'
                        }`}
                      >
                        <th className={`p-3 text-xs font-semibold sticky left-0 z-10 border-r border-gray-200 ${
                          isHighlightedDiff ? 'bg-blue-50/90 text-blue-950 font-bold' : 'bg-white text-gray-600'
                        }`}>
                          <div className="flex items-center gap-1.5">
                            <span>{label}</span>
                            {differs && (
                              <span 
                                className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                                  highlightItems 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-gray-200 text-gray-600'
                                }`} 
                                title="차이점 있음"
                              >
                                차이
                              </span>
                            )}
                          </div>
                        </th>
                        {compareList.map((p) => {
                          const specObj = p.keySpecs.find((s) => s.label === label);
                          return (
                            <td key={p.id} className="p-3 text-xs sm:text-sm font-medium text-gray-900 border-r border-gray-100">
                              {specObj ? (
                                <span className={specObj.highlight || isHighlightedDiff ? 'font-bold text-blue-900' : ''}>
                                  {specObj.value}
                                </span>
                              ) : (
                                <span className="text-gray-300">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}

                  {/* SECTION 3: 실측 랩 테스트 결과 */}
                  <tr className="bg-slate-100 text-slate-800">
                    <td colSpan={compareList.length + 2} className="py-2 px-4 font-bold text-xs uppercase">
                      🔬 가전비교 랩 실측 테스트 대조
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10 border-r border-gray-200">
                      실측 데이터 종합
                    </th>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-3 border-r border-gray-100 align-top">
                        <div className="space-y-2">
                          {p.labTests.slice(0, 3).map((test, idx) => (
                            <div key={idx} className="bg-gray-50 p-2 rounded-lg text-xs">
                              <div className="flex items-center justify-between font-semibold text-gray-600">
                                <span>{test.title}</span>
                                <span className="text-blue-600 font-bold">{test.rating}</span>
                              </div>
                              <div className="font-bold text-gray-900 mt-0.5">{test.value}</div>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* SECTION 4: 장단점 비교 */}
                  <tr className="bg-slate-100 text-slate-800">
                    <td colSpan={compareList.length + 2} className="py-2 px-4 font-bold text-xs uppercase">
                      ⚖️ 장점 및 단점 한눈에 보기
                    </td>
                  </tr>

                  {/* 장점 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-emerald-800 bg-emerald-50/30 sticky left-0 z-10 border-r border-gray-200">
                      주요 장점
                    </th>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-3 border-r border-gray-100 align-top">
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {p.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* 단점 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <th className="p-3 text-xs font-semibold text-rose-800 bg-rose-50/30 sticky left-0 z-10 border-r border-gray-200">
                      구매 시 주의점 (단점)
                    </th>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-3 border-r border-gray-100 align-top">
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {p.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* 가전비교 종합 판정 코멘트 */}
                  <tr className="bg-blue-50/40 border-b border-gray-200">
                    <th className="p-3 text-xs font-bold text-blue-900 sticky left-0 bg-blue-50/80 z-10 border-r border-gray-200">
                      가전비교 추천 총평
                    </th>
                    {compareList.map((p) => (
                      <td key={p.id} className="p-3 text-xs text-gray-800 font-medium italic border-r border-gray-100">
                        "{p.verdict}"
                      </td>
                    ))}
                  </tr>

                  {/* 하단 상세 보기 액션 */}
                  <tr className="bg-gray-50">
                    <th className="p-3 sticky left-0 bg-gray-50 z-10 border-r border-gray-200" />
                    {compareList.map((p) => (
                      <td key={p.id} className="p-3 border-r border-gray-100">
                        <button
                          onClick={() => onOpenDetails(p)}
                          className="w-full py-2 bg-white border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 rounded-lg text-xs font-bold text-gray-800 transition"
                        >
                          전체 스펙 리포트 보기
                        </button>
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        )}

      </main>

      {/* Add Product Modal (when user clicks + slot) */}
      {showAddModal && (
        <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-sm">비교할 가전 추가</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-4 space-y-2 flex-1">
              {availableToAdd.length === 0 ? (
                <p className="text-xs text-gray-500 text-center py-6">더 이상 추가할 수 있는 제품이 없습니다.</p>
              ) : (
                availableToAdd.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onAdd(p);
                      setShowAddModal(false);
                    }}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-contain rounded bg-white"
                      />
                      <div>
                        <div className="text-xs text-gray-400">{p.brand}</div>
                        <div className="text-xs font-bold text-gray-900">{p.name}</div>
                        <div className="text-[11px] text-blue-600 font-semibold">가전비교 {p.nosearchScore}점</div>
                      </div>
                    </div>
                    <button className="text-xs bg-blue-600 text-white font-bold px-3 py-1.5 rounded-lg">
                      추가
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Share Comparison Result Modal */}
      {showShareModal && (
        <ComparisonShareModal
          compareList={compareList}
          onClose={() => setShowShareModal(false)}
        />
      )}

    </div>
  );
};
