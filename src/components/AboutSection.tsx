import React from 'react';
import { MOCK_TEAM, CHANNEL_STATS } from '../data/mockData';
import { Heart, Globe, Shield, Sparkles, MapPin, Compass, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Brand Story Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFC300]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC300]/20 border border-[#FFC300]/40 text-[#FFC300] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#D95D39]" />
            <span>The Travel Sapien Mission</span>
          </div>

          <h1 className="font-freckle text-4xl sm:text-6xl text-white leading-tight">
            Proving Full-Time Nomad Family Travel is Possible & Affordable.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            Founded in 2019, <strong>Travel Sapien</strong> began with a simple question: <em>"Can a family explore the world slowly without relying on massive wealth or corporate sponsors?"</em> {CHANNEL_STATS.countriesVisited} countries later, our answer is an enthusiastic <strong>YES</strong>.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
            We publish 100% real receipts, exact spreadsheet budget breakdowns, toddler flight survival rules, and uncrowded hidden gems. No hidden sponsorship fluff—just authentic travel intelligence.
          </p>

          <div className="pt-2 flex flex-wrap gap-6 text-xs text-amber-300 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> {CHANNEL_STATS.countriesVisited} Countries Visited</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> 100% Real Receipts</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /> {CHANNEL_STATS.subscribers}+ Community</span>
          </div>
        </div>

      </div>

      {/* Creator Family Team Showcase */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-freckle text-3xl text-slate-900 dark:text-white">
              Meet The Sapien Family
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              The faces, storytellers, and testers behind Travel Sapien.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-md space-y-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square rounded-2xl object-cover shadow-sm border-2 border-[#FFC300]"
              />
              <div className="space-y-1">
                <h3 className="font-freckle text-2xl text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-[#D95D39]">
                  {member.role}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {member.bio}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Favorite Spots:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.favoriteDestinations.map((spot, i) => (
                    <span key={i} className="px-2 py-0.5 bg-amber-100 dark:bg-slate-700 text-slate-800 dark:text-amber-300 text-[11px] rounded-md font-medium">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
