/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GALLERY_UPDATES } from '../data/companyData';
import { AnimatedSection } from './AnimatedSection';
import { Camera, Calendar, MapPin, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FDFBF7] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">04</span>
              <div>
                <span className="label-caps text-[#77736C]">SITE UPDATES &bull; TRANSPARENCY IN ACTION</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#0A192F] mt-1 font-bold">
                  Gallery &amp; Ground Progress.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="label-caps text-[#C59B4E] block">GROUND REALITY</span>
              <span className="text-xs font-mono text-[#77736C]">GENUINE SITE WORK &amp; REGULAR DISPATCHES</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_UPDATES.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="bg-white border border-[#D9D2C6] hover:border-[#C59B4E] transition-all group overflow-hidden flex flex-col justify-between h-full shadow-xs rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#14263D]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#14263D]/90 text-white px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider border border-[#C59B4E]/40">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1 text-[11px] font-mono text-[#77736C] mb-1">
                      <MapPin className="w-3 h-3 text-[#C59B4E]" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h4 className="font-serif-arch text-sm sm:text-base text-[#14263D] font-normal leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#D9D2C6]/50 flex items-center justify-between text-[11px] text-[#77736C] font-mono">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#C59B4E]" />
                      <span>{item.date}</span>
                    </span>
                    <span className="text-[#C59B4E] font-medium">Verified Ground Work</span>
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
