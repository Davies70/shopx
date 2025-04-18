import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SectionOne from '@/components/SectionOne';

const Home = () => {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <SectionOne />
    </div>
  );
};

export default Home;
