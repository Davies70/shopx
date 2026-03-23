import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridWrapper from "@/components/GridWrapper";
import { Mail, MapPin, Radio, Send, ShieldCheck, Activity } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "transmitting" | "established">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("transmitting");

    // Simulate high-latency satellite uplink
    setTimeout(() => {
      setStatus("established");
    }, 2500);
  };

  return (
    <main className="pt-[100px] bg-[#0B0C10] min-h-screen text-white">
      {/* 1. HEADER: SIGNAL ORIGIN */}
      <section className="py-12 md:py-20 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)",
            backgroundSize: "20px 20px",
          }}
        />

        <GridWrapper>
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4 font-mono text-[10px] text-[#FF3366] tracking-[0.4em] uppercase"
            >
              <Radio size={14} className="animate-pulse" />
              COMMS_ARRAY // BROADCAST_INIT
            </motion.div>
            <h1 className="font-clash text-4xl md:text-7xl font-black uppercase leading-none">
              Establish <br />
              <span className="text-white/40">Uplink.</span>
            </h1>
          </div>
        </GridWrapper>
      </section>

      {/* 2. THE COMMS HUB */}
      <section className="py-12 md:py-24">
        <GridWrapper>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* LEFT: DIRECTORY & STATUS */}
            <div className="w-full lg:w-1/3 space-y-12">
              <div className="space-y-8">
                <ContactMethod
                  icon={<Mail size={20} />}
                  label="DIRECT_ENCRYPTED_MAIL"
                  value="q-master@apocalypse.io"
                />
                <ContactMethod
                  icon={<MapPin size={20} />}
                  label="PHYSICAL_DROP_POINT"
                  value="Sector_7, Building_12 // Restricted_Access"
                />
              </div>

              {/* LIVE SYSTEM STATUS (Aesthetic) */}
              <div className="p-6 border border-white/10 bg-[#12141A] font-mono">
                <div className="text-[10px] text-[#667479] mb-4 uppercase tracking-widest border-b border-white/10 pb-2">
                  // SYSTEM_DIAGNOSTICS
                </div>
                <div className="space-y-3">
                  <StatusLine
                    label="ENCRYPTION"
                    value="AES-256"
                    color="text-white"
                  />
                  <StatusLine
                    label="SIGNAL_STRENGTH"
                    value="98%"
                    color="text-[#C5F82A]"
                  />
                  <StatusLine label="LATENCY" value="24ms" color="text-white" />
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#667479]">STATUS</span>
                    <span className="text-[#FF3366] animate-pulse">
                      LISTENING_FOR_PINGS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: THE TRANSMISSION TERMINAL */}
            <div className="flex-1 relative">
              <div className="bg-[#12141A] border-2 border-white/10 p-6 md:p-10 relative overflow-hidden">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF3366]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF3366]" />

                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleTransmit}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TerminalInput
                          label="SENDER_ID"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <TerminalInput
                          label="RETURN_CHANNEL"
                          placeholder="Email@Address"
                          type="email"
                          value={formData.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-[#667479] uppercase tracking-widest">
                          [TRANSMISSION_CONTENT]
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="INPUT_MESSAGE_DATA_"
                          className="w-full bg-transparent border-b-2 border-white/10 focus:border-[#FF3366] outline-none font-mono text-sm py-2 resize-none transition-colors uppercase tracking-widest"
                        />
                      </div>

                      <button
                        type="submit"
                        className="cursor-pointer w-full md:w-auto bg-white text-[#0B0C10] px-10 py-4 font-mono text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#FF3366] hover:text-white transition-all flex items-center justify-center gap-3 group"
                      >
                        INITIALIZE_TRANSMISSION{" "}
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </motion.form>
                  )}

                  {status === "transmitting" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-20 flex flex-col items-center justify-center gap-6"
                    >
                      <Activity
                        size={48}
                        className="text-[#FF3366] animate-pulse"
                      />
                      <div className="font-mono text-sm tracking-[0.3em] uppercase animate-pulse">
                        NEGOTIATING_HANDSHAKE_
                      </div>
                    </motion.div>
                  )}

                  {status === "established" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 flex flex-col items-center justify-center gap-6 text-center"
                    >
                      <ShieldCheck
                        size={64}
                        className="text-[#C5F82A]"
                        strokeWidth={1.5}
                      />
                      <div>
                        <h3 className="font-clash text-3xl font-black uppercase mb-2">
                          Uplink_Established.
                        </h3>
                        <p className="font-mono text-xs text-[#667479] uppercase tracking-widest">
                          Transmission Received. Comms team will intercept
                          shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setStatus("idle")}
                        className="cursor-pointer mt-4 font-mono text-[10px] text-[#FF3366] underline tracking-widest uppercase"
                      >
                        RESET_TERMINAL
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
    </main>
  );
};

// --- SUB-COMPONENTS ---

const ContactMethod = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex gap-4 items-start group">
    <div className="p-3 bg-[#12141A] border border-white/10 text-[#FF3366] group-hover:border-[#FF3366] transition-colors">
      {icon}
    </div>
    <div className="space-y-1">
      <div className="font-mono text-[10px] text-[#667479] tracking-widest uppercase">
        {label}
      </div>
      <div className="font-mono text-sm text-white uppercase">{value}</div>
    </div>
  </div>
);

const StatusLine = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) => (
  <div className="flex justify-between items-center text-[10px]">
    <span className="text-[#667479] uppercase">{label}</span>
    <span className={`${color} font-bold`}>{value}</span>
  </div>
);

const TerminalInput = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-mono text-[10px] text-[#667479] uppercase tracking-widest">
      [{label}]
    </label>
    <div className="flex items-center gap-3 border-b-2 border-white/10 focus-within:border-[#FF3366] transition-colors py-2">
      <span className="text-white/30 font-mono text-xs">$</span>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none w-full font-mono text-sm text-white uppercase placeholder-white/10 tracking-widest"
      />
    </div>
  </div>
);

export default Contact;
