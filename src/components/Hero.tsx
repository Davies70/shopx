import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { slidesOne } from "@/data";
import { Link } from "react-router-dom";
import { Crosshair, ChevronRight, ChevronLeft } from "lucide-react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slidesOne.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % slidesOne.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slidesOne.length - 1 : prev - 1));

  const [coords, setCoords] = useState("LAT: 34.0522° N | LON: 118.2437° W");
  useEffect(() => {
    const interval = setInterval(() => {
      setCoords(
        `LAT: ${(34.0522 + Math.random() * 0.001).toFixed(4)}° N | LON: ${(118.2437 + Math.random() * 0.001).toFixed(4)}° W`,
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] md:min-h-[100vh] w-full bg-[#0B0C10] flex flex-col justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-[100px] bottom-4 left-4 right-4 md:top-[120px] md:bottom-8 md:left-8 md:right-8 border-2 border-white/10 z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white translate-x-1 translate-y-1"></div>
      </div>

      <div className="absolute top-[116px] left-8 md:top-[140px] md:left-12 z-40 font-mono text-[10px] md:text-xs text-white tracking-widest hidden sm:block">
        {/* TASTEFUL RED: Live Ping */}
        <span className="text-[#FF3366] animate-pulse mr-2">●</span>{" "}
        LIVE_SURVEILLANCE_FEED
      </div>
      <div className="absolute top-[116px] right-8 md:top-[140px] md:right-12 z-40 font-mono text-[10px] md:text-xs text-white/50 tracking-widest hidden sm:block">
        {coords}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="absolute inset-0 z-10"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.5]"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            style={{ backgroundImage: `url(${slidesOne[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/80 via-[#0B0C10]/40 to-[#0B0C10]/90 z-10"></div>
          <div
            className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
            }}
          />

          <div className="absolute inset-0 z-40 flex items-center justify-center px-6 pt-[100px]">
            <div className="max-w-4xl text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="mb-6 opacity-80"
              >
                {/* TASTEFUL RED: The Crosshair */}
                <Crosshair
                  size={48}
                  className="text-[#FF3366]"
                  strokeWidth={1}
                />
              </motion.div>

              <motion.div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-clash font-black uppercase text-white tracking-wide leading-[1.1] drop-shadow-2xl"
                >
                  {slidesOne[currentIndex].title_1}
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  to={"/shop"}
                  className="group relative inline-flex items-center justify-center bg-white text-[#0B0C10] px-8 py-4 font-mono text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all hover:bg-transparent hover:text-white border-2 border-white"
                >
                  <span className="relative z-10">ACCESS_ARMORY</span>
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-[#0B0C10] transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-50 px-8 md:px-16 flex justify-between items-end pointer-events-none">
        <div className="font-mono text-white text-sm md:text-base font-bold flex items-center gap-4 pointer-events-auto">
          {/* TASTEFUL RED: The active slide number */}
          <span className="text-[#FF3366]">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-12 md:w-24 h-[2px] bg-white/20 relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              className="absolute top-0 left-0 bottom-0 bg-[#FF3366]" // Red progress fill
            />
          </div>
          <span className="opacity-50">
            {String(slidesOne.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={handlePrev}
            className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white hover:border-[#FF3366] hover:text-[#FF3366] transition-colors bg-[#0B0C10]/50 backdrop-blur-sm"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white hover:border-[#FF3366] hover:text-[#FF3366] transition-colors bg-[#0B0C10]/50 backdrop-blur-sm"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
