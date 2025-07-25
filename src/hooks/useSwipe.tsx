// import { PanInfo } from 'framer-motion';

type SwipeHandler = (e?: React.MouseEvent) => void;

import { useRef } from 'react';
import { TouchEvent } from 'react';
const useSwipe = (swipeLeft: SwipeHandler, swipeRight: SwipeHandler) => {
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - (touchStartXRef.current || 0);
    if (swipeDistance < -50) {
      swipeRight(); // Swipe left
    } else if (swipeDistance > 50) {
      swipeLeft();
    }
    touchStartXRef.current = null; // Reset after handling
  };

  return { onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd };
};
export default useSwipe;
