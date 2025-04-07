import { motion, AnimatePresence } from 'framer-motion';

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }} // Exits in the opposite direction
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          className='fixed top-30 left-0 z-50 flex  w-full flex-col items-center justify-center gap-6 bg-base-100 shadow-lg'
        >
          {/* Navigation Links */}

          {/* <ul className='flex flex-col gap-4 w-full'>
            <li className='p-4 border-b border-[#efe9ec] flex items-center justify-center static uppercase font-extralight'></li>
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <li
                className='p-4 border-b border-[#efe9ec] flex items-center justify-center static uppercase font-extralight'
                key={item}
              >
                <a href='#' className='text-center'>
                  {item}
                </a>
              </li>
            ))}
          </ul> */}
          <div className='grid w-full items justify-items-stretch  justify-between auto-cols-fr auto-rows-auto gap-x-4 gap-y-0'>
            <div className='grid auto-cols-auto grid-cols-[auto] grid-rows-[auto] gap-x-13.5 py-0 w-full grid-flow-row bg-white text-black border-t-[#e4e9ec] gap-y-0 self-center col-start-1 col-end-2 row-start-1 row-end-2'>
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a
                  id={item}
                  className='text-center max-w-full static flex decorate-none p-0 text-[12px] leading-[1.2em] mx-0 h-full items-center justify-center uppercase tracking-[5px] py-6 text-black border-b-[#e4e9ec] border-b  col-span- row-span-1'
                >
                  {item}
                </a>
              ))}
            </div>
            <div></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
