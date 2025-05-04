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

export interface ProductCard {
  id: number;
  images: string[];
  price: string;
  oldPrice?: string;
  productTitle: string;
  subtitle: string;
  labelTag?: string;
}
