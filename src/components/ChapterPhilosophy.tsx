/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/residencesData';
import { Check, Compass, Layers, ShieldCheck } from 'lucide-react';

export const ChapterPhilosophy: React.FC = () => {
  const [activePrincipleIndex, setActivePrincipleIndex] = useState(0);
  const activePrinciple = PHILOSOPHY_PRINCIPLES[activePrincipleIndex];

  return (
    <section id="philosophy" className="py-24 lg:py-36 bg-[#Fdf9f1] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16 lg:mb-24">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">01</span>
            <div>
              <span className="label-caps text-[#77736C]">THE MONOGRAPH &bull; CHAPTER I</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#14263D] mt-2 font-normal">
                Structural Craftsmanship &amp; Architectural Serenity.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <span className="label-caps text-[#A9824C] block">CREED OF FORM</span>
            <span className="font-serif-arch text-xl text-[#14263D] italic">
              &ldquo;Happiness in every nook &amp; corner&rdquo;
            </span>
          </div>
        </div>

        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 columns): Philosophical Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 font-sans-arch text-[#20252B] leading-relaxed">
              <p className="text-lg lg:text-xl font-light text-[#14263D] leading-relaxed">
                ira Promoters was founded on a singular conviction: that a residence is not 
                merely shelter, but an enduring sanctuary that shapes the mind, calms the senses, 
                and houses life&apos;s quietest joys.
              </p>
              <p className="text-sm lg:text-base font-light text-[#77736C]">
                We reject speculative mass-housing and temporary cosmetic finishes. 
                Instead, our practice treats every site as an archival canvas—integrating 
                geological stone, calculated celestial daylight pathways, and acoustic mass 
                to ensure that privacy is absolute and structural integrity lasts for centuries.
              </p>
            </div>

            {/* Principles Selector Tabs */}
            <div className="border border-[#D9D2C6] bg-[#FBF9F4] p-2 space-y-1">
              <div className="px-4 py-2 border-b border-[#D9D2C6]/50">
                <span className="label-caps text-[#77736C]">FOUR FOUNDATIONAL PILLARS</span>
              </div>
              {PHILOSOPHY_PRINCIPLES.map((principle, index) => {
                const isActive = activePrincipleIndex === index;
                return (
                  <button
                    key={principle.number}
                    onClick={() => setActivePrincipleIndex(index)}
                    className={`w-full text-left p-4 flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#14263D] text-[#FBF9F4]'
                        : 'hover:bg-[#F4F0E8] text-[#14263D]'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`font-mono text-xs ${
                          isActive ? 'text-[#A9824C]' : 'text-[#77736C]'
                        }`}
                      >
                        {principle.number}
                      </span>
                      <span className="font-sans-arch text-sm uppercase tracking-[0.14em] font-medium">
                        {principle.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 bg-[#A9824C]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Detail Box */}
            <div className="border-l-2 border-[#A9824C] pl-6 py-2 bg-[#F4F0E8]/50">
              <div className="text-xs uppercase tracking-widest text-[#A9824C] font-semibold mb-1">
                {activePrinciple.subtitle}
              </div>
              <p className="text-sm font-sans-arch text-[#20252B] leading-relaxed">
                {activePrinciple.description}
              </p>
            </div>
          </div>

          {/* Right Column (7 columns): Architectural Photographic Juxtaposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative border border-[#D9D2C6] bg-[#FBF9F4] p-3 shadow-md">
              {/* Main Architectural Visual */}
              <div className="overflow-hidden aspect-[16/10] bg-[#14263D] relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                  alt="Interior Architectural Salon with Natural Plaster and Filtered Light"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#14263D]/90 backdrop-blur-sm border border-[#A9824C]/40 px-3 py-1">
                  <span className="label-caps text-[#FBF9F4]">PLATE NO. 01 &bull; SALON VOLUMETRICS</span>
                </div>
              </div>

              {/* Museum Placard Details Below */}
              <div className="p-6 bg-[#FBF9F4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D9D2C6]">
                <div>
                  <h4 className="font-serif-arch text-xl text-[#14263D]">
                    The Living Courtyard &amp; Volumetric Plaster
                  </h4>
                  <p className="text-xs text-[#77736C] font-light mt-1">
                    Continuous acoustic lime plaster ceiling with floor-to-ceiling recessed bronze framing.
                  </p>
                </div>
                <div className="text-right sm:border-l sm:border-[#D9D2C6] sm:pl-6">
                  <div className="text-[10px] uppercase tracking-widest text-[#77736C]">
                    REVERBERATION TIME
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#14263D]">
                    RT60 &lt; 0.42s
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Paired Architectural Vignettes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#D9D2C6] bg-[#FBF9F4] p-4 flex space-x-4 items-center">
                <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#D9D2C6]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80"
                    alt="Honed Stone Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="label-caps text-[#A9824C]">TACTILE INTEGRITY</div>
                  <div className="font-serif-arch text-base text-[#14263D]">Vein-Cut Travertine</div>
                  <div className="text-xs text-[#77736C]">Naturally cool to the step</div>
                </div>
              </div>

              <div className="border border-[#D9D2C6] bg-[#FBF9F4] p-4 flex space-x-4 items-center">
                <div className="w-16 h-16 shrink-0 overflow-hidden border border-[#D9D2C6]">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80"
                    alt="Structural Plan Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="label-caps text-[#A9824C]">ENGINEERED PRECISION</div>
                  <div className="font-serif-arch text-base text-[#14263D]">Post-Tensioned Slabs</div>
                  <div className="text-xs text-[#77736C]">Spans up to 14m column-free</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
