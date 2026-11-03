/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#C59B4E] via-[#e5be7a] to-[#C59B4E] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(197,155,78,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

interface ScrollToTopButtonProps {
  onScrollTop?: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onScrollTop }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const handleClick = () => {
    if (onScrollTop) {
      onScrollTop();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top of page"
      className={`fixed bottom-20 sm:bottom-24 right-6 z-40 p-2.5 bg-[#14263D] text-[#C59B4E] border border-[#C59B4E] shadow-xl hover:bg-[#1A304D] hover:text-white transition-all duration-300 cursor-pointer rounded-lg ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

interface PageFadeOverlayProps {
  isFading: boolean;
  targetName?: string;
}

export const PageFadeOverlay: React.FC<PageFadeOverlayProps> = ({ isFading, targetName }) => {
  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 flex items-center justify-center ${
        isFading ? 'opacity-100 bg-[#FDFBF7]/85 backdrop-blur-[2px]' : 'opacity-0'
      }`}
    >
      {targetName && isFading && (
        <div className="bg-[#14263D] text-white px-6 py-3 border border-[#C59B4E] shadow-2xl flex items-center space-x-3 transition-transform transform scale-100 animate-pulse">
          <div className="w-2.5 h-2.5 bg-[#C59B4E] animate-ping" />
          <span className="font-sans-arch text-xs uppercase tracking-[0.2em] font-semibold text-[#FDFBF7]">
            {targetName}
          </span>
        </div>
      )}
    </div>
  );
};

