import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { slides } from '@/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RevealButton from './RevealButton';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonHovered, setButtonHovered] = useState<null | string>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='relative min-h-screen overflow-hidden px-[5vw]  bg-[#080808]'>
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
              backgroundImage: `url(${slides[currentIndex].image})`,
            }}
          >
            <div className='relative z-10 flex flex-col items-center justify-start min-h-screen pt-[20vh] text-white max-w-[800px]'>
              {slides.map((slide, index) =>
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
                      className='mt-6 rounded-full bg-white px-6 py-2 text-black uppercase text-sm sm:text-base cursor-pointer'
                      onMouseEnter={() => setButtonHovered('center')}
                      onMouseLeave={() => setButtonHovered(null)}
                      onTouchStart={() => setButtonHovered('center')}
                      onTouchEnd={() => setButtonHovered(null)}
                      style={{ touchAction: 'none' }}
                    >
                      <RevealButton
                        text='Shop All'
                        isHovered={buttonHovered === 'center'}
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : null
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='z-9999 absolute left-[5vw] right-[5vw] top-auto bottom-6 flex -translate-y-1/2 transform justify-between items-center p-0 text-[6px] h-12 min-h-3 m-auto '>
        <button
          onClick={handlePrev}
          onMouseEnter={() => setButtonHovered('left')}
          onMouseLeave={() => setButtonHovered(null)}
          onTouchStart={() => setButtonHovered('left')}
          onTouchEnd={() => setButtonHovered(null)}
          className='cursor-pointer'
          style={{ touchAction: 'none' }} // Prevents default touch behavior
        >
          <motion.div
            whileHover={{
              scale: 0.8,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='w-[48px] h-[48px] rounded-full border border-[rgba(255,255,255,0.25)]  overflow-hidden  flex justify-center items-center  '
          >
            <motion.span
              animate={
                buttonHovered === 'left'
                  ? {
                      x: [0, '-200%', '200%', 0],

                      transition: {
                        duration: 0.6,
                        times: [0, 0.4, 0.4, 1], // Controls timing of each keyframe
                        ease: 'easeInOut',
                      },
                    }
                  : {
                      x: 0,
                    }
              }
            >
              <ArrowLeft size={16} className='text-[rgba(255,255,255,0.75)]' />
            </motion.span>
          </motion.div>
        </button>
        <div>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-[1em] h-[1em] rounded-full mx-[9px] transition-colors duration-100 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className='cursor-pointer'
          onMouseEnter={() => setButtonHovered('right')}
          onMouseLeave={() => setButtonHovered(null)}
          onTouchStart={() => setButtonHovered('right')}
          onTouchEnd={() => setButtonHovered(null)}
          style={{ touchAction: 'none' }}
        >
          <motion.div
            whileHover={{
              scale: 0.8,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='w-[48px] h-[48px] rounded-full border border-[rgba(255,255,255,0.25)]  overflow-hidden  flex justify-center items-center  '
          >
            <motion.span
              animate={
                buttonHovered === 'right'
                  ? {
                      x: [0, '200%', '-200%', 0],

                      transition: {
                        duration: 0.6,
                        times: [0, 0.4, 0.4, 1], // Controls timing of each keyframe
                        ease: 'easeInOut',
                      },
                    }
                  : {
                      x: 0,
                    }
              }
            >
              <ArrowRight size={16} className='text-[rgba(255,255,255,0.75)]' />
            </motion.span>
          </motion.div>
        </button>
      </div>
      <div className='absolute inset-0 bg-[rgba(8,8,8,.3)]'></div>
    </section>
  );
}
