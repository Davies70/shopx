import { motion } from 'framer-motion';
import { useState } from 'react';

type RevealButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  padding?: string;
  borderRadius?: string;
  marginTop?: string;
  onClick?: () => void;
  type?: 'mobileNavButton' | 'normal';
  isParentHovered?: boolean;
  paddingInline?: string;
  isPadding?: boolean;
  isOverflowHidden?: boolean;
};

export default function RevealButton({
  text,
  onClick,
  backgroundColor,
  textColor = '',
  borderRadius,
  type = 'normal',
  marginTop,
  isPadding = true,
  isParentHovered,
  paddingInline,
  isOverflowHidden = true,
}: RevealButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const className =
    type === 'mobileNavButton'
      ? ' w-full h-full text-center max-w-full static flex no-underline leading-[1.5em] mx-0 items-center justify-center tracking-[5px] py-6 border-b-[#e4e9ec] border-b cursor-pointer overflow-hidden'
      : 'leading-[1.5em] relative max-w-full inline-block overflow-hidden tracking-[5px] decorate-none text-sm sm:text-base cursor-pointer';

  return (
    <button
      className={className}
      style={{
        touchAction: 'none',
        backgroundColor,
        color: textColor,
        borderRadius,
        marginTop,
        fontSize: '11px',
        padding: isPadding
          ? type === 'mobileNavButton'
            ? '1.5rem 0'
            : '14px 23px 14px 28px'
          : '0',
        paddingInline,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className='items-center flex h-[1.2em]'
        style={{ overflow: isOverflowHidden ? 'hidden' : 'visible' }}
      >
        <motion.span
          className='uppercase block font-[400] text-center '
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={
            isHovered || isParentHovered
              ? {
                  y: ['0%', '-200%', '200%', '0%'],
                  opacity: [1, 0, 0, 1],
                  scale: [1, 0.95, 0.95, 1],
                }
              : { y: '0%', opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.7,
            times: [0, 0.3, 0.3, 1],
            ease: 'easeInOut',
          }}
          style={{
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
          }}
        >
          {text}
        </motion.span>
      </div>
    </button>
  );
}
