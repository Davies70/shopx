import { categories, Category, Product } from './categories';

export const getCategory = (id: string): Category | null => {
  const category = categories.find((category) => category.id === id);
  return category ? category : null;
};

export const getProduct = (id: string): Product | null => {
  return categories.flatMap((c) => c.products).find((p) => p.id === id) || null;
};
