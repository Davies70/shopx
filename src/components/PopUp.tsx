import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TriangleAlert } from "lucide-react";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      // Slight delay to let the hero section load before the alarm hits
      const timer = setTimeout(() => setShowPopup(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[99999] flex justify-center items-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Tactical Dark Backdrop */}
          <div className="absolute inset-0 bg-[#0B0C10]/90 backdrop-blur-sm" />

          {/* CRT Scanline Overlay applied to the background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
            }}
          />

          {/* Heavy Brutalist Container */}
          <motion.div
            className="relative w-full max-w-[600px] bg-[#12141A] border-4 border-[#FF3366] p-1.5 shadow-[16px_16px_0px_rgba(255,51,102,0.3)]"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Inner Warning Box */}
            <div className="border-2 border-[#FF3366]/40 p-8 sm:p-12 flex flex-col items-center text-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF3366]/10 to-transparent">
              {/* Flashing Top Warning Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF3366] animate-pulse" />

              <TriangleAlert
                size={56}
                className="text-[#FF3366] mb-6"
                strokeWidth={1.5}
              />

              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-[#FF3366] animate-ping"></span>
                <h1 className="text-[#FF3366] font-mono font-black uppercase tracking-[0.15em] text-xl sm:text-2xl">
                  System_Notice
                </h1>
              </div>

              <h2 className="text-white font-clash text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-6 leading-none">
                Simulation Mode
              </h2>

              <div className="space-y-4 font-mono text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed mb-10 tracking-wide">
                <p>
                  [ <span className="text-[#FF3366] font-bold">WARNING</span> ]
                  This terminal connects to a demonstration network.
                </p>
                <p className="text-xs sm:text-sm opacity-70">
                  No actual survival resources, tactical gear, or rations will
                  be dispatched. Browse the armory, observe the architecture,
                  but do not expect physical extraction.
                </p>
              </div>

              {/* Aggressive Brutalist CTA */}
              <button
                onClick={handleClose}
                className="cursor-pointer group relative w-full bg-[#0B0C10] border-2 border-[#FF3366] text-[#FF3366] px-8 py-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-[#FF3366] hover:text-white"
              >
                <span className="relative z-10">Acknowledge_Override</span>

                {/* Hover Glitch/Stripe Effect */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #000, #000 10px, transparent 10px, transparent 20px)",
                  }}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
