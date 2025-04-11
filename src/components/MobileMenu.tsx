import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import RevealButton from './RevealButton';
import { useState } from 'react';

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'fit-content' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          className='fixed min-w-[50px] top-20 left-0 z-50 flex w-full flex-col items-center justify-center bg-base-100 shadow-lg overflow-hidden'
        >
          <div className='max-w-full w-full flex flex-col decorate-none p-0 border-b-[#e4e9ec] border-b justify-self-stretch px-3 justify-center items-end'>
            <form className='flex justify-center items-center bg-[#f4f8fa] max-w-[500px] my-3 mx-auto w-full py-0 z-25 outline-none border border-[rgba(255,255,255,.25)] rounded-[100px] min-w-[34px] min-h-[34px] relative'>
              <input
                className='tracking-normal flex-grow px-4 py-2 text-sm text-gray-700 bg-transparent border-none outline-none placeholder-gray-500'
                placeholder='Search...'
              />
              <button
                type='submit'
                className='absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-sm text-white bg-[#e4e9ec] rounded-full hover:bg-[#d1d5db] focus:outline-none'
              >
                <Search className='text-black' size={12} />
              </button>
            </form>
          </div>
          <div className='grid w-full items-center justify-items-stretch justify-between auto-cols-fr auto-rows-auto gap-x-4 gap-y-0'>
            <div className='grid auto-cols-auto grid-cols-[auto] grid-rows-[auto] gap-x-13.5 py-0 w-full grid-flow-row bg-white text-black border-t-[#e4e9ec] gap-y-0 self-center col-start-1 col-end-2 row-start-1 row-end-2'>
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <div
                  id={item}
                  key={item}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onTouchStart={() => setHoveredItem(item)}
                  onTouchEnd={() => setHoveredItem(null)}
                  className='w-full h-full text-center max-w-full static flex no-underline p-0 text-[12px] leading-[1.2em] mx-0 items-center justify-center uppercase tracking-[5px] py-6 text-black border-b-[#e4e9ec] border-b cursor-pointer'
                >
                  <RevealButton text={item} isHovered={hoveredItem === item} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
