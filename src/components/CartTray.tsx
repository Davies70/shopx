import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
const CartTray = () => {
  return (
    <motion.div className='z-5000 cursor-pointer bg-[rgba(8,8,8,.7)] inset-0 fixed flex flex-row justify-end items-stretch'>
      <motion.div className='w-[93%] min-w-[auto] min-[480px]:w-[90%] min-[480px]:min-w-[300px] max-w-[625px] bg-white mt-0 pt-0 overflow-hidden flex flex-col'>
        <div className='p-[9px_24px] min-[480px]:px-[36px] min-[768px]:p-[0_40px] z-50 bg-[#f4f8fa] text-[#080808] tracking-[0.02em] border-b border-[#e5ebf0] justify-between items-center w-full h-[60px] min-h-[60px] text-[14px] font-[400] flex relative'>
          <div className='w-commerce-commercecartheader close-cart'>
            <a
              href='#'
              data-node-type='commerce-cart-close-link'
              className='w-commerce-commercecartcloselink close-button w-inline-block'
              role='button'
              aria-label='Close cart'
            >
              <div className='back-button-content'>
                <ArrowLeft />
                <div>Back</div>
              </div>
            </a>
          </div>
          <div className='cart-quantity-wrapper'>
            <div>Bag</div>
            <div className='inside-cart-quantity'>
              <div>(</div>
              <div data-wf-bindings='%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D'></div>
              <div>)</div>
            </div>
          </div>
        </div>
        <div className='z-25 bg-white max-h-[100vh] mt-[-60px] py-0 relative flex display flex-col'>
          <form className='h-full flex-[0_auto] max-h-[100vh] p-0 overflow-hidden'>
            <div id='scrollbar'></div>
            <div className='w-commerce-commercecartfooter cart-footer'>
              <div
                aria-live=''
                aria-atomic='false'
                className='w-commerce-commercecartlineitem cart-line-item'
              >
                <div>Estimated total</div>
                <div
                  data-wf-bindings='%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D'
                  className='w-commerce-commercecartordervalue price large'
                ></div>
              </div>
              <div className='cart-bottom'>
                <div className='checkout-actions'>
                  <div
                    data-node-type='commerce-cart-quick-checkout-actions'
                    style='display:none'
                  >
                    <a
                      role='button'
                      tabindex='0'
                      aria-haspopup='dialog'
                      aria-label='Apple Pay'
                      data-node-type='commerce-cart-apple-pay-button'
                      style='background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat'
                      className='w-commerce-commercecartapplepaybutton special-pay-button'
                    >
                      <div></div>
                    </a>
                    <a
                      role='button'
                      tabindex='0'
                      aria-haspopup='dialog'
                      data-node-type='commerce-cart-quick-checkout-button'
                      style='display:none'
                      className='w-commerce-commercecartquickcheckoutbutton special-pay-button'
                    >
                      <svg
                        className='w-commerce-commercequickcheckoutgoogleicon'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                      >
                        <defs>
                          <polygon
                            id='google-mark-a'
                            points='0 .329 3.494 .329 3.494 7.649 0 7.649'
                          ></polygon>
                          <polygon
                            id='google-mark-c'
                            points='.894 0 13.169 0 13.169 6.443 .894 6.443'
                          ></polygon>
                        </defs>
                        <g fill='none' fill-rule='evenodd'>
                          <path
                            fill='#4285F4'
                            d='M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469'
                          ></path>
                          <path
                            fill='#34A853'
                            d='M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16'
                          ></path>
                          <g transform='translate(0 4)'>
                            <mask id='google-mark-b' fill='#fff'>
                              <use xlink:href='#google-mark-a'></use>
                            </mask>
                            <path
                              fill='#FBBC04'
                              d='M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337'
                              mask='url(#google-mark-b)'
                            ></path>
                          </g>
                          <mask id='google-mark-d' fill='#fff'>
                            <use xlink:href='#google-mark-c'></use>
                          </mask>
                          <path
                            fill='#EA4335'
                            d='M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291'
                            mask='url(#google-mark-d)'
                          ></path>
                        </g>
                      </svg>
                      <svg
                        className='w-commerce-commercequickcheckoutmicrosofticon'
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                      >
                        <g fill='none' fill-rule='evenodd'>
                          <polygon
                            fill='#F05022'
                            points='7 7 1 7 1 1 7 1'
                          ></polygon>
                          <polygon
                            fill='#7DB902'
                            points='15 7 9 7 9 1 15 1'
                          ></polygon>
                          <polygon
                            fill='#00A4EE'
                            points='7 15 1 15 1 9 7 9'
                          ></polygon>
                          <polygon
                            fill='#FFB700'
                            points='15 15 9 15 9 9 15 9'
                          ></polygon>
                        </g>
                      </svg>
                      <div>Pay with browser.</div>
                    </a>
                  </div>
                  <a
                    href='/checkout'
                    data-node-type='cart-checkout-button'
                    className='w-commerce-commercecartcheckoutbutton checkout-button'
                    data-loading-text='Hang Tight...'
                  >
                    Continue to Checkout
                  </a>
                </div>
              </div>
            </div>
          </form>
          <div className='w-commerce-commercecartemptystate empty-cart'>
            <div className='empty-cart-content'>
              <div className='stacked-intro center'>
                <div className='stacked-description'>
                  <div className='heading small'>Still shopping?</div>
                  <div className='body-display small'>
                    Your cart is currently empty.
                  </div>
                </div>
                <a href='/shop' className='button dark w-inline-block'>
                  <div className='button-text-wrapper'>
                    <div
                      className='button-text'
                      style='transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;'
                    >
                      ShoP All
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-live=''
            data-node-type='commerce-cart-error'
            className='w-commerce-commercecarterrorstate error-message'
          >
            <div
              className='w-cart-error-msg'
              data-w-cart-quantity-error='Product is not available in this quantity.'
              data-w-cart-general-error='Something went wrong when adding this item to the cart.'
              data-w-cart-checkout-error='Checkout is disabled on this site.'
              data-w-cart-cart_order_min-error='The order minimum was not met. Add more items to your cart to continue.'
              data-w-cart-subscription_error-error='Before you purchase, please use your email invite to verify your address so we can send order updates.'
            >
              Product is not available in this quantity.
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartTray;
