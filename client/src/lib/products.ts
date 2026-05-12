// NovaChair - Product Data & Types
// Design: Scandinavian Minimalism + Industrial Edge

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number | null;
  wholesalePrice: number | null;
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
  retailAvailable?: boolean;
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
    wholesalePrice: null,
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
    retailAvailable: true,
  },
  {
    id: 'nc-101',
    name: '노바체어 두꺼비 1호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 1호',
    image: '/두꺼비1호.png',
    images: ['/두꺼비1호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-102',
    name: '노바체어 두꺼비 2호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 2호',
    image: '/두꺼비2호.png',
    images: ['/두꺼비2호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-103',
    name: '노바체어 두꺼비 3호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 3호',
    image: '/두꺼비3호.png',
    images: ['/두꺼비3호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-104',
    name: '노바체어 두꺼비 4호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 4호',
    image: '/두꺼비4호.png',
    images: ['/두꺼비4호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-105',
    name: '노바체어 두꺼비 5호 (팔걸이 있음)',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 팔걸이 포함.',
    shortDesc: '팔걸이 있는 두꺼비 5호',
    image: '/두꺼비5호_팔걸이.png',
    images: ['/두꺼비5호_팔걸이.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '팔걸이': '있음',
    },
    tags: ['플라스틱', '두꺼비', '팔걸이', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-106',
    name: '노바체어 두꺼비 5호 (팔걸이 없음)',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 팔걸이 없음.',
    shortDesc: '팔걸이 없는 두꺼비 5호',
    image: '/두꺼비5호_노팔걸이.png',
    images: ['/두꺼비5호_노팔걸이.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '팔걸이': '없음',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-107',
    name: '노바체어 두꺼비 5-1호 (다리 고정)',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 다리 고정형.',
    shortDesc: '다리 고정형 두꺼비 5-1호',
    image: '/두꺼비5-1호.png',
    images: ['/두꺼비5-1호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '다리': '고정형',
    },
    tags: ['플라스틱', '두꺼비', '고정다리', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-108',
    name: '노바체어 매틱 6호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '매틱 시리즈 6호',
    image: '/매틱6호.png',
    images: ['/매틱6호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '매틱', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-109',
    name: '노바체어 튤립 1호',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '튤립 시리즈 1호',
    image: '/튤립1호.png',
    images: ['/튤립1호.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '튤립', '인테리어'],
    retailAvailable: true,
  },
  {
    id: 'nc-110',
    name: '노바체어 깡통의자',
    category: '인테리어 의자',
    categorySlug: 'office-chair',
    price: null,
    wholesalePrice: null,
    wholesaleMinQty: 10,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '깡통의자 시리즈',
    image: '/깡통의자.png',
    images: ['/깡통의자.png'],
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '깡통', '인테리어'],
    retailAvailable: true,
  },
];

export const SHOP_PRODUCTS = PRODUCTS.filter(p => p.retailAvailable);

export function formatPrice(price: number | null): string {
  if (!price) return '가격 문의';
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
