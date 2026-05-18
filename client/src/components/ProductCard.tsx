// NovaChair Product Card Component
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import type { Product } from '@/lib/products';
import { formatPrice, getDiscountedPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const BADGE_CONFIG = {
  new: { label: 'NEW', bg: '#1C1C1E', text: '#F5F0EB' },
  best: { label: 'BEST', bg: '#C4714A', text: '#F5F0EB' },
  sale: { label: 'SALE', bg: '#C4714A', text: '#F5F0EB' },
  wholesale: { label: '도매', bg: '#E8E0D5', text: '#1C1C1E' },
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [hoveredImage, setHoveredImage] = useState(0);
  const finalPrice = getDiscountedPrice(product.price, product.discount);
  const badge = product.badge ? BADGE_CONFIG[product.badge] : null;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setHoveredImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setHoveredImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image-wrap relative">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.images[hoveredImage] || product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>

        {/* Badge */}
        {badge && (
          <div
            className="absolute top-2 left-2 nova-tag z-10 text-[10px] px-2 py-0.5"
            style={{ background: badge.bg, color: badge.text }}
          >
            {badge.label}
          </div>
        )}

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-2 right-2 nova-tag z-10 bg-[#C4714A] text-white text-[10px] px-2 py-0.5">
            -{product.discount}%
          </div>
        )}

        {/* Left/Right Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Thumbnails - hover to change image */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {product.images.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredImage(i)}
              className={`w-8 h-8 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                hoveredImage === i ? 'border-[#C4714A]' : 'border-[#E8E0D5] hover:border-[#888]'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Overlay */}
        <div className="product-overlay">
          <div className="w-full p-4 flex gap-2">
            <button
              onClick={() => {
                addToCart(product, 1, false);
                toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
              }}
              className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#F5F0EB] text-[#1C1C1E] text-xs font-semibold hover:bg-[#C4714A] hover:text-white transition-colors"
            >
              <ShoppingCart size={12} />
              <span>담기</span>
            </button>
            <Link href={`/product/${product.id}`}>
              <button className="w-9 h-9 flex items-center justify-center bg-[#F5F0EB]/20 border border-[#F5F0EB]/40 text-[#F5F0EB] hover:bg-[#F5F0EB] hover:text-[#1C1C1E] transition-colors">
                <Eye size={13} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-[#888] tracking-widest uppercase mb-0.5">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-[#1C1C1E] hover:text-[#C4714A] transition-colors truncate cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-[#888] mt-0.5 line-clamp-1 leading-relaxed">
          {product.shortDesc}
        </p>

        <div className="mt-2">
          {product.discount ? (
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm font-bold text-[#1C1C1E]">
                {formatPrice(finalPrice)}
              </span>
              <span className="text-xs text-[#888] line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-sm font-bold text-[#1C1C1E]">
              {formatPrice(product.price)}
            </span>
          )}
          <p className="text-[10px] text-[#C4714A] mt-0.5">
            도매: {formatPrice(product.wholesalePrice)}
          </p>
        </div>

        {/* 모바일 담기 버튼 */}
        <button
          onClick={() => {
            addToCart(product, 1, false);
            toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
          }}
          className="md:hidden w-full mt-2 py-2 flex items-center justify-center gap-1 bg-[#1C1C1E] text-[#F5F0EB] text-xs font-semibold rounded"
        >
          <ShoppingCart size={12} />
          <span>담기</span>
        </button>
      </div>
    </div>
  );
}
