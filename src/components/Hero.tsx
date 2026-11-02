/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { buildWhatsAppLink } from '../utils/architecture';
import { AnimatedSection } from './AnimatedSection';
import {
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenSiteVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenSiteVisit,
}) => {
  const whatsappUrl = buildWhatsAppLink(
    COMPANY_DETAILS.whatsappNumber,
    'Hello IRA Promoters, I would like to explore your open plots, farmland, and apartment projects in Visakhapatnam.'
  );

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#FDFBF7] border-b border-[#D9D2C6]">
      {/* Background Architectural Canvas Layer - Rich opacity & seamless gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="IRA Promoters Modern Layout and Properties"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Seamless full-width gradient: Soft contrast on text side, rich visibility on house side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/75 to-[#FDFBF7]/30"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-16 pt-12 lg:pt-20 pb-12 flex-1 flex flex-col justify-between">
        {/* Center Main Editorial Hero Lockup */}
        <AnimatedSection delay={150} className="max-w-4xl my-auto py-8 lg:py-12">
          {/* Tagline callout with region info */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-[#C59B4E]"></span>
              <span className="label-caps text-[#C59B4E] font-bold">
                {COMPANY_DETAILS.tagline}
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-sans-arch text-[#77736C]">
              <span>&bull;</span>
              <span className="font-mono text-[11px] text-[#14263D]">VISAKHAPATNAM &bull; VIZIANAGARAM &bull; SRIKAKULAM</span>
            </div>
          </div>

          {/* Bodoni Display Headline */}
          <h1 className="font-serif-arch text-[40px] sm:text-[58px] lg:text-[76px] font-normal leading-[1.08] text-[#14263D] tracking-[-0.02em] mb-6">
            Where Trust &amp; <br />
            <span className="italic font-normal text-[#14263D]">Transparency</span> Shape Your Home.
          </h1>

          {/* Positioning Narrative */}
          <p className="font-sans-arch text-[#20252B] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-8">
            IRA Promoters stands apart by putting trust, transparency, and legal verification before every property recommendation. We focus on carefully selected, Vaastu-compliant open plots, residential layouts, and flats in strategic high-growth corridors.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
            <a
              href="#projects"
              onClick={onExploreProjects}
              className="bg-[#14263D] text-[#FDFBF7] font-sans-arch text-xs font-semibold uppercase tracking-[0.16em] px-7 py-4 border border-[#14263D] hover:bg-[#1A304D] hover:border-[#C59B4E] transition-all flex items-center space-x-3 cursor-pointer shadow-md group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-[#C59B4E] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-sans-arch text-xs font-semibold uppercase tracking-[0.16em] px-6 py-4 flex items-center space-x-2.5 hover:bg-[#20bd5a] transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: {COMPANY_DETAILS.whatsappNumber}</span>
            </a>

            <button
              onClick={onOpenSiteVisit}
              className="bg-white text-[#14263D] font-sans-arch text-xs font-semibold uppercase tracking-[0.16em] px-6 py-4 border border-[#D9D2C6] hover:border-[#14263D] hover:bg-[#F8F5EE] transition-all flex items-center space-x-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C59B4E]" />
              <span>Schedule Free Site Visit</span>
            </button>
          </div>

          {/* Quick Call Direct */}
          <div className="flex items-center space-x-2 text-xs font-sans-arch text-[#77736C]">
            <Phone className="w-4 h-4 text-[#C59B4E]" />
            <span>Need immediate guidance? Call our office directly:</span>
            <a
              href={`tel:${COMPANY_DETAILS.phone1}`}
              className="font-mono font-semibold text-[#14263D] hover:text-[#C59B4E] underline"
            >
              +91 {COMPANY_DETAILS.phone1}
            </a>
            <span>/</span>
            <a
              href={`tel:${COMPANY_DETAILS.phone2}`}
              className="font-mono font-semibold text-[#14263D] hover:text-[#C59B4E] underline"
            >
              +91 {COMPANY_DETAILS.phone2}
            </a>
          </div>
        </AnimatedSection>

        {/* Bottom Feature Fact Bar */}
        <AnimatedSection delay={250}>
          <div className="border-t border-[#D9D2C6] grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-xs">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736C] mb-1 font-semibold">
                LEGAL VERIFICATION
              </div>
              <div className="font-serif-arch text-lg lg:text-xl text-[#14263D] font-medium">
                100% Clear Title
              </div>
              <div className="text-xs text-[#77736C] font-light mt-0.5">30+ Years link documents verified</div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736C] mb-1 font-semibold">
                VAASTU COMPLIANCE
              </div>
              <div className="font-serif-arch text-lg lg:text-xl text-[#14263D] font-medium">
                100% Vaastu Verified
              </div>
              <div className="text-xs text-[#77736C] font-light mt-0.5">East/North-facing alignments</div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736C] mb-1 font-semibold">
                STRATEGIC CORRIDORS
              </div>
              <div className="font-serif-arch text-lg lg:text-xl text-[#14263D] font-medium">
                High Capital Growth
              </div>
              <div className="text-xs text-[#77736C] font-light mt-0.5">Anandapuram &amp; Bhogapuram Belt</div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736C] mb-1 font-semibold">
                EXPERIENCE
              </div>
              <div className="font-serif-arch text-lg lg:text-xl text-[#14263D] font-medium">
                3+ Years Operations
              </div>
              <div className="text-xs text-[#77736C] font-light mt-0.5">Multiple successful layouts delivered</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
