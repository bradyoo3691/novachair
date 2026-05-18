// NovaChair Product Detail Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { ShoppingCart, ArrowLeft, Plus, Minus, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductById, formatPrice, getDiscountedPrice, PRODUCTS } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isWholesale, setIsWholesale] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'spec' | 'shipping'>('desc');

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888] mb-4">상품을 찾을 수 없습니다.</p>
          <Link href="/products">
            <button className="nova-btn-primary"><span>상품 목록으로</span></button>
          </Link>
        </div>
      </main>
    );
  }

  const finalPrice = isWholesale
    ? product.wholesalePrice
    : getDiscountedPrice(product.price, product.discount);

  const meetsWholesaleMin = quantity >= product.wholesaleMinQty;

  const relatedProducts = PRODUCTS
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, isWholesale);
    toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb */}
      <div className="bg-[#F5F0EB] border-b border-[#E8E0D5]">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-xs text-[#888]">
            <Link href="/"><span className="hover:text-[#1C1C1E] transition-colors">홈</span></Link>
            <span>/</span>
            <Link href="/products"><span className="hover:text-[#1C1C1E] transition-colors">상품</span></Link>
            <span>/</span>
            <Link href={`/products?category=${product.categorySlug}`}>
              <span className="hover:text-[#1C1C1E] transition-colors">{product.category}</span>
            </Link>
            <span>/</span>
            <span className="text-[#1C1C1E]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Back button */}
        <Link href="/products">
          <button className="flex items-center gap-2 text-sm text-[#888] hover:text-[#1C1C1E] transition-colors mb-8">
            <ArrowLeft size={16} />
            상품 목록으로
          </button>
        </Link>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
          {/* Image */}
          <div className="space-y-4">
            <div className="aspect-square md:aspect-[4/3] overflow-hidden bg-[#E8E0D5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className="w-20 h-20 overflow-hidden bg-[#E8E0D5] border-2 border-[#1C1C1E]"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] text-[#888] tracking-widest uppercase mb-2">
              {product.category}
            </p>
            <h1 className="nova-heading text-3xl md:text-4xl text-[#1C1C1E] mb-3">
              {product.name}
            </h1>
            <p className="text-sm text-[#888] leading-relaxed mb-6">{product.shortDesc}</p>

            {/* Price */}
            <div className="bg-[#E8E0D5] p-5 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-[#888] mb-1">
                    {isWholesale ? '도매가' : '소매가'}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="nova-mono text-3xl font-bold text-[#1C1C1E]">
                      {formatPrice(finalPrice)}
                    </span>
                    {!isWholesale && product.discount && (
                      <span className="nova-mono text-sm text-[#888] line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                  {product.discount && !isWholesale && (
                    <span className="text-xs text-[#C4714A] font-medium">
                      {product.discount}% 할인 적용
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#888] mb-1">도매가</p>
                  <p className="nova-mono text-lg font-semibold text-[#C4714A]">
                    {formatPrice(product.wholesalePrice)}
                  </p>
                  <p className="text-[10px] text-[#888]">
                    {product.wholesaleMinQty}개 이상 주문 시
                  </p>
                </div>
              </div>
            </div>

            {/* Wholesale mode toggle */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setIsWholesale(false)}
                className={`flex-1 py-2.5 text-xs font-medium tracking-wide transition-all ${
                  !isWholesale ? 'bg-[#1C1C1E] text-[#F5F0EB]' : 'bg-[#E8E0D5] text-[#888] hover:bg-[#D5CCBF]'
                }`}
              >
                소매 구매
              </button>
              <button
                onClick={() => { setIsWholesale(true); if (quantity < product.wholesaleMinQty) setQuantity(product.wholesaleMinQty); }}
                className={`flex-1 py-2.5 text-xs font-medium tracking-wide transition-all ${
                  isWholesale ? 'bg-[#C4714A] text-[#F5F0EB]' : 'bg-[#E8E0D5] text-[#888] hover:bg-[#D5CCBF]'
                }`}
              >
                도매 구매 ({product.wholesaleMinQty}개+)
              </button>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-[#888]">수량</span>
              <div className="flex items-center border border-[#E8E0D5]">
                <button
                  onClick={() => setQuantity(Math.max(isWholesale ? product.wholesaleMinQty : 1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#1C1C1E] hover:bg-[#E8E0D5] transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="nova-mono w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#1C1C1E] hover:bg-[#E8E0D5] transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="nova-mono text-sm text-[#888]">
                소계: {formatPrice(finalPrice * quantity)}
              </span>
            </div>

            {isWholesale && !meetsWholesaleMin && (
              <p className="text-xs text-[#C4714A] mb-4">
                도매가 적용을 위해 최소 {product.wholesaleMinQty}개 이상 주문해 주세요.
              </p>
            )}

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="nova-btn-primary w-full mb-3">
              <ShoppingCart size={16} />
              <span>장바구니 담기</span>
            </button>
            <a
              href={product.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nova-btn-outline w-full block text-center"
            >
              <span>해당 제품 구매하기</span>
            </a>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Truck, text: '50만원 이상\n무료배송' },
                { icon: Shield, text: `${product.specs['보증'] || '1년'}\n품질 보증` },
                { icon: RotateCcw, text: '7일 이내\n무료 반품' },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-2 p-3 bg-[#E8E0D5] text-center">
                  <item.icon size={18} className="text-[#C4714A]" />
                  <p className="text-[10px] text-[#888] whitespace-pre-line leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {product.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 bg-[#E8E0D5] text-[#888] tracking-wide">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 상세 이미지 또는 탭 */}
        <div className="mb-16">
          {product.detailImage ? (
            /* detailImage 있으면 탭 없이 풀너비 이미지 바로 표시 */
            <div className="flex justify-center">
              <img
                src={product.detailImage}
                alt={`${product.name} 상세 설명`}
                className="w-full md:w-2/3"
                style={{ height: 'auto', display: 'block' }}
              />
            </div>
          ) : (
            /* detailImage 없으면 기존 탭 방식 */
            <>
              <div className="flex border-b border-[#E8E0D5] mb-8">
                {[
                  { key: 'desc', label: '상품 설명' },
                  { key: 'spec', label: '상세 스펙' },
                  { key: 'shipping', label: '배송/반품' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`px-6 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                      activeTab === tab.key
                        ? 'border-[#C4714A] text-[#C4714A]'
                        : 'border-transparent text-[#888] hover:text-[#1C1C1E]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'desc' && (
                <p className="text-sm text-[#1C1C1E] leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              )}

              {activeTab === 'spec' && (
                <div className="max-w-lg">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key} className="border-b border-[#E8E0D5]">
                          <td className="py-3 pr-6 text-[#888] w-32 font-medium">{key}</td>
                          <td className="py-3 text-[#1C1C1E]">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="max-w-2xl space-y-4 text-sm text-[#1C1C1E]">
                  {[
                    { title: '배송 안내', content: '주문 후 1~3 영업일 이내 출고됩니다. 50만원 이상 주문 시 무료배송이며, 미만 시 배송비 3,000원이 부과됩니다.' },
                    { title: '도서산간 지역', content: '도서산간 지역의 경우 추가 배송비가 발생할 수 있습니다. 주문 전 고객센터로 문의해 주세요.' },
                    { title: '반품/교환', content: '상품 수령 후 7일 이내 반품/교환 가능합니다. 단, 사용 흔적이 있거나 포장이 훼손된 경우 불가합니다.' },
                    { title: '도매 배송', content: '도매 주문의 경우 별도 협의를 통해 배송 일정을 조율합니다. 대량 주문 시 전담 담당자가 배정됩니다.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <Check size={16} className="text-[#C4714A] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-[#888] leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="nova-divider mb-10" />
            <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Related</p>
            <h2 className="nova-heading text-2xl text-[#1C1C1E] mb-8">연관 상품</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
