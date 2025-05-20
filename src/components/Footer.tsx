import GridWrapper from './GridWrapper';
import { footerNavigationLinks, footerProductLinks } from '@/data';
import RevealButton from './RevealButton';

const Footer = () => {
  return (
    <footer className=' top-auto bottom-[0%] left-[0%] right-[0%] bg-[#080808]'>
      <div className='pb-0 pt-[80px] min-[768px]:py-[100px] min-[992px]:pb-[160px] z-10 justify-center flex relative'>
        <GridWrapper>
          <div className='row-[1/2] col-[2/3] gap-x-[16px] gap-y-[60px] grid grid-rows-[auto_auto_auto] grid-cols-[1fr] min-h-[300px] '>
            <div className='footer-grid grid grid-cols-[1fr] min-[992px]:grid-cols-[1fr_1fr] gap-x-[16px] grid-rows-[auto] pb-[60px]'>
              <div className=' grid row-[span_1] col-[span_1] min-[992px]:row-[1/2] min-[992px]:col-[2/3] grid-rows-[auto] justify-items-start gap-[12px] grid-cols-[auto] auto-cols-auto justify-between min-[768px]:justify-items-end grid-flow-col'>
                <div className='grid gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                  <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]'>
                    Navigation
                  </div>
                  <div className='grid gap-x-[16px] gap-y-[18px] grid-rows-[auto_auto] grid-cols-[1fr] '>
                    {footerNavigationLinks.map((link, index) => (
                      <RevealButton
                        key={index}
                        text={link}
                        textColor='white'
                        isPadding={false}
                      />
                    ))}
                  </div>
                </div>
                <div className='grid gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr] auto-cols-[1fr]'>
                  <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em] '>
                    Products
                  </div>
                  <div className='grid gap-x-[16px] gap-y-[18px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                    {footerProductLinks.map((link, index) => (
                      <RevealButton
                        key={index}
                        text={link}
                        textColor='white'
                        isPadding={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-bottom text-center grid grid-cols-[1fr] justify-center items-center gap-x-[16px] gap-y-[16px] grid-rows-[auto] min-[768px]:grid-col-[1fr_1fr] py-[28px] border-t-[1px_solid_rgba(255,255,255,.2)]'></div>
          </div>
        </GridWrapper>
      </div>
    </footer>
  );
};

export default Footer;
