import React from 'react';
import { YouTubeVideo } from '../types';
import { X, Youtube, Eye, ThumbsUp, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import { BRAND_PILLARS } from '../data/mockData';

interface VideoModalProps {
  video: YouTubeVideo | null;
  onClose: () => void;
  onNavigateToBlog?: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onNavigateToBlog
}) => {
  if (!video) return null;

  const pillarInfo = BRAND_PILLARS.find(p => p.id === video.pillar);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto text-white">
        
        {/* Sticky Header Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#D95D39] text-white font-bold text-xs flex items-center gap-1">
              <Youtube className="w-3.5 h-3.5" /> YouTube
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${pillarInfo?.badgeBg} ${pillarInfo?.badgeText}`}>
              {pillarInfo?.emoji} {pillarInfo?.name}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close video modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Embedded Player or Preview Box */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <h2 className="font-freckle text-2xl sm:text-3xl text-white leading-snug">
              {video.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
              <span className="flex items-center gap-1 font-semibold text-amber-400">
                <Eye className="w-4 h-4" /> {video.viewCount}
              </span>
              <span className="flex items-center gap-1 text-rose-400">
                <ThumbsUp className="w-4 h-4" /> {video.likeCount}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {video.publishedAt}
              </span>
            </div>
          </div>

          {/* Description Box */}
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <h3 className="font-freckle text-lg text-amber-400">Video Highlights & Notes</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
              {video.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D95D39] hover:bg-[#c24f2e] text-white font-bold text-sm shadow-md transition-all"
            >
              <Youtube className="w-5 h-5" />
              <span>Watch directly on YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {onNavigateToBlog && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToBlog();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm transition-all border border-slate-700"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Written Itemized Breakdown</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
