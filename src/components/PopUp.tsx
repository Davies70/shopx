import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className='fixed inset-0 bg-black/40  z-[99999] flex justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='relative w-[90%] max-w-[550px] bg-white rounded-[10px] shadow-xl p-6 sm:p-10 flex flex-col items-center text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <button
              onClick={handleClose}
              className='absolute cursor-pointer top-4 right-4 w-10 h-10 rounded-full bg-gray-800 text-white text-lg flex items-center justify-center hover:bg-gray-700 transition'
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <h1 className='text-[#f30000] font-extrabold uppercase tracking-wider text-xl'>
              🚨 Heads Up!
            </h1>

            <p className='text-lg sm:text-xl mt-5 mb-4 font-medium text-gray-800 leading-snug'>
              This is a{' '}
              <span className='text-[#f30000] font-bold'>fake store</span> made
              to impress, not to prep.
            </p>

            <p className='text-sm text-gray-600'>
              No real apocalypse supplies here — just some solid frontend and
              full-stack skills in action. Browse freely, panic *not*.
            </p>

            <div className='mt-6 text-xs text-gray-400 uppercase tracking-wider'>
              You may now return to your bunker.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
