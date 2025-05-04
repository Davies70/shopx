type GridWrapperProps = {
  children: React.ReactNode;
};

const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <div className='grid grid-rows-[auto] grid-cols-[minmax(5vw,1fr)_minmax(auto,1500px)_minmax(5vw,1fr)] auto-cols-auto w-full relative gap-0 z-25'>
      {children}
    </div>
  );
};

export default GridWrapper;
