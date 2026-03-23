import { Truck, Globe, Package, ShieldCheck, Map } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const Shipping = () => {
  return (
    <main className="pt-[120px] pb-20 bg-[#0B0C10] min-h-screen text-white">
      <GridWrapper>
        <div className="max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="font-mono text-[10px] text-[#FF3366] tracking-[0.4em] uppercase flex items-center gap-2">
              <Map size={14} /> LOGISTICS // EXTRACTION_PHASE
            </div>
            <h1 className="font-clash text-5xl md:text-7xl font-black uppercase italic">
              Extraction.
            </h1>
            <p className="font-mono text-sm text-[#667479] uppercase">
              Global asset distribution protocols and transit security measures.
            </p>
          </div>

          {/* Grid of Protocols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProtocolBox
              icon={<Truck />}
              title="TRANSIT_TIME"
              desc="Standard extraction: 48-72 hours. Priority airlift: 24 hours. Transit times vary based on local sector stability."
            />
            <ProtocolBox
              icon={<Globe />}
              title="COVERT_ZONES"
              desc="We ship to all stabilized global sectors. Restricted zones require secondary handshake verification."
            />
            <ProtocolBox
              icon={<ShieldCheck />}
              title="SECURE_PACKAGING"
              desc="All assets are vacuum-sealed in industrial-grade, anti-static, waterproof polymer containers."
            />
            <ProtocolBox
              icon={<Package />}
              title="MANIFEST_TRACKING"
              desc="Once dispatched, a 12-digit encrypted tracking frequency will be broadcast to your registered ID."
            />
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

const ProtocolBox = ({ icon, title, desc }: any) => (
  <div className="p-8 border border-white/10 bg-[#12141A] hover:border-[#FF3366] transition-colors group">
    <div className="text-[#FF3366] mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-mono text-sm font-bold tracking-widest mb-3 uppercase">
      {title}
    </h3>
    <p className="font-mono text-[11px] text-[#667479] leading-relaxed uppercase">
      {desc}
    </p>
  </div>
);

export default Shipping;
