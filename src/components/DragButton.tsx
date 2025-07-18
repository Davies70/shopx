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
  const [showPrompt, setShowPrompt] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => setIsActive(true);
  const handlePointerUp = () => setIsActive(false);
  const handleMouseEnter = () => {
    setIsActive(true);
    setShowPrompt(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
    setMousePos(null);
    setShowPrompt(false);
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
      className='absolute justify-center items-center w-[40%] flex z-10 cursor-pointer top-0 bottom-0'
      style={type === 'left' ? { left: 0 } : { right: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseMove={handleMouseMove}
    >
      <div className='relative w-full h-full'>
        <div className='inset-0 absolute z-[25]'></div>
        {/* Prompt cursor */}
        <AnimatePresence>
          {showPrompt && mousePos && !isActive && (
            <motion.div
              className='pointer-events-none absolute z-[60] flex flex-col items-center justify-center'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                left: mousePos.x - 36,
                top: mousePos.y - 36,
                width: 72,
                height: 72,
              }}
            >
              <div className='rounded-full bg-[#222] bg-opacity-80 text-white flex flex-col items-center justify-center shadow-lg w-[72px] h-[72px]'>
                <span className='text-xs font-semibold tracking-wide'>
                  Drag
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Drag arrow */}
        <AnimatePresence>
          {isActive && mousePos && (
            <motion.div
              ref={arrowRef}
              className='absolute z-[50] h-[48px] w-[48px] rounded-full border bg-[#07090c] border-[#e4e9ec] flex justify-center items-center text-gray-400 cursor-pointer text-[10px] overflow-hidden'
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
              onClick={onClick}
              style={{
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
