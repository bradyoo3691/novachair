// NovaChair Home Page

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const REVIEWS = [
  {
    text: '도매로 오피스 체어 20개를 주문했는데, 품질이 정말 뛰어납니다. 가격 대비 최고의 선택이었어요.',
    author: '김민준',
    role: '인테리어 디자이너',
    product: '깡통의자',
  },
  {
    text: '사무실 리뉴얼하면서 의자를 함께 구매했습니다. 디자인이 딱 원하던 분위기예요.',
    author: '이서연',
    role: '스타트업 대표',
    product: '두꺼비 1호',
  },
  {
    text: '도매 파트너로 6개월째 거래 중입니다. 납기 정확하고 AS도 빠릅니다. 강력 추천합니다.',
    author: '박지훈',
    role: '가구 리셀러',
    product: '마틱 6호',
  },
];

export default function Home() {
  const [bestProducts, setBestProducts] = useState(PRODUCTS.slice(0, 9));
  const [categorySection, setCategorySection] = useState({ visible: false });

  useEffect(() => {
    setTimeout(() => setCategorySection({ visible: true }), 200);
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* 1. Wholesale Section */}
      <section className="relative py-14 bg-[#1C1C1E] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-wholesale-Srvmk5eEJaPvHAw4u62fmx.webp"
            alt="도매"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container relative z-10">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">WHOLESALE</p>
          <h2 className="nova-heading text-3xl md:text-4xl text-[#F5F0EB] mb-4">
            도매 파트너를<br />찾고 계신가요?
          </h2>
          <p className="text-[#888] text-base max-w-xl mb-6 leading-relaxed">
            5개 이상 주문 시 도매가 적용됩니다. 인테리어 업체, 오피스 구매 담당자, 리셀러 모두 환영합니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { num: '2,400+', label: '누적 판매 제품' },
              { num: '98%', label: '고객 만족도' },
              { num: '150+', label: '도매 파트너사' },
              { num: '5년', label: '최대 품질 보증' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="nova-mono text-2xl font-bold text-[#F5F0EB] mb-1">{stat.num}</p>
                <p className="text-xs text-[#888]">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link href="/wholesale">
            <button className="nova-btn-primary">
              <span>도매 안내 보기</span>
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Products Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">PRODUCTS</p>
              <h2 className="nova-heading text-4xl md:text-5xl text-[#1C1C1E]">노바 체어</h2>
            </div>
            <Link href="/products">
              <button className="nova-btn-primary">
                <span>전체 보기</span>
                <ArrowRight size={10} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {bestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Reviews Section */}
      <section className="py-20 bg-white border-t border-[#E8E0D5]">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">REVIEWS</p>
          <h2 className="nova-heading text-4xl md:text-5xl text-[#1C1C1E] mb-12">고객 후기</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-[#FAF8F5] p-8 border border-[#E8E0D5]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#C4714A] text-[#C4714A]" />
                  ))}
                </div>
                <p className="text-sm text-[#1C1C1E] leading-relaxed mb-6">"{review.text}"</p>
                <div className="border-t border-[#E8E0D5] pt-4">
                  <p className="font-semibold text-[#1C1C1E] text-sm">{review.author}</p>
                  <p className="text-xs text-[#888] mb-2">{review.role}</p>
                  <p className="text-xs text-[#C4714A] font-medium">{review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
