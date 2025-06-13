import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import RevealButton from '@/components/RevealButton';
import StackedIntro from '@/components/StackedIntro';
import { slidesTwo } from '@/data';
import { FAQ } from '@/data';
import SectionEight from '@/components/SectionEight';
import TabItem from '@/components/TabItem';

const Contact = () => {
  return (
    <div className='z-10 bg-white relative'>
      <div className='flex pt-[120px] pb-[60px] min-[768px]:pt-[160px] min-[768px]:pb-[80px] min-[992px]:pt-[220px] min-[992px]:pb-[100px] relative justify-center'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] gap-y-[18px] grid-cols-[1fr] min-[992px]:gap-y-[16px] min-[992px]:grid-cols-[1fr_auto] gap-x-[60px] grid-rows-[auto] items-end'>
            <div>
              <StackedIntro type='normal'>
                <div className='text-[#667479] uppercase leading-[1.3em] text-[14px] tracking-[4px] font-[300]'>
                  Get in touch
                </div>
                <div className='max-w-[700px]'>
                  <Heading
                    type='extra-large'
                    text='Unlock your survival instincts:'
                  />
                </div>
              </StackedIntro>
            </div>
            <div className='max-w-[600px]'>
              <div className='text-[#667479] text-[18px] leading-[1.6em] tracking-normal'>
                We would like to hear from you. Reach out to us for questions
                about our products or just to say hello. We always want to talk
                to a fellow survivalist
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <section className='min-h-[400px] min-[768px]:min-h-[500px] min-[992px]:min-h-[700px] relative'>
        <div className='absolute inset-0 overflow-hidden'>
          <div
            style={{
              backgroundImage: `url(${slidesTwo[1].image})`,
            }}
            className='inset-0 bg-cover absolute bg-no-repeat bg-[50%]'
          ></div>
          <div className='bg-[rgba(8,8,8,.05)] absolute inset-0'></div>
        </div>
      </section>
      <section className='bg-[#f4f8fa] pt-0 z-10 flex relative justify-center'>
        <GridWrapper>
          <div className='row-[1/2] col-[2/4] py-[36px] min-[480px]:py-[40px] min-[768px]:py-[60px] min-[992px]:py-[80px] grid grid-cols-[1fr] gap-y-[0px] min-[992px]:gap-y-[16px] grid-rows-[auto] min-[992px]:grid-cols-[minmax(200px,_auto)_1fr]'>
            <div className='p-[36px_24px] min-[480px]:p-[60px_40px] min-w-auto min-[992px]:min-w-[600px] min-[992px]:p-[80px_60px] grid gap-x-[16px] gap-y-[48px] bg-white rounded-[2px] grid-rows-[auto] grid-cols-[1fr]'>
              <StackedIntro type='small'>
                <div className='max-w-[700px]'>
                  <Heading
                    type='normal'
                    text='Please fill out the form below'
                  />
                </div>
                <div className='max-w-[425px]'>
                  <div className='text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                    Contact us today to learn more about out wholesale
                    opportunities
                  </div>
                </div>
              </StackedIntro>
              <div className='m-0'>
                <form className='grid gap-y-[36px] gap-x-[16px] grid-rows-[auto_auto] grid-cols-[1fr] '>
                  <div>
                    <label
                      htmlFor='name'
                      className='text-[#667479] tracking-[4px] uppercase mb-[9px] text-[10px] font-[400] leading-[1.6em]'
                    >
                      Name
                    </label>
                    <input
                      style={{
                        transition: `border-color .4s cubic-bezier(.25,.46,.45,.94)`,
                        verticalAlign: 'middle',
                        border: '1px solid #ccc',
                      }}
                      type='text'
                      id='name'
                      maxLength={256}
                      className='tracking-normal border-[#e4e9ec] text-[#667479] bg-[rgba(255,255,255,0)] rounded-[2px] h-[52px] mb-[24px] p-[14px_20px] text-[15px] w-full leading-[1.42857] m-0 '
                    />
                    <label
                      htmlFor='email'
                      className='text-[#667479] tracking-[4px] uppercase mb-[9px] text-[10px] font-[400] leading-[1.6em]'
                    >
                      Email
                    </label>
                    <input
                      style={{
                        transition: `border-color .4s cubic-bezier(.25,.46,.45,.94)`,
                        verticalAlign: 'middle',
                        border: '1px solid #ccc',
                      }}
                      type='email'
                      id='email'
                      maxLength={256}
                      className='tracking-normal border-[#e4e9ec] text-[#667479] bg-[rgba(255,255,255,0)] rounded-[2px] h-[52px] mb-[24px] p-[14px_20px] text-[15px] w-full leading-[1.42857] m-0 '
                    />
                    <label
                      htmlFor='message'
                      className='text-[#667479] tracking-[4px] uppercase mb-[9px] text-[10px] font-[400] leading-[1.6em]'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      style={{
                        transition: `border-color .4s cubic-bezier(.25,.46,.45,.94)`,
                        verticalAlign: 'middle',
                        border: '1px solid #ccc',
                      }}
                      placeholder='type your message here'
                      className='h-auto min-h-[150px] tracking-normal border-[#e4e9ec] text-[#667479] bg-[rgba(255,255,255,0)] rounded-[2px]  mb-[24px] p-[14px_20px] text-[15px] w-full leading-[1.42857] m-0 '
                    />
                  </div>
                  <button
                    className='bg-[#080808]  tracking-[4px] uppercase rounded-[1000px] justify-center items-center h-[52px] mb-0 py-0 text-[11px] flex text-white p-[9px_15px] '
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <span>Submit</span>
                  </button>
                </form>
                <div className='bg-[rgba(221,221,221,0)] text-center hidden'>
                  <div className='tracking-normal bg-[#f4f8fa] justify-center items-center h-full min-h-[400px] flex'>
                    <div className='grid gap-x-[16px] gap-y-[12px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                      <h3>Thank You!</h3>
                      <div className='text-[15px] text-[#667479] leading-[1.65em]'>
                        Your submission has been received
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderLeft: '3px solid #a74030',
                  }}
                  className='hidden tracking-normal mx-[36px] min-[768px]:mx-[40px] py-[12px] pl-[18px] bg-[#ffdede] mt-[10px] p-[10px]'
                >
                  <div>Something went wrong</div>
                </div>
              </div>
            </div>
            <div className='max-[991px]:h-[60vw] relative overflow-hidden'>
              <div className='absolute inset-0'>
                <div
                  className='inset-0 absolute bg-[cover] bg-[no-repeat] bg-[50%]'
                  style={{
                    backgroundImage: `url(${slidesTwo[1].image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
      <section className='py-[72px] min-[480px]:py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] z-10 justify-center flex relative'>
        <GridWrapper>
          <div className='grid row-[1/2] col-[2/3] gap-y-[36px] z-20 min-[480px]:gap-y-[48px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between relative'>
            <div className='text-center grid grid-cols-[1fr]  justify-items-center justify-start gap-[16px] grid-rows-[auto] items-end'>
              <StackedIntro type='normal' postion='centered'>
                <div className='text-[#667479] tracking-[4px] text-[14px] font-[300] leading-[1.3em]'>
                  FAQ
                </div>
                <Heading type='large' text='Frequently asked questions' />
              </StackedIntro>
            </div>
            <div className='grid z-20 gap-y-[48px] min-[768px]:gap-y-[60px] min-[992px]:gap-y-[80px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between relative'>
              <div className='grid gap-y-[0px] grid-cols-[1fr] gap-x-[80px] min-[992px]:gap-y-[16px] min-[992px]:gap-cols-[1fr_1fr] grid-rows-[auto] content-start items-start'>
                <div
                  style={{
                    borderTop: '1px solid #e4e9ec',
                  }}
                  className='tab-list min-[992px]:max-w-full grid-rows-[auto_auto] grid-cols-[1fr] w-full grid'
                >
                  {FAQ.slice(0, 3).map((faq, index) => (
                    <TabItem
                      question={faq.question}
                      answer={faq.answer}
                      key={index}
                    />
                  ))}
                </div>
                <div
                  style={{
                    borderTop: '1px solid #e4e9ec',
                  }}
                  className='tab-list min-[992px]:max-w-full grid-rows-[auto_auto] grid-cols-[1fr] w-full grid'
                >
                  {FAQ.slice(3, 6).map((faq, index) => (
                    <TabItem
                      question={faq.question}
                      answer={faq.answer}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <a href='/faq' className='justify-self-center'>
                <RevealButton
                  text='view all FAQ'
                  borderRadius='100px'
                  backgroundColor='#080808'
                  textColor='white'
                />
              </a>
            </div>
          </div>
        </GridWrapper>
      </section>
      <SectionEight />
    </div>
  );
};

export default Contact;
