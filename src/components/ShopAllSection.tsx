import { motion } from "framer-motion";
import { slidesOne } from "@/data";
import ProductCard from "./ProductCard";
import { productCards } from "@/data";
import { Link } from "react-router-dom";
import { Database, ArrowRight } from "lucide-react";

const ShopAllSection = () => {
  const slide = slidesOne[2];

  return (
    <section className="relative w-full bg-[#0B0C10] border-t border-white/10">
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row relative z-10">
        {/* LEFT COLUMN: Sticky Cinematic Poster */}
        <div className="w-full lg:w-1/2 relative lg:sticky top-[70px] h-[60vh] lg:h-[calc(100vh-70px)] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group/poster">
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF3366] z-30 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF3366] z-30 pointer-events-none" />

          <div
            className="absolute inset-0 grayscale-[0.6] contrast-125 transition-transform duration-1000 group-hover/poster:scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent z-10" />
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
            }}
          />

          <div className="absolute inset-0 z-30 p-8 md:p-16 flex flex-col justify-end items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Database size={18} className="text-[#FF3366]" />
              <span className="font-mono text-[10px] md:text-xs text-white tracking-widest uppercase bg-[#0B0C10] px-2 py-1 border border-white/20">
                QUARTERMASTER_DATABASE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-clash text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wide leading-[1.1] mb-8 drop-shadow-xl max-w-lg"
            >
              {slide.title_1}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/shop"
                className="group/btn relative inline-flex items-center justify-center bg-white text-[#0B0C10] px-8 py-4 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all border-2 border-white hover:text-white hover:border-[#FF3366]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  ACCESS_FULL_ARCHIVE
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 z-0 opacity-0 group-hover/btn:opacity-100 bg-[#FF3366] transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Inventory Grid */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 bg-[#0B0C10]">
          <div className="font-mono text-[10px] text-[#667479] mb-8 uppercase tracking-widest flex justify-between border-b border-white/10 pb-4">
            <span>// RECENT_ACQUISITIONS</span>
            <span>DISPLAYING: 04</span>
          </div>

          {/* FIX APPLIED HERE: 
              1. auto-rows-fr forces all rows to have equal height items.
              2. h-full ensures cards stretch to fill the grid cell.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 md:gap-6 lg:gap-8">
            {productCards.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 lg:hidden block">
            <Link
              to="/shop"
              className="w-full text-center block font-mono text-xs text-white border border-white/20 py-4 uppercase tracking-widest hover:bg-[#FF3366] hover:border-[#FF3366] transition-colors"
            >
              LOAD_MORE_ASSETS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAllSection;
