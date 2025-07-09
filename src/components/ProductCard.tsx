import { Product } from '../categories';
import { TagIcon } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isHovering && images.length > 1) {
      const startTimeout = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          );

          progressControls
            .start({ width: '0%', transition: { duration: 0 } })
            .then(() => {
              progressControls.start({
                width: '100%',
                transition: {
                  duration: IMAGE_DISPLAY_DURATION,
                  ease: 'linear',
                },
              });
            });
        }, IMAGE_DISPLAY_DURATION * 1000);

        progressControls.start({
          width: '100%',
          transition: { duration: IMAGE_DISPLAY_DURATION, ease: 'linear' },
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
      scale: 1.06,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    scaleControls.start({ scale: 1, transition: { duration: 0.4 } });
    progressControls.start({ width: '0%', transition: { duration: 0.3 } });
  };

  // preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <motion.div
      className='inline-block w-full max-w-[320px] sm:max-w-[360px] align-top cursor-pointer'
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
      <div className='group bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full'>
        <Link
          to={`/products/${product.id}`}
          className='block no-underline text-black h-full'
        >
          <div className='relative aspect-[4/5] bg-gray-50 overflow-hidden rounded-t-lg'>
            <motion.div
              className='absolute inset-0 w-full h-full'
              animate={scaleControls}
              initial={{ scale: 1 }}
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentImageIndex}
                  className='absolute inset-0 w-full h-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_DURATION }}
                  style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10'>
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Progress bar */}
            <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-black/10'>
              <motion.div
                className='h-full bg-white w-[0%]'
                animate={progressControls}
              />
            </div>

            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          <div className='p-4 flex flex-col flex-1'>
            {/* Tag / Discount */}
            <div className='min-h-[24px] text-xs uppercase tracking-widest font-medium text-gray-500 flex items-center gap-2'>
              {product.discount?.isDiscounted ? (
                <>
                  <TagIcon className='w-4 h-4 text-[#a74030]' />
                  <span className='text-[#a74030] font-semibold'>
                    {product.discount.percentOff}
                  </span>
                </>
              ) : (
                (product.tags?.length ?? 0) > 0 && (
                  <span className='border-l-2 border-gray-300 pl-2'>
                    {product.tags?.join(', ')}
                  </span>
                )
              )}
            </div>

            {/* Product Name */}
            <h3 className='mt-2 text-sm md:text-base font-semibold uppercase tracking-wide group-hover:text-[#a74030] transition-colors line-clamp-2'>
              {product.name}
            </h3>

            {/* Color */}
            <div className='text-xs text-gray-500 mt-1 uppercase tracking-widest'>
              {product.color}
            </div>

            {/* Price */}
            <div className='mt-3 min-h-[48px] text-sm md:text-base font-bold'>
              {product.discount?.isDiscounted ? (
                <>
                  <span className='text-[#a74030] block'>
                    ${product.discount.discountPrice} USD
                  </span>
                  <span className='line-through text-gray-400 text-sm'>
                    ${product.price} USD
                  </span>
                </>
              ) : (
                <span className='text-gray-900 block'>
                  ${product.price} USD
                </span>
              )}
            </div>

            {/* Button */}
            <div className='mt-auto pt-4 opacity-0 group-hover:opacity-100 transition duration-300'>
              <button className='w-full bg-[#080808] text-white py-2 rounded-md uppercase text-xs tracking-widest font-semibold hover:bg-[#a74030] transition'>
                Quick Add
              </button>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
