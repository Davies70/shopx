import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { slidesTwo } from '@/data';
import GridWrapper from './GridWrapper';
import RevealButtonWithIcon from './RevealButtonWithIcon';
import FadeInIconButton from './FadeInIconButton';
import useSwipe from '@/hooks/useSwipe';
import Heading from './Heading';
import { Link } from 'react-router-dom';

const FeatureGrid = () => {
  // Create infinite loop slides: [last, ...original, first]
  const infiniteSlides = [
    slidesTwo[slidesTwo.length - 1], // Clone of last slide
    ...slidesTwo, // Original slides
    slidesTwo[0], // Clone of first slide
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide (index 1)
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

    // Handle seamless infinite loop transitions
    if (currentIndex === infiniteSlides.length - 1) {
      // At cloned first slide (end of array), instantly jump to real first slide
      setShouldAnimate(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // At cloned last slide (start of array), instantly jump to real last slide
      setShouldAnimate(false);
      setCurrentIndex(slidesTwo.length);
    }
  };

  // Get the actual slide index for dots indicator
  const getActualSlideIndex = (index: number) => {
    if (index === 0) return slidesTwo.length - 1; // Cloned last slide
    if (index === infiniteSlides.length - 1) return 0; // Cloned first slide
    return index - 1; // Real slides (subtract 1 because we start at index 1)
  };

  const actualSlideIndex = getActualSlideIndex(currentIndex);

  // Use effect to handle the seamless jump after state update
  useEffect(() => {
    if (!shouldAnimate && !isAnimating) {
      // Re-enable animation after the seamless jump
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, isAnimating]);

  return (
    <section
      className='overflow-hidden p-0 flex relative justify-center'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <GridWrapper>
        <div className='row-[1/2] col-[1/4] justify-center px-[5vw] flex'>
          <div
            aria-label='carousel'
            className='relative min-[992px]:pb-[0] pb-[36px] bg-[rgba(221,221,221,0)] justify-center w-full max-w-[1500px] h-full mx-auto px-0 flex text-center clear-both'
          >
            <motion.div
              ref={motionRef}
              className='z-1 overflow-visible w-full whitespace-nowrap h-full relative block left-0 right-0'
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={
                shouldAnimate
                  ? { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                  : { duration: 0 } // Instant transition for seamless jumps
              }
              onAnimationComplete={handleAnimationComplete}
              style={{
                willChange: 'transform',
              }}
            >
              {infiniteSlides.map((slide, index) => (
                <motion.div
                  {...swipeHandlers}
                  key={`slide-${index}`}
                  className='w-full shrink-0 whitespace-normal relative h-full inline-block align-top text-left'
                >
                  <div className='min-h-[70vw] h-full p-[36px_24px] min-[768px]:min-h-[65vw] min-[480px]:p-[36px] min-[992px]:min-h-[700px] min-[768px]:p-[40px] min-[992px]:p-[80px] flex flex-col justify-end mx-[3px] overflow-hidden relative'>
                    <div className='z-25 text-white relative max-w-[475px]'>
                      <div className='grid items-start grid-cols-1 grid-rows-1 gap-y-6 gap-x-4'>
                        <Heading type='normal' text={slide.title_1} />
                        <Link to='/shop'>
                          <RevealButtonWithIcon
                            text='Shop All'
                            iconBorderColor='transparent'
                            isTextPadding={false}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className='absolute inset-0 overflow-hidden'>
                      <div
                        className='inset-0 absolute'
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: '50%',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className='absolute inset-0 bg-[rgba(8,8,8,0)]'
                          style={{
                            backgroundImage:
                              'linear-gradient(rgba(7,9,12,0)30%,rgba(7,9,12,.1)55%,rgba(7,9,12,.25))',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <FadeInIconButton
              type='left'
              onClick={handlePrevButton}
              isParentHovered={isHovered}
            />
            <FadeInIconButton
              type='right'
              onClick={handleNextButton}
              isParentHovered={isHovered}
            />

            {/* Dots */}
            <div className='flex absolute items-end h-[36px] bottom-0 justify-center min-h-[12px] m-auto p-0 text-[6px] top-auto left-0 right-0 transform-none  text-white'>
              {slidesTwo.map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 ${
                    actualSlideIndex === index ? 'bg-[#080808]' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default FeatureGrid;
