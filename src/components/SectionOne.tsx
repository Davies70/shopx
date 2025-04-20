import StoryContent from './StoryContent';
import StoryImage from './StoryImage';
import { storyOne } from '@/data';
const SectionOne = () => {
  return (
    <section className='flex py-[100px] z-10 relative justify-center min-[992px]:py-[160px] h-[400px]'>
      <div className='grid grid-rows-[auto] grid-cols-[minmax(5vw,1fr)_minmax(auto,1500px)_minmax(5vw,1fr)] auto-cols-auto w-full relative gap-0 z-25'>
        <div className='grid gap-x-1.5 row-[1/2] col-[2/3] min-[992px]:row-[1/-1] min-[992px]:col-[1/-1] max-md:gap-y-15 max-[991px]:gap-y-20 gap-y-4 grid-cols-[auto_auto] grid-rows-[auto_auto] min-[992px]:grid-cols-[auto_1fr_auto] justify-stretch items-center'>
          <div className='max-[991px]:row-start-2 relative border overflow-hidden w-[20vw] h-[29vw] min-[992px]:w-[15vw] min-[992px]:h-[21vw] justify-self-end'>
            <StoryImage backgroundImage={storyOne.image_1} />
          </div>
          <div className='max-[991px]:row-span-1 max-[991px]:col-span-2 w-full max-w-[700px] mx-auto'>
            <StoryContent
              title={storyOne.title}
              description={storyOne.description}
            />
          </div>
          <div className='max-[991px]:row-start-2 relative border overflow-hidden w-[20vw] h-[29vw]  min-[992px]:w-[15vw] min-[992px]:h-[21vw]'>
            <StoryImage backgroundImage={storyOne.image_2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
