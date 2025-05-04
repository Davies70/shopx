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
    <section className='relative min-h-screen overflow-hidden px-[5vw]  bg-[#080808] z-[1]'>
      <div className='absolute inset-0 px-[5vw]'>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{
              y: 0,
              scale: 0.95,
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className='absolute inset-0 bg-cover bg-center flex items-center justify-center'
            style={{
              backgroundImage: `url(${slidesOne[currentIndex].image})`,
            }}
          >
            <div className='relative z-10 flex flex-col items-center justify-start min-h-screen pt-[20vh] text-white max-w-[800px]'>
              {slidesOne.map((slide, index) =>
                index === currentIndex ? (
                  <AnimatePresence key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className='flex flex-col items-center text-center uppercase text-[30px] sm:text-[40px] lg:text-[80px] font-[600] tracking-[0.04em] leading-[1.25em] w-full'
                      key={index}
                    >
                      <h1>{slide.title_1}</h1>
                      <h1>{slide.title_2}</h1>
                      <h1>{slide.title_3}</h1>
                    </motion.div>
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
                  </AnimatePresence>
                ) : null
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='z-9 absolute left-[5vw] right-[5vw] top-auto bottom-6 flex -translate-y-1/2 transform justify-between items-center p-0 text-[6px] h-12 min-h-3 m-auto '>
        <IconButton
          onClick={handlePrev}
          type='left'
          color='rgba(255,255,255,0.75)'
        />
        <div>
          <div className='flex items-center justify-center gap-2 -z-20'>
            {slidesOne.map((_, index) => (
              <div
                key={index}
                className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 z-[10] ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <IconButton
          onClick={handleNext}
          type='right'
          color='rgba(255,255,255,0.75)'
        />
      </div>
      <div className='absolute inset-0 bg-[rgba(8,8,8,.3)]'></div>
    </section>
  );
}
