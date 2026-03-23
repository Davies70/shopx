import { useState, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";
import GridWrapper from "./GridWrapper";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/data";
import { CartItem } from "@/categories";
import SearchBar from "./SearchBar";

type NavBarProps = {
  cartItems: CartItem[];
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ cartItems, setIsCartOpen }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();
  const includedLinks = ["/", "/shop", "/about"];
  const { scrollY } = useScroll();

  const MotionValueBackgroundColor = useTransform(
    scrollY,
    [0, 150],
    ["rgba(11, 12, 16, 0)", "rgba(11, 12, 16, 0.95)"],
  );
  const backgroundColor: string | MotionValue = !includedLinks.includes(
    pathname,
  )
    ? "rgba(11, 12, 16, 0.95)"
    : MotionValueBackgroundColor;

  const MotionValueBorderColor = useTransform(
    scrollY,
    [0, 150],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"],
  );
  const borderColor = !includedLinks.includes(pathname)
    ? "rgba(255, 255, 255, 0.1)"
    : MotionValueBorderColor;

  const MotionValuenavbarHeight = useTransform(scrollY, [0, 150], [100, 70]);
  const navbarHeight = !includedLinks.includes(pathname)
    ? "70px"
    : MotionValuenavbarHeight;

  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative w-screen">
      <motion.div
        style={{
          willChange: "height, background-color, border-color",
          height: navbarHeight,
          backgroundColor,
          borderBottomWidth: "1px",
          borderBottomColor: borderColor,
        }}
        className="fixed top-0 left-0 bottom-auto w-full flex justify-center z-[1000] backdrop-blur-sm"
      >
        <div className="h-full w-full flex justify-center">
          <GridWrapper>
            <div className="row-[1/2] col-[2/3] grid justify-items-center justify-between grid-rows-[auto] grid-cols-[1fr_1fr] min-[992px]:grid-cols-[auto_1fr_auto] text-white gap-x-[24px] gap-y-[16px] items-center h-full">
              <motion.div className="cursor-pointer flex uppercase justify-self-start items-center pl-0 font-[500] justify-start group">
                <Link to="/">
                  <div className="hidden min-[480px]:flex items-center gap-2 text-[14px] text-center tracking-[4px] font-bold uppercase">
                    {/* TASTEFUL RED: The Logo Brackets */}
                    <span className="text-[#FF3366] font-mono">[</span>
                    <span className="group-hover:text-[#FF3366] transition-colors">
                      Shop Apocalypse
                    </span>
                    <span className="text-[#FF3366] font-mono">]</span>
                  </div>
                  <div className="font-bold flex flex-col leading-[1.1] gap-0 min-[480px]:hidden text-[12px] items-start tracking-[3px] uppercase">
                    <span className="text-[#FF3366]">[</span>
                    <div>Shop</div>
                    <div>Apoca</div>
                    <div className="flex items-center gap-1">
                      <span>lypse</span>
                      <span className="text-[#FF3366]">]</span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <nav className="hidden min-[992px]:flex justify-self-stretch relative float-right h-full">
                <div className="grid gap-[16px] grid-cols-[1fr_1fr_1fr] grid-rows-[auto] justify-between items-center w-full h-full">
                  <div className="grid grid-flow-col grid-cols-[auto] grid-rows-[auto] gap-x-[54px] justify-self-center row-[1/2] col-[2/3]">
                    {navLinks.map(({ link, url }) => (
                      <Link to={url} key={link} className="relative group">
                        <div className="flex static justify-center items-center h-full text-[#E0E0E0] hover:text-white transition-colors font-mono text-[11px] tracking-widest uppercase">
                          {link}
                        </div>
                        {/* TASTEFUL RED: The Nav Hover Underline */}
                        <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FF3366] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </Link>
                    ))}
                  </div>
                  <SearchBar />
                </div>
              </nav>

              <div className="grid grid-flow-col grid-cols-[1fr] grid-rows-[auto] gap-x-[16px] items-center self-center justify-self-end">
                <button
                  className="flex cursor-pointer group items-center"
                  onClick={() => setIsCartOpen(true)}
                >
                  <div className="text-xs font-mono grid min-h-9 h-9 items-center justify-center content-center auto-cols-fr grid-cols-[auto_auto] grid-rows-[auto] uppercase gap-x-2 tracking-widest text-[#E0E0E0] group-hover:text-white transition-colors">
                    <span className="hidden sm:block">MANIFEST</span>
                    <div className="flex items-center bg-[#12141A] border border-white/20 px-2 py-1 group-hover:border-[#FF3366] transition-colors relative">
                      <span
                        className={
                          cartItems.length > 0
                            ? "text-[#FF3366] font-bold"
                            : "text-[#667479]"
                        }
                      >
                        {cartItems.length.toString().padStart(2, "0")}
                      </span>
                      {/* TASTEFUL RED: Active Cart Ping */}
                      {cartItems.length > 0 && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF3366] rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </button>

                <button
                  aria-label="Toggle tactical menu"
                  onClick={toggleMobileMenu}
                  ref={toggleRef}
                  className="min-[992px]:hidden flex items-center justify-center w-10 h-10 border border-white/20 text-[#E0E0E0] hover:text-[#FF3366] hover:border-[#FF3366] transition-colors cursor-pointer bg-[#12141A]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="13" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </GridWrapper>
        </div>
      </motion.div>
      <div className="min-[992px]:hidden">
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleRef={toggleRef}
        />
      </div>
    </div>
  );
};

export default Navbar;
