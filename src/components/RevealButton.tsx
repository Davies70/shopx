import { motion } from 'framer-motion';
import { useState } from 'react';

type RevealButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  marginTop?: string;
  onClick?: () => void;
  type?: 'mobileNavButton' | 'normal';
  isParentHovered?: boolean;
  paddingInline?: string;
  isPadding?: boolean;
  isOverflowHidden?: boolean;
};

const BASE_STYLES = {
  leadingRelaxed: 'leading-[1.5em]',
  maxWidthFull: 'max-w-full',
  trackingWide: 'tracking-[5px]',
  cursor: 'cursor-pointer',
  textTransform: 'uppercase',
  fontWeight: 'font-[400]',
  textAlign: 'text-center',
} as const;

const MOBILE_NAV_CLASSES = [
  'w-full',
  'h-full',
  'static',
  'flex',
  'no-underline',
  'mx-0',
  'items-center',
  'justify-center',
  'py-6',
  'border-b-[#e4e9ec]',
  'border-b',
  'overflow-hidden',
  BASE_STYLES.leadingRelaxed,
  BASE_STYLES.maxWidthFull,
  BASE_STYLES.trackingWide,
  BASE_STYLES.cursor,
  BASE_STYLES.textAlign,
].join(' ');

const NORMAL_CLASSES = [
  'relative',
  'inline-block',
  'text-sm',
  'sm:text-base',
  BASE_STYLES.leadingRelaxed,
  BASE_STYLES.maxWidthFull,
  BASE_STYLES.trackingWide,
  BASE_STYLES.cursor,
].join(' ');

const DEFAULT_PADDING = {
  mobileNavButton: '1.5rem 0',
  normal: '14px 23px 14px 28px',
} as const;

const ANIMATION_CONFIG = {
  duration: 0.6,
  times: [0, 0.3, 0.3, 1] as const,
  ease: 'easeInOut' as const,
} as const;

export default function RevealButton({
  text,
  onClick,
  backgroundColor,
  textColor = '',
  borderRadius,
  type = 'normal',
  marginTop,
  isPadding = true,
  isParentHovered = false,
  paddingInline,
  isOverflowHidden = true,
}: RevealButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const shouldAnimate = isHovered || isParentHovered;
  const className =
    type === 'mobileNavButton' ? MOBILE_NAV_CLASSES : NORMAL_CLASSES;

  const handleInteractionStart = () => setIsHovered(true);
  const handleInteractionEnd = () => setIsHovered(false);

  const buttonStyle = {
    backgroundColor,
    color: textColor,
    borderRadius,
    marginTop,
    fontSize: '11px',
    padding: isPadding ? DEFAULT_PADDING[type] : '0',
    paddingInline,
  };

  const animationVariants = {
    initial: { y: 0, opacity: 1, scale: 1 },
    animate: shouldAnimate
      ? {
          y: ['0%', '-200%', '200%', '0%'],
          opacity: [1, 0, 0, 1],
          scale: [1, 0.98, 0.98, 1],
        }
      : { y: '0%', opacity: 1, scale: 1 },
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onFocus={handleInteractionStart}
      onBlur={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onClick={onClick}
    >
      <div
        className='items-center flex h-[1.2em]'
        style={{ overflow: isOverflowHidden ? 'hidden' : 'visible' }}
      >
        <motion.span
          className={`block ${BASE_STYLES.textTransform} ${BASE_STYLES.fontWeight} ${BASE_STYLES.textAlign}`}
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          transition={ANIMATION_CONFIG}
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
