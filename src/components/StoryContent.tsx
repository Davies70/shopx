type StoryContentProps = {
  title: string;
  description: string;
};

const StoryContent = ({ title, description }: StoryContentProps) => {
  return (
    <div className='grid text-center justify-center items-center gap-y-12 gap-x-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr]'>
      <div className='grid justify-items-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-x-4 gap-y-4.5'>
        <div className='max-w-[700px]'>
          <h1 className=''>{title}</h1>
        </div>
        <div className='justify-self-center max-w-[550px]'>
          <div className='text-[18px] leading-[1.65em] text-[#667479]'>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className='grid justify-self-center gap-x-12 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-col justify-center'>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default StoryContent;
