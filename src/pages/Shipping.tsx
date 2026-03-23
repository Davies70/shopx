import { Truck, Globe, Package, ShieldCheck, Map } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const Shipping = () => {
  return (
    <main className="pt-[100px] md:pt-[120px] pb-20 bg-[#0B0C10] min-h-screen text-white">
      <GridWrapper>
        {/* Force content into the center track col-[2/3] to prevent edge-bleeding */}
        <div className="col-[2/3] max-w-4xl space-y-10 md:space-y-12 px-4 md:px-0">
          {/* HEADER SECTION */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="font-mono text-[9px] md:text-[10px] text-[#FF3366] tracking-[0.3em] md:tracking-[0.4em] uppercase flex items-center gap-2">
              <Map size={14} /> LOGISTICS // EXTRACTION_PHASE
            </div>
            {/* Scaled typography for mobile */}
            <h1 className="font-clash text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-none text-balance">
              Extraction.
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#667479] uppercase leading-relaxed max-w-2xl">
              Global asset distribution protocols and transit security measures.
            </p>
          </div>

          {/* PROTOCOL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <ProtocolBox
              icon={<Truck size={24} />}
              title="TRANSIT_TIME"
              desc="Standard extraction: 48-72 hours. Priority airlift: 24 hours. Transit times vary based on local sector stability."
            />
            <ProtocolBox
              icon={<Globe size={24} />}
              title="COVERT_ZONES"
              desc="We ship to all stabilized global sectors. Restricted zones require secondary handshake verification."
            />
            <ProtocolBox
              icon={<ShieldCheck size={24} />}
              title="SECURE_PACKAGING"
              desc="All assets are vacuum-sealed in industrial-grade, anti-static, waterproof polymer containers."
            />
            <ProtocolBox
              icon={<Package size={24} />}
              title="MANIFEST_TRACKING"
              desc="Once dispatched, a 12-digit encrypted tracking frequency will be broadcast to your registered ID."
            />
          </div>

          {/* Decorative Terminal Footer */}
          <div className="pt-4 font-mono text-[8px] text-white/10 uppercase tracking-[0.5em] text-center">
            // LOGISTICS_CORE_MODULE_LOADED
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

const ProtocolBox = ({ icon, title, desc }: any) => (
  /* Adjusted padding for mobile (p-6) and desktop (md:p-8) */
  <div className="p-6 md:p-8 border border-white/10 bg-[#12141A] hover:border-[#FF3366] transition-colors group">
    <div className="text-[#FF3366] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-mono text-xs md:text-sm font-bold tracking-widest mb-2 md:mb-3 uppercase">
      {title}
    </h3>
    <p className="font-mono text-[10px] md:text-[11px] text-[#667479] leading-relaxed uppercase">
      {desc}
    </p>
  </div>
);

export default Shipping;
