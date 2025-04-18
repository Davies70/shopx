const StoryContent = () => {
  return (
    <div className='max-[991px]:row-span-1 max-[991px]:col-span-2 w-full max-w-[700px] mx-auto'>
      <div className='grid text-center justify-center items-center gap-y-12 gap-x-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr]'>
        <div className='grid justify-items-start auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-x-4 gap-y-4.5'>
          <div className='max-w-[700px]'>
            <h1 className=''>Story Title</h1>
          </div>
          <div className='justify-self-center max-w-[550px]'>
            <div className='text-[18px] leading-[1.65em] text-[#667479]'>
              At Stealthy Whiskers, we're more than just a store that sells cat
              gear. We're passionate cat owners and military enthusiasts who
              want to help other cat owners train their furry friends to become
              skilled and prepared warriors. Learn more about our story and how
              we got started on our mission to help cats become the best they
              can be.
            </div>
          </div>
        </div>
        <div className='grid justify-self-center gap-x-12 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-col justify-center'>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;
