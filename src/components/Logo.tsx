import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'inline' | 'minimal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'inline',
  size = 'md',
  className = ''
}) => {
  // Size mappings
  const sizeMap = {
    sm: { container: 'h-8', text: 'text-lg', boat: 'w-4 h-4', badgePad: 'px-2.5 py-1' },
    md: { container: 'h-10', text: 'text-2xl', boat: 'w-6 h-6', badgePad: 'px-3.5 py-1.5' },
    lg: { container: 'h-12', text: 'text-3xl', boat: 'w-7 h-7', badgePad: 'px-4 py-2' },
    xl: { container: 'h-16', text: 'text-4xl sm:text-5xl', boat: 'w-9 h-9', badgePad: 'px-6 py-3' },
  };

  const curr = sizeMap[size];

  const SailboatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Hull */}
      <path d="M2 17l2 4h16l2-4H2z" fill="currentColor" fillOpacity="0.15" />
      {/* Mast */}
      <line x1="12" y1="3" x2="12" y2="17" />
      {/* Main Sail */}
      <path d="M12 4l8 10h-8V4z" fill="currentColor" fillOpacity="0.3" />
      {/* Jib Sail */}
      <path d="M12 6L5 14h7V6z" />
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div 
        className={`inline-flex items-center justify-center bg-[#FFC300] text-slate-900 rounded-xl font-freckle shadow-md hover:shadow-lg transition-transform duration-200 active:scale-95 ${curr.badgePad} ${className}`}
        style={{ color: '#1E293B' }}
      >
        <div className="flex flex-col items-center leading-none tracking-wide">
          <div className="flex items-center gap-1">
            <span>Tr</span>
            <SailboatIcon className={`${curr.boat} text-slate-900 stroke-[2.5] inline-block -mt-1`} />
            <span>vel</span>
          </div>
          <span className="-mt-1">Sapien</span>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2 font-freckle ${curr.text} text-slate-900 dark:text-white ${className}`}>
        <div className="p-1.5 bg-[#FFC300] text-slate-900 rounded-lg shadow-sm">
          <SailboatIcon className={curr.boat} />
        </div>
        <span className="tracking-wide">Travel Sapien</span>
      </div>
    );
  }

  // Default Inline Variant
  return (
    <div className={`flex items-center gap-2 font-freckle select-none cursor-pointer group ${curr.text} ${className}`}>
      <div className="relative flex items-center justify-center p-2 bg-[#FFC300] text-[#1E293B] rounded-xl shadow-sm group-hover:bg-[#D95D39] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3">
        <SailboatIcon className={`${curr.boat} transition-transform duration-300 group-hover:scale-110`} />
      </div>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center text-slate-900 dark:text-white group-hover:text-[#D95D39] transition-colors duration-200">
          <span className="tracking-wide">Travel</span>
          <span className="ml-1 text-[#D95D39] dark:text-[#FFC300] font-sans text-xs uppercase tracking-widest font-bold">Sapien</span>
        </div>
        <span className="font-sans text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-semibold -mt-1">
          Travel. Discover. Live
        </span>
      </div>
    </div>
  );
};
