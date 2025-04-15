import { Search, AlignRightIcon, X } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealButton from './RevealButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className='flex flex-col absolute top-0 left-0 w-full '>
      <div className='navbar px-[5vw] z-50 relative text-[#f4f8fa] uppercase h-[100px] border-none'>
        {/* Left side: Logo */}
        <div
          tabIndex={0}
          className='navbar-start cursor-pointer'
          style={{
            fontFamily: 'Clashdisplay, sans-serif',
          }}
        >
          <a className='flex flex-col justify-center items-center text-sm sm:text-base'>
            <span>Shop</span>
            <span>Apocalypse</span>
          </a>
        </div>

        {/* Center Nav - Hidden on small screens */}
        <div className='navbar-center hidden lg:flex text-xs justify-center gap-x-10 font-bold h-full'>
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              tabIndex={0}
              className='w-fit h-full flex justify-center items-center cursor-pointer'
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onTouchStart={() => setHoveredItem(item)}
              onTouchEnd={() => setHoveredItem(null)}
            >
              <RevealButton text={item} isHovered={hoveredItem === item} />
            </a>
          ))}
        </div>

        {/* Right Side: Cart & Mobile Menu */}
        <div className='navbar-end flex items-center gap-4 sm:gap-8 relative '>
          {/* Search */}
          <motion.div
            className='hidden lg:flex w-[34px] h-[34px] rounded-full border border-[rgba(255,255,255,0.25)] justify-center items-center overflow-hidden tracking-normal'
            animate={{ width: isSearchOpen ? '60%' : 34 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {!isSearchOpen ? (
              <button
                onClick={() => setIsSearchOpen(true)}
                className='w-[34px] h-[34px] flex justify-center items-center'
              >
                <Search
                  size={14}
                  className='text-[rgba(255,255,255,0.75)] cursor-pointer'
                />
              </button>
            ) : (
              <>
                <form className='flex items-center w-full px-2'>
                  <input
                    type='text'
                    placeholder='Search...'
                    autoFocus
                    className='bg-transparent text-sm text-white placeholder-gray-400 border-none outline-none w-full'
                  />
                  <button
                    type='reset'
                    onClick={() => setIsSearchOpen(false)}
                    className='text-white ml-2 cursor-pointer w-[34px] h-[34px] flex justify-center items-center rounded-full'
                  >
                    <X size={16} />
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Shopping Cart */}
          <a tabIndex={0} className='flex cursor-pointer'>
            <div className='text-xs sm:text-sm grid min-h-9 h-9 items-center justify-center content-center auto-cols-fr grid-cols-[1fr_auto] grid-rows-[auto] uppercase gap-x-[6px] sm:gap-x-[9px] gap-y-4'>
              <div>Bag</div>
              <div className='grid justify-items-center items-center justify-center grid-flow-col auto-cols-auto grid-rows-[auto] grid-cols-[auto] tracking-normal gap-x-[3px] gap-y-[3px]'>
                <div className='max-w-full inline-block tracking-normal'>(</div>
                <div className='min-w-0 h-auto ml-0 px-0 font-[400] text-center rounded-[9px] inline-block leading-4.5'>
                  0
                </div>
                <div className='max-w-full inline-block tracking-normal'>)</div>
              </div>
            </div>
          </a>

          {/* Mobile Dropdown - Visible only on small screens */}
          <div className='lg:hidden'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'
              onClick={() => setIsOpen(!isOpen)}
            >
              <AlignRightIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className='lg:hidden'>
        <MobileMenu isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Navbar;
