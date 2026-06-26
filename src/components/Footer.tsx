import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-text-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 sm:gap-3 mb-6">
              <img 
                src="/assets/logo.jpg" 
                alt="Kandhasamy Textile Logo" 
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-full border border-accent-gold/40 shadow-md flex-shrink-0"
              />
              <h2 className="text-base sm:text-xl font-serif tracking-[0.1em] sm:tracking-[0.2em] text-white">KANDHASAMY TEXTILE</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Timeless elegance and unmatched comfort. Woven with tradition, designed for modern luxury living.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors duration-300">Shop All</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors duration-300">Categories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Sustainability</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Customer Care</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Shipping &amp; Returns</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-accent-gold/20 border border-accent-gold/40 px-4 py-3 text-sm text-accent-gold">
                <Mail size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-accent-gold transition-colors duration-300"
                />
                <button 
                  type="submit"
                  className="bg-white text-text-dark px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-white transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-gray-500 tracking-widest uppercase">
          <p>© 2026 Kandhasamy Textiles. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link to="/contact" className="hover:text-white transition-colors duration-300 underline underline-offset-4">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-300 underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
