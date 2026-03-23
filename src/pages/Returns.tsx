import { ShieldAlert, History } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";

const Returns = () => {
  return (
    <main className="pt-[120px] pb-20 bg-[#0B0C10] min-h-screen text-white">
      <GridWrapper>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="font-mono text-[10px] text-[#FF3366] tracking-[0.4em] uppercase flex items-center gap-2">
              <History size={14} /> REQUISITION // RECOVERY_PROTOCOL
            </div>
            <h1 className="font-clash text-5xl md:text-7xl font-black uppercase italic">
              Recovery.
            </h1>
            <p className="font-mono text-sm text-[#667479] uppercase">
              Standard procedures for asset decommissioning and credit
              reimbursement.
            </p>
          </div>

          <div className="bg-[#12141A] border-2 border-dashed border-white/10 p-8 md:p-12 space-y-8">
            <div className="flex items-start gap-6">
              <ShieldAlert className="text-[#FF3366] shrink-0" size={32} />
              <div className="space-y-2">
                <h2 className="font-clash text-2xl font-bold uppercase">
                  Condition_Requirement
                </h2>
                <p className="font-mono text-xs text-[#667479] uppercase leading-relaxed">
                  Assets must be returned in "Operational Readiness" state. We
                  cannot recover gear that has suffered Class-5 structural
                  failure or biological contamination.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="space-y-4">
                <h4 className="font-mono text-[10px] text-white tracking-widest uppercase border-b border-[#FF3366] w-fit">
                  01 // RECOVERY_WINDOW
                </h4>
                <p className="font-mono text-[11px] text-[#667479] uppercase">
                  You have 60 solar days from extraction to initiate a recovery
                  signal.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-mono text-[10px] text-white tracking-widest uppercase border-b border-[#FF3366] w-fit">
                  02 // REFUND_CREDITS
                </h4>
                <p className="font-mono text-[11px] text-[#667479] uppercase">
                  Credits are returned to the original source within 5-7
                  handshake cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GridWrapper>
    </main>
  );
};

export default Returns;
