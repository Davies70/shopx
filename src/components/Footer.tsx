import { Link } from "react-router-dom";
import { ShieldAlert, ArrowUp, Globe, Terminal } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0B0C10] border-t-2 border-white/20 pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden z-10">
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* CRT Scanlines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20">
        {/* TOP SECTION: Branding & Return to Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/10 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[16px] md:text-[20px] tracking-[4px] font-bold uppercase">
              <span className="text-[#FF3366] font-mono">[</span>
              <span className="text-white">Shop Apocalypse</span>
              <span className="text-[#FF3366] font-mono">]</span>
            </div>
            <div className="font-mono text-[10px] md:text-xs text-[#667479] tracking-widest uppercase flex items-center gap-2">
              <ShieldAlert size={14} className="text-[#FF3366]" />
              AUTHORIZED_PERSONNEL_ONLY
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="cursor-pointer group flex items-center gap-3 font-mono text-[10px] text-white tracking-widest uppercase hover:text-[#FF3366] transition-colors border border-white/20 hover:border-[#FF3366] px-4 py-2 bg-[#12141A]"
          >
            RETURN_TO_SURFACE
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* MIDDLE SECTION: Directory Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Column 1: Core Nav */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#667479] tracking-widest uppercase mb-2 border-l-2 border-[#FF3366] pl-2">
              // ROOT_DIR
            </span>
            <FooterLink to="/shop" text="ARMORY_ACCESS" />
            <FooterLink to="/about" text="MISSION_BRIEFING" />
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#667479] tracking-widest uppercase mb-2 border-l-2 border-white/50 pl-2">
              // LOGISTICS
            </span>
            <FooterLink to="/shipping" text="EXTRACTION_ROUTES" />
            <FooterLink to="/returns" text="ASSET_RECOVERY" />
            <FooterLink to="/faq" text="INTELLIGENCE_DB" />
          </div>

          {/* Column 3: Comms */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#667479] tracking-widest uppercase mb-2 border-l-2 border-white/50 pl-2">
              // COMMS_ARRAY
            </span>
            <FooterLink to="/contact" text="ESTABLISH_UPLINK" />
            <FooterLink to="/instagram-node" text="INSTAGRAM_NODE" />
            <FooterLink to="/forum" text="SECURE_FORUM" />
          </div>

          {/* Column 4: System Status */}
          <div className="flex flex-col gap-4 font-mono text-[10px] text-[#667479] tracking-widest uppercase">
            <span className="mb-2 border-l-2 border-white/50 pl-2">
              // SYSTEM_DIAGNOSTICS
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3366] rounded-full animate-pulse" />
              NETWORK: ONLINE
            </div>
            <div className="flex items-center gap-2">
              <Globe size={12} />
              GEO: 34.05°N_118.24°W
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={12} />
              ENCRYPTION: AES-256
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Sign-off */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 font-mono text-[9px] text-white/40 tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} SHOP_APOCALYPSE</span>
            <span className="hidden sm:inline-block">
              // ALL_RIGHTS_RESERVED
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              TERMS_OF_SERVICE
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              PRIVACY_PROTOCOL
            </Link>
          </div>
          <div className="text-[#FF3366]">END_OF_TRANSMISSION_</div>
        </div>
      </div>
    </footer>
  );
};

// Reusable tactical link component
const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="group flex items-center gap-2 font-mono text-xs sm:text-sm text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em]"
  >
    <span className="text-[#FF3366] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
      &gt;
    </span>
    <span className="group-hover:translate-x-1 transition-transform duration-300">
      {text}
    </span>
  </Link>
);

export default Footer;
