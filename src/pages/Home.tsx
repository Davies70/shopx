import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import SectionFour from '@/components/SectionFour';
import SectionFive from '@/components/SectionFive';
import SectionSix from '@/components/SectionSix';
import SectionSeven from '@/components/SectionSeven';
import SectionEight from '@/components/SectionEight';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className='relative'>
      <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
};

export default Home;
