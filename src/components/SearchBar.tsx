import { motion, MotionValue } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type SearchBarType = {
  searchTextColor: MotionValue<string> | 'rgba(100, 100, 100, 1)';
  handleSearchEnter?: () => void;
};

const SearchBar = ({ searchTextColor }: SearchBarType) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchQuery = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search_results/query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className='flex order-[-9999] justify-self-stretch row-[span_1] col-[span_1] min-[992px]:row-[1/2] min-[992px]:col-[3/4] flex-col justify-center items-end min-[992px]:pr-[6px]'>
      <motion.div
        className='hidden lg:flex h-8 rounded-full border border-opacity-25 justify-center items-center overflow-hidden tracking-normal relative'
        initial={{ width: 34 }}
        animate={{ width: isSearchOpen ? 240 : 34 }}
        transition={{ duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
        style={{
          borderColor: searchTextColor,
        }}
      >
        {/* Search Icon - stays fixed left */}
        <motion.button
          layout
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={() => !isSearchOpen && setIsSearchOpen(true)}
          className='absolute left-0 top-0 w-8 h-8 flex justify-center items-center z-10'
          style={{
            color: searchTextColor,
            pointerEvents: isSearchOpen ? 'none' : 'auto',
            opacity: isSearchOpen ? 0 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          <Search size={16} className='cursor-pointer' />
        </motion.button>

        {/* Input & Close Icon */}
        <motion.form
          layout
          className='flex items-center w-full pl-8 pr-2'
          style={{
            opacity: isSearchOpen ? 1 : 0,
            pointerEvents: isSearchOpen ? 'auto' : 'none',
            transition: 'opacity 0.2s',
          }}
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/search_results');
          }}
        >
          <motion.input
            layout
            type='text'
            placeholder='Search...'
            autoFocus={isSearchOpen}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchQuery}
            className='bg-transparent text-sm border-none outline-none w-full'
            style={{
              color: searchTextColor,
              fontFamily: '"Inter", sans-serif',
            }}
          />
          <motion.button
            layout
            type='button'
            onClick={() => {
              setIsSearchOpen(false);
              setQuery('');
            }}
            className='ml-2 cursor-pointer w-8 h-8 flex justify-center items-center rounded-full'
            style={{ color: searchTextColor }}
          >
            <X size={16} />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default SearchBar;
