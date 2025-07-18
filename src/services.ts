import { categories, Category, Product, CartItem } from './categories';

export const getCategory = (id: string): Category | null => {
  const category = categories.find((category) => category.id === id);
  return category ? category : null;
};

export const getProduct = (id: string): Product | null => {
  return categories.flatMap((c) => c.products).find((p) => p.id === id) || null;
};

export const addToCart = (cartItem: CartItem) => {
  localStorage.setItem(cartItem.product.id, JSON.stringify(cartItem));
};

export const getRelatedProducts = (id: string): Product[] => {
  const filtered = categories
    .flatMap((c) => c.products)
    .filter((p) => p.id !== id);

  // Shuffle the array
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  // Return the first 3 (or fewer if not enough)
  return filtered.slice(0, 3);
};
