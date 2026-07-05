import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  selectedImage: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor: string, selectedSize: string, selectedImage: string) => void;
  removeFromCart: (productId: string, selectedColor: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedColor: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('kandhasamy-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('kandhasamy-cart', JSON.stringify(cart));
  }, [cart]);

  // Unique key per product+color+size combination
  const itemKey = (id: string, color: string, size: string) => `${id}|${color}|${size}`;

  const addToCart = (product: Product, selectedColor: string, selectedSize: string, selectedImage: string) => {
    setCart((prev) => {
      const key = itemKey(product.id, selectedColor, selectedSize);
      const existing = prev.find((item) => itemKey(item.id, item.selectedColor, item.selectedSize) === key);
      if (existing) {
        return prev.map((item) =>
          itemKey(item.id, item.selectedColor, item.selectedSize) === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedColor, selectedSize, selectedImage }];
    });
  };

  const removeFromCart = (productId: string, selectedColor: string, selectedSize: string) => {
    const key = itemKey(productId, selectedColor, selectedSize);
    setCart((prev) => prev.filter((item) => itemKey(item.id, item.selectedColor, item.selectedSize) !== key));
  };

  const updateQuantity = (productId: string, selectedColor: string, selectedSize: string, quantity: number) => {
    const key = itemKey(productId, selectedColor, selectedSize);
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor, selectedSize);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        itemKey(item.id, item.selectedColor, item.selectedSize) === key ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

