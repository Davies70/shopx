import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  Database,
  Activity,
  Target,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Link } from "react-router-dom";
import GridWrapper from "@/components/GridWrapper";
import SectionEight from "@/components/SurveillanceGrid";
import { getSearchResults } from "@/services";
import { Product } from "@/categories";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // Initial Load & Query Trigger
  useEffect(() => {
    handleQuery();
  }, []);

  const handleQuery = () => {
    setIsScanning(true);
    // Simulate tactical database latency
    setTimeout(() => {
      const results = getSearchResults(10);
      setProducts(results);
      setIsScanning(false);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuery();
  };

  return (
    <div className="z-10 bg-[#0B0C10] relative min-h-screen text-white">
      {/* 1. QUERY TERMINAL (Hero) */}
      <section className="relative pt-[140px] pb-16 border-b border-white/10 overflow-hidden">
        {/* Background Scanlines */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
          }}
        />

        <GridWrapper>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 font-mono text-[10px] text-[#FF3366] tracking-[0.4em] uppercase"
            >
              <Database size={14} className="animate-pulse" />
              REGISTRY_QUERY_v9.4
            </motion.div>

            <h1 className="font-clash text-4xl md:text-7xl font-black uppercase leading-none">
              Asset <br />
              <span className="text-white/40">Search.</span>
            </h1>

            <form onSubmit={handleSubmit} className="w-full relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Terminal
                  size={18}
                  className="text-[#667479] group-focus-within:text-[#FF3366] transition-colors"
                />
              </div>
              <input
                className="w-full bg-[#12141A] border-2 border-white/10 py-5 pl-14 pr-20 font-mono text-sm tracking-widest uppercase outline-none focus:border-[#FF3366] transition-all"
                placeholder="INPUT_IDENTIFIER_"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute inset-y-2 right-2 px-6 bg-white text-[#0B0C10] hover:bg-[#FF3366] hover:text-white transition-all flex items-center justify-center"
              >
                <Search size={18} />
              </button>
            </form>

            <div className="font-mono text-[9px] text-[#667479] uppercase tracking-widest flex items-center gap-4">
              <span>
                STATUS: {isScanning ? "SCANNING_REGISTRY..." : "READY"}
              </span>
              <span className="text-white/20">|</span>
              <span>
                RESULTS: {products.length.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* 2. RESULTS FEED */}
      <section className="py-16 md:py-24">
        <GridWrapper>
          <AnimatePresence mode="wait">
            {isScanning ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-32 flex flex-col items-center justify-center gap-6"
              >
                <Activity size={48} className="text-[#FF3366] animate-pulse" />
                <div className="font-mono text-sm tracking-[0.4em] uppercase animate-pulse">
                  Establishing_Secure_Link_
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {products.map((product, idx) => (
                  <SearchResultItem
                    key={product.id}
                    product={product}
                    index={idx}
                  />
                ))}

                {products.length === 0 && (
                  <div className="py-32 text-center border-2 border-dashed border-white/5">
                    <ShieldAlert
                      size={48}
                      className="mx-auto text-[#667479] mb-4"
                    />
                    <div className="font-mono text-sm text-[#667479] uppercase tracking-widest">
                      No_Matches_Found_In_Registry
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </GridWrapper>
      </section>

      <SectionEight />
    </div>
  );
};

// --- SUB-COMPONENT: INDIVIDUAL RESULT RECORD ---

const SearchResultItem = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#12141A] border border-white/10 hover:border-[#FF3366]/50 transition-all overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Visual ID (Image) */}
        <div className="w-full md:w-[300px] aspect-video md:aspect-square relative overflow-hidden bg-black">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
          />
          {/* Viewfinder Overlay */}
          <div className="absolute inset-4 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF3366]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF3366]" />
          </div>
        </div>

        {/* Technical Specs (Data) */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[9px] text-[#FF3366] tracking-widest uppercase flex items-center gap-2">
              <Target size={12} /> ASSET_CLASS_{product.id.slice(0, 4)}
            </div>
            <div className="font-mono text-[10px] text-white/20">
              MATCH_CONFIDENCE: 98.4%
            </div>
          </div>

          <h2 className="font-clash text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:text-[#FF3366] transition-colors">
            {product.name}
          </h2>

          <p className="font-mono text-xs text-[#667479] leading-relaxed uppercase max-w-2xl">
            {product.shortDescription}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <div className="font-mono text-lg font-bold">
              ${product.price}.00
            </div>
            <Link
              to={`/products/${product.id}`}
              className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase bg-white text-[#0B0C10] px-6 py-3 hover:bg-[#FF3366] hover:text-white transition-all"
            >
              Access_File <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative ID Strip */}
      <div className="absolute top-0 right-0 h-full w-1 bg-white/5 group-hover:bg-[#FF3366] transition-colors" />
    </motion.div>
  );
};

export default SearchResults;
