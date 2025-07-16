import { useState, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { Search, X } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import RevealButton from './RevealButton';
import GridWrapper from './GridWrapper';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data';
import CartTray from './CartTray';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleRef = useRef(null);

  const { pathname } = useLocation();
  const includedLinks = ['/', '/shop'];

  // Use Framer Motion's scroll hooks for better performance
  const { scrollY } = useScroll();

  // Transform scrollY to various values
  const MotionValueBackgroundColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']
  );

  const backgroundColor: string | MotionValue = !includedLinks.includes(
    pathname
  )
    ? 'rgba(255, 255, 255, 1)'
    : MotionValueBackgroundColor;

  // More efficient color transformations using direct color values
  const MotionValueTextColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(255, 255, 255, 1)', 'rgba(8, 8, 8, 1)'] // White to light black (#080808)
  );

  const textColor = !includedLinks.includes(pathname)
    ? 'rgba(8, 8, 8, 1)'
    : MotionValueTextColor;
  // Separate transformation for search text (white to gray)

  const MotionValueSearchTextColor = useTransform(
    scrollY,
    [0, 300],
    ['rgba(255, 255, 255, 1)', 'rgba(100, 100, 100, 1)']
  );

  const searchTextColor = !includedLinks.includes(pathname)
    ? 'rgba(100, 100, 100, 1)'
    : MotionValueSearchTextColor;

  const MotionValuenavbarHeight = useTransform(scrollY, [0, 300], [100, 60]);

  const navbarHeight = !includedLinks.includes(pathname)
    ? '60px'
    : MotionValuenavbarHeight;

  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='relative w-screen'>
      <CartTray isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <motion.div
        style={{
          willChange: 'height',
          height: navbarHeight,
        }}
        transition={{ duration: 0.4 }}
        className='fixed top-0 left-0 bottom-auto w-full flex justify-center bg-[rgba(255,255,255,0)] before:content-[""] after:clear-both after:content-[""] z-[1000]'
      >
        <motion.div
          className='bg-[rgba(255,255,255,0)] h-full w-full flex justify-center'
          style={{
            backgroundColor,
            willChange: 'background',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GridWrapper>
            <div className='rol-[1/2] col-[2/3] grid justify-items-center justify-between grid-rows-[auto] grid-cols-[1fr_1fr] min-[992px]:grid-cols-[auto_1fr_auto] text-[rgb(255,255,255)] gap-x-[24px] gap-y-[16px] '>
              <motion.div
                className='cursor-pointer  flex uppercase  justify-self-start items-center w-[110px] pl-0  font-[500] will-change-[filter] justify-start '
                style={{
                  fontFamily: 'Clash Display, sans-serif',
                  color: textColor,
                }}
              >
                <Link to='/'>
                  <div className='hidden min-[480px]:block text-[16px] text-center tracking-[4px] font-semibold'>
                    <span>Shop</span> <br /> <span>Apocalypse</span>
                  </div>

                  <div className='font-semibold flex flex-col leading-3 gap-0 min-[480px]:hidden text-[16px] items-center text-center tracking-[3px]'>
                    <div>Shop</div>
                    <div>Apoca</div>
                    <div>lypse</div>
                  </div>
                </Link>
              </motion.div>
              <nav className='hidden min-[992px]:flex justify-self-stretch relative float-right'>
                <div className='grid gap-[16px] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] justify-between items-stretch w-full'>
                  <div className='grid grid-flow-col grid-cols-[auto] grid-rows-[auto] gap-y-[16px] gap-x-[54px] justify-self-center row-[1/2] col-[2/3]'>
                    {navLinks.map(({ link, url }) => (
                      <Link to={url} key={link}>
                        <motion.div
                          className='row-[span_1] col-[span_1] flex static justify-center items-center h-full'
                          style={{ color: textColor }}
                        >
                          <RevealButton
                            text={link}
                            key={link}
                            type='normal'
                            isPadding={false}
                          />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                  <div className='flex order-[-9999] justify-self-stretch row-[span_1] col-[span_1] min-[992px]:row-[1/2] min-[992px]:col-[3/4] flex-col justify-center items-end  min-[992px]:pr-[6px]'>
                    {/* Search */}
                    <motion.div
                      className='hidden lg:flex w-8 h-8 rounded-full border border-opacity-25 justify-center items-center overflow-hidden tracking-normal'
                      animate={{ width: isSearchOpen ? '100%' : 34 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{
                        borderColor: searchTextColor,
                      }}
                    >
                      {!isSearchOpen ? (
                        <motion.button
                          onClick={() => setIsSearchOpen(true)}
                          className='w-8 h-8 flex justify-center items-center'
                          style={{
                            color: searchTextColor,
                          }}
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
                  </div>
                </div>
              </nav>

              <div className='grid grid-flow-col grid-cols-[1fr] grid-rows-[auto] gap-y-[16px] gap-x-[10px] min-[992px]:gap-x-[18px] items-center self-center justify-self-end '>
                <motion.a
                  tabIndex={0}
                  className='flex cursor-pointer'
                  style={{ color: textColor }}
                  onClick={() => setIsCartOpen(!isCartOpen)}
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

                <motion.button
                  aria-label='Toggle mobile menu'
                  onClick={toggleMobileMenu}
                  ref={toggleRef}
                  style={{ color: textColor }}
                  className='min-[992px]:hidden block p-0 items-center relative cursor-pointer'
                >
                  {/* <AlignLeft
                    size={24}
                    className='w-[28px] align-middle max-w-full'
                  /> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  
                  >
                    <line x1='3' y1='6' x2='21' y2='6' />
                    <line x1='3' y1='12' x2='21' y2='12' />
                    <line x1='3' y1='18' x2='21' y2='18' />
                  </svg>
                </motion.button>
              </div>
            </div>
          </GridWrapper>
        </motion.div>
        <div className='min[992px]:hidden absolute w-full left-0 right-0 top-full overflow-hidden bg-amber-800 z-[2000]'>
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
