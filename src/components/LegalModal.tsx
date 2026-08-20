import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">1. Information We Collect</h3>
          <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">2. How We Use Your Information</h3>
          <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">3. Will Your Information Be Shared With Anyone?</h3>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">4. Contact Us</h3>
          <p>If you have questions or comments about this notice, you may email us at capt.alfred@outlook.com.</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">1. Agreement to Terms</h3>
          <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Travel Sapien's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">3. Disclaimer</h3>
          <p>The materials on Travel Sapien's website are provided on an 'as is' basis. Travel Sapien makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">4. Limitations</h3>
          <p>In no event shall Travel Sapien or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Travel Sapien's website.</p>
        </div>
      )
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-freckle text-2xl text-slate-900 dark:text-white">
            {content[type].title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto overscroll-contain">
          {content[type].body}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
