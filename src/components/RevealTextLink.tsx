import { motion } from 'framer-motion';

type RevealTextLinkProps = {
  text: string;
};

export default function RevealTextLink({ text }: RevealTextLinkProps) {
  return (
    <motion.span
      className='flex flex-col w-full h-full relative  overflow-hidden text-[14px] uppercase tracking-[5px]'
      initial={{ y: 0 }}
      whileHover={{ y: '-50%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <span className='block'>{text}</span>
      <span className='block'>{text}</span>
    </motion.span>
  );
}
