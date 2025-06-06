import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const transitionDuration = 1; // seconds
const waitBetween = 0.3; // seconds
const stickTime = 1; // seconds before next image appears

type FlyingImagesProp = {
  cards: string[];
};

const FlyingImages = ({ cards }: FlyingImagesProp) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let timeout;

    if (stage < cards.length) {
      // animate in next image
      timeout = setTimeout(
        () => setStage(stage + 1),
        (transitionDuration + stickTime) * 1000
      );
    } else if (stage < cards.length * 2) {
      // animate out previous images
      timeout = setTimeout(
        () => setStage(stage + 1),
        (transitionDuration + waitBetween) * 1000
      );
    } else {
      // restart cycle
      timeout = setTimeout(() => setStage(0), 1000);
    }

    return () => clearTimeout(timeout);
  }, [cards.length, stage]);

  return (
    <div className='w-[90vw] h-[80vw] min-[480px]:w-[70vw] min-[480px]:h-[60vw] min-h-[40vw] min-w-[40vw] p-[20px] overflow-hidden min-[768px]:w-[22vw] min-[768px]:h-[22vw] flex relative justify-items-end min-[768px]:min-w-0 min-[768px]:min-h-0 min-[768px]:p-0 min-[768px]:overflow-visible'>
      {cards.map((image, index) => {
        const isEntering = stage > index;
        const isExiting = stage >= cards.length + (cards.length - index);

        return (
          <motion.div
            key={index}
            className='will-change-transform w-[55vw] h-[55vw] min-[480px]:w-[40vw] min-[480px]:h-[40vw] min-[768px]:w-[22vw] min-[768px]:h-[22vw] absolute overflow-hidden'
            initial={{
              opacity: 0,
              y: '100%',
            }}
            transition={{
              ease: 'linear',
              duration: transitionDuration,
            }}
            animate={
              isEntering && !isExiting
                ? {
                    y: 0,
                    opacity: 1,
                    rotateZ: index === 1 ? '-5deg' : '5deg',
                  }
                : isExiting
                ? { y: '100%', opacity: 0 }
                : { opacity: 0, y: '100%' }
            }
            style={{ zIndex: index + 1 }}
          >
            <div className='absolute inset-0 overflow-hidden'>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                }}
                className='bg-[50%] bg-no-repeat bg-cover absolute inset-0'
              ></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlyingImages;
