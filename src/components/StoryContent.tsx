import RevealButton from './RevealButton';
import RevealButtonWithIcon from './RevealButtonWithIcon';

type StoryContentProps = {
  title: string;
  description: string;
};

const StoryContent = ({ title, description }: StoryContentProps) => {
  return (
    <div className='grid text-center justify-center items-center gap-y-12 gap-x-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr]'>
      <div className='grid justify-items-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-x-4 gap-y-4.5'>
        <div className='flex justify-center items-center max-w-[700px] uppercase text-center w-full'>
          <h1 className=' text-[38px] min-[992px]:text-[42px] font-[600] leading-[1.35em] tracking-[.07em]'>
            {title}
          </h1>
        </div>
        <div className='justify-self-center max-w-[550px]'>
          <div className='text-[18px] leading-[1.65em] text-[#667479] font-[400] tracking-normal'>
            {description}
          </div>
        </div>
      </div>
      <div className=' grid justify-self-center gap-x-12 gap-y-4 grid-rows-[auto] grid-cols-[1fr]  grid-flow-col justify-center items-center'>
        <RevealButton
          text='Shop All'
          backgroundColor='#080808'
          textColor='white'
          textSize='text-[18px]'
          borderRadius='100px'
          onClick={() => console.log('Discover the collection clicked')}
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
