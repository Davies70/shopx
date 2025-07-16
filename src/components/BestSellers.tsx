import { useState } from 'react';
import { motion } from 'framer-motion';

import FadeInIconButton from './FadeInIconButton';
import GridWrapper from './GridWrapper';
import { bestSellers } from '@/data';
import Heading from './Heading';
import useSwipe from '@/hooks/useSwipe';
import OldProductCard from './OldProductCard';

const BestSellers = () => {
  // Clone slides for infinite loop
  const slides = [
    bestSellers[bestSellers.length - 1], // clone last
    ...bestSellers,
    bestSellers[0], // clone first
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
  const [isAnimating, setIsAnimating] = useState(false);
  const [instantJump, setInstantJump] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    // If at the clone of the first slide, jump instantly to the real first slide
    if (currentIndex === slides.length - 1) {
      setInstantJump(true);
      setCurrentIndex(1);
    }
    // If at the clone of the last slide, jump instantly to the real last slide
    else if (currentIndex === 0) {
      setInstantJump(true);
      setCurrentIndex(slides.length - 2);
    } else {
      setInstantJump(false);
    }
  };

  const swipeHandlers = useSwipe(handlePrevButton, handleNextButton);

  return (
    <section className='overflow-hidden py-[72px] min-[480px]:py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex relative justify-center z-10'>
      <GridWrapper>
        <div className='col-[1/4] row-[1/2] min-[992px]:col-[2/3] grid z-20 relative gap-x-4 gap-y-[48px] grid-rows-[auto] grid-cols-[1fr] content-between'>
          <div className='justify-self-center max-w-[550px]'>
            <div className='grid text-center grid-cols-[1fr] justify-items-center justify-start gap-x-4 gap-y-4 grid-rows-[auto]'>
              <div className='justify-center text-[#667479] tracking-[4x] uppercase text-[14px] font-[300] leading-[1.3em]'>
                Popular
              </div>
              <Heading text='Best Selling' type='large' />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className='relative bg-scroll overflow-hidden px-[5vw] min-[992px]:px-0 min-[992px]:overflow-visible'
          >
            <div
              aria-label='carousel'
              className='flex h-full justify-center bg-transparent text-center clear-both relative bg-scroll'
            >
              <motion.div
                {...swipeHandlers}
                className='w-[75%] min-[768px]:w-[45%] min-[992px]:w-[33.33%] overflow-visible z-1 h-full relative left-0 right-0 whitespace-nowrap block will-change-transform'
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={
                  instantJump
                    ? { duration: 0 }
                    : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                }
                onAnimationComplete={handleAnimationComplete}
              >
                {slides.map((product, idx) => (
                  <OldProductCard product={product} key={idx} />
                ))}
              </motion.div>
              <FadeInIconButton
                type='left'
                isParentHovered={isHovered}
                onClick={handlePrevButton}
              />

              <FadeInIconButton
                type='right'
                isParentHovered={isHovered}
                onClick={handleNextButton}
                className='right-[5vw]'
              />
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default BestSellers;
