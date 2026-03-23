import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import GridWrapper from "@/components/GridWrapper";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { getCategory } from "@/services";
import { shopAllProducts } from "@/data";
import { Database, Target, Layers, ShieldAlert, Cpu, Box } from "lucide-react";

const sectorData = [
  {
    text: "All Assets",
    link: "shop",
    heroText: "GLOBAL_CACHE_MANIFEST",
    icon: Database,
  },
  {
    text: "Armored Outerwear",
    link: "armor",
    heroText: "FIELD_PROTECTION_UNITS",
    icon: ShieldAlert,
  },
  {
    text: "Tactical Headgear",
    link: "headgear",
    heroText: "CRANIAL_DEFENSE_SYSTEMS",
    icon: Target,
  },
  {
    text: "Mission-Ready Optics",
    link: "optics",
    heroText: "VISUAL_ACQUISITION_TOOLS",
    icon: Cpu,
  },
  {
    text: "Survival Gloves",
    link: "gloves",
    heroText: "MANUAL_OPERATIONAL_GEAR",
    icon: Box,
  },
];

const Shop = () => {
  const { id } = useParams();
  const manifestRef = useRef<HTMLDivElement>(null);

  const activeId = id || "shop";
  const isShopAll = activeId === "shop";
  const category = !isShopAll ? getCategory(activeId) : undefined;
  const displayProducts = isShopAll
    ? shopAllProducts
    : category?.products || [];

  const currentSector = sectorData.find((s) => s.link === activeId);
  const heroText = currentSector?.heroText ?? "ASSET_CLASSIFICATION_UNKNOWN";

  useEffect(() => {
    if (id && manifestRef.current) {
      const yOffset = -100;
      const element = manifestRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [id]);

  return (
    <div className="z-10 bg-[#0B0C10] relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[30vh] md:min-h-[450px] flex items-center justify-center overflow-hidden border-b border-white/10 pt-[100px]">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover grayscale opacity-30"
            style={{ backgroundImage: `url(/images/sliders/slide_5.jpg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/60 to-[#0B0C10]" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
            }}
          />
        </div>

        <GridWrapper>
          <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`status-${activeId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 md:gap-3 mb-4 bg-white/5 border border-white/10 px-3 py-1 backdrop-blur-sm"
              >
                <span
                  className={`w-2 h-2 ${isShopAll ? "bg-blue-500" : "bg-[#FF3366]"} rounded-full animate-pulse`}
                />
                <span className="font-mono text-[9px] md:text-xs text-white tracking-[0.2em] md:tracking-[0.4em] uppercase">
                  {isShopAll
                    ? "SYSTEM_WIDELINE // GLOBAL"
                    : `SECTOR_ACTIVE // ${activeId}`}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${activeId}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="font-clash text-xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] text-balance max-w-[90vw] md:max-w-4xl"
              >
                {heroText}
              </motion.h1>
            </AnimatePresence>
          </div>
        </GridWrapper>
      </section>

      {/* 2. REQUISITION GRID & ROUTING */}
      <section className="relative py-8 md:py-20 z-10 flex justify-center">
        <GridWrapper>
          <div className="col-[2/3] flex flex-col gap-y-12 md:gap-y-16 px-4 md:px-0">
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[10px] text-[#667479] tracking-widest uppercase flex items-center gap-3">
                <Layers className="w-3 h-3 md:w-4 md:h-4" /> // ROUTING_TABLE
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {sectorData.map((sector) => {
                  const isActive = activeId === sector.link;
                  return (
                    <Link
                      to={
                        sector.link === "shop"
                          ? "/shop"
                          : `/shop/${sector.link}`
                      }
                      key={sector.link}
                      className="group"
                    >
                      <div
                        className={`border px-3 py-2 md:px-5 md:py-2 transition-all font-mono text-[10px] md:text-[11px] uppercase tracking-widest flex items-center gap-2 md:gap-3 ${
                          isActive
                            ? "border-[#FF3366] bg-white text-[#0B0C10] font-bold"
                            : "border-white/10 bg-[#12141A] text-white hover:border-white/40"
                        }`}
                      >
                        {isActive && (
                          <Target className="w-3 h-3 text-[#FF3366]" />
                        )}
                        {sector.text}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ASSET LOG */}
            <div
              ref={manifestRef}
              className="flex flex-col gap-8 md:gap-10 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
                <div className="flex flex-col gap-1">
                  <div className="font-mono text-[9px] md:text-[10px] text-[#FF3366] tracking-widest uppercase">
                    AVAILABLE_REQUISITIONS
                  </div>
                  <h2 className="font-clash text-2xl md:text-3xl font-black text-white uppercase">
                    {isShopAll ? "Global_Inventory" : "Sector_Assets"}
                  </h2>
                </div>
                <div className="font-mono text-[10px] text-[#667479] uppercase">
                  DISPLAYING:{" "}
                  {displayProducts.length.toString().padStart(2, "0")} // UNITS
                </div>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
              >
                <AnimatePresence mode="popLayout">
                  {displayProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-stretch"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </GridWrapper>
      </section>

      <Testimonials />
    </div>
  );
};

export default Shop;
