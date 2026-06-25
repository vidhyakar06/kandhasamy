import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/govindaraja/g3.jpg"
          alt="Kandhasamy Textile Heritage Textile"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-gold/90 text-white text-xs font-bold tracking-[0.3em] uppercase mb-6">
              The Heritage Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Woven with <br /> <span className="italic">True Intention.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              Explore the timeless elegance of Kandhasamy Textiles. Every thread tells a story of tradition, luxury, and unmatched craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lux-button flex items-center justify-center gap-2"
              >
                Explore Shop <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-text-dark transition-all duration-300 flex items-center justify-center"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative details */}
      <div className="absolute bottom-10 left-10 md:left-20 flex gap-10">
        <div className="flex flex-col">
          <span className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Material</span>
          <span className="text-white text-sm font-medium">100% Organic Cotton</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Craftsmanship</span>
          <span className="text-white text-sm font-medium">Woven in India</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

