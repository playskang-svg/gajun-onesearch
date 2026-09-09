import React, { useState } from 'react';
import { 
  Search, 
  Scale, 
  Compass, 
  BookOpen, 
  Sparkles, 
  Menu, 
  X, 
  SlidersHorizontal,
  Layers,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/products';

export type NavTabType = 'explore' | 'compare' | 'finder' | 'guides' | 'ai' | 'sales';

interface NavbarProps {
  activeTab: NavTabType;
  setActiveTab: (tab: NavTabType) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  compareCount: number;
  openCompareStudio: () => void;
  onToggleMobileFilter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  compareCount,
  openCompareStudio,
  onToggleMobileFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (catId: CategoryId) => {
    setSelectedCategory(catId);
    if (catId === 'mall_sales') {
      setActiveTab('sales');
    } else if (activeTab === 'sales' || activeTab !== 'explore') {
      setActiveTab('explore');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top micro banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[10px] font-semibold">LAB UPDATE</span>
            <span className="truncate">2025 최신 가전 실측 데이터 & 1:1 비교 스펙 전면 업데이트 완료</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px]">
            <span>실측 연구소 기준</span>
            <span>•</span>
            <span>광고 없는 객관적 분석</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <button 
              id="logo-btn"
              onClick={() => {
                setActiveTab('explore');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="flex items-center gap-2.5 text-left focus:outline-hidden group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 group-hover:from-blue-700 group-hover:to-indigo-700 transition">
                가
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-gray-900">가전비교연구소</span>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                    GAJUN.KR
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 hidden sm:block font-medium">한번에 한눈에 비교!</p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <button
                id="nav-tab-explore"
                onClick={() => setActiveTab('explore')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  activeTab === 'explore'
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                가전 탐색
              </button>

              <button
                id="nav-tab-compare"
                onClick={() => setActiveTab('compare')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'compare'
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>스펙 비교함</span>
                {compareCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {compareCount}
                  </span>
                )}
              </button>

              <button
                id="nav-tab-finder"
                onClick={() => setActiveTab('finder')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'finder'
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>맞춤 가전 찾기</span>
              </button>

              <button
                id="nav-tab-guides"
                onClick={() => setActiveTab('guides')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'guides'
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>구매 가이드</span>
              </button>

              <button
                id="nav-tab-sales"
                onClick={() => {
                  setSelectedCategory('mall_sales');
                  setActiveTab('sales');
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'sales'
                    ? 'text-rose-700 bg-rose-50 border border-rose-200 shadow-2xs'
                    : 'text-rose-600 hover:text-rose-700 hover:bg-rose-50/70'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-rose-600" />
                <span>백화점·몰 세일</span>
                <span className="bg-rose-100 text-rose-700 text-[10px] px-1.5 py-0.2 rounded-full font-bold">HOT</span>
              </button>

              <button
                id="nav-tab-ai"
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'text-purple-700 bg-purple-50 border border-purple-200'
                    : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50/60'
                }`}
              >
                <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                <span>AI 가전 도우미</span>
              </button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                id="global-search-input"
                type="text"
                placeholder="모델명, 브랜드(로보락, 다이슨, LG, 삼성 등), 기능 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm bg-gray-100/80 border border-transparent rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons & Mobile Menu button */}
          <div className="flex items-center gap-2">
            {/* Quick compare trigger button */}
            <button
              id="compare-tray-btn"
              onClick={openCompareStudio}
              className="relative flex items-center gap-2 px-3 py-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition min-h-[44px]"
              title="비교함 열기"
            >
              <Scale className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">비교함</span>
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                compareCount > 0 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {compareCount}
              </span>
            </button>

            {onToggleMobileFilter && (
              <button
                onClick={onToggleMobileFilter}
                className="p-2.5 text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100 md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200"
                title="스펙 필터 열기"
              >
                <SlidersHorizontal className="w-5 h-5 text-blue-600" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-100 lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center border border-gray-200"
              title="전체 메뉴 열기"
              aria-label="전체 메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="모델명, 브랜드, 스펙 키워드 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-base bg-gray-100 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-hidden min-h-[44px]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="bg-gray-50 border-t border-gray-100 overflow-x-auto scrollbar-none py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-pill-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-full transition flex items-center gap-1.5 min-h-[38px] ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-gray-100 text-gray-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modern Mobile Slide-Over Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-[88%] bg-white shadow-2xl flex flex-col z-10 overflow-hidden">
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-slate-950 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-black text-sm text-white">
                  가
                </div>
                <div>
                  <div className="font-black text-base text-white">가전비교연구소</div>
                  <div className="text-[10px] text-blue-300">GAJUN.KR 메뉴</div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition min-w-[44px] min-h-[44px] flex items-center justify-center"
                title="메뉴 닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Quick Service Navigation */}
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
                  핵심 서비스
                </div>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      setActiveTab('explore');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'explore' ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">가전 탐색 & 랭킹</div>
                        <div className="text-[11px] font-normal text-gray-400">70여 개 실측 가전 비교</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('compare');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'compare' ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-sm font-bold">
                          <span>스펙 1:1 비교함</span>
                          {compareCount > 0 && (
                            <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                              {compareCount}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-normal text-gray-400">무제한 스펙 맞대결</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedCategory('mall_sales');
                      setActiveTab('sales');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'sales' ? 'bg-rose-50 text-rose-700' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-sm font-bold">
                          <span>백화점·몰 세일전</span>
                          <span className="bg-rose-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">HOT</span>
                        </div>
                        <div className="text-[11px] font-normal text-gray-400">롯데·현대·신세계 정기세일</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('finder');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'finder' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">맞춤 가전 찾기 진단</div>
                        <div className="text-[11px] font-normal text-gray-400">평수·가구원수 1분 추천</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('guides');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'guides' ? 'bg-amber-50 text-amber-700' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">구매 가이드 & 랩 리포트</div>
                        <div className="text-[11px] font-normal text-gray-400">실패 없는 가전 구매 공식</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('ai');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition min-h-[48px] ${
                      activeTab === 'ai' ? 'bg-purple-50 text-purple-700' : 'text-purple-700 hover:bg-purple-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">AI 맞춤 가전 컨설턴트</div>
                        <div className="text-[11px] font-normal text-purple-400">실시간 조건 분석 & 추천</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>
                </div>
              </div>

              {/* 15 Categories 2-Column Grid */}
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
                  15대 가전 카테고리 바로가기
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleCategoryClick(cat.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`p-2.5 rounded-xl text-left transition flex items-center justify-between border min-h-[42px] ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 font-bold'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-100 font-medium'
                        }`}
                      >
                        <span className="text-xs truncate">{cat.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full shrink-0 ${
                          isSelected ? 'bg-blue-700 text-blue-100' : 'bg-white text-gray-500'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 text-center">
              가전비교연구소 • 독립 연구소 실측 데이터 기반
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
