import React from 'react';
import { Scale, Check, ChevronRight, Award, Zap, ThumbsUp, ExternalLink } from 'lucide-react';
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
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Badges & Compare Button */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {getPickBadge()}
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getScoreColor(product.nosearchScore)}`}>
                {product.nosearchScore}점
              </span>
            </div>

            <button
              id={`compare-btn-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(product);
              }}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                isInCompare
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
              title="비교함에 담기"
            >
              {isInCompare ? <Check className="w-3.5 h-3.5" /> : <Scale className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline whitespace-nowrap">{isInCompare ? '담김' : '비교'}</span>
            </button>
          </div>

          {/* Thumbnail Image */}
          <div 
            onClick={() => onOpenDetails(product)}
            className="relative w-full h-44 sm:h-48 rounded-xl bg-gray-50 overflow-hidden cursor-pointer mb-4 flex items-center justify-center p-2"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* Brand & Model */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span className="font-medium">{product.brand}</span>
            <span className="font-mono text-[11px] text-gray-400">{product.modelCode}</span>
          </div>

          {/* Product Name & Score */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 
              onClick={() => onOpenDetails(product)}
              className="font-bold text-gray-950 text-base sm:text-lg leading-snug cursor-pointer hover:text-blue-600 transition line-clamp-2"
            >
              {product.name}
            </h3>
            
            <div className={`flex flex-col items-center justify-center px-2.5 py-1.5 rounded-xl border shrink-0 ${getScoreColor(product.nosearchScore)}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">평가점수</span>
              <span className="text-lg font-black leading-none">{product.nosearchScore}</span>
            </div>
          </div>

          {/* 4 Score Micro Bars */}
          <div className="grid grid-cols-4 gap-2 py-3 px-3 bg-gray-50/90 rounded-xl mb-3.5 text-center border border-gray-100">
            <div>
              <div className="text-[11px] text-gray-500 font-medium">성능</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">{product.scores.performance}</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${product.scores.performance}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-500 font-medium">편의성</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">{product.scores.convenience}</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${product.scores.convenience}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-500 font-medium">관리/소음</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">{product.scores.maintenance}</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-teal-600 h-full rounded-full" style={{ width: `${product.scores.maintenance}%` }} />
              </div>
            </div>
            <div>
              <div className="text-[11px] text-gray-500 font-medium">가성비</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900">{product.scores.valueForMoney}</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${product.scores.valueForMoney}%` }} />
              </div>
            </div>
          </div>

          {/* Key Specs Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {product.keySpecs.slice(0, 4).map((spec, idx) => (
              <span
                key={idx}
                className={`text-xs py-1 px-2.5 rounded-lg font-medium ${
                  spec.highlight
                    ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-gray-400 mr-1">{spec.label}</span>
                <span>{spec.value}</span>
              </span>
            ))}
          </div>

          {/* 1-Line GAJUN Verdict */}
          <p className="text-xs sm:text-sm text-gray-700 line-clamp-2 mb-4 bg-slate-50/90 p-3 rounded-xl border-l-3 border-blue-600 italic">
            "{product.verdict}"
          </p>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-3.5 border-t border-gray-100 space-y-3">
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {discountPercent > 0 && (
                  <span className="text-red-500 text-xs sm:text-sm font-black">{discountPercent}%</span>
                )}
                <span className="text-xs sm:text-sm text-gray-400 line-through">
                  ₩{product.originalPrice.toLocaleString()}
                </span>
                {product.mallSaleBadge && (
                  <span className="text-[11px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md font-bold border border-rose-200">
                    {product.mallSaleBadge}
                  </span>
                )}
                {product.isRocket && (
                  <span className="text-[11px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded-md font-bold border border-sky-200">
                    🚀 로켓배송
                  </span>
                )}
              </div>
              <div className="text-xl sm:text-2xl font-black text-gray-950 leading-tight mt-0.5">
                ₩{product.price.toLocaleString()}
                <span className="text-xs font-normal text-gray-500 ml-1.5">최저가</span>
              </div>
            </div>

            {product.mallName && (
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-lg border border-blue-100">
                {product.mallName}
              </span>
            )}
          </div>

          {/* 2-Button Action Row */}
          <div className="flex items-center gap-2 pt-1">
            <button
              id={`view-detail-btn-${product.id}`}
              onClick={() => onOpenDetails(product)}
              className="flex-1 py-3 px-3 text-xs sm:text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition flex items-center justify-center gap-1 min-h-[44px]"
            >
              <span>상세분석</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={product.buyUrl || 'https://link.coupang.com/a/AF5563346?subid=gajun&subid2=card'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs min-h-[44px] text-center"
            >
              <span>{product.mallName || '최저가'} 구매</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
