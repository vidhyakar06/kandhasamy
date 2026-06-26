import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ShoppingCart, Check, Star, Shield, RefreshCw,
  ChevronLeft, ChevronRight, RotateCcw
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

/* ─── angle label icons ─── */
const ANGLE_ICONS = ['⊞', '▭', '▭', '◧', '◧'];

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);   // +1 forward / -1 backward
  const [added, setAdded]         = useState(false);

  useEffect(() => {
    setActiveIdx(0);
    setAdded(false);
  }, [product, isOpen]);

  if (!product) return null;

  const images = product.images;
  const labels = product.angleLabels ?? images.map((_, i) => `View ${i + 1}`);
  const hasMultiple = images.length > 1;

  const goTo = (idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };
  const prev = () => goTo((activeIdx - 1 + images.length) % images.length);
  const next = () => goTo((activeIdx + 1) % images.length);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  /* slide variants */
  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 z-[80] backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="pointer-events-auto bg-white w-full max-w-5xl max-h-[95vh] overflow-y-auto md:overflow-hidden rounded-none shadow-2xl flex flex-col md:flex-row relative"
            >
              {/* ── Close ── */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur hover:bg-gray-100 transition-colors rounded-full text-text-dark shadow-md"
              >
                <X size={20} />
              </button>

              {/* ═══════════════════════════════
                  LEFT — Multi-Angle Gallery
              ═══════════════════════════════ */}
              <div className="w-full md:w-[52%] bg-[#F7F5F2] flex flex-col h-auto md:h-full md:overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">

                {/* 360° badge */}
                {hasMultiple && (
                  <div className="flex items-center gap-1.5 px-5 pt-4 pb-0">
                    <RotateCcw size={13} className="text-accent-gold" />
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-accent-gold">
                      {images.length} Angle Views
                    </span>
                  </div>
                )}

                {/* Main image frame */}
                <div className="relative flex-grow flex items-center justify-center px-6 pt-4 pb-2 overflow-hidden">

                  {/* Badges */}
                  <div className="absolute top-5 left-8 z-10 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-3 py-1 bg-white text-text-dark text-[9px] font-bold tracking-widest uppercase shadow-sm">New</span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-3 py-1 bg-accent-gold text-white text-[9px] font-bold tracking-widest uppercase shadow-sm">Best Seller</span>
                    )}
                  </div>

                  {/* Prev / Next arrows */}
                  {hasMultiple && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all hover:scale-110"
                      >
                        <ChevronLeft size={18} className="text-text-dark" />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all hover:scale-110"
                      >
                        <ChevronRight size={18} className="text-text-dark" />
                      </button>
                    </>
                  )}

                  {/* Image with crossfade + slide */}
                  <div className="relative w-full max-w-[340px] aspect-[3/4] overflow-hidden shadow-lg">
                    <AnimatePresence custom={direction} mode="wait">
                      <motion.img
                        key={activeIdx}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.32, ease: 'easeInOut' }}
                        src={images[activeIdx]}
                        alt={`${product.name} — ${labels[activeIdx]}`}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {/* Angle label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3">
                      <p className="text-white text-[11px] font-semibold tracking-wider uppercase">
                        {labels[activeIdx]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Angle Selector Strip */}
                {hasMultiple && (
                  <div className="px-4 pb-5 pt-2">
                    {/* dot indicators */}
                    <div className="flex justify-center gap-1.5 mb-3">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          className={`transition-all rounded-full ${
                            i === activeIdx
                              ? 'w-5 h-2 bg-accent-gold'
                              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                    {/* thumbnail strip */}
                    <div className="flex gap-2 overflow-x-auto pb-1 justify-center">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          className="flex-shrink-0 flex flex-col items-center gap-1 group"
                        >
                          <div className={`w-14 h-[70px] overflow-hidden border-2 transition-all ${
                            i === activeIdx
                              ? 'border-accent-gold shadow-md scale-105'
                              : 'border-gray-200 hover:border-gray-400 group-hover:scale-105'
                          }`}>
                            <img
                              src={img}
                              alt={labels[i]}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className={`text-[9px] font-semibold tracking-wide uppercase leading-tight text-center max-w-[56px] transition-colors ${
                            i === activeIdx ? 'text-accent-gold' : 'text-gray-400 group-hover:text-gray-600'
                          }`}>
                            {labels[i]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ═══════════════════════════════
                  RIGHT — Product Details
              ═══════════════════════════════ */}
              <div className="w-full md:w-[48%] p-6 md:p-8 flex flex-col justify-between md:overflow-y-auto md:h-full">
                <div className="space-y-5">
                  {/* Category & Rating */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent-gold">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1.5 bg-[#F7F5F2] px-2.5 py-1 text-xs font-semibold text-text-dark">
                      <Star size={13} className="fill-accent-gold text-accent-gold" />
                      <span>{product.rating.toFixed(1)}</span>
                      <span className="text-gray-400 font-normal">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Name & Price */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-text-dark mb-2 leading-tight">
                      {product.name}
                    </h2>
                    <p className="text-xl font-medium text-text-dark">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="h-px bg-gray-100 w-full" />

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {product.description}
                  </p>



                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs border-y border-gray-100 py-4">
                    <div>
                      <span className="text-gray-400 uppercase tracking-wider block mb-1">Material</span>
                      <span className="text-text-dark font-semibold font-serif">{product.material}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 uppercase tracking-wider block mb-1">Sizes</span>
                      <span className="text-text-dark font-semibold">{product.sizes.join(', ')}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400 uppercase tracking-wider block mb-1">Colors / Styles</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {product.colors.map((color) => (
                          <span key={color} className="px-2 py-0.5 border border-gray-200 text-gray-600 text-[10px] font-medium tracking-wide">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Perks */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs text-gray-500">
                      <Shield size={14} className="text-accent-gold" />
                      <span>GOTS Certified Organic & Pure Standard</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-500">
                      <RefreshCw size={14} className="text-accent-gold" />
                      <span>Complimentary 30-Day Luxury Returns</span>
                    </div>
                  </div>
                </div>

                {/* Add To Cart */}
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <button
                    onClick={handleAddToCart}
                    className={`w-full lux-button flex items-center justify-center gap-3 py-4 transition-all duration-300 ${
                      added ? 'bg-green-600 hover:bg-green-600 text-white' : 'bg-text-dark hover:bg-accent-gold text-white'
                    }`}
                  >
                    {added ? (
                      <><Check size={18} /> Added to Bag</>
                    ) : (
                      <><ShoppingCart size={18} /> Add to Bag</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;

