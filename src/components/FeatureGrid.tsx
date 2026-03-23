import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slidesTwo } from "@/data";
import useSwipe from "@/hooks/useSwipe";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Target } from "lucide-react";

const FeatureGrid = () => {
  // Create infinite loop slides: [last, ...original, first]
  const infiniteSlides = [
    slidesTwo[slidesTwo.length - 1], // Clone of last slide
    ...slidesTwo, // Original slides
    slidesTwo[0], // Clone of first slide
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const motionRef = useRef<HTMLDivElement>(null);

  const handleNextButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldAnimate(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldAnimate(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const swipeHandlers = useSwipe(handlePrevButton, handleNextButton);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (currentIndex === infiniteSlides.length - 1) {
      setShouldAnimate(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setShouldAnimate(false);
      setCurrentIndex(slidesTwo.length);
    }
  };

  const getActualSlideIndex = (index: number) => {
    if (index === 0) return slidesTwo.length - 1;
    if (index === infiniteSlides.length - 1) return 0;
    return index - 1;
  };

  const actualSlideIndex = getActualSlideIndex(currentIndex);

  useEffect(() => {
    if (!shouldAnimate && !isAnimating) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, isAnimating]);

  return (
    <section
      className="relative overflow-hidden w-full bg-[#0B0C10] py-12 md:py-24 border-t border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Tactical Header */}
        <div className="mb-6 flex justify-between items-end border-b border-white/20 pb-4">
          <div className="font-mono text-[10px] md:text-xs tracking-widest text-white/50 uppercase">
            // FIELD_ASSETS_OVERVIEW
          </div>
          <div className="font-mono text-[10px] text-[#FF3366] animate-pulse uppercase flex items-center gap-2">
            <Target size={14} />
            <span className="hidden sm:block">[ SCANNING_ARCHIVES ]</span>
          </div>
        </div>

        {/* The Carousel Frame */}
        <div className="relative border-2 border-white/10 bg-[#12141A] overflow-hidden group">
          {/* Corner Framing */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF3366] z-30 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF3366] z-30 pointer-events-none" />

          <motion.div
            ref={motionRef}
            className="z-1 overflow-visible w-full whitespace-nowrap h-full relative flex left-0 right-0"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={
              shouldAnimate
                ? { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
            style={{ willChange: "transform" }}
          >
            {infiniteSlides.map((slide, index) => (
              <motion.div
                {...swipeHandlers}
                key={`slide-${index}`}
                className="w-full shrink-0 relative h-[60vh] min-h-[500px] md:h-[700px] inline-block align-top text-left group/slide"
              >
                {/* The Image (Grayscale with contrast) */}
                <div
                  className="absolute inset-0 grayscale-[0.6] contrast-125 transition-all duration-700 group-hover/slide:grayscale-[0.2]"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Dark Fade Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/60 to-transparent" />
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
                  }}
                />

                {/* Text Content Area */}
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end whitespace-normal z-20">
                  <div className="max-w-[600px]">
                    {/* Data Ribbon */}
                    <div className="bg-white text-[#0B0C10] font-mono text-[10px] uppercase tracking-widest px-2 py-1 inline-block mb-4 font-bold">
                      ASSET_CLASS: ARCHIVE
                    </div>

                    <h3 className="font-clash text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide leading-[1.1] mb-8 drop-shadow-xl">
                      {slide.title_1}
                    </h3>

                    <Link
                      to="/shop"
                      className="group/btn relative inline-flex items-center justify-center bg-transparent text-white px-8 py-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all border-2 border-white hover:border-[#FF3366] hover:text-white"
                    >
                      <span className="relative z-10">PROCURE_ASSETS</span>
                      <div className="absolute inset-0 z-0 opacity-0 group-hover/btn:opacity-100 bg-[#FF3366] transition-opacity duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tactical Navigation Overlays */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0 md:opacity-0 opacity-100"}`}
          >
            <button
              onClick={handlePrevButton}
              className="cursor-pointer w-12 h-12 flex items-center justify-center bg-[#0B0C10]/80 border-2 border-white/20 text-white hover:border-[#FF3366] hover:text-[#FF3366] transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div
            className={`absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0 md:opacity-0 opacity-100"}`}
          >
            <button
              onClick={handleNextButton}
              className="cursor-pointer w-12 h-12 flex items-center justify-center bg-[#0B0C10]/80 border-2 border-white/20 text-white hover:border-[#FF3366] hover:text-[#FF3366] transition-all backdrop-blur-sm"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Classified Data Block Indicators (Replaces standard dots) */}
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-12 z-30 flex items-center gap-2">
            {slidesTwo.map((_, index) => (
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
      </div>
    </section>
  );
};

export default FeatureGrid;
