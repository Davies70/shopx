import Hero from '../components/Hero';
// import { ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
// import Carousel from '@/components/Carousel';
const Home = () => {
  return (
    <div className='relative bg-black'>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
