import React from 'react';
import { BRAND_PILLARS } from '../data/mockData';
import { PillarType } from '../types';
import { Sparkles } from 'lucide-react';

interface PillarFilterProps {
  selectedPillar: PillarType | null;
  onSelectPillar: (pillar: PillarType | null) => void;
  className?: string;
  showDescriptions?: boolean;
}

export const PillarFilter: React.FC<PillarFilterProps> = ({
  selectedPillar,
  onSelectPillar,
  className = '',
  showDescriptions = false
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth [-webkit-overflow-scrolling:touch]">
        
        {/* All Button */}
        <button
          onClick={() => onSelectPillar(null)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 shadow-xs cursor-pointer min-h-[44px] ${
            selectedPillar === null
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-[1.02]'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>All Content</span>
        </button>

        {/* 4 Pillars Buttons */}
        {BRAND_PILLARS.map((p) => {
          const isSelected = selectedPillar === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPillar(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[44px] ${
                isSelected
                  ? `${p.badgeBg} ${p.badgeText} ring-2 ring-amber-400 dark:ring-amber-500 shadow-sm scale-[1.02]`
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80'
              }`}
            >
              <span className="text-base">{p.emoji}</span>
              <span>{p.name}</span>
            </button>
          );
        })}

      </div>

      {/* Optional Description Cards */}
      {showDescriptions && selectedPillar && (
        <div className="p-4 rounded-2xl bg-amber-100/60 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-700/50 text-amber-900 dark:text-amber-200 text-sm flex items-start gap-3">
          <span className="text-2xl mt-0.5">
            {BRAND_PILLARS.find(p => p.id === selectedPillar)?.emoji}
          </span>
          <div>
            <h4 className="font-freckle text-base tracking-wide">
              {BRAND_PILLARS.find(p => p.id === selectedPillar)?.name}
            </h4>
            <p className="mt-0.5 opacity-90 text-xs sm:text-sm">
              {BRAND_PILLARS.find(p => p.id === selectedPillar)?.fullDesc}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
