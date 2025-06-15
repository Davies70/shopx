import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { slidesOne } from '@/data';
import { Link } from 'react-router-dom';
import { productCards } from '@/data';
import ProductCard from '@/components/ProductCard';
import RevealButton from '@/components/RevealButton';
import Testimonials from '@/components/Testimonials';

const categories = productCards.concat(productCards);

const Shop = () => {
  return (
    <div className='z-10 bg-[#fff] relative'>
      <section className='min-h-[325px] pt-[200px] pb-[60px] text-white flex relative justify-center min-[768px]:min-h-[500px] min-[768px]:pt-[250px] min-[768px]:pb-[80px]'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] gap-y-[18x] grid-cols-[1fr] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[1fr_auto] grid-rows-[auto] items-end'>
            <div className='max-w-[425px] self-end'>
              <div className='grid justify-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[24px] gap-x-[16px]'>
                <div className='uppercase font-[300] text-[14px] tracking-[4px]'>
                  Shop all
                </div>
                <Heading
                  text='Get the perfect fit for you'
                  type='extra-large'
                />
              </div>
            </div>
          </div>
        </GridWrapper>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            animate={{
              scaleX: 1.07689,
              scaleY: 1.07689,
              translateY: '-0.6056%',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 bg-[50%] bg-no-repeat bg-cover'
            style={{
              backgroundImage: `url(${slidesOne[2].image})`,
            }}
          >
            <div className='absolute inset-0 bg-[rgba(8,8,8,.3)]'></div>
          </motion.div>
        </div>
      </section>
      <section className='border border-b-[#e4e9ec] pt-0 pb-[72px] min-[480px]:pb-[80px] min-[768px]:pb-[100px] z-10 justify-center flex relative min-[992px]:pb-[160px]'>
        <GridWrapper>
          <div className='grid col-[1/4] min-[480px]:col-[2/3] row-[1/2] gap-y-[26px] relative content-between auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] z-[20]'>
            <div className='pt-[48px] px-[5vw] min-[768px]:pt-[60px] min-[992px]:pt-[80px] flex pb-[6px]'>
              <div className='flex flex-col min-[768px]:flex-col gap-y-[16px] gap-x-[0] w-full'>
                <div className='tracking-[3px] text-[11px] font-[300] leading-[1.3em] uppercase text-[#667479] mb-[8px] min-[768px]:mb-0'>
                  Category:
                </div>
                <div className='flex flex-wrap gap-x-[12px] gap-y-[12px] items-center'>
                  {['Clothing', 'Accessories', 'Gas Mask'].map((category) => (
                    <Link
                      className='text-[#667479] tracking-[5px] uppercase items-center text-[11px] leading-[1.3em] flex max-w-full'
                      to={`/category/${category}`}
                      key={category}
                    >
                      <RevealButton text={category} isPadding={false} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='px-0 flex flex-col'>
              <div className='grid grid-cols-[1fr_1fr] min-[992px]:grid-cols-[1fr_1fr_1fr] gap-x-[6px] gap-y-[24px] grid-rows-[auto] auto-col-[1fr] content-start items-start pt-0'>
                {categories.map((product, index) => (
                  <Link
                    to='test'
                    className='grid auto-col-[1fr] grid-cols-[1fr] grid-rows-['
                  >
                    <ProductCard product={product} key={index} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
      <Testimonials />
    </div>
  );
};

export default Shop;
