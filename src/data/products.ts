import { Product } from '../types';

export const products: Product[] = [
  {
    id: '8',
    name: 'Kandhasamy Textile Premium Bath Towels',
    price: 44.99,
    description: 'Classic handloom bath towels woven from 100% pure cotton — lightweight, highly absorbent, and quick-drying. Features a timeless checkered grid pattern with colorful accent stripes. Available in a wide range of vibrant colors including Purple, Teal, Yellow, Pink, Blue, and more. Sold individually or as a set.',
    category: 'Bath',
    images: [
      '/assets/towels/angle1_folded_purple.jpg',
      '/assets/towels/angle2_combo_teal_yellow.jpg',
      '/assets/towels/angle3_stack_multicolor.jpg',
      '/assets/towels/angle4_rolled_side.jpg',
      '/assets/towels/angle5_rolled_front.jpg',
    ],
    angleLabels: [
      'Folded — Purple',
      'Combo — Teal & Yellow',
      'Stack — All Colors',
      'Rolled — Side View',
      'Rolled — Front View',
    ],
    colors: ['Purple', 'Teal', 'Yellow', 'Pink', 'Blue', 'Peach', 'Magenta'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Pure Cotton Handloom',
    rating: 4.7,
    reviews: 36,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Kandhasamy Textile Checked Multicolor Towels',
    price: 39.99,
    description: 'Vibrant multicolor checked handloom towels in bold hues. Woven from 100% organic cotton with a classic checkered pattern — soft, highly absorbent, and long-lasting. Available in Maroon, Mustard, Teal, and Hot Pink.',
    category: 'Bath',
    images: [
      '/assets/towels/checked_collage.jpg',
      '/assets/towels/checked_rolled.jpg',
    ],
    angleLabels: [
      'All Colors — Folded',
      'All Colors — Rolled',
    ],
    colors: ['Maroon', 'Mustard', 'Teal', 'Hot Pink'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Organic Cotton',
    rating: 4.8,
    reviews: 24,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '6',
    name: 'Kandhasamy Textile Handloom Checked Towels Collection',
    price: 49.99,
    description: 'Traditional checked handloom towels woven from 100% premium organic cotton. Lightweight, exceptionally absorbent, and quick-drying. Available in a variety of vibrant colors.',
    category: 'Bath',
    images: [
      '/assets/towels/handloom_multicolor_spread.jpg',
      '/assets/towels/handloom_purple_folded.jpg',
      '/assets/towels/handloom_red_folded.jpg',
      '/assets/towels/handloom_cyan.jpg'
    ],
    angleLabels: [
      'Multicolor Spread',
      'Purple Folded',
      'Red Folded',
      'Cyan Flat'
    ],
    colors: ['Purple', 'Red', 'Cyan', 'Pink', 'Orange'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Organic Cotton',
    rating: 4.9,
    reviews: 42,
    isNew: true,
    isBestSeller: true
  },



  {
    id: '9',
    name: 'Kandhasamy Textile Classic Checked Towels Set',
    price: 64.99,
    description: 'A beautiful collection of classic checked handloom towels in earthy and vibrant tones. Woven from high-quality cotton for durability and softness.',
    category: 'Bath',
    images: [
      '/assets/towels/classic_checked_folded_stack.jpg',
      '/assets/towels/classic_checked_rolled_stack.jpg'
    ],
    angleLabels: [
      'Folded Stack',
      'Rolled View'
    ],
    colors: ['Orange', 'Blue', 'Red', 'Brown'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Premium Handloom Cotton',
    rating: 4.8,
    reviews: 12,
    isNew: true,
    isBestSeller: true
  },
  {
    id: '10',
    name: 'Kandhasamy Textile Pink Checked Handloom Towel',
    price: 49.99,
    description: 'A vibrant pink checked handloom towel woven from 100% premium organic cotton. Features exceptional absorbency and a lightweight feel. Perfect for adding a pop of color to your bathroom.',
    category: 'Bath',
    images: [
      '/assets/towels/handloom_pink_flat.jpg',
      '/assets/towels/handloom_stack_2.jpg',
      '/assets/towels/handloom_stack_zoom.jpg'
    ],
    angleLabels: [
      'Flat Lay',
      'Folded Stack',
      'Zoom View'
    ],
    colors: ['Pink'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Organic Cotton',
    rating: 4.9,
    reviews: 18,
    isNew: true,
    isBestSeller: true
  },
  {
    id: '11',
    name: 'Kandhasamy Textile White Striped Handloom Towel',
    price: 49.99,
    description: 'Elegant white handloom towels featuring delicate colored stripes in teal, purple, pink, and orange. Woven from 100% premium organic cotton for a luxurious and lightweight feel.',
    category: 'Bath',
    images: ['/assets/towels/handloom_white_striped_stack.jpg'],
    angleLabels: ['Striped Details'],
    colors: ['White & Multicolor Stripes'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Organic Cotton',
    rating: 4.9,
    reviews: 15,
    isNew: true,
    isBestSeller: true
  },
  {
    id: '12',
    name: 'Kandhasamy Textile Handloom Checkered Towels Stack',
    price: 54.99,
    description: 'A vibrant stack of handloom checkered towels in classic blue, green, red, and maroon. Expertly woven from 100% organic cotton for everyday softness and durability.',
    category: 'Bath',
    images: ['/assets/towels/handloom_blue_checkered_stack.jpg'],
    angleLabels: ['Stack View'],
    colors: ['Blue', 'Green', 'Red', 'Maroon'],
    sizes: ['Single (30" x 60")', 'Double (60" x 90")'],
    material: 'Organic Cotton',
    rating: 4.8,
    reviews: 21,
    isNew: true,
    isBestSeller: true
  },
  {
    id: '13',
    name: 'Kandhasamy Textile Signature Heart Motif Collection',
    price: 120.00,
    description: 'A stunning collection of luxury towels featuring an intricate heart and floral motif, complete with the signature Kandhasamy Textile woven border. Crafted from premium materials for unmatched elegance.',
    category: 'Luxury',
    images: [
      '/assets/govindaraja/signature_heart_black_gold.jpg',
      '/assets/govindaraja/signature_heart_maroon_teal.jpg',
      '/assets/govindaraja/signature_heart_black_yellow.jpg',
      '/assets/govindaraja/signature_heart_maroon_yellow.jpg',
      '/assets/govindaraja/signature_heart_black_pink.jpg'
    ],
    angleLabels: [
      'Black & Gold',
      'Maroon & Teal',
      'Black & Yellow',
      'Maroon & Yellow',
      'Black & Pink'
    ],
    colors: ['Multicolor'],
    sizes: ['Double (60" x 90")'],
    material: 'Premium Jacquard Cotton',
    rating: 5.0,
    reviews: 28,
    isNew: true,
    isBestSeller: true
  },
  {
    id: '14',
    name: 'Kandhasamy Textile Signature Floral Motif Towel',
    price: 125.00,
    description: 'An exquisite luxury towel featuring a beautiful floral motif woven in classic black and gold tones. Showcases the iconic Kandhasamy Textile signature woven border for a timeless, elegant look.',
    category: 'Luxury',
    images: ['/assets/govindaraja/signature_floral_black_gold.jpg'],
    angleLabels: ['Floral Detail'],
    colors: ['Black & Gold'],
    sizes: ['Double (60" x 90")'],
    material: 'Premium Jacquard Cotton',
    rating: 4.9,
    reviews: 14,
    isNew: true,
    isBestSeller: true
  }
];

