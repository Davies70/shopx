import { ShieldAlert, History } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const Returns = () => {
  return (
    <main className="pt-[100px] md:pt-[120px] pb-20 bg-[#0B0C10] min-h-screen text-white">
      <GridWrapper>
        {/* Force content into the center track col-[2/3] to prevent edge-bleeding */}
        <div className="col-[2/3] max-w-4xl space-y-10 md:space-y-12 px-4 md:px-0">
          {/* HEADER SECTION */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="font-mono text-[9px] md:text-[10px] text-[#FF3366] tracking-[0.3em] md:tracking-[0.4em] uppercase flex items-center gap-2">
              <History size={14} /> REQUISITION // RECOVERY_PROTOCOL
            </div>
            {/* text-4xl on mobile, scales up to 7xl */}
            <h1 className="font-clash text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-none text-balance">
              Recovery.
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#667479] uppercase leading-relaxed">
              Standard procedures for asset decommissioning and credit
              reimbursement.
            </p>
          </div>

          {/* MAIN DATA BLOCK */}
          <div className="bg-[#12141A] border-2 border-dashed border-white/10 p-6 md:p-12 space-y-8">
            {/* Condition Requirement: Icon stacks on small mobile */}
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <ShieldAlert className="text-[#FF3366] shrink-0 w-8 h-8 md:w-10 md:h-10" />
              <div className="space-y-2">
                <h2 className="font-clash text-xl md:text-2xl font-bold uppercase tracking-tight">
                  Condition_Requirement
                </h2>
                <p className="font-mono text-[10px] md:text-xs text-[#667479] uppercase leading-relaxed">
                  Assets must be returned in "Operational Readiness" state. We
                  cannot recover gear that has suffered Class-5 structural
                  failure or biological contamination.
                </p>
              </div>
            </div>

            {/* PROTOCOL GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {/* Window */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="font-mono text-[10px] text-white tracking-widest uppercase border-b border-[#FF3366] w-fit pb-1">
                  01 // RECOVERY_WINDOW
                </h4>
                <p className="font-mono text-[10px] md:text-[11px] text-[#667479] uppercase leading-relaxed">
                  You have 60 solar days from extraction to initiate a recovery
                  signal.
                </p>
              </div>

              {/* Credits */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="font-mono text-[10px] text-white tracking-widest uppercase border-b border-[#FF3366] w-fit pb-1">
                  02 // REFUND_CREDITS
                </h4>
                <p className="font-mono text-[10px] md:text-[11px] text-[#667479] uppercase leading-relaxed">
                  Credits are returned to the original source within 5-7
                  handshake cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Terminal Footer (Optional/Aesthetic) */}
          <div className="pt-4 font-mono text-[8px] text-white/10 uppercase tracking-[0.5em] text-center">
            // End_Of_Transmission_Protocol_V4.0
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

export default Returns;
