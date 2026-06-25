export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Bath' | 'Hand' | 'Face' | 'Beach' | 'Luxury';
  images: string[];
  angleLabels?: string[];
  colors: string[];
  sizes: string[];
  material: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

