import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import RevealButton from '@/components/RevealButton';
import Testimonials from '@/components/Testimonials';
import { shopAllProducts } from '@/data';

const categories = [
  { text: 'Armored Outerwear', link: 'armored_outerwear' },
  { text: 'Tactical Head Protection', link: 'tactical_head_protection' },
  { text: 'Mission-Ready Eye Gear', link: 'mission_ready_eye_gear' },
  { text: 'Survival Handwear', link: 'survival_handwear' },
];

const Shop = () => {
  return (
    <div className='z-10 bg-white relative'>
      {/* Hero Section */}
      <section className='min-h-[300px] pt-[140px] pb-[40px] flex justify-center items-center relative min-[768px]:min-h-[450px] min-[768px]:pt-[200px] min-[768px]:pb-[60px]'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] grid-cols-1 items-end'>
            <div className='max-w-[500px] self-end'>
              <div className='grid gap-y-6 text-white drop-shadow-lg'>
                <Heading
                  text='Browse our complete collection'
                  type='extra-large'
                />
              </div>
            </div>
          </div>
        </GridWrapper>
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            animate={{
              scaleX: 1.08,
              scaleY: 1.08,
              translateY: '-0.6%',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 bg-center bg-no-repeat bg-cover'
            style={{
              backgroundImage: `url(/images/sliders/slide_5.jpg)`,
            }}
          >
            <div className='absolute inset-0 bg-black/60' />
          </motion.div>
        </div>
      </section>

      {/* Category & Products Section */}
      <section className='border-b border-[#e4e9ec] pt-0 pb-16 min-[480px]:pb-20 min-[768px]:pb-24 min-[992px]:pb-36 z-10 flex justify-center relative bg-[#f9fafb]'>
        <GridWrapper>
          <div className='grid col-[1/4] min-[480px]:col-[2/3] row-[1/2] gap-y-10 relative content-between grid-cols-1 z-20'>
            {/* Categories */}
            <div className='pt-12 px-4 min-[768px]:pt-16 min-[992px]:pt-20 flex pb-2'>
              <div className='flex flex-col gap-y-4 w-full'>
                <div className='tracking-widest text-xs font-light uppercase text-[#667479] mb-2'>
                  Category:
                </div>
                <div className='flex flex-wrap gap-x-4 gap-y-3 items-center'>
                  {categories.map(({ text, link }) => (
                    <Link
                      className='no-underline'
                      to={`/category/${link}`}
                      key={text}
                    >
                      <div
                        className='rounded-lg w-fit border border-[#e4e9ec] bg-white hover:bg-[#f1f5f9] transition-colors flex items-center shadow-sm'
                        style={{
                          minWidth: 0,
                          textAlign: 'left',
                        }}
                      >
                        <RevealButton text={text} isPadding={true} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Products */}
            <div className='px-0 flex flex-col'>
              <div className='grid grid-cols-1 min-[600px]:grid-cols-2 min-[992px]:grid-cols-3 gap-x-6 gap-y-8 items-start pt-0'>
                {shopAllProducts.map((product, index) => (
                  <div className='flex justify-center' key={index}>
                    <ProductCard product={product} />
                  </div>
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
