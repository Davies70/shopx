import GridWrapper from './GridWrapper';
import { footerNavigationLinks, footerProductLinks } from '@/data';
import RevealButtonWithIcon from './RevealButtonWithIcon';

const Footer = () => {
  // return (
  //   <footer className=' top-auto bottom-[0%] left-[0%] right-[0%] bg-[#080808] sticky z-0'>
  //     <div className='pb-0 pt-[72px] min-[480px]:pt-[80px] min-[768px]:py-[100px] min-[992px]:pb-[160px] z-10 justify-center flex relative'>
  //       <GridWrapper>
  //         <div className='footer-content row-[1/2] col-[2/3] gap-x-[36px] min-[480px]:gap-x-[16px] gap-y-[60px] grid grid-rows-[auto_auto_auto] grid-cols-[1fr] min-h-[300px] '>
  //           <div className='footer-grid grid grid-cols-[1fr]  min-[992px]:grid-cols-[1fr_1fr] gap-x-[16px] grid-rows-[auto] pb-[12px] min-[480px]:pb-[60px]'>
  //             <div className='footer-navigation grid row-[span_1] col-[span_1] min-[992px]:row-[1/2] min-[992px]:col-[2/3] grid-rows-[auto] justify-items-start gap-[12px] grid-cols-[auto] auto-cols-auto justify-between min-[768px]:justify-items-end grid-flow-col'>
  //               <div className='grid gap-y-[30px] gap-x-[16px] min-[480px]:gap-y-[24px] grid-rows-[auto_auto] min-[480px]:grid-rows-[auto] grid-cols-[auto_auto] min-[480px]:grid-cols-[auto]'>
  //                 <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]'>
  //                   Navigation
  //                 </div>
  //                 <div className='grid gap-x-[16px] gap-y-[18px] grid-rows-[auto_auto] grid-cols-[1fr] auto-cols-[1fr] '>
  //                   {footerNavigationLinks.map((link, index) => (
  //                     <RevealButtonWithIcon
  //                       key={index}
  //                       text={link}
  //                       textColor='white'
  //                       isTextPadding={false}
  //                       isIconCircular={false}
  //                     />
  //                   ))}
  //                 </div>
  //               </div>
  //               <div className='grid gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr] auto-cols-[1fr]'>
  //                 <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]  '>
  //                   Products
  //                 </div>
  //                 <div className='grid gap-x-[16px] gap-y-[18px] grid-rows-[auto_auto] grid-cols-[1fr]'>
  //                   {footerProductLinks.map((link, index) => (
  //                     <RevealButtonWithIcon
  //                       key={index}
  //                       text={link}
  //                       textColor='white'
  //                       isTextPadding={false}
  //                       isIconCircular={false}
  //                     />
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div
  //             style={{
  //               borderTop: '1px solid rgba(255, 255, 255, .2)',
  //             }}
  //             className=' max-[767px]:text-center max-[767px]:justify-center max-[767px]:justify-items-center grid grid-cols-[1fr] justify-center  gap-[16px] grid-rows-[auto] min-[768px]:grid-cols-[1fr_1fr] py-[28px]'
  //           >
  //             <div className='justify-self-center min-[768px]:justify-self-start  gap-[16px] opacity-[.8] text-white tracking-[4px] uppercase grid grid-rows-[auto] grid-cols-[auto] grid-flow-col justify-end text-[9px] '>
  //               <div>© 2025 Shop Apocalypse</div>
  //             </div>
  //             <div className='grid text-[9px] justify-end grid-flow-col grid-cols-[auto] grid-rows-[auto] uppercase tracking-[4px] text-white opacity-[0.8] gap-[16px]'>
  //               <a className='text-white decoration-0 max-w-full inline-block bg-transparent cursor-pointer'>
  //                 <div>Privacy Policy</div>
  //               </a>
  //               <a className='text-white decoration-0 max-w-full inline-block bg-transparent cursor-pointer'>
  //                 <div>Terms & Conditions</div>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </GridWrapper>
  //     </div>
  //   </footer>

  // );

  return (
    <footer className=' top-auto bottom-[0%] left-[0%] right-[0%] bg-[#080808] sticky z-0'>
      <div className='pb-0 pt-[72px] min-[480px]:pt-[80px] min-[768px]:py-[100px] min-[992px]:pb-[160px] z-10 justify-center flex relative'>
        <GridWrapper>
          <div className='row-[1/2] col-[2/3] min-h-[300px] '>
            <div className='flex pb-[12px] min-[480px]:pb-[60px]'>
              <div className='flex flex-col gap-y-[30px] min-[480px]:gap-y-[12px] min-[480px]:flex-row min-[480px]:gap-x-[12px] min-[480px]:justify-between w-full'>
                <div className='flex flex-col gap-y-[18px]'>
                  <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]'>
                    Navigation
                  </div>
                  <div className='flex flex-col gap-y-[18px]'>
                    {footerNavigationLinks.map((link, index) => (
                      <RevealButtonWithIcon
                        key={index}
                        text={link}
                        textColor='white'
                        isTextPadding={false}
                        isIconCircular={false}
                      />
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-y-[24px]'>
                  <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]  '>
                    Products
                  </div>
                  <div className='flex flex-col gap-y-[18px]'>
                    {footerProductLinks.map((link, index) => (
                      <RevealButtonWithIcon
                        key={index}
                        text={link}
                        textColor='white'
                        isTextPadding={false}
                        isIconCircular={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, .2)',
              }}
              className=' max-[767px]:text-center max-[767px]:justify-center max-[767px]:justify-items-center grid grid-cols-[1fr] justify-center  gap-[16px] grid-rows-[auto] min-[768px]:grid-cols-[1fr_1fr] py-[28px]'
            >
              <div className='justify-self-center min-[768px]:justify-self-start  gap-[16px] opacity-[.8] text-white tracking-[4px] uppercase grid grid-rows-[auto] grid-cols-[auto] grid-flow-col justify-end text-[9px] '>
                <div>© 2025 Shop Apocalypse</div>
              </div>
              <div className='grid text-[9px] justify-end grid-flow-col grid-cols-[auto] grid-rows-[auto] uppercase tracking-[4px] text-white opacity-[0.8] gap-[16px]'>
                <a className='text-white decoration-0 max-w-full inline-block bg-transparent cursor-pointer'>
                  <div>Privacy Policy</div>
                </a>
                <a className='text-white decoration-0 max-w-full inline-block bg-transparent cursor-pointer'>
                  <div>Terms & Conditions</div>
                </a>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </footer>
  );
};

export default Footer;
