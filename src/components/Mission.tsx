import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Fingerprint, LockKeyhole } from "lucide-react";
import IntelPhoto from "./IntelPhoto";
import { missonImages } from "@/data";

const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  // Only photoOrder is needed to manage the stack
  const [photoOrder, setPhotoOrder] = useState(missonImages.map((p) => p.id));

  const bringToFront = (id: number) => {
    setPhotoOrder((prev) => {
      const newOrder = prev.filter((pId) => pId !== id);
      return [...newOrder, id]; // Moves the selected ID to the highest index
    });
  };

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative w-full min-h-[100vh] bg-[#12141A] overflow-hidden flex flex-col lg:flex-row border-t-2 border-white/10"
    >
      {/* Background Tactical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* LEFT COLUMN: The Briefing Text */}
      <div className="relative z-10 w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center pointer-events-none">
        <div className="flex items-center gap-4 mb-8">
          <Fingerprint size={32} className="text-[#FF3366]" strokeWidth={1} />
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white tracking-widest uppercase">
              SYS.DIR // DIRECTIVE_001
            </span>
            <span className="font-mono text-xs text-[#E0E0E0]/50 tracking-widest uppercase">
              CLEARANCE: OMEGA
            </span>
          </div>
        </div>

        <div ref={textRef} className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isTextInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-clash text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-[1.1] tracking-wide"
          >
            Survival Is Not <br />
            <span className="text-white/80">An Accident.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm md:text-base text-[#E0E0E0]/80 leading-relaxed max-w-xl space-y-6 pointer-events-auto"
        >
          <p>
            When the grid fails and supply chains sever, your theoretical
            preparedness means nothing. Only the physical hardware in your
            possession dictates the outcome.
          </p>
          <p>
            We don't sell lifestyle accessories. We engineer, source, and
            distribute{" "}
            <span className="bg-white text-[#0B0C10] px-1 font-bold">
              MIL-SPEC OVERFLOW
            </span>{" "}
            and industrial-grade survival tools.
          </p>

          <p>
            Our sourcing network remains{" "}
            <span className="group relative cursor-pointer inline-block bg-[#0B0C10] text-[#0B0C10] hover:bg-transparent hover:text-[#FF3366] transition-colors border border-[#0B0C10] hover:border-[#FF3366] px-1">
              [CLASSIFIED_REDACTED]
            </span>{" "}
            to protect supply integrity. If you are here, you already know why.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-3 font-mono text-xs text-[#667479] uppercase tracking-widest pointer-events-auto"
        >
          <LockKeyhole size={14} /> END_OF_BRIEFING
        </motion.div>
      </div>

      {/* RIGHT COLUMN: The Interactive Intel Desk */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full p-8 md:p-16 border-t-2 lg:border-t-0 lg:border-l-2 border-white/10 bg-[#0B0C10] overflow-hidden">
        <div className="absolute top-8 right-8 z-0 font-mono text-[10px] text-[#667479] tracking-widest uppercase text-right opacity-50 hidden sm:block pointer-events-none">
          <p>INTERACTIVE_SURFACE</p>
          <p className="text-[#FF3366] mt-1 animate-pulse">
            [ DRAG TO INSPECT FILES ]
          </p>
        </div>

        {missonImages.map((photo) => (
          <IntelPhoto
            key={photo.id}
            src={photo.src}
            alt={`Classified Intel ${photo.id}`}
            stampText={photo.stamp}
            initialRotation={photo.rot}
            initialX={photo.x}
            initialY={photo.y}
            constraintsRef={containerRef}
            // indexOf + 10 ensures they are always above the background but below overlays
            zIndex={photoOrder.indexOf(photo.id) + 10}
            setTopZIndex={() => bringToFront(photo.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Mission;
