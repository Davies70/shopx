// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { slides } from '../data';

export default function Hero() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // };
  // return (
  //   <Slider {...settings}>
  //     {slides.map((item, index) => (
  //       <div
  //         key={index}
  //         className='flex items-center justify-center bg-gray-100  h-screen -z-50'
  //       >
  //         <img
  //           src={item.image}
  //           alt={item.title}
  //           className='object-cover w-full h-full'
  //         />
  //         <h3>{item.title}</h3>
  //         <p>{item.subtitle}</p>
  //       </div>
  //     ))}
  //   </Slider>
  // );
  return (
    <div
      className='hero min-h-screen absolute top-0 left-0 right-0 bg-cover bg-center'
      style={{
        backgroundImage: 'url(/images/slide_3.webp)',
      }}
    >
      <div className='hero-overlay'></div>
      <div className='hero-content text-neutral-content text-center'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
