import { Product } from "../categories";
import { Target, ShieldAlert, ArrowUpRight } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
  translateX?: number;
  handleAnimationComplete?: () => void;
  instantJump?: boolean;
  className?: string; // Added to support parent grid 'h-full'
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  translateX = 0,
  handleAnimationComplete,
  instantJump,
  className = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scaleControls = useAnimation();
  const progressControls = useAnimation();

  const DELAY_BEFORE_START = 0.5;
  const IMAGE_DISPLAY_DURATION = 3;
  const TRANSITION_DURATION = 0.8;

  const images = product.images.slice(0, 3);
  const threatLevel = product.price > 150 ? "HIGH" : "ELEVATED";
  const weightClass = (product.name.length * 0.15).toFixed(1);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (isHovering && images.length > 1) {
      const startTimeout = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1,
          );
          progressControls
            .start({ width: "0%", transition: { duration: 0 } })
            .then(() => {
              progressControls.start({
                width: "100%",
                transition: {
                  duration: IMAGE_DISPLAY_DURATION,
                  ease: "linear",
                },
              });
            });
        }, IMAGE_DISPLAY_DURATION * 1000);
        progressControls.start({
          width: "100%",
          transition: { duration: IMAGE_DISPLAY_DURATION, ease: "linear" },
        });
      }, DELAY_BEFORE_START * 1000);
      return () => {
        clearTimeout(startTimeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isHovering, images.length, progressControls]);

  const handleHoverStart = () => {
    setIsHovering(true);
    scaleControls.start({
      scale: 1.05,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    scaleControls.start({ scale: 1, transition: { duration: 0.4 } });
    progressControls.start({ width: "0%", transition: { duration: 0.3 } });
  };

  return (
    <motion.div
      className={`relative w-full cursor-pointer flex flex-col ${className}`}
      animate={{ x: `${-100 * translateX}%` }}
      transition={
        instantJump
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      onAnimationComplete={handleAnimationComplete}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      // Improved Mobile Support: Triggering "hover" state on touch
      onTouchStart={handleHoverStart}
      onTouchEnd={handleHoverEnd}
    >
      <div
        className="group bg-white border-2 border-[#080808] flex flex-col h-full transition-all duration-300 relative overflow-hidden"
        style={{
          boxShadow: isHovering ? "4px 4px 0px #FF3366" : "2px 2px 0px #080808",
        }}
      >
        <Link
          to={`/products/${product.id}`}
          className="flex flex-col h-full no-underline text-black"
        >
          {/* IMAGE AREA */}
          <div className="relative aspect-[4/5] sm:aspect-square bg-[#f4f8fa] border-b-2 border-[#080808] overflow-hidden shrink-0">
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={scaleControls}
              initial={{ scale: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_DURATION }}
                  style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </AnimatePresence>
            </motion.div>

            {/* TACTICAL HUD OVERLAY (Hidden on mobile or simplified) */}
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/80 z-20 flex flex-col justify-between p-3 sm:p-4"
                >
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FF3366]" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FF3366]" />

                  <div className="font-mono text-[8px] sm:text-[10px] text-[#FF3366] tracking-tighter sm:tracking-widest flex justify-between uppercase">
                    <span>SCAN_ACTIVE</span>
                    <span>ID_{product.id.slice(0, 5)}</span>
                  </div>

                  <div className="flex flex-col items-center opacity-40">
                    <Target
                      className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF3366]"
                      strokeWidth={1}
                    />
                  </div>

                  <div className="font-mono text-[8px] sm:text-[10px] text-white space-y-1">
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span className="text-white/40">THREAT:</span>
                      <span className="text-[#FF3366] font-bold">
                        {threatLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">STATUS:</span>
                      <span className="text-[#C5F82A]">CLEARED</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AMMO GAUGE (Progress Bar) */}
            {images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#080808] z-30">
                <motion.div
                  className="h-full bg-[#FF3366] w-[0%]"
                  animate={progressControls}
                />
              </div>
            )}
          </div>

          {/* DETAILS AREA */}
          <div className="p-3 sm:p-5 flex flex-col flex-1 bg-white">
            {/* Tag / Discount */}
            <div className="min-h-[18px] sm:min-h-[24px]">
              {product.discount?.isDiscounted ? (
                <div className="inline-flex items-center gap-1 bg-[#FF3366] text-white px-1.5 py-0.5 text-[8px] sm:text-[10px] font-bold uppercase font-mono">
                  <ShieldAlert size={10} />
                  <span>{product.discount.percentOff} OFF</span>
                </div>
              ) : (
                product.tags?.[0] && (
                  <span className="bg-[#080808] text-white px-1.5 py-0.5 text-[8px] sm:text-[10px] font-mono uppercase">
                    {product.tags[0]}
                  </span>
                )
              )}
            </div>

            {/* Name: Balanced line height and clamping */}
            <h3 className="mt-2 text-[14px] sm:text-[16px] font-bold uppercase tracking-tight sm:tracking-normal line-clamp-2 leading-tight flex-1">
              {product.name}
            </h3>

            {/* Price Readout: Cleaned up for mobile widths */}
            <div className="mt-3 pt-3 border-t border-dashed border-black/10 flex items-center justify-between">
              <div className="font-mono tracking-tighter sm:tracking-widest">
                {product.discount?.isDiscounted ? (
                  <div className="flex flex-col">
                    <span className="line-through text-gray-400 text-[9px] sm:text-[10px]">
                      ${product.price}
                    </span>
                    <span className="text-[#FF3366] font-bold text-[13px] sm:text-[15px]">
                      ${product.discount.discountPrice}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#080808] font-bold text-[13px] sm:text-[15px]">
                    ${product.price}.00
                  </span>
                )}
              </div>

              {/* Icon-only for mobile to save space */}
              <div className="bg-[#080808] p-1.5 text-white group-hover:bg-[#FF3366] transition-colors">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
