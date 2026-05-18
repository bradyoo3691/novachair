import { ExternalLink, ShoppingBag } from 'lucide-react';

const NAVER_STORE_URL = 'https://smartstore.naver.com/happyone118';

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      <section className="bg-[#1C1C1E] py-16 md:py-24">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">NOVA CHAIR STORE</p>
          <h1 className="nova-heading text-4xl md:text-6xl text-[#F5F0EB] mb-6">
            노바체어
            <br />
            공식 스토어
          </h1>
          <p className="text-[#888] text-lg max-w-xl mb-8 leading-relaxed">
            국내 직영공장에서 직접 제작한 플라스틱 의자를 합리적인 가격으로 만나보세요.
            네이버 스마트스토어에서 안전하게 구매하실 수 있습니다.
          </p>
          <a href={NAVER_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-6 py-3 font-semibold text-sm hover:bg-[#02b350] transition-colors">
            <ShoppingBag size={16} />
            <span>네이버 스마트스토어 바로가기</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

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

    </main>
  );
}
