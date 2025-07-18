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
  onClick?: () => void;
};

const RevealButtonWithIcon = ({
  text,
  backgroundColor,
  textColor,
  iconBorderColor,
  isTextPadding = true,
  iconType = 'right',
  isIconCircular = true,
  onClick,
}: RevealButtonWithIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='flex relative w-fit'
      style={{ touchAction: 'none', backgroundColor }}
      role='button'
      onClick={onClick}
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
        color={textColor}
        isParentHovered={isHovered}
        borderColor={iconBorderColor}
        isCircle={isIconCircular}
      />
    </div>
  );
};

export default RevealButtonWithIcon;
