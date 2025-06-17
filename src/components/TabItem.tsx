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
      className="tab-item flex flex-col w-full bg-white"
      style={{
        borderBottom: '1px solid #e4e9ec',
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
        marginBottom: '12px',
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="tab-top cursor-pointer w-full relative overflow-hidden flex items-center justify-between px-6 py-5 transition-all duration-300 focus:outline-none"
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
        }}
      >
        <span className="tab-title text-[#080808] tracking-[.12em] uppercase text-[15px] font-semibold text-left flex-1">
          {question}
        </span>
        <span
          className={`lottie-tab-icon transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          } opacity-70 w-5 h-5 flex items-center justify-center`}
        >
          <Plus className="w-full h-full" />
        </span>
      </button>
      <div
        className={`tab-bottom overflow-hidden bg-[#f7f9fa] transition-all duration-500`}
        style={{
          maxHeight: isOpen ? 500 : 0,
          borderTop: isOpen ? '1px solid #e4e9ec' : 'none',
        }}
      >
        <div className="tab-bottom-content mx-auto px-6 py-5 sm:px-4 sm:py-4">
          <div className="body-display text-[15px] text-[#667479] tracking-normal leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
