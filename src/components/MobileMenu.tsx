import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import RevealButton from './RevealButton';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '@/data';
import { useNavigate } from 'react-router-dom';

//implement exit mobile view on outside click
type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
};

const MobileMenu = ({ isOpen, setIsOpen, toggleRef }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleTouchOutside = (event: TouchEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  });

  const handleSearchQuery = () => {
    navigate(`/search_results`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ height: 0 }}
          animate={{ height: 'fit-content' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          className='fixed min-w-[50px] bg-white left-0 z-50 flex w-full flex-col items-center justify-center  shadow-lg overflow-hidden'
        >
          <div className='max-w-full w-full flex flex-col decorate-none p-0 border-b-[#e4e9ec] border-b justify-self-stretch px-3 justify-center items-end'>
            <form
              onSubmit={handleSearchQuery}
              className='flex justify-center items-center  max-w-[500px] my-3 mx-auto w-full py-0 z-25 outline-none border bg-[#f4f8fa] border-[rgba(255,255,255,.25)] rounded-[100px] min-w-[34px] min-h-[34px] relative'
            >
              <input
                className='tracking-normal flex-grow px-4 py-2 text-sm text-gray-700 bg-transparent border-none outline-none placeholder-gray-500'
                placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <button
                type='submit'
                className='absolute cursor-pointer right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-sm text-white bg-[#e4e9ec] rounded-full hover:bg-[#d1d5db] focus:outline-none'
              >
                <Search className='text-black' size={12} />
              </button>
            </form>
          </div>
          <div className='grid w-full items-center justify-items-stretch justify-between auto-cols-fr auto-rows-auto gap-x-4 gap-y-0'>
            <div className='grid auto-cols-auto grid-cols-[auto] grid-rows-[auto] gap-x-13.5 w-full grid-flow-row bg-white text-black border-t-[#e4e9ec] gap-y-0 self-center col-start-1 col-end-2 row-start-1 row-end-2 '>
              {navLinks.map(({ url, link }) => (
                <Link to={url} key={link} onClick={() => setIsOpen(false)}>
                  <RevealButton text={link} type='mobileNavButton' />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
