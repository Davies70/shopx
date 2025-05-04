import StoryContent from './StoryContent';
import StoryImage from './StoryImage';
import { storyOne } from '@/data';
import GridWrapper from './GridWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SectionOne = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Define the scroll ranges and corresponding translation values
  // First image starts higher, second image starts lower
  // They meet at the middle of the scroll range (0.5 progress)
  const translateY1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -40] // Starts above, meets in middle, goes below
  );

  const translateY2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-40, 0, 40] // Starts below, meets in middle, goes above
  );

  return (
    <section
      ref={sectionRef}
      className='flex py-20 z-10 relative justify-center min-[992px]:py-40 h-screen'
    >
      <GridWrapper>
        <div className='grid gap-x-1.5 row-[1/2] col-[2/3] min-[992px]:row-[1/-1] min-[992px]:col-[1/-1] max-md:gap-y-15 max-[991px]:gap-y-20 gap-y-4 grid-cols-[auto_auto] grid-rows-[auto_auto] min-[992px]:grid-cols-[auto_1fr_auto] justify-stretch items-center'>
          <motion.div
            style={{
              y: translateY1,
            }}
            className='max-[991px]:row-start-2 relative border overflow-hidden w-[20vw] h-[29vw] min-[992px]:w-[15vw] min-[992px]:h-[21vw] justify-self-end'
          >
            <StoryImage backgroundImage={storyOne.image_1} />
          </motion.div>
          <div className='max-[991px]:row-span-1 max-[991px]:col-span-2 w-full max-w-[700px] mx-auto'>
            <StoryContent
              title={storyOne.title}
              description={storyOne.description}
            />
          </div>
          <motion.div
            style={{
              y: translateY2,
            }}
            className='max-[991px]:row-start-2 relative border overflow-hidden w-[20vw] h-[29vw] min-[992px]:w-[15vw] min-[992px]:h-[21vw]'
          >
            <StoryImage backgroundImage={storyOne.image_2} />
          </motion.div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionOne;
