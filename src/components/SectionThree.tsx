import GridWrapper from './GridWrapper';

const SectionThree = () => {
  return (
    <section className='overflow-hidden py-[100px] min-[992px]:p-[160px] flex relative justify-center z-10'>
      <GridWrapper>
        <div className='col-[1/4] row-[1/2] min-[992px]:col-[2/3] grid z-20 relative gap-x-4 gap-y-[48px] grid-rows-[auto] grid-cols-[1fr] content-between'>
          <div className='justify-self-center max-w-[550px]'>
            <div className='grid text-center grid-cols-[1fr] justify-items-center justify-start gap-x-4 gap-y-4 grid-rows-[auto]'>
              <div className='justify-center text-[#667479] tracking-[4x] uppercase text-[14px] font-[300] leading-[1.3em]'>
                Popular
              </div>
              <h1 className='font-[600] leading-[1.35em] text-[42px] tracking-[0.07em] uppercase my-0 mx-[0.67em] text-[#080808]'>
                Best Selling
              </h1>
            </div>
            <div>
              <div className='flex h-full justify-center bg-[rgba(221,221,221,0)] text-center clear-both'>
                <div className='max-[767px]:w-[75%] max-[991px]:w-[45%] w-[33.33%] overflow-visible z-1 h-full relative left-0 right-0 whitespace-nowrap'></div>
              </div>
            </div>
          </div>
        </div>
      </GridWrapper>
    </section>
  );
};

export default SectionThree;
