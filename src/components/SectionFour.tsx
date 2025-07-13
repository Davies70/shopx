import GridWrapper from './GridWrapper';
import { slidesOne } from '@/data';
import ProductCard from './ProductCard';
import { productCards } from '@/data';

import RevealButtonWithIcon from './RevealButtonWithIcon';

const SectionFour = () => {
  const slide = slidesOne[2];
  return (
    <div className='p-0   z-10 justify-center flex relative'>
      <GridWrapper>
        <div className='grid row-[1/2] col-[1/4] grid-cols-[1fr] px-0 min-[992px]:grid-cols-[1fr_1fr] min-[992px]:pr-[6px] gap-x-[6px] gap-y-[16px] py-0'>
          <div className=' max-h-[100vh] min-h-[90vh] mb-0 pb-0 relative top-0 min-[992px]:mb-[-65px] min-[992px]:pb-[65px] min-[992px]:sticky min-[992px]:top-[65px] overflow-hidden'>
            <div
              aria-label='carousel'
              className='clear-both text-center bg-[#080808] relative overflow-hidden items-stretch w-full max-w-[1500px] h-full'
            >
              <div className='overflow-visible z-1 whitespace-nowrap h-full relative left-0 right-0'>
                <div className='inline-block align-top text-left w-full h-full relative whitespace-nowrap'>
                  <div className='flex max-[767px]:min-h-[525px]  pt-[65vw] min-[767px]:pt-[100px] max-[991px]:min-h-[700px] items-end pb-[120px] w-full h-full justify-center'>
                    <div className='w-full h-full  justify-center flex absolute top-0 bottom-0 left-auto right-auto overflow-hidden'>
                      <div
                        className='bg-[37%_42%] bg-no-repeat bg-cover absolute inset-0  flex items-center justify-center w-full h-full'
                        style={{
                          backgroundImage: `url(${slide.image})`,
                        }}
                      >
                        <div className='absolute inset-0 bg-[rgba(8,8,8,.5)]'></div>
                      </div>
                    </div>
                    <div className='  grid gap-y-[24px] max-w-[400px] z-[100] gap-x-[24px] text-white text-center justify-items-center grid-rows-[auto_auto] grid-cols-[1fr] items-center relative whitespace-normal '>
                      <h2 className='tracking-[0.07em] text-[36px] leading-[1.35em] uppercase font-[600] text-center break-words '>
                        {slide.title_1} <br />
                      </h2>
                      <RevealButtonWithIcon
                        text='Shop All'
                        iconBorderColor='transparent'
                        isTextPadding={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='px-[6px] grid gap-x-[6px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr_1fr]'>
              {productCards.slice(0, 4).map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
};

export default SectionFour;
