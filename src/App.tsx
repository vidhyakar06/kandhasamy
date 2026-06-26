import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-[#FDFCFB]">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

import { CartProvider } from './context/CartContext';
import { ProductModalProvider } from './context/ProductModalContext';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <section className="py-24 bg-beige-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/assets/towels/texture.png" 
                  alt="Towel Texture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:absolute sm:bottom-0 sm:right-0 sm:-bottom-8 sm:-right-8 w-full sm:w-48 bg-accent-gold p-6 sm:p-8 flex items-center justify-center text-center mt-4 sm:mt-0">
                <p className="text-white text-sm font-serif italic">
                  "The softest towels I have ever owned. Truly worth every penny."
                </p>
              </div>
            </div>
            <div>
              <span className="text-accent-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                Quality & Sustainability
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-8">
                Crafted with Care <br /> & Pure Intention.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At KANDHASAMY TEXTILE, we believe that the smallest luxuries make the biggest difference. Our towels are woven from 100% organic cotton and bamboo, ensuring maximum absorbency and a cloud-like feel.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-text-dark">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                  Eco-friendly & Sustainably Sourced
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-text-dark">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                  GOTS Certified Organic Fibers
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-text-dark">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                  Hypoallergenic & Skin Friendly
                </li>
              </ul>
              <button className="lux-button">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <ProductModalProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<div className="pt-32 px-10 text-center py-20">Checkout Page (Coming Soon)</div>} />
            </Routes>
          </Layout>
        </Router>
      </ProductModalProvider>
    </CartProvider>
  );
};

export default App;

