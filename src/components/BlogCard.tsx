import React from 'react';
import { BlogPost } from '../types';
import { BRAND_PILLARS } from '../data/mockData';
import { Clock, ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelectPost }) => {
  const pillarInfo = BRAND_PILLARS.find(p => p.id === post.pillar);

  return (
    <article 
      onClick={() => onSelectPost(post)}
      className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      <div>
        {/* Cover Image Container */}
        <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Pillar Badge Overlay */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${pillarInfo?.badgeBg || 'bg-amber-100 text-amber-900'} ${pillarInfo?.badgeText || ''}`}>
              <span>{pillarInfo?.emoji}</span>
              <span>{pillarInfo?.name}</span>
            </span>
          </div>

          {/* Reading Time Badge */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/75 text-white font-medium text-xs rounded-lg backdrop-blur-xs flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Article Info & Body Excerpt */}
        <div className="p-6 space-y-3">
          
          {/* Date & Author */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {post.author.name}
            </span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
          </div>

          {/* Title */}
          <h3 className="font-freckle text-xl text-slate-900 dark:text-white group-hover:text-[#D95D39] dark:group-hover:text-[#FFC300] transition-colors leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed font-sans">
            {post.excerpt}
          </p>

        </div>
      </div>

      {/* Footer Read Link */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#D95D39] dark:text-[#FFC300]">
        <span>Read Full Guide</span>
        <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-slate-700 group-hover:bg-[#FFC300] dark:group-hover:bg-[#FFC300] group-hover:text-slate-900 flex items-center justify-center transition-all">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

    </article>
  );
};
