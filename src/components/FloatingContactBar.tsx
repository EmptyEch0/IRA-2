/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { buildWhatsAppLink } from '../utils/architecture';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface FloatingContactBarProps {
  onOpenSiteVisit: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenSiteVisit }) => {
  const whatsappUrl = buildWhatsAppLink(
    COMPANY_DETAILS.whatsappNumber,
    'Hello IRA Promoters, I am enquiring from your website about current open plots and ventures.'
  );

  return (
    <>
      {/* Floating Bottom Action Bar for Mobile Viewports */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#14263D] border-t border-[#C59B4E] p-2.5 flex items-center justify-around sm:hidden shadow-2xl">
        <a
          href={`tel:${COMPANY_DETAILS.phone1}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-white text-[#14263D] text-[11px] font-bold uppercase tracking-wider mx-1 border border-white"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59B4E]" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-wider mx-1"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenSiteVisit}
          className="flex-1 flex items-center justify-center space-x-1 py-2.5 px-1 bg-[#C59B4E] text-[#14263D] text-[10px] font-bold uppercase tracking-wider mx-1"
        >
          <Calendar className="w-3 h-3" />
          <span>Site Visit</span>
        </button>
      </div>

      {/* Floating Quick Action Badge for Desktop (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col space-y-3 items-end">
        <button
          onClick={onOpenSiteVisit}
          className="bg-[#14263D] text-[#FDFBF7] border border-[#C59B4E] px-4 py-2.5 text-xs uppercase tracking-wider font-semibold shadow-xl hover:bg-[#1A304D] flex items-center space-x-2 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#C59B4E]" />
          <span>Book Site Visit</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 shadow-2xl flex items-center space-x-2.5 transition-all cursor-pointer border border-white/30"
          aria-label="Chat on WhatsApp with IRA Promoters"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs uppercase tracking-wider font-bold pr-1">WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
};
