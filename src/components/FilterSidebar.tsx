import React from 'react';
import { RotateCcw, Check, Sparkles, Filter } from 'lucide-react';
import { FilterState, PickType, CategoryId } from '../types';
import { CATEGORIES } from '../data/products';

interface FilterSidebarProps {
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  availableBrands: string[];
  totalResultsCount: number;
  onReset: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filterState,
  setFilterState,
  availableBrands,
  totalResultsCount,
  onReset,
  isMobileDrawer,
  onCloseMobileDrawer,
}) => {
  const currentCatMeta = CATEGORIES.find((c) => c.id === filterState.categoryId);

  const handleBrandToggle = (brand: string) => {
    setFilterState((prev) => {
      const exists = prev.brands.includes(brand);
      return {
        ...prev,
        brands: exists ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand],
      };
    });
  };

  const handlePickToggle = (pick: PickType) => {
    setFilterState((prev) => {
      const exists = prev.pickTypes.includes(pick);
      return {
        ...prev,
        pickTypes: exists ? prev.pickTypes.filter((p) => p !== pick) : [...prev.pickTypes, pick],
      };
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFilterState((prev) => {
      const exists = prev.selectedFeatures.includes(feature);
      return {
        ...prev,
        selectedFeatures: exists
          ? prev.selectedFeatures.filter((f) => f !== feature)
          : [...prev.selectedFeatures, feature],
      };
    });
  };

  const pricePresets = [
    { label: '전체 가격대', min: 0, max: 10000000 },
    { label: '50만원 이하', min: 0, max: 500000 },
    { label: '50~100만원', min: 500000, max: 1000000 },
    { label: '100~200만원', min: 1000000, max: 2000000 },
    { label: '200만원 이상', min: 2000000, max: 10000000 },
  ];

  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">상세 필터</h3>
          <span className="text-xs text-gray-500">({totalResultsCount}개)</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs sm:text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1 font-medium transition py-1 px-2 rounded-lg hover:bg-gray-100"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>초기화</span>
        </button>
      </div>

      {/* GAJUN Pick Toggle */}
      <div>
        <label className="flex items-center justify-between p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl cursor-pointer hover:bg-blue-50 transition">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="text-sm font-bold text-blue-950">가전비교 PICK만 보기</div>
              <div className="text-xs text-blue-700">연구소 실측 추천 등급 부여 모델</div>
            </div>
          </div>
          <input
            type="checkbox"
            checked={filterState.onlyPicks}
            onChange={(e) => setFilterState((prev) => ({ ...prev, onlyPicks: e.target.checked }))}
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Pick Type Badges */}
      <div className="space-y-2">
        <label className="text-xs sm:text-sm font-bold text-gray-700 block">추천 등급</label>
        <div className="flex flex-wrap gap-2">
          {[
            { type: 'top' as PickType, label: '종합 1위' },
            { type: 'performance' as PickType, label: '성능 PICK' },
            { type: 'value' as PickType, label: '가성비 PICK' },
            { type: 'premium' as PickType, label: '프리미엄' },
          ].map((item) => {
            const active = filterState.pickTypes.includes(item.type);
            return (
              <button
                key={item.type}
                onClick={() => handlePickToggle(item.type)}
                className={`text-xs sm:text-sm px-3 py-2 rounded-xl font-bold transition min-h-[38px] ${
                  active
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Presets */}
      <div className="space-y-2">
        <label className="text-xs sm:text-sm font-bold text-gray-700 block">가격대 선택</label>
        <div className="grid grid-cols-2 gap-2">
          {pricePresets.map((preset, idx) => {
            const isSelected =
              filterState.minPrice === preset.min && filterState.maxPrice === preset.max;
            return (
              <button
                key={idx}
                onClick={() =>
                  setFilterState((prev) => ({
                    ...prev,
                    minPrice: preset.min,
                    maxPrice: preset.max,
                  }))
                }
                className={`text-xs sm:text-sm py-2.5 px-3 rounded-xl font-bold transition border text-center min-h-[42px] ${
                  isSelected
                    ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                    : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Checklist */}
      <div className="space-y-2">
        <label className="text-xs sm:text-sm font-bold text-gray-700 block">브랜드</label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
          {availableBrands.map((brand) => {
            const checked = filterState.brands.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center gap-2.5 text-sm text-gray-800 hover:text-gray-900 cursor-pointer py-1.5 px-1 rounded-lg hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleBrandToggle(brand)}
                  className="w-4.5 h-4.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="truncate font-medium">{brand}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Category Specific Features Checklist */}
      {currentCatMeta && currentCatMeta.availableFeatures.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <label className="text-xs sm:text-sm font-bold text-gray-700 block">
            {currentCatMeta.name} 핵심 기능
          </label>
          <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
            {currentCatMeta.availableFeatures.map((feat) => {
              const checked = filterState.selectedFeatures.includes(feat);
              return (
                <label
                  key={feat}
                  className="flex items-center gap-2.5 text-sm text-gray-800 hover:text-gray-900 cursor-pointer py-1.5 px-1 rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleFeatureToggle(feat)}
                    className="w-4.5 h-4.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="font-medium">{feat}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {isMobileDrawer && (
        <div className="pt-4 border-t border-gray-100 sticky bottom-0 bg-white pb-2">
          <button
            onClick={onCloseMobileDrawer}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition min-h-[48px]"
          >
            {totalResultsCount}개 제품 결과 보기
          </button>
        </div>
      )}
    </aside>
  );
};
