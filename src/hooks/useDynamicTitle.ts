// utils/useDynamicTitle.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titleMap: Record<string, string> = {
  '/': 'ShopApocalypse - Survive in Style',
  '/about': 'About Us - ShopApocalypse',
  '/shop': 'Shop - ShopApocalypse',
  '/faq': 'FAQ - ShopApocalypse',
  '/contact': 'Contact - ShopApocalypse',
  '/category/armored_outerwear': 'Amored Outerwear - ShopApocalypse',
  '/category/tactical_head_protection': 'Head Protection - ShopApocalypse',
  '/category/mission_ready_eye_gear': 'Eye Gear - ShopApocalypse',
  '/category/survival_handwear': 'Handwear - ShopApocalypse',

  '/search_results': 'Search Results - ShopApocalypse',
};

export const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titleMap[location.pathname] || 'ShopApocalypse';
  }, [location.pathname]);
};
