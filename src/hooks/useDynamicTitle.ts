import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titleMap: Record<string, string> = {
  "/": "ShopApocalypse - Survive in Style",
  "/about": "About Us - ShopApocalypse",
  "/shop": "Shop - ShopApocalypse",
  "/shop/armor": "Armored Outerwear - ShopApocalypse",
  "/shop/headgear": "Head Protection - ShopApocalypse",
  "/shop/optics": "Eye Gear - ShopApocalypse",
  "/shop/gloves": "Handwear - ShopApocalypse",
  "/faq": "FAQ - ShopApocalypse",
  "/contact": "Contact - ShopApocalypse",
  "/shipping": "Shipping - ShopApocalypse",
  "/returns": "Returns - ShopApocalypse",
  "/search_results": "Search Results - ShopApocalypse",
};

export const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titleMap[location.pathname] || "ShopApocalypse";
  }, [location.pathname]);
};
