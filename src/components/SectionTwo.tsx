import { useState } from 'react';
import { motion } from 'framer-motion';
import { slidesTwo } from '@/data';
import GridWrapper from './GridWrapper';
import RevealButtonWithIcon from './RevealButtonWithIcon';
import FadeInIconButton from './FadeInIconButton';

const SectionTwo = () => {
  const extendedSlides = [
    slidesTwo[slidesTwo.length - 1], // Clone of last slide
    ...slidesTwo,
    slidesTwo[0], // Clone of first slide
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real slide
  const [isAnimating, setIsAnimating] = useState(false);
  const [instantJump, setInstantJump] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    if (currentIndex === extendedSlides.length - 1) {
      // Jump to first real slide
      setInstantJump(true);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Jump to last real slide
      setInstantJump(true);
      setCurrentIndex(extendedSlides.length - 2);
    } else {
      setInstantJump(false);
    }
  };

  return (
    <section
      className='overflow-hidden py-[100px] min-[992px]:p-0 flex relative justify-center'
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
              className='z-1 overflow-visible w-full whitespace-nowrap h-full relative block left-0 right-0'
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={
                instantJump
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
              }
              onAnimationComplete={handleAnimationComplete}
              style={{
                willChange: 'transform',
              }}
            >
              {extendedSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className='w-full shrink-0 whitespace-normal relative h-full inline-block align-top text-left'
                >
                  <div className='min-h-[65vw] p-[36px] min-[992px]:min-h-[700px] min-[768px]:p-[40px] min-[992px]:p-[80px] flex flex-col justify-end mx-[3px] overflow-hidden relative'>
                    <div className='z-25 text-white relative max-w-[475px]'>
                      <div className='grid items-start grid-cols-1 grid-rows-1 gap-y-6 gap-x-4'>
                        <h1 className='text-[32px] font-[600] leading-[1.35em] min-[992px]:text-[25px] tracking-[.07em] uppercase my-0'>
                          {slide.title_1}
                        </h1>
                        <RevealButtonWithIcon
                          text='Shop All'
                          iconBorderColor='transparent'
                          isTextPadding={false}
                        />
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
            <div className='flex absolute items-end h-[36px] bottom-0 justify-center min-h-[12px] m-auto p-0 text-[6px] top-auto left-0 right-0 transform-none min-[992px]:hidden text-white'>
              {slidesTwo.map((_, index) => (
                <div
                  key={index}
                  className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 ${
                    currentIndex - 1 === index ? 'bg-[#080808]' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionTwo;
