import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Heading from './Heading';
import RevealButton from './RevealButton';
import CartTrayFooter from './CartTrayFooter';
import CartItem from './CartItem';
import { removeCartItem } from '@/services';
import { useEffect, useState } from 'react';
import { CartItem as CartItemType } from '@/categories';
import { Link } from 'react-router-dom';

type CartTrayProps = {
  isCartOpen: boolean;
  setIsCartOpen: (arg: boolean) => void;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const trayVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const CartTray = ({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  setCartItems,
}: CartTrayProps) => {
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Calculate total when cartItems changes
    const sum = cartItems
      .map((c) => c.product.price * c.quantity)
      .reduce((acc, curr) => curr + acc, 0);
    setTotal(sum);
  }, [cartItems]);

  const handleRemoveCartItem = (id: string) => {
    removeCartItem(id); // updates localStorage
    setCartItems((prev) => prev.filter((c) => c.product.id !== id)); // update local state
  };

  const handleCheckOut = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDisabled(true);
  };
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ duration: 0.3 }}
          className='z-5000  bg-[rgba(8,8,8,.7)] inset-0 fixed flex flex-row justify-end items-stretch'
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            variants={trayVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className='w-[93%] min-w-[auto] min-[480px]:w-[90%] min-[480px]:min-w-[300px] max-w-[625px] bg-white mt-0 pt-0 overflow-hidden flex flex-col'
          >
            {/* ...rest of your code remains unchanged... */}
            <div className='p-[9px_24px] min-[480px]:px-[36px] min-[768px]:p-[0_40px] z-50 bg-[#f4f8fa] text-[#080808] tracking-[0.02em] border-b border-[#e5ebf0] justify-between items-center w-full h-[60px] min-h-[60px] text-[14px] font-[400] flex relative'>
              <div className='pr-[24px] flex-none justify-between items-center flex relative'>
                <a
                  href='#'
                  className='text-[#596066] w-full h-full items-center justify-center p-[8px_0] flex max-w-full cursor-pointer '
                  role='button'
                  aria-label='Close cart'
                  onClick={() => setIsCartOpen(false)}
                >
                  <div className='grid text-[11px] justify-center items-center grid-cols-[auto_auto] grid-rows-[auto] uppercase tracking-[5px] gap-[18px]'>
                    <ArrowLeft />
                    <div>Back</div>
                  </div>
                </a>
              </div>
              <div className='grid text-[12px] grid-cols-[1fr_auto] grid-rows-[auto] uppercase tracking-[5px] gap-y-[16px] gap-x-[9px]'>
                <div>Bag</div>
                <div className='grid text-[12px] grid-flow-col grid-cols-[auto] grid-rows-[auto] tracking-[0] gap-y-[16px] gap-x-[2px]'>
                  <div>(</div>
                  {cartItems.length}
                  <div>)</div>
                </div>
              </div>
            </div>
            <div className='z-25 bg-white max-h-[100vh] mt-[-60px] py-0 relative flex flex-1 flex-col'>
              <div className='max-[479px]:h-full flex-[0_auto] max-h-screen overflow-hidden flex justify-between flex-col'>
                <div className='grid auto-cols-[1fr] mr-[12px] ml-[24px] gap-y-[24px] min-[480px]:ml-[36px] min-[767px]:py-[24px] min-[768px]:gap-y-[36px] min-[768px]:ml-[40px] min-[480px]:mr-[16px] gap-x-[16px] border-t border-[#e4e9ec] flex-[0_auto] grid-rows-[auto_auto] grid-cols-[1fr] mt-[60px]  overflow-auto min-[992px]:py-[36px] min-[992px]'>
                  {cartItems.map((cartItem) => (
                    <CartItem
                      cartItem={cartItem}
                      key={cartItem.product.id}
                      removeCartItem={handleRemoveCartItem}
                    />
                  ))}
                </div>
                {cartItems.length !== 0 && (
                  <CartTrayFooter
                    total={total}
                    handleCheckOut={handleCheckOut}
                  />
                )}
              </div>

              {cartItems.length === 0 && (
                <div className='flex-1 justify-center w-full  items-center absolute left-0 right-0 top-[20%]'>
                  <div className='grid grid-cols-[1fr] grid-rows-[auto] gap-y-[24px] gap-x-[16px] justify-items-center'>
                    <div className='grid grid-cols-[1fr] grid-rows-[auto_auto] gap-y-[12px] gap-x-[16px] justify-items-center'>
                      <Heading type='small' text='Still shopping?' />
                      <div className='text-[15px] text-[#667479] leading-[1.65em] tracking-normal'>
                        Your cart is currently empty.
                      </div>
                    </div>

                    <Link to='/shop'>
                      <RevealButton
                        backgroundColor='#080808'
                        text='Shop all'
                        borderRadius='100px'
                        textColor='white'
                      />
                    </Link>
                  </div>
                </div>
              )}

              {isDisabled && cartItems.length > 0  &&(
                <div
                  style={{
                    borderLeft: '3px solid #a74030',
                  }}
                  className='flex-none tracking-normal mb-[24px] mx-[24px] min-[480px]:mx-[36px] min-[768px]:mx-[40px] py-[12px] pl-[18px] pr-[10px] bg-[#ffdede] mt-[10px] p-[10px]'
                >
                  <div>Checkout is disabled for this spoof site</div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartTray;
