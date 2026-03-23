type CartFooterProps = {
  total: number;
  handleCheckOut: (e: React.MouseEvent) => void;
};

const CartTrayFooter = ({ total, handleCheckOut }: CartFooterProps) => {
  return (
    <div className="bg-[#12141A] border-t-2 border-[#E0E0E0]/10 px-6 md:px-8 py-6 flex-[0_auto] relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {/* Tactical Subtotal Readout */}
      <div className="flex justify-between items-end mb-6 font-mono">
        <div className="flex flex-col">
          <span className="text-[#667479] text-[10px] tracking-widest uppercase mb-1">
            EST_RESOURCE_COST
          </span>
          <span className="text-[#E0E0E0] text-sm tracking-widest uppercase">
            SUBTOTAL
          </span>
        </div>
        <div className="text-[#FF3366] text-xl font-bold tracking-wider">
          ${total.toFixed(2)}
        </div>
      </div>

      {/* Execution Button */}
      <button
        className="w-full relative group overflow-hidden bg-[#E0E0E0] text-[#080808] font-mono text-[12px] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover:bg-[#FF3366] hover:text-white"
        onClick={handleCheckOut}
      >
        <span className="relative z-10">INITIATE_EXTRACTION</span>

        {/* Animated hazard stripes on hover */}
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          }}
        ></div>
      </button>
    </div>
  );
};

export default CartTrayFooter;
