import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block">
              Curated for you
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-dark">
              Featured Collections
            </h2>
          </div>
          <Link 
            to="/shop" 
            className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-accent-gold transition-colors duration-300"
          >
            View All Products
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

