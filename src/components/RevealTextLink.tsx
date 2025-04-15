import { motion } from 'framer-motion';

type RevealTextLinkProps = {
  text: string;
};

export default function RevealTextLink({ text }: RevealTextLinkProps) {
  return (
    <div
      className='relative inline-block overflow-hidden uppercase tracking-[5px] cursor-pointer'
      style={{ height: '1em', lineHeight: '1em' }}
    >
      <motion.span
        className='flex flex-col'
        initial={{ y: 0 }}
        whileHover={{ y: '-50%' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <span className='block'>{text}</span>
        <span className='block'>{text}</span>
      </motion.span>
    </div>
  );
}
