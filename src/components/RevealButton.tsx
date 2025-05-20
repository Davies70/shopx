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
}: RevealButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const className =
    type === 'mobileNavButton'
      ? 'w-full h-full text-center max-w-full static flex no-underline leading-[1.2em] mx-0 items-center justify-center tracking-[5px] py-6 border-b-[#e4e9ec] border-b cursor-pointer overflow-hidden'
      : 'relative inline-block overflow-hidden tracking-[5px] decorate-none text-sm sm:text-base cursor-pointer';

  const translateY = type === 'mobileNavButton' ? '-200%' : '-200%';

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
      <div className='overflow-hidden items-center flex h-[1.2em]'>
        <motion.span
          className='uppercase block whitespace-nowrap overflow-hidden'
          initial={{ y: 0 }}
          animate={{
            y: isHovered || isParentHovered ? [translateY, '0'] : '0%',
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }} // Smoother easing
        >
          {text}
        </motion.span>
      </div>
    </button>
  );
}
