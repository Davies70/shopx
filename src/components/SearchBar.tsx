import { motion } from "framer-motion";
import { Search, X, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearchQuery = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search_results?query=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
      setQuery("");
    }
  };

  // Auto-focus when opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="flex order-[-9999] justify-self-stretch row-[span_1] col-[span_1] min-[992px]:row-[1/2] min-[992px]:col-[3/4] flex-col justify-center items-end min-[992px]:pr-[6px]">
      <motion.div
        className="hidden lg:flex h-10 border-2 border-[#E0E0E0]/20 bg-[#0B0C10]/80 backdrop-blur-sm justify-start items-center overflow-hidden tracking-normal relative shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
        initial={{ width: 40 }}
        animate={{
          width: isSearchOpen ? 280 : 40,
          borderColor: isSearchOpen ? "#FF3366" : "rgba(224, 224, 224, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Toggle Button - Acts as the icon when closed, and an indicator when open */}
        <button
          onClick={() => !isSearchOpen && setIsSearchOpen(true)}
          className="absolute left-0 top-0 w-10 h-10 flex justify-center items-center z-10 text-[#E0E0E0] hover:text-[#FF3366] transition-colors cursor-pointer"
          style={{ pointerEvents: isSearchOpen ? "none" : "auto" }}
        >
          {isSearchOpen ? (
            <Terminal size={16} className="text-[#FF3366]" />
          ) : (
            <Search size={18} />
          )}
        </button>

        {/* Input Area */}
        <motion.form
          className="flex items-center w-full pl-10 pr-2 h-full"
          style={{
            opacity: isSearchOpen ? 1 : 0,
            pointerEvents: isSearchOpen ? "auto" : "none",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            if (query.trim())
              navigate(`/search_results?query=${encodeURIComponent(query)}`);
          }}
        >
          <span className="text-[#FF3366] font-mono text-sm mr-2">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="ENTER_QUERY_"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchQuery}
            className="bg-transparent text-sm border-none outline-none w-full text-[#E0E0E0] font-mono tracking-widest uppercase placeholder-[#667479]"
          />

          {/* Close / Abort Button */}
          <button
            type="button"
            onClick={() => {
              setIsSearchOpen(false);
              setQuery("");
            }}
            className="ml-2 cursor-pointer w-6 h-6 flex justify-center items-center text-[#667479] hover:text-[#FF3366] transition-colors"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default SearchBar;
