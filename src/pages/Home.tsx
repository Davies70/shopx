import Hero from '../components/Hero';
import Mission from '@/components/Mission';
import FeatureGrid from '@/components/FeatureGrid';
import BestSellers from '@/components/BestSellers';
import SectionFour from '@/components/SectionFour';
import SectionFive from '@/components/SectionFive';
import ActionBanner from '@/components/ActionBanner';
import Testimonials from '@/components/Testimonials';
import SectionEight from '@/components/SectionEight';

const Home = () => {
  return (
    <div className='z-10 bg-[#fff] relative'>
      <Hero />
      <Mission />
      <FeatureGrid />
      <BestSellers />
      <SectionFour />
      <SectionFive />
      <ActionBanner />
      <Testimonials />
      <SectionEight />
    </div>
  );
};

export default Home;
