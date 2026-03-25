// NovaChair Products Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'best') {
      result = [...result].sort((a, b) => (b.discount || 0) - (a.discount || 0));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#F5F0EB] border-b border-[#E8E0D5] py-8">
        <div className="container">
          <h1 className="nova-heading text-4xl text-[#1C1C1E] mb-2">전체 상품</h1>
          <p className="text-sm text-[#888]">총 {filteredProducts.length}개의 상품</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#1C1C1E] mb-4 uppercase tracking-wide">카테고리</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-all ${
                      selectedCategory === cat.slug
                        ? 'bg-[#1C1C1E] text-[#F5F0EB] font-semibold'
                        : 'text-[#888] hover:text-[#1C1C1E] hover:bg-[#E8E0D5]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort filter */}
            <div>
              <h3 className="text-sm font-semibold text-[#1C1C1E] mb-4 uppercase tracking-wide">정렬</h3>
              <div className="space-y-2">
                {[
                  { value: 'newest', label: '최신순' },
                  { value: 'best', label: 'BEST' },
                  { value: 'price-low', label: '가격 낮은순' },
                  { value: 'price-high', label: '가격 높은순' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded transition-all ${
                      sortBy === option.value
                        ? 'bg-[#1C1C1E] text-[#F5F0EB] font-semibold'
                        : 'text-[#888] hover:text-[#1C1C1E] hover:bg-[#E8E0D5]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#888] mb-4">해당하는 상품이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
