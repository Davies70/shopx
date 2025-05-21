import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, AlignRight, X } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import RevealButton from './RevealButton';
import GridWrapper from './GridWrapper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleRef = useRef(null);

  // Use Framer Motion's scroll hooks for better performance
  const { scrollY } = useScroll();

  // Transform scrollY to various values
  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']
  );

  // More efficient color transformations using direct color values
  const textColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(255, 255, 255, 1)', 'rgba(8, 8, 8, 1)'] // White to light black (#080808)
  );

  // Separate transformation for search text (white to gray)
  const searchTextColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(255, 255, 255, 1)', 'rgba(100, 100, 100, 1)']
  );

  const navbarHeight = useTransform(scrollY, [0, 300], [100, 60]);

  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col absolute top-0 left-0 w-full z-[1000]'>
      <motion.div
        className='fixed top-0 left-0 w-full '
        style={{
          backgroundColor,
          height: navbarHeight,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <GridWrapper>
          <div className='rol-[1/2] col-[2/3]'>
            <div
              className='navbar  z-50 relative uppercase border-none flex items-center justify-between'
              style={{ height: '100%' }}
            >
              {/* Left side: Logo */}
              <div
                tabIndex={0}
                className='navbar-start cursor-pointer'
                style={{
                  fontFamily: '"Montserrat", sans-serif', // More visually appealing font
                }}
              >
                <motion.a
                  className='flex flex-col justify-center items-center text-sm sm:text-base font-medium'
                  style={{ color: textColor }}
                >
                  <span>Shop</span>
                  <span>Apocalypse</span>
                </motion.a>
              </div>

              {/* Center Nav - Hidden on small screens */}
              <motion.div
                className='navbar-center hidden lg:flex text-xs justify-center gap-x-10 font-light h-full'
                style={{ color: textColor }}
              >
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <RevealButton text={item} key={item} type='normal' />
                ))}
              </motion.div>

              {/* Right Side: Search, Cart & Mobile Menu */}
              <div className='navbar-end flex items-center gap-4 sm:gap-8 relative'>
                {/* Search */}
                <motion.div
                  className='hidden lg:flex w-8 h-8 rounded-full border border-opacity-25 justify-center items-center overflow-hidden tracking-normal'
                  animate={{ width: isSearchOpen ? '60%' : 34 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ borderColor: textColor }}
                >
                  {!isSearchOpen ? (
                    <motion.button
                      onClick={() => setIsSearchOpen(true)}
                      className='w-8 h-8 flex justify-center items-center'
                      style={{ color: textColor }}
                    >
                      <Search size={14} className='cursor-pointer' />
                    </motion.button>
                  ) : (
                    <form className='flex items-center w-full px-2'>
                      <motion.input
                        type='text'
                        placeholder='Search...'
                        autoFocus
                        className='bg-transparent text-sm border-none outline-none w-full'
                        style={{
                          color: searchTextColor,
                          fontFamily: '"Inter", sans-serif', // Clean, modern font for search
                        }}
                      />
                      <motion.button
                        type='reset'
                        onClick={() => setIsSearchOpen(false)}
                        className='ml-2 cursor-pointer w-8 h-8 flex justify-center items-center rounded-full'
                        style={{ color: searchTextColor }}
                      >
                        <X size={16} />
                      </motion.button>
                    </form>
                  )}
                </motion.div>

                {/* Shopping Cart */}
                <motion.a
                  tabIndex={0}
                  className='flex cursor-pointer'
                  style={{ color: textColor }}
                >
                  <div className='text-xs sm:text-sm grid min-h-9 h-9 items-center justify-center content-center auto-cols-fr grid-cols-[1fr_auto] grid-rows-[auto] uppercase gap-x-2 sm:gap-x-2 gap-y-4 font-light'>
                    <div>Bag</div>
                    <div className='flex items-center'>
                      <span>(</span>
                      <span className='px-0.5'>0</span>
                      <span>)</span>
                    </div>
                  </div>
                </motion.a>

                {/* Mobile Dropdown - Visible only on small screens */}
                <div className='lg:hidden'>
                  <motion.button
                    aria-label='Toggle mobile menu'
                    className='btn btn-ghost btn-circle'
                    onClick={toggleMobileMenu}
                    ref={toggleRef}
                    style={{ color: textColor }}
                  >
                    <AlignRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
        {/* Mobile Menu */}

        <div className='lg:hidden'>
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleRef={toggleRef}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
