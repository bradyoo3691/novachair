// NovaChair Product Detail Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft, Check, Truck, Shield, RotateCcw, ExternalLink } from 'lucide-react';
import { getProductById, formatPrice, getDiscountedPrice, PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
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

  const finalPrice = getDiscountedPrice(product.price, product.discount);

  const relatedProducts = PRODUCTS
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

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
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden bg-[#E8E0D5] cursor-pointer border-2 transition-all ${
                      selectedImage === i ? 'border-[#C4714A]' : 'border-transparent hover:border-[#1C1C1E]'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
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
              <p className="text-xs text-[#888] mb-1">판매가</p>
              <div className="flex items-baseline gap-3">
                <span className="nova-mono text-3xl font-bold text-[#1C1C1E]">
                  {formatPrice(finalPrice)}
                </span>
                {product.discount && (
                  <span className="nova-mono text-sm text-[#888] line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              {product.discount && (
                <span className="text-xs text-[#C4714A] font-medium">
                  {product.discount}% 할인 적용
                </span>
              )}
            </div>

            {/* 구매 버튼 */}
            {product.smartstoreUrl ? (
              
                href={product.smartstoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-primary w-full flex items-center justify-center gap-2 mb-3"
              >
                <ExternalLink size={16} />
                <span>네이버 스마트스토어에서 구매</span>
              </a>
            ) : (
              
                href="tel:05071402631"
                className="nova-btn-primary w-full flex items-center justify-center gap-2 mb-3"
              >
                <span>📞 구매 문의: 0507-1402-6431</span>
              </a>
            )}

            {/* 도매 문의 버튼 */}
            
              href="tel:05071402631"
              className="nova-btn-outline w-full flex items-center justify-center gap-2"
            >
              <span>📞 도매 문의: 0507-1402-6431</span>
            </a>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Truck, text: '50만원 이상\n무료배송' },
                { icon: Shield, text: '1년\n품질 보증' },
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
            <div className="flex justify-center">
              <img
                src={product.detailImage}
                alt={`${product.name} 상세 설명`}
                className="w-full md:w-2/3"
                style={{ height: 'auto', display: 'block' }}
              />
            </div>
          ) : (
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
                    { title: '도매 문의', content: '도매 주문의 경우 전화 문의 부탁드립니다. 0507-1402-6431' },
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
