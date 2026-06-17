import { categories, Category, Product, CartItem } from "./categories";

const SHOPAPO = "shopaopcalypse-cartItem";
const allProducts = categories.flatMap((category) => category.products);

export const getCategory = (id: string): Category | null => {
  const category = categories.find((category) => category.id === id);
  return category ? category : null;
};

export const getProduct = (id: string): Product | null => {
  return allProducts.find((p) => p.id === id) || null;
};

export const getProductImages = (id: string): string[] | [] => {
  return getProduct(id)?.images || [];
};

export const getDisplayPrice = (product: Product): number => {
  return product.discount?.isDiscounted && product.discount.discountPrice
    ? product.discount.discountPrice
    : product.price;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

// Get all cart items from localStorage
export const getCartItems = (): CartItem[] => {
  try {
    const data = localStorage.getItem(SHOPAPO);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    localStorage.removeItem(SHOPAPO);
    return [];
  }
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
    cartItems[index].quantity = Math.min(
      99,
      cartItems[index].quantity + cartItem.quantity,
    );
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
    cartItems[index].quantity = Math.max(1, Math.min(99, quantity));
    saveCartItems(cartItems);
  }
};

export const getRelatedProducts = (id: string, quantity: number): Product[] => {
  const filtered = allProducts.filter((p) => p.id !== id);

  // Shuffle the array
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  // Return the first 3 (or fewer if not enough)
  return filtered.slice(0, quantity);
};

export const getSearchResults = (quantity: number): Product[] => {
  const filtered = [...allProducts];

  // Shuffle the array
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  return filtered.slice(0, quantity);
};

export const searchProducts = (query: string): Product[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return allProducts.filter((product) => {
    const searchable = [
      product.id,
      product.name,
      product.shortDescription,
      product.longDescription,
      product.color,
      product.whyWeMadeIt,
      ...(product.tags ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalized);
  });
};
