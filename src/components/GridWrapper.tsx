type GridWrapperProps = {
  children: React.ReactNode;
  isClipped?: boolean;
};

const GridWrapper = ({ children, isClipped }: GridWrapperProps) => {
  return (
    <div
      className='grid grid-rows-[auto] grid-cols-[minmax(5vw,1fr)_minmax(auto,1500px)_minmax(5vw,1fr)] auto-cols-auto w-full relative gap-0 z-25'
      style={{
        justifyContent: isClipped ? 'center' : 'normal',
        justifyItems: isClipped ? 'center' : 'normal',
        overflow: isClipped ? 'hidden' : 'visible',
      }}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
