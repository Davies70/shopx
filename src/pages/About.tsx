import { motion } from "framer-motion";
import GridWrapper from "@/components/GridWrapper";
import { Shield, Target, Zap, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-[100px] bg-[#0B0C10] min-h-screen text-white overflow-hidden">
      {/* 1. HERO: THE MANDATE */}
      <section className="relative py-20 md:py-32 border-b border-white/10">
        {/* Background Scanline Overlay */}
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
              className="flex items-center gap-3 mb-6 font-mono text-[10px] md:text-xs text-[#FF3366] tracking-[0.4em] uppercase"
            >
              <Zap size={14} className="animate-pulse" />
              PRIORITY_DIRECTIVE_001
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className=" text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9vw] font-clash font-black uppercase leading-[0.85] md:leading-[0.9] tracking-tighter text-balance 
    mb-8"
            >
              Survival is <br />
              <span className="text-white/40">The Only Metric.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-sm md:text-lg text-[#667479] leading-relaxed max-w-2xl"
            >
              When the infrastructure dissolves, the divide between the prepared
              and the obsolete is measured in millimeters of steel and
              kilocalories of energy. We don't curate lifestyle—we engineer
              resilience.
            </motion.p>
          </div>
        </GridWrapper>
      </section>

      {/* 2. THE THREE PILLARS (The Schematic) */}
      <section className="py-20 md:py-32 relative">
        {/* Subtle Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <GridWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <Pillar
              icon={<Shield size={32} />}
              title="RELIABILITY"
              id="UNIT_01"
              desc="Hardware that ignores environmental variables. If it doesn't function in a Class-5 storm, it doesn't enter our manifest."
            />
            <Pillar
              icon={<Target size={32} />}
              title="PRECISION"
              id="UNIT_02"
              desc="Optimized for zero-failure operations. Every thread, lens, and circuit is vetted for high-stress engagement."
            />
            <Pillar
              icon={<Cpu size={32} />}
              title="INTEGRATION"
              id="UNIT_03"
              desc="A modular ecosystem of survival. Our gear is designed to interlock, creating a seamless tactical platform."
            />
          </div>
        </GridWrapper>
      </section>

      {/* 3. CINEMATIC STATEMENT */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 z-0 grayscale contrast-150">
          <img
            src="/images/sliders/slide_4.jpg"
            alt="Tactical Landscape"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-transparent to-[#0B0C10]" />
        </div>

        <GridWrapper>
          <div className="relative z-10 text-center">
            <h2 className="font-clash text-3xl md:text-6xl font-black uppercase tracking-tight text-white mb-8">
              "Hope is a feeling. <br />
              <span className="text-[#FF3366]">Gear is a fact.</span>"
            </h2>
            <div className="font-mono text-[10px] text-[#667479] tracking-[0.5em] uppercase">
              // END_OF_MESSAGE
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 md:py-32">
        <GridWrapper>
          <div className="bg-[#12141A] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            {/* Red accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF3366] opacity-50" />

            <div className="max-w-xl">
              <h3 className="font-clash text-3xl md:text-4xl font-black uppercase mb-4">
                Ready to Requisition?
              </h3>
              <p className="font-mono text-xs text-[#667479] uppercase tracking-widest">
                Access the full archive and outfit your unit for the coming
                shift.
              </p>
            </div>

            <Link
              to="/shop"
              className="w-full md:w-auto flex items-center justify-center gap-4 bg-white text-[#0B0C10] px-8 py-5 font-mono text-sm font-bold tracking-widest uppercase hover:bg-[#FF3366] hover:text-white transition-all group-hover:scale-105"
            >
              ENTER_CACHE <ArrowRight size={18} />
            </Link>
          </div>
        </GridWrapper>
      </section>
    </main>
  );
};

// Sub-component for the Pillars
const Pillar = ({
  icon,
  title,
  id,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  id: string;
  desc: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-start p-8 border border-white/5 bg-[#12141A] hover:border-[#FF3366]/50 transition-colors group"
  >
    <div className="text-[#FF3366] mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="font-mono text-[10px] text-[#667479] mb-2 tracking-widest">
      {id}
    </div>
    <h3 className="font-clash text-2xl font-black uppercase mb-4 tracking-wide">
      {title}
    </h3>
    <p className="font-mono text-xs text-[#667479] leading-relaxed uppercase">
      {desc}
    </p>
  </motion.div>
);

export default About;
