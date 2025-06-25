import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import FAQ from './pages/FAQ';
import Product from './pages/Product';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LightBox from './components/LightBox';

function App() {
  return (
    <Router>
      <div className='relative m-0 min-h-full'>
        <LightBox />
        <NavBar />
        <main className='overflow-hidden min-[480px]:overflow-visible'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='product' element={<Product />} />

            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
