import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem as CartItemType } from '@/categories';

type CartItemProps = {
  cartItem: CartItemType;
  removeCartItem: (id: string) => void;
};

const CartItem = ({ cartItem, removeCartItem }: CartItemProps) => {
  const handleRemoveCartItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeCartItem(cartItem.product.id);
  };

  return (
    <AnimatePresence>
      {
        <motion.div
          className='border-t w-full border-[#e5ebf0] flex items-start py-0'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className='border-t border-[#f4f9fa] flex py-0 w-full justify-between items-stretch'>
            <img
              src={cartItem.product.images[0]}
              alt=''
              className='inline-block max-w-[90px] min-w-[70px] h-full w-[70px] sm:w-[90px] sm:min-w-[90px] sm:max-w-[90px] object-cover align-middle'
            />
            <div className='flex w-full flex-col justify-between ml-4 mr-0 flex-1'>
              <div className='mb-6 sm:mb-9 justify-between flex items-start mx-0'>
                <div className='flex items-start flex-col'>
                  <div className='mb-2 text-base font-medium tracking-normal'>
                    {cartItem.product.name}
                  </div>
                  <ul className='text-[#667479] text-sm font-light leading-[1.6em] my-0 pl-0'>
                    <li className='tracking-normal'>
                      <span>Size</span>
                      <span>: </span>
                      {cartItem.size === 'S' ? (
                        <span>S (4-6)</span>
                      ) : cartItem.size === 'M' ? (
                        <span>M (8-10)</span>
                      ) : (
                        <span>L (12-14)</span>
                      )}
                    </li>
                  </ul>
                </div>
                <button
                  type='button'
                  aria-label='Remove item from cart'
                  className='text-[#596066] justify-center flex items-center text-xs max-w-full transition-colors duration-200 hover:text-red-500 cursor-pointer'
                  onClick={handleRemoveCartItem}
                >
                  <X className='opacity-75 w-3 min-w-[12px] max-w-full inline-block align-middle transition-opacity duration-200 hover:opacity-100' />
                </button>
              </div>
              <div className='flex flex-col items-start justify-between sm:items-end'>
                <div className='mb-2 flex text-[#667479] text-[11px] items-center tracking-[4px] sm:mb-0'>
                  <div>Qty:</div>
                  <div
                    className='text-[#596066] text-center tracking-[4px] bg-[rgba(244,248,250,0)] flex border border-[#e5ebf0] rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 justify-center items-center w-10 h-6 ml-2 p-1 text-xs hover:border-blue-300'
                    style={{
                      transition:
                        'border-color .4s cubic-bezier(.25,.46,.45,.94)',
                    }}
                  >
                    {cartItem.quantity}
                  </div>
                  <span className='ml-2 text-[13px] font-medium'>
                    $ {cartItem.product.price} USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default CartItem;
