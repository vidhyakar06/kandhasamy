import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useProductModal } from '../context/ProductModalContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openModal } = useProductModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div 
        onClick={() => openModal(product)}
        className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 cursor-pointer"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-white text-text-dark text-[10px] font-bold tracking-widest uppercase">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-accent-gold text-white text-[10px] font-bold tracking-widest uppercase">
              Best Seller
            </span>
          )}
        </div>

        {/* Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />


      </div>

      {/* Info */}
      <div 
        onClick={() => openModal(product)}
        className="text-center px-2 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1 block">
          {product.category}
        </span>
        <h3 className="text-base font-serif text-text-dark mb-1 group-hover:text-accent-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-text-dark">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;

