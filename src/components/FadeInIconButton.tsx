import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type FadeInIconButtonProps = {
  type: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isParentHovered?: boolean;
};
const FadeInIconButton = ({
  type,
  onClick,
  isParentHovered,
}: FadeInIconButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  if (type === 'left') {
    return (
      <motion.button
        aria-label='previous slide'
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        animate={{
          opacity: isParentHovered ? 1 : 0,
          scale: isParentHovered ? 1 : 0.8,
          x: isParentHovered ? '-50%' : 0,
          transition: {
            ease: 'easeInOut',
          },
        }}
        whileHover={{
          scale: 0.8,
        }}
        className='left-0 bottom-[140px] min-[992px]:bottom-[90px] border-none bg-[#080808] flex rounded-[100%] justify-center items-center w-[48px] h-[48px] z-3 right-auto cursor-pointer text-gray-400 m-auto absolute top-0 text-[10px] overflow-hidden touch-none bg-scroll'
      >
        <motion.span
          animate={
            isHovered
              ? {
                  x: [0, '-200%', '200%', 0],
                  transition: {
                    duration: 0.6,
                    times: [0, 0.4, 0.4, 1], // Controls timing of each keyframe
                    ease: 'easeInOut',
                  },
                }
              : {
                  x: 0,
                }
          }
        >
          <ArrowLeft size={14} />
        </motion.span>
      </motion.button>
    );
  } else {
    return (
      <motion.button
        aria-label='next slide'
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        animate={{
          opacity: isParentHovered ? 1 : 0,
          scale: isParentHovered ? 1 : 0.8,
          x: isParentHovered ? '50%' : 0,
          transition: { ease: 'easeInOut' },
        }}
        whileHover={{
          scale: 0.8,
        }}
        className='right-0 bottom-[140px] min-[992px]:bottom-[90px] border-none bg-[#080808] flex rounded-[100%] justify-center items-center w-[48px] h-[48px] z-3 left-auto cursor-pointer text-gray-400 m-auto absolute top-0 text-[10px] overflow-hidden touch-none bg-scroll'
      >
        <motion.span
          animate={
            isHovered
              ? {
                  x: [0, '200%', '-200%', 0],

                  transition: {
                    duration: 0.6,
                    times: [0, 0.4, 0.4, 1], // Controls timing of each keyframe
                    ease: 'easeInOut',
                  },
                }
              : {
                  x: 0,
                }
          }
        >
          <ArrowRight size={14} />
        </motion.span>
      </motion.button>
    );
  }
};

export default FadeInIconButton;
