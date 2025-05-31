import GridWrapper from '@/components/GridWrapper';
import RevealButton from '@/components/RevealButton';
import { motion } from 'framer-motion';

const ActionBanner = () => {
  return (
    <div className='flex relative pt-[48px] min-[768px]:pt-[80px] min-[992px]:pt-[200px] min-h-[500px] min-[992px]:min-h-[500px] pb-[80px] min-[992px]:pb-[100px] justify-center items-center'>
      <div className='grid z-20 gap-x-[16px] gap-y-[48px] grid-rows-[auto] grid-cols-[1fr] content-between'>
        <div className='py-[100px] min-[992px]:py-[120px] flex text-white items-center min-h-auto whitespace-nowrap overflow-hidden'>
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className='rotating-text pr-[60px] -z-50'
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              <h1 className='text-[100px] min-[992px]:text-[120px] leading-[1em] tracking-[0.04em] uppercase font-[600]'>
                Get yourself ready for the end of times
              </h1>
            </motion.div>
          ))}
        </div>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] gap-y-[36px] text-center justify-center justify-items-center gap-x-[16px] grid-rows-[auto] grid-cols-[1fr]  '>
            <div className='max-w-[550px]'>
              <div className='text-[20px] text-white leading-[1.65em] tracking-normal'>
                Product is designed to carry you to the next level so you are
                prepared for dooms day.
              </div>
            </div>
            <RevealButton
              text='shop all gear'
              backgroundColor='white'
              borderRadius='100px'
            />
          </div>
        </GridWrapper>
      </div>
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='bg-no-repeat bg-cover absolute inset-0 bg-[50%_center]'
          style={{
            backgroundImage: `url(/images/slide_4.webp)`,
          }}
        >
          <div className='inset-0 absolute bg-[rgba(8,8,8,0)]'></div>
        </div>
      </div>
    </div>
  );
};

export default ActionBanner;
