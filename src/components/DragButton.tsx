import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

type DragButtonProps = {
  isParentHovered?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type: 'left' | 'right';
  sliderRef?: React.RefObject<HTMLDivElement | null>;
};

const DragButton = ({ type, onClick, sliderRef }: DragButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isOutOfBounds, setIsOutOfBounds] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const arrowRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => setIsActive(true);
  const handlePointerUp = () => setIsActive(false);
  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => {
    setIsActive(false);
    setMousePos(null);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const parentRect = (
      e.currentTarget as HTMLDivElement
    ).getBoundingClientRect();
    setMousePos({
      x: e.clientX - parentRect.left,
      y: e.clientY - parentRect.top,
    });
  };

  const handleDrag = () => {
    if (!sliderRef?.current || !arrowRef.current) return;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const arrowRect = arrowRef.current.getBoundingClientRect();

    const outLeft = type === 'left' && arrowRect.left < sliderRect.left;
    const outRight = type === 'right' && arrowRect.right > sliderRect.right;
    const outBottom = arrowRect.bottom > sliderRect.bottom;

    setIsOutOfBounds(outLeft || outRight || outBottom);
  };

  return (
    <motion.div
      role='button'
      className='absolute justify-center items-center w-[40%] flex z-10 cursor-pointer top-0 bottom-0 '
      style={type === 'left' ? { left: 0 } : { right: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div className='relative w-full h-full'>
        <div className='inset-0 absolute z-[25]'></div>
        <AnimatePresence>
          {isActive && mousePos && (
            <motion.div
              ref={arrowRef}
              className='pointer-events-none aboslute z-[50] h-[48px] w-[48px] rounded-full border bg-[#07090c] border-[#e4e9ec] flex justify-center items-center text-gray-400 cursor-pointer text-[10px] overflow-hidden'
              drag
              dragConstraints={false}
              dragMomentum={false}
              onDrag={handleDrag}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isOutOfBounds ? 0 : 1,
                scale: isOutOfBounds ? 0.5 : 1,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: mousePos.x - 24,
                top: mousePos.y - 24,
              }}
            >
              {type === 'left' ? (
                <ArrowLeft size={18} width={18} color='white' />
              ) : (
                <ArrowRight size={18} width={18} color='white' />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DragButton;
