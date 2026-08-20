import React, { useState, useMemo } from 'react';
import { BlogPost, PillarType } from '../types';
import { CHANNEL_STATS } from '../data/mockData';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { BlogCard } from './BlogCard';
import { PillarFilter } from './PillarFilter';
import { Search, Sparkles, Filter, SlidersHorizontal, Loader2 } from 'lucide-react';

interface BlogGridProps {
  selectedPillar: PillarType | null;
  setSelectedPillar: (pillar: PillarType | null) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({
  selectedPillar,
  setSelectedPillar,
  onSelectPost
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  const { posts, loading, usingMock } = useBlogPosts();

  // Filtered & Sorted Posts
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Pillar filter
    if (selectedPillar) {
      result = result.filter(p => p.pillar === selectedPillar);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    // Sorting
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedPillar, searchQuery, sortBy]);

  return (
    <section id="blog" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D95D39]" />
            <span>Travel Sapien Publishing</span>
          </div>
          <h2 className="font-freckle text-3xl sm:text-5xl text-slate-900 dark:text-white">
            Travel Guides & Budget Breakdown Journal
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
            Exhaustive, transparent logs, flight hacks, and family survival tactics from {CHANNEL_STATS.countriesVisited}+ countries.
          </p>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
          >
            <option value="newest">Sort by: Newest First</option>
            <option value="popular">Sort by: Most Popular</option>
          </select>
        </div>
      </div>

      {/* Search Bar & Pillar Filters */}
      <div className="space-y-4 bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides by country, budget, packing, flights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC300] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Pillar Filter Buttons Bar */}
        <PillarFilter
          selectedPillar={selectedPillar}
          onSelectPillar={setSelectedPillar}
          showDescriptions={true}
        />

      </div>

      {/* Grid of Cards */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onSelectPost={onSelectPost}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="text-4xl">🔍</div>
          <h3 className="font-freckle text-2xl text-slate-900 dark:text-white">
            No guides match your search criteria
          </h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Try adjusting your search terms or clearing the pillar filter to discover more articles.
          </p>
          <button
            onClick={() => {
              setSelectedPillar(null);
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#FFC300] text-slate-900 font-bold text-sm shadow-sm hover:bg-[#e0ab00] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
};
