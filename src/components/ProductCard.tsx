import React from 'react';
import { Scale, Check, ChevronRight, Award, Zap, ThumbsUp } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isInCompare: boolean;
  onToggleCompare: (product: Product) => void;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInCompare,
  onToggleCompare,
  onOpenDetails,
}) => {
  const getPickBadge = () => {
    switch (product.pickType) {
      case 'top':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            <Award className="w-3 h-3" />
            {product.pickLabel || '가전비교 종합 1위'}
          </span>
        );
      case 'performance':
        return (
          <span className="inline-flex items-center gap-1 bg-indigo-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            <Zap className="w-3 h-3" />
            {product.pickLabel || '성능 PICK'}
          </span>
        );
      case 'value':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            <ThumbsUp className="w-3 h-3" />
            {product.pickLabel || '가성비 1위'}
          </span>
        );
      case 'premium':
        return (
          <span className="inline-flex items-center gap-1 bg-slate-800 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded shadow-xs border border-amber-300/30">
            ★ {product.pickLabel || '프리미엄'}
          </span>
        );
      case 'entry':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            {product.pickLabel || '입문용 PICK'}
          </span>
        );
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 90) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-slate-700 bg-slate-50 border-slate-200';
  };

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div 
      id={`product-card-${product.id}`}
      className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col overflow-hidden hover:shadow-lg ${
        isInCompare 
          ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md' 
          : 'border-gray-200/90 hover:border-gray-300'
      }`}
    >
      {/* Top Media & Badges */}
      <div className="relative bg-gray-50/70 p-4 border-b border-gray-100 flex items-center justify-center min-h-[220px]">
        {/* Floating Pick Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          {getPickBadge()}
          {product.bestSeller && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              BEST
            </span>
          )}
        </div>

        {/* Compare Checkbox Button */}
        <button
          id={`compare-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product);
          }}
          className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition shadow-xs ${
            isInCompare
              ? 'bg-blue-600 text-white ring-2 ring-blue-300'
              : 'bg-white/90 text-gray-700 hover:bg-white hover:text-blue-600 border border-gray-200'
          }`}
          title={isInCompare ? '비교함에서 제거' : '비교함에 담기'}
        >
          {isInCompare ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>비교중</span>
            </>
          ) : (
            <>
              <Scale className="w-3.5 h-3.5" />
              <span>비교담기</span>
            </>
          )}
        </button>

        {/* Product Image */}
        <div 
          className="w-full h-44 overflow-hidden rounded-lg cursor-pointer flex items-center justify-center"
          onClick={() => onOpenDetails(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Model */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-medium">{product.brand}</span>
            <span className="font-mono text-[11px] text-gray-400">{product.modelCode}</span>
          </div>

          {/* Product Name & Score */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 
              onClick={() => onOpenDetails(product)}
              className="font-bold text-gray-950 text-base leading-snug cursor-pointer hover:text-blue-600 transition line-clamp-2"
            >
              {product.name}
            </h3>
            
            <div className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg border shrink-0 ${getScoreColor(product.nosearchScore)}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">가전비교점수</span>
              <span className="text-base font-black leading-none">{product.nosearchScore}</span>
            </div>
          </div>

          {/* 4 Score Micro Bars */}
          <div className="grid grid-cols-4 gap-1.5 py-2.5 px-3 bg-gray-50 rounded-xl mb-3 text-center border border-gray-100">
            <div>
              <div className="text-[10px] text-gray-500 font-medium">성능</div>
              <div className="text-xs font-bold text-gray-900">{product.scores.performance}</div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${product.scores.performance}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-medium">편의성</div>
              <div className="text-xs font-bold text-gray-900">{product.scores.convenience}</div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${product.scores.convenience}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-medium">관리/소음</div>
              <div className="text-xs font-bold text-gray-900">{product.scores.maintenance}</div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-teal-600 h-full rounded-full" style={{ width: `${product.scores.maintenance}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-medium">가성비</div>
              <div className="text-xs font-bold text-gray-900">{product.scores.valueForMoney}</div>
              <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${product.scores.valueForMoney}%` }} />
              </div>
            </div>
          </div>

          {/* Key Specs Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.keySpecs.slice(0, 4).map((spec, idx) => (
              <span
                key={idx}
                className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                  spec.highlight
                    ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <span className="text-gray-400 mr-1">{spec.label}</span>
                <span>{spec.value}</span>
              </span>
            ))}
          </div>

          {/* 1-Line GAJUN Verdict */}
          <p className="text-xs text-gray-600 line-clamp-2 mb-4 bg-slate-50/70 p-2.5 rounded-lg border-l-2 border-blue-500 italic">
            "{product.verdict}"
          </p>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              {discountPercent > 0 && (
                <span className="text-red-500 text-xs font-bold">{discountPercent}%</span>
              )}
              <span className="text-xs text-gray-400 line-through">
                ₩{product.originalPrice.toLocaleString()}
              </span>
            </div>
            <div className="text-lg font-black text-gray-950 leading-tight">
              ₩{product.price.toLocaleString()}
              <span className="text-xs font-normal text-gray-500 ml-1">최저가</span>
            </div>
          </div>

          <button
            id={`view-detail-btn-${product.id}`}
            onClick={() => onOpenDetails(product)}
            className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 rounded-xl transition"
          >
            <span>상세분석</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
