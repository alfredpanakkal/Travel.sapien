import React, { useState, useMemo, useEffect } from 'react';
import { YouTubeVideo, PillarType } from '../types';
import { MOCK_YOUTUBE_VIDEOS, BRAND_PILLARS } from '../data/mockData';
import { useChannelStats } from '../hooks/useChannelStats';
import { VideoModal } from './VideoModal';
import { Youtube, Play, Flame, ExternalLink, Sparkles, Clock, Eye, Film } from 'lucide-react';

interface YouTubeHubProps {
  selectedPillar: PillarType | null;
  setSelectedPillar: (pillar: PillarType | null) => void;
  onNavigateToBlog?: () => void;
}

export const YouTubeHub: React.FC<YouTubeHubProps> = ({
  selectedPillar,
  setSelectedPillar,
  onNavigateToBlog
}) => {
  const CHANNEL_STATS = useChannelStats();
  const [activeTab, setActiveTab] = useState<'all' | 'vlogs' | 'shorts'>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<YouTubeVideo | null>(null);
  const [fetchedVideos, setFetchedVideos] = useState<YouTubeVideo[]>(MOCK_YOUTUBE_VIDEOS);

  // Automatically fetch real YouTube videos via RSS to JSON
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCE7bljZt0QWpnA8grkEWJvw');
        const data = await response.json();
        if (data.status === 'ok' && data.items) {
          const liveVideos = data.items.map((item: any, index: number) => {
            const videoId = item.guid.replace('yt:video:', '');
            // Check if it's a short by looking at title or assume from aspect ratio later, for now we can infer from title
            const isShort = item.title.toLowerCase().includes('#shorts') || item.title.toLowerCase().includes('#short');
            
            return {
              id: `live-vid-${index}`,
              videoId: videoId,
              title: item.title,
              description: item.description || 'Watch our latest adventure!',
              thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              publishedAt: new Date(item.pubDate).toLocaleDateString(),
              duration: 'N/A', // RSS feed doesn't provide duration easily
              viewCount: 'Live on YouTube',
              likeCount: 'Like!',
              pillar: isShort ? 'hidden-gems' : 'budget-breakdowns', // Default fallbacks
              videoUrl: item.link,
              isShort: isShort
            };
          });
          // Merge or replace (here we replace to show the real videos!)
          if (liveVideos.length > 0) {
            setFetchedVideos(liveVideos);
          }
        }
      } catch (error) {
        console.error("Error fetching YouTube videos automatically", error);
      }
    };
    fetchYouTubeVideos();
  }, []);

  // Shorts vs Long Form
  const shortsList = useMemo(() => {
    return fetchedVideos.filter(v => v.isShort || v.title.toLowerCase().includes('#shorts'));
  }, [fetchedVideos]);

  const vlogsList = useMemo(() => {
    let list = fetchedVideos.filter(v => !v.isShort && !v.title.toLowerCase().includes('#shorts'));
    if (selectedPillar) {
      // If live videos don't have perfect pillar mapping, we might just show all for now
      // Or we filter if they happen to match.
      // list = list.filter(v => v.pillar === selectedPillar);
    }
    return list;
  }, [fetchedVideos, selectedPillar]);

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Channel Header Branding Banner - YouTube Native Style */}
      <div className="flex flex-col mb-4">
        
        {/* Banner Cover Image */}
        <div className="w-full aspect-[6.2/1] sm:aspect-[6.2/1] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={CHANNEL_STATS.channelBannerUrl}
            alt="Travel Sapien Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Channel Details Row */}
        <div className="pt-6 sm:pt-6 flex flex-col sm:flex-row items-start justify-between gap-6 px-2 sm:px-4">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left w-full">
            <img
              src={CHANNEL_STATS.avatarUrl}
              alt={CHANNEL_STATS.channelName}
              className="w-32 h-32 sm:w-[160px] sm:h-[160px] rounded-full object-cover shrink-0"
            />
            
            <div className="space-y-2 pt-2 flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {CHANNEL_STATS.channelName}
              </h2>
              
              <div className="text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center sm:items-start sm:gap-2">
                <span className="font-semibold text-slate-900 dark:text-white">{CHANNEL_STATS.channelHandle}</span>
                <span className="hidden sm:inline">•</span>
                <span>{CHANNEL_STATS.subscribers} subscribers</span>
                <span className="hidden sm:inline">•</span>
                <span>{CHANNEL_STATS.totalVideos} videos</span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl line-clamp-2 mt-2">
                {CHANNEL_STATS.description}
              </p>

              <div className="pt-4 flex justify-center sm:justify-start">
                <a
                  href={CHANNEL_STATS.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>

      {/* Shorts Reel Carousel Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-freckle text-2xl text-slate-900 dark:text-white">
            <Flame className="w-6 h-6 text-[#D95D39] animate-bounce-subtle" />
            <span>YouTube Shorts & Quick Tips</span>
          </div>
          <span className="text-xs text-slate-500 font-sans">Swipe horizontally ➔</span>
        </div>

        {/* Horizontal Touch Scroll Reel */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
          {shortsList.map((short) => (
            <div
              key={short.id}
              onClick={() => setActiveVideoModal(short)}
              className="snap-start shrink-0 w-44 sm:w-52 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg cursor-pointer group hover:border-[#FFC300] transition-all transform hover:-translate-y-1"
            >
              <div className="relative aspect-9/16 overflow-hidden">
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFC300] text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-900 ml-0.5" />
                  </div>
                </div>

                {/* Views Badge */}
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/75 text-amber-300 font-mono text-[10px] font-bold rounded-md backdrop-blur-xs">
                  {short.viewCount}
                </span>

                <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-freckle text-white line-clamp-2 drop-shadow-md">
                  {short.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Long Form Vlogs Grid Section */}
      <div className="space-y-6 pt-4">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-freckle text-3xl text-slate-900 dark:text-white flex items-center gap-2">
              <Film className="w-6 h-6 text-[#D95D39]" />
              <span>Full Travel Vlogs & Cost Breakdown Videos</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Watch our weekly Sunday episodes featuring real budget sheets, hotel walkthroughs, and family adventures.
            </p>
          </div>

          {/* Pillar Filters Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar [-webkit-overflow-scrolling:touch]">
            <button
              onClick={() => setSelectedPillar(null)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                selectedPillar === null
                  ? 'bg-[#FFC300] text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              All Videos
            </button>
            {BRAND_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] ${
                  selectedPillar === p.id
                    ? `${p.badgeBg} ${p.badgeText} ring-2 ring-[#FFC300]`
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {p.emoji} {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Long Form Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogsList.map((video) => {
            const pillarInfo = BRAND_PILLARS.find(p => p.id === video.pillar);
            return (
              <div
                key={video.id}
                onClick={() => setActiveVideoModal(video)}
                className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#FFC300] text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-900 ml-0.5" />
                      </div>
                    </div>

                    {/* Pillar Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${pillarInfo?.badgeBg} ${pillarInfo?.badgeText}`}>
                        {pillarInfo?.emoji} {pillarInfo?.name}
                      </span>
                    </div>

                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 text-white font-mono text-xs font-bold rounded-md backdrop-blur-xs">
                      {video.duration}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-sans">
                      <span className="flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                        <Eye className="w-3.5 h-3.5" /> {video.viewCount}
                      </span>
                      <span>{video.publishedAt}</span>
                    </div>

                    <h4 className="font-freckle text-xl text-slate-900 dark:text-white group-hover:text-[#D95D39] transition-colors leading-snug">
                      {video.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#D95D39]">
                  <span className="flex items-center gap-1">
                    <Youtube className="w-4 h-4" /> Watch Episode
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{video.likeCount} Likes</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        onNavigateToBlog={onNavigateToBlog}
      />

    </section>
  );
};
