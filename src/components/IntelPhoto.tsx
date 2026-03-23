import { motion } from "framer-motion";
import { useState } from "react";

type IntelPhotoProps = {
  src: string;
  alt: string;
  initialRotation: number;
  initialX: string | number;
  initialY: string | number;
  stampText?: string;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  zIndex: number;
  setTopZIndex: () => void;
};

const IntelPhoto = ({
  src,
  alt,
  initialRotation,
  initialX,
  initialY,
  stampText = "CLASSIFIED",
  constraintsRef,
  zIndex,
  setTopZIndex,
}: IntelPhotoProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.2}
      dragMomentum={true}
      onDragStart={() => {
        setIsDragging(true);
        setTopZIndex();
      }}
      onDragEnd={() => setIsDragging(false)}
      onMouseDown={setTopZIndex}
      onTouchStart={setTopZIndex}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: initialRotation - 15,
        x: initialX,
        y: initialY,
      }}
      whileInView={{ opacity: 1, scale: 1, rotate: initialRotation }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ zIndex }}
      className="absolute cursor-grab p-2 md:p-3 bg-[#E0E0E0] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border border-[#080808] w-[200px] sm:w-[250px] md:w-[300px]"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#0B0C10]/20 backdrop-blur-sm -rotate-3 border border-white/10 z-20" />
      <div className="relative overflow-hidden aspect-[4/5] bg-[#0B0C10] border border-[#080808] pointer-events-none">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${isDragging ? "grayscale-0 contrast-100" : "grayscale contrast-125"}`}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
          }}
        />
      </div>

      {/* TASTEFUL RED: The Classified Stamp */}
      <div className="absolute bottom-4 right-2 pointer-events-none transform rotate-[-15deg] opacity-80">
        <div
          className="border-4 border-[#FF3366] text-[#FF3366] font-mono font-black text-xl md:text-2xl px-2 py-1 uppercase tracking-widest"
          style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}
        >
          {stampText}
        </div>
      </div>

      <div className="mt-2 font-mono text-[8px] md:text-[10px] text-[#080808] tracking-widest font-bold uppercase">
        ID: {Math.random().toString(36).substring(2, 10)} // SRC_UNKNOWN
      </div>
    </motion.div>
  );
};

export default IntelPhoto;
