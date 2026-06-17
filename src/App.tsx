import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense, useState, useEffect } from "react";
import { CartItem as CartItemType } from "@/categories";
import { getCartItems } from "./services";
import { useDynamicTitle } from "./hooks/useDynamicTitle";
import CartTray from "./components/CartTray";

import { Routes, Route } from "react-router-dom";
import LightBox from "./components/LightBox";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Product = lazy(() => import("./pages/Product"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Shipping = lazy(() => import("./pages/Shipping"));
const SecureForum = lazy(() => import("./pages/SecureForum"));
const Returns = lazy(() => import("./pages/Returns"));
const InstagramNode = lazy(() => import("./pages/InstagramNode"));

const RouteFallback = () => (
  <div className="min-h-screen bg-[#0B0C10] pt-32 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-[#667479]">
    Loading_Asset_Stream
  </div>
);

function App() {
  const [isLightBoxOpen, setisLightBoxOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useDynamicTitle();

  useEffect(() => {
    const data = getCartItems();
    setCartItems(data);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="relative m-0 min-h-full">
        {/* <PopUp /> */}
        {isLightBoxOpen && <LightBox setIsLightBoxOpen={setisLightBoxOpen} />}
        <NavBar cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
        <CartTray
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />

        <main className="overflow-hidden min-[480px]:overflow-visible">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route
                path="/products/:id"
                element={
                  <Product
                    setIsLightBoxOpen={setisLightBoxOpen}
                    setCartItems={setCartItems}
                    setIsCartOpen={setIsCartOpen}
                  />
                }
              />
              <Route path="/shop/:id" element={<Shop />} />
              <Route path="/search_results" element={<SearchResults />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/instagram-node" element={<InstagramNode />} />
              <Route path="/forum" element={<SecureForum />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
