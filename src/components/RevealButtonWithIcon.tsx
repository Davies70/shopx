import RevealButton from './RevealButton';
import IconButton from './IconButton';
import { useState } from 'react';

type RevealButtonWithIconProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  padding?: string;
  borderRadius?: string;
  iconBorderColor?: string;
  isTextPadding?: boolean;
  iconType?: 'left' | 'right' | 'none';
  isIconCircular?: boolean;
};

const RevealButtonWithIcon = ({
  text,
  backgroundColor,
  textColor,
  iconBorderColor,
  isTextPadding = true,
  iconType = 'right',
  isIconCircular = true,
}: RevealButtonWithIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='flex relative sm:w-auto'
      style={{ touchAction: 'none', backgroundColor }}
      role='button'
    >
      <div
        className='absolute inset-0 z-50 cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      ></div>
      <RevealButton
        text={text}
        textColor={textColor}
        isParentHovered={isHovered}
        paddingInline='0px'
        isPadding={isTextPadding}
        
      />

      <IconButton
        type={iconType}
        onClick={() => console.log('clicked')}
        color={textColor}
        isParentHovered={isHovered}
        borderColor={iconBorderColor}
        isCircle={isIconCircular}
        
      />
    </div>
  );
};

export default RevealButtonWithIcon;
