import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  Award, 
  Scale, 
  ArrowUpDown, 
  Check, 
  Info,
  Layers,
  ChevronDown,
  BookOpen,
  ArrowRight,
  X
} from 'lucide-react';
import { Product, CategoryId, FilterState } from './types';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Navbar } from './components/Navbar';
import { GUIDE_POSTS } from './data/guideIndex';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ComparisonDrawer } from './components/ComparisonDrawer';
import { ComparisonStudio } from './components/ComparisonStudio';
import { FilterSidebar } from './components/FilterSidebar';
import { ApplianceFinder } from './components/ApplianceFinder';
import { BuyingGuidesView } from './components/BuyingGuidesView';
import { AiConsultantView } from './components/AiConsultantView';
import { MallSalesView } from './components/MallSalesView';
import { MobileBottomNav } from './components/MobileBottomNav';
import { NavTabType } from './components/Navbar';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<NavTabType>('explore');
  
  // Filter state
  const [filterState, setFilterState] = useState<FilterState>({
    categoryId: 'all',
    searchQuery: '',
    brands: [],
    pickTypes: [],
    minPrice: 0,
    maxPrice: 10000000,
    onlyPicks: false,
    sortBy: 'nosearch',
    selectedFeatures: [],
  });

  // Comparison Tray
  const [compareList, setCompareList] = useState<Product[]>([
    PRODUCTS[0], // Pre-populate with Roborock S8 Pro & Dreame L20 for instant exploration!
    PRODUCTS[1],
  ]);

  // Selected Product for detail modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Full screen studio modal
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  // Mobile filter drawer
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Toast / notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Compare Toggle handler
  const handleToggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`'${product.name}' 비교함에서 제외되었습니다.`);
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 4) {
        showToast('비교함에는 최대 4개 모델까지만 담을 수 있습니다.');
        return prev;
      }
      showToast(`'${product.name}' 비교함에 담겼습니다.`);
      return [...prev, product];
    });
  };

  const handleAddCompare = (product: Product) => {
    if (compareList.length >= 4) {
      showToast('비교함에는 최대 4개 모델까지만 담을 수 있습니다.');
      return;
    }
    if (!compareList.some((p) => p.id === product.id)) {
      setCompareList((prev) => [...prev, product]);
      showToast(`'${product.name}' 추가되었습니다.`);
    }
  };

  const handleRemoveCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
    showToast('비교함을 비웠습니다.');
  };

  // Reset all filters
  const handleResetFilters = () => {
    setFilterState((prev) => ({
      ...prev,
      searchQuery: '',
      brands: [],
      pickTypes: [],
      minPrice: 0,
      maxPrice: 3000000,
      onlyPicks: false,
      selectedFeatures: [],
    }));
    showToast('필터가 초기화되었습니다.');
  };

  // Available brands in the currently selected category
  const availableBrands = useMemo(() => {
    const relevant = filterState.categoryId === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categoryId === filterState.categoryId);
    return Array.from(new Set(relevant.map((p) => p.brand)));
  }, [filterState.categoryId]);

  // Filter & Sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (filterState.categoryId !== 'all' && p.categoryId !== filterState.categoryId) {
        return false;
      }

      // Search query filter
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesModel = p.modelCode.toLowerCase().includes(q);
        const matchesSpecs = p.keySpecs.some((s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q));
        const matchesVerdict = p.verdict.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesModel && !matchesSpecs && !matchesVerdict) {
          return false;
        }
      }

      // Brand filter
      if (filterState.brands.length > 0 && !filterState.brands.includes(p.brand)) {
        return false;
      }

      // Pick type filter
      if (filterState.pickTypes.length > 0 && !filterState.pickTypes.includes(p.pickType)) {
        return false;
      }

      // Only Picks
      if (filterState.onlyPicks && p.pickType === 'none') {
        return false;
      }

      // Price filter
      if (p.price < filterState.minPrice || p.price > filterState.maxPrice) {
        return false;
      }

      // Features filter
      if (filterState.selectedFeatures.length > 0) {
        const hasAllFeatures = filterState.selectedFeatures.every((feature) => {
          const inKeySpecs = p.keySpecs.some((s) => s.label.includes(feature) || s.value.includes(feature));
          const inDetailSpecs = Object.entries(p.detailedSpecs).some(([k, v]) => k.includes(feature) || v.includes(feature));
          const inPros = p.pros.some((pro) => pro.includes(feature));
          return inKeySpecs || inDetailSpecs || inPros;
        });
        if (!hasAllFeatures) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'nosearch') {
        // Top picks first, then by score
        const pickWeight: Record<string, number> = { top: 4, performance: 3, value: 2, premium: 2, entry: 1, none: 0 };
        const weightDiff = (pickWeight[b.pickType] || 0) - (pickWeight[a.pickType] || 0);
        if (weightDiff !== 0) return weightDiff;
        return b.nosearchScore - a.nosearchScore;
      }
      if (filterState.sortBy === 'score') {
        return b.nosearchScore - a.nosearchScore;
      }
      if (filterState.sortBy === 'price_asc') {
        return a.price - b.price;
      }
      if (filterState.sortBy === 'price_desc') {
        return b.price - a.price;
      }
      if (filterState.sortBy === 'reviews') {
        return b.reviews.length - a.reviews.length;
      }
      return 0;
    });
  }, [filterState]);

  const currentCatMeta = CATEGORIES.find((c) => c.id === filterState.categoryId);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-gray-900 pb-20">
      
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 animate-in slide-in-from-top-2 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={filterState.categoryId}
        setSelectedCategory={(catId) => setFilterState((prev) => ({ ...prev, categoryId: catId }))}
        searchQuery={filterState.searchQuery}
        setSearchQuery={(q) => setFilterState((prev) => ({ ...prev, searchQuery: q }))}
        compareCount={compareList.length}
        openCompareStudio={() => setIsStudioOpen(true)}
        onToggleMobileFilter={() => setIsMobileFilterOpen(true)}
      />

      {/* VIEW SWITCHER */}
      {activeTab === 'explore' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-sm border border-slate-700/60 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>한번에 한눈에 비교! 독립 연구소 실측 가전 플랫폼</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                홍보 문구 걷어낸 실측 스펙 비교,<br />
                <span className="text-blue-400">가전비교연구소</span>에서 한번에 한눈에!
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                제조사 카탈로그의 과장된 수치 대신, 연구소에서 직접 측정한 흡입력(AW), 실측 소음(dB), 
                전기요금 및 고장률 데이터를 기반으로 한번에 한눈에 비교하여 실패 없는 가전 선택을 돕습니다.
              </p>

              {/* Quick stats counter */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-8 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>실측 테스트 완료 <strong>70여 개 인기 가전</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span>4대 평가 지표 실측</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>1:1 무제한 스펙 맞대결</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/10 blur-3xl pointer-events-none" />
          </div>

          {/* 가전 상식 — 정보 콘텐츠 전면 배치 */}
          <section className="mb-8">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-950 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  가전 상식
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  냄새·물샘·전기요금까지, 쓰면서 부딪히는 문제를 기준과 함께 정리했습니다
                </p>
              </div>
              <a href="/guide/" className="text-sm font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap flex items-center gap-1">
                전체 {GUIDE_POSTS.length}편 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDE_POSTS.slice(0, 6).map((g) => (
                <a
                  key={g.slug}
                  href={`/guide//`}
                  className="block bg-white border border-gray-200 rounded-2xl p-4 hover:border-emerald-300 hover:shadow-xs transition"
                >
                  <div className="text-[11px] font-bold text-emerald-700 mb-1.5">{g.categoryName}</div>
                  <div className="text-[15px] font-bold text-gray-900 leading-snug mb-1.5">{g.title}</div>
                  <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-2">{g.summary}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Category Banner Title & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                  {currentCatMeta?.name || '가전 탐색'}
                </h2>
                <span className="text-xs sm:text-sm text-gray-600 font-bold bg-gray-200/80 px-2.5 py-0.5 rounded-full">
                  {filteredProducts.length}개 모델
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {currentCatMeta?.description}
              </p>
            </div>

            {/* Sort & Mobile filter button */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl text-sm font-bold text-gray-800 md:hidden shadow-xs min-h-[46px]"
              >
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span>필터 설정</span>
              </button>

              <div className="flex-1 sm:flex-none relative flex items-center bg-white border border-gray-200 rounded-xl shadow-xs min-h-[46px]">
                <ArrowUpDown className="w-4 h-4 text-gray-400 ml-3.5 pointer-events-none" />
                <select
                  id="sort-select"
                  value={filterState.sortBy}
                  onChange={(e) => setFilterState((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                  aria-label="제품 정렬 기준"
                  className="w-full pl-2.5 pr-8 py-3 text-sm font-bold text-gray-800 bg-transparent focus:outline-hidden cursor-pointer min-h-[46px]"
                >
                  <option value="nosearch">추천순 (기본)</option>
                  <option value="score">평가점수 높은순</option>
                  <option value="price_asc">가격 낮은순 (가성비)</option>
                  <option value="price_desc">가격 높은순 (프리미엄)</option>
                  <option value="reviews">리뷰 많은순</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main 2-Column Content: Sidebar + Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Desktop Sidebar (col-span-3 or 4) */}
            <div className="hidden md:block md:col-span-4 lg:col-span-3 sticky top-28">
              <FilterSidebar
                filterState={filterState}
                setFilterState={setFilterState}
                availableBrands={availableBrands}
                totalResultsCount={filteredProducts.length}
                onReset={handleResetFilters}
              />
            </div>

            {/* Product Grid (col-span-8 or 9) */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 text-gray-400">
                    <Info className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    조건에 맞는 가전제품이 없습니다.
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    선택하신 필터 조건(브랜드, 가격대, 스펙)을 넓혀보세요.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition"
                  >
                    필터 전체 초기화
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => {
                    const isInCompare = compareList.some((p) => p.id === product.id);
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isInCompare={isInCompare}
                        onToggleCompare={handleToggleCompare}
                        onOpenDetails={(p) => setSelectedProduct(p)}
                      />
                    );
                  })}
                </div>
              )}
            </div>

          </div>

        </main>
      )}

      {/* VIEW: Comparison Studio (when chosen from Navbar directly) */}
      {activeTab === 'compare' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
          <ComparisonStudio
            compareList={compareList}
            onRemove={handleRemoveCompare}
            onAdd={handleAddCompare}
            onClose={() => setActiveTab('explore')}
            onOpenDetails={(p) => setSelectedProduct(p)}
          />
        </main>
      )}

      {/* VIEW: Appliance Finder Quiz */}
      {activeTab === 'finder' && (
        <ApplianceFinder
          onOpenDetails={(p) => setSelectedProduct(p)}
          onToggleCompare={handleToggleCompare}
          compareList={compareList}
        />
      )}

      {/* VIEW: Buying Guides Magazine */}
      {activeTab === 'guides' && (
        <BuyingGuidesView
          onOpenDetails={(p) => setSelectedProduct(p)}
          onToggleCompare={handleToggleCompare}
          compareList={compareList}
        />
      )}

      {/* VIEW: AI Consultant */}
      {activeTab === 'ai' && (
        <AiConsultantView
          onOpenDetails={(p) => setSelectedProduct(p)}
          onToggleCompare={handleToggleCompare}
          compareList={compareList}
        />
      )}

      {/* VIEW: Mall & Department Store Sales Exhibition */}
      {activeTab === 'sales' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
          <MallSalesView onOpenDetails={(p) => setSelectedProduct(p)} />
        </main>
      )}

      {/* Persistent Floating Comparison Bottom Drawer (When ≥1 item selected and not in compare tab) */}
      {activeTab !== 'compare' && (
        <ComparisonDrawer
          compareList={compareList}
          onRemove={handleRemoveCompare}
          onClear={handleClearCompare}
          onOpenStudio={() => setIsStudioOpen(true)}
        />
      )}

      {/* Full-Screen Comparison Studio Modal (when opened from floating drawer button) */}
      {isStudioOpen && (
        <ComparisonStudio
          compareList={compareList}
          onRemove={handleRemoveCompare}
          onAdd={handleAddCompare}
          onClose={() => setIsStudioOpen(false)}
          onOpenDetails={(p) => setSelectedProduct(p)}
        />
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isInCompare={selectedProduct ? compareList.some((p) => p.id === selectedProduct.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {/* Mobile Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end md:hidden">
          <div className="w-full max-w-xs bg-white h-full overflow-y-auto p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-bold text-sm text-gray-900">필터 설정</span>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 flex-1">
              <FilterSidebar
                filterState={filterState}
                setFilterState={setFilterState}
                availableBrands={availableBrands}
                totalResultsCount={filteredProducts.length}
                onReset={handleResetFilters}
                isMobileDrawer={true}
                onCloseMobileDrawer={() => setIsMobileFilterOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-gray-200 py-10 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900 text-sm">가전비교연구소</span>
              <span className="text-gray-400">| 한번에 한눈에 비교하는 가전 스펙 플랫폼</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 flex-wrap">
              <button onClick={() => setActiveTab('explore')} className="hover:text-blue-600">가전 탐색</button>
              <button onClick={() => setActiveTab('compare')} className="hover:text-blue-600">1:1 스펙비교</button>
              <button onClick={() => setActiveTab('finder')} className="hover:text-blue-600">맞춤 가전 찾기</button>
              <button onClick={() => setActiveTab('guides')} className="hover:text-blue-600">구매 가이드</button>
              <button onClick={() => setActiveTab('sales')} className="hover:text-rose-600 font-semibold text-rose-600">백화점·몰 세일전</button>
              <button onClick={() => setActiveTab('ai')} className="hover:text-purple-600">AI 컨설턴트</button>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            본 서비스는 실제 가전 사용자의 합리적인 구매를 돕기 위해 제작된 한번에 한눈에 비교하는 가전비교연구소 가전 스펙 비교 및 실험실 리뷰 웹 애플리케이션입니다. 
            모든 평가 점수와 실측치는 표준 시험 조건에 기반합니다.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-[11px] text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">공정거래위원회 제휴 마케팅 안내:</span> 본 사이트는 쿠팡 파트너스 및 링크프라이스 등 제휴 마케팅 프로그램의 활동으로 일정액의 수수료를 제공받을 수 있으며, 추천 상품의 최종 구매 가격에는 어떠한 영향도 미치지 않습니다.
          </div>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 flex-wrap gap-2">
            <span>© 2026 가전비교연구소 (gajun.kr). All rights reserved.</span>
            <span>독립 연구소 실측 검증 데이터 & 검증된 파트너십 딥링크 탑재</span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compareCount={compareList.length}
        openCompareStudio={() => setIsStudioOpen(true)}
      />

    </div>
  );
}
