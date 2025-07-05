import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import RevealButton from '@/components/RevealButton';
import Testimonials from '@/components/Testimonials';
import { getCategory } from '@/services';
import { useEffect, useState } from 'react';
import type { Category as CategoryType } from '@/categories'; // Adjust the import path as needed

const Category = () => {
  const params = useParams();

  const [category, setCategory] = useState<CategoryType | null>(null);

  const productData = [
    {
      text: 'Armored Outerwear',
      link: 'armored_outerwear',
      heroText: 'Get suited with the right gear',
    },
    {
      text: 'Tactical Head Protection',
      link: 'tactical_head_protection',
      heroText: 'Protect your head with advanced helmets',
    },
    {
      text: 'Mission-Ready Eye Gear',
      link: 'mission_ready_eye_gear',
      heroText: 'See clearly, stay safe on every mission',
    },
    {
      text: 'Shop All',
      link: 'shop',
      heroText: 'Browse our complete collection',
    },
  ];

  const productLinks = productData.filter(
    (productLink) => productLink.link !== category?.id
  );

  const heroText =
    productData.find((product) => product.link === category?.id)?.heroText ??
    '';

  useEffect(() => {
    if (params.id) {
      // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      const data = getCategory(params.id);
      setCategory(data);
    }
  }, [params.id]);

  return (
    <div className='z-10 bg-[#fff] relative'>
      <section className='min-h-[350px] pt-[160px] pb-[48px] min-[480px]:min-h-[325px] min-[480px]:pt-[200px] min-[480px]:pb-[60px] text-white flex relative justify-center min-[768px]:min-h-[500px] min-[768px]:pt-[250px] min-[768px]:pb-[80px]'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] gap-y-[18x] grid-cols-[1fr] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[1fr_auto] grid-rows-[auto] items-end'>
            <div className='max-w-[425px] self-end'>
              <div className='grid justify-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[24px] gap-x-[16px]'>
                <div className='uppercase font-[300] text-[14px] tracking-[4px]'>
                  {category?.name}
                </div>
                <Heading text={heroText} type='extra-large' />
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
              backgroundImage: `url(/images/sliders/slide_5.jpg)`,
            }}
          >
            <div className='absolute inset-0 bg-[rgba(8,8,8,.6)]'></div>
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
                <div className='flex flex-wrap gap-x-[20px] gap-y-[14px] items-center'>
                  {productLinks.map(({ text, link }) => (
                    <Link
                      className='text-[#667479] tracking-[5px] uppercase items-center text-[11px] leading-[1.3em] flex max-w-full'
                      to={link === 'shop' ? `/shop` : `/category/${link}`}
                      key={text}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          width: 'fit-content',
                          minWidth: 0,
                          textAlign: 'left',
                          borderRadius: 6,
                          border: '1px solid #e4e9ec',
                          background: '#fff',
                          transition: 'background 0.2s',
                          padding: '6px 18px',
                          marginRight: 0,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <RevealButton text={text} isPadding={false} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='px-0 flex flex-col'>
              <div className='grid grid-cols-[1fr_1fr] min-[992px]:grid-cols-[1fr_1fr_1fr] gap-x-[6px] gap-y-[24px] grid-rows-[auto] auto-col-[1fr] content-start items-start pt-0'>
                {category?.products.map((product, index) => (
                  <div
                    className='grid auto-col-[1fr] grid-cols-[1fr]'
                    key={index}
                  >
                    <ProductCard product={product} key={index} />
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

export default Category;
