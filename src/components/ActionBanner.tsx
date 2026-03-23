import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RadioTower,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Activity,
} from "lucide-react";

const ActionBanner = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // New state to track the terminal's connection phase
  const [status, setStatus] = useState<"idle" | "authenticating" | "verified">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Phase 1: Lock the terminal and simulate an encrypted handshake
      setStatus("authenticating");

      // Phase 2: After 2 seconds, confirm the secure link
      setTimeout(() => {
        console.log("Secure Comms Established for:", email);
        setStatus("verified");
        setEmail("");
      }, 2000);
    }
  };

  return (
    <section className="relative w-full bg-[#0B0C10] border-t-2 border-white/10 overflow-hidden flex flex-col">
      {/* 1. The Scrolling Warning Ticker (Top) */}
      <div className="w-full border-b-2 border-white/10 bg-[#12141A] overflow-hidden flex whitespace-nowrap py-2">
        <motion.div
          className="flex gap-8 font-mono text-[10px] text-[#667479] tracking-widest uppercase"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>// RESTRICTED_CHANNEL</span>
              <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
              <span>UNAUTHORIZED_ACCESS_LOGGED</span>
              <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. Main Banner Content */}
      <div className="relative w-full max-w-[1600px] mx-auto p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center z-10">
        {/* Background Grid & Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-0"
          style={{
            backgroundImage:
              "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
          }}
        />

        {/* Left Column: The Briefing */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 relative z-10 flex flex-col w-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <RadioTower size={32} className="text-white" strokeWidth={1} />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                ENCRYPTED_COMMS_UPLINK
              </span>
              <span className="font-mono text-xs text-[#FF3366] tracking-widest uppercase animate-pulse">
                {status === "verified"
                  ? "LINK_SECURE"
                  : "AWAITING_CONNECTION..."}
              </span>
            </div>
          </div>

          <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6">
            Establish <br />
            <span className="text-white/50">Secure Link.</span>
          </h2>

          <p className="font-mono text-sm md:text-base text-[#E0E0E0]/80 leading-relaxed max-w-lg">
            Standard frequencies are compromised. Register your identifier to
            receive classified manifest updates, priority asset drops, and
            extraction coordinates.
          </p>
        </motion.div>

        {/* Right Column: The Terminal Input */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-full lg:w-[500px] relative z-10"
        >
          <div className="border-2 border-white/10 bg-[#12141A] p-6 md:p-8 relative group min-h-[220px] flex flex-col justify-center">
            {/* Tactical Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white transition-colors group-hover:border-[#FF3366] pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white transition-colors group-hover:border-[#FF3366] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white transition-colors group-hover:border-[#FF3366] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white transition-colors group-hover:border-[#FF3366] pointer-events-none" />

            <AnimatePresence mode="wait">
              {/* PHASE 1: IDLE FORM */}
              {status === "idle" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-mono text-[10px] text-[#667479] mb-6 uppercase tracking-widest flex justify-between">
                    <span>TERMINAL_INPUT</span>
                    <span className={isFocused ? "text-[#FF3366]" : ""}>
                      [ REQ_IDENTIFIER ]
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div
                      className="relative flex items-center border-b-2 border-white/20 pb-4 transition-colors duration-300"
                      style={{ borderColor: isFocused ? "#FF3366" : "" }}
                    >
                      <Terminal
                        size={18}
                        className={`mr-4 transition-colors ${isFocused ? "text-[#FF3366]" : "text-[#667479]"}`}
                      />
                      <span
                        className={`font-mono mr-3 transition-colors ${isFocused ? "text-[#FF3366]" : "text-white"}`}
                      >
                        $
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="ENTER_EMAIL_ADDRESS_"
                        className="w-full bg-transparent border-none outline-none text-white font-mono tracking-widest uppercase placeholder-[#667479] text-sm md:text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="w-full relative group/btn overflow-hidden bg-white text-[#0B0C10] font-mono text-sm font-bold tracking-[0.2em] uppercase py-4 transition-all hover:text-white border-2 border-white flex items-center justify-center gap-4 mt-2"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        INITIALIZE_LINK
                        <ArrowRight
                          size={16}
                          className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                        />
                      </span>
                      <div
                        className="absolute inset-0 z-0 opacity-0 group-hover/btn:opacity-100 bg-[#FF3366] transition-opacity duration-300"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 10px, transparent 10px, transparent 20px)",
                        }}
                      />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* PHASE 2: AUTHENTICATING (Simulated Delay) */}
              {status === "authenticating" && (
                <motion.div
                  key="authenticating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 gap-6"
                >
                  <Activity
                    size={32}
                    className="text-[#FF3366] animate-pulse"
                  />
                  <div className="font-mono text-xs sm:text-sm text-white tracking-widest uppercase flex items-center">
                    NEGOTIATING_HANDSHAKE
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                      }}
                      className="ml-1 text-[#FF3366] font-black text-lg"
                    >
                      _
                    </motion.span>
                  </div>
                </motion.div>
              )}

              {/* PHASE 3: VERIFIED (Success State) */}
              {status === "verified" && (
                <motion.div
                  key="verified"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 gap-4 border border-[#FF3366]/30 bg-[#FF3366]/5 p-6"
                >
                  <ShieldCheck
                    size={48}
                    className="text-[#FF3366]"
                    strokeWidth={1.5}
                  />
                  <div className="text-center font-mono space-y-2">
                    <div className="text-white text-base sm:text-lg font-bold tracking-[0.15em] uppercase">
                      UPLINK_ESTABLISHED
                    </div>
                    <div className="text-[#667479] text-[9px] sm:text-[10px] tracking-widest uppercase flex flex-col gap-1">
                      <span>ENCRYPTION: RSA-4096</span>
                      <span>STATUS: TRANSMISSION_SECURE</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* 3. The Scrolling Warning Ticker (Bottom) */}
      <div className="w-full border-t-2 border-white/10 bg-[#12141A] overflow-hidden flex whitespace-nowrap py-2">
        <motion.div
          className="flex gap-8 font-mono text-[10px] text-[#667479] tracking-widest uppercase"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>// NO_CIVILIAN_ACCESS</span>
              <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
              <span>TRANSMISSION_SECURE</span>
              <span className="w-1 h-1 bg-[#FF3366] rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActionBanner;
