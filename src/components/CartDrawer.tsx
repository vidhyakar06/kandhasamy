import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-primary">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-text-dark" />
                <h2 className="text-lg font-serif tracking-widest uppercase">Shopping Bag ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-beige-light rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-serif italic mb-6">Your bag is currently empty.</p>
                  <button onClick={onClose} className="lux-button">Start Shopping</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-gray-50 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-serif text-text-dark">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">{item.category}</p>
                        <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-100 rounded-none bg-primary">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-gray-200 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-gray-200 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-primary border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                  <span className="text-xl font-serif text-text-dark">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  <Link 
                    to="/checkout" 
                    onClick={onClose}
                    className="w-full lux-button flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout <ArrowRight size={18} />
                  </Link>
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest pt-2">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

