import React, { useState } from 'react';
import { Logo } from './Logo';
import { useChannelStats } from '../hooks/useChannelStats';
import { Youtube, Instagram, Mail, ArrowUp, Heart, Globe, Shield, Sparkles } from 'lucide-react';
import { LegalModal } from './LegalModal';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  setSelectedPillar?: (pillar: string | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, setSelectedPillar }) => {
  const CHANNEL_STATS = useChannelStats();
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string, pillar?: string) => {
    setActiveTab(tab);
    if (setSelectedPillar) {
      setSelectedPillar(pillar || null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="minimal" size="lg" />
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Travel Sapien is a full-time nomad family platform dedicated to transparent budget breakdowns, stress-free family travel tips, uncrowded hidden gems, and airfare hacks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={CHANNEL_STATS.channelUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 hover:bg-[#D95D39] dark:bg-slate-800 dark:hover:bg-[#D95D39] text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white rounded-xl transition-colors duration-200"
                aria-label="YouTube Channel Posts"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href={CHANNEL_STATS.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 hover:bg-rose-500 dark:bg-slate-800 dark:hover:bg-rose-500 text-slate-600 hover:text-white dark:text-slate-300 dark:hover:text-white rounded-xl transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:capt.alfred@outlook.com" 
                className="p-2.5 bg-slate-200 hover:bg-[#FFC300] dark:bg-slate-800 dark:hover:bg-[#FFC300] text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-900 rounded-xl transition-colors duration-200"
                aria-label="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-600 dark:text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{CHANNEL_STATS.subscribers} Subscribers</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-freckle text-lg text-slate-900 dark:text-white tracking-wide">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFC300] transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#FFC300] transition-colors">
                  Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('videos')} className="hover:text-[#FFC300] transition-colors">
                  YouTube Videos
                </button>
              </li>
            </ul>
          </div>

          {/* Content Pillars */}
          <div className="space-y-3">
            <h3 className="font-freckle text-lg text-slate-900 dark:text-white tracking-wide">Pillars</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => handleNav('blog', 'budget-breakdowns')} className="hover:text-[#FFC300] transition-colors flex items-center gap-2">
                  <span>💰</span> Budget Breakdowns
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog', 'family-tips')} className="hover:text-[#FFC300] transition-colors flex items-center gap-2">
                  <span>👨‍👩‍👧‍👦</span> Family Tips
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog', 'hidden-gems')} className="hover:text-[#FFC300] transition-colors flex items-center gap-2">
                  <span>💎</span> Hidden Gems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog', 'travel-hacks')} className="hover:text-[#FFC300] transition-colors flex items-center gap-2">
                  <span>⚡</span> Travel Hacks
                </button>
              </li>
            </ul>
          </div>

          {/* Core Brand Values */}
          <div className="space-y-3">
            <h3 className="font-freckle text-lg text-slate-900 dark:text-white tracking-wide">Brand Values</h3>
            <div className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>100% Transparent:</strong> Real receipts & itemized expenditure sheets.</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Authentic Discovery:</strong> Respecting local cultures & ecosystems.</span>
              </div>
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong>Community First:</strong> Free guides & ad-supported content for all.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Travel Sapien. All rights reserved. Travel. Discover. Live.</p>
            <p className="text-[#FFC300] font-medium">Latest Update : {__BUILD_DATE__}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => setLegalModalType('privacy')} className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setLegalModalType('terms')} className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>

      <LegalModal 
        isOpen={legalModalType !== null} 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </footer>
  );
};
