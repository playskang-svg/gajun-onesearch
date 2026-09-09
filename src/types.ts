export type CategoryId = 
  | 'all'
  | 'robot_vacuum'
  | 'cordless_vacuum'
  | 'food_disposer'
  | 'dishwasher'
  | 'air_purifier'
  | 'dehumidifier';

export type PickType = 'top' | 'value' | 'performance' | 'premium' | 'entry' | 'none';

export interface ProductScores {
  performance: number;     // 성능 (0-100)
  convenience: number;     // 편의성 (0-100)
  maintenance: number;     // 관리 및 소음 (0-100)
  valueForMoney: number;   // 가성비 (0-100)
}

export interface LabTestData {
  title: string;
  value: string;
  rating: '최상' | '우수' | '보통' | '아쉬움';
  detail?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  verifiedBuyer: boolean;
  content: string;
  usageMonths: number;
  pros: string;
  cons: string;
}

export interface Product {
  id: string;
  categoryId: CategoryId;
  name: string;
  brand: string;
  modelCode: string;
  image: string;
  price: number;
  originalPrice: number;
  nosearchScore: number;
  pickType: PickType;
  pickLabel?: string;
  scores: ProductScores;
  keySpecs: { label: string; value: string; highlight?: boolean }[];
  detailedSpecs: Record<string, string>;
  labTests: LabTestData[];
  verdict: string;
  pros: string[];
  cons: string[];
  reviews: ProductReview[];
  salesRank: number;
  bestSeller: boolean;
  releaseYear: number;
  buyUrl?: string;
}

export interface BuyingGuide {
  id: string;
  categoryId: CategoryId;
  title: string;
  subtitle: string;
  readTime: string;
  publishedAt: string;
  thumbnail: string;
  summary: string;
  keyPoints: { title: string; desc: string }[];
  contentSections: { heading: string; body: string; tip?: string }[];
  recommendedProductIds: string[];
}

export interface FilterState {
  categoryId: CategoryId;
  searchQuery: string;
  brands: string[];
  pickTypes: PickType[];
  minPrice: number;
  maxPrice: number;
  onlyPicks: boolean;
  sortBy: 'nosearch' | 'score' | 'price_asc' | 'price_desc' | 'reviews';
  selectedFeatures: string[];
}
