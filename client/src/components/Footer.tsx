// NovaChair Footer Component
// Design: Scandinavian Minimalism + Industrial Edge

import { Link } from 'wouter';
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-[#F5F0EB]">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-2xl font-bold text-[#F5F0EB]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Nova<span className="text-[#C4714A]">Chair</span>
              </span>
              <p className="text-[9px] tracking-[0.2em] text-[#888] uppercase mt-1">
                Premium Furniture
              </p>
            </div>
            <p className="text-sm text-[#888] leading-relaxed mb-6">
              프리미엄 의자와 가구를 합리적인 가격으로 제공하는 도매/소매 전문 쇼핑몰입니다.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#888] hover:text-[#C4714A] hover:border-[#C4714A] transition-colors"
                aria-label="인스타그램"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-[#333] flex items-center justify-center text-[#888] hover:text-[#C4714A] hover:border-[#C4714A] transition-colors"
                aria-label="유튜브"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-5">
              쇼핑
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/products', label: '전체 상품' },
                { href: '/products?category=office-chair', label: '오피스 체어' },
                { href: '/products?category=gaming-chair', label: '게이밍 체어' },
                { href: '/products?category=sofa', label: '소파' },
                { href: '/products?category=table', label: '테이블' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-[#888] hover:text-[#F5F0EB] transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-5">
              도매 안내
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/wholesale', label: '도매 혜택 안내' },
                { href: '/wholesale#process', label: '주문 프로세스' },
                { href: '/wholesale#faq', label: '자주 묻는 질문' },
                { href: '/about', label: '브랜드 소개' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-[#888] hover:text-[#F5F0EB] transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#888] mb-5">
              고객 지원
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#C4714A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#F5F0EB] nova-mono">02-1234-5678</p>
                  <p className="text-xs text-[#888] mt-0.5">평일 09:00 – 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#C4714A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#F5F0EB]">info@novachair.kr</p>
                  <p className="text-xs text-[#888] mt-0.5">24시간 이내 답변</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C4714A] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#F5F0EB]">서울시 강남구 테헤란로 123</p>
                  <p className="text-xs text-[#888] mt-0.5">노바체어 쇼룸</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555]">
            © 2024 NovaChair. All rights reserved. | 사업자등록번호: 123-45-67890
          </p>
          <div className="flex gap-4 text-xs text-[#555]">
            <a href="#" className="hover:text-[#888] transition-colors">이용약관</a>
            <a href="#" className="hover:text-[#888] transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-[#888] transition-colors">환불정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
