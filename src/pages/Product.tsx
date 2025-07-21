import GridWrapper from '@/components/GridWrapper';
// import { productCards } from '@/data';
import { TagIcon } from 'lucide-react';
import TabItem from '@/components/TabItem';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  getProduct,
  getRelatedProducts,
  addOrUpdateCartItem,
} from '@/services';
import StackedIntro from '@/components/StackedIntro';
import Heading from '@/components/Heading';
import RevealButton from '@/components/RevealButton';
import RevealButtonWithIcon from '@/components/RevealButtonWithIcon';

import Testimonials from '@/components/Testimonials';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '@/categories';
import OldProductCard from '@/components/OldProductCard';

type ProductProps = {
  setIsLightBoxOpen: (a: boolean) => void;
};

const Product = ({ setIsLightBoxOpen }: ProductProps) => {
  const [size, setSize] = useState<'M' | 'L' | 'S'>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setisAdding] = useState<boolean>(false);

  const params = useParams();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToRef = () => {
    if (scrollRef.current) {
      gsap.to(window, {
        duration: 2, // seconds
        scrollTo: scrollRef.current,
        ease: 'power2.inOut',
      });
    }
  };

  const product = params.id ? getProduct(params.id) : null;
  const relatedProducts = params.id ? getRelatedProducts(params.id) : [];

  const handleAddToCart = () => {
    setisAdding(true);
    if (product) {
      const cartProduct = { ...product, id: product.id + size };
      const cartItem: CartItem = {
        product: cartProduct,
        quantity,
        size,
      };
      setTimeout(() => setisAdding(false), 3000);
      addOrUpdateCartItem(cartItem);
    }
  };

  const handleCartItemQuantityDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleCartItemQuantityIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity((q) => Math.max(1, q + 1));
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className='z-10 bg-white relative '>
      <div className='flex justify-center mt-14'>
        <GridWrapper>
          <div className='grid col-end-4 row-[1/2] col-start-1 min-[992px]:col-end-3 gap-x-[6.5vw] gap-y-0 min-[992px]:gap-y-[16px] grid-cols-[1fr] min-[992px]:grid-cols-[1fr_minmax(auto,500px)] justify-between'>
            <div className='min-[992px]:row-[1/2] min-[992px]:col-[1/2] relative overflow-auto'>
              <div className='relative top-0 min-[992px]:sticky min-[992px]:top-[65px] px-[3px] overflow-visible min-[992px]:overflow-hidden'>
                <div className='flex mb-0 flex-nowrap min-[992px]:flex-wrap min-[992px]:mb-[-3px] min-[768px]:overflow-hidden'>
                  <div
                    onClick={() => setIsLightBoxOpen(true)}
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
                        className='object-cover h-full w-full max-h-full inline-block  align-middle  border-0'
                      />
                    </a>
                  </div>

                  {product?.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className='min-w-[95%]  h-full mb-0 pt-0 min-[768px]:min-w-[50%] min-[992px]:mb-[3px]  relative p-[3px_3px_0] w-[100vw] min-[480px]:w-[55vw] min-[768px]:w-[20vw] min-[992px]:w-[50%]'
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
                          className='object-cover h-full w-full max-h-full inline-block max-w-full align-middle  border-0 '
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              ref={scrollRef}
              className='col-[span_1] row-[span_1] self-start justify-self-start max-[767px]:pt-[36px] max-[991px]:max-w-[675px] max-[991px]:pt-[40px] max-[991px]:px-[5vw] gap-x-[16px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr] content-start justify-stretch items-start w-full min-[992px]:pt-[60px] pb-0 grid sticky top-[65px]'
            >
              <div className='grid grid-cols-[1fr] grid-rows-[auto_auto] gap-[12px] '>
                <div className='flex flex-col'>
                  <div className='flex'>
                    {!product?.discount?.isDiscounted && (
                      <div className='mb-[12px] items-center h-[28px] mr-[9px] flex'>
                        <div className='border-l-[2px] border-[#07090c] tracking-[3px] uppercase pl-[6px] text-[11px] font-[500] leading-[1.2em]'>
                          {product?.tags?.[0]}
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
                  <form className='' onSubmit={handleAddToCart}>
                    <div className='grid grid-cols-[1fr] grid-rows-[auto] gap-[12px]'>
                      {/* Size Selection */}
                      <div className='grid text-[12px] gap-[16px] text-[#667479] grid-rows-[auto] grid-cols-[auto_auto] justify-between items-center'>
                        <div className='text-[12px] uppercase font-[500] tracking-[0.15em] '>
                          Size
                        </div>
                        {/* <div className='flex overflow-hidden justify-center flex-col cursor-pointer'>
                          <div className='tracking-normal'>Size guide</div>
                        </div> */}
                      </div>
                      <div
                        className='flex ml-[-3px] mb-0 justify-items-start justify-between flex-wrap'
                        aria-label='Size'
                      >
                        {(['S', 'M', 'L'] as Array<'S' | 'M' | 'L'>).map(
                          (sz) => (
                            <div
                              key={sz}
                              onClick={() => setSize(sz)}
                              style={{
                                borderColor: size === sz ? 'black' : '',
                              }}
                              className='flex transition-all leading-[1em] text-[14px] p-[16px_24px] mr-[3px] mb-[6px] items-center justify-center flex-1 rounded-[3px] whitespace-nowrap tracking-[0.1em] text-center text-[#667479] border-[#e4e9ec] cursor-pointer bg-white border'
                            >
                              <div>
                                {sz}{' '}
                                {sz === 'S'
                                  ? '(4-6)'
                                  : sz === 'M'
                                  ? '(8-10)'
                                  : '(12-14)'}
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      {/* Quantity Selector */}
                      <div className='grid grid-cols-[auto_1fr_auto] items-center gap-[12px] mt-2'>
                        <span className='uppercase text-[12px] font-[500] tracking-[0.15em] text-[#667479]'>
                          Quantity
                        </span>
                        <div className='flex items-center gap-[12px]'>
                          <button
                            type='button'
                            onClick={handleCartItemQuantityDecrease}
                            className='w-[36px] h-[36px] border border-[#e4e9ec] rounded-[3px] text-[18px] text-[#667479] hover:bg-[#f4f8fa]'
                          >
                            −
                          </button>
                          <span className='min-w-[24px] text-center text-[16px] font-medium text-[#080808]'>
                            {quantity}
                          </span>
                          <button
                            type='button'
                            onClick={handleCartItemQuantityIncrease}
                            className='w-[36px] h-[36px] border border-[#e4e9ec] rounded-[3px] text-[18px] text-[#667479] hover:bg-[#f4f8fa]'
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Add to Bag Button */}
                      <button
                        type='submit'
                        className='flex bg-[#080808] justify-center items-center tracking-[5px] uppercase rounded-[100px] w-full min-h-[60px] mt-[24px] text-[12px] cursor-pointer'
                      >
                        <div className='text-white text-center'>
                          {isAdding ? 'Adding to bag...' : 'Add to bag'}
                        </div>
                      </button>
                    </div>
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
                  answer={`We offer free expedited shipping on all orders. Orders are processed within 1-2 business days and typically arrive within 3-7 business days. If you are not completely satisfied with your purchase, you may return your item(s) within 60 days of delivery for a full refund. Items must be unused and in their original packaging.`}
                />
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <section>
        {/* <GridWrapper>
          <div>
            <GridWrapper>
              <div>
                <div></div>
              </div>
            </GridWrapper>
          </div>
        </GridWrapper> */}
      </section>
      <section className='py-[20px] min-[480px]:py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] flex justify-center relative z-10'>
        <GridWrapper isClipped={false}>
          <div className='col-[2/3] w-full grid grid-cols-1 min-[992px]:grid-cols-[1fr_1fr] gap-[48px]'>
            {/* Sticky Left Column */}
            <div className='min-[992px]:sticky min-[992px]:top-[65px] self-start'>
              <div className='max-w-none min-[992px]:max-w-[600px] py-[0px] min-[992px]:py-[150px] px-[5vw] grid gap-y-[30px] min-[768px]:gap-y-[48px]'>
                <StackedIntro type='normal'>
                  <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300]'>
                    Details
                  </div>

                  <StackedIntro type='small'>
                    <div className='max-w-[425px]'>
                      <Heading type='large' text='why we crafted this' />
                    </div>
                    <div className='max-w-[425px] text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                      {product?.whyWeMadeIt}
                    </div>
                  </StackedIntro>
                </StackedIntro>

                <div className='justify-self-start'>
                  <RevealButton
                    text='buy now'
                    backgroundColor='#080808'
                    textColor='white'
                    borderRadius='100px'
                    onClick={scrollToRef}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Right Column */}
            <div className='pt-0 min-[768px]:pt-[65px] flex flex-nowrap min-[992px]:flex-wrap gap-[6px] justify-items-center min-[768px]:justify-items-end'>
              {product?.images.map((image, index) => (
                <div
                  key={index}
                  className='relative p-[3px_3px_0] w-[100vw]  min-[992px]:w-full'
                >
                  <img
                    src={image}
                    alt=''
                    loading='lazy'
                    className='object-cover w-full h-full max-h-full border-0'
                  />
                </div>
              ))}
            </div>
          </div>
        </GridWrapper>
      </section>
      <section className='bg-[#f4f8fa] p-0 z-10 justify-center flex relative '>
        <GridWrapper>
          <div className='grid col-[1/4] row-[1/2] min-[992px]:col-[1/3] grid-cols-1 min-[992px]:grid-cols-[50vw_1fr] gap-x-[100px] gap-y-0 min-[992px]:gap-y-[16px] w-full'>
            {/* Image Section */}
            <div className='max-[991px]:order-9999 relative h-[80vh] min-h-[275px] min-[480px]:h-[75vw] min-[480px]:min-h-[400px] min-[768px]:h-[70vw] min-[768px]:min-h-[700px] overflow-hidden'>
              <img
                src={product?.images[1]}
                loading='lazy'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>

            {/* Text Content */}
            <div className='grid pt-0 pb-[48px] min-[480px]:pb-[60px] max-[991px]:gap-y-[36px] max-[991px]:bg-white max-[991px]:pr-[10vw] max-[991px]:px-[5vw] min-[992px]:gap-y-[48px] gap-x-[48px] grid-rows-[auto_auto] grid-cols-1 content-center min-[991px]:max-w-[600px] min-[769px]:py-[150px]'>
              <div className='grid gap-x-[16px] gap-y-[24px] items-start'>
                <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300]'>
                  Our Fabric and Gear
                </div>

                <StackedIntro type='small'>
                  <div className='max-w-[700px]'>
                    <Heading
                      type='large'
                      text='crafted with the best of survivalist tech'
                    />
                  </div>
                  <div className='max-w-[425px] text-[#667479] text-[18px] leading-[1.65em] tracking-normal'>
                    {product?.longDescription}
                  </div>
                </StackedIntro>
              </div>

              <RevealButtonWithIcon
                text='Get yours now'
                textColor='#667479'
                isTextPadding={false}
                onClick={scrollToRef}
              />
            </div>
          </div>
        </GridWrapper>
      </section>
      <section className='py-[72px] min-[480px]:py-[80px] min-[768px]:py-[100px] min-[992px]:py-[160px] z-10 justify-center'>
        <div className='gap-y-[36px] min-[480px]:gap-y-[40px] z-20 gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between grid relative'>
          <GridWrapper>
            <div className='grid grid-flow-col row-[1/2] col-[2/3] text-center justify-center grid-cols-[1fr] justify-items-center gap-[16px] grid-rows-[auto] items-end'>
              <StackedIntro type='normal'>
                <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300] justify-self-center'>
                  more images
                </div>

                <Heading type='large' text='for those who last after the end' />
              </StackedIntro>
            </div>
          </GridWrapper>
          <GridWrapper>
            <div className='row-[1/2] col-[2/2]'>
              <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-[6px]'>
                {product?.images
                  .concat(product.images[0])
                  .map((image, index) => (
                    <div key={index}>
                      <div className='h-[28vw] relative'>
                        <div
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                          className='bg-no-repeat bg-cover absolute inset-0 bg-[50%_center]'
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </GridWrapper>
          <GridWrapper>
            <div className='self-center justify-self-center row-[1/2] col-[2/3]'>
              <RevealButton
                text='buy now'
                backgroundColor='#080808'
                textColor='white'
                borderRadius='100px'
                onClick={scrollToRef}
              />
            </div>
          </GridWrapper>
        </div>
      </section>
      <section className='pb-0 pt-[72px] min-[480px]:pt-[80px] min-[768px]:pt-[100px] min-[992px]:pt-[160px] flex relative z-10'>
        <div className='gap-y-[36px] min-[480px]:gap-y-[40px] z-20 gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] content-between grid relative'>
          <GridWrapper>
            <div className='grid row-[1/2] col-[2/3] text-center min-[767px]:justify-start grid-cols-[1fr] min-[768px]:grid-cols-[1fr_1fr] max-[767px]:justify-items-start gap-[16px] grid-rows-[auto] items-end'>
              <StackedIntro type='normal'>
                <div className='text-[#667479] tracking-[4px] uppercase text-[14px] leading-[1.3em] font-[300] min-[991px]:justify-self-start'>
                  related
                </div>

                <Heading type='small' text='Preppers also bought' />
              </StackedIntro>
              <div className='justify-self-start min-[768px]:justify-self-end'>
                <Link to='/shop'>
                  <RevealButtonWithIcon
                    text='shop all'
                    textColor='#667479'
                    isTextPadding={false}
                  />
                </Link>
              </div>
            </div>
          </GridWrapper>
          <div className='gap-y-[140px] grid-rows-[auto] z-20 gap-x-[14px] grid-cols-[1fr] content-between grid relative'>
            <GridWrapper>
              <div className='grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-[6px] gap-y-[16px] min-[480px]:px-[5vw] overflow-auto col-[1/4] min-[992px]:col-[2/3] row-[1/2]'>
                <div className='row-[span_1] col-[span_4] '>
                  <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-y-[16px] gap-x-[6px]'>
                    {relatedProducts?.map((product) => (
                      <OldProductCard product={product} key={product.id} />
                    ))}
                  </div>
                </div>
              </div>
            </GridWrapper>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Product;
