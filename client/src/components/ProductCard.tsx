// NovaChair Product Card Component
// Design: Scandinavian Minimalism + Industrial Edge

import { ShoppingCart, Eye } from 'lucide-react';
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
  const finalPrice = getDiscountedPrice(product.price, product.discount);
  const badge = product.badge ? BADGE_CONFIG[product.badge] : null;

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />

        {/* Badge */}
        {badge && (
          <div
            className="absolute top-3 left-3 nova-tag z-10"
            style={{ background: badge.bg, color: badge.text }}
          >
            {badge.label}
          </div>
        )}

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-3 right-3 nova-tag z-10 bg-[#C4714A] text-white">
            -{product.discount}%
          </div>
        )}

        {/* Overlay */}
        <div className="product-overlay">
          <div className="w-full p-4 flex gap-2">
            <button
              onClick={() => {
                addToCart(product, 1, false);
                toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#F5F0EB] text-[#1C1C1E] text-xs font-semibold tracking-wide hover:bg-[#C4714A] hover:text-white transition-colors"
            >
              <ShoppingCart size={14} />
              <span>담기</span>
            </button>
            <Link href={`/product/${product.id}`}>
              <button className="w-10 h-10 flex items-center justify-center bg-[#F5F0EB]/20 border border-[#F5F0EB]/40 text-[#F5F0EB] hover:bg-[#F5F0EB] hover:text-[#1C1C1E] transition-colors">
                <Eye size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] text-[#888] tracking-widest uppercase mb-1">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-[#1C1C1E] hover:text-[#C4714A] transition-colors truncate cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-[#888] mt-1 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div>
            {product.discount ? (
              <div className="flex items-baseline gap-2">
                <span className="nova-mono text-base font-bold text-[#1C1C1E]">
                  {formatPrice(finalPrice)}
                </span>
                <span className="nova-mono text-xs text-[#888] line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="nova-mono text-base font-bold text-[#1C1C1E]">
                {formatPrice(product.price)}
              </span>
            )}
            <p className="text-[10px] text-[#C4714A] mt-0.5 nova-mono">
              도매: {formatPrice(product.wholesalePrice)}
            </p>
          </div>
          <div className="text-[10px] text-[#888]">
            재고 {product.stock}개
          </div>
        </div>
      </div>
    </div>
  );
}
