import GridWrapper from '@/components/GridWrapper';
// import { productCards } from '@/data';
import { TagIcon } from 'lucide-react';
import TabItem from '@/components/TabItem';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '@/services';
import { Product as ProductType } from '@/categories';

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const data = getProduct(params.id);
      console.log(data);
      setProduct(data);
    }
  }, [params.id]);
  return (
    <div className='z-10 bg-white relative '>
      <div className='flex justify-center'>
        <GridWrapper>
          <div className='grid col-end-4 row-[1/2] col-start-1 min-[992px]:col-end-3 gap-x-[6.5vw] gap-y-0 min-[992px]:gap-y-[16px] grid-cols-[1fr] min-[992px]:grid-cols-[1fr_minmax(auto,500px)] justify-between'>
            <div className='min-[992px]:row-[1/2] min-[992px]:col-[1/2] relative overflow-auto'>
              <div className='relative top-0 min-[992px]:sticky min-[992px]:top-[65px] px-[3px]'>
                <div
                  role='list'
                  className='flex mb-0 flex-nowrap min-[992px]:flex-wrap min-[992px]:mb-[-3px]'
                >
                  <div
                    role='listitem'
                    className='min-w-[95%] min-[768px]:min-w-[50%] min-[992px]:min-w-full min-[992px]:mb-[3px] min-[992px]:w-[50%] p-[3px_3px_0] h-full max-h-none pt-0 overflow-hidden'
                  >
                    <a
                      href='#'
                      className='w-full min-w-full max-w-fit inline-block bg-transparent'
                    >
                      <img
                        src={product?.images[0]}
                        loading='lazy'
                        alt=''
                        className='object-cover h-full max-h-full inline-block  align-middle  border-0'
                      />
                    </a>
                  </div>

                  {product?.images.slice(1).map((image, index) => (
                    <div
                      role='listitem'
                      key={index}
                      className='min-w-[95%] mb-0 pt-0 min-[768px]:min-w-[50%] min-[992px]:mb-[3px] relative p-[3px_3px_0] w-[100vw] min-[480px]:w-[55vw] min-[768px]:w-[20vw] min-[992px]:w-[50%]'
                    >
                      <a
                        href='#'
                        className='lightbox-link w-inline-block w-lightbox'
                        aria-label='open lightbox'
                        aria-haspopup='dialog'
                      >
                        <img
                          src={image}
                          loading='lazy'
                          alt=''
                          className='object-cover h-full max-h-full inline-block max-w-full align-middle  border-0 '
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-[span_1] row-[span_1] self-start justify-self-start max-[767px]:pt-[36px] max-[991px]:max-w-[675px] max-[991px]:pt-[40px] max-[991px]:pl-[5vw] gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr] content-start justify-stretch items-start w-full min-[992px]:pt-[60px] pb-0 grid sticky top-[65px]'>
              <div className='grid grid-cols-[1fr] grid-rows-[auto_auto] gap-[12px] '>
                <div className='flex flex-col'>
                  <div className='flex'>
                    {!product?.discount?.isDiscounted && (
                      <div className='mb-[12px] items-center h-[28px] mr-[9px] flex'>
                        <div className='border-l-[2px] border-[#07090c] tracking-[3px] uppercase pl-[6px] text-[11px] font-[500] leading-[1.2em]'>
                          New
                        </div>
                      </div>
                    )}
                    {product?.discount?.isDiscounted && (
                      <div className='mb-[12px] items-center h-[28px] flex gap-2.5'>
                        <TagIcon className='w-4 h-4 text-[#a74030]' />
                        <span className='text-[#a74030] text-xs font-semibold tracking-widest uppercase'>
                          {product.discount.percentOff}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <h1 className='font-[600] text-[30px] tracking-[0.07em] uppercase my-0 leading-[1.35em]'>
                  {product?.name}
                </h1>
              </div>
              <div className='grid font-[300] text-[18px] grid-cols-[auto_1fr] grid-rows-[auto] uppercase tracking-[0.04em] text-[#667479] gap-y-[6px] gap-x-[16px]'>
                <div>
                  ${' '}
                  {product?.discount?.isDiscounted
                    ? product.discount.discountPrice
                    : product?.price}{' '}
                  USD
                </div>
                {product?.discount?.isDiscounted && (
                  <div className='decoration-solid line-through'>
                    $ {product?.price} USD
                  </div>
                )}
              </div>
              <div className='grid gap-x-[28px] gap-y-[36px] grid-rows-[auto_auto] grid-cols-[1fr] pb-[24px]'>
                <div className='max-w-[425px]'>
                  <div className='text-[15px] text-[#667479] tracking-normal'>
                    {product?.shortDescription}
                  </div>
                </div>
                <div className='pt-0 pb-[12px] border-t border-[rgba(228,233,236,.6)]'>
                  <form className=''>
                    <div>
                      <div className='grid grid-cols-[1fr] grid-rows-[auto] gap-[12px]'>
                        <div className='grid text-[12px] gap-[16px] text-[#667479] grid-rows-[auto] grid-cols-[auto_auto] justify-between items-center'>
                          <div className='text-[12px] uppercase font-[500] tracking-[0.15em] text-[#080808]'>
                            Size
                          </div>
                          <div className='flex overflow-hidden justify-center flex-col cursor-pointer'>
                            <div className='tracking-normal'>Size guide</div>
                          </div>
                        </div>
                        <div
                          className='flex ml-[-3px] mb-0 justify-items-start justify-between flex-wrap'
                          aria-label='Size'
                        >
                          <div className='flex transition-[color_.3s_cubic-bezier(.25,.46,.45,.94),border-color_.3s_cubic-bezier(.25,.46,.45,.94)] leading-[1em] text-[14px] p-[16px_24px] mr-[3px] mb-[6px] items-center justify-center flex-1 rounded-[3px] whitespace-nowrap tracking-[0.1em] text-center text-[#667479] border-[#e4e9ec] cursor-pointer bg-white border active:border-black'>
                            <div>S (4-6)</div>
                          </div>
                          <div className='flex transition-[color_.3s_cubic-bezier(.25,.46,.45,.94),border-color_.3s_cubic-bezier(.25,.46,.45,.94)] leading-[1em] text-[14px] p-[16px_24px] mr-[3px] mb-[6px] items-center justify-center flex-1 rounded-[3px] whitespace-nowrap tracking-[0.1em] text-center text-[#667479] border-[#e4e9ec] cursor-pointer bg-white border active:border-black'>
                            <div>M (8-10)</div>
                          </div>
                          <div className='flex transition-[color_.3s_cubic-bezier(.25,.46,.45,.94),border-color_.3s_cubic-bezier(.25,.46,.45,.94)] leading-[1em] text-[14px] p-[16px_24px] mr-[3px] mb-[6px] items-center justify-center flex-1 rounded-[3px] whitespace-nowrap tracking-[0.1em] text-center text-[#667479] border-[#e4e9ec] cursor-pointer bg-white border active:border-black'>
                            <div>L (12-14)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='flex bg-[#080808] justify-center items-center tracking-[5px] uppercase rounded-[100px] w-full min-h-[60px] mt-[24px] text-[12px] cursor-pointer'
                    >
                      <div className='text-white text-center'>Add to bag</div>
                    </button>
                  </form>
                </div>
                <div className='grid grid-cols-[1fr] grid-rows-[auto] gap-[12px]'>
                  <div className='grid grid-cols-[1fr] grid-rows-[auto_auto_auto] gap-[14px]'>
                    <div className='grid font-[400] items-center grid-cols-[auto_1fr] grid-rows-[auto] text-[#667479] gap-[20px]'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b949bdba7b01_truck-5(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='opacity-55 w-[22px] inline-block max-w-full align-middle'
                      />
                      <div className='text-[#667479] leading-[1.65em] tracking-normal'>
                        Free Expedited Shipping
                      </div>
                    </div>
                    <div className='grid font-[400] items-center grid-cols-[auto_1fr] grid-rows-[auto] text-[#667479] gap-[20px]'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b91aa0ba7b12_privacy-guard-success(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='opacity-55 w-[22px] inline-block max-w-full align-middle'
                      />
                      <div className='text-[#667479] leading-[1.65em] tracking-normal'>
                        2 Year Warranty{' '}
                      </div>
                    </div>
                    <div className='grid font-[400] items-center grid-cols-[auto_1fr] grid-rows-[auto] text-[#667479] gap-[20px]'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b95bd8ba7b11_package-close(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='opacity-55 w-[22px] inline-block max-w-full align-middle'
                      />
                      <div className='text-[#667479] leading-[1.65em] tracking-normal'>
                        60 Day Returns
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid w-full grid-cols-[1fr] grid-rows-[auto_auto] border-t border-[#e4e9ec]'>
                <TabItem
                  question='Description'
                  answer={product?.longDescription ?? ''}
                />
                <TabItem
                  question='Delivery & Returns'
                  answer={`Delivery: We offer free expedited shipping on all orders. Orders are processed within 1-2 business days and typically arrive within 3-7 business days.

        Returns: If you are not completely satisfied with your purchase, you may return your item(s) within 60 days of delivery for a full refund. Items must be unused and in their original packaging. For more details, please refer to our Returns Policy page.`}
                />
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <section>
        <GridWrapper>
          <div>
            <GridWrapper>
              <div>
                <div></div>
              </div>
            </GridWrapper>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
};

export default Product;
