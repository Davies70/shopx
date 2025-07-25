import Hero from '../components/Hero';
import Mission from '@/components/Mission';
import FeatureGrid from '@/components/FeatureGrid';
import BestSellers from '@/components/BestSellers';
import ShopAllSection from '@/components/SectionFour';
import FeaturedSection from '@/components/FeaturedSection';
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
      <ShopAllSection />
      <FeaturedSection />
      <ActionBanner />
      <Testimonials />
      <SectionEight />
    </div>
  );
};

export default Home;
