import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import { ChevronDown } from 'lucide-react';
import { slidesOne } from '@/data';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import StackedIntro from '@/components/StackedIntro';
import RevealButton from '@/components/RevealButton';
import { firstFeaturedCards, slidesTwo } from '@/data';
import RevealButtonWithIcon from '@/components/RevealButtonWithIcon';
import ActionBanner from '@/components/ActionBanner';
import Testimonials from '@/components/Testimonials';
import SectionEight from '@/components/SectionEight';
import FlyingImages from '@/components/FlyingImages';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const springX = useSpring(translateX, { stiffness: 80, damping: 20 });



  gsap.registerPlugin(ScrollToPlugin);

  const scrollToRef = () => {
    if (scrollRef.current) {
      gsap.to(window, {
        duration: 2, // seconds
        scrollTo: scrollRef.current,
        ease: 'power2.inOut',
      });
    }
  };
  return (
    <div className='z-10 bg-[#fff] relative'>
      <section
        ref={sectionRef}
        className='min-h-auto min-[480px]:min-h-[110vh] z-[25] relative overflow-hidden flex flex-col'
      >
        <div className='flex pt-[120px] pb-[36px] min-[992px]:pt-[180px] min-[992px]:pb-[48px] justify-center'>
          <GridWrapper>
            <div className=' grid row-[1/2] col-[2/3] gap-y-[60px] text-center justify-center justify-items-center pt-0 z-20 min-[992px]:gap-y-[80px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between relative'>
              <div className='grid gap-x-[16px] gap-y-[24px] grid-rows-[auto] grid-cols-[1fr] justify-items-start'>
                <div className='max-w-[975px]'>
                  <Heading
                    text='The end is closer than you think'
                    type='extra-large'
                  />
                </div>
                <div className='max-w-[550px] justify-self-center'>
                  <p className='text-[20px] text-[#667479] font-[400] leading-[1.65em] tracking-normal'>
                    We are a team of passionate individuals dedicated to making
                    a difference in the world. Our mission is to create
                    innovative solutions that empower communities and foster
                    sustainable development.
                  </p>
                </div>
              </div>
              <a
                onClick={scrollToRef}
                className='w-[24px] max-w-fit inline-block text-[#667479] cursor-pointer'
              >
                <ChevronDown className='' />
              </a>
            </div>
          </GridWrapper>
        </div>
        <div className='grid auto-cols-[1fr] grid-flow-col grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-[6px] flex-[1_1_0%]'>
          {slidesOne.map(({ image }, index) => (
            <motion.div
              key={index}
              style={{
                x: springX,
              }}
              className='will-change-transform min-h-[65vw] min-w-[50vw] min-[480px]:min-h-[35vw] min-[992px]:min-h-[45vw] min-[480px]:min-w-[33.33vw] relative overflow-hidden h-full'
            >
              <motion.div className='will-change-transform absolute inset-0 overflow-hidden'>
                <div
                  className='bg-no-repeat bg-cover absolute inset-0 bg-[50%_center]'
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id='scroll'
        ref={scrollRef}
        className='overflow-hidden p-0 z-10 justify-center flex relative'
      >
        <GridWrapper>
          <div className='justify-between row-[1/2] col-[2/3] gap-y-[60px] grid grid-cols-[auto] pt-[72px]  min-[480px]:pt-[80px] pb-0 gap-x-[16px] min-[768px]:gap-y-[16px] grid-rows-[auto] min-[768px]:grid-cols-[auto_auto]  items-center w-full min-[768px]:pt-[160px] min-[768px]:pb-[180px]'>
            <div className='max-w-[550px]'>
              <StackedIntro type='large'>
                <StackedIntro type='small'>
                  <div className='max-w-[700px]'>
                    <Heading
                      text='Get in line and stay prepared'
                      type='large'
                    />
                  </div>
                  <div className='max-w-[425px]'>
                    <div className='text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                      As the end draws closer with threats of nuclear fallout,
                      AI overlords and airborne pandemics, the will to live
                      stays within us, the forward-thinking ones. For we have
                      taken the neccessry precautions to get ready, stay stafe
                      and stay head of the sheep. As we shop for the apocalypse
                      and Doomsday, we will survive because of dogged
                      preparedness.
                    </div>
                  </div>
                </StackedIntro>
                <div className='justify-self-start'>
                  <RevealButton
                    text='shop now'
                    backgroundColor='#080808'
                    textColor='white'
                    borderRadius='100px'
                  />
                </div>
              </StackedIntro>
            </div>

            <FlyingImages cards={firstFeaturedCards.images} />
          </div>
        </GridWrapper>
      </section>
      <section className='pt-0 flex relative pb-[72px] min-[480px]:pb-[80px] min-[768px]:pb-[100px] min-[992px]:pb-[160px] z-10 justify-center'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[1/3] gap-y-[0px] grid-cols-[1fr] gap-x-[100px] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[50vw_1fr] w-full grid-rows-[auto]'>
            <div className='h-[80vw] min-h-[275px] min-[480px]:h-[75vw] min-[480px]:min-h-[400px] min-[768px]:min-h-[500px] min-[768px]:h-[70vw] min-[992px]:min-h-[700px] relative overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div
                  className='absolute inset-0 bg-no-repeat bg-[50%] bg-cover'
                  style={{
                    backgroundImage: `url(${slidesTwo[2].image})`,
                  }}
                ></div>
              </div>
            </div>
            <div className='pt-[48px] min-[480px]:pt-[60px] min-[768px]:pt-[80px]  pb-[0] grid gap-y-[36px] max-w-none p-[0_10vw_80px_5vw] gap-x-[48px] min-[992px]:gap-y-[48px] grid-rows-[auto_auto] grid-cols-[1fr] auto-cols-[1fr] content-center min-[992px]:max-w-[600px] min-[992px]:py-[150px] min-[992px]:px-0'>
              <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300]'>
                Our Story
              </div>
              <StackedIntro type='small'>
                <div className='justify-self-start max-w-[700px]'>
                  <Heading type='large' text={`started from the bottom`} />
                </div>
                <div className='max-w-[425px]'>
                  <div className='text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                    As the end draws closer with threats of nuclear fallout, AI
                    overlords and airborne pandemics, the will to live stays
                    within us, the forward-thinking ones. For we have taken the
                    neccessry precautions to get ready, stay stafe and stay head
                    of the sheep. As we shop for the apocalypse and Doomsday, we
                    will survive because of dogged preparedness.
                  </div>
                </div>
              </StackedIntro>
              <div className='justify-self-start'>
                <RevealButtonWithIcon
                  text='Shop now'
                  textColor='#667479'
                  isTextPadding={false}
                />
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
      <ActionBanner />
      <section className='pb-0 flex relative pt-[80px]  min-[768px]:pt-[100px] min-[992px]:pt-[160px] z-10 justify-center'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/4] gap-y-[0px] grid-cols-[1fr] gap-x-[100px] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[1fr_50vw] w-full grid-rows-[auto]'>
            <div className='pt-[48px] min-[480px]:pt-[60px] min-[768px]:pt-[80px]  min-[768px]:pb-[0] grid gap-y-[36px] max-w-none p-[0_10vw_80px_5vw] gap-x-[48px] min-[992px]:gap-y-[48px] grid-rows-[auto_auto] grid-cols-[1fr] auto-cols-[1fr] content-center min-[992px]:max-w-[600px] min-[992px]:py-[150px] min-[992px]:px-0'>
              <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300]'>
                Our founding prepper
              </div>
              <StackedIntro type='small'>
                <div className='justify-self-start max-w-[700px]'>
                  <Heading type='large' text={`started from the bottom`} />
                </div>
                <div className='max-w-[425px]'>
                  <div className='text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                    As the end draws closer with threats of nuclear fallout, AI
                    overlords and airborne pandemics, the will to live stays
                    within us, the forward-thinking ones. For we have taken the
                    neccessry precautions to get ready, stay stafe and stay head
                    of the sheep. As we shop for the apocalypse and Doomsday, we
                    will survive because of dogged preparedness.
                  </div>
                </div>
              </StackedIntro>
              <div className='justify-self-start'>
                <RevealButtonWithIcon
                  text='Shop now'
                  textColor='#667479'
                  isTextPadding={false}
                />
              </div>
            </div>
            <div className='h-[80vw] min-h-[275px] min-[480px]:h-[75vw] min-[480px]:min-h-[400px] min-[768px]:min-h-[500px] min-[768px]:h-[70vw] min-[992px]:min-h-[700px] relative overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div
                  className='absolute inset-0 bg-no-repeat bg-[50%] bg-cover'
                  style={{
                    backgroundImage: `url(${slidesTwo[2].image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
      <Testimonials />
      <SectionEight />
    </div>
  );
};

export default About;
