import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';
import ProductModal from '../components/ProductModal';

interface ProductModalContextType {
  openModal: (product: Product) => void;
  closeModal: () => void;
  activeProduct: Product | null;
  isOpen: boolean;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(undefined);

export const ProductModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product: Product) => {
    setActiveProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ProductModalContext.Provider value={{ openModal, closeModal, activeProduct, isOpen }}>
      {children}
      <ProductModal product={activeProduct} isOpen={isOpen} onClose={closeModal} />
    </ProductModalContext.Provider>
  );
};

export const useProductModal = () => {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error('useProductModal must be used within a ProductModalProvider');
  }
  return context;
};

