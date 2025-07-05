import { categories, Category } from './categories';

export const getCategory = (id: string): Category | null => {
  const category = categories.find((category) => category.id === id);
  return category ? category : null;
};
