import React from 'react';

interface LeafDividerProps {
  fillColor?: string;
  className?: string;
  flipY?: boolean;
}

export const LeafDivider: React.FC<LeafDividerProps> = ({
  fillColor = '#1B5E20',
  className = '',
  flipY = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className} ${
        flipY ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C280,74 520,74 720,32 C920,-10 1160,-10 1440,32 L1440,74 L0,74 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
