import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useChannelStats } from '../hooks/useChannelStats';
import { 
  Menu, 
  X, 
  Youtube, 
  Instagram,
  BookOpen, 
  Video, 
  Info, 
  Mail, 
  Home, 
  ExternalLink 
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedPillar?: string | null;
  setSelectedPillar?: (pillar: string | null) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  setSelectedPillar
}) => {
  const CHANNEL_STATS = useChannelStats();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'blog', label: 'Blog Guides', icon: BookOpen },
    { id: 'videos', label: 'YouTube Videos', icon: Video }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (setSelectedPillar && id !== 'blog') {
      setSelectedPillar(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm py-3' 
          : 'bg-amber-50/60 dark:bg-slate-900/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div onClick={() => handleNavClick('home')}>
            <Logo variant="inline" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-sm shadow-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FFC300] text-slate-900 shadow-sm font-bold scale-[1.02]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-900' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram CTA */}
            <a
              href={CHANNEL_STATS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              title="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            {/* YouTube Subscribe CTA */}
            <a
              href={CHANNEL_STATS.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#c24f2e] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <Youtube className="w-5 h-5 text-white animate-bounce-subtle" />
              <span>Subscribe</span>
              <span className="hidden xl:inline-block px-2 py-0.5 bg-black/20 text-amber-200 text-xs rounded-md font-mono">
                {CHANNEL_STATS.subscribers}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
