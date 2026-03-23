import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert } from "lucide-react";
import CartTrayFooter from "./CartTrayFooter";
import CartItem from "./CartItem";
import { removeCartItem } from "@/services";
import { useEffect, useState } from "react";
import { CartItem as CartItemType } from "@/categories";
import { Link } from "react-router-dom";

type CartTrayProps = {
  isCartOpen: boolean;
  setIsCartOpen: (arg: boolean) => void;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, backdropFilter: "blur(4px)" },
  exit: { opacity: 0, backdropFilter: "blur(0px)" },
};

const trayVariants = {
  hidden: { x: "100%", borderLeftWidth: "0px" },
  visible: {
    x: 0,
    borderLeftWidth: "4px",
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
  exit: { x: "100%", transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
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
    const sum = cartItems
      .map((c) => c.product.price * c.quantity)
      .reduce((acc, curr) => curr + acc, 0);
    setTotal(sum);
  }, [cartItems]);

  const handleRemoveCartItem = (id: string) => {
    removeCartItem(id);
    setCartItems((prev) => prev.filter((c) => c.product.id !== id));
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
          initial="hidden"
          animate="visible"
          exit="exit"
          className="z-[5000] bg-[rgba(8,8,8,.8)] inset-0 fixed flex flex-row justify-end items-stretch"
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            variants={trayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-[95%] sm:w-[90%] md:w-[500px] max-w-[625px] bg-[#0B0C10] border-l-[#FF3366] overflow-hidden flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Tactical Header */}
            <div className="px-6 md:px-8 z-50 bg-[#12141A] border-b-2 border-[#E0E0E0]/10 flex justify-between items-center w-full min-h-[70px]">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#FF3366] rounded-full animate-pulse"></div>
                <span className="text-[#E0E0E0] font-mono tracking-widest text-[12px] uppercase font-bold">
                  INVENTORY_MANIFEST
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="font-mono text-[#667479] text-[10px] uppercase tracking-widest">
                  ITEMS:{" "}
                  <span className="text-white">[{cartItems.length}]</span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-[#667479] hover:text-[#FF3366] transition-colors flex items-center gap-2 group"
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                    CLOSE_AIRLOCK
                  </span>
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="z-25 bg-[#0B0C10] relative flex flex-1 flex-col overflow-hidden">
              {/* Scrollable Items List */}
              <div className="flex-[1_1_auto] overflow-y-auto custom-scrollbar px-6 md:px-8 py-6 space-y-6">
                {cartItems.map((cartItem) => (
                  <CartItem
                    cartItem={cartItem}
                    key={cartItem.product.id}
                    removeCartItem={handleRemoveCartItem}
                  />
                ))}

                {/* Empty State HUD */}
                {cartItems.length === 0 && (
                  <div className="h-full flex flex-col justify-center items-center text-center mt-20">
                    <ShieldAlert
                      size={64}
                      className="text-[#FF3366] mb-6 opacity-80"
                      strokeWidth={1}
                    />
                    <h3 className="text-white font-mono uppercase tracking-widest text-lg mb-2">
                      CACHE_DEPLETED
                    </h3>
                    <p className="text-[#667479] font-mono text-xs uppercase tracking-widest mb-8 max-w-[250px] leading-relaxed">
                      WARNING: Proceeding without adequate supplies severely
                      reduces survival probability.
                    </p>
                    <Link to="/shop" onClick={() => setIsCartOpen(false)}>
                      <button className="bg-[#12141A] border border-[#FF3366] text-[#FF3366] hover:bg-[#FF3366] hover:text-white px-8 py-3 font-mono text-xs font-bold tracking-widest uppercase transition-all">
                        ACCESS_ARMORY
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Spoof Warning */}
              {isDisabled && cartItems.length > 0 && (
                <div className="mx-6 md:mx-8 mb-4 border-l-4 border-[#FF3366] bg-[#FF3366]/10 p-3">
                  <p className="font-mono text-[10px] text-[#FF3366] tracking-widest uppercase">
                    [ ERROR: EXTERNAL_NETWORK_OFFLINE ] Checkout disabled in
                    simulation mode.
                  </p>
                </div>
              )}

              {/* Footer */}
              {cartItems.length !== 0 && (
                <CartTrayFooter total={total} handleCheckOut={handleCheckOut} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartTray;
