type StackedIntroProps = {
  children: React.ReactNode;
  type: 'small' | 'large';
};

const StackedIntro = ({ children, type }: StackedIntroProps) => {
  return (
    <div
      style={{
        rowGap: type === 'small' ? '18px' : '48px',
      }}
      className='grid gap-y-[48px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] justify-items-start'
    >
      {children}
    </div>
  );
};

export default StackedIntro;
