import RevealButtonWithIcon from './RevealButtonWithIcon';
import { FeaturedType } from '@/types';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

import FeatureCard from './FeatureCard';

type FeaturedProps = {
  cards: FeaturedType;
};

const Featured = ({ cards }: FeaturedProps) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['end end', 'start start'],
  });

  // Parallax transforms
  const translateY1 = useTransform(scrollYProgress, [0, 1], ['-10vw', '0vw']);
  const translateY2 = useTransform(scrollYProgress, [0, 1], ['-20vw', '0vw']);

  // Use spring for smoother animation
  const springY1 = useSpring(translateY1, { stiffness: 80, damping: 20 });
  const springY2 = useSpring(translateY2, { stiffness: 80, damping: 20 });

  return (
    <div className='relative'>
      <div className='grid gap-y-[36px] grid-cols-[1fr_1fr_1fr] min-[992px]:gap-y-[16px] gap-x-[6px] min-[992px]:grid-cols-[1fr_1fr_1fr_1fr] items-start pt-0 grid-rows-[auto]'>
        <div className='grid max-[991px]:row-[span_1] max-[991px]:col-[span_3] mb-0 relative top-0  min-[992px]:mb-[20vw] min-[992px]:sticky min-[992px]:top-[120px] gap-x-[12px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr] justify-items-start max-w-[300px] pl-0 pr-[60px]'>
          <div className='grid gap-y-[18px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] justify-items-start'>
            <h1 className='text-[26px] tracking-[0] leading-[1.3em] font-[500] '>
              {cards.title}
            </h1>
            <div className='text-[15px] text-[#667479] leading-[1.65em] font-[400] tracking-[0]'>
              {cards.text}
            </div>
            <RevealButtonWithIcon
              text='view full product'
              isTextPadding={false}
              textColor='#667479'
            />
          </div>
        </div>
        <motion.div ref={imageRef}>
          <FeatureCard image={cards.images[0]} />
        </motion.div>

        <motion.div
          style={{
            y: springY1,
            willChange: 'transform', // Hint for GPU acceleration
          }}
        >
          <FeatureCard image={cards.images[1]} marginTop='10vw' />
        </motion.div>
        <motion.div
          style={{
            y: springY2,
            willChange: 'transform', // Hint for GPU acceleration
          }}
        >
          <FeatureCard image={cards.images[2]} marginTop='20vw' />
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
