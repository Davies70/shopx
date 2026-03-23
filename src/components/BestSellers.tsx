import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, ChevronLeft, ChevronRight, Crosshair } from "lucide-react";
import ProductCard from "./ProductCard";
import { bestSellers } from "@/data";
import useSwipe from "@/hooks/useSwipe";

const BestSellers = () => {
  const N = bestSellers.length;

  // Clone the entire array 3 times to guarantee no gaps on large screens
  const slides = [...bestSellers, ...bestSellers, ...bestSellers];

  const [currentIndex, setCurrentIndex] = useState(N);
  const [isAnimating, setIsAnimating] = useState(false);
  const [instantJump, setInstantJump] = useState(false);

  const handleNextButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);

    if (currentIndex === N * 2) {
      setInstantJump(true);
      setCurrentIndex(N);
    } else if (currentIndex === N - 1) {
      setInstantJump(true);
      setCurrentIndex(N * 2 - 1);
    } else {
      setInstantJump(false);
    }
  };

  useEffect(() => {
    if (instantJump) {
      const timer = setTimeout(() => setInstantJump(false), 50);
      return () => clearTimeout(timer);
    }
  }, [instantJump]);

  const swipeHandlers = useSwipe(handlePrevButton, handleNextButton);

  const actualSlideIndex = currentIndex % N;

  return (
    <section className="relative w-full bg-[#0B0C10] py-16 md:py-24 border-t border-white/10 overflow-hidden z-10">
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20">
        {/* TACTICAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/20 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-[#FF3366] animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs text-white tracking-widest uppercase">
                SYS.REQ // HIGH_DEMAND
              </span>
            </div>
            <h2 className="font-clash text-3xl md:text-5xl font-black text-white uppercase tracking-wide flex items-center gap-4">
              Priority_Assets
              <span className="font-mono text-sm text-[#FF3366] font-normal tracking-widest hidden sm:inline-block">
                [{N}]
              </span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-white tracking-widest uppercase">
            <div className="flex items-center gap-2 mr-4 opacity-50">
              <Crosshair size={14} />
              <span>ENGAGE_TRACK</span>
            </div>

            <button
              onClick={handlePrevButton}
              className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-white/20 hover:border-[#FF3366] hover:text-[#FF3366] transition-colors bg-[#0B0C10]"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={handleNextButton}
              className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-white/20 hover:border-[#FF3366] hover:text-[#FF3366] transition-colors bg-[#0B0C10]"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative w-full overflow-hidden px-[5vw] md:px-0">
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0B0C10] to-transparent z-30 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0B0C10] to-transparent z-30 pointer-events-none" />

          <div
            aria-label="carousel"
            className="relative w-full h-full flex clear-both"
          >
            <motion.div
              {...swipeHandlers}
              // THE FIX: Converted track to `flex items-stretch`
              className="w-[85%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] overflow-visible z-10 h-full relative left-0 right-0 flex items-stretch will-change-transform cursor-grab active:cursor-grabbing"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={
                instantJump
                  ? { duration: 0 }
                  : { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
              }
              onAnimationComplete={handleAnimationComplete}
            >
              {slides.map((product, idx) => (
                // THE FIX: Made the wrapper a flex item and used Tailwind trick `[&>div]:!flex` to force the ProductCard to stretch to the max height
                <div
                  key={idx}
                  className="shrink-0 w-full px-2 md:px-4 flex items-stretch [&>div]:!flex [&>div]:flex-col [&>div]:flex-1"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Classified Data Block Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {bestSellers.map((_, index) => (
            <div
              key={`dot-${index}`}
              className={`transition-all duration-300 ${
                actualSlideIndex === index
                  ? "h-1.5 w-8 bg-[#FF3366] shadow-[0_0_10px_rgba(255,51,102,0.5)]"
                  : "h-1 w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
