// import { motion } from 'framer-motion';
// import { useState } from 'react';

// type RevealButtonProps = {
//   text: string;
//   backgroundColor?: string;
//   textColor?: string;
//   textSize?: string;
//   padding?: string;
//   borderRadius?: string;
//   marginTop?: string;
//   onClick?: () => void;
//   type?: 'mobileNavButton' | 'normal';
//   isParentHovered?: boolean;
//   paddingInline?: string;
//   isPadding?: boolean;
//   isOverflowHidden?: boolean;
// };

// export default function RevealButton({
//   text,
//   onClick,
//   backgroundColor,
//   textColor = '',
//   borderRadius,
//   type = 'normal',
//   marginTop,
//   isPadding = true,
//   isParentHovered,
//   paddingInline,
//   isOverflowHidden = true,
// }: RevealButtonProps) {
//   const [isHovered, setIsHovered] = useState<boolean>(false);

//   const className =
//     type === 'mobileNavButton'
//       ? ' w-full h-full text-center max-w-full static flex no-underline leading-[1.5em] mx-0 items-center justify-center tracking-[5px] py-6 border-b-[#e4e9ec] border-b cursor-pointer overflow-hidden'
//       : 'leading-[1.5em] relative max-w-full inline-block tracking-[5px] decorate-none text-sm sm:text-base cursor-pointer';

//   return (
//     <button
//       className={className}
//       style={{
//         // touchAction: 'none',
//         backgroundColor,
//         color: textColor,
//         borderRadius,
//         marginTop,
//         fontSize: '11px',
//         padding: isPadding
//           ? type === 'mobileNavButton'
//             ? '1.5rem 0'
//             : '14px 23px 14px 28px'
//           : '0',
//         paddingInline,
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onFocus={() => setIsHovered(true)}
//       onBlur={() => setIsHovered(false)}
//       onTouchStart={() => setIsHovered(true)}
//       onTouchEnd={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div
//         className='items-center flex h-[1.2em]'
//         style={{ overflow: isOverflowHidden ? 'hidden' : 'visible' }}
//       >
//         <motion.span
//           className='uppercase block font-[400] text-center '
//           initial={{ y: 0, opacity: 1, scale: 1 }}
//           animate={
//             isHovered || isParentHovered
//               ? {
//                   y: ['0%', '-200%', '200%', '0%'],
//                   opacity: [1, 0, 0, 1],
//                   scale: [1, 0.98, 0.98, 1],
//                 }
//               : { y: '0%', opacity: 1, scale: 1 }
//           }
//           transition={{
//             duration: 0.6,
//             times: [0, 0.3, 0.3, 1],
//             ease: 'easeInOut',
//           }}
//           style={{
//             willChange: 'transform, opacity',
//             transformStyle: 'preserve-3d',
//           }}
//         >
//           {text}
//         </motion.span>
//       </div>
//     </button>
//   );
// }

import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

type RevealButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
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
  textColor,
  textSize = 'text-sm sm:text-base',
  borderRadius = '0.5rem',
  type = 'normal',
  marginTop,
  isPadding = true,
  isParentHovered,
  paddingInline,
  isOverflowHidden = true,
}: RevealButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isMobileButton = type === 'mobileNavButton';

  const buttonClasses = clsx(
    'cursor-pointer tracking-wide',
    isMobileButton
      ? 'w-full h-full text-center flex items-center justify-center border-b border-b-[#e4e9ec] py-6'
      : 'relative inline-block',
    isPadding ? (isMobileButton ? 'py-6' : 'py-[14px] px-[28px]') : 'p-0',
    textSize
  );

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={buttonClasses}
      style={{
        backgroundColor,
        color: textColor,
        borderRadius,
        marginTop,
        paddingInline,
      }}
    >
      <div
        className='flex items-center h-[1.2em]'
        style={{ overflow: isOverflowHidden ? 'hidden' : 'visible' }}
      >
        <motion.span
          className='uppercase font-medium text-center block'
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={
            isHovered || isParentHovered
              ? {
                  y: ['0%', '-100%', '100%', '0%'],
                  opacity: [1, 0, 0, 1],
                  scale: [1, 0.98, 0.98, 1],
                }
              : { y: '0%', opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.6,
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
