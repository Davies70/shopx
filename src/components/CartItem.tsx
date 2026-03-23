import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { CartItem as CartItemType } from "@/categories";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-[#12141A] border border-[#E0E0E0]/10 p-3 flex gap-4 group hover:border-[#E0E0E0]/30 transition-colors"
    >
      {/* Product Image - High Contrast/Grayscale for tactical look */}
      <div className="relative w-[80px] h-[100px] shrink-0 bg-[#0B0C10] overflow-hidden border border-[#E0E0E0]/5">
        <img
          src={cartItem.product.images[0]}
          alt={cartItem.product.name}
          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF3366] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF3366] opacity-50"></div>
      </div>

      <div className="flex flex-col justify-between flex-1 py-1">
        {/* Header: Title & Remove */}
        <div className="flex justify-between items-start">
          <div>
            <div className="text-[#E0E0E0] text-[13px] font-bold uppercase tracking-wider mb-1 leading-tight line-clamp-2">
              {cartItem.product.name}
            </div>
            <div className="text-[#667479] font-mono text-[10px] tracking-widest uppercase">
              SPEC:{" "}
              {cartItem.size === "S"
                ? "S(4-6)"
                : cartItem.size === "M"
                  ? "M(8-10)"
                  : "L(12-14)"}
            </div>
          </div>
          <button
            type="button"
            aria-label="Abort item"
            className="text-[#667479] hover:text-[#FF3366] transition-colors p-1"
            onClick={handleRemoveCartItem}
          >
            <Trash2 size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Footer: Qty & Price */}
        <div className="flex items-end justify-between mt-4">
          <div className="flex items-center border border-[#E0E0E0]/20 bg-[#0B0C10]">
            <div className="font-mono text-[#667479] text-[9px] px-2 py-1 tracking-widest uppercase border-r border-[#E0E0E0]/20">
              QTY
            </div>
            <div className="font-mono text-white text-[11px] px-3 py-1 font-bold">
              {cartItem.quantity.toString().padStart(2, "0")}
            </div>
          </div>

          <div className="font-mono text-white text-[13px] tracking-widest">
            ${cartItem.product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
