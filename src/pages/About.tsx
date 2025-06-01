import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import { ChevronDown } from 'lucide-react';

const About = () => {
  return (
    <div className='z-10 bg-[#fff] relative'>
      <section className='min-h-auto min-[480px]:min-h-[110vh] z-[25] relative overflow-hidden flex flex-col'>
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
              <a className='w-[24px] max-w-fit inline-block'>
                <ChevronDown className='' />
              </a>
            </div>
          </GridWrapper>
        </div>
      </section>
      <section className='grid aut-cols-[1fr] grid-flow-col grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-[6px]'></section>
    </div>
  );
};

export default About;
