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

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current && containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 1,
        scrollTo: { y: ref.current, offsetY: 60},
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <div className='z-10 bg-white relative top-[-65px]'>
      <div className='shop-hero min-h-[250px] pt-[120px] pb-[32px] sm:pb-[48px] sm:pt-[160px] sm:min-h-[250px] md:min-h-[400px] md:pb-[60px] md:pt-[200px] text-white flex justify-center relative transition-all duration-300'>
        <GridWrapper>
          <div className='row-[1/2] col-[2/3] self-end grid gap-y-4 gap-x-4'>
            <StackedIntro type='normal'>
              <div className='tracking-[4px] uppercase text-[13px] font-light leading-[1.3em]'>
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
            <div className='overlay absolute inset-0 bg-black/30'></div>
          </div>
        </div>
      </div>
      <section  className='bg-[#f4f8fa] p-0 z-10 flex justify-center relative'   ref={containerRef}>
        <GridWrapper>
          <div className='grid col-start-1 md:col-start-2 row-start-1 row-end-2 col-end-4 gap-y-8 md:gap-y-12 grid-cols-1 md:gap-x-20 md:grid-cols-[auto_1fr] grid-rows-[auto] w-full'>
            {/* Sidebar */}
            <div className='self-start grid pt-12 sm:pt-20 md:pt-28 relative mb-0 px-4 md:mb-28 md:sticky gap-x-4 gap-y-6 grid-rows-[auto_auto] grid-cols-1'>
              <div className='text-[#667479] uppercase font-light text-[13px] tracking-[4px]'>
                Topics
              </div>
              <div className='grid justify-items-start grid-cols-1 grid-rows-[auto_auto] gap-y-6 gap-x-4 w-full'>
                {[
                  { text: 'General Questions', ref: ref1 },
                  { text: 'Shipping & Returns', ref: ref2 },
                  { text: 'Camo & Gear', ref: ref3 },
                ].map(({ text, ref }, index) => (
                  <div
                    style={{
                      width: '100%',
                      minWidth: 0,
                      textAlign: 'left',
                      borderRadius: 6,
                      border: '1px solid #e4e9ec',
                      background: '#fff',
                      transition: 'background 0.2s',
                    }}
                  >
                    <RevealButton
                      text={text}
                      key={index}
                      isPadding={false}
                      textColor='#667479'
                      fontSize='12px'
                      onClick={() => scrollToRef(ref)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* FAQ Content */}
            <div className='faq-right pt-9 px-4 sm:pt-12 pb-16 md:p-[60px_4vw_100px] bg-white flex justify-start items-start w-full  rounded-lg shadow-sm transition-all duration-300'>
              <div className='faq-grid grid gap-y-12 md:gap-y-16 w-full max-w-none gap-x-4  md:max-w-[800px] grid-cols-1 grid-rows-[auto]'>
                <div className='faq-block' ref={ref1}>
                  <h3 className='text-[22px] md:text-[24px] font-semibold leading-[1.3em] mb-4 text-[#1a2328]'>
                    General Questions
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list md:max-w-full grid-rows-[auto_auto] grid-cols-1 w-full grid'
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
                  <h3 className='text-[22px] md:text-[24px] font-semibold leading-[1.3em] mb-4 text-[#1a2328]'>
                    Shipping & Returns
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list md:max-w-full grid-rows-[auto_auto] grid-cols-1 w-full grid'
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
                  <h3 className='text-[22px] md:text-[24px] font-semibold leading-[1.3em] mb-4 text-[#1a2328]'>
                    Camo & Gear
                  </h3>
                  <div
                    style={{
                      borderTop: '1px solid #e4e9ec',
                    }}
                    className='tab-list md:max-w-full grid-rows-[auto_auto] grid-cols-1 w-full grid'
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
