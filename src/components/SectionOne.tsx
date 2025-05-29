import StoryContent from './StoryContent';
import StoryImage from './StoryImage';
import { storyOne } from '@/data';
import GridWrapper from './GridWrapper';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  
} from 'framer-motion';
import { useRef } from 'react';

// Enhanced spring configuration for different elements
const SPRING_CONFIG = {
  images: { stiffness: 100, damping: 30, mass: 0.8 },
  content: { stiffness: 120, damping: 25, mass: 0.6 },
} as const;

// Parallax ranges for different effects
// const PARALLAX_RANGES = {
//   subtle: [-20, 0, 20], // Subtle movement
//   medium: [-40, 0, 40], // Medium movement
//   strong: [-60, 0, 60], // Strong movement
// } as const;

const SectionOne = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Main scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Content-specific scroll progress for more refined control
  const { scrollYProgress: contentScrollProgress } = useScroll({
    target: contentRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Enhanced parallax transforms with different intensities
  const translateY1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-40, 0, 40] // Medium parallax for first image
  );

  const translateY2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -40] // Opposite direction for second image
  );

  // Content animations - subtle vertical movement and fade
  const contentY = useTransform(
    contentScrollProgress,
    [0, 0.3, 0.7, 1],
    [30, 0, 0, -30]
  );

  const contentOpacity = useTransform(
    contentScrollProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7]
  );

  const contentScale = useTransform(
    contentScrollProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.98]
  );

  // Image-specific animations
  const image1Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1.1, 1, 1, 1.05]
  );

  const image2Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1.05, 1, 1, 1.1]
  );

  const image1Rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const image2Rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  // Apply spring physics to all transforms
  const springY1 = useSpring(translateY1, SPRING_CONFIG.images);
  const springY2 = useSpring(translateY2, SPRING_CONFIG.images);
  const springContentY = useSpring(contentY, SPRING_CONFIG.content);
  const springContentOpacity = useSpring(contentOpacity, SPRING_CONFIG.content);
  const springContentScale = useSpring(contentScale, SPRING_CONFIG.content);
  const springImage1Scale = useSpring(image1Scale, SPRING_CONFIG.images);
  const springImage2Scale = useSpring(image2Scale, SPRING_CONFIG.images);
  const springImage1Rotate = useSpring(image1Rotate, SPRING_CONFIG.images);
  const springImage2Rotate = useSpring(image2Rotate, SPRING_CONFIG.images);

  return (
    <section
      ref={sectionRef}
      className='flex py-[72px] min-[479px]:py-[80px] min-[768px]:py-[100px] z-10 relative justify-center min-[992px]:py-40 overflow-hidden'
    >
      <GridWrapper>
        <div className='grid gap-x-1.5 row-[1/2] col-[2/3] min-[992px]:row-[1/-1] min-[992px]:col-[1/-1] max-md:gap-y-15 max-[991px]:gap-y-20 gap-y-4 grid-cols-[auto_auto] grid-rows-[auto_auto] min-[992px]:grid-cols-[auto_1fr_auto] justify-stretch items-center'>
          {/* First Image with Enhanced Parallax */}
          <motion.div
            style={{
              y: springY1,
              scale: springImage1Scale,
              rotate: springImage1Rotate,
              willChange: 'transform',
            }}
            className='max-[991px]:row-start-2 relative border overflow-hidden w-[35vw] h-[45vw] min-[768px]:w-[20vw] min-[768px]:h-[29vw] min-[992px]:w-[15vw] min-[992px]:h-[21vw] justify-self-end'
          >
            <motion.div
              style={{
                scale: useSpring(
                  useTransform(scrollYProgress, [0, 1], [1.2, 1]),
                  SPRING_CONFIG.images
                ),
                willChange: 'transform',
              }}
              className='w-full h-full'
            >
              <StoryImage backgroundImage={storyOne.image_1} />
            </motion.div>
          </motion.div>

          {/* Content with Enhanced Animations */}
          <motion.div
            ref={contentRef}
            style={{
              y: springContentY,
              opacity: springContentOpacity,
              scale: springContentScale,
              willChange: 'transform, opacity',
            }}
            className='max-[991px]:row-span-1 max-[991px]:col-span-2 w-full max-w-[700px] mx-auto'
          >
            <StoryContent
              title={storyOne.title}
              description={storyOne.description}
            />
          </motion.div>

          {/* Second Image with Enhanced Parallax */}
          <motion.div
            style={{
              y: springY2,
              scale: springImage2Scale,
              rotate: springImage2Rotate,
              willChange: 'transform',
            }}
            className='max-[991px]:row-start-2 relative border overflow-hidden w-[35vw] h-[45vw] min-[768px]:w-[20vw] min-[768px]:h-[29vw] min-[992px]:w-[15vw] min-[992px]:h-[21vw]'
          >
            <motion.div
              style={{
                scale: useSpring(
                  useTransform(scrollYProgress, [0, 1], [1.15, 1.05]),
                  SPRING_CONFIG.images
                ),
                willChange: 'transform',
              }}
              className='w-full h-full'
            >
              <StoryImage backgroundImage={storyOne.image_2} />
            </motion.div>
          </motion.div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionOne;
