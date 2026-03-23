import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  ShieldCheck,
  ShoppingCart,
  ChevronRight,
  AlertTriangle,
  Cpu,
  ArrowRight,
} from "lucide-react";

import GridWrapper from "@/components/GridWrapper";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import {
  getProduct,
  getRelatedProducts,
  addOrUpdateCartItem,
} from "@/services";
import { CartItem } from "@/categories";

type ProductProps = {
  setIsLightBoxOpen: (a: boolean) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Product = ({
  setIsLightBoxOpen,
  setCartItems,
  setIsCartOpen,
}: ProductProps) => {
  const params = useParams();
  const [size, setSize] = useState<"M" | "L" | "S">("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollToPlugin);

  const product = params.id ? getProduct(params.id) : null;
  const relatedProducts = params.id ? getRelatedProducts(params.id, 3) : [];

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);

    if (product) {
      // Tactical Handshake Simulation
      setTimeout(() => {
        const cartProduct = { ...product, id: product.id + size };
        const cartItem: CartItem = { product: cartProduct, quantity, size };
        const data = addOrUpdateCartItem(cartItem);
        setCartItems(data);
        setIsAdding(false);
        setIsCartOpen(true);
      }, 1000);
    }
  };

  if (!product)
    return (
      <div className="h-screen bg-[#0B0C10] flex items-center justify-center font-mono text-white">
        ASSET_NOT_FOUND_
      </div>
    );

  return (
    <div className="z-10 bg-[#0B0C10] relative min-h-screen text-white">
      {/* 1. BREADCRUMB TERMINAL */}
      <div className="border-b border-white/10 pt-24 pb-4">
        <GridWrapper>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#667479] uppercase tracking-widest px-4 md:px-0">
            <Link to="/shop" className="hover:text-white transition-colors">
              ROOT
            </Link>
            <ChevronRight size={10} />
            <Link to="/shop" className="hover:text-white transition-colors">
              ARCHIVE
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#FF3366]">{product.id}</span>
          </div>
        </GridWrapper>
      </div>

      {/* 2. PRIMARY PROCUREMENT MODULE */}
      <section className="py-8 md:py-16">
        <GridWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 lg:gap-20">
            {/* STICKY LEFT: ASSET VISUALIZER */}
            <div className="relative">
              <div className="lg:sticky lg:top-[100px] space-y-4">
                <div
                  onClick={() => setIsLightBoxOpen(true)}
                  className="relative aspect-square bg-[#12141A] border border-white/10 overflow-hidden cursor-crosshair group"
                >
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#FF3366] z-20 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#FF3366] z-20 pointer-events-none" />

                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={product.images[0]}
                    className="w-full h-full object-cover grayscale-[0.3] contrast-125 transition-all duration-700 group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-4 left-4 p-2 bg-[#0B0C10]/80 border border-white/10 font-mono text-[9px] tracking-widest z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    [ CLICK_TO_EXPAND_VIEW ]
                  </div>
                </div>

                {/* Sub-Feeds (Thumbnails) */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square border border-white/10 grayscale hover:grayscale-0 transition-all cursor-pointer bg-[#12141A]"
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: CONFIGURATION TERMINAL */}
            <div ref={scrollRef} className="space-y-8">
              <div className="space-y-4 border-b border-white/10 pb-8">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] text-[#667479] tracking-widest uppercase flex items-center gap-2">
                    <Cpu size={14} className="text-[#FF3366]" /> ASSET_CLASS:{" "}
                    {product.tags?.[0] || "GENERAL_ISSUE"}
                  </div>
                  <div className="font-mono text-[10px] text-[#C5F82A] animate-pulse uppercase">
                    [ STOCK_STABLE ]
                  </div>
                </div>

                <h1 className="font-clash text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                  {product.name}
                </h1>

                <div className="font-mono text-3xl text-white font-bold tracking-tighter">
                  ${product.price}.00{" "}
                  <span className="text-xs text-[#667479] ml-2">USD</span>
                </div>
              </div>

              {/* Asset Briefing */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-[#FF3366] tracking-widest uppercase font-bold">
                  // MISSION_PARAMETERS
                </div>
                <p className="font-mono text-sm text-[#E0E0E0]/80 leading-relaxed uppercase">
                  {product.shortDescription}
                </p>
              </div>

              {/* CONFIGURATION FORM */}
              <form onSubmit={handleAddToCart} className="space-y-8 pt-4">
                {/* Size Selector */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label className="font-mono text-[10px] text-[#667479] uppercase tracking-widest">
                      Select_Scale
                    </label>
                    <span className="font-mono text-[10px] text-white/40">
                      CALIBRATING...
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(["S", "M", "L"] as const).map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSize(sz)}
                        className={`py-4 cursor-pointer border-2 font-mono text-sm transition-all ${
                          size === sz
                            ? "border-[#FF3366] bg-[#FF3366]/5 text-white shadow-[0_0_15px_rgba(255,51,102,0.2)]"
                            : "border-white/10 text-[#667479] hover:border-white/30"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Procurement */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="cursor-pointer flex items-center border-2 border-white/10 bg-[#12141A]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-6 py-4 hover:text-[#FF3366] transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-mono font-bold">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="cursor-pointer px-6 py-4 hover:text-[#FF3366] transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isAdding}
                    className="flex-1 cursor-pointer group relative overflow-hidden bg-white text-[#0B0C10] py-4 font-mono text-sm font-black tracking-[0.2em] uppercase transition-all"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isAdding ? "NEGOTIATING_UPLINK..." : "REQUISITION_ASSET"}
                      {!isAdding && <ShoppingCart size={18} />}
                    </span>
                    <div
                      className="absolute inset-0 bg-[#FF3366] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)",
                      }}
                    />
                  </button>
                </div>
              </form>

              {/* Logistical Diagnostics */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <StatusLine
                  icon={<AlertTriangle size={14} />}
                  label="WARRANTY"
                  value="02_YEARS_RELIABILITY"
                />
                <StatusLine
                  icon={<ShieldCheck size={14} />}
                  label="RETURNS"
                  value="60_DAY_RECOVERY_PROTOCOL"
                />
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* 3. TECHNICAL DOSSIER (Full Specs) */}
      <section className="py-20 bg-[#12141A] border-y border-white/10">
        <GridWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-[#FF3366] text-white font-mono text-[10px] tracking-widest uppercase">
                ENGINEERING_REPORT
              </div>
              <h2 className="font-clash text-4xl md:text-5xl font-black uppercase">
                Why We Crafted This
              </h2>
              <p className="font-mono text-sm md:text-base text-[#667479] leading-relaxed uppercase">
                {product.whyWeMadeIt}
              </p>
              <p className="font-mono text-sm md:text-base text-[#667479] leading-relaxed uppercase">
                {product.longDescription}
              </p>
            </div>
            <div className="aspect-[4/3] border-2 border-white/10 relative overflow-hidden group">
              <img
                src={product.images[1]}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
                }}
              />
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* 4. RELATED ASSETS */}
      <section className="py-20">
        <GridWrapper>
          <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-6">
            <div>
              <div className="font-mono text-[10px] text-[#FF3366] tracking-[4px] uppercase mb-2">
                SQUAD_GEAR
              </div>
              <h2 className="font-clash text-3xl font-black uppercase">
                Preppers Also Bought
              </h2>
            </div>
            <Link
              to="/shop"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/50 hover:text-[#FF3366] transition-colors"
            >
              VIEW_ALL{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts?.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </GridWrapper>
      </section>

      <Testimonials />
    </div>
  );
};

// Tactical helper components
const StatusLine = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-[#667479]">
    <span className="text-white">{icon}</span>
    <span className="w-24 uppercase">{label}</span>
    <span className="text-white uppercase">{value}</span>
  </div>
);

export default Product;
