import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BRAND_PILLARS, MOCK_YOUTUBE_VIDEOS, MOCK_BLOG_POSTS } from '../data/mockData';
import { SEO } from './SEO';
import { Sparkles, X, Clock, Calendar, User, Share2, Youtube, AlertCircle, Lightbulb, DollarSign, ShieldAlert, Heart, MessageSquare, Send, Check, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';

interface BlogArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectRelatedPost: (post: BlogPost) => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  post,
  onClose,
  onSelectRelatedPost
}) => {
  if (!post) return null;

  const pillarInfo = BRAND_PILLARS.find(p => p.id === post.pillar);
  const relatedVideo = post.relatedVideoId 
    ? MOCK_YOUTUBE_VIDEOS.find(v => v.id === post.relatedVideoId)
    : null;

  const relatedPosts = MOCK_BLOG_POSTS
    .filter(p => p.id !== post.id && p.pillar === post.pillar)
    .slice(0, 2);

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAdvisory",
    "name": post.title,
    "description": post.excerpt,
    "headline": post.title,
    "abstract": post.excerpt,
    "image": [post.coverImage],
    "datePublished": new Date(post.publishedAt).toISOString(),
    "dateModified": new Date(post.publishedAt).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Travel Sapien"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Travel Sapien",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1506869640319-fea1a27536d1?auto=format&fit=crop&w=300&q=80"
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        type="article"
        image={post.coverImage}
        url={`https://travel-sapien.vercel.app/blog/${post.slug}`}
        schema={articleSchema}
      />
      
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto">
        
        {/* Sticky Header Action Bar */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${pillarInfo?.badgeBg} ${pillarInfo?.badgeText}`}>
              {pillarInfo?.emoji} {pillarInfo?.name}
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Content Body */}
        <article className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Article Header & Title */}
          <header className="space-y-4">
            <h1 className="font-freckle text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            {/* Author Meta Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 pb-4 border-b border-slate-100 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FFC300]"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white leading-tight">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 ml-auto">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Cover Hero Image */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-16/9 bg-slate-100 dark:bg-slate-950">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* AI Bot & Reader TL;DR / Key Takeaways Box */}
          <section aria-labelledby="tldr-heading" className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <h2 id="tldr-heading" className="text-sm m-0 p-0 font-bold">Key Takeaways (TL;DR)</h2>
            </div>
            <ul className="space-y-2 list-disc pl-5 text-emerald-900 dark:text-emerald-100 text-sm md:text-base leading-relaxed font-medium">
              <li>{post.excerpt}</li>
              {post.calloutBox?.content && <li>{post.calloutBox.content}</li>}
              <li>Detailed budget breakdown and family survival tips included below.</li>
            </ul>
          </section>

          {/* Callout Box if Present */}
          {post.calloutBox && (
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/60 text-slate-900 dark:text-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-freckle text-lg text-amber-900 dark:text-amber-300">
                {post.calloutBox.type === 'budget' && <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                {post.calloutBox.type === 'tip' && <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
                {post.calloutBox.type === 'warning' && <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />}
                {post.calloutBox.type === 'secret' && <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                <span>{post.calloutBox.title}</span>
              </div>
              <p className="text-sm leading-relaxed font-sans font-medium">
                {post.calloutBox.content}
              </p>
            </div>
          )}

          {/* Body Text Content */}
          <section className="space-y-6 text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-sans">
            {post.body.map((paragraph, index) => {
              // Convert pseudo headings to actual h2/h3 tags for bots if they start with bold/hash
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-freckle mt-8 mb-4 text-slate-900 dark:text-white">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-100">{paragraph.replace('### ', '')}</h3>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </section>

          {/* Related YouTube Vlog Box */}
          {relatedVideo && (
            <aside aria-label="Related YouTube Vlog" className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-4 h-4 text-[#D95D39]" />
                <span>Watch The Companion Vlog</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-48 aspect-video rounded-xl overflow-hidden shrink-0">
                  <img src={relatedVideo.thumbnail} alt={relatedVideo.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#FFC300] text-slate-900 flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-freckle text-xl text-white leading-snug">
                    {relatedVideo.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {relatedVideo.description}
                  </p>
                  <a
                    href={relatedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFC300] hover:underline pt-1"
                  >
                    <span>Watch Full Episode on YouTube</span>
                  </a>
                </div>
              </div>
            </aside>
          )}

          {/* Social Sharing Component */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
            <div className="font-freckle text-xl text-slate-900 dark:text-white">
              Share this guide
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors text-sm font-bold"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter / X</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4267B2]/10 hover:bg-[#4267B2]/20 text-[#4267B2] transition-colors text-sm font-bold"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors text-sm font-bold"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <LinkIcon className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Author Bio Footer */}
          <footer className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#FFC300] shrink-0"
            />
            <div>
              <div className="font-freckle text-lg text-slate-900 dark:text-white">
                Written by {post.author.name}
              </div>
              <div className="text-xs font-bold text-[#D95D39] mb-1">
                {post.author.role}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </footer>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-freckle text-2xl text-slate-900 dark:text-white">
                Related {pillarInfo?.name} Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedPost(rel)}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#FFC300] cursor-pointer transition-all space-y-2 group"
                  >
                    <div className="text-xs text-amber-600 dark:text-amber-400 font-bold">{rel.readTime}</div>
                    <h4 className="font-freckle text-base text-slate-900 dark:text-white group-hover:text-[#D95D39] line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

        </article>

      </div>

    </div>
  );
};
