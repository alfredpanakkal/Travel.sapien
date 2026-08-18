import React, { useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { BlogPost, PillarType } from './types';
import { MOCK_BLOG_POSTS } from './data/mockData';
import { Sparkles, BookOpen, Video } from 'lucide-react';

const BlogGrid = lazy(() => import('./components/BlogGrid.tsx').then(module => ({ default: module.BlogGrid })));
const BlogArticleModal = lazy(() => import('./components/BlogArticleModal.tsx').then(module => ({ default: module.BlogArticleModal })));
const YouTubeHub = lazy(() => import('./components/YouTubeHub.tsx').then(module => ({ default: module.YouTubeHub })));
const ContactNewsletter = lazy(() => import('./components/ContactNewsletter.tsx').then(module => ({ default: module.ContactNewsletter })));


export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPillar, setSelectedPillar] = useState<PillarType | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Header & Sticky Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedPillar={selectedPillar}
        setSelectedPillar={setSelectedPillar}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        
        {/* HOME VIEW */}
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Hero Banner Section */}
            <HeroSection
              setActiveTab={setActiveTab}
              setSelectedPillar={setSelectedPillar}
            />

            {/* Featured Blog Posts Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D95D39]">
                    <BookOpen className="w-4 h-4" /> Latest Published Guides
                  </div>
                  <h2 className="font-freckle text-3xl text-slate-900 dark:text-white mt-0.5">
                    Itemized Cost Breakdowns & Travel Hacks
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100 dark:bg-slate-800 hover:bg-[#FFC300] text-slate-900 dark:text-amber-300 dark:hover:text-slate-900 font-bold text-xs transition-colors self-start sm:self-auto"
                >
                  <span>View All 85+ Guides</span>
                  <span>➔</span>
                </button>
              </div>

              {/* Blog Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_BLOG_POSTS.slice(0, 3).map((post) => (
                  <div key={post.id} onClick={() => handleSelectPost(post)}>
                    {/* Render BlogCard */}
                    <div className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1">
                      <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img src={post.coverImage} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#FFC300] text-slate-900">
                          {post.pillar.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="p-6 space-y-2">
                        <div className="text-xs text-slate-400 font-semibold">{post.readTime} • {post.publishedAt}</div>
                        <h3 className="font-freckle text-xl text-slate-900 dark:text-white group-hover:text-[#D95D39] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Hub Quick Showcase */}
            <div className="bg-white/40 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800 transition-colors">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95D39] dark:text-amber-400">
                      <Video className="w-4 h-4 text-[#D95D39]" /> YouTube Channel
                    </div>
                    <h2 className="font-freckle text-3xl sm:text-4xl text-slate-900 dark:text-white mt-1">
                      Sunday Vlogs & Daily Shorts
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('videos');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#c24f2e] text-white font-bold text-xs transition-colors"
                  >
                    Explore YouTube Hub ➔
                  </button>
                </div>

                <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-500">Loading videos...</div>}>
                  <YouTubeHub
                    selectedPillar={selectedPillar}
                    setSelectedPillar={setSelectedPillar}
                    onNavigateToBlog={() => setActiveTab('blog')}
                  />
                </Suspense>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <Suspense fallback={<div className="h-64" />}>
              <ContactNewsletter />
            </Suspense>

          </div>
        )}

        {/* BLOG VIEW */}
        {activeTab === 'blog' && (
          <div className="animate-fade-in">
            <Suspense fallback={<div className="h-screen flex items-center justify-center text-slate-500">Loading blog...</div>}>
              <BlogGrid
                selectedPillar={selectedPillar}
                setSelectedPillar={setSelectedPillar}
                onSelectPost={handleSelectPost}
              />
            </Suspense>
          </div>
        )}

        {/* YOUTUBE VIDEOS VIEW */}
        {activeTab === 'videos' && (
          <div className="animate-fade-in">
            <Suspense fallback={<div className="h-screen flex items-center justify-center text-slate-500">Loading videos...</div>}>
              <YouTubeHub
                selectedPillar={selectedPillar}
                setSelectedPillar={setSelectedPillar}
                onNavigateToBlog={() => setActiveTab('blog')}
              />
            </Suspense>
          </div>
        )}

      </main>

      {/* Single Blog Article Full Reader Modal */}
      <Suspense fallback={null}>
        {selectedPost && (
          <BlogArticleModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onSelectRelatedPost={handleSelectPost}
          />
        )}
      </Suspense>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedPillar={setSelectedPillar}
      />

    </div>
  );
}
