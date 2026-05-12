// NovaChair Shop Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { ExternalLink, Phone, ShoppingBag, ChevronRight } from 'lucide-react';
import { SHOP_PRODUCTS, formatPrice } from '@/lib/products';

const NAVER_STORE_URL = 'https://smartstore.naver.com/happyone118';

export default function Shop() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      {/* Hero Banner */}
      <section className="bg-[#1C1C1E] py-16 md:py-24">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">NOVA CHAIR STORE</p>
          <h1 className="nova-heading text-4xl md:text-6xl text-[#F5F0EB] mb-6">
            노바체어<br />공식 스토어
          </h1>
          <p className="text-[#888] text-lg max-w-xl mb-8 leading-relaxed">
            국내 직영공장에서 직접 제작한 플라스틱 의자를 합리적인 가격으로 만나보세요.<br />
            네이버 스마트스토어에서 안전하게 구매하실 수 있습니다.
          </p>
          
            href={NAVER_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-6 py-3 font-semibold text-sm hover:bg-[#02b350] transition-colors"
          >
            <ShoppingBag size={16} />
            <span>네이버 스마트스토어 바로가기</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* 안내 배너 */}
      <section className="bg-[#F5F0EB] border-b border-[#E8E0D5]">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#1C1C1E]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C4714A] rounded-full" />
              <span>국내 직영공장 직접 제작</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C4714A] rounded-full" />
              <span>네이버페이 안전결제</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C4714A] rounded-full" />
              <span>도매 문의: 0507-1402-6431</span>
            </div>
          </div>
        </div>
      </section>

      {/* 제품 그리드 */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">PRODUCTS</p>
              <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">전체 제품</h2>
            </div>
            
              href={NAVER_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[#888] hover:text-[#C4714A] transition-colors"
            >
              <span>스토어에서 구매</span>
              <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {SHOP_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-[#E8E0D5] hover:border-[#C4714A] transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => window.open(NAVER_STORE_URL, '_blank')}
              >
                {/* 이미지 */}
                <div className="relative aspect-square bg-[#F5F0EB] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=준비중';
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#C4714A] text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase">
                      {product.badge === 'best' ? 'BEST' : product.badge === 'new' ? 'NEW' : product.badge}
                    </span>
                  )}
                  {/* 호버 오버레이 */}
                  <div className={`absolute inset-0 bg-[#1C1C1E]/60 flex items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-2 bg-[#03C75A] text-white px-4 py-2 text-xs font-semibold">
                      <ShoppingBag size={14} />
                      <span>스토어에서 구매</span>
                    </div>
                  </div>
                </div>

                {/* 정보 */}
                <div className="p-4">
                  <p className="text-[10px] text-[#888] tracking-widest uppercase mb-1">NOVA CHAIR</p>
                  <h3 className="text-sm font-semibold text-[#1C1C1E] leading-snug mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#1C1C1E]">
                      {product.price ? formatPrice(product.price) : (
                        <span className="text-[#C4714A] text-xs font-semibold">가격 문의</span>
                      )}
                    </p>
                    <span className="text-[10px] text-[#888]">도매 문의 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 도매 안내 배너 */}
      <section className="bg-[#1C1C1E] py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">WHOLESALE</p>
              <h2 className="nova-heading text-3xl md:text-4xl text-[#F5F0EB] mb-3">
                대량 구매 문의
              </h2>
              <p className="text-[#888] leading-relaxed max-w-md">
                식당, 카페, 행사장 등 대량 구매는 도매가로 제공합니다.<br />
                전담 담당자가 최적의 견적을 안내해드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              
                href="tel:0507-1402-6431"
                className="inline-flex items-center gap-2 bg-[#C4714A] text-white px-6 py-3 font-semibold text-sm hover:bg-[#b5613d] transition-colors whitespace-nowrap"
              >
                <Phone size={16} />
                <span>0507-1402-6431</span>
              </a>
              <p className="text-[#888] text-xs text-center">평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
