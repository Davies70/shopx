import { categories, Category, Product, CartItem } from './categories';

const SHOPAPO = 'shopaopcalypse-cartItem';

export const getCategory = (id: string): Category | null => {
  const category = categories.find((category) => category.id === id);
  return category ? category : null;
};

export const getProduct = (id: string): Product | null => {
  return categories.flatMap((c) => c.products).find((p) => p.id === id) || null;
};

export const getProductImages = (id: string): string[] | [] => {
  return (
    categories.flatMap((c) => c.products).find((p) => p.id === id)?.images || []
  );
};

// Get all cart items from localStorage
export const getCartItems = (): CartItem[] => {
  const data = localStorage.getItem(SHOPAPO);
  return data ? (JSON.parse(data) as CartItem[]) : [];
};

// Save all cart items to localStorage
export const saveCartItems = (cartItems: CartItem[]) => {
  localStorage.setItem(SHOPAPO, JSON.stringify(cartItems));
};

// Add or update a cart item
export const addOrUpdateCartItem = (cartItem: CartItem): CartItem[] => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex(
    (c) => c.product.id === cartItem.product.id
  );

  if (index > -1) {
    // Item exists, update quantity
    cartItems[index].quantity += cartItem.quantity;
  } else {
    // Item does not exist, add new
    cartItems.push(cartItem);
  }
  saveCartItems(cartItems);
  return getCartItems();
};

// Remove a cart item by product id
export const removeCartItem = (productId: string) => {
  const cartItems = getCartItems().filter((c) => c.product.id !== productId);
  saveCartItems(cartItems);
};

// Update the quantity of a cart item
export const updateCartItemQuantity = (productId: string, quantity: number) => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex((c) => c.product.id === productId);
  if (index > -1) {
    cartItems[index].quantity = quantity;
    saveCartItems(cartItems);
  }
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
