// NovaChair About Page
// Design: Scandinavian Minimalism + Industrial Edge

import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="bg-[#1C1C1E] py-24">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">About</p>
          <h1 className="nova-heading text-5xl md:text-6xl text-[#F5F0EB] mb-6">
            노바체어 이야기
          </h1>
          <p className="text-[#888] text-lg max-w-xl leading-relaxed">
            2018년 설립 이후 프리미엄 가구를 합리적인 가격으로 제공하기 위해 끊임없이 노력해 왔습니다.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 bg-[#F5F0EB]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
              <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E] mb-6">
                공간을 완성하는<br />가구의 철학
              </h2>
              <div className="space-y-4 text-sm text-[#888] leading-relaxed">
                <p>
                  노바체어는 "좋은 가구는 삶의 질을 바꾼다"는 믿음에서 시작되었습니다. 하루의 대부분을 보내는 의자와 책상, 소파가 단순한 가구가 아닌 삶의 동반자가 되어야 한다고 생각합니다.
                </p>
                <p>
                  스칸디나비안 디자인의 미니멀리즘과 인더스트리얼 감성을 결합하여, 기능적이면서도 아름다운 가구를 선보입니다. 모든 제품은 엄격한 품질 기준을 통과한 후 고객에게 전달됩니다.
                </p>
                <p>
                  소매 고객부터 기업 도매 파트너까지, 노바체어는 모든 고객에게 동일한 수준의 서비스와 품질을 약속합니다.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D5]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-main-4oEfrbfAKWPqt4ChzCGmcU.webp"
                alt="노바체어 쇼룸"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#E8E0D5]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Values</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">브랜드 가치</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: '품질 우선',
                desc: '모든 제품은 내구성, 안전성, 디자인 세 가지 기준을 모두 충족해야 합니다. 타협 없는 품질 관리로 고객의 신뢰를 지킵니다.',
              },
              {
                num: '02',
                title: '합리적 가격',
                desc: '프리미엄 품질을 합리적인 가격에 제공합니다. 도매 파트너십을 통해 유통 마진을 최소화하고 그 혜택을 고객에게 돌려드립니다.',
              },
              {
                num: '03',
                title: '지속 가능성',
                desc: '환경을 생각하는 소재 선택과 생산 과정을 통해 지속 가능한 가구 산업을 만들어 나갑니다.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-[#F5F0EB] p-8">
                <p className="nova-mono text-5xl font-bold text-[#E8E0D5] mb-4">{item.num}</p>
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-3">{item.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F0EB]">
        <div className="container text-center">
          <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E] mb-6">
            지금 바로 시작하세요
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <button className="nova-btn-primary">
                <span>전체 상품 보기</span>
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/wholesale">
              <button className="nova-btn-outline">
                <span>도매 안내</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
