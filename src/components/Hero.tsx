import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { slidesOne } from '@/data';
import RevealButton from './RevealButton';
import IconButton from './IconButton';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesOne.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesOne.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='min-h-[93vh] min-[480px]:min-h-[100vh] flex flex-row  bg-[#080808] justify-center'>
      <div className='flex justify-center w-full relative overflow-hidden px-[5vw]'>
        <AnimatePresence>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{
              y: 0,
              scale: 0.95,
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            className='h-full clear-both text-center max-w-[1500px] items-stretch bg-[#080808] absolute inset-0 bg-cover  flex  justify-center bg-[34%] min-[480px]:bg-[39%] min-[768px]:bg-[50%] min-[992px]:bg-[73%] bg-no-repeat '
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${slidesOne[currentIndex].image})`,
            }}
            key={currentIndex}
          >
            <div className='absolute inset-0 bg-[rgba(8,8,8,.3)]'></div>
            <div className='relative z-1 overflow-visible whitespace-nowrap h-full block left-0 right-0'>
              {slidesOne.map((slide, index) =>
                index === currentIndex ? (
                  <motion.div
                    className='inline-block whitespace-normal relative w-full h-full text-left align-top'
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className='slide-content flex w-full h-full pt-[100px] pb-[140px] items-center justify-center'>
                      <div className='z-[100] relative text-white grid max-w-[800px] justify-items-center grid-cols-[1fr] grid-rows-[auto_auto] text-center gap-y-[36px] gap-x-[24px]'>
                        <motion.h1 className='text-[40px] min-[480px]:text-[48px] min-[768px]:text-[64px] min-[992px]:text-[80px] tracking-[0.04em] uppercase font-[600] leading-[1.25em]'>
                          {slide.title_1} <br />
                        </motion.h1>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <RevealButton
                            text='Shop All'
                            backgroundColor='white'
                            marginTop='36px'
                            textColor='black'
                            borderRadius='calc(infinity * 1px)'
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </div>
            <motion.div className='absolute overflow-hidden m-auto z-[3] bottom-[36px] left-0 right-auto top-auto'>
              <IconButton
                onClick={handlePrev}
                type='left'
                color='rgba(255,255,255,0.75)'
              />
            </motion.div>

            <motion.div className='absolute overflow-hidden m-auto z-[3] bottom-[36px] right-0 left-auto top-auto'>
              <IconButton
                onClick={handleNext}
                type='right'
                color='rgba(255,255,255,0.75)'
              />
            </motion.div>

            <div className='z-[2] flex absolute items-center justify-center bottom-[36px] flex-row min-[992px]:bottom-[40px] h-[48px] min-h-[12px] m-auto p-0 text-[6px] top-auto left-0 right-0 transform-none'>
              {slidesOne.map((_, index) => (
                <div
                  key={index}
                  className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 z-[10] ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
