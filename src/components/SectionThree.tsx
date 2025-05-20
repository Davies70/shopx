import GridWrapper from './GridWrapper';
import { motion } from 'framer-motion';
import { productCards } from '@/data';
import ProductCard from './ProductCard';
import FadeInIconButton from './FadeInIconButton';
import { useState } from 'react';

const SectionThree = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [instantJump, setInstantJump] = useState(false);

  const handleNextButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevButton = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (currentIndex === productCards.length - 1) {
      // Jump to first real slide
      setInstantJump(true);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Jump to last real slide
      setInstantJump(true);
      setCurrentIndex(productCards.length - 2);
    } else {
      setInstantJump(false);
    }
  };

  return (
    <section className='overflow-hidden py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex relative justify-center z-10'>
      <GridWrapper>
        <div className='col-[1/4] row-[1/2] min-[992px]:col-[2/3] grid z-20 relative gap-x-4 gap-y-[48px] grid-rows-[auto] grid-cols-[1fr] content-between'>
          <div className='justify-self-center max-w-[550px]'>
            <div className='wrapper-intro-centered grid text-center grid-cols-[1fr] justify-items-center justify-start gap-x-4 gap-y-4 grid-rows-[auto]'>
              <div className='justify-center text-[#667479] tracking-[4x] uppercase text-[14px] font-[300] leading-[1.3em]'>
                Popular
              </div>
              <h1 className='font-[600] leading-[1.35em] text-[42px] tracking-[0.07em] uppercase my-0 mx-[0.67em] text-[#080808]'>
                Best Selling
              </h1>
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
              <motion.div className='w-[75%] min-[768px]:w-[45%] min-[992px]:w-[33.33%] overflow-visible z-1 h-full relative left-0 right-0 whitespace-nowrap block'>
                {productCards.map((product) => (
                  <ProductCard
                    product={product}
                    key={product.id}
                    translateX={currentIndex}
                    handleAnimationComplete={handleAnimationComplete}
                    instantJump={instantJump}
                  />
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
              />
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionThree;
