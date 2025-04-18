type StoryImageProps = {
  backgroundImage: string;
};
const StoryImage = ({ backgroundImage }: StoryImageProps) => {
  return (
    <div className='grid  border border-black overflow-hidden relative max-md:w-[25vw] max-md:h-[35vw] max-[991px]:w-[20vw] max-[991px]:h-[29vw] min-[992px]:w-15vw min-[992px]:h-[21vw] row-[2/3] col-[1/2] justify-self-end '>
      <div
        className='absolute inset-0 bg-cover bg-no-repeat bg-[50%]'
        style={{
          backgroundImage,
        }}
      ></div>
    </div>
  );
};

export default StoryImage;
