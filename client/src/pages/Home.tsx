// NovaChair Home Page

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Star, Phone } from 'lucide-react';
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

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="nova-heading text-3xl md:text-4xl text-[#F5F0EB] mb-2">
                의자 개별 구매 가능
              </h2>
              <h3 className="nova-heading text-2xl md:text-3xl text-[#C4714A] mb-4">
                의자 대량구매를 고민중이신가요?
              </h3>
              <p className="text-[#888] text-sm mb-5 leading-relaxed">
                10개 이상 주문 시 아래 전화문의 부탁드립니다.
              </p>
              <a href="tel:0507-1402-6431" className="inline-flex items-center gap-3 bg-[#C4714A] text-white px-6 py-3 hover:bg-[#b5613d] transition-colors">
                <Phone size={18} />
                <span className="text-xl font-bold tracking-widest">0507-1402-6431</span>
              </a>

              <div className="mt-5">
                <a
                  href="/wholesale"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/wholesale';
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="flex items-center gap-2 text-sm text-[#888] hover:text-[#F5F0EB] transition-colors"
                >
                  <span>도매 안내 보기</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:min-w-[300px]">
              {[
                { icon: '🏭', label: '사출직영공장 운영', sub: '남양주 위치' },
                { icon: '🏆', label: '올림픽, 군부대, 공공기관', sub: '납품 이력 보유' },
                { icon: '🚚', label: '도매문의시 협의에 의한 공장 직영배송', sub: '배송비 없음' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-white/5 border border-white/10 px-4 py-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[#F5F0EB] text-sm font-semibold">{item.label}</p>
                    <p className="text-[#C4714A] text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
