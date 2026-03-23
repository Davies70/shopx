import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Quote, CheckCircle2, MapPin } from "lucide-react";
import { fieldReports } from "@/data";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-20">
        {/* TACTICAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/20 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Radio size={18} className="text-[#FF3366] animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs text-white tracking-widest uppercase">
                SYS.DIR // COMM_INTERCEPTS
              </span>
            </div>
            <h2 className="font-clash text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
              Field_Reports
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1 font-mono text-[10px] text-[#667479] tracking-widest uppercase">
            <span>ENCRYPTION: BYPASSED</span>
            <span className="text-white">STATUS: [ LOGS_ACCESSIBLE ]</span>
          </div>
        </div>

        {/* COMMS LOG INTERFACE */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Column: Transmission List */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            <div className="font-mono text-[10px] text-[#667479] mb-2 uppercase tracking-widest flex justify-between border-b border-white/10 pb-2">
              <span>INCOMING_SIGNALS</span>
              <span>[{fieldReports.length}]</span>
            </div>

            {fieldReports.map((report, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={report.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex flex-col items-start p-4 border text-left font-mono transition-all duration-300 ${
                    isActive
                      ? "border-[#FF3366] bg-[#FF3366]/5"
                      : "border-white/10 bg-[#12141A] hover:border-white/50"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeReportIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF3366]"
                    />
                  )}

                  <div
                    className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-1 ${isActive ? "text-[#FF3366]" : "text-white"}`}
                  >
                    {report.id}
                  </div>
                  <div className="text-[10px] text-[#667479] tracking-widest uppercase">
                    T: {report.time}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Decrypted Report View */}
          <div className="w-full md:w-2/3 relative">
            {/* Corner Framing */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 z-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 z-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 z-30 pointer-events-none" />

            <div className="bg-[#12141A] border border-white/10 p-6 sm:p-8 md:p-12 min-h-[350px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Meta Data Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white uppercase tracking-widest">
                      <MapPin size={14} className="text-[#FF3366]" />
                      {fieldReports[activeIndex].location}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#C5F82A] uppercase tracking-widest">
                      <CheckCircle2 size={14} />
                      {fieldReports[activeIndex].status}
                    </div>
                  </div>

                  {/* The actual testimonial / report */}
                  <div className="relative flex-1">
                    <Quote
                      size={48}
                      className="absolute -top-4 -left-4 text-white/5 rotate-180 pointer-events-none"
                    />
                    <p className="font-mono text-sm sm:text-base md:text-lg text-[#E0E0E0]/90 leading-relaxed relative z-10">
                      "{fieldReports[activeIndex].report}"
                    </p>
                  </div>

                  {/* Rating / Integrity Check */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#667479] uppercase tracking-widest">
                      GEAR_INTEGRITY:
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-6 ${i < fieldReports[activeIndex].rating ? "bg-[#FF3366]" : "bg-white/10"}`}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-white uppercase tracking-widest ml-2">
                      {fieldReports[activeIndex].rating * 20}%
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
