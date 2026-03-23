import { Product } from "../categories";
import { Target, ShieldAlert } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
  translateX?: number;
  handleAnimationComplete?: () => void;
  instantJump?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  translateX = 0,
  handleAnimationComplete,
  instantJump,
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

  // Simulated Tactical Stats based on product price/name length for consistent UI
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

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <motion.div
      className="inline-block w-full max-w-[320px] sm:max-w-[360px] align-top cursor-pointer h-full"
      animate={{ x: `${-100 * translateX}%` }}
      transition={
        instantJump
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      onAnimationComplete={handleAnimationComplete}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Brutalist Container */}
      <div
        className="group bg-white border-2 border-[#080808] flex flex-col h-full transition-all duration-300 relative"
        style={{
          boxShadow: isHovering ? "8px 8px 0px #FF3366" : "4px 4px 0px #080808",
        }}
      >
        <Link
          to={`/products/${product.id}`}
          className="block no-underline text-black h-full"
        >
          {/* Image Area */}
          <div className="relative aspect-[4/5] bg-[#f4f8fa] border-b-2 border-[#080808] overflow-hidden">
            {/* The Images */}
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
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Tactical HUD Overlay (Appears on Hover) */}
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[rgba(8,8,8,0.75)] z-20 flex flex-col justify-between p-4"
                >
                  {/* Targeting Corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF3366]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FF3366]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FF3366]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF3366]"></div>

                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <Target size={64} color="#FF3366" strokeWidth={1} />
                  </div>

                  {/* Top Readout */}
                  <div className="font-mono text-[10px] text-[#FF3366] tracking-widest flex justify-between uppercase">
                    <span>SYS.SCAN.ACTIVE</span>
                    <span>[{product.id}]</span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="font-mono text-[10px] text-white space-y-1 relative z-30">
                    <div className="flex justify-between border-b border-white/20 pb-1">
                      <span className="text-white/60">THREAT_LVL:</span>
                      <span className="text-[#FF3366] font-bold">
                        {threatLevel}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-1">
                      <span className="text-white/60">WT_CLASS:</span>
                      <span>{weightClass} KG</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-white/60">STATUS:</span>
                      <span className="text-[#C5F82A]">
                        CLEARED_FOR_DEPLOYMENT
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar (Ammo gauge style) */}
            {images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#080808] z-30">
                <motion.div
                  className="h-full bg-[#FF3366] w-[0%]"
                  animate={progressControls}
                />
              </div>
            )}
          </div>

          {/* Details Area */}
          <div className="p-5 flex flex-col flex-1 bg-white relative z-30">
            {/* Tag / Discount (Stamped Military Style) */}
            <div className="min-h-[24px] text-[10px] uppercase tracking-widest font-mono flex items-center gap-2 mb-2">
              {product.discount?.isDiscounted ? (
                <div className="flex items-center gap-1.5 bg-[#FF3366] text-white px-2 py-1 font-bold">
                  <ShieldAlert size={12} />
                  <span>{product.discount.percentOff}</span>
                </div>
              ) : (
                (product.tags?.length ?? 0) > 0 && (
                  <span className="bg-[#080808] text-white px-2 py-1">
                    {product.tags?.join(", ")}
                  </span>
                )
              )}
            </div>

            {/* Product Name */}
            <h3 className="mt-2 text-[16px] font-[600] uppercase tracking-[0.05em] group-hover:text-[#FF3366] transition-colors line-clamp-2 leading-[1.3em]">
              {product.name}
            </h3>

            {/* Color Classification */}
            <div className="text-[10px] text-[#667479] mt-2 uppercase tracking-widest font-mono border-l-2 border-[#080808] pl-2">
              SPEC: {product.color}
            </div>

            {/* Price Readout */}
            <div className="mt-4 pt-4 border-t-2 border-dotted border-[#e4e9ec] min-h-[48px] text-[14px] font-mono tracking-widest flex items-end justify-between">
              {product.discount?.isDiscounted ? (
                <div className="flex flex-col">
                  <span className="line-through text-gray-400 text-[10px]">
                    ${product.price} USD
                  </span>
                  <span className="text-[#FF3366] font-bold text-[16px]">
                    ${product.discount.discountPrice} USD
                  </span>
                </div>
              ) : (
                <span className="text-[#080808] font-bold text-[16px]">
                  ${product.price} USD
                </span>
              )}

              <div className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                [ CLICK_TO_ACQUIRE ]
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
