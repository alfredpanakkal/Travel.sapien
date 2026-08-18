import React, { useRef, useEffect } from 'react';
import { Youtube, Instagram, BookOpen, Sparkles, MapPin, Compass, Play } from 'lucide-react';
import { useChannelStats } from '../hooks/useChannelStats';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedPillar?: (pillar: string | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  const CHANNEL_STATS = useChannelStats();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video always plays even on strict mobile browsers/safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play was prevented. Re-attempting muted play.", error);
        });
      }
    }
  }, []);
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent dark:from-amber-500/10 dark:via-slate-900/0 dark:to-slate-900 pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300/80 dark:border-amber-700/60 text-slate-900 dark:text-amber-300 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D95D39] animate-pulse" />
              <span>Full-Time Nomad Family Travel Hub</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
              <span className="text-slate-600 dark:text-amber-200/80 font-normal">Weekly Vlogs & Guides</span>
            </div>

            {/* Main Freckle Face Hero Heading */}
            <h1 className="font-freckle text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Travel. <span className="text-[#D95D39] underline decoration-[#FFC300] decoration-wavy decoration-2">Discover.</span> Live.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Welcome to <strong>Travel Sapien</strong>! We prove that traveling the world as a family doesn’t require a fortune. Get transparent itemized budget breakdowns, toddler flight survival rules, hidden Mediterranean beaches, and flight glitch hacks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              
              <button
                onClick={() => setActiveTab('videos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#D95D39] hover:bg-[#c24f2e] text-white font-extrabold text-base shadow-ember hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer min-h-[48px]"
              >
                <Youtube className="w-5 h-5 text-white" />
                <span>Watch YouTube Hub</span>
              </button>

              <button
                onClick={() => setActiveTab('blog')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#FFC300] hover:bg-[#e0ab00] text-slate-900 font-extrabold text-base shadow-brand hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer min-h-[48px]"
              >
                <BookOpen className="w-5 h-5 text-slate-900" />
                <span>Read Written Guides</span>
              </button>

              <a
                href={CHANNEL_STATS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 min-h-[48px]"
              >
                <Instagram className="w-5 h-5 text-white" />
                <span>Follow Instagram</span>
              </a>

            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500" /> {CHANNEL_STATS.countriesVisited} Countries Logged
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-500" /> 100% Real Receipts
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" /> Free Weekly Newsletter
              </span>
            </div>

          </div>

          {/* Right Hero Video/Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Animated Logo Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 dark:border-slate-700 bg-[#FFC300] transform hover:scale-[1.02] transition-transform duration-300 aspect-video flex items-center justify-center">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                poster="/animated-logo-poster.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/animated-logo.webm" type="video/webm" />
                <source src="/animated-logo-compressed.mp4" type="video/mp4" />
                {/* Fallback to original if compressed versions fail */}
                <source src="/animated-logo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Floating Sailboat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#FFC300] text-slate-900 p-4 rounded-2xl shadow-xl border-2 border-white dark:border-slate-800 flex items-center gap-3 hidden sm:flex">
              <div className="p-2 bg-slate-900 text-[#FFC300] rounded-xl font-freckle text-xl">
                ⛵
              </div>
              <div>
                <div className="font-freckle text-base leading-tight">Sail With Us</div>
                <div className="text-[11px] font-sans font-bold text-slate-800">{CHANNEL_STATS.subscribers}+ Sapien Crew</div>
              </div>
            </div>

          </div>

        </div>

        {/* Live Channel Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            <div className="font-freckle text-3xl sm:text-4xl text-[#D95D39] dark:text-[#FFC300]">
              {CHANNEL_STATS.subscribers}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              YouTube Subscribers
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            <div className="font-freckle text-3xl sm:text-4xl text-slate-900 dark:text-white">
              {CHANNEL_STATS.totalVideos}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Videos & Shorts
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            <div className="font-freckle text-3xl sm:text-4xl text-slate-900 dark:text-white">
              {CHANNEL_STATS.blogArticles}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Detailed Budget Guides
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            <div className="font-freckle text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400">
              {CHANNEL_STATS.countriesVisited}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Countries Visited
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
