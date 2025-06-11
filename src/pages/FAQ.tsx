import GridWrapper from '@/components/GridWrapper';
import StackedIntro from '@/components/StackedIntro';
import Heading from '@/components/Heading';
import { slidesOne } from '@/data';
import RevealButton from '@/components/RevealButton';

const FAQ = () => {
  return (
    <div className='z-10 bg-white relative'>
      <div className='shop-hero min-h-[350px] pt-[160px] pb-[48px] min-[480px]:pb-[60px] min-[480px]:pt-[200px] min-[480px]:min-h-[325px] min-[768px]:min-h-[500px] min-[768px]:pb-[80px] min-[768px]:pt-[250px] text-white justify-center relative'>
        <GridWrapper>
          <div className=' row-[1/2] col-[2/3] self-end grid gap-y-[24px] gap-x-[16px]'>
            <StackedIntro type='normal'>
              <div className='tracking-[4px] uppercase text-[14px] font-[300] leading-[1.3em]'>
                FAQ
              </div>
              <Heading text='Frequent questions' type='large' />
            </StackedIntro>
          </div>
        </GridWrapper>

        <div className='background-wrapper absolute inset-0 overflow-hidden'>
          <div
            style={{
              backgroundImage: `url(${slidesOne[2].image})`,
            }}
            className='background faq-background bg-[46%_-5%] inset-0 absolute bg-no-repeat bg-cover'
          >
            <div className='overlay absolute inset-0 rgba(8,8,8,.3)'></div>
          </div>
        </div>
      </div>
      <section className='bg-[#f4f8fa] p-0 z-10 justify-center flex relative'>
        <GridWrapper>
          <div className='grid gap-y-[36px] min-[768px]:gap-y-[40px] min-[768px]:grid-cols-[1fr] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[auto_1fr] col-start-1 min-[992px]:col-[2/4] row-[1/2] grid-rows-[auto] w-full'>
            <div className='self-start grid pt-[48px] min-[767px]:pt-[80px] min-[992px]:pt-[120px] relative mb-0 px-[5vw] min-[992px]:mb-[120px] min-[992px]:sticky gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr]'>
              <div className='text-[#667479] uppercase font-[300] text-[14px] tracking-[4px] '>
                Topics
              </div>
              <div className='grid justify-items-start justify-start grid-cols-[1fr] grid-rows-[auto_auto] gap-y-[18px] gap-x-[16px]'>
                {['General Questions', 'Shipping & Returns', 'Camo & Gear'].map(
                  (text, index) => (
                    <RevealButton text={text} key={index} isPadding={false} textColor='#667479' />
                  )
                )}
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
};

export default FAQ;
