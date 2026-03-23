import { Lock, MessagesSquare, AlertCircle, Terminal } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const SecureForum = () => {
  return (
    <main className="pt-[100px] bg-[#0B0C10] min-h-screen text-white flex items-center">
      <GridWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-[#FF3366]">
                <Lock size={16} /> ENCRYPTION_ACTIVE
              </div>
              <h1 className="font-clash text-5xl md:text-7xl font-black uppercase">
                Operative <br />
                <span className="text-white/30">Hub.</span>
              </h1>
              <p className="font-mono text-sm text-[#667479] uppercase leading-relaxed">
                Unauthorized access to the forum node is prohibited. This area
                is reserved for verified gear-holders to discuss field tactics
                and asset performance.
              </p>
            </div>

            <div className="bg-[#12141A] border border-white/10 p-8 space-y-6 relative">
              <div className="font-mono text-[10px] text-[#667479] uppercase tracking-widest border-b border-white/10 pb-2 flex justify-between">
                <span>LOGIN_TERMINAL</span>
                <span className="text-[#FF3366] animate-pulse">OFFLINE</span>
              </div>

              <div className="space-y-4 opacity-30 pointer-events-none">
                <div className="h-12 border border-white/10 bg-[#0B0C10] flex items-center px-4 font-mono text-xs text-white/20">
                  OPERATIVE_ID_
                </div>
                <div className="h-12 border border-white/10 bg-[#0B0C10] flex items-center px-4 font-mono text-xs text-white/20">
                  SECURE_PASS_
                </div>
                <div className="h-12 bg-white/10 flex items-center justify-center font-mono text-xs uppercase font-bold">
                  ACCESS_DENIED
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FF3366]/5 border border-[#FF3366]/20">
                <AlertCircle className="text-[#FF3366] shrink-0" size={18} />
                <p className="font-mono text-[10px] text-white/70 uppercase leading-tight">
                  Access to this node requires a physical validation key sent
                  with every "Armored Outerwear" requisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

export default SecureForum;
