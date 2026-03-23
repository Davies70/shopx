import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X, Target } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getProductImages } from "@/services";

type LightBoxProps = {
  setIsLightBoxOpen: (a: boolean) => void;
};

const LightBox = ({ setIsLightBoxOpen }: LightBoxProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // For sliding animation
  const thumbsRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  // Extracting ID: assuming path is /products/ASSET-ID
  const id = location.pathname.split("/").pop() || "";
  const images = getProductImages(id);

  // Keyboard Navigation: PREMIUM UX
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "Escape") setIsLightBoxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  // Scroll thumbnail into view
  useEffect(() => {
    const thumbs = thumbsRef.current;
    if (thumbs) {
      const activeThumb = thumbs.querySelector(`[data-index="${current}"]`);
      if (activeThumb && activeThumb instanceof HTMLElement) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [current]);

  const paginate = (newDirection: number) => {
    const nextIndex = current + newDirection;
    if (nextIndex >= 0 && nextIndex < images.length) {
      setDirection(newDirection);
      setCurrent(nextIndex);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-sm flex flex-col"
    >
      {/* 1. TACTICAL HUD HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF3366] tracking-[0.3em] uppercase">
            <Target size={14} className="animate-pulse" />
            INTEL_VIEWER // {id}
          </div>
          <div className="hidden sm:block h-[1px] w-12 bg-white/20" />
          <div className="hidden sm:block font-mono text-[10px] text-white/40 tracking-widest">
            IMAGE_{String(current + 1).padStart(2, "0")}_OF_
            {String(images.length).padStart(2, "0")}
          </div>
        </div>

        <button
          onClick={() => setIsLightBoxOpen(false)}
          className="flex cursor-pointer items-center gap-2 group text-white/50 hover:text-[#FF3366] transition-colors font-mono text-[10px] tracking-widest"
        >
          [ ABORT_VIEW ]
          <X
            size={20}
            className="border border-white/10 group-hover:border-[#FF3366] p-0.5"
          />
        </button>
      </div>

      {/* 2. MAIN VIEWFINDER */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden p-4 md:p-12">
        {/* Viewfinder Brackets */}
        <div className="absolute inset-4 md:inset-12 border border-white/5 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF3366]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF3366]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF3366]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF3366]" />

          {/* Subtle Grid Crosshair Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <div className="w-10 h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2" />
            <div className="h-10 w-[1px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Navigation Controls (Desktop Only) */}
        <div className="hidden md:contents">
          {current > 0 && (
            <button
              onClick={() => paginate(-1)}
              className="cursor-pointer absolute left-8 z-20 p-4 border border-white/10 hover:border-[#FF3366] text-white transition-all bg-black/40"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
          )}
          {current < images.length - 1 && (
            <button
              onClick={() => paginate(1)}
              className="cursor-pointer absolute right-8 z-20 p-4 border border-white/10 hover:border-[#FF3366] text-white transition-all bg-black/40"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          )}
        </div>

        {/* Main Image Stage */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-full max-h-full flex items-center justify-center"
          >
            <img
              src={images[current]}
              alt={`Asset Visual ${current}`}
              className="max-h-[75vh] max-w-full object-contain grayscale-[0.2] contrast-110 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            />

            {/* Asset Coordinates Readout */}
            <div className="absolute -bottom-8 left-0 font-mono text-[8px] text-white/30 tracking-[0.2em] uppercase">
              SCAN_COORD: 34.0522° N, 118.2437° W // ZOOM: 100%
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. TACTICAL THUMBNAIL TRACK */}
      <div className="bg-black border-t border-white/10 py-6">
        <div
          className="flex justify-center items-center gap-4 overflow-x-auto px-12 no-scrollbar"
          ref={thumbsRef}
        >
          {images.map((img, index) => {
            const isActive = current === index;
            return (
              <button
                key={index}
                data-index={index}
                onClick={() => setCurrent(index)}
                className={`relative shrink-0 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-24 h-24 border-[#FF3366]"
                    : "w-16 h-16 border-white/10 opacity-40 hover:opacity-100 grayscale"
                } border-2 overflow-hidden bg-[#12141A]`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={`Thumb ${index}`}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-[#FF3366]/10 pointer-events-none" />
                )}
                {/* Image Number on thumb */}
                <div className="absolute top-0.5 left-0.5 font-mono text-[8px] text-white bg-black/60 px-1">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Background CRT Pattern (Applied over entire Lightbox) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
        }}
      />
    </motion.div>
  );
};

export default LightBox;
