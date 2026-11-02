/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { METRIC_FACTS } from '../data/residencesData';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const ChapterFactsheet: React.FC = () => {
  return (
    <section id="factsheet" className="py-24 lg:py-36 bg-[#F4F0E8] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">05</span>
            <div>
              <span className="label-caps text-[#77736C]">THE SPECIFICATIONS &bull; CHAPTER V</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#14263D] mt-2 font-normal">
                Structural Factsheet &amp; Standards.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-left md:text-right">
            <span className="label-caps text-[#A9824C] block">CERTIFIED ACCREDITATION</span>
            <span className="text-xs font-mono text-[#77736C]">ISO 9001 &bull; IGBC PLATINUM &bull; RERA COMPLIANT</span>
          </div>
        </div>

        {/* Editorial Factsheet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRIC_FACTS.map((fact) => (
            <div
              key={fact.numeral}
              className="bg-[#FBF9F4] border border-[#D9D2C6] p-8 flex flex-col justify-between hover:border-[#A9824C] transition-all group"
            >
              <div>
                {/* Oversized Bodoni Numeral */}
                <div className="flex items-center justify-between border-b border-[#D9D2C6] pb-4 mb-6">
                  <span className="font-serif-arch text-4xl lg:text-5xl text-[#14263D] group-hover:text-[#A9824C] transition-colors">
                    {fact.numeral}
                  </span>
                  <span className="w-2 h-2 bg-[#A9824C]/40 group-hover:bg-[#A9824C] transition-colors"></span>
                </div>

                {/* Big Stat Value */}
                <div className="font-serif-arch text-4xl lg:text-5xl text-[#14263D] font-normal mb-2">
                  {fact.value}
                </div>

                {/* Metric Name */}
                <div className="font-sans-arch text-sm uppercase tracking-[0.12em] font-semibold text-[#14263D] mb-4">
                  {fact.metric}
                </div>

                {/* Annotation Text */}
                <p className="text-xs font-sans-arch text-[#77736C] font-light leading-relaxed">
                  {fact.annotation}
                </p>
              </div>

              {/* Bottom Subtle hairline datum */}
              <div className="pt-6 mt-6 border-t border-[#D9D2C6]/50 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#77736C]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A9824C]" />
                <span>Independently Audited</span>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Longevity Accordance Callout */}
        <div className="mt-16 bg-[#14263D] text-[#FBF9F4] border border-[#A9824C]/40 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="label-caps text-[#A9824C]">GENERATIONAL WARRANTY PROTOCOL</span>
            <h3 className="font-serif-arch text-2xl lg:text-3xl font-normal mt-2 mb-3">
              Monolithic Structural Guarantee For 40 Years.
            </h3>
            <p className="text-sm text-[#cbc6bd] font-light leading-relaxed">
              Every foundation footing, tensioned concrete slab, and external travertine envelope constructed by ira Promoters carries our unbroken 40-year structural integrity covenant, transferable across family generations.
            </p>
          </div>

          <div className="border border-[#A9824C]/40 bg-[#1A304D] px-8 py-6 text-center shrink-0">
            <div className="label-caps text-[#A9824C] mb-1">COVENANT SEAL</div>
            <div className="font-serif-arch text-2xl text-[#FBF9F4]">IRA COVENANT</div>
            <div className="text-[10px] font-mono text-[#cbc6bd] mt-1">NO. IRA-ENG-9042</div>
          </div>
        </div>
      </div>
    </section>
  );
};
