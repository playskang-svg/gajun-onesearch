import React from 'react';
import { Scale, X, ArrowRight, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface ComparisonDrawerProps {
  compareList: Product[];
  onRemove: (productId: string) => void;
  onClear: () => void;
  onOpenStudio: () => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  compareList,
  onRemove,
  onClear,
  onOpenStudio,
}) => {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 text-white backdrop-blur-md border-t border-slate-800 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Left info & items tray */}
          <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto py-1">
            <div className="hidden md:flex items-center gap-2 border-r border-slate-700 pr-4 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>비교함 담기</span>
                  <span className="hidden xl:inline text-[10px] text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded-full border border-blue-500/30">
                    강조 · 공유 · 데이터 시각화
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  <span className="text-blue-400 font-bold">{compareList.length}</span> / 최대 4개
                </div>
              </div>
            </div>

            {/* Selected item chips */}
            <div className="flex items-center gap-2">
              {compareList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 shrink-0 group hover:border-slate-500 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 object-cover rounded-md bg-white p-0.5"
                  />
                  <div className="max-w-[120px] sm:max-w-[150px]">
                    <div className="text-xs font-semibold text-slate-100 truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-blue-400 font-bold">
                      {item.nosearchScore}점
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-slate-400 hover:text-red-400 transition p-0.5"
                    title="제거"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {compareList.length < 4 && (
                <div className="hidden lg:flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-700 rounded-xl px-3 py-2 shrink-0">
                  + {4 - compareList.length}개 더 추가 가능
                </div>
              )}
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={onClear}
              className="text-xs text-slate-400 hover:text-white px-2.5 py-2 rounded-lg hover:bg-slate-800 transition flex items-center gap-1"
              title="비교함 모두 비우기"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">비우기</span>
            </button>

            <button
              id="start-comparison-btn"
              onClick={onOpenStudio}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition active:scale-98"
            >
              <Scale className="w-4 h-4" />
              <span>
                {compareList.length >= 2 
                  ? `${compareList.length}개 모델 1:1 스펙 비교하기` 
                  : `비교 시작하기 (${compareList.length}개 선택)`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
