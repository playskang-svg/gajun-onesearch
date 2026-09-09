import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Scale, 
  Home, 
  PawPrint, 
  Volume2, 
  Coins, 
  Zap, 
  ThumbsUp, 
  Shield 
} from 'lucide-react';
import { CategoryId, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';

interface ApplianceFinderProps {
  onOpenDetails: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
}

export const ApplianceFinder: React.FC<ApplianceFinderProps> = ({
  onOpenDetails,
  onToggleCompare,
  compareList,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('robot_vacuum');
  const [homeSize, setHomeSize] = useState<string>('30'); // '10', '20', '30', '40'
  const [hasPetsOrKids, setHasPetsOrKids] = useState<string>('pet'); // 'none', 'pet', 'kids', 'both'
  const [priority, setPriority] = useState<string>('balance'); // 'value', 'maintenance', 'performance', 'noise'
  const [budget, setBudget] = useState<string>('mid'); // 'low', 'mid', 'high', 'no_limit'

  // Run calculation on products
  const calculateRecommendations = () => {
    const categoryProducts = PRODUCTS.filter((p) => p.categoryId === selectedCategory);

    const scored = categoryProducts.map((p) => {
      let matchScore = 70; // baseline

      // Priority match
      if (priority === 'value') {
        matchScore += (p.scores.valueForMoney - 80) * 1.5;
        if (p.pickType === 'value') matchScore += 10;
      } else if (priority === 'performance') {
        matchScore += (p.scores.performance - 80) * 1.5;
        if (p.pickType === 'performance' || p.pickType === 'top') matchScore += 10;
      } else if (priority === 'maintenance') {
        matchScore += (p.scores.maintenance - 80) * 1.5;
        if (p.scores.convenience > 92) matchScore += 8;
      } else if (priority === 'noise') {
        matchScore += (p.scores.maintenance - 80) * 1.2;
        // Check noise spec
        const noiseSpec = p.keySpecs.find((s) => s.label.includes('소음'));
        if (noiseSpec && (noiseSpec.value.includes('19') || noiseSpec.value.includes('20') || noiseSpec.value.includes('38') || noiseSpec.value.includes('58'))) {
          matchScore += 10;
        }
      }

      // Budget check
      if (budget === 'low') {
        if (p.price <= 500000) matchScore += 15;
        else if (p.price > 1000000) matchScore -= 25;
      } else if (budget === 'high' || budget === 'no_limit') {
        if (p.scores.performance >= 95) matchScore += 12;
      }

      // Home size check
      if (homeSize === '10' && p.price < 500000) matchScore += 8;
      if (homeSize === '40' && (p.scores.performance > 95 || p.name.includes('14') || p.name.includes('20'))) {
        matchScore += 10;
      }

      // Pets or Kids
      if (hasPetsOrKids === 'pet' || hasPetsOrKids === 'both') {
        if (p.pros.some((pr) => pr.includes('머리카락') || pr.includes('살균') || pr.includes('스팀') || pr.includes('냄새'))) {
          matchScore += 10;
        }
      }

      const finalMatch = Math.min(99, Math.max(75, Math.round(matchScore)));

      let matchReason = '';
      if (priority === 'value') {
        matchReason = `가격 대비 성능 지수(${p.scores.valueForMoney}점)가 가장 뛰어나며 예산 절감 효과가 탁월합니다.`;
      } else if (priority === 'maintenance') {
        matchReason = `올인원 자동화 기능과 손쉬운 관리 구조로 실사용 편의성(${p.scores.convenience}점)이 극대화된 모델입니다.`;
      } else if (priority === 'performance') {
        matchReason = `동급 최강의 흡입력/세척 성능(${p.scores.performance}점)을 보유해 잔여 오염 없이 완벽한 결과를 냅니다.`;
      } else {
        matchReason = `조용한 실측 소음과 안정적인 기본기로 일상 만족도가 매우 높은 추천작입니다.`;
      }

      return {
        product: p,
        matchScore: finalMatch,
        matchReason,
      };
    });

    return scored.sort((a, b) => b.matchScore - a.matchScore);
  };

  const results = calculateRecommendations();

  const resetQuiz = () => {
    setStep(1);
    setHomeSize('30');
    setHasPetsOrKids('pet');
    setPriority('balance');
    setBudget('mid');
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4">
      
      {/* Header Banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-3">
          <Compass className="w-4 h-4 text-emerald-600" />
          <span>원써치 알고리즘 맞춤 추천 진단</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
          3분 만에 찾는 내 집 맞춤 가전
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          가구 형태, 평수, 반려동물 유무, 예산에 맞춰 원써치 연구소 실측 데이터를 기반으로 한번에 한눈에 맞춤 모델을 진단해 드립니다.
        </p>
      </div>

      {step <= 4 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-6 sm:p-8">
          
          {/* Progress step dots */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400">질문 {step} / 4</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step === i
                      ? 'w-8 bg-blue-600'
                      : i < step
                      ? 'w-2 bg-blue-400'
                      : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: 카테고리 선택 */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1">
                  어떤 가전제품을 찾고 계신가요?
                </h3>
                <p className="text-xs text-gray-500">진단받고 싶은 가전 카테고리를 하나 선택해주세요.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-4 rounded-xl border text-left transition flex flex-col justify-between h-28 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">{cat.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                      </div>
                      <span className="text-[11px] text-gray-500 line-clamp-2">
                        {cat.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: 주거 평수 및 가족 구성원 */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1">
                  거주 평수와 구성원은 어떻게 되시나요?
                </h3>
                <p className="text-xs text-gray-500">
                  평수와 거주 환경에 따라 필요한 용량과 센서 스펙이 달라집니다.
                </p>
              </div>

              {/* 평수 선택 */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-2">주거 공간 크기</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { val: '10', label: '원룸 / 10평대', desc: '1인 가구 소형' },
                    { val: '20', label: '20평대', desc: '신혼부부 / 2인 가구' },
                    { val: '30', label: '30평대', desc: '국민 평수 (3~4인)' },
                    { val: '40', label: '40평형 이상', desc: '대형 평수' },
                  ].map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setHomeSize(item.val)}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        homeSize === item.val
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-gray-900">{item.label}</div>
                      <div className="text-[11px] text-gray-500">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 반려동물/아이 유무 */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-2">특별 고려 사항</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { val: 'pet', label: '반려동물 있음', icon: PawPrint },
                    { val: 'kids', label: '영유아 자녀 있음', icon: Shield },
                    { val: 'both', label: '반려동물 + 아이 둘 다', icon: Home },
                    { val: 'none', label: '해당 없음 (성인 가구)', icon: ThumbsUp },
                  ].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.val}
                        onClick={() => setHasPetsOrKids(item.val)}
                        className={`p-3 rounded-xl border text-left transition flex items-center gap-2.5 ${
                          hasPetsOrKids === item.val
                            ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <IconComp className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-xs font-bold text-gray-900">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: 최우선 고려 가치 */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1">
                  가장 중요하게 생각하는 기준은 무엇인가요?
                </h3>
                <p className="text-xs text-gray-500">
                  내가 포기할 수 없는 단 하나의 핵심 가치를 골라주세요.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    val: 'value',
                    title: '가격 대비 최고의 가성비',
                    desc: '비싼 부가기능 빼고, 정직한 기본 성능과 합리적인 가격이 제일 중요해요.',
                    icon: Coins,
                  },
                  {
                    val: 'maintenance',
                    title: '편리한 유지관리 & 자동화',
                    desc: '손댈 필요 없이 알아서 세척/건조/비움 해주는 게 제일 편해요.',
                    icon: Sparkles,
                  },
                  {
                    val: 'performance',
                    title: '끝판왕 흡입력 / 세척력',
                    desc: '가격이 조금 나가더라도 현존 최고의 모터와 성능을 원해요.',
                    icon: Zap,
                  },
                  {
                    val: 'noise',
                    title: '초저소음 & 야간 사용',
                    desc: '소음에 민감하거나 층간소음/밤 시간대 가동이 잦아요.',
                    icon: Volume2,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.val}
                      onClick={() => setPriority(item.val)}
                      className={`p-4 rounded-xl border text-left transition flex items-start gap-3.5 ${
                        priority === item.val
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: 예산 범위 */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1">
                  생각해두신 예산 범위는 어느 정도인가요?
                </h3>
                <p className="text-xs text-gray-500">
                  지정한 예산대 안에서 최상의 스펙을 갖춘 모델을 추려냅니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { val: 'low', title: '실속형 (30~50만원 이하)', desc: '가성비 위주 합리적 선택' },
                  { val: 'mid', title: '중급형 (50~100만원 전후)', desc: '충실한 기본기 + 편의기능 탑재' },
                  { val: 'high', title: '하이엔드 (100~150만원대)', desc: '최상위 센서와 풀 올인원 스테이션' },
                  { val: 'no_limit', title: '예산 무관 (끝판왕 플래그십)', desc: '가장 좋은 프리미엄 1위 모델' },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setBudget(item.val)}
                    className={`p-4 rounded-xl border text-left transition ${
                      budget === item.val
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-sm font-bold text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step Action Buttons */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition"
              >
                이전 질문
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={() => setStep((s) => s + 1)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs transition"
            >
              <span>{step === 4 ? '맞춤 추천 결과 보기' : '다음 질문'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* RESULTS VIEW */
        <div className="space-y-6 animate-in fade-in duration-300">
          
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>진단 완료</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">
                고객님의 라이프스타일 매칭 TOP 3
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {homeSize}평형 거주 • {priority === 'value' ? '가성비 우선' : priority === 'performance' ? '성능 우선' : '편의성 우선'} 조건을 바탕으로 선별했습니다.
              </p>
            </div>

            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>조건 바꿔 다시 진단</span>
            </button>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results.slice(0, 3).map((item, index) => {
              const p = item.product;
              const inCompare = compareList.some((c) => c.id === p.id);

              return (
                <div
                  key={p.id}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 transition shadow-sm hover:shadow-md flex flex-col md:flex-row gap-6 items-center ${
                    index === 0 ? 'border-blue-500 ring-2 ring-blue-500/10' : 'border-gray-200'
                  }`}
                >
                  {/* Left rank badge & photo */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center absolute -top-2 -left-2 shadow-md z-10">
                      {index + 1}
                    </div>
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-32 h-32 object-contain rounded-xl bg-gray-50 p-2 border border-gray-100"
                    />
                  </div>

                  {/* Center info */}
                  <div className="flex-1 space-y-2 text-left w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{p.brand}</span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        일치율 {item.matchScore}%
                      </span>
                    </div>

                    <h3 
                      onClick={() => onOpenDetails(p)}
                      className="text-base sm:text-lg font-bold text-gray-950 cursor-pointer hover:text-blue-600 transition"
                    >
                      {p.name}
                    </h3>

                    {/* Match reason */}
                    <div className="text-xs text-gray-700 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100">
                      <span className="font-bold text-emerald-800 mr-1">💡 추천 이유:</span>
                      {item.matchReason}
                    </div>

                    {/* Key Specs tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.keySpecs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {spec.label}: <strong className="text-gray-800">{spec.value}</strong>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Price & Actions */}
                  <div className="shrink-0 flex flex-col items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 gap-3">
                    <div className="text-right">
                      <div className="text-xs text-gray-400">온라인 최저가</div>
                      <div className="text-lg font-black text-gray-900">
                        ₩{p.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <button
                        onClick={() => onToggleCompare(p)}
                        className={`px-3 py-2 text-xs font-bold rounded-xl border transition flex items-center justify-center gap-1.5 flex-1 md:flex-initial ${
                          inCompare
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200'
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>{inCompare ? '비교 담김' : '비교담기'}</span>
                      </button>

                      <button
                        onClick={() => onOpenDetails(p)}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition flex items-center justify-center gap-1 flex-1 md:flex-initial"
                      >
                        <span>스펙 분석</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
