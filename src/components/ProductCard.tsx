import { Product } from '../categories';
import { TagIcon } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

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
  // States
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animation controls
  const scaleControls = useAnimation();
  const progressControls = useAnimation();

  // Constants
  const DELAY_BEFORE_START = 0.5; // seconds before starting the cycle
  const IMAGE_DISPLAY_DURATION = 3; // seconds to display each image
  const TRANSITION_DURATION = 0.8; // seconds for fade transition

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle image cycling
  useEffect(() => {
    if (isHovering && product.images.length > 1) {
      // Start cycling after initial delay
      const startTimeout = setTimeout(() => {
        // Cycle through images
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
          );

          // Reset and restart progress bar
          progressControls
            .start({
              width: '0%',
              transition: { duration: 0 },
            })
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

        // Initial progress bar animation
        progressControls.start({
          width: '100%',
          transition: {
            duration: IMAGE_DISPLAY_DURATION,
            ease: 'linear',
          },
        });
      }, DELAY_BEFORE_START * 1000);

      return () => {
        clearTimeout(startTimeout);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
  }, [isHovering, product.images.length, progressControls]);

  const handleHoverStart = () => {
    setIsHovering(true);

    // Scale up effect
    scaleControls.start({
      scale: 1.1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier for a professional feel
      },
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    setCurrentImageIndex(0);

    // Stop interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Reset animations
    scaleControls.start({
      scale: 1,
      transition: { duration: 0.5 },
    });

    progressControls.start({
      width: '0%',
      transition: { duration: 0.3 },
    });
  };

  // Pre-load images for smoother transitions
  useEffect(() => {
    product.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [product.images]);

  return (
    <motion.div
      className='justify-center inline-block whitespace-normal relative h-full w-full text-left align-top cursor-pointer'
      transition={
        instantJump
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      animate={{ x: `${-100 * translateX}%` }}
      onAnimationComplete={handleAnimationComplete}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className='product-slide-card px-[3px] group'>
        <div>
          <div className='px-0 grid-rows-[auto] grid-cols-[1fr] gap-x-[6px] gap-y-[24px] grid'>
            <div className='relative'>
              {/* Wishlist button */}
              {/* <div className='  absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <button
                  className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer'
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <svg
                    width='20'
                    height='18'
                    viewBox='0 0 20 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 18L8.55 16.7C6.86667 15.1833 5.475 13.875 4.375 12.775C3.275 11.675 2.4 10.6873 1.75 9.812C1.1 8.93733 0.666667 8.14567 0.45 7.437C0.233333 6.729 0.125 6.01667 0.125 5.3C0.125 3.76667 0.608333 2.5 1.575 1.5C2.54167 0.5 3.76667 0 5.25 0C6.15 0 6.97933 0.195667 7.738 0.587C8.49667 0.979 9.16667 1.55 9.75 2.3L10 2.65L10.25 2.3C10.8333 1.55 11.5033 0.979 12.262 0.587C13.0207 0.195667 13.85 0 14.75 0C16.2333 0 17.4583 0.5 18.425 1.5C19.3917 2.5 19.875 3.76667 19.875 5.3C19.875 6.01667 19.7667 6.729 19.55 7.437C19.3333 8.14567 19 8.93733 18.55 9.812C17.9 10.6873 17.025 11.675 15.925 12.775C14.825 13.875 13.4333 15.1833 11.75 16.7L10.3 18H10Z'
                      fill={isLiked ? '#a74030' : 'none'}
                      stroke='currentColor'
                      strokeWidth='1.5'
                    />
                  </svg>
                </button>
              </div> */}

              <a
                href={`products/${product.id}`}
                className='grid no-underline decoration-0 gap-x-[3px] gap-y-[3px] text-[#080808] bg-[rgb(255,255,255)] grid-rows-[auto_auto] grid-cols-[1fr] max-w-[100%]'
              >
                <div className='card-image-wrapper h-full bg-[rgb(244,248,250)] overflow-hidden rounded-sm'>
                  <div className='h-[75vw] min-[480px]:h-[65vw]  min-[992px]:h-[44vw] max-h-[725px] flex flex-col justify-end min-h-full overflow-hidden relative'>
                    {/* Main image container with scaling effect */}
                    <motion.div
                      className='absolute inset-0 h-full w-full'
                      animate={scaleControls}
                      initial={{ scale: 1 }}
                    >
                      {/* AnimatePresence for handling smooth mounting/unmounting */}
                      <AnimatePresence mode='wait'>
                        <motion.div
                          key={currentImageIndex}
                          className='absolute inset-0 h-full w-full'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: TRANSITION_DURATION,
                            ease: 'easeInOut',
                          }}
                          style={{
                            backgroundImage: `url(/${product.images[currentImageIndex]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                      </AnimatePresence>
                    </motion.div>

                    {/* Image counter dots */}
                    {product.images.length > 1 && (
                      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 z-30'>
                        {product.images.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 w-1.5 rounded-full ${
                              index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/40'
                            } transition-colors duration-300`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Progress indicator */}
                    <div className='z-20 h-[3px] absolute bottom-0 left-0 right-0 overflow-hidden bg-black/10'>
                      <motion.div
                        className='bg-white h-full w-[0%]'
                        animate={progressControls}
                      />
                    </div>

                    {/* Subtle overlay gradient for better text visibility */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                </div>

                <div className='card-info px-[14px] pt-[14px] pb-[18px] gap-x-[16px] gap-y-[9px] grid-rows-[auto] grid-cols-[1fr] justify-start justify-items-center min-[767px]:p-[14px_16px_18px]'>
                  <div className='grid bg-scroll justify-self-stretch gap-y-[7px] grid-cols-[1fr] justify-start items-start gap-x-[9px] min-[768px]:gap-y-[16px] grid-rows-[auto] min-[768px]:grid-cols-[1fr_auto] min-[768px]:justify-between min-[768px]:items-start w-full'>
                    <div className='product-card-info grid gap-x-[16px] gap-y-[4px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                      {product.discount?.isDiscounted && (
                        <div className='items-center h-[28px] flex'>
                          {product.discount && (
                            <>
                              <TagIcon className='w-[16px] mr-[2px] inline-block align-middle max-w-full' />
                              <div className='text-[#a74030] mt-0 leading-[1em] tracking-[3px] uppercase pl-[6px] text-[11px] font-[500] border-[#07090c]'>
                                {product.discount.percentOff}
                              </div>
                            </>
                          )}
                        </div>
                      )}

                      {!product.discount?.isDiscounted &&
                        (product.tags?.length ?? 0) > 0 && (
                          <div className='items-center h-[28px] flex'>
                            <div className='leading-[1.2em] tracking-[3px] uppercase pl-[6px] text-[11px] font-[500] border-l-2 border-l-[#07090c]'>
                              {product.tags?.join()}
                            </div>
                          </div>
                        )}

                      <div className='gap-x-[16px] gap-y-[8px] grid-rows-[auto_auto] grid-cols-[1fr] grid'>
                        <h3 className='product-title tracking-[0px] leading-[1.3em] text-[18px] font-[500] group-hover:text-[#a74030] transition-colors duration-300'>
                          {product.name}
                        </h3>
                        <div className='subtitle-small tracking-[3px] text-[11px] text-[#667479] uppercase font-[300] leading-[1.3em]'>
                          {product.color}
                        </div>
                      </div>
                    </div>

                    <div className='dynamic-price flex flex-col bg-scroll tracking-[3px] text-[14px] uppercase text-[#667479] font-[300] leading-[1em] items-start min-[767px]:items-start'>
                      {product.discount?.isDiscounted ? (
                        <div className='flex items-center h-[28px] mt-[1px] text-[15px]'>
                          {product.discount.discountPrice} USD
                        </div>
                      ) : (
                        <div className='flex items-center h-[28px] mt-[1px] text-[15px]'>
                          {product.price} USD
                        </div>
                      )}

                      {product.discount?.isDiscounted && (
                        <div className='mt-[-1px] min-[480px]:mt-0 min-[768px]:mt-3px text-[#99a7ac] text-[13px] decoration-dashed line-through ml-2'>
                          {product.price} USD
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick add button */}
                  <div className='w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0'>
                    <button className='w-full bg-[#080808] text-white py-2 uppercase text-xs tracking-wider hover:bg-[#a74030] transition-colors duration-300'>
                      Quick Add
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
