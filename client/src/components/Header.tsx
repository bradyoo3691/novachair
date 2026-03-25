// NovaChair Header Component
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingCart, Search, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const NAV_LINKS = [
  { label: '홈', href: '/' },
  { label: '전체 상품', href: '/products' },
  { label: '도매 안내', href: '/wholesale' },
  { label: 'BEST', href: '/products?sort=best' },
  { label: '문의하기', href: '/contact' },
];

export default function Header() {
  const [location] = useLocation();
  const { items } = useCart();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b border-[#E8E0D5]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@300&display=swap');
      `}</style>

      {/* Top bar */}
      <div className="bg-[#1C1C1E] text-[#F5F0EB] text-xs py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>도매 문의: 0507-1402-6431</span>
            <span className="text-[#C4714A]">|</span>
            <span>대량 구매 [도매 안내] 배너 참고</span>
            <span className="text-[#C4714A]">·</span>
            <span>무료배송 (수량 협의)</span>
          </div>
          <a href="tel:0507-1402-6431" className="flex items-center gap-1 hover:text-[#C4714A] transition-colors">
            <Phone size={12} />
            <span>0507-1402-6431</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4 flex items-center justify-center relative">
        {/* Logo - Center */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            {/* Chair Icon SVG */}
            <svg
              width="32" height="38"
              viewBox="0 0 36 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* 등받이 상단 가로 */}
              <rect x="4" y="2" width="28" height="3.5" rx="1.75" fill="#2D9B5A"/>
              {/* 등받이 세로 기둥 좌 */}
              <rect x="4" y="2" width="3.5" height="18" rx="1.75" fill="#2D9B5A"/>
              {/* 등받이 세로 기둥 우 */}
              <rect x="28.5" y="2" width="3.5" height="18" rx="1.75" fill="#2D9B5A"/>
              {/* 좌판 */}
              <rect x="2" y="18" width="32" height="4" rx="2" fill="#2D9B5A"/>
              {/* 앞다리 좌 */}
              <rect x="4" y="22" width="3.5" height="16" rx="1.75" fill="#2D9B5A"/>
              {/* 앞다리 우 */}
              <rect x="28.5" y="22" width="3.5" height="16" rx="1.75" fill="#2D9B5A"/>
              {/* 발판 가로 */}
              <rect x="4" y="35" width="28" height="3" rx="1.5" fill="#2D9B5A"/>
            </svg>

            {/* Text */}
            <div className="flex flex-col">
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(20px, 2.8vw, 34px)',
                  letterSpacing: '0.04em',
                  color: '#1C1C1E',
                  lineHeight: 1,
                }}
              >
                NOVA CHAIR
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 'clamp(7px, 0.9vw, 10px)',
                  letterSpacing: '0.5em',
                  color: '#1C1C1E',
                  marginTop: '5px',
                }}
              >
                BEYOND THE CHAIR
              </span>
            </div>
          </div>
        </Link>

        {/* Right actions - Absolute positioned */}
        <div className="absolute right-0 flex items-center gap-4">
          <button className="p-2 hover:bg-[#E8E0D5] rounded transition-colors">
            <Search size={20} className="text-[#1C1C1E]" />
          </button>
          <button className="relative p-2 hover:bg-[#E8E0D5] rounded transition-colors">
            <ShoppingCart size={20} className="text-[#1C1C1E]" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-[#C4714A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <a href="tel:0507-1402-6431" className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1C1C1E] hover:text-[#C4714A] transition-colors">
            <Phone size={16} />
            <span>0507-1402-6431</span>
          </a>
        </div>
      </div>

      {/* Navigation banner */}
      <div className="bg-[#E8E0D5] border-t border-[#D5CCBF]">
        <div className="container">
          <div className="flex items-center justify-center gap-8 py-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`text-sm font-semibold transition-all relative ${
                    location === link.href
                      ? 'text-[#1C1C1E]'
                      : 'text-[#1C1C1E] hover:text-[#C4714A]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#C4714A] transition-all duration-300 ${
                      location === link.href ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Side banner - 국내 직영공장 */}
      <div className="fixed right-0 top-32 z-40 hidden lg:block">
        <div className="bg-[#1C1C1E] text-[#F5F0EB] py-3 px-2 text-center">
          <p className="text-xs font-semibold tracking-widest">국내 직영공장 운영</p>
        </div>
      </div>
    </header>
  );
}
