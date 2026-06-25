import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'luxury',
    name: 'The Luxury Collection',
    description: 'Our finest weaves featuring silk blends and intricate jacquard patterns.',
    image: '/assets/govindaraja/g1.jpg',
    count: 12
  },
  {
    id: 'bath',
    name: 'Bath Rituals',
    description: 'High-absorbency organic cotton towels for your daily sanctuary.',
    image: '/assets/govindaraja/g3.jpg',
    count: 24
  },
  {
    id: 'beach',
    name: 'Sand & Sea',
    description: 'Lightweight, quick-dry textiles designed for the coastal lifestyle.',
    image: '/assets/govindaraja/g2.jpg',
    count: 8
  },
  {
    id: 'hand-face',
    name: 'Delicate Essentials',
    description: 'Soft and gentle textures for the most sensitive skin.',
    image: '/assets/govindaraja/g4.jpg',
    count: 15
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
            Curated Collections
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-text-dark mb-4 uppercase tracking-widest">
            Browse by Category
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto italic font-light">
            Each collection is thoughtfully designed to serve a unique purpose in your everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden"
            >
              <Link to={`/shop?category=${category.id}`} className="block h-full w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase bg-accent-gold px-3 py-1 mb-3 inline-block">
                      {category.count} Products
                    </span>
                    <h2 className="text-3xl font-serif mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="text-sm text-white/80 max-w-xs font-light line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                    Explore Collection <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-24 py-12 border-y border-gray-100 flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-40">
           <img src="/assets/towels/texture.png" className="h-10 object-contain" alt="Pattern 1" />
           <img src="/assets/towels/texture.png" className="h-10 object-contain" alt="Pattern 2" />
           <img src="/assets/towels/texture.png" className="h-10 object-contain" alt="Pattern 3" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

