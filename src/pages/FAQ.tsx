import GridWrapper from '@/components/GridWrapper';
import StackedIntro from '@/components/StackedIntro';
import Heading from '@/components/Heading';
import { slidesOne } from '@/data';
import RevealButton from '@/components/RevealButton';
import TabItem from '@/components/TabItem';
import {
  FAQ as generalFAQ,
  shippingAndReturnsFAQ,
  camoAndGearFAQ,
} from '@/data';
import gsap from 'gsap';
import { RefObject, useRef } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const FAQ = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      gsap.to(window, {
        duration: 1, // seconds
        scrollTo: {
          y: ref.current,
          offsetY: 60,
        },
        ease: 'power2.inOut',
      });
    }
  };

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
          <div className='grid col-start-1 min-[992px]:col-start-2 row-start-1 row-end-2 col-end-4 gap-y-[36px] min-[768px]:gap-y-[48px] grid-cols-[1fr] gap-x-[140px] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[auto_1fr] grid-rows-[auto] w-full'>
            <div className='self-start grid pt-[48px] min-[767px]:pt-[80px] min-[992px]:pt-[120px] relative mb-0 px-[5vw] min-[992px]:mb-[120px] min-[992px]:sticky gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr]'>
              <div className='text-[#667479] uppercase font-[300] text-[14px] tracking-[4px] '>
                Topics
              </div>
              <div className='grid justify-items-start justify-start grid-cols-[1fr] grid-rows-[auto_auto] gap-y-[30px] gap-x-[16px] '>
                {[
                  { text: 'General Questions', ref: ref1 },
                  { text: 'Shipping & Returns', ref: ref2 },
                  { text: 'Camo & Gear', ref: ref3 },
                ].map(({ text, ref }, index) => (
                  <RevealButton
                    text={text}
                    key={index}
                    isPadding={false}
                    textColor='#667479'
                    fontSize='11px'
                    onClick={() => scrollToRef(ref)}
                  />
                ))}
              </div>
            </div>
            <div className='faq-right pt-[36px] px-[5vw] min-[480px]:pt-[48px] pb-[60px] min-[768px]:p-[60px_5vw_100px] bg-white flex justify-start items-start w-full min-[992px]:p-[120px_100px]'>
              <div className='faq-grid grid gap-y-[48px] min-[768px]:gap-y-[60px] w-full max-w-none gap-x-[16px] min-[992px]:gap-y-[80px] min-[992px]:max-w-[800px] grid-cols-[1fr] grid-rows-[auto]'>
                <div className='faq-block' ref={ref1}>
                  <h3 className='text-[24px] font-[500] leading-[1.3em]'>
                    General Questions
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list min-[992px]:max-w-full grid-rows-[auto_auto] grid-cols-[1fr] w-full grid'
                  >
                    {generalFAQ.slice(0, 3).map((faq, index) => (
                      <TabItem
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className='faq-block' ref={ref2}>
                  <h3 className='text-[24px] font-[500] leading-[1.3em]'>
                    Shipping & Returns
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list min-[992px]:max-w-full grid-rows-[auto_auto] grid-cols-[1fr] w-full grid'
                  >
                    {shippingAndReturnsFAQ.slice(0, 3).map((faq, index) => (
                      <TabItem
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className='faq-block' ref={ref3}>
                  <h3 className='text-[24px] font-[500] leading-[1.3em]'>
                    Camo & Gear
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list min-[992px]:max-w-full grid-rows-[auto_auto] grid-cols-[1fr] w-full grid'
                  >
                    {camoAndGearFAQ.slice(0, 3).map((faq, index) => (
                      <TabItem
                        question={faq.question}
                        answer={faq.answer}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
};

export default FAQ;
