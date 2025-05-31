import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Mission from '@/components/Mission';
import FeatureGrid from '@/components/FeatureGrid';
import SectionThree from '@/components/SectionThree';
import SectionFour from '@/components/SectionFour';
import SectionFive from '@/components/SectionFive';
import ActionBanner from '@/components/ActionBanner';
import Testimonials from '@/components/Testimonials';
import SectionEight from '@/components/SectionEight';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className='relative m-0 min-h-full'>
      <NavBar />
      <div className='overflow-hidden min-[480px]:overflow-visible'>
        <div className='z-10 bg-[#fff] relative'>
          <Hero />
          <Mission />
          <FeatureGrid />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <ActionBanner />
          <Testimonials />
          <SectionEight />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
