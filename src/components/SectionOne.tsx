import StoryImage from './StoryImage';
import StoryContent from './StoryContent';
const SectionOne = () => {
  return (
    <section className='z-10 flex justify-center max-[767px]:py-20 max-[991px]:py-25 min-[992px]:py-40 relative'>
      <div className='grid grid-row-[auto] grid-cols-[minmax(5vw,1fr)_minmax(auto,1500px)_minmx(5vw,1fr)] auto-cols-auto w-full relative gap-0'>
        <div className='story-wrapper'>
          <StoryImage />
          <StoryContent />
          <StoryImage />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
