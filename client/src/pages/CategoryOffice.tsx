import { Link } from 'wouter';
import { ExternalLink } from 'lucide-react';
import { PRODUCTS, formatPrice } from '@/lib/products';

const OFFICE_IDS = ['nc-006', 'nc-007', 'nc-008', 'nc-009'];

export default function CategoryOffice() {
  const products = PRODUCTS.filter((p) => OFFICE_IDS.includes(p.id));

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#1C1C1E] py-14">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">OFFICE CHAIR</p>
          <h1 className="nova-heading text-4xl md:text-5xl text-[#F5F0EB] mb-4">사무실 의자</h1>
          <p className="text-[#888] text-base max-w-xl leading-relaxed">
            장시간 착석에도 편안한 사무용 의자 라인업입니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <a key={product.id} href={product.purchaseUrl} target="_blank" rel="noopener noreferrer" className="group bg-white border border-[#E8E0D5] hover:border-[#C4714A] transition-all duration-300">
                <div className="relative aspect-square bg-[#F5F0EB] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x400?text=준비중'; }} />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#C4714A] text-white text-[10px] font-bold px-2 py-1 tracking-wider uppercase">
                      {product.badge === 'best' ? 'BEST' : 'NEW'}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-[#1C1C1E]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 bg-[#03C75A] text-white px-4 py-2 text-xs font-semibold">
                      <ExternalLink size={14} />
                      <span>스토어에서 구매</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-[#888] tracking-widest uppercase mb-1">NOVA CHAIR</p>
                  <h3 className="text-sm font-semibold text-[#1C1C1E] leading-snug mb-2">{product.name}</h3>
                  <p className="text-sm font-bold text-[#1C1C1E]">{formatPrice(product.price)}</p>
                  <p className="text-xs text-[#888] mt-1">도매가: {formatPrice(product.wholesalePrice)}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
