import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FolderLock, Crosshair, ArrowUpRight } from "lucide-react";
import { featured } from "@/data";

const FeaturedCategories = () => {
  return (
    <section className="relative w-full bg-[#0B0C10] py-16 md:py-24 border-t border-white/10 overflow-hidden z-10">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20">
        {/* TACTICAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/20 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <FolderLock size={18} className="text-[#FF3366]" />
              <span className="font-mono text-[10px] md:text-xs text-white tracking-widest uppercase">
                SYS.DIR // SECTOR_ROUTING
              </span>
            </div>
            <h2 className="font-clash text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
              Classified_Sectors
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-white tracking-widest uppercase">
            <span className="opacity-50">SELECT_SECTOR_TO_PROCEED</span>
          </div>
        </div>

        {/* ASYMMETRICAL BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {featured.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group border-2 border-white/10 overflow-hidden bg-[#12141A] ${
                cat.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1 md:row-span-1"
              }`}
            >
              <Link
                to={cat.link}
                className="absolute inset-0 w-full h-full block"
              >
                {/* 1. The Image (Grayscale default, color on hover) */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />

                {/* 2. Tactical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
                  }}
                />

                {/* 3. Hover Target Lock (Sniper's Red) */}
                <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <Crosshair
                    size={64}
                    className="text-[#FF3366] animate-pulse"
                    strokeWidth={1}
                  />

                  {/* Corner Targeting Brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#FF3366]" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#FF3366]" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#FF3366]" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#FF3366]" />
                </div>

                {/* 4. Data Readout (Content) */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-40">
                  {/* Top Bar: ID and Count */}
                  <div className="flex justify-between items-start font-mono text-[10px] tracking-widest uppercase">
                    <span className="bg-white text-[#0B0C10] px-2 py-1 font-bold">
                      [{cat.id}]
                    </span>
                    <span className="text-white/80 border border-white/20 bg-[#0B0C10]/50 backdrop-blur-sm px-2 py-1 transition-colors group-hover:border-[#FF3366] group-hover:text-[#FF3366]">
                      {cat.count}
                    </span>
                  </div>

                  {/* Bottom Bar: Title and Arrow */}
                  <div className="flex justify-between items-end">
                    <h3 className="font-clash text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-wide drop-shadow-lg transition-colors group-hover:text-[#FF3366]">
                      {cat.title}
                    </h3>

                    {/* Access Arrow */}
                    <div className="w-10 h-10 border-2 border-white/20 flex items-center justify-center text-white bg-[#0B0C10]/50 backdrop-blur-sm transition-all duration-300 group-hover:border-[#FF3366] group-hover:bg-[#FF3366]">
                      <ArrowUpRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
