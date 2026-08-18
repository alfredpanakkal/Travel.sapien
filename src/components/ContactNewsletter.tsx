import React, { useState } from 'react';
import { CheckCircle2, Send, Sparkles, ShieldCheck, Download } from 'lucide-react';

export const ContactNewsletter: React.FC = () => {
  // Newsletter Form State
  const [newsEmail, setNewsEmail] = useState('');
  const [newsName, setNewsName] = useState('');
  const [newsSubscribed, setNewsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    setNewsSubscribed(true);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Newsletter Signup Box (Brevo Integration Flow) */}
      <div className="bg-gradient-to-r from-[#FFC300] via-amber-400 to-[#D95D39] text-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-[#FFC300] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Free Weekly Sapien Intel
            </div>

            <h2 className="font-freckle text-3xl sm:text-5xl text-slate-900 leading-tight">
              Get Our Free 2026 Family Budget Spreadsheets & Glitch Alerts!
            </h2>

            <p className="text-slate-900/90 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-xl">
              Join 45,000+ travel lovers. Every Tuesday we send 1 flight glitch deal, 1 itemized country expense sheet, and 1 uncrowded secret destination. No spam ever.
            </p>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-900/80 pt-2">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Unsubscribe anytime</span>
              <span className="flex items-center gap-1.5"><Download className="w-4 h-4" /> Instant PDF Download</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
            {!newsSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alfred"
                    value={newsName}
                    onChange={(e) => setNewsName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#D95D39] hover:bg-[#c24f2e] text-white font-extrabold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Free Guides & Spreadsheets</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-freckle text-2xl text-slate-900 dark:text-white">
                  Welcome to the Crew! 🎉
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  We've sent your free <strong>Top 50 Travel Hacks & Expense Template</strong> to {newsEmail}.
                </p>
                <button
                  onClick={() => setNewsSubscribed(false)}
                  className="text-xs text-[#D95D39] font-bold hover:underline"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
