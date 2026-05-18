// NovaChair - Product Data & Types

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
  purchaseUrl: string;
}

export const CATEGORIES = [
  { slug: 'all', name: '전체', icon: '◈' },
  { slug: 'office-chair', name: '오피스 체어', icon: '◉' },
  { slug: 'gaming-chair', name: '게이밍 체어', icon: '◈' },
  { slug: 'sofa', name: '소파', icon: '◎' },
  { slug: 'table', name: '테이블', icon: '▣' },
  { slug: 'storage', name: '수납/선반', icon: '▤' },
];

const BASE = 'https://raw.githubusercontent.com/bradyoo3691/novachair/main/client/public/';

export const PRODUCTS: Product[] = [
  {
    id: 'nc-001',
    name: '깡통의자',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 189000,
    wholesalePrice: 145000,
    wholesaleMinQty: 5,
    description: '심플하고 세련된 디자인의 깡통의자. 다양한 색상과 공간에 어울리는 미니멀 디자인입니다.',
    shortDesc: '심플한 깡통의자',
    image: `${BASE}ggangtong_black.png`,
    images: [
      `${BASE}ggangtong_black.png`,
      `${BASE}ggangtong_blue.png`,
      `${BASE}ggangtong_ivory.png`,
      `${BASE}ggangtong_orange.png`,
      `${BASE}ggangtong_red.png`,
    ],
    detailImage: `${BASE}ggangtong_dedtail.jpg`,
    badge: 'best',
    stock: 45,
    specs: {
      '소재': '메탈 프레임',
      '색상': '블랙, 블루, 아이보리, 오렌지, 레드',
      '하중': '최대 100kg',
      '팔걸이': '없음',
      '보증': '1년',
    },
    tags: ['심플', '미니멀', '메탈'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13527892221',
  },
  {
    id: 'nc-002',
    name: '두꺼비 1호',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 249000,
    wholesalePrice: 189000,
    wholesaleMinQty: 5,
    description: '인체공학적 설계의 두꺼비 1호 의자. 편안한 앉음감과 세련된 디자인이 특징입니다.',
    shortDesc: '두꺼비 1호 의자',
    image: `${BASE}ggubi_1-1.jpg`,
    images: [
      `${BASE}ggubi_1-1.jpg`,
      `${BASE}ggubi_1-2.jpg`,
      `${BASE}ggubi_1-3.png`,
      `${BASE}ggubi_1-4.png`,
      `${BASE}ggubi_1-5.png`,
    ],
    detailImage: `${BASE}ggubi_1_detail.jpg`,
    badge: 'best',
    stock: 38,
    specs: {
      '소재': '패브릭',
      '프레임': '메탈',
      '하중': '최대 120kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['인체공학', '패브릭'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13402036513',
  },
  {
    id: 'nc-003',
    name: '두꺼비 2호',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 279000,
    wholesalePrice: 210000,
    wholesaleMinQty: 5,
    description: '편안한 앉음감의 두꺼비 2호 의자. 다양한 색상 옵션이 있습니다.',
    shortDesc: '두꺼비 2호 의자',
    image: `${BASE}ggubi_2-1.jpg`,
    images: [
      `${BASE}ggubi_2-1.jpg`,
      `${BASE}ggubi_2-2.jpg`,
      `${BASE}ggubi_2-3.jpg`,
      `${BASE}ggubi_2-4.jpg`,
      `${BASE}ggubi_2-5.jpg`,
    ],
    detailImage: `${BASE}ggubi_2_detail.jpg`,
    stock: 32,
    specs: {
      '소재': '패브릭',
      '프레임': '메탈',
      '하중': '최대 120kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['패브릭', '다색상'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13462124490',
  },
  {
    id: 'nc-004',
    name: '두꺼비 3호',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 299000,
    wholesalePrice: 225000,
    wholesaleMinQty: 5,
    description: '프리미엄 패브릭의 두꺼비 3호 의자. 고급스러운 디자인과 편안함을 제공합니다.',
    shortDesc: '두꺼비 3호 의자',
    image: `${BASE}ggubi_3-1.jpg`,
    images: [
      `${BASE}ggubi_3-1.jpg`,
      `${BASE}ggubi_3-2.jpg`,
      `${BASE}ggubi_3-3.jpg`,
      `${BASE}ggubi_3-4.jpg`,
    ],
    detailImage: `${BASE}ggubi_3_detail.jpg`,
    stock: 28,
    specs: {
      '소재': '프리미엄 패브릭',
      '프레임': '메탈',
      '하중': '최대 120kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['프리미엄', '패브릭'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13467843870',
  },
  {
    id: 'nc-005',
    name: '두꺼비 4호',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 329000,
    wholesalePrice: 249000,
    wholesaleMinQty: 5,
    description: '고급스러운 디자인의 두꺼비 4호 의자. 최상의 편안함을 제공합니다.',
    shortDesc: '두꺼비 4호 의자',
    image: `${BASE}ggubi_4-1.jpg`,
    images: [
      `${BASE}ggubi_4-1.jpg`,
      `${BASE}ggubi_4-2.jpg`,
      `${BASE}ggubi_4-3.jpg`,
      `${BASE}ggubi_4-4.jpg`,
    ],
    detailImage: `${BASE}ggubi_4_detail.jpg`,
    stock: 25,
    specs: {
      '소재': '프리미엄 패브릭',
      '프레임': '메탈',
      '하중': '최대 130kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['프리미엄', '고급'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13468157649',
  },
  {
    id: 'nc-006',
    name: '두꺼비 5호 (팔걸이 있음)',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 379000,
    wholesalePrice: 289000,
    wholesaleMinQty: 5,
    description: '팔걸이가 있는 프리미엄 두꺼비 5호. 최고급 편안함을 제공합니다.',
    shortDesc: '두꺼비 5호 (팔걸이 있음)',
    image: `${BASE}ggubi_5o-0.jpg`,
    images: [
      `${BASE}ggubi_5o-0.jpg`,
      `${BASE}ggubi_5o-1.png`,
      `${BASE}ggubi_5o-2.png`,
      `${BASE}ggubi_5o-3.png`,
    ],
    detailImage: `${BASE}ggubi_5o_detail.jpg`,
    stock: 20,
    specs: {
      '소재': '프리미엄 패브릭',
      '프레임': '메탈',
      '하중': '최대 130kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['프리미엄', '팔걸이'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13485782036',
  },
  {
    id: 'nc-007',
    name: '두꺼비 5호 (팔걸이 없음)',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 349000,
    wholesalePrice: 265000,
    wholesaleMinQty: 5,
    description: '팔걸이가 없는 두꺼비 5호. 깔끔한 디자인의 프리미엄 의자입니다.',
    shortDesc: '두꺼비 5호 (팔걸이 없음)',
    image: `${BASE}ggubi_5x-1.jpg`,
    images: [
      `${BASE}ggubi_5x-1.jpg`,
      `${BASE}ggubi_5x-2.png`,
      `${BASE}ggubi_5x-3.png`,
      `${BASE}ggubi_5x-4.png`,
    ],
    detailImage: `${BASE}ggubi_5x_detail.jpg`,
    stock: 22,
    specs: {
      '소재': '프리미엄 패브릭',
      '프레임': '메탈',
      '하중': '최대 130kg',
      '팔걸이': '없음',
      '보증': '2년',
    },
    tags: ['프리미엄', '미니멀'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13486534951',
  },
  {
    id: 'nc-008',
    name: '두꺼비 5-1호',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 359000,
    wholesalePrice: 272000,
    wholesaleMinQty: 5,
    description: '다리가 고정된 두꺼비 5-1호. 안정적인 사용감이 특징입니다.',
    shortDesc: '두꺼비 5-1호 (다리고정)',
    image: `${BASE}ggubi_5-1-1.jpg`,
    images: [
      `${BASE}ggubi_5-1-1.jpg`,
      `${BASE}ggubi_5-1-2.png`,
      `${BASE}ggubi_5-1-3.png`,
      `${BASE}ggubi_5-1-4.png`,
      `${BASE}ggubi_5-1-5.jpg`,
    ],
    detailImage: `${BASE}ggubi_5-1_detail.jpg`,
    stock: 18,
    specs: {
      '소재': '프리미엄 패브릭',
      '프레임': '메탈',
      '하중': '최대 130kg',
      '다리': '고정형',
      '보증': '2년',
    },
    tags: ['안정적', '고정형'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13493520256',
  },
  {
    id: 'nc-009',
    name: '마틱 6호',
    category: '게이밍 체어',
    categorySlug: 'gaming-chair',
    price: 449000,
    wholesalePrice: 340000,
    wholesaleMinQty: 3,
    description: '게이밍과 업무용 겸용 마틱 6호. 다양한 색상으로 공간을 연출할 수 있습니다.',
    shortDesc: '마틱 6호 의자',
    image: `${BASE}matic_6-1.png`,
    images: [
      `${BASE}matic_6-1.png`,
      `${BASE}matic_6-2.png`,
      `${BASE}matic_6-3.png`,
      `${BASE}matic_6-4.png`,
      `${BASE}matic_6-5.png`,
    ],
    detailImage: `${BASE}matic_6_detail.jpg`,
    badge: 'best',
    stock: 30,
    specs: {
      '소재': '메시 + 패브릭',
      '프레임': '메탈',
      '하중': '최대 150kg',
      '팔걸이': '있음',
      '보증': '2년',
    },
    tags: ['게이밍', '업무용', '다색상'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13458545925',
  },
  {
    id: 'nc-010',
    name: '튤립',
    category: '오피스 체어',
    categorySlug: 'office-chair',
    price: 599000,
    wholesalePrice: 455000,
    wholesaleMinQty: 2,
    description: '우아한 디자인의 튤립 의자. 공간을 한층 업그레이드시켜줍니다.',
    shortDesc: '튤립 의자',
    image: `${BASE}tulip_1.png`,
    images: [
      `${BASE}tulip_1.png`,
      `${BASE}tulip_2.png`,
      `${BASE}tulip_3.png`,
      `${BASE}tulip_4.png`,
      `${BASE}tulip_5.png`,
    ],
    detailImage: `${BASE}tulip_detail.jpg`,
    badge: 'best',
    stock: 15,
    specs: {
      '소재': '패브릭',
      '프레임': '메탈',
      '하중': '최대 120kg',
      '팔걸이': '없음',
      '보증': '2년',
    },
    tags: ['우아한', '디자인'],
    purchaseUrl: 'https://smartstore.naver.com/happyone118/products/13413355327',
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

export function getBestProducts(): Product[] {
  return PRODUCTS.filter((p) => p.badge === 'best');
}
