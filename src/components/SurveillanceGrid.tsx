import { motion } from "framer-motion";
import { slidesTwo } from "@/data";
import { Cctv, ScanEye, ExternalLink } from "lucide-react";

const SectionEight = () => {
  // Grab 4 images for the feeds
  const feeds = [slidesTwo[0], slidesTwo[1], slidesTwo[2], slidesTwo[3]];

  return (
    <section className="relative w-full bg-[#0B0C10] border-t border-white/10 overflow-hidden py-16 md:py-24 z-10">
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-20">
        {/* TACTICAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/20 pb-4">
          <div className="flex items-center gap-3">
            <Cctv size={18} className="text-[#FF3366]" />
            <h2 className="font-mono text-xs md:text-sm font-bold text-white tracking-widest uppercase">
              LIVE_SURVEILLANCE_NETWORK
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[#667479] tracking-widest uppercase flex items-center gap-2 mt-2 md:mt-0">
            <span className="w-2 h-2 bg-[#FF3366] rounded-full animate-pulse" />
            FEEDS_ACTIVE
          </div>
        </div>

        {/* SURVEILLANCE GRID */}
        {/* Mobile: 2 cols, Tablet: 4 cols, Desktop: 5 cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 bg-[#12141A] p-2 md:p-4 border border-white/10">
          {/* FEED 1 */}
          <FeedImage slide={feeds[0]} delay={0.1} id="CAM_01" />

          {/* FEED 2 */}
          <FeedImage slide={feeds[1]} delay={0.2} id="CAM_02" />

          {/* CENTER NODE: The Call to Action */}
          <motion.a
            href="https://daviesajayi.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 md:col-span-4 lg:col-span-1 aspect-[2/1] lg:aspect-square flex flex-col justify-center items-center bg-[#0B0C10] border-2 border-white/10 hover:border-[#FF3366] group transition-colors relative overflow-hidden p-6"
          >
            {/* Hover Glitch Background */}
            <div
              className="absolute inset-0 bg-[#FF3366] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 5px, transparent 5px, transparent 10px)",
              }}
            />

            <ExternalLink
              size={24}
              className="text-white/50 group-hover:text-[#FF3366] transition-colors mb-4"
            />

            <span className="font-mono text-[10px] text-[#667479] group-hover:text-white transition-colors tracking-widest uppercase mb-1">
              ACCESS_PRIMARY_NODE
            </span>
            <span className="font-clash text-lg md:text-xl font-black text-white uppercase tracking-widest group-hover:text-[#FF3366] transition-colors">
              @ShopApocalypse
            </span>

            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-[#FF3366] transition-colors" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-[#FF3366] transition-colors" />
          </motion.a>

          {/* FEED 3 */}
          <FeedImage slide={feeds[2]} delay={0.4} id="CAM_03" />

          {/* FEED 4 */}
          <FeedImage slide={feeds[3]} delay={0.5} id="CAM_04" />
        </div>
      </div>
    </section>
  );
};

// Reusable Sub-component for the individual camera feeds
const FeedImage = ({
  slide,
  delay,
  id,
}: {
  slide: any;
  delay: number;
  id: string;
}) => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative aspect-square bg-[#0B0C10] overflow-hidden group border border-transparent hover:border-[#FF3366] transition-colors cursor-crosshair block"
    >
      {/* The Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale-[0.8] contrast-125 opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
        style={{ backgroundImage: `url(${slide?.image})` }}
      />

      {/* CRT Scanline Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
        }}
      />

      {/* Default HUD */}
      <div className="absolute bottom-2 left-2 font-mono text-[9px] sm:text-[10px] text-white/50 tracking-widest z-20 group-hover:opacity-0 transition-opacity">
        {id} // STANDBY
      </div>

      {/* Hover HUD (Target Lock) */}
      <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center bg-[#FF3366]/10">
        <div className="absolute top-2 left-2 font-mono text-[10px] text-[#FF3366] font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-[#FF3366] rounded-full animate-pulse" />
          REC
        </div>

        <ScanEye size={32} className="text-[#FF3366] mb-2" strokeWidth={1} />
        <span className="font-mono text-[10px] text-white bg-[#FF3366] px-2 py-0.5 tracking-widest uppercase">
          SUBJECT_IDENTIFIED
        </span>

        {/* Hover Brackets */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FF3366]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FF3366]" />
      </div>
    </motion.a>
  );
};

export default SectionEight;
