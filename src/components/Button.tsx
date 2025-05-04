import { motion } from 'framer-motion';
import RevealButton from './RevealButton';

type ButtonProps = {
  setButtonHovered: (value: string | null) => void;
  buttonHovered: string | null;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  padding?: string;
  borderRadius?: string;
  text: string;
};

const Button = ({
  setButtonHovered,
  buttonHovered,
  backgroundColor,
  text,
}: ButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='mt-6 rounded-full px-6 py-2 text-black uppercase text-sm sm:text-base cursor-pointer'
      onMouseEnter={() => setButtonHovered(buttonHovered)}
      onMouseLeave={() => setButtonHovered(null)}
      onTouchStart={() => setButtonHovered(buttonHovered)}
      onTouchEnd={() => setButtonHovered(null)}
      style={{ touchAction: 'none', backgroundColor }}
    >
      <RevealButton text={text} isHovered={buttonHovered === 'center'} />
    </motion.div>
  );
};

export default Button;
