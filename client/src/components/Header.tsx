// NovaChair Header Component

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingCart, Search, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const NAV_LINKS = [
  { label: '홈', href: '/' },
  {
    label: '전체 상품',
    href: '/products',
    dropdown: [
      { label: 'BEST', href: '/products?sort=best' },
      { label: '전체 상품', href: '/products' },
    ],
  },
  { label: '인테리어 의자', href: '/category/interior' },
  { label: '사무실 의자', href: '/category/office' },
  { label: '학원/강의실 의자', href: '/category/classroom' },
  { label: '고깃집 의자', href: '/category/restaurant' },
  { label: '스토어', href: '/shop' },
  { label: '도매 안내', href: '/wholesale' },
  { label: '문의하기', href: '/contact' },
];

export default function Header() {
  const [location] = useLocation();
  const { items } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b border-[#E8E0D5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inter:wght@300&display=swap');
      `}</style>

      {/* Top bar */}
      <div className="hidden md:block bg-[#1C1C1E] text-[#F5F0EB] text-xs py-2">
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
      <div
        style={{
          maxHeight: scrolled ? '0px' : '140px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
        className="hidden md:block"
      >
        <div className="container py-4 flex items-center justify-center relative">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(22px, 3vw, 40px)', letterSpacing: '0.15em', color: '#1C1C1E', lineHeight: 1 }}>
                NOVA CHAIR
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 'clamp(7px, 0.9vw, 10px)', letterSpacing: '0.5em', color: '#1C1C1E', marginTop: '5px' }}>
                BEYOND THE CHAIR
              </span>
            </div>
          </Link>
          <div className="absolute right-0 flex items-center gap-4">
            <button className="p-2 hover:bg-[#E8E0D5] rounded transition-colors">
              <Search size={20} className="text-[#1C1C1E]" />
            </button>
            <button className="relative p-2 hover:bg-[#E8E0D5] rounded transition-colors">
              <ShoppingCart size={20} className="text-[#1C1C1E]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#C4714A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <a href="tel:0507-1402-6431" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1C1C1E] hover:text-[#C4714A] transition-colors">
              <Phone size={16} />
              <span>0507-1402-6431</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation banner */}
      <div className="bg-[#E8E0D5] border-t border-[#D5CCBF]">
        <div className="container">

          {/* 데스크탑 네비 */}
          <div className="hidden md:flex items-center py-2">
            <div style={{ maxWidth: scrolled ? '160px' : '0px', overflow: 'hidden', transition: 'max-width 0.3s ease', whiteSpace: 'nowrap' }}>
              <Link href="/">
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '15px', letterSpacing: '0.1em', color: '#1C1C1E', cursor: 'pointer', marginRight: '16px', display: 'inline-block' }}>
                  NOVA CHAIR
                </span>
              </Link>
            </div>

            <div className={`flex items-center gap-6 ${scrolled ? '' : 'flex-1 justify-center'}`}>
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 text-[0.8rem] font-semibold transition-all relative whitespace-nowrap ${
                        location.startsWith('/products') ? 'text-[#C4714A]' : 'text-[#1C1C1E] hover:text-[#C4714A]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C4714A] transition-all duration-300 ${location.startsWith('/products') ? 'w-full' : 'w-0'}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white border border-[#E8E0D5] shadow-md z-50 min-w-[120px]">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href}>
                            <button
                              onClick={() => setDropdownOpen(false)}
                              className="w-full text-left px-4 py-2.5 text-sm font-semibold text-[#1C1C1E] hover:bg-[#FAF8F5] hover:text-[#C4714A] transition-colors"
                            >
                              {item.label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <button
                      className={`text-[0.8rem] font-semibold transition-all relative whitespace-nowrap ${
                        location === link.href ? 'text-[#C4714A]' : 'text-[#1C1C1E] hover:text-[#C4714A]'
                      }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C4714A] transition-all duration-300 ${location === link.href ? 'w-full' : 'w-0'}`} />
                    </button>
                  </Link>
                )
              )}
            </div>

            <div style={{ maxWidth: scrolled ? '80px' : '0px', overflow: 'hidden', transition: 'max-width 0.3s ease' }} className="flex items-center gap-2 ml-auto">
              <button className="p-1.5 hover:bg-[#D5CCBF] rounded transition-colors">
                <Search size={16} className="text-[#1C1C1E]" />
              </button>
              <button className="relative p-1.5 hover:bg-[#D5CCBF] rounded transition-colors">
                <ShoppingCart size={16} className="text-[#1C1C1E]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#C4714A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>
            </div>
          </div>

          {/* 모바일 네비 */}
          <div className="flex md:hidden items-center justify-between py-2">
            <Link href="/">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '14px', letterSpacing: '0.1em', color: '#1C1C1E' }}>
                NOVA CHAIR
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <button className="relative p-1.5">
                <ShoppingCart size={18} className="text-[#1C1C1E]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#C4714A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 text-[#1C1C1E]">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* 모바일 드롭다운 */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-[#D5CCBF] pb-2">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <p className="px-2 pt-3 pb-1 text-xs text-[#888] font-semibold tracking-widest uppercase">전체 상품</p>
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <button
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-full text-left px-4 py-2.5 text-sm font-semibold text-[#1C1C1E] hover:text-[#C4714A] transition-colors"
                        >
                          {item.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left px-2 py-3 text-sm font-semibold transition-colors ${
                        location === link.href ? 'text-[#C4714A]' : 'text-[#1C1C1E] hover:text-[#C4714A]'
                      }`}
                    >
                      {link.label}
                    </button>
                  </Link>
                )
              )}
              <a href="tel:0507-1402-6431" className="flex items-center gap-2 px-2 py-3 text-sm text-[#1C1C1E]">
                <Phone size={14} />
                <span>0507-1402-6431</span>
              </a>
            </div>
          )}

        </div>
      </div>

      {/* Side banner */}
      <div className="fixed right-0 top-32 z-40 hidden lg:block">
        <div className="bg-[#1C1C1E] text-[#F5F0EB] py-3 px-2 text-center">
          <p className="text-xs font-semibold tracking-widest">국내 직영공장 운영</p>
        </div>
      </div>
    </header>
  );
}
