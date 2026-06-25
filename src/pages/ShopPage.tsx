import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Featured');

  // Sync category from URL query param
  useEffect(() => {
    if (categoryParam) {
      const mapping: Record<string, string> = {
        luxury: 'Luxury',
        bath: 'Bath',
        beach: 'Beach',
        hand: 'Hand',
        face: 'Face',
        'hand-face': 'Hand'
      };
      const mapped = mapping[categoryParam.toLowerCase()];
      if (mapped) {
        setSelectedCategory(mapped);
      }
    } else {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  const categories = ['All', 'Bath', 'Hand', 'Face', 'Beach', 'Luxury'];
  const materials = ['All', 'Cotton', 'Microfiber', 'Bamboo'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesMaterial = selectedMaterial === 'All' || 
                              p.material.toLowerCase().includes(selectedMaterial.toLowerCase());
        return matchesSearch && matchesCategory && matchesMaterial;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating') return b.rating - a.rating;
        return 0; // Default: Featured
      });
  }, [searchQuery, selectedCategory, selectedMaterial, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-text-dark mb-4 uppercase tracking-widest">
            The Collection
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            Discover our range of premium towels, designed for ultimate comfort and durability.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search our towels..."
              className="w-full bg-white border border-gray-100 py-4 pl-12 pr-4 focus:outline-none focus:border-accent-gold transition-colors font-sans text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4">
            <div className="relative group">
              <select 
                className="appearance-none bg-white border border-gray-100 py-4 pl-6 pr-12 focus:outline-none focus:border-accent-gold transition-colors font-sans text-xs font-bold uppercase tracking-widest cursor-pointer"
                value={selectedCategory}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedCategory(val);
                  if (val === 'All') {
                    searchParams.delete('category');
                  } else {
                    searchParams.set('category', val.toLowerCase());
                  }
                  setSearchParams(searchParams);
                }}
              >
                {categories.map(c => <option key={c} value={c}>Category: {c}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
            </div>

            <div className="relative group">
              <select 
                className="appearance-none bg-white border border-gray-100 py-4 pl-6 pr-12 focus:outline-none focus:border-accent-gold transition-colors font-sans text-xs font-bold uppercase tracking-widest cursor-pointer"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
              >
                {materials.map(m => <option key={m} value={m}>Material: {m}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
            </div>

            <div className="relative group">
              <select 
                className="appearance-none bg-white border border-gray-100 py-4 pl-6 pr-12 focus:outline-none focus:border-accent-gold transition-colors font-sans text-xs font-bold uppercase tracking-widest cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Featured">Sort: Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== 'All' || selectedMaterial !== 'All' || searchQuery) && (
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mr-2">Active Filters:</span>
            {selectedCategory !== 'All' && (
              <span className="bg-beige-light px-3 py-1 text-[10px] font-bold uppercase flex items-center gap-2">
                {selectedCategory}
                <X size={12} className="cursor-pointer" onClick={() => {
                  setSelectedCategory('All');
                  searchParams.delete('category');
                  setSearchParams(searchParams);
                }} />
              </span>
            )}
            {selectedMaterial !== 'All' && (
              <span className="bg-beige-light px-3 py-1 text-[10px] font-bold uppercase flex items-center gap-2">
                {selectedMaterial}
                <X size={12} className="cursor-pointer" onClick={() => setSelectedMaterial('All')} />
              </span>
            )}
            {searchQuery && (
              <span className="bg-beige-light px-3 py-1 text-[10px] font-bold uppercase flex items-center gap-2">
                "{searchQuery}"
                <X size={12} className="cursor-pointer" onClick={() => setSearchQuery('')} />
              </span>
            )}
            <button 
              onClick={() => { 
                setSelectedCategory('All'); 
                setSelectedMaterial('All'); 
                setSearchQuery(''); 
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="text-[10px] uppercase font-bold tracking-widest text-accent-gold underline underline-offset-4"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Results Info */}
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-10">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center border border-dashed border-gray-200">
            <p className="text-gray-400 font-serif italic text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => { 
                setSelectedCategory('All'); 
                setSelectedMaterial('All'); 
                setSearchQuery(''); 
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="mt-6 lux-button-outline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;

