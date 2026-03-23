import React from "react";

type GridWrapperProps = {
  children: React.ReactNode;
  /** If true, the content ignores the 1500px limit and touches the screen edges */
  fullWidth?: boolean;
  /** For overflow control (replaces your isClipped logic) */
  overflowHidden?: boolean;
  className?: string;
};

const GridWrapper = ({
  children,
  fullWidth = false,
  overflowHidden = false,
  className = "",
}: GridWrapperProps) => {
  return (
    <div
      className={`
        grid w-full relative z-20
        /* 1. THE GRID DEFINITION */
        /* Left Gutter | Main Content (Max 1500px) | Right Gutter */
        grid-cols-[minmax(1.5rem,1fr)_minmax(0,1500px)_minmax(1.5rem,1fr)]
        
        /* 2. OVERFLOW CONTROL */
        ${overflowHidden ? "overflow-hidden" : "overflow-visible"}
        
        /* 3. CUSTOM INJECTED CLASSES */
        ${className}
      `}
    >
      {/* By wrapping {children} in this div, we ensure that EVERYTHING 
        passed to GridWrapper is automatically centered and constrained 
        to the 1500px track. 
      */}
      <div
        className={`
        ${fullWidth ? "col-span-3" : "col-[2/3]"} 
        w-full h-full
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default GridWrapper;
