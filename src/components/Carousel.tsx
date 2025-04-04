import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { secondarySlides } from '@/data';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {secondarySlides.map((item, index) => (
        <div
          key={index}
          className='flex items-center justify-center bg-gray-100 p-5 h-screen'
        >
          <img
            src={item.image}
            alt={item.title}
            className='object-cover w-full h-full'
          />
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
