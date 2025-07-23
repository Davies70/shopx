type CartFooterProps = {
  total: number;
};
const CartTrayFooter = ({ total }: CartFooterProps) => {
  return (
    <div className='border-t flex flex-col border-[#e6e6e6] border-solid flex-[0_auto] px-[24px] pt-[18px] min-[480px]:px-[36px] min-[480px]:pt-[24px] min-[768px]:px-[40px] min-[768px]:pt-[28px] pb-[24px]'>
      <div className='flex mb-[24px] pb-[18px] text-black tracking-[.02em] border-b text-[15px] border-[#e5ebf0] min-[480px]:mb-[30px]  min-[480px]:pb-[28px] flex-none justify-between '>
        <div>Estimated total</div>
        <div className='text-[15px] font-[400] text-[#667479] tracking-[0.05em]'>
          $ {total.toFixed(2)} USD
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex-col flex-1 flex'>
          <a
            href='/checkout'
            className='uppercase bg-black tracking-[5px] flex text-[11px] justify-center items-center min-h-[60px] flex-1 text-white cursor-pointer text-center p-[9px_15px] rounded-[100px]'
            data-loading-text='Hang Tight...'
          >
            Continue to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartTrayFooter;
