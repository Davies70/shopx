import GridWrapper from './GridWrapper';
import DragButton from './DragButton';
import { testimonials } from '@/data';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';
import useSwipe from '@/hooks/useSwipe';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [instantJump, setInstantJump] = useState(false);

  const handleNextButton = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  };

  const handlePreviousButton = () => {
    setCurrentIndex((currentIndex) => currentIndex - 1);
  };

  const swipeHandlers = useSwipe(handlePreviousButton, handleNextButton);

  const handleAnimationComplete = () => {
    if (currentIndex === testimonials.length) {
      setInstantJump(true);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setInstantJump(true);
      setCurrentIndex(testimonials.length - 1);
    } else {
      setInstantJump(false);
    }
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className='overflow-hidden py-[72px] min-[480px]:py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex relative justify-center z-10'>
      <GridWrapper isClipped={true}>
        <div className='flex col-[1/4] row-[1/2] min-[768px]:col-[2/3] justify-center w-full px-[5vw] overflow-hidden py-[36px] min-[768px]:overflow-visible'>
          <div className='bg-transparent clear-both justify-center w-full h-full pb-[60px] flex text-center relative '>
            <div
              {...swipeHandlers}
              ref={sliderRef}
              className='w-full overflow-visible min-[768px]:w-[60%] z-1 h-full relative left-0 right-0 whitespace-nowrap'
            >
              {testimonials.map((slide, index) => (
                <motion.div
                  key={index}
                  className='align-top text-left w-full h-full inline-block relative whitespace-normal'
                  animate={{ x: `${currentIndex * -100}%` }}
                  transition={
                    instantJump
                      ? { duration: 0.01, ease: 'linear' } // almost instant, but avoids animation glitches
                      : { duration: 0.9, ease: 'easeInOut' }
                  }
                  onAnimationComplete={handleAnimationComplete}
                  style={{
                    willChange: 'transform',
                  }}
                >
                  <motion.div
                    className='max-w-none min-[768px]:max-w-[600px] text-center h-full mx-auto'
                    animate={{
                      opacity: currentIndex === index ? 1 : 0.3,
                      scaleX: currentIndex === index ? 1 : 0.8,
                      scaleY: currentIndex === index ? 1 : 0.8,
                      transformStyle: 'preserve-3d',
                      transition: {
                        duration: 0.5,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <div className='grid relative gap-y-[26px] z-2 gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between'>
                      <div className='max-w-[975px]'>
                        <Heading text={slide.review} type='large' />
                      </div>
                      <div className='self-center'>
                        <div className='text-[#667479] tracking-[4px] uppercase text-[14px] font-[300] leading-[1.3em]'>
                          {slide.author}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <DragButton
              type='left'
              isParentHovered
              onClick={handlePreviousButton}
              sliderRef={sliderRef}
            />
            <DragButton
              type='right'
              isParentHovered
              onClick={handleNextButton}
            />
            <div className='flex absolute items-end h-[36px] bottom-0 justify-center min-h-[12px] m-auto p-0 text-[6px] top-auto left-0 right-0 transform-none  text-white'>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 ${
                    currentIndex === index ? 'bg-[#080808]' : 'bg-gray-500'
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

export default Testimonials;
