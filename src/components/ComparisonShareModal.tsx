import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Printer, 
  MessageSquare, 
  Sparkles,
  Award
} from 'lucide-react';
import { Product } from '../types';

interface ComparisonShareModalProps {
  compareList: Product[];
  onClose: () => void;
}

export const ComparisonShareModal: React.FC<ComparisonShareModalProps> = ({
  compareList,
  onClose,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Generate share URL (using current href)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://gajun.kr';

  // Generate clean text summary for Kakao / SMS / Community
  const generateTextSummary = () => {
    const titles = compareList.map((p) => `[${p.brand}] ${p.name} (${p.nosearchScore}점, ₩${p.price.toLocaleString()})`).join(' VS ');
    const breakdown = compareList.map((p) => {
      const topPros = p.pros.slice(0, 2).join(', ');
      return `\n📌 ${p.brand} ${p.name}\n- 가전비교 점수: ${p.nosearchScore}점 | 최저가: ₩${p.price.toLocaleString()}\n- 핵심 강점: ${topPros}\n- 최종 판정: ${p.verdict}`;
    }).join('\n');

    return `[가전비교연구소 1:1 스펙 맞대결 리포트]\n\n🥊 비교 대상:\n${titles}\n${breakdown}\n\n한번에 한눈에 비교하는 가전비교연구소에서 확인하세요!\n${shareUrl}`;
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopySummary = async () => {
    const text = generateTextSummary();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-70 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-base">비교 결과 공유</h3>
              <p className="text-[11px] text-slate-300">
                1:1 스펙 대조 결과를 링크나 텍스트로 손쉽게 전달하세요
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Target Products Preview Cards */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              비교 대상 모델 ({compareList.length}개)
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {compareList.map((p) => (
                <div 
                  key={p.id}
                  className="p-3 bg-gray-50 border border-gray-200/80 rounded-2xl flex items-center gap-2.5"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 object-contain bg-white rounded-lg p-0.5 border border-gray-100"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-gray-400 font-medium truncate">{p.brand}</div>
                    <div className="text-xs font-bold text-gray-900 truncate">{p.name}</div>
                    <div className="text-[11px] font-black text-blue-600">
                      {p.nosearchScore}점 <span className="text-gray-400 font-normal">| ₩{p.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Copy Link Option */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-700">비교함 웹 링크</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-600 select-all focus:outline-hidden"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
                  copiedLink
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>링크 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Text Summary Card for KakaoTalk */}
          <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>카카오톡 / 커뮤니티 공유용 텍스트 요약</span>
              </div>
              <button
                onClick={handleCopySummary}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  copiedSummary
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border border-blue-200 text-blue-700 hover:bg-blue-100/50'
                }`}
              >
                {copiedSummary ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>요약 복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>요약 복사</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="bg-white/80 p-3 rounded-xl border border-blue-100 text-[11px] text-gray-700 font-mono whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
              {generateTextSummary()}
            </div>
          </div>

          {/* Print / PDF Option */}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>연구소 분석표를 인쇄하거나 PDF로 저장하세요</span>
            </div>
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-gray-600" />
              <span>리포트 인쇄 / PDF</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
