type FeatureCardProp = {
  marginTop?: string;
  image: string;
};

const FeatureCard = ({ marginTop, image }: FeatureCardProp) => {
  return (
    <div>
      <div
        style={{
          marginTop,
        }}
        className='bg-scroll min-h-[45vw] min-[992px]:min-h-[35vw] bg-[#f4f8fa] justify-center items-center flex relative'
      >
        <div
          className='bg-[50%] bg-no-repeat absolute bg-cover inset-0'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FeatureCard;
