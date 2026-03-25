// NovaChair - Product Data & Types
// Design: Scandinavian Minimalism + Industrial Edge

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  wholesalePrice: number;
  wholesaleMinQty: number;
  description: string;
  shortDesc: string;
  image: string;
  images: string[];
  detailImage?: string;
  badge?: 'new' | 'best' | 'sale' | 'wholesale';
  discount?: number;
  stock: number;
  specs: Record<string, string>;
  tags: string[];
}

export const CATEGORIES = [
  { slug: 'all', name: '전체', icon: '◈' },
  { slug: 'office-chair', name: '오피스 체어', icon: '◉' },
  { slug: 'gaming-chair', name: '게이밍 체어', icon: '◈' },
  { slug: 'sofa', name: '소파', icon: '◎' },
  { slug: 'table', name: '테이블', icon: '▣' },
  { slug: 'storage', name: '수납/선반', icon: '▤' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'nc-001',
    name: 'STELLA',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: 89000,
    wholesalePrice: 65000,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 직접 제작한 플라스틱 인테리어 의자. 적재 가능한 스태킹 구조로 식당, 카페, 행사장 등 다양한 공간에 최적화되어 있습니다. 가볍고 내구성이 뛰어나며 관리가 편리합니다.',
    shortDesc: '공간을 채우는 프리미엄 감성',
    image: '/stella-main2.png',
    images: ['/stella-main2.png'],
    detailImage: '/STELLA-detail.jpg',
    badge: 'best',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '하중': '최대 150kg',
      '적재': '스태킹 가능',
      '색상': '화이트 / 베이지',
      '보증': '1년',
    },
    tags: ['플라스틱', '스태킹', '식당용', '카페용', '업소용'],
  },
  {
    id: 'nc-002',
    name: 'Nova Classic Linen',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 389000,
    wholesalePrice: 295000,
    wholesaleMinQty: 5,
    description: '따뜻한 베이지 린넨 패브릭과 원목 팔걸이가 조화를 이루는 클래식 오피스 체어. 스칸디나비안 디자인 감성을 그대로 담았습니다.',
    shortDesc: '린넨 패브릭 클래식 체어',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-main-4oEfrbfAKWPqt4ChzCGmcU.webp',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-main-4oEfrbfAKWPqt4ChzCGmcU.webp',
    ],
    badge: 'new',
    stock: 32,
    specs: {
      '소재': '린넨 패브릭 + 고밀도 폼',
      '프레임': '원목 + 알루미늄',
      '하중': '최대 100kg',
      '높이 조절': '44~54cm',
      '팔걸이': '고정형 원목',
      '보증': '2년',
    },
    tags: ['린넨', '원목', '클래식', '스칸디나비안'],
  },
  {
    id: 'nc-003',
    name: 'Nova Gaming X1',
    category: '게이밍 체어',
    categorySlug: 'gaming-chair',
    price: 549000,
    wholesalePrice: 420000,
    wholesaleMinQty: 3,
    description: '고성능 게이밍 세션을 위한 최적의 체어. 리클라이닝 기능과 목 쿠션, 요추 쿠션이 포함되어 있으며 레이싱 시트 디자인으로 역동적인 분위기를 연출합니다.',
    shortDesc: '풀 리클라이닝 게이밍 체어',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
    ],
    badge: 'sale',
    discount: 15,
    stock: 25,
    specs: {
      '소재': 'PU 레더',
      '프레임': '스틸',
      '하중': '최대 150kg',
      '리클라이닝': '90°~180°',
      '쿠션': '목 + 요추 쿠션 포함',
      '보증': '2년',
    },
    tags: ['게이밍', '리클라이닝', 'PU레더', '목쿠션'],
  },
  {
    id: 'nc-004',
    name: 'Nova Sofa Nordic',
    category: '소파',
    categorySlug: 'sofa',
    price: 1290000,
    wholesalePrice: 980000,
    wholesaleMinQty: 2,
    description: '북유럽 감성의 3인용 소파. 고밀도 폼과 천연 린넨 패브릭으로 제작되어 내구성과 편안함을 동시에 제공합니다. 원목 다리가 따뜻한 분위기를 완성합니다.',
    shortDesc: '북유럽 스타일 3인용 소파',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/product-sofa-kGokLTyC4zAKwNfxUGDNke.webp',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/product-sofa-kGokLTyC4zAKwNfxUGDNke.webp',
    ],
    badge: 'best',
    stock: 15,
    specs: {
      '크기': 'W220 × D90 × H80cm',
      '소재': '린넨 패브릭',
      '다리': '원목 오크',
      '내부': '고밀도 폼 + 스프링',
      '색상': '샌드 베이지',
      '보증': '3년',
    },
    tags: ['소파', '3인용', '린넨', '원목다리'],
  },
  {
    id: 'nc-005',
    name: 'Nova Walnut Table',
    category: '테이블',
    categorySlug: 'table',
    price: 890000,
    wholesalePrice: 680000,
    wholesaleMinQty: 2,
    description: '천연 월넛 원목으로 제작된 다이닝 테이블. 자연스러운 나뭇결이 살아있는 매트 마감으로 공간에 따뜻함을 더합니다. 4-6인용으로 적합합니다.',
    shortDesc: '천연 월넛 원목 다이닝 테이블',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/product-dining-table-nVGPx3Uc7TXFH3854eLZta.webp',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/product-dining-table-nVGPx3Uc7TXFH3854eLZta.webp',
    ],
    badge: 'new',
    stock: 20,
    specs: {
      '크기': 'W180 × D90 × H75cm',
      '소재': '천연 월넛 원목',
      '마감': '매트 오일 마감',
      '다리': '오크 원목',
      '수용인원': '4~6인',
      '보증': '5년',
    },
    tags: ['원목', '월넛', '다이닝', '4-6인'],
  },
  {
    id: 'nc-006',
    name: 'Nova Shelf Pro',
    category: '수납/선반',
    categorySlug: 'storage',
    price: 320000,
    wholesalePrice: 240000,
    wholesaleMinQty: 5,
    description: '모듈형 오픈 선반 시스템. 원목 선반과 스틸 프레임의 조합으로 인더스트리얼 감성을 연출합니다. 사무실과 가정 모두에 어울립니다.',
    shortDesc: '모듈형 인더스트리얼 선반',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
    stock: 60,
    specs: {
      '크기': 'W80 × D30 × H180cm',
      '소재': '원목 + 스틸',
      '선반 수': '5단',
      '하중': '단당 최대 30kg',
      '조립': '셀프 조립',
      '보증': '1년',
    },
    tags: ['선반', '모듈형', '인더스트리얼', '수납'],
  },
  {
    id: 'nc-007',
    name: 'Nova Task Chair',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 259000,
    wholesalePrice: 195000,
    wholesaleMinQty: 10,
    description: '합리적인 가격에 실용적인 기능을 갖춘 업무용 체어. 높이 조절과 틸팅 기능으로 다양한 체형에 맞게 조정 가능합니다.',
    shortDesc: '실용적인 업무용 태스크 체어',
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&q=80',
    ],
    badge: 'wholesale',
    stock: 100,
    specs: {
      '소재': '패브릭 + 나일론',
      '프레임': '나일론 베이스',
      '하중': '최대 110kg',
      '높이 조절': '40~50cm',
      '틸팅': '가능',
      '보증': '1년',
    },
    tags: ['태스크', '실용적', '높이조절', '틸팅'],
  },
  {
    id: 'nc-008',
    name: 'Nova Coffee Table',
    category: '테이블',
    categorySlug: 'table',
    price: 420000,
    wholesalePrice: 320000,
    wholesaleMinQty: 3,
    description: '미니멀한 디자인의 원형 커피 테이블. 오크 원목과 강화유리의 조합으로 세련된 거실 분위기를 연출합니다.',
    shortDesc: '원형 오크 커피 테이블',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
    ],
    stock: 35,
    specs: {
      '크기': 'Ø90 × H45cm',
      '소재': '오크 원목 + 강화유리',
      '유리 두께': '8mm',
      '마감': '오일 마감',
      '보증': '2년',
    },
    tags: ['커피테이블', '원형', '오크', '강화유리'],
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString('ko-KR') + '원';
}

export function getDiscountedPrice(price: number, discount?: number): number {
  if (!discount) return price;
  return Math.round(price * (1 - discount / 100));
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
