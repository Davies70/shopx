import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type FadeInIconButtonProps = {
  type: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isParentHovered?: boolean;
  className?: string;
};

const iconConfig = {
  left: {
    ariaLabel: 'previous slide',
    Icon: ArrowLeft,
    x: '-50%',
    spanAnim: [0, '-200%', '200%', 0],
    className: 'left-0 right-auto',
  },
  right: {
    ariaLabel: 'next slide',
    Icon: ArrowRight,
    x: '50%',
    spanAnim: [0, '200%', '-200%', 0],
    className: 'right-0 left-auto',
  },
};

const FadeInIconButton = ({
  type,
  onClick,
  isParentHovered,
  className = '',
}: FadeInIconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ariaLabel, Icon, x, spanAnim, className: posClass } = iconConfig[type];

  return (
    <motion.button
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      animate={{
        opacity: isParentHovered ? 1 : 0,
        scale: isParentHovered ? 1 : 0.8,
        x: isParentHovered ? x : 0,
        transition: { ease: 'easeInOut' },
      }}
      whileHover={{ scale: 0.8 }}
      className={`${className} ${posClass} bottom-[140px] min-[992px]:bottom-[90px] border-none bg-[#080808] flex rounded-full justify-center items-center w-[48px] h-[48px] z-3 cursor-pointer text-gray-400 m-auto absolute top-0 text-[10px] overflow-hidden touch-none bg-scroll`}
    >
      <motion.span
        animate={
          isHovered
            ? {
                x: spanAnim,
                transition: {
                  duration: 0.6,
                  times: [0, 0.4, 0.4, 1],
                  ease: 'easeInOut',
                },
              }
            : { x: 0 }
        }
      >
        <Icon size={14} />
      </motion.span>
    </motion.button>
  );
};

export default FadeInIconButton;
