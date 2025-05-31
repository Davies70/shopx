import { slidesTwo } from '@/data';
const SectionEight = () => {
  return (
    <section className='p-0  min-[992px]-[160px] flex z-10 justify-center relative'>
      <div className='grid grid-cols-[1fr_1fr] min-[480px]:grid-cols-[1fr_1fr_1fr_1fr] gap-y-[6px] gap-x-[6px] min-[992px]:gap-y-[16px] grid-rows-[auto] min-[767px]:grid-cols-[1fr_1fr_auto_1fr_1fr] w-full p-[6px]'>
        {slidesTwo.slice(0, 1).map((slide, index) => (
          <a
            key={index}
            className='min-h-[48vw] min-[480px]:min-h-[23vw] min-[768px]:min-h-[18vw] min-[992px]:min-h-[16vw] text-center spacing-[0.05em] uppercase justify-center items-center text-[22px] leading-[1.2em] flex relative overflow-hidden max-w-full '
          >
            <div className='absolute inset-0 overflow-hidden'>
              <div
                className='bg-no-repeat bg-cover absolute inset-0 bg-[50%_center] '
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
            </div>
          </a>
        ))}

        <a
          key='instagram'
          className='grid row-[2/3] col-[1/3] min-[480px]:row-[1/2] min-[480px]:col-[1/5] min-w-[25vw] min-h-[10vw] min-[768px]:min-w-[25vw] min-[768px]:min-h-[10vw] text-[15px] text-[#07090c] tracking-[0.15em] min-[992px]:min-w-[33.33vw] min-[992px]:text-[18px] font-[500] decoration-0 text-center  uppercase justify-center items-center relative overflow-hidden leading-[1.2em] max-w-full'
        >
          <div className='cursor-pointer flex flex-col justify-center overflow-hidden'>
            <div>@ShopApocalypse</div>
          </div>
        </a>
        {slidesTwo.slice(1).map((slide, index) => (
          <a
            key={`second ${index}`}
            className='min-h-[48vw] min-[480px]:min-h-[23vw] min-[768px]:min-h-[18vw] min-[992px]:min-h-[16vw] text-center spacing-[0.05em] uppercase justify-center items-center text-[22px] leading-[1.2em] flex relative overflow-hidden max-w-full '
          >
            <div className='absolute inset-0 overflow-hidden'>
              <div
                className='bg-no-repeat bg-cover absolute inset-0 bg-[50%_center] '
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionEight;
