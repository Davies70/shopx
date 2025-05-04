import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';

const Home = () => {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
