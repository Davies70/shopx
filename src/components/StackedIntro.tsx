type StackedIntroProps = {
  children: React.ReactNode;
  type: 'small' | 'large' | 'normal';
  postion?: 'centered';
};

const StackedIntro = ({ children, type, postion }: StackedIntroProps) => {
  const centered =
    postion === 'centered'
      ? 'text-center justify-center justify-items-center'
      : 'justify-items-start';

  const className = `${centered} grid  gap-x-[16px] grid-rows-[auto] grid-cols-[1fr]  `;
  return (
    <div
      style={{
        rowGap: type === 'small' ? '18px' : type === 'large' ? '48px' : '24px',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default StackedIntro;
