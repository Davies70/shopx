export interface Slide {
  title_1: string;
  title_2?: string;
  title_3?: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductCardType {
  id: number;
  images: string[];
  price: string;
  oldPrice?: string;
  productTitle: string;
  subtitle: string;
  labelTag?: string;
  url?: string;
  percentOff?: number;
  productType: 'new' | 'discount' | 'normal';
}

export interface FeaturedType {
  title: string;
  images: string[];
  text: string;
}
