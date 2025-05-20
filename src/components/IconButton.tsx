import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
type IconButtonProps = {
  onClick?: () => void;
  type: 'left' | 'right' | 'none';
  color?: string;
  isParentHovered?: boolean;
  isParentFocused?: boolean;
  isParentActive?: boolean;
  borderColor?: string;
  isCircle?: boolean;
};
const IconButton = ({
  onClick,
  type,
  color = 'rgb(255, 255, 255)',
  isParentHovered = false,
  borderColor = 'rgba(255,255,255,0.25)',
  isCircle = true,
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      className='cursor-pointer touch-none'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{
          scale: 0.8,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className='w-[48px] h-[48px] rounded-full  overflow-hidden  flex justify-center items-center p-0'
        style={{
          border: isCircle ? `1px solid ${borderColor}` : 'none',

          height: isCircle ? '48px' : '100%',
        }}
      >
        <motion.span
          animate={
            isHovered || isParentHovered
              ? {
                  x:
                    type === 'left'
                      ? [0, '-200%', '200%', 0]
                      : [0, '200%', '-200%', 0],

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
          {type === 'left' ? (
            <ArrowLeft
              size={16}
              style={{
                color,
              }}
            />
          ) : (
            <ArrowRight
              size={16}
              style={
                isCircle
                  ? { color }
                  : isParentHovered
                  ? { color }
                  : { color: 'transparent' }
              }
            />
          )}
        </motion.span>
      </motion.div>
    </button>
  );
};

export default IconButton;
