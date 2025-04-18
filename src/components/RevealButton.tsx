import { motion } from 'framer-motion';

type RevealButtonProps = {
  text: string;
  isHovered?: boolean;
};

export default function RevealButton({ text, isHovered }: RevealButtonProps) {
  return (
    <button className='relative inline-block overflow-hidden text-[12px] uppercase tracking-[5px] cursor-pointer decorate-none'>
      <motion.span
        className='flex'
        initial={{ y: 0 }}
        animate={{ y: isHovered ? ['150%', '0'] : '0%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }} // Smoother easing
      >
        <span className='block'>{text}</span>
      </motion.span>
    </button>
  );
}
