import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className='inline-block whitespace-normal relative h-full w-full text-left align-top'
    >
      <div className='px-[3px]'>
        <div>
          <div className='max-[767px]:px-0 max-[991px]:px-0 grid-rows-[auto] grid-cols-[1fr] gap-x-[6px] gap-y-[24px] grid'>
            <div>
              <a className='grid no-underline decoration-0 gap-x-[3px] gap-y-[3px] text-[#080808] bg-[rgb(255,255,255)] grid-rows-[auto_auto] grid-cols-[1fr] max-w-[100%]'>
                <div className='card-image-wrapper h-full bg-[rgb(244,248,250)] '>
                  <div className='max-[767px]:h-[100vw] max-[991px]:h-[65vw] h-44vw max-h-[700px] flex flex-col justify-end min-h-full overflow-hidden relative'>
                    <div className='h-full absolute inset-0 overflow-hidden'></div>
                    <div className='indicator z-20 h-[5px] absolute inset-0 overflow-hidden'>
                      <div className='bg-[rgb(255,255,255)] h-full w-full'></div>
                    </div>
                  </div>
                </div>
                <div className='px-[4px] gap-x-[16px] gap-y-[9px] grid-rows-[auto] grid-cols-[1fr] justify-start justify-items-center p-[14px_16px_18px]'>
                  <div className=' grid justify-self-stretch max-[767px]:gap-y-[7px] max-[767px]:grid-cols-[1fr] max-[767px]:justify-start max-[767px]:items-start gap-x-[9px] gap-y-[16px] grid-rows-[auto] grid-cols-[1fr_auto] justify-between items-start w-full'>
                    <div className='product-card-info grid gap-x-[16px] gap-y-[4px] grid-rows-[auto_auto] grid-cols-[1fr]'>
                      <div className='product-tags flex'>
                        <div className='new-tag flex mr-[9px] h-[28px] items-center'>
                          <div className='label-text tracking-[3px] uppercase pl-[6px] text-[11px] font-[500] leading-[1.2em]  border-[2px_solid_#07090c]'>
                            New
                          </div>
                        </div>
                        <div className='discount-label items-center h-[28px] flex'>
                          <img />
                          <div className='labbel-text text-[#a74030] mt-0 leading-[1em] tracking-[3px] uppercase pl-[6px] text-[11px] font-[500]  border-[2px_solid_#07090c]'>
                            20% off
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='gap-x-[16px] gap-y-[8px] grid-rows-[auto_auto] grid-cols-[1fr] grid'>
                      <h3 className='product-title tracking-[0px] leading-[1.3em] text-[18px]'>
                        Warrior Gloves
                      </h3>
                      <div className='subtitle-small tracking-[3px] text-[11px] text-[#667479] uppercase font-[300] leading-[1.3em]'></div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
