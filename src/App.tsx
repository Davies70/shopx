import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='relative m-0 min-h-full'>
        <NavBar />
        <main className='overflow-hidden min-[480px]:overflow-visible'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
