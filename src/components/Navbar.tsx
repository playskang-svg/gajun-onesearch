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
  ArrowRight
} from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/products';

interface NavbarProps {
  activeTab: 'explore' | 'compare' | 'finder' | 'guides' | 'ai';
  setActiveTab: (tab: 'explore' | 'compare' | 'finder' | 'guides' | 'ai') => void;
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
    if (activeTab !== 'explore') {
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
              className="relative flex items-center gap-2 px-3 py-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition"
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
                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 md:hidden"
                title="스펙 필터 열기"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 lg:hidden"
              title="메뉴"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="w-full pl-9 pr-8 py-2 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:outline-hidden"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Pills Strip */}
      <div className="bg-gray-50 border-t border-gray-100 overflow-x-auto scrollbar-none py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-pill-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1 rounded-full ${
                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab('explore');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'explore' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>가전 탐색 & 스펙</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>

          <button
            onClick={() => {
              setActiveTab('compare');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'compare' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>스펙 1:1 비교함 ({compareCount})</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>

          <button
            onClick={() => {
              setActiveTab('finder');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'finder' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>맞춤 가전 찾기 진단</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>

          <button
            onClick={() => {
              setActiveTab('guides');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'guides' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>구매 가이드 & 랩 테스트</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>

          <button
            onClick={() => {
              setActiveTab('ai');
              setMobileMenuOpen(false);
            }}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
              activeTab === 'ai' ? 'bg-purple-50 text-purple-700' : 'text-purple-600 hover:bg-purple-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>AI 맞춤 가전 컨설턴트</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </header>
  );
};
