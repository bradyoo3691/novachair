// NovaChair Cart Drawer Component
// Design: Scandinavian Minimalism + Industrial Edge

import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, getDiscountedPrice } from '@/lib/products';
import { toast } from 'sonner';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F5F0EB] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D5]">
          <div>
            <h2
              className="text-xl font-bold text-[#1C1C1E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              장바구니
            </h2>
            <p className="text-xs text-[#888] mt-0.5 nova-mono">{totalItems}개 상품</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#1C1C1E] hover:text-[#C4714A] transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-[#E8E0D5]" />
              <p className="text-[#888] text-sm">장바구니가 비어 있습니다</p>
              <button
                onClick={() => setIsOpen(false)}
                className="nova-btn-outline text-xs py-2.5 px-6"
              >
                <span>쇼핑 계속하기</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => {
                const price = item.isWholesale
                  ? item.product.wholesalePrice
                  : getDiscountedPrice(item.product.price, item.product.discount);
                return (
                  <div
                    key={`${item.product.id}-${item.isWholesale}`}
                    className="flex gap-4 py-4 border-b border-[#E8E0D5]"
                  >
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-[#E8E0D5]">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="text-sm font-semibold text-[#1C1C1E] truncate">
                            {item.product.name}
                          </p>
                          {item.isWholesale && (
                            <span className="text-[10px] bg-[#1C1C1E] text-[#F5F0EB] px-1.5 py-0.5 nova-mono">
                              도매가
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#888] hover:text-[#C4714A] transition-colors flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="nova-mono text-sm font-medium text-[#1C1C1E] mt-1">
                        {formatPrice(price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 border border-[#E8E0D5] flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="nova-mono text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 border border-[#E8E0D5] flex items-center justify-center text-[#1C1C1E] hover:border-[#1C1C1E] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <span className="nova-mono text-xs text-[#888] ml-2">
                          = {formatPrice(price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E8E0D5] bg-[#F5F0EB]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#888]">합계</span>
              <span className="nova-mono text-xl font-bold text-[#1C1C1E]">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button
              className="nova-btn-primary w-full"
              onClick={() => {
                toast.success('주문 기능은 준비 중입니다.');
              }}
            >
              <span>주문하기</span>
            </button>
            <p className="text-xs text-[#888] text-center mt-3">
              50만원 이상 무료배송 · 도서산간 제외
            </p>
          </div>
        )}
      </div>
    </>
  );
}
