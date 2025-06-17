type HeadingProps = {
  type: 'normal' | 'large' | 'extra-large' | 'small';
  text: string;
};

const Heading = ({ type, text }: HeadingProps) => {
  if (type === 'normal') {
    return (
      <h1 className=' font-[600] leading-[1.35em] text-[26px] min-[480px]:text-[32px] min-[768px]:text-[34px] tracking-[0.07em] uppercase my-0 mx-[0] '>
        {text}
      </h1>
    );
  } else if (type === 'large') {
    return (
      <h1 className='text-inherit uppercase text-[32px] min-[480px]:text-[36px] min-[780px]:text-[38px] min-[992px]:text-[42px] font-[600] leading-[1.35em] tracking-[.07em]'>
        {text}
      </h1>
    );
  } else if (type === 'small') {
    return (
      <h1 className='text-inherit uppercase text-[20px] min-[480px]:text-[22px] min-[780px]:text-[32px] min-[992px]:text-[36px] font-[500] leading-[1.35em] tracking-[.07em]'>
        {text}
      </h1>
    );
  }
  return (
    <h1 className='text-inherit uppercase text-[38px] min-[480px]:text-[44px] min-[780px]:text-[40px] min-[992px]:text-[52px] font-[600] leading-[1.35em] tracking-[.07em]'>
      {text}
    </h1>
  );
};

export default Heading;
