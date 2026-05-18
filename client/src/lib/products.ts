// NovaChair - Product Data & Types
// Design: Scandinavian Minimalism + Industrial Edge

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number | null;
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
  smartstoreUrl?: string;
}

export const CATEGORIES = [
  { slug: 'all', name: '전체', icon: '◈' },
  { slug: 'interior-chair', name: '인테리어 의자', icon: '◉' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'nc-101',
    name: '노바체어 두꺼비 1호 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 1호',
    image: '/ggubi_1-1.png',
    images: ['/ggubi_1-1.png', '/ggubi_1-2.png', '/ggubi_1-3.png', '/ggubi_1-4.png', '/ggubi_1-5.png'],
    detailImage: '/ggubi_1_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13402036513',
  },
  {
    id: 'nc-102',
    name: '노바체어 두꺼비 2호 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 2호',
    image: '/ggubi_2-1.png',
    images: ['/ggubi_2-1.png', '/ggubi_2-2.png', '/ggubi_2-3.png', '/ggubi_2-4.png', '/ggubi_2-5.png'],
    detailImage: '/ggubi_2_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13462124490',
  },
  {
    id: 'nc-103',
    name: '노바체어 두꺼비 3호 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 3호',
    image: '/ggubi_3-1.png',
    images: ['/ggubi_3-1.png', '/ggubi_3-2.png', '/ggubi_3-3.png', '/ggubi_3-4.png'],
    detailImage: '/ggubi_3_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13467843870',
  },
  {
    id: 'nc-104',
    name: '노바체어 두꺼비 4호 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '두꺼비 시리즈 4호',
    image: '/ggubi_4-1.png',
    images: ['/ggubi_4-1.png', '/ggubi_4-2.png', '/ggubi_4-3.png', '/ggubi_4-4.png'],
    detailImage: '/ggubi_4_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13468157649',
  },
  {
    id: 'nc-105',
    name: '노바체어 두꺼비 5호(팔걸이 있음) 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 팔걸이 포함.',
    shortDesc: '팔걸이 있는 두꺼비 5호',
    image: '/ggubi_5o-0.png',
    images: ['/ggubi_5o-0.png', '/ggubi_5o-1.png', '/ggubi_5o-2.png', '/ggubi_5o-3.png'],
    detailImage: '/ggubi_5o_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '팔걸이': '있음',
    },
    tags: ['플라스틱', '두꺼비', '팔걸이', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13485782036',
  },
  {
    id: 'nc-106',
    name: '노바체어 두꺼비 5호(팔걸이 없음) 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 팔걸이 없음.',
    shortDesc: '팔걸이 없는 두꺼비 5호',
    image: '/ggubi_5x-1.png',
    images: ['/ggubi_5x-1.png', '/ggubi_5x-2.png', '/ggubi_5x-3.png', '/ggubi_5x-4.png'],
    detailImage: '/ggubi_5x_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '팔걸이': '없음',
    },
    tags: ['플라스틱', '두꺼비', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13486534951',
  },
  {
    id: 'nc-107',
    name: '노바체어 두꺼비 5-1호(다리고정) 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자. 다리 고정형.',
    shortDesc: '다리 고정형 두꺼비 5-1호',
    image: '/ggubi_5-1-1.png',
    images: ['/ggubi_5-1-1.png', '/ggubi_5-1-2.png', '/ggubi_5-1-3.png', '/ggubi_5-1-4.png', '/ggubi_5-1-5.png'],
    detailImage: '/ggubi_5-1_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '다리': '고정형',
    },
    tags: ['플라스틱', '두꺼비', '고정다리', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13493520256',
  },
  {
    id: 'nc-108',
    name: '노바체어 매틱 6호 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '매틱 시리즈 6호',
    image: '/matic_6-1.png',
    images: ['/matic_6-1.png', '/matic_6-2.png', '/matic_6-3.png', '/matic_6-4.png', '/matic_6-5.png'],
    detailImage: '/matic_6_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '매틱', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13458545925',
  },
  {
    id: 'nc-109',
    name: '노바체어 튤립 의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '튤립 시리즈',
    image: '/tulip_1.png',
    images: ['/tulip_1.png', '/tulip_2.png', '/tulip_3.png', '/tulip_4.png', '/tulip_5.png'],
    detailImage: '/tulip_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
    },
    tags: ['플라스틱', '튤립', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13413355327',
  },
  {
    id: 'nc-110',
    name: '노바체어 깡통의자',
    category: '인테리어 의자',
    categorySlug: 'interior-chair',
    price: null,
    description: '국내 직영공장에서 제작한 플라스틱 인테리어 의자.',
    shortDesc: '깡통의자 시리즈',
    image: '/ggangtong_black.png',
    images: ['/ggangtong_black.png', '/ggangtong_blue.png', '/ggangtong_ivory.png', '/ggangtong_orange.png', '/ggangtong_red.png'],
    detailImage: '/ggangtong_detail.png',
    badge: 'new',
    stock: 500,
    specs: {
      '소재': 'PP (폴리프로필렌)',
      '제조': '국내 직영공장',
      '색상': '블랙 / 블루 / 아이보리 / 오렌지 / 레드',
    },
    tags: ['플라스틱', '깡통', '인테리어'],
    retailAvailable: true,
    smartstoreUrl: 'https://smartstore.naver.com/happyone118/products/13527892221',
  },
];

export const SHOP_PRODUCTS = PRODUCTS.filter(p => p.retailAvailable);

export function formatPrice(price: number | null): string {
  if (!price) return '가격 문의';
  return price.toLocaleString('ko-KR') + '원';
}

export function getDiscountedPrice(price: number | null, discount?: number): number {
  if (!price) return 0;
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
