import { motion } from 'framer-motion';

type RevealButtonProps = {
  text: string;
  isHovered?: boolean;
};

export default function RevealButton({ text, isHovered }: RevealButtonProps) {
  return (
    <button
      className='relative inline-block overflow-hidden text-[14px] uppercase tracking-[5px] cursor-pointer'
      style={{ height: '1em', lineHeight: '1em' }} // Ensure only one line fits
    >
      <motion.span
        className='flex flex-col'
        initial={{ y: 0 }}
        animate={{ y: isHovered ? '-50%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <span className='block'>{text}</span>
        <span className='block'>{text}</span>
      </motion.span>
    </button>
  );
}
