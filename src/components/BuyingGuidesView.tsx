import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, ChevronRight, ArrowLeft, CheckCircle2, Lightbulb, Search, ExternalLink, Sparkles, HelpCircle } from 'lucide-react';
import { BuyingGuide, Product } from '../types';
import { BUYING_GUIDES } from '../data/guides';
import { GUIDE_POSTS, GUIDE_CATEGORIES, GuidePost } from '../data/guideIndex';
import { PRODUCTS } from '../data/products';

interface BuyingGuidesViewProps {
  onOpenDetails: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
  onOpenPolicy?: (tab: 'about' | 'privacy' | 'terms' | 'contact' | 'affiliate') => void;
}

export const BuyingGuidesView: React.FC<BuyingGuidesViewProps> = ({
  onOpenDetails,
  onToggleCompare,
  compareList,
  onOpenPolicy,
}) => {
  const [activeMode, setActiveMode] = useState<'encyclopedia' | 'reports'>('encyclopedia');
  const [selectedGuide, setSelectedGuide] = useState<BuyingGuide | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter encyclopedia posts
  const filteredEncyclopediaPosts = useMemo(() => {
    return GUIDE_POSTS.filter((post) => {
      if (selectedCategory !== 'all' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesSummary = post.summary.toLowerCase().includes(q);
        const matchesKeyword = post.keyword.toLowerCase().includes(q);
        const matchesCat = post.categoryName.toLowerCase().includes(q);
        return matchesTitle || matchesSummary || matchesKeyword || matchesCat;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4">
      {selectedGuide ? (
        /* Single Guide Article Reader */
        <article className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden animate-in fade-in duration-200">
          
          {/* Top Bar */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <button
              onClick={() => setSelectedGuide(null)}
              className="text-xs font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition cursor-pointer"
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
                <span>가전비교 공식 구매 리포트</span>
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
                <span>가전비교 30초 핵심 요약</span>
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
                <span className="text-xs text-gray-500">공개 사양 대조 완료</span>
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
                          가전비교 {p.nosearchScore}점
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-200 flex items-center gap-1.5">
                        <button
                          onClick={() => onToggleCompare(p)}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                            inCompare
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {inCompare ? '비교중' : '비교담기'}
                        </button>
                        <button
                          onClick={() => onOpenDetails(p)}
                          className="px-2.5 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 cursor-pointer"
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
        /* Guides Hub / Directory */
        <div className="space-y-8">
          
          {/* Header Banner */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>가전비교연구소 데이터 리포트 & 구매 가이드</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight">
              실패 없는 가전 선택과 10년 수명 관리
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              제조사의 광고 문구 대신 사용설명서와 공개된 시험 기준 자료를 근거로 정리했습니다. 
              냄새, 고장 징후, 소음, 전기요금 계산법까지 31편의 알짜 지식을 투명하게 공개합니다.
            </p>
          </div>

          {/* Mode Tabs: Encyclopedia (31) vs Reports (8) */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 p-1.5 rounded-2xl flex items-center gap-1 w-full max-w-md shadow-inner">
              <button
                onClick={() => setActiveMode('encyclopedia')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeMode === 'encyclopedia'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>가전 꿀팁 백과 ({GUIDE_POSTS.length}편)</span>
              </button>
              <button
                onClick={() => setActiveMode('reports')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeMode === 'reports'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>스펙 추천 리포트 ({BUYING_GUIDES.length}편)</span>
              </button>
            </div>
          </div>

          {/* Mode 1: Encyclopedia (31 In-depth Articles) */}
          {activeMode === 'encyclopedia' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Search & Category Filter Bar */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="궁금한 증상이나 가전을 검색하세요 (예: 쉰내, 번인, 물얼룩, 배터리, 전기요금)"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                    >
                      지우기
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    전체보기 ({GUIDE_POSTS.length})
                  </button>
                  {GUIDE_CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                        selectedCategory === c.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredEncyclopediaPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {post.categoryName}
                        </span>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="font-black text-gray-950 text-base leading-snug group-hover:text-blue-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-gray-400">
                        #{post.keyword}
                      </span>
                      <a
                        href={`/guide/${post.slug}/`}
                        className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>원문 읽기</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {filteredEncyclopediaPosts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 space-y-3">
                  <HelpCircle className="w-10 h-10 text-gray-300 mx-auto" />
                  <div className="text-gray-700 font-bold text-sm">검색 결과가 없습니다</div>
                  <p className="text-xs text-gray-400">다른 키워드로 검색하거나 카테고리를 전체로 변경해 보세요.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition cursor-pointer"
                  >
                    필터 초기화
                  </button>
                </div>
              )}

              {/* Direct Hub Link Banner */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="font-black text-sm sm:text-base">
                    가전 꿀팁 백과 웹 표준 독립 허브 (구글 검색엔진 최적화)
                  </div>
                  <p className="text-xs text-slate-400">
                    광고 없는 정적 HTML 문서로 인쇄하거나 즐겨찾기에 등록해 언제든 열어보실 수 있습니다.
                  </p>
                </div>
                <a
                  href="/guide/"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>웹 표준 허브 열기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Mode 2: Curated Buying Reports (8 Guides) */}
          {activeMode === 'reports' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
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
          )}

          {/* AdSense and FTC Transparency Notice */}
          <div className="mt-10 p-5 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="space-y-1">
              <span className="font-bold text-gray-900">가전비교연구소 편집 및 제휴 고지</span>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                본 사이트는 공정거래위원회 심사지침을 철저히 준수합니다. 제휴 링크를 통한 구매 발생 시 플랫폼으로부터 소정의 수수료를 지급받을 수 있으나 추천 및 평가 점수에는 일체 영향을 주지 않습니다.
              </p>
            </div>
            {onOpenPolicy && (
              <button
                onClick={() => onOpenPolicy('about')}
                className="px-3.5 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-xl font-bold text-gray-800 transition whitespace-nowrap cursor-pointer"
              >
                연구소 운영 정책 보기
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
