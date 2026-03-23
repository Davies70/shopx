import { Instagram, ScanEye, ExternalLink, Camera } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const InstagramNode = () => {
  return (
    <main className="pt-[120px] pb-20 bg-[#0B0C10] min-h-screen text-white flex items-center">
      <GridWrapper>
        <div className="max-w-2xl mx-auto text-center space-y-8 border border-white/10 p-12 bg-[#12141A] relative overflow-hidden">
          {/* Scanline effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#FF3366] flex items-center justify-center mb-6 animate-pulse">
              <Camera size={32} className="text-[#FF3366]" />
            </div>
            <div className="font-mono text-[10px] text-[#667479] tracking-[0.5em] uppercase mb-2">
              SIGNAL_ORIGIN: @ShopApocalypse
            </div>
            <h1 className="font-clash text-4xl md:text-5xl font-black uppercase mb-6">
              Visual_Feeds.
            </h1>
            <p className="font-mono text-sm text-[#667479] uppercase mb-8 leading-relaxed">
              Access high-resolution field imagery, operative loadouts, and live
              drop announcements on the primary external node.
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              className="group relative flex items-center gap-4 bg-white text-[#0B0C10] px-10 py-5 font-mono text-sm font-black tracking-widest uppercase hover:bg-[#FF3366] hover:text-white transition-all"
            >
              CONNECT_TO_FEED <Instagram size={18} />
              <ExternalLink
                size={14}
                className="absolute top-2 right-2 opacity-30 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

export default InstagramNode;
