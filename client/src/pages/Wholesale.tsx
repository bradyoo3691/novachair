// NovaChair Wholesale Page
// Design: Scandinavian Minimalism + Industrial Edge

import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Phone, Mail, Building2, Users, Package, TrendingDown } from 'lucide-react';
import { PRODUCTS, formatPrice } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const WHOLESALE_PRODUCTS = PRODUCTS.slice(0, 4);

export default function Wholesale() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1C1C1E] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474293513/N58bZLfHdioH99RE25RZcN/hero-wholesale-Srvmk5eEJaPvHAw4u62fmx.webp"
            alt="도매 안내"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">Wholesale</p>
          <h1 className="nova-heading text-5xl md:text-6xl text-[#F5F0EB] mb-6">
            도매 파트너십
          </h1>
          <p className="text-[#E8E0D5]/80 text-lg max-w-xl leading-relaxed mb-8">
            인테리어 업체, 기업 구매 담당자, 리셀러를 위한 특별 도매 프로그램. 5개 이상 주문 시 즉시 도매가가 적용됩니다.
          </p>
          <a href="tel:02-1234-5678" className="nova-btn-primary inline-flex">
            <Phone size={16} />
            <span>도매 상담 전화</span>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F5F0EB]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Benefits</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">도매 혜택</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                title: '최대 30% 할인',
                desc: '소매가 대비 최대 30% 할인된 도매가 적용. 수량이 많을수록 추가 할인 협의 가능.',
              },
              {
                icon: Package,
                title: '5개 이상 즉시 적용',
                desc: '별도 계약 없이 5개 이상 주문 시 자동으로 도매가가 적용됩니다.',
              },
              {
                icon: Users,
                title: '전담 영업 담당자',
                desc: '도매 파트너에게는 전담 영업 담당자가 배정되어 맞춤형 서비스를 제공합니다.',
              },
              {
                icon: Building2,
                title: '세금계산서 발행',
                desc: '사업자 등록 업체 대상 세금계산서 발행 및 후불 결제 협의 가능.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#E8E0D5] p-6">
                <item.icon size={28} className="text-[#C4714A] mb-4" />
                <h3 className="text-base font-bold text-[#1C1C1E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Pricing</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">도매 가격표</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1C1E] text-[#F5F0EB]">
                  <th className="text-left py-4 px-5 font-medium tracking-wide">상품명</th>
                  <th className="text-right py-4 px-5 font-medium tracking-wide">소매가</th>
                  <th className="text-right py-4 px-5 font-medium tracking-wide text-[#C4714A]">도매가</th>
                  <th className="text-right py-4 px-5 font-medium tracking-wide">최소 수량</th>
                  <th className="text-right py-4 px-5 font-medium tracking-wide">할인율</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((product, i) => {
                  const discount = Math.round((1 - product.wholesalePrice / product.price) * 100);
                  return (
                    <tr
                      key={product.id}
                      className={`border-b border-[#E8E0D5] ${i % 2 === 0 ? 'bg-[#F5F0EB]' : 'bg-[#FAF8F5]'}`}
                    >
                      <td className="py-4 px-5">
                        <div>
                          <p className="font-semibold text-[#1C1C1E]">{product.name}</p>
                          <p className="text-xs text-[#888]">{product.category}</p>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-right nova-mono text-[#888]">
                        {formatPrice(product.price)}
                      </td>
                      <td className="py-4 px-5 text-right nova-mono font-bold text-[#C4714A]">
                        {formatPrice(product.wholesalePrice)}
                      </td>
                      <td className="py-4 px-5 text-right nova-mono text-[#888]">
                        {product.wholesaleMinQty}개
                      </td>
                      <td className="py-4 px-5 text-right">
                        <span className="nova-tag bg-[#C4714A] text-white text-[10px]">
                          -{discount}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-[#E8E0D5]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Process</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">주문 프로세스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '상담 신청', desc: '전화 또는 이메일로 도매 상담을 신청합니다.' },
              { step: '02', title: '견적 확인', desc: '원하시는 상품과 수량에 맞는 도매 견적서를 발송합니다.' },
              { step: '03', title: '주문 확정', desc: '견적 확인 후 주문을 확정하고 계약서를 작성합니다.' },
              { step: '04', title: '납품 완료', desc: '일정에 맞춰 납품 및 설치 서비스를 제공합니다.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#F5F0EB] p-6">
                  <p className="nova-mono text-4xl font-bold text-[#E8E0D5] mb-4">{item.step}</p>
                  <h3 className="text-base font-bold text-[#1C1C1E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#F5F0EB]">
        <div className="container">
          <div className="mb-12">
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">FAQ</p>
            <h2 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E]">자주 묻는 질문</h2>
          </div>
          <div className="max-w-2xl space-y-0">
            {[
              {
                q: '도매가는 어떻게 적용되나요?',
                a: '5개 이상 동일 상품 주문 시 자동으로 도매가가 적용됩니다. 별도 계약이나 사업자 등록 없이도 이용 가능합니다.',
              },
              {
                q: '세금계산서 발행이 가능한가요?',
                a: '사업자 등록이 된 업체의 경우 세금계산서 발행이 가능합니다. 주문 시 사업자 정보를 제공해 주세요.',
              },
              {
                q: '대량 주문 시 추가 할인이 가능한가요?',
                a: '20개 이상 주문 시 추가 할인 협의가 가능합니다. 전담 영업 담당자에게 문의해 주세요.',
              },
              {
                q: '샘플 주문이 가능한가요?',
                a: '도매 계약 전 샘플 1개를 소매가로 구매하실 수 있습니다. 샘플 구매 후 도매 계약 시 샘플 비용을 차감해 드립니다.',
              },
              {
                q: '납품 및 설치 서비스가 있나요?',
                a: '서울/경기 지역은 직접 납품 및 설치 서비스를 제공합니다. 그 외 지역은 별도 협의가 필요합니다.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#E8E0D5] py-5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#C4714A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1C1C1E] mb-2">{item.q}</p>
                    <p className="text-sm text-[#888] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1C1C1E]">
        <div className="container text-center">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="nova-heading text-4xl text-[#F5F0EB] mb-6">
            도매 상담을 시작하세요
          </h2>
          <p className="text-[#888] text-sm mb-8 max-w-md mx-auto">
            전담 영업 담당자가 최적의 도매 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:02-1234-5678" className="nova-btn-primary inline-flex">
              <Phone size={16} />
              <span>02-1234-5678</span>
            </a>
            <a href="mailto:wholesale@novachair.kr" className="nova-btn-outline border-[#F5F0EB]/40 text-[#F5F0EB] inline-flex">
              <Mail size={16} />
              <span>이메일 문의</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
