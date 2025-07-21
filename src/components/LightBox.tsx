import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getProductImages } from '@/services';

type LightBoxProps = {
  setIsLightBoxOpen: (a: boolean) => void;
};

const LightBox = ({ setIsLightBoxOpen }: LightBoxProps) => {
  const [current, setCurrent] = useState(2); // Default to 'gren-3.png'
  const thumbsRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const id = location.pathname.slice(10);
  const images = getProductImages(id);

  // Scroll thumbnail into view when current changes
  useEffect(() => {
    const thumbs = thumbsRef.current;
    if (thumbs) {
      const activeThumb = thumbs.querySelector(`[data-index="${current}"]`);
      if (activeThumb && activeThumb instanceof HTMLElement) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [current]);

  return (
    <motion.div
      className='h-screen w-screen overflow-auto cursor-auto z-[2000] bg-[rgba(0,0,0,.9)] fixed inset-0'
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='h-full overflow-auto flex flex-col'>
        <div className='flex-1 relative flex items-center justify-center'>
          {/* Left Arrow */}
          {current > 0 && (
            <button
              className='hidden min-[768px]:flex text-white left-0 top-0 bottom-0 absolute transition-all w-[4em] justify-center items-center cursor-pointer z-10'
              aria-label='previous image'
              onClick={() => setCurrent((i) => Math.max(i - 1, 0))}
              tabIndex={0}
            >
              <ChevronLeft size={48} opacity={0.7} />
            </button>
          )}

          {/* Main Image */}
          <div className='inline-block align-middle'>
            <figure className='cursor-pointer relative'>
              <img
                className='max-h-[86vh] max-w-screen w-auto h-auto rounded-lg shadow-lg transition-all duration-300'
                src={images[current]}
                alt='Main'
              />
            </figure>
          </div>

          {/* Right Arrow */}
          {current < images.length - 1 && (
            <button
              className='hidden min-[768px]:flex text-white right-0 top-0 bottom-0 absolute transition-all w-[4em] cursor-pointer justify-center items-center z-10'
              aria-label='next image'
              onClick={() =>
                setCurrent((i) => Math.min(i + 1, images.length - 1))
              }
              tabIndex={0}
            >
              <ChevronRight size={48} opacity={0.7} />
            </button>
          )}

          {/* Close Button */}
          <button
            className='h-[2.6em] text-white right-0 cursor-pointer w-[4em] absolute transition-all top-0 min-[768px]:opacity-80 flex justify-center items-center z-20'
            aria-label='close lightbox'
            tabIndex={0}
            onClick={() => setIsLightBoxOpen(false)}
            // Add your close logic here
          >
            <X size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div
          className='transition-all whitespace-nowrap px-2 absolute left-0 right-0 bottom-0 overflow-x-auto overflow-y-hidden flex justify-center items-center bg-[rgba(0,0,0,0.7)] py-2'
          role='tablist'
          ref={thumbsRef}
        >
          {images.map((img, index) => (
            <div
              key={index}
              data-index={index}
              className={`cursor-pointer w-[10vh] inline-block mx-2 rounded-lg border-2 transition-all duration-200 ${
                current === index
                  ? 'border-white opacity-100 shadow-lg'
                  : 'border-transparent opacity-60 hover:opacity-80'
              }`}
              tabIndex={0}
              aria-label={`show item ${index + 1} of ${images.length}`}
              aria-selected={current === index}
              role='tab'
              onClick={() => setCurrent(index)}
            >
              <div className='bg-[#222] h-[10vh] relative overflow-hidden rounded-lg'>
                <motion.img
                  className='w-full h-full object-cover'
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  animate={{ scale: current === index ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LightBox;
