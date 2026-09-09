import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, ArrowRight, Scale, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface AiConsultantViewProps {
  onOpenDetails: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  recommendedProductIds?: string[];
}

export const AiConsultantView: React.FC<AiConsultantViewProps> = ({
  onOpenDetails,
  onToggleCompare,
  compareList,
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: '안녕하세요! 가전비교연구소 AI 가전 전문 컨설턴트입니다. 🏠\n거주 평수, 예산, 가족 구성원이나 고민 중인 모델명을 편하게 말씀해 주시면, 한번에 한눈에 비교할 수 있도록 실측 스펙과 랩 테스트 데이터를 기반으로 가장 합리적인 가전을 추천해 드립니다.',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    '30평대 고양이 2마리 키우는데 로봇청소기 추천해줘',
    '손목이 약해서 가벼운 무선청소기 다이슨 vs LG 비교',
    '여름철 악취 안 나는 음식물처리기 미닉스 vs 스마트카라',
    '식기세척기 6인용 vs 14인용 실사용 차이점',
    '10만원대 침실/원룸용 가성비 공기청정기',
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Realistic intelligent response logic grounded in dataset
    setTimeout(() => {
      let responseText = '';
      let recommendedIds: string[] = [];

      const lower = query.toLowerCase();

      if (lower.includes('로봇') || lower.includes('로봇청소기') || lower.includes('고양이') || lower.includes('강아지') || lower.includes('반려동물')) {
        responseText = `30평대 이상이며 반려동물(털, 사료 부스러기)이 있는 가정이라면 '온수 물걸레 세척 + 열풍 건조 + 엉킴 방지 롤러' 3가지가 핵심입니다.\n\n👑 1순위 추천: [로보락 S8 Pro Ultra]\n- 듀얼 실리콘 고무 롤러로 털 엉킴이 거의 없고, 6,000Pa 흡입력과 열풍 건조로 걸레 쉰내가 나지 않습니다.\n\n⚡ 2순위 (모서리 특화): [드리미 L20 Ultra]\n- 모파익스텐드 팔이 뻗어나와 벽 모서리 사각지대까지 걸레질을 해줍니다.\n\n💰 가성비 원픽: [샤오미 X10+]\n- 40만원대 후반에 올인원 열풍건조 스테이션을 누릴 수 있어 예산 절감에 최고입니다.`;
        recommendedIds = ['rv-roborock-s8-pro', 'rv-dreame-l20-ultra', 'rv-xiaomi-x10-plus'];
      } else if (lower.includes('무선') || lower.includes('청소기') || lower.includes('손목') || lower.includes('다이슨') || lower.includes('코드제로')) {
        responseText = `손목 피로도를 우선하신다면 제품의 '실측 총 중량'과 '무게 밸런스'를 꼭 보셔야 합니다.\n\n✨ 가벼움 1위: [다이슨 V12 디텍트 슬림] (2.2kg)\n- 깃털 같은 무게와 그린 레이저로 먼지를 찾아내어 손목 부담이 현저히 적습니다.\n\n📦 올인원 완성도 1위: [LG 코드제로 A9S 오브제컬렉션]\n- 280AW의 막강한 흡입력과 타워 거치만 하면 먼지를 자동으로 비워주는 편리함이 최고입니다.`;
        recommendedIds = ['cv-dyson-v12-detect-slim', 'cv-lg-codezero-a9s'];
      } else if (lower.includes('음식물') || lower.includes('미닉스') || lower.includes('스마트카라') || lower.includes('냄새')) {
        responseText = `음식물처리기는 냄새 차단 탈취 필터와 작동 소음이 가장 중요한 구매 기준입니다.\n\n🥇 종합 1위: [미닉스 더 플렌더]\n- A4 용지 크기 초소형 디자인에 19.9dB의 극저소음, 95% 부피 감량으로 1~3인 가구 만족도 1위입니다.\n\n💪 분쇄력 1위: [스마트카라 400 Pro]\n- 닭뼈나 생선가시까지 강력한 맷돌 모터로 갈아버리는 압도적 내구성을 자랑합니다.`;
        recommendedIds = ['fd-minix-the-flender', 'fd-smartcara-400-pro'];
      } else if (lower.includes('식기세척기') || lower.includes('설거지') || lower.includes('14인용') || lower.includes('6인용')) {
        responseText = `식기세척기는 무조건 '거거익선'입니다. 6인용은 냄비나 프라이팬이 들어가지 않아 결국 손설거지를 해야 합니다.\n\n👑 종결자: [LG 디오스 오브제컬렉션 14인용]\n- 100℃ 트루스팀 4구로 굳은 밥풀과 기름때를 녹이고, 열풍건조+자동문열림으로 물 얼룩 없이 뽀송합니다.\n\n🏠 원룸/전월세 거치형: [SK매직 트리플케어 6인용]\n- 싱크대 타공 없이 상판에 얹어서 쓰는 1~2인 가구용 1위입니다.`;
        recommendedIds = ['dw-lg-dios-objet-14', 'dw-skmagic-triple-care-6'];
      } else if (lower.includes('제습기') || lower.includes('습도') || lower.includes('장마') || lower.includes('빨래')) {
        responseText = `제습기는 아파트 평수 ÷ 2 공식으로 일일 제습량을 맞추고, 전기세를 아끼려면 '스마트 인버터 1등급' 필수입니다.\n\n🏆 국민 제습기: [위닉스 뽀송 인버터 16L]\n- 1등급 에너지 효율과 신발 건조 전용 호스 포함으로 25~35평형에서 가장 무난하고 실패 없는 선택입니다.\n\n⚡ 대용량 끝판왕: [LG 휘센 듀얼 인버터 20L]\n- 40평대 거실도 20분 만에 쾌적권으로 낮추는 강력 모터와 UV 팬 살균 탑재.`;
        recommendedIds = ['dh-winix-bbosong-16', 'dh-lg-whisen-dual-inverter-20'];
      } else {
        responseText = `질문해주신 '${query}' 관련 가전비교연구소 분석 결과입니다.\n가전제품은 제조사의 과장 광고보다 독립 연구소의 실측 데이터(흡입력 실측 AW/Pa, 작동 소음 dB, 소비전력, 필터 등급)를 기준으로 선택하셔야 중복 투자를 막을 수 있습니다.\n\n아래 검증된 대표 모델들을 비교함에 담아 1:1 스펙 차이를 한번에 한눈에 확인해 보세요!`;
        recommendedIds = ['rv-roborock-s8-pro', 'dw-lg-dios-objet-14', 'dh-winix-bbosong-16'];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        recommendedProductIds: recommendedIds,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-8 px-4 h-[calc(100vh-140px)] flex flex-col">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-5 mb-4 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/30 border border-purple-300/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <h1 className="text-lg font-black flex items-center gap-2">
              <span>가전비교연구소 AI 컨설턴트</span>
              <span className="text-[10px] bg-purple-400/20 text-purple-200 border border-purple-300/30 px-2 py-0.5 rounded-full font-bold">
                실측 데이터 기반
              </span>
            </h1>
            <p className="text-xs text-purple-200">
              실제 랩 테스트 결과와 스펙 시트를 학습한 AI가 1:1 맞춤 분석을 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Log Window */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 overflow-y-auto space-y-4 shadow-inner">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none shadow-xs'
                  : 'bg-gray-50 border border-gray-200 text-gray-800 rounded-bl-none shadow-xs'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>

              {/* Recommended Product Cards inside Chat bubble */}
              {m.recommendedProductIds && m.recommendedProductIds.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-200 space-y-2">
                  <div className="text-[11px] font-bold text-gray-500">
                    🔍 언급된 추천 모델 바로 비교
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {m.recommendedProductIds.map((pid) => {
                      const prod = PRODUCTS.find((p) => p.id === pid);
                      if (!prod) return null;
                      const inCompare = compareList.some((c) => c.id === prod.id);

                      return (
                        <div
                          key={prod.id}
                          className="bg-white p-2.5 rounded-xl border border-gray-200 flex items-center justify-between gap-2 shadow-2xs"
                        >
                          <div 
                            className="flex items-center gap-2 cursor-pointer flex-1 min-w-0"
                            onClick={() => onOpenDetails(prod)}
                          >
                            <img
                              src={prod.image}
                              alt={prod.name}
                              referrerPolicy="no-referrer"
                              className="w-9 h-9 object-contain rounded bg-gray-50 p-1"
                            />
                            <div className="truncate">
                              <div className="font-bold text-xs text-gray-900 truncate">
                                {prod.name}
                              </div>
                              <div className="text-[10px] text-blue-600 font-semibold">
                                ₩{prod.price.toLocaleString()}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => onToggleCompare(prod)}
                            className={`p-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                              inCompare
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                            title="비교함 토글"
                          >
                            {inCompare ? <Check className="w-3.5 h-3.5" /> : <Scale className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {m.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-gray-400 text-xs py-2">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-2xl flex items-center gap-1.5">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              <span className="text-gray-500 text-xs ml-1">가전비교 스펙 데이터 분석 중...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="py-2.5 overflow-x-auto scrollbar-none flex gap-2 shrink-0">
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="text-xs bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full whitespace-nowrap transition shadow-2xs"
          >
            💬 {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 pt-1 shrink-0"
      >
        <input
          type="text"
          placeholder="가전 질문을 입력하세요 (예: 30평대 조용한 공기청정기, 음식물처리기 가성비 추천 등)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-hidden transition shadow-2xs"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl text-sm font-bold flex items-center gap-1.5 transition shadow-sm"
        >
          <span>질문</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
