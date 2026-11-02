/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FOUNDERS } from '../data/companyData';
import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';

export const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="py-24 lg:py-32 bg-[#FDFBF7] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">02</span>
              <div>
                <span className="label-caps text-[#77736C]">LEADERSHIP &bull; FOUNDING DIRECTORS</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#14263D] mt-1 font-normal">
                  Experienced Visionaries Behind IRA Promoters.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="label-caps text-[#C59B4E] block">INTEGRITY &bull; LEADERSHIP</span>
              <span className="text-xs font-mono text-[#77736C]">14+ YEARS COLLECTIVE SECTOR MASTERY</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {FOUNDERS.map((founder, index) => (
            <AnimatedSection key={founder.name} delay={index * 150}>
              <div className="bg-white border border-[#D9D2C6] p-8 lg:p-10 shadow-xs hover:border-[#C59B4E] transition-all flex flex-col justify-between h-full">
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between border-b border-[#D9D2C6] pb-6 mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#C59B4E] font-semibold block mb-1">
                        {founder.role}
                      </span>
                      <h3 className="font-serif-arch text-2xl sm:text-3xl text-[#14263D] font-normal">
                        {founder.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-[#77736C] bg-[#F8F5EE] border border-[#D9D2C6] px-2.5 py-1">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C59B4E]" />
                        <span>{founder.qualification}</span>
                      </span>
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center space-x-2 text-xs font-sans-arch text-[#14263D] font-medium mb-4 bg-[#F8F5EE] p-3 border-l-2 border-[#C59B4E]">
                    <Briefcase className="w-4 h-4 text-[#C59B4E] shrink-0" />
                    <span>{founder.experience}</span>
                  </div>

                  {/* Detailed Bio Narrative */}
                  <p className="font-sans-arch text-sm text-[#20252B] font-light leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                </div>

                {/* Specialties Chips */}
                <div className="pt-6 border-t border-[#D9D2C6]/60">
                  <div className="label-caps text-[#77736C] mb-2.5">CORE LEADERSHIP DOMAINS</div>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-sans-arch px-2.5 py-1 bg-[#F8F5EE] border border-[#D9D2C6] text-[#14263D] flex items-center space-x-1"
                      >
                        <CheckCircle className="w-3 h-3 text-[#C59B4E]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
