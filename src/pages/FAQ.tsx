import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridWrapper from "@/components/GridWrapper";
import { ChevronDown, ShieldAlert, Cpu, Terminal, Search } from "lucide-react";
import { faqData } from "@/data";

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaq = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="pt-[100px] bg-[#0B0C10] min-h-screen text-white pb-20">
      {/* 1. HEADER: DATABASE ENTRY */}
      <section className="py-12 md:py-20 border-b border-white/10 relative">
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
          }}
        />

        <GridWrapper>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6 font-mono text-[10px] text-[#FF3366] tracking-[0.4em] uppercase"
            >
              <Cpu size={14} className="animate-spin-slow" />
              DB_QUERY // INTEL_ARCHIVE_V8
            </motion.div>

            <h1 className="font-clash text-4xl md:text-7xl font-black uppercase leading-none mb-8">
              Intelligence <br />
              <span className="text-white/40">Database.</span>
            </h1>

            {/* Terminal Search */}
            <div className="relative max-w-xl group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667479] group-focus-within:text-[#FF3366] transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="SEARCH_QUERIES_"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#12141A] border border-white/10 py-4 pl-12 pr-4 font-mono text-sm tracking-widest uppercase outline-none focus:border-[#FF3366] transition-all"
              />
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* 2. THE INTEL ACCORDIONS */}
      <section className="py-12">
        <GridWrapper>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: System Status */}
            <div className="w-full lg:w-1/4 space-y-6">
              <div className="p-6 border border-white/10 bg-[#12141A] font-mono">
                <div className="text-[10px] text-[#667479] mb-4 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={12} /> // SYSTEM_LOG
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#667479]">INDEXED_FILES</span>
                    <span>0005</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#667479]">LAST_SYNC</span>
                    <span>02_MINS_AGO</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#667479]">DB_STATUS</span>
                    <span className="text-[#C5F82A] animate-pulse">
                      OPTIMIZED
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border border-[#FF3366]/20 bg-[#FF3366]/5">
                <ShieldAlert size={18} className="text-[#FF3366]" />
                <span className="font-mono text-[9px] text-white/70 uppercase leading-tight">
                  Unresolved issues? Establish a direct comms link via the
                  contact terminal.
                </span>
              </div>
            </div>

            {/* Right Column: Accordion List */}
            <div className="flex-1 space-y-4">
              {filteredFaq.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  toggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
              {filteredFaq.length === 0 && (
                <div className="py-20 text-center border-2 border-dashed border-white/5 font-mono text-[#667479] uppercase tracking-widest text-sm">
                  No matches found in intelligence database.
                </div>
              )}
            </div>
          </div>
        </GridWrapper>
      </section>
    </main>
  );
};

// --- SUB-COMPONENT: FAQ ITEM ---

const FaqItem = ({
  item,
  isOpen,
  toggle,
}: {
  item: any;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      className={`border transition-all duration-300 ${isOpen ? "border-[#FF3366] bg-[#FF3366]/5" : "border-white/10 bg-[#12141A] hover:border-white/30"}`}
    >
      <button
        onClick={toggle}
        className="w-full p-6 md:p-8 flex items-start justify-between text-left gap-6 group"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-[10px] px-2 py-0.5 border ${isOpen ? "bg-[#FF3366] border-[#FF3366] text-white" : "border-white/20 text-[#667479]"}`}
            >
              {item.id}
            </span>
            <span className="font-mono text-[10px] text-[#667479] tracking-widest uppercase group-hover:text-white transition-colors">
              // {item.category}
            </span>
          </div>
          <h3
            className={`font-clash text-lg md:text-xl font-bold uppercase tracking-wide transition-colors ${isOpen ? "text-[#FF3366]" : "text-white"}`}
          >
            {item.question}
          </h3>
        </div>
        <ChevronDown
          size={24}
          className={`shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-[#FF3366]" : "text-white/20"}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-2">
              <div className="border-t border-white/10 pt-6">
                <p className="font-mono text-sm md:text-base text-[#E0E0E0]/80 leading-relaxed uppercase tracking-wide">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
