import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight, Activity } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "@/data";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
};

const menuVariants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { type: "spring", stiffness: 300, damping: 35 },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const MobileMenu = ({ isOpen, setIsOpen, toggleRef }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search_results?query=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [setIsOpen, toggleRef]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[#0B0C10] flex flex-col justify-between overflow-hidden"
        >
          {/* CRT Scanline Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
            }}
          />

          {/* Top Header Bar - Strict B&W */}
          <div className="relative z-10 flex justify-between items-center p-6 border-b border-white/20 bg-[#12141A]">
            <div className="flex items-center gap-3">
              <Activity size={16} className="text-white animate-pulse" />
              <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                SYS_OVERRIDE_ACTIVE
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#667479] hover:text-white transition-colors p-2 border border-transparent hover:border-white bg-[#0B0C10]"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative z-10 flex flex-col flex-1 px-6 py-8 overflow-y-auto custom-scrollbar">
            {/* Terminal Search Bar - Strict B&W */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <form
                onSubmit={handleSearchQuery}
                className="flex items-center border-b-2 border-white/50 focus-within:border-white pb-2 transition-colors"
              >
                <span className="text-white font-mono mr-3">$</span>
                <input
                  className="w-full bg-transparent border-none outline-none text-white font-mono tracking-widest uppercase placeholder-[#667479] text-sm"
                  placeholder="ENTER_QUERY_"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="text-[#667479] hover:text-white ml-2"
                >
                  <Terminal size={18} />
                </button>
              </form>
            </motion.div>

            {/* Navigation Directory - Strict B&W */}
            <nav className="flex flex-col gap-4 flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-[#667479] font-mono text-[10px] tracking-widest uppercase mb-4 border-l-2 border-white pl-2"
              >
                ROOT_DIRECTORY //
              </motion.div>

              {navLinks.map(({ url, link }, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={url}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-white/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        [ ]
                      </span>
                      <span className="font-mono text-xl sm:text-2xl text-[#E0E0E0] group-hover:text-white uppercase tracking-[0.15em] font-bold transition-colors">
                        {link}
                      </span>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-[#667479] group-hover:text-white transition-colors"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Bottom Footer Readout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="relative z-10 p-6 border-t border-white/20 bg-[#12141A] font-mono text-[9px] text-[#667479] tracking-widest flex justify-between items-end uppercase shrink-0"
          >
            <div className="flex flex-col gap-1">
              <span>SECURE_CONNECTION: ESTABLISHED</span>
              <span>ENCRYPTION: 256-BIT</span>
            </div>
            <div className="text-right">
              <span className="text-white">V 2.4.0</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
