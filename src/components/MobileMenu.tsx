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
          className='fixed top-30 left-0 z-50 flex h-80 w-full flex-col items-center justify-center gap-6 bg-base-100 shadow-lg'
        >
          {/* Navigation Links */}


          <ul className='flex flex-col gap-4 w-full'>
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
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
