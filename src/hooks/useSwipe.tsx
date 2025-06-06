// import { PanInfo } from 'framer-motion';

type SwipeHandler = (e?: React.MouseEvent) => void;

// type UseSwipeReturn = {
//   onDragEnd: (event: MouseEvent | TouchEvent, info: PanInfo) => void;
//   drag: string;
//   dragConstraints: { left: number; right: number };
// };

// const useSwipe = (
//   swipeLeft: SwipeHandler,
//   swipeRight: SwipeHandler
// ): UseSwipeReturn => {
//   const handleSwipe = (event: MouseEvent | TouchEvent, info: PanInfo) => {
//     if (info.offset.x < -50) {
//       swipeLeft();
//     } else if (info.offset.x > 50) {
//       swipeRight();
//     }
//   };

//   return {
//     onDragEnd: handleSwipe,
//     drag: 'x',
//     dragConstraints: { left: -1000, right: 1000 }, // Adjust constraints as needed
//   };
// };
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
