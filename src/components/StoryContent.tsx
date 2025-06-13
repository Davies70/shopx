import RevealButton from './RevealButton';
import RevealButtonWithIcon from './RevealButtonWithIcon';
import Heading from './Heading';

type StoryContentProps = {
  title: string;
  description: string;
};

const StoryContent = ({ title, description }: StoryContentProps) => {
  return (
    <div className='grid text-center justify-center items-center gap-y-12 gap-x-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr]'>
      <div className='grid justify-items-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-x-4 gap-y-4.5'>
        <div className='flex justify-center items-center max-w-[700px] uppercase text-center w-full'>
          <Heading text={title} type='large' />
        </div>
        <div className='justify-self-center max-w-[550px] overflow-hidden sm:px-0'>
          <div className='text-[18px] text-center break-words leading-[1.65em] text-[#667479] font-[400] tracking-normal overflow-visible justify-center items-center'>
            {description}
          </div>
        </div>
      </div>
      <div className=' grid justify-self-center gap-x-[18px] gap-y-[18px] min-[480px]:gap-x-12 min-[480px]:gap-y-4 grid-rows-[auto] grid-cols-[1fr]  grid-flow-col justify-center items-center'>
        <RevealButton
          text='Shop All'
          backgroundColor='#080808'
          textColor='white'
          borderRadius='100px'
          onClick={() => console.log('Discover the collection clicked')}
          isOverflowHidden={false}
        />

        <RevealButtonWithIcon
          text='Our Story'
          backgroundColor='white'
          textColor='#667479'
          textSize='text-[18px]'
          borderRadius='100px'
          isTextPadding={false}
        />
      </div>
    </div>
  );
};

export default StoryContent;
