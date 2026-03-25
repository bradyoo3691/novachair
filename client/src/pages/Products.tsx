// NovaChair Products Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES, type Product } from '@/lib/products';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name';

export default function Products() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = params.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);

  useEffect(() => {
    const newCategory = params.get('category') || 'all';
    setActiveCategory(newCategory);
  }, [search]);

  const filtered = PRODUCTS
    .filter((p) => activeCategory === 'all' || p.categorySlug === activeCategory)
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Page header */}
      <div className="bg-[#1C1C1E] py-14">
        <div className="container">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-3">Products</p>
          <h1 className="nova-heading text-4xl md:text-5xl text-[#F5F0EB]">전체 상품</h1>
          <p className="text-[#888] text-sm mt-3">
            {sorted.length}개의 상품이 있습니다
          </p>
        </div>
      </div>

      <div className="container py-10">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat.slug
                    ? 'bg-[#1C1C1E] text-[#F5F0EB]'
                    : 'bg-[#E8E0D5] text-[#1C1C1E] hover:bg-[#D5CCBF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort + Filter */}
          <div className="flex gap-3 flex-shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 text-xs bg-[#E8E0D5] text-[#1C1C1E] border-none outline-none cursor-pointer"
            >
              <option value="default">기본 정렬</option>
              <option value="price-asc">가격 낮은순</option>
              <option value="price-desc">가격 높은순</option>
              <option value="name">이름순</option>
            </select>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-all ${
                filterOpen ? 'bg-[#1C1C1E] text-[#F5F0EB]' : 'bg-[#E8E0D5] text-[#1C1C1E] hover:bg-[#D5CCBF]'
              }`}
            >
              <SlidersHorizontal size={14} />
              필터
            </button>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-[#E8E0D5] p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-[#1C1C1E]">가격 필터</h3>
              <button onClick={() => setFilterOpen(false)} className="text-[#888] hover:text-[#1C1C1E]">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                {[
                  { label: '전체', range: [0, 2000000] as [number, number] },
                  { label: '~30만원', range: [0, 300000] as [number, number] },
                  { label: '30~60만원', range: [300000, 600000] as [number, number] },
                  { label: '60만원~', range: [600000, 2000000] as [number, number] },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setPriceRange(opt.range)}
                    className={`px-4 py-2 text-xs transition-all ${
                      priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                        ? 'bg-[#1C1C1E] text-[#F5F0EB]'
                        : 'bg-[#F5F0EB] text-[#1C1C1E] hover:bg-[#D5CCBF]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        {sorted.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[#888] text-sm">해당 조건의 상품이 없습니다.</p>
            <button
              onClick={() => { setActiveCategory('all'); setPriceRange([0, 2000000]); }}
              className="mt-4 nova-btn-outline text-xs py-2.5"
            >
              <span>필터 초기화</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
