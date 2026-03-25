// NovaChair Header Component
// Design: Scandinavian Minimalism + Industrial Edge
// Colors: Off-white bg, Deep Charcoal text, Terracotta accent

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';

const NAV_LINKS = [
  { href: '/', label: '홈' },
  { href: '/products', label: '전체 상품' },
  { href: '/wholesale', label: '도매 안내' },
  { href: '/about', label: '브랜드 소개' },
];

export default function Header() {
  const [location] = useLocation();
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1C1C1E] text-[#F5F0EB] text-xs py-2 px-4 text-center tracking-widest font-light hidden md:block">
        <span className="nova-mono">도매 문의: 02-1234-5678</span>
        <span className="mx-4 opacity-30">|</span>
        <span>5개 이상 주문 시 도매가 적용 · 무료배송 (50만원 이상)</span>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F0EB]/95 backdrop-blur-md shadow-sm'
            : 'bg-[#F5F0EB]'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C1C1E]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Nova<span className="text-[#C4714A]">Chair</span>
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#888] uppercase font-medium mt-0.5 hidden md:block">
                  Premium Furniture
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                      location === link.href
                        ? 'text-[#C4714A]'
                        : 'text-[#1C1C1E] hover:text-[#C4714A]'
                    }`}
                    style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#C4714A] transition-all duration-300 ${
                        location === link.href ? 'w-full' : 'w-0 peer-hover:w-full nav-underline'
                      }`}
                    />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-[#1C1C1E] hover:text-[#C4714A] transition-colors"
                aria-label="검색"
                onClick={() => {
                  // Search placeholder
                }}
              >
                <Search size={20} />
              </button>

              <button
                className="relative p-2 text-[#1C1C1E] hover:text-[#C4714A] transition-colors"
                aria-label="장바구니"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-[#C4714A] text-white text-[10px] font-bold rounded-full flex items-center justify-center nova-mono">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              <a
                href="tel:02-1234-5678"
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-[#1C1C1E] hover:text-[#C4714A] transition-colors"
              >
                <Phone size={14} />
                <span>02-1234-5678</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 text-[#1C1C1E]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="메뉴"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Thin border */}
        <div className="nova-divider" />

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#F5F0EB] border-t border-[#E8E0D5]">
            <nav className="container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-3 text-sm font-medium border-b border-[#E8E0D5] ${
                      location === link.href ? 'text-[#C4714A]' : 'text-[#1C1C1E]'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-3 flex items-center gap-2 text-sm text-[#888]">
                <Phone size={14} />
                <span>도매 문의: 02-1234-5678</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
