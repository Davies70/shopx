import { X } from 'lucide-react';

const CartItem = () => {
  return (
    <div className="border-t w-full border-[#e5ebf0] flex items-start py-0">
      <div className="border-t border-[#f4f9fa] flex py-0 w-full justify-between items-stretch">
        <img
          src="images/new_card_1.png"
          alt=""
          className="inline-block max-w-[90px] min-w-[70px] h-full w-[70px] sm:w-[90px] sm:min-w-[90px] sm:max-w-[90px] object-cover align-middle"
        />
        <div className="flex w-full flex-col justify-between ml-4 mr-0 flex-1">
          <div className="mb-6 sm:mb-9 justify-between flex items-start mx-0">
            <div className="flex items-start flex-col">
              <div className="mb-2 text-base font-medium tracking-normal">
                Tactical Scratching Post
              </div>
              <ul className="text-[#667479] text-sm font-light leading-[1.6em] my-0 pl-0">
                <li className="tracking-normal">
                  <span>Size</span>
                  <span>: </span>
                  <span>M (8-10)</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              aria-label="Remove item from cart"
              className="text-[#596066] justify-center flex items-center text-xs max-w-full transition-colors duration-200 hover:text-red-500"
            >
              <X className="opacity-75 w-3 min-w-[12px] max-w-full inline-block align-middle transition-opacity duration-200 hover:opacity-100" />
            </a>
          </div>
          <div className="flex flex-col items-start justify-between sm:items-end">
            <div className="mb-2 flex text-[#667479] text-[11px] items-center tracking-[4px] sm:mb-0">
              <div>Qty:</div>
              <input
                type="number"
                className="text-[#596066] text-center tracking-[4px] bg-[rgba(244,248,250,0)] flex border border-[#e5ebf0] rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 justify-center items-center w-10 h-6 ml-2 p-1 text-xs hover:border-blue-300"
                style={{
                  transition: 'border-color .4s cubic-bezier(.25,.46,.45,.94)',
                }}
                value={2}
                min={1}
              />
              <span className="ml-2 text-[13px] font-medium">$59.00USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
