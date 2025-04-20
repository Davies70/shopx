type StoryImageProps = {
  backgroundImage: string;
};
const StoryImage = ({ backgroundImage }: StoryImageProps) => {
  return (
    <div className='absolute inset-0'>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className='inset-0 absolute bg-[50%] bg-no-repeat bg-cover'
      ></div>
    </div>
  );
};

export default StoryImage;
