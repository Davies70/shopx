import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Clock, Activity } from "lucide-react";
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
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 20, mass: 1 },
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
  const [time, setTime] = useState(new Date());

  // Tactical Clock Logic
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
          className="z-[5000] bg-black/80 inset-0 fixed flex justify-end items-stretch"
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            variants={trayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-[500px] bg-[#0B0C10] border-l-2 border-[#FF3366] overflow-hidden flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* 1. TACTICAL HEADER (Mobile Optimized) */}
            <div className="relative bg-[#12141A] border-b border-white/10 z-50">
              {/* Scanline Overlay for Header Only */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)",
                  backgroundSize: "100% 3px",
                }}
              />

              <div className="px-4 md:px-8 py-4 flex flex-col gap-4">
                {/* Top Row: System Status & Close */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Activity
                      size={14}
                      className="text-[#FF3366] animate-pulse"
                    />
                    <span className="font-mono text-[9px] text-[#667479] tracking-[0.3em] uppercase">
                      System_Live // active_session
                    </span>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 border border-white/10 text-white hover:border-[#FF3366] hover:text-[#FF3366] transition-all group"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Bottom Row: Manifest Title & Tactical Clock */}
                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#FF3366] uppercase tracking-widest font-bold">
                      Inventory_Manifest
                    </span>
                    <h2 className="font-clash text-2xl text-white uppercase tracking-tight">
                      Asset_Cache{" "}
                      <span className="text-white/20">
                        [{cartItems.length.toString().padStart(2, "0")}]
                      </span>
                    </h2>
                  </div>

                  <div className="flex flex-col items-end font-mono">
                    <div className="flex items-center gap-2 text-[#C5F82A] text-[10px] tracking-widest">
                      <Clock size={10} />
                      {time.toLocaleTimeString("en-GB", { hour12: false })}
                    </div>
                    <div className="text-[8px] text-[#667479] uppercase tracking-tighter">
                      MT_ZULU_TIME
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. BODY / MANIFEST LIST */}
            <div className="flex-1 overflow-hidden flex flex-col relative">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <div className="flex-1 overflow-y-auto custom-scrollbar px-4 md:px-8 py-6 space-y-6 relative z-10">
                {cartItems.map((cartItem) => (
                  <CartItem
                    cartItem={cartItem}
                    key={cartItem.product.id}
                    removeCartItem={handleRemoveCartItem}
                  />
                ))}

                {/* Empty State */}
                {cartItems.length === 0 && (
                  <div className="h-full flex flex-col justify-center items-center text-center py-20">
                    <ShieldAlert
                      size={64}
                      className="text-[#FF3366] mb-6 opacity-40 animate-pulse"
                      strokeWidth={1}
                    />
                    <h3 className="text-white font-mono uppercase tracking-widest text-lg mb-2">
                      Cache_Empty
                    </h3>
                    <p className="text-[#667479] font-mono text-[10px] uppercase tracking-widest mb-8 max-w-[200px] leading-relaxed">
                      Zero operational assets detected in current requisition
                      loadout.
                    </p>
                    <Link
                      to="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="w-full max-w-[240px]"
                    >
                      <button className="w-full bg-white text-[#0B0C10] hover:bg-[#FF3366] hover:text-white py-4 font-mono text-[11px] font-black tracking-[0.2em] uppercase transition-all">
                        Open_Armory
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Error Warning (Sticky bottom of list) */}
              {isDisabled && cartItems.length > 0 && (
                <div className="mx-4 md:mx-8 mb-4 border border-[#FF3366]/30 bg-[#FF3366]/5 p-3 flex gap-3 items-center">
                  <ShieldAlert size={16} className="text-[#FF3366]" />
                  <p className="font-mono text-[9px] text-[#FF3366] tracking-widest uppercase leading-tight">
                    [ FATAL: Checkout_Uplink_Failed ] <br />
                    Secure gateway restricted to live operatives only.
                  </p>
                </div>
              )}

              {/* 3. FOOTER */}
              {cartItems.length !== 0 && (
                <div className="border-t border-white/10">
                  <CartTrayFooter
                    total={total}
                    handleCheckOut={handleCheckOut}
                  />
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
