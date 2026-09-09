import React from 'react';
import { Layers, Scale, ShoppingBag, BookOpen, Sparkles } from 'lucide-react';
import { NavTabType } from './Navbar';

interface MobileBottomNavProps {
  activeTab: NavTabType;
  setActiveTab: (tab: NavTabType) => void;
  compareCount: number;
  openCompareStudio: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  compareCount,
  openCompareStudio,
}) => {
  return (
    <nav 
      aria-label="모바일 하단 내비게이션"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-2 pt-1.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center justify-around">
        {/* 1. Explore */}
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
            activeTab === 'explore'
              ? 'text-blue-600 font-bold'
              : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <Layers className={`w-5 h-5 ${activeTab === 'explore' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          </div>
          <span className="text-[11px] mt-1 tracking-tight">가전탐색</span>
        </button>

        {/* 2. Compare Studio */}
        <button
          onClick={() => {
            if (compareCount > 0) {
              openCompareStudio();
            } else {
              setActiveTab('compare');
            }
          }}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition relative ${
            activeTab === 'compare'
              ? 'text-blue-600 font-bold'
              : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <Scale className={`w-5 h-5 ${activeTab === 'compare' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            {compareCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-blue-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {compareCount}
              </span>
            )}
          </div>
          <span className="text-[11px] mt-1 tracking-tight">스펙비교</span>
        </button>

        {/* 3. Department / Mall Sales */}
        <button
          onClick={() => setActiveTab('sales')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition relative ${
            activeTab === 'sales'
              ? 'text-rose-600 font-bold'
              : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <ShoppingBag className={`w-5 h-5 ${activeTab === 'sales' ? 'stroke-[2.5] text-rose-600' : 'stroke-[1.8]'}`} />
            <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1 rounded-full animate-pulse">
              HOT
            </span>
          </div>
          <span className={`text-[11px] mt-1 tracking-tight ${activeTab === 'sales' ? 'text-rose-600' : ''}`}>
            세일전
          </span>
        </button>

        {/* 4. Buying Guides */}
        <button
          onClick={() => setActiveTab('guides')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
            activeTab === 'guides'
              ? 'text-amber-600 font-bold'
              : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <BookOpen className={`w-5 h-5 ${activeTab === 'guides' ? 'stroke-[2.5] text-amber-600' : 'stroke-[1.8]'}`} />
          </div>
          <span className="text-[11px] mt-1 tracking-tight">구매가이드</span>
        </button>

        {/* 5. AI Consultant */}
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
            activeTab === 'ai'
              ? 'text-purple-600 font-bold'
              : 'text-gray-500 hover:text-gray-900 font-medium'
          }`}
        >
          <div className="relative">
            <Sparkles className={`w-5 h-5 ${activeTab === 'ai' ? 'stroke-[2.5] text-purple-600' : 'stroke-[1.8]'}`} />
          </div>
          <span className="text-[11px] mt-1 tracking-tight">AI도우미</span>
        </button>
      </div>
    </nav>
  );
};
