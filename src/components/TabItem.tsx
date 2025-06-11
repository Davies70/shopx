import { Plus } from 'lucide-react';
import { useState } from 'react';

type TabItemProp = {
  question: string;
  answer: string;
};

const TabItem = ({ question, answer }: TabItemProp) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className='tab-item flex flex-col'
      style={{
        borderBottom: '1px solid #e4e9ec',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        style={{
          transition: 'padding .5s cubic-bezier(.25,.46,.45,.94)',
        }}
        className='tab-top cursor-pointer w-full p-[28px_0] relative overflow-hidden'
      >
        <div className='tab-title z-25 gap-x-[16px] gap-y-[16px] text-[#080808] tracking-[.15em] uppercase grid-rows-[auto] grid-cols-[1fr_auto] items-center w-full mx-auto text-[14px] font-[500] grid relative'>
          <div>{question}</div>
          <div className='lottie-tab-icon z-10 opacity-[0.5]  w-[14px] relative'>
            <Plus className='w-full h-full' />
          </div>
        </div>
        <div className='hover-cover hidden'></div>
      </div>
      <div
        style={{
          borderTop: '1px solid #e4e9ec',
          height: isOpen ? '100%' : '0px',
          transition: 'height .5s cubic-bezier(.25,.46,.45,.94) ',
        }}
        className='tab-bottom overflow-hidden py-0 bg-[#e4e9ec]'
      >
        <div className='tab-bottom-content mx-auto p-[28px_24px]'>
          <div className='body-display extra-small text-[15px] text-[#667479] tracking-normal'>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
