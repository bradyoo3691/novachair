// NovaChair Home Page
// Design: Scandinavian Minimalism + Industrial Edge
// Sections: Hero, Categories, Best Products, Wholesale CTA, Brand Story

import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Star, Truck, Shield, Headphones, Award } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES, formatPrice } from '@/lib/products';

// Best products (badge: best or first 4)
const BEST_PRODUCTS = PRODUCTS.filter((p) => p.badge === 'best' || p.badge === 'new').slice(0, 4);
const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8);

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProducts = activeCategory === 'all'
    ? FEATURED_PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === activeCategory).slice(0, 8);

  const heroSection = useIntersection(0.1);
  const categorySection = useIntersection(0.1);
  const productsSection = useIntersection(0.05);
  const wholesaleSection = useIntersection(0.1);
  const statsSection = useIntersection(0.2);

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#1C1C1E]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-main-4oEfrbfAKWPqt4ChzCGmcU.webp"
            alt="NovaChair Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/90 via-[#1C1C1E]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 mb-6 animate-fade-in-up"
            >
              <span className="w-8 h-px bg-[#C4714A]" />
              <span className="text-[#C4714A] text-xs tracking-[0.25em] uppercase font-medium">
                Premium Furniture
              </span>
            </div>

            <h1
              className="nova-heading text-5xl md:text-6xl lg:text-7xl text-[#F5F0EB] mb-6 animate-fade-in-up-delay-1"
            >
              공간을 완성하는<br />
              <span className="text-[#C4714A] italic">프리미엄</span> 가구
            </h1>

            <p className="text-[#E8E0D5]/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up-delay-2">
              스칸디나비안 감성의 의자와 가구를 합리적인 가격으로. 소매부터 도매까지, 노바체어가 함께합니다.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Link href="/products">
                <button className="nova-btn-primary">
                  <span>전체 상품 보기</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/wholesale">
                <button className="nova-btn-outline border-[#F5F0EB]/60 text-[#F5F0EB] hover:text-[#1C1C1E]">
                  <span>도매 안내</span>
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-fade-in-up-delay-4">
              {[
                { value: '2,400+', label: '누적 판매' },
                { value: '98%', label: '고객 만족도' },
                { value: '5년', label: '품질 보증' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="nova-mono text-2xl font-bold text-[#F5F0EB]">{stat.value}</p>
                  <p className="text-xs text-[#888] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888]">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#888] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="bg-[#E8E0D5] py-5 border-y border-[#D5CCBF]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, text: '50만원 이상 무료배송' },
              { icon: Shield, text: '최대 5년 품질 보증' },
              { icon: Headphones, text: '전담 고객 지원' },
              { icon: Award, text: '도매 전문 파트너십' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon size={18} className="text-[#C4714A] flex-shrink-0" />
                <span className="text-xs font-medium text-[#1C1C1E]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY SECTION ===== */}
      <section className="py-20 bg-[#F5F0EB]" ref={categorySection.ref}>
        <div className="container">
          <div className={`mb-12 transition-all duration-700 ${categorySection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Categories</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">
              카테고리별 탐색
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.filter((c) => c.slug !== 'all').map((cat, i) => (
              <Link key={cat.slug} href={`/products?category=${cat.slug}`}>
                <div
                  className={`category-card p-6 bg-[#E8E0D5] hover:bg-[#1C1C1E] transition-all duration-300 cursor-pointer text-center transition-all duration-700 ${categorySection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="cat-icon text-2xl mb-3 text-[#C4714A] transition-colors">
                    {cat.icon}
                  </div>
                  <p className="cat-label text-sm font-semibold text-[#1C1C1E] transition-colors">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="py-20 bg-[#FAF8F5]" ref={productsSection.ref}>
        <div className="container">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 transition-all duration-700 ${productsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div>
              <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Products</p>
              <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">
                인기 상품
              </h2>
            </div>
            <Link href="/products">
              <button className="nova-btn-outline text-sm py-2.5">
                <span>전체 보기</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Category filter */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? 'bg-[#1C1C1E] text-[#F5F0EB]'
                    : 'bg-[#E8E0D5] text-[#1C1C1E] hover:bg-[#D5CCBF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`transition-all duration-500 ${productsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHOLESALE CTA ===== */}
      <section className="relative py-24 overflow-hidden" ref={wholesaleSection.ref}>
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-wholesale-Srvmk5eEJaPvHAw4u62fmx.webp"
            alt="도매 안내"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1C1E]/75" />
        </div>
        <div className="container relative z-10">
          <div className={`max-w-2xl transition-all duration-700 ${wholesaleSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">Wholesale</p>
            <h2 className="nova-heading text-4xl md:text-5xl text-[#F5F0EB] mb-6">
              도매 파트너를<br />찾고 계신가요?
            </h2>
            <p className="text-[#E8E0D5]/80 text-base leading-relaxed mb-8">
              5개 이상 주문 시 도매가 적용됩니다. 인테리어 업체, 오피스 구매 담당자, 리셀러 모두 환영합니다.
              전담 영업 담당자가 최적의 솔루션을 제안해 드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/wholesale">
                <button className="nova-btn-primary bg-[#C4714A] hover:bg-[#C4714A]">
                  <span>도매 안내 보기</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:02-1234-5678" className="nova-btn-outline border-[#F5F0EB]/60 text-[#F5F0EB]">
                <span>전화 상담</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-[#F5F0EB]" ref={statsSection.ref}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2,400+', label: '누적 판매 제품', sub: '소매 + 도매' },
              { value: '98%', label: '고객 만족도', sub: '리뷰 기반' },
              { value: '150+', label: '도매 파트너사', sub: '전국 인테리어 업체' },
              { value: '5년', label: '최대 품질 보증', sub: '원목 제품 기준' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ${statsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="nova-mono text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#1C1C1E] mb-1">{stat.label}</p>
                <p className="text-xs text-[#888]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 bg-[#E8E0D5]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Reviews</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">
              고객 후기
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: '김민준',
                role: '인테리어 디자이너',
                text: '도매로 오피스 체어 20개를 주문했는데, 품질이 정말 뛰어납니다. 가격 대비 최고의 선택이었어요.',
                rating: 5,
                product: 'Nova Ergo Pro',
              },
              {
                name: '이서연',
                role: '스타트업 대표',
                text: '사무실 리뉴얼하면서 체어와 테이블을 함께 구매했습니다. 스칸디나비안 감성이 딱 원하던 분위기예요.',
                rating: 5,
                product: 'Nova Classic Linen',
              },
              {
                name: '박지훈',
                role: '가구 리셀러',
                text: '도매 파트너로 6개월째 거래 중입니다. 납기 정확하고 AS도 빠릅니다. 강력 추천합니다.',
                rating: 5,
                product: 'Nova Walnut Table',
              },
            ].map((review) => (
              <div key={review.name} className="bg-[#F5F0EB] p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C4714A] text-[#C4714A]" />
                  ))}
                </div>
                <p className="text-sm text-[#1C1C1E] leading-relaxed mb-4">"{review.text}"</p>
                <div className="nova-divider mb-4" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C1E]">{review.name}</p>
                    <p className="text-xs text-[#888]">{review.role}</p>
                  </div>
                  <p className="text-xs text-[#C4714A] nova-mono">{review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
