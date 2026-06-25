import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className={`text-2xl font-serif tracking-widest transition-colors duration-300 ${scrolled ? 'text-text-dark' : 'text-text-dark'}`}>
              KANDHASAMY TEXTILE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:text-accent-gold relative group ${location.pathname === link.path ? 'text-accent-gold' : 'text-text-dark'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-text-dark hover:text-accent-gold transition-colors duration-300">
              <Search size={22} />
            </button>
            <button className="text-text-dark hover:text-accent-gold transition-colors duration-300">
              <User size={22} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-text-dark hover:text-accent-gold transition-colors duration-300 relative"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          {/* Mobile Header Icons and Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-text-dark hover:text-accent-gold transition-colors duration-300 relative p-2"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-accent-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-accent-gold focus:outline-none transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-base font-medium text-text-dark hover:text-accent-gold hover:bg-gray-50 transition-all duration-300 tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-around pt-6 border-t border-gray-100">
                <button className="text-text-dark hover:text-accent-gold transition-colors duration-300 p-2">
                  <Search size={22} />
                </button>
                <button className="text-text-dark hover:text-accent-gold transition-colors duration-300 p-2">
                  <User size={22} />
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="text-text-dark hover:text-accent-gold transition-colors duration-300 relative p-2"
                >
                  <ShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="absolute top-1 right-1 bg-accent-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

