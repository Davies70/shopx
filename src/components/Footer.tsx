import GridWrapper from './GridWrapper';
import { footerNavigationLinks, footerProductLinks } from '@/data';
import RevealButtonWithIcon from './RevealButtonWithIcon';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const productLinks = footerProductLinks.filter(
    (product) => product.link !== location.pathname
  );

  return (
    <footer className=' top-auto bottom-[0%] left-[0] right-[0] bg-[#080808] sticky z-0 w-full'>
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
                    {footerNavigationLinks.map(({ link, name }, index) => (
                      <Link to={link} key={index}>
                        <RevealButtonWithIcon
                          key={index}
                          text={name}
                          textColor='white'
                          isTextPadding={false}
                          isIconCircular={false}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-y-[24px]'>
                  <div className='tracking-[3px] text-[11px] text-white uppercase font-[300] leading-[1.3em]  '>
                    Products
                  </div>
                  <div className='flex flex-col gap-y-[18px]'>
                    {productLinks.map(({ link, name }, index) => (
                      <Link to={link} key={index}>
                        <RevealButtonWithIcon
                          key={index}
                          text={name}
                          textColor='white'
                          isTextPadding={false}
                          isIconCircular={false}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, .2)',
              }}
              className=' text-center justify-center justify-items-center grid grid-cols-[1fr]  gap-[16px] grid-rows-[auto] min-[768px]:grid-cols-[1fr_1fr] py-[28px] '
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
