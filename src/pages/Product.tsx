import GridWrapper from '@/components/GridWrapper';
import { productCards } from '@/data';

const Product = () => {
  return (
    <div className='z-10 bg-white relative '>
      <div className='flex justify-center'>
        <GridWrapper>
          <div className='grid col-end-4 row-[1/2] col-start-1 min-[992px]:col-end-3 gap-y-0 min-[992px]:gap-y-[16px] grid-cols-[1fr] min-[992px]:grid-cols-[1fr_minmax(auto,500px)] justify-between'>
            <div className='min-[992px]:row-[1/2] min-[992px]:col-[1/2] relative overflow-auto'>
              <div className='relative top-0 min-[992px]:sticky min-[992px]:top-[65px] px-[3px]'>
                <div
                  role='list'
                  className='mb-0 flex-wrap min-[992px]:flex-nowrap min-[992px]:mb-[-3px]'
                >
                  <div
                    role='listitem'
                    className='min-w-[95%] min-[768px]:min-w-[50%] min-[992px]:min-w-full min-[992px]:mb-[3px] p-[3px_3px_0] h-full max-h-none pt-0 overflow-hidden'
                  >
                    <a
                      href='#'
                      className='w-full min-w-full max-w-fit inline-block bg-transparent'
                    >
                      <img
                        src='/images/card_5_1.png'
                        loading='lazy'
                        sizes='(max-width: 479px) 100vw, (max-width: 767px) 55vw, (max-width: 991px) 20vw, (max-width: 1439px) 100vw, 3088px'
                        alt=''
                        className='object-cover h-full max-h-full inline-block  align-middle  border-0'
                      />
                    </a>
                  </div>

                  {productCards[0].images.map((image, index) => (
                    <div
                      role='listitem'
                      key={index}
                      className='min-w-[95%] mb-0 pt-0 min-[768px]:min-w-[50%] min-[992px]:mb-[3px] relative p-[3px_3px_0]'
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
                          className='w-full object-cover h-full max-h-full inline-block max-w-full align-middle  border-0'
                        />
                      </a>
                    </div>
                  ))}
                  {/* <div
                    role='listitem'
                    className='collection-item w-dyn-item w-dyn-repeater-item'
                  >
                    <a
                      href='#'
                      className='lightbox-link w-inline-block w-lightbox'
                      aria-label='open lightbox'
                      aria-haspopup='dialog'
                    >
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b942b1ba7a71/643050d91170b4a62a3e33e2_gog-5.png'
                        loading='lazy'
                        alt=''
                        className='product-gallery-image'
                      />
                    </a>
                  </div>
                  <div
                    role='listitem'
                    className='collection-item w-dyn-item w-dyn-repeater-item'
                  >
                    <a
                      href='#'
                      className='lightbox-link w-inline-block w-lightbox'
                      aria-label='open lightbox'
                      aria-haspopup='dialog'
                    >
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b942b1ba7a71/643050da59806f665f4cf71f_gog-6.png'
                        loading='lazy'
                        alt=''
                        sizes='(max-width: 479px) 100vw, (max-width: 767px) 55vw, (max-width: 991px) 20vw, (max-width: 1439px) 100vw, 3088px'
                        className='product-gallery-image'
                      />
                    </a>
                  </div> */}
                  <div
                    role='listitem'
                    className='collection-item w-dyn-item w-dyn-repeater-item'
                  >
                    <a
                      href='#'
                      className='lightbox-link w-inline-block w-lightbox'
                      aria-label='open lightbox'
                      aria-haspopup='dialog'
                    >
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png'
                        loading='lazy'
                        alt=''
                        sizes='(max-width: 479px) 100vw, (max-width: 767px) 55vw, (max-width: 991px) 20vw, (max-width: 1439px) 100vw, 3088px'
                        className='product-gallery-image'
                      />
                    </a>
                  </div>
                </div>
                <div className='w-dyn-hide w-dyn-empty'>
                  <div>No items found.</div>
                </div>
              </div>
              <div className='back-button-wrapper'></div>
            </div>
            <div
              id='buy'
              className='product-sidebar w-node-_563ff434-1443-2db3-f482-0ca148565d8a-fcba7ab5'
            >
              <div className='product-top'>
                <div className='product-page-top'>
                  <div className='product-tags'>
                    <div className='new-tag product-page-tag w-condition-invisible'>
                      <div className='label-text'>New</div>
                    </div>
                    <div className='discount-label product-page-tag w-condition-invisible'>
                      <img src='' loading='lazy' alt='' className='tag-icon' />
                      <div className='label-text discount w-dyn-bind-empty'></div>
                    </div>
                  </div>
                </div>
                <h1 className='product-page-title'>Cat-Eye Goggles</h1>
              </div>
              <div className='product-price'>
                <div data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'>
                  $&nbsp;99.00&nbsp;USD
                </div>
                <div
                  data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                  className='compare-price w-dyn-bind-empty'
                ></div>
              </div>
              <div className='product-details'>
                <div className='width-small'>
                  <div className='body-display small'>
                    Cat Eye Shields are the ultimate in military-grade
                    protective eyewear for cats.
                  </div>
                </div>
                <div className='add-to-cart'>
                  <form
                    data-node-type='commerce-add-to-cart-form'
                    data-commerce-sku-id='642fc428f0c0b9f1a2ba7b91'
                    data-loading-text='Adding to cart...'
                    data-commerce-product-id='642fc428f0c0b9bc32ba7ade'
                    className='w-commerce-commerceaddtocartform add-to-cart-default'
                  >
                    <div
                      data-wf-sku-bindings='[{"from":"f_sku_values_3dr","to":"optionValues"}]'
                      data-commerce-product-sku-values='{"120639e8f65cc8be0ef3a23336cc5f06":"3118060692aa3c60ca6fc456a77e3d2e"}'
                      data-node-type='commerce-add-to-cart-option-list'
                      data-commerce-product-id='642fc428f0c0b9bc32ba7ade'
                      data-preselect-default-variant='false'
                      role='group'
                    >
                      <div className='product-block' role='group'>
                        <div className='block-title-wrapper'>
                          <div
                            data-wf-bindings='[{"innerHTML":{"type":"PlainText","filter":{"type":"identity","params":[]},"dataPath":"name"}}]'
                            className='block-title'
                          >
                            Size
                          </div>
                          <div
                            // href="#buy" // Not valid on div, removed
                            data-w-id='5bd94c80-435e-95fb-43ea-aefe0f23296d'
                            className='button-text-wrapper'
                          >
                            <div className='button-text'>Size guide</div>
                          </div>
                        </div>
                        <div
                          id='option-set-120639e8f65cc8be0ef3a23336cc5f06'
                          data-node-type='commerce-add-to-cart-pill-group'
                          data-commerce-option-set-id='120639e8f65cc8be0ef3a23336cc5f06'
                          className='w-commerce-commerceaddtocartoptionpillgroup button-group'
                          role='radiogroup'
                          aria-label='Size'
                        >
                          <div
                            data-node-type='commerce-add-to-cart-pill'
                            className='w-commerce-commerceaddtocartoptionpill product-option'
                            role='radio'
                            aria-checked='false'
                            aria-disabled='false'
                            data-option-id='3118060692aa3c60ca6fc456a77e3d2e'
                          >
                            <div data-wf-bindings='[{"innerHTML":{"type":"PlainText","filter":{"type":"identity","params":[]},"dataPath":"name"}}]'>
                              S (4-6)
                            </div>
                          </div>
                          <div
                            data-node-type='commerce-add-to-cart-pill'
                            className='w-commerce-commerceaddtocartoptionpill product-option'
                            role='radio'
                            aria-checked='false'
                            aria-disabled='false'
                            data-option-id='1863941f5171812ee4484193fc396466'
                          >
                            <div data-wf-bindings='[{"innerHTML":{"type":"PlainText","filter":{"type":"identity","params":[]},"dataPath":"name"}}]'>
                              M (8-10)
                            </div>
                          </div>
                          <div
                            data-node-type='commerce-add-to-cart-pill'
                            className='w-commerce-commerceaddtocartoptionpill product-option'
                            role='radio'
                            aria-checked='false'
                            aria-disabled='false'
                            tabIndex={-1}
                            data-option-id='832307c2fd94f1dcb4063f88918ac671'
                          >
                            <div data-wf-bindings='[{"innerHTML":{"type":"PlainText","filter":{"type":"identity","params":[]},"dataPath":"name"}}]'>
                              L (12-14)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type='submit'
                      data-node-type='commerce-add-to-cart-button'
                      data-loading-text='Adding to Bag...'
                      aria-busy='false'
                      aria-haspopup='dialog'
                      className='w-commerce-commerceaddtocartbutton add-to-cart-button'
                      value='Add to Bag'
                    />
                    <a
                      data-node-type='commerce-buy-now-button'
                      data-default-text='Buy now'
                      data-subscription-text='Subscribe now'
                      aria-busy='false'
                      aria-haspopup='false'
                      style={{ display: 'none' }}
                      className='w-commerce-commercebuynowbutton add-to-cart-button grey w-dyn-hide'
                      href='/checkout'
                    >
                      Buy now
                    </a>
                  </form>
                  <div
                    style={{ display: 'none' }}
                    className='w-commerce-commerceaddtocartoutofstock'
                    tabIndex={0}
                  >
                    <div>This product is out of stock.</div>
                  </div>
                  <div
                    aria-live=''
                    data-node-type='commerce-add-to-cart-error'
                    style={{ display: 'none' }}
                    className='w-commerce-commerceaddtocarterror'
                  >
                    <div
                      data-node-type='commerce-add-to-cart-error'
                      data-w-add-to-cart-quantity-error='Product is not available in this quantity.'
                      data-w-add-to-cart-general-error='Something went wrong when adding this item to the cart.'
                      data-w-add-to-cart-mixed-cart-error='You can’t purchase another product with a subscription.'
                      data-w-add-to-cart-buy-now-error='Something went wrong when trying to purchase this item.'
                      data-w-add-to-cart-checkout-disabled-error='Checkout is disabled on this site.'
                      data-w-add-to-cart-select-all-options-error='Please select an option in each set.'
                    >
                      Product is not available in this quantity.
                    </div>
                  </div>
                </div>
                <div className='product-block no-bottom-padding'>
                  <div className='feature-list'>
                    <div className='feature-item'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b949bdba7b01_truck-5(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='feature-icon'
                      />
                      <div className='body-display small'>
                        Free Expedited Shipping
                      </div>
                    </div>
                    <div className='feature-item'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b91aa0ba7b12_privacy-guard-success(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='feature-icon'
                      />
                      <div className='body-display small'>2 Year Warranty </div>
                    </div>
                    <div className='feature-item'>
                      <img
                        src='https://cdn.prod.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b95bd8ba7b11_package-close(24x24)%402x.svg'
                        loading='lazy'
                        alt=''
                        className='feature-icon'
                      />
                      <div className='body-display small'>60 Day Returns</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-list'>
                <div className='tab-item'>
                  <div className='tab-top'>
                    <div className='tab-title'>
                      <div>Description</div>
                      <div
                        data-is-ix2-target='1'
                        className='lottie-tab-icon'
                        data-w-id='905b3233-5735-8508-68f3-5d7670f6a4ec'
                        data-animation-type='lottie'
                        data-src='https://cdn.prod.website-files.com/6154cd80ca1f5d32398bfc85/61608cea33cff8b1825bf23a_OPEN%20lottie.json'
                        data-loop='0'
                        data-direction='1'
                        data-autoplay='0'
                        data-renderer='svg'
                        data-default-duration='2.5'
                        data-duration='0'
                        data-ix2-initial-state='0'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          viewBox='0 0 740 740'
                          width='740'
                          height='740'
                          preserveAspectRatio='xMidYMid meet'
                          style={{
                            width: '100%',
                            height: '100%',
                            transform: 'translate3d(0px, 0px, 0px)',
                            contentVisibility: 'visible',
                          }}
                        >
                          <defs>
                            <clipPath id='__lottie_element_4'>
                              <rect width='740' height='740' x='0' y='0'></rect>
                            </clipPath>
                          </defs>
                          <g clipPath='url(#__lottie_element_4)'>
                            <g
                              transform='matrix(1,0,0,1,370,370)'
                              opacity='1'
                              style={{ display: 'block' }}
                            >
                              <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='miter'
                                  fillOpacity='0'
                                  strokeMiterlimit={10}
                                  stroke='rgb(255,255,255)'
                                  strokeOpacity='1'
                                  strokeWidth={60}
                                  d=' M324.5,0 C324.5,0 -324.5,0 -324.5,0'
                                ></path>
                              </g>
                            </g>
                            <g
                              transform='matrix(1,0,0,1,370,370)'
                              opacity='1'
                              style={{ display: 'block' }}
                            >
                              <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='miter'
                                  fillOpacity='0'
                                  strokeMiterlimit={10}
                                  stroke='rgb(255,255,255)'
                                  strokeOpacity='1'
                                  strokeWidth={60}
                                  d=' M0,-324.5 C0,-324.5 0,324.5 0,324.5'
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className='hover-cover'></div>
                  </div>
                  <div className='tab-bottom' style={{ height: 0 }}>
                    <div className='tab-bottom-content'>
                      <div className='body-display extra-small'>
                        Cat Eye Shields are the ultimate in military-grade
                        protective eyewear for cats. Designed to protect your
                        feline friend's eyes during any mission, these goggles
                        are made with the highest quality materials to provide
                        maximum protection against wind, dust, and other
                        potential hazards.
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tab-item'>
                  <div className='tab-top'>
                    <div className='tab-title'>
                      <div>Delivery &amp; Returns</div>
                    </div>
                  </div>
                  <div className='hover-cover'></div>
                  <div className='tab-bottom'>
                    <div className='tab-bottom-content'>
                      <div className='body-display extra-small'>
                        Nunc ac arcu erat. In volutpat ornare massa non
                        condimentum. Praesent lacinia interdum mi sit amet
                        volutpat. Integer suscipit orci vel fringilla hendrerit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </div>
  );
};

export default Product;
