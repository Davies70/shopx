import GridWrapper from './GridWrapper';
import Featured from './Featured';
import { firstFeaturedCards, secondFeaturedCards } from '@/data';


const SectionFive = () => {
  return (
    <section className='py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex z-10 justify-center relative'>
      <GridWrapper>
        <div className='row-[1/2] col-[2/3] gap-y-[48px] min-[768px]:gap-y-[60px] min-[992px]:gap-y-[80px] bg-scroll z-20 grid-rows-[auto] grid-cols-[1fr] content-between grid relative'>
          <div className='text-center grid-cols-[1fr] justify-items-center justify-start gap-x-[16px] gap-y-[16px] grid-rows-[auto] items-end grid'>
            <div className='max-w-[700px]'>
              <div className='grid gap-x-[16px] gap-y-[24px] grid-rows-[auto] grid-cols-[1fr] justify-items-start'>
                <div className='justify-self-center text-[#667479] tracking-[4px] uppercase text-[14px] font-[300] leading-[1.3em]'>
                  Featured
                </div>
                <h1 className='text-[36px] min-[768px]:text-[38px] min-[992px]:text-[42px] font-[600] leading-[1.3em] tracking-[.07em] uppercase my-0'>
                  Look inside our most selected products
                </h1>
              </div>
            </div>
          </div>
          <div className='bg-scroll'>
            <div>
              <div className='grid gap-y-[36px] gap-x-[16px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                <Featured cards={firstFeaturedCards} />
                <Featured cards={secondFeaturedCards} />
              </div>
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionFive;
