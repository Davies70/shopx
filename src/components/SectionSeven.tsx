import GridWrapper from './GridWrapper';
import FadeInIconButton from './FadeInIconButton';
const SectionSeven = () => {
  const currentIndex = 1;
  return (
    <section className='overflow-hidden py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex relative justify-center z-10'>
      <GridWrapper isClipped={true}>
        <div className='flex col-[1/4] row-[1/2] min-[768px]:col-[2/3] justify-center w-full px-[5vw] overflow-hidden py-[36px] min-[768px]:overflow-visible'>
          <div className='bg-transparent clear-both justify-center w-full h-full pb-[60px] flex text-center relative '>
            <div className='w-full overflow-visible w-[768px]:w-[60%] z-1 h-full relative left-0 right-0 whitespace-nowrap'>
              <div className='align-top text-left w-full h-full inline-block relative whitespace-normal'>
                <div className='max-w-none min-[768px]:max-w-[600px] text-center h-full mx-auto'>
                  <div className='grid relative gap-y-[26px] z-20 gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between'>
                    <div className='max-w-[975px]'>
                      <h1 className='text-[36px] min-[768px]:text-[38px] min-[991px]:text-[42px] font-[600] leading-[1.35em] tracking-[0.07em] uppercase'>
                        "I am definitely prepared for the end of times "
                      </h1>
                    </div>
                    <div className='self-center'>
                      <div className='text-[#667479] tracking-[4px] uppercase text-[14px] font-[300] leading-[1.3em]'>
                        John Richardson
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeInIconButton type='left' isParentHovered />
            <FadeInIconButton type='right' isParentHovered />
            <div className='flex absolute items-end h-[36px] bottom-0 justify-center min-h-[12px] m-auto p-0 text-[6px] top-auto left-0 right-0 transform-none min-[992px]:hidden text-white'>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className={`w-[1em] h-[1em] rounded-full mx-[6px] transition-colors duration-100 ${
                    currentIndex - 1 === index ? 'bg-[#080808]' : 'bg-gray-500'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionSeven;
