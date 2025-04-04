import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import Carousel from '@/components/Carousel';
const Home = () => {
  return (
    <div className='relative'>
      <NavBar />

      <Hero />

     <section className='flex flex-row justify-between'>
        <div className='bg-[url("/images/burrito.jpg")] bg-cover bg-center w-full h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1000px]'></div>
        <div>
          <h2>Outrun Doomsday with ShopApocalypse</h2>
          <p>
            ShopApocalypse is your one-stop shop for all the gear you need to
            survive the end of the world. From bug-out bags to bunker supplies,
            we have everything you need to outlast the apocalypse. At
            ShopApocalypse, we’re passionate preppers, part-time doomsday
            theorists, and full-time snack hoarders who want to help others
            prepare for anything—zombies, aliens, or just another power outage.
            Learn more about our mission to keep you one step ahead of the
            apocalypse (or at least well-stocked in emergency snacks).
          </p>
          <div className='flex flex-row justify-center items-center gap-5'>
            <button>Shop Now</button>
            <div className='flex flex-row '>
              <button>Our Story</button>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className='bg-[url("/images/burrito.jpg")] bg-cover bg-center w-full h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1000px]'></div>
      </section>
      <Carousel /> 
      {/* <section>
        <Carousel className='w-full max-w-xs'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <div>
                    <div className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section>
        <h1>Popular</h1>
        <h1>Best Selling</h1>

        <div></div>
      </section>
      <section>
        <h1>Featured</h1>
        <h1>Look inside our most selected product</h1>

        <div></div>
      </section>
      <ParallaxComponent/> */}
    </div>
  );
};

export default Home;
