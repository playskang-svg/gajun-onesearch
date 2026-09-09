import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend, 
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { 
  BarChart3, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  Volume2,
  Zap,
  Award
} from 'lucide-react';
import { Product } from '../types';

interface ComparisonVisualizerProps {
  compareList: Product[];
  onClose?: () => void;
}

const PRODUCT_COLORS = [
  { stroke: '#2563eb', fill: '#3b82f6', fillOpacity: 0.35, label: 'text-blue-600', bg: 'bg-blue-50' },     // Blue
  { stroke: '#059669', fill: '#10b981', fillOpacity: 0.35, label: 'text-emerald-600', bg: 'bg-emerald-50' }, // Emerald
  { stroke: '#7c3aed', fill: '#8b5cf6', fillOpacity: 0.35, label: 'text-purple-600', bg: 'bg-purple-50' },   // Purple
  { stroke: '#d97706', fill: '#f59e0b', fillOpacity: 0.35, label: 'text-amber-600', bg: 'bg-amber-50' },     // Amber
];

export const ComparisonVisualizer: React.FC<ComparisonVisualizerProps> = ({
  compareList,
}) => {
  const [activeChartType, setActiveChartType] = useState<'radar' | 'bar'>('radar');

  if (compareList.length === 0) return null;

  // 1. Radar Chart Data Preparation
  const radarMetrics = [
    { key: 'nosearchScore', label: '원써치 종합점수' },
    { key: 'performance', label: '성능 지수' },
    { key: 'convenience', label: '사용 편의성' },
    { key: 'maintenance', label: '유지관리·소음' },
    { key: 'valueForMoney', label: '가성비 만족도' },
  ];

  const radarData = radarMetrics.map((metric) => {
    const item: Record<string, string | number> = {
      subject: metric.label,
    };
    compareList.forEach((product) => {
      if (metric.key === 'nosearchScore') {
        item[product.name] = product.nosearchScore;
      } else {
        item[product.name] = product.scores[metric.key as keyof Product['scores']] || 0;
      }
    });
    return item;
  });

  // 2. Bar Chart Data Preparation (Scores)
  const barData = [
    {
      metric: '종합점수',
      ...compareList.reduce((acc, p) => ({ ...acc, [p.name]: p.nosearchScore }), {}),
    },
    {
      metric: '성능',
      ...compareList.reduce((acc, p) => ({ ...acc, [p.name]: p.scores.performance }), {}),
    },
    {
      metric: '편의성',
      ...compareList.reduce((acc, p) => ({ ...acc, [p.name]: p.scores.convenience }), {}),
    },
    {
      metric: '유지/소음',
      ...compareList.reduce((acc, p) => ({ ...acc, [p.name]: p.scores.maintenance }), {}),
    },
    {
      metric: '가성비',
      ...compareList.reduce((acc, p) => ({ ...acc, [p.name]: p.scores.valueForMoney }), {}),
    },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-2xl mb-6 space-y-6">
      
      {/* Top Header & Chart Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                비교 데이터 시각화 분석
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                실측 데이터 기반
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {compareList.length}개 모델의 4대 지표와 종합 점수를 다차원 그래픽으로 한눈에 대조합니다.
            </p>
          </div>
        </div>

        {/* Chart View Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 self-start sm:self-auto">
          <button
            onClick={() => setActiveChartType('radar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeChartType === 'radar'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>오각형 다면 분석 (Radar)</span>
          </button>
          <button
            onClick={() => setActiveChartType('bar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeChartType === 'bar'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>지표별 막대 대조 (Bar)</span>
          </button>
        </div>
      </div>

      {/* Product Color Legend Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {compareList.map((product, idx) => {
          const colorTheme = PRODUCT_COLORS[idx % PRODUCT_COLORS.length];
          return (
            <div 
              key={product.id}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-3 flex items-center gap-2.5"
            >
              <div 
                className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs" 
                style={{ backgroundColor: colorTheme.stroke }} 
              />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-slate-400 truncate">{product.brand}</div>
                <div className="text-xs font-bold text-white truncate">{product.name}</div>
                <div className="text-xs font-black" style={{ color: colorTheme.stroke }}>
                  원써치 {product.nosearchScore}점
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Canvas Container */}
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 sm:p-6 min-h-[360px] flex items-center justify-center">
        {activeChartType === 'radar' ? (
          <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="75%">
                <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
                />
                <PolarRadiusAxis 
                  angle={30} 
                  domain={[60, 100]} 
                  stroke="#475569" 
                  tick={{ fill: '#64748b', fontSize: 10 }} 
                />
                {compareList.map((product, idx) => {
                  const color = PRODUCT_COLORS[idx % PRODUCT_COLORS.length];
                  return (
                    <Radar
                      key={product.id}
                      name={product.name}
                      dataKey={product.name}
                      stroke={color.stroke}
                      fill={color.fill}
                      fillOpacity={color.fillOpacity}
                      strokeWidth={2}
                    />
                  );
                })}
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155', 
                    borderRadius: '12px',
                    color: '#f8fafc',
                    fontSize: '12px',
                    fontWeight: 600
                  }} 
                />
                <Legend 
                  wrapperStyle={{ 
                    paddingTop: '16px', 
                    fontSize: '11px', 
                    fontWeight: 'bold',
                    color: '#cbd5e1'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis 
                  dataKey="metric" 
                  stroke="#94a3b8" 
                  tick={{ fill: '#cbd5e1', fontSize: 12, fontWeight: 600 }} 
                />
                <YAxis 
                  domain={[50, 100]} 
                  stroke="#94a3b8" 
                  tick={{ fill: '#64748b', fontSize: 10 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155', 
                    borderRadius: '12px',
                    color: '#f8fafc',
                    fontSize: '12px',
                    fontWeight: 600
                  }} 
                />
                <Legend 
                  wrapperStyle={{ 
                    paddingTop: '16px', 
                    fontSize: '11px', 
                    fontWeight: 'bold',
                    color: '#cbd5e1'
                  }} 
                />
                {compareList.map((product, idx) => {
                  const color = PRODUCT_COLORS[idx % PRODUCT_COLORS.length];
                  return (
                    <Bar
                      key={product.id}
                      dataKey={product.name}
                      fill={color.stroke}
                      radius={[6, 6, 0, 0]}
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Visual Summary Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        
        {/* Highest Score Winner */}
        {(() => {
          const highestScoreProduct = [...compareList].sort((a, b) => b.nosearchScore - a.nosearchScore)[0];
          return (
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-bold">종합 스펙 1위 모델</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {highestScoreProduct.name} ({highestScoreProduct.nosearchScore}점)
                </div>
                <div className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  {highestScoreProduct.verdict}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Lowest Price Winner */}
        {(() => {
          const lowestPriceProduct = [...compareList].sort((a, b) => a.price - b.price)[0];
          return (
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-bold">최저가 가성비 우위</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {lowestPriceProduct.name} (₩{lowestPriceProduct.price.toLocaleString()})
                </div>
                <div className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  가성비 지수 {lowestPriceProduct.scores.valueForMoney}점 부여
                </div>
              </div>
            </div>
          );
        })()}

        {/* Quietest or Maintenance Winner */}
        {(() => {
          const quietestProduct = [...compareList].sort((a, b) => b.scores.maintenance - a.scores.maintenance)[0];
          return (
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-bold">유지관리 & 저소음 1위</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {quietestProduct.name} ({quietestProduct.scores.maintenance}점)
                </div>
                <div className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  실측 소음 및 관리 편의성 우수 모델
                </div>
              </div>
            </div>
          );
        })()}

      </div>

    </div>
  );
};
