/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESIDENCES } from '../data/residencesData';
import {
  Residence,
  filterResidences,
  formatArea,
  formatCurrency,
} from '../utils/architecture';
import { ArrowUpRight, BedDouble, Bath, Maximize2, Shield, Search } from 'lucide-react';

interface ChapterResidencesProps {
  unit: 'sqft' | 'sqm';
  currency: 'INR' | 'USD' | 'EUR';
  onSelectResidence: (residence: Residence) => void;
  onInquireResidence: (residenceId: string) => void;
}

export const ChapterResidences: React.FC<ChapterResidencesProps> = ({
  unit,
  currency,
  onSelectResidence,
  onInquireResidence,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { label: 'ALL RESIDENCES', value: 'ALL' },
    { label: 'ESTATE PAVILIONS', value: 'Estate Pavilion' },
    { label: 'SKY RESIDENCES', value: 'Sky Residence' },
    { label: 'COURTYARD VILLAS', value: 'Courtyard Villa' },
  ];

  const filteredResidences = filterResidences(RESIDENCES, selectedCategory, searchQuery);

  return (
    <section id="residences" className="py-24 lg:py-36 bg-[#F4F0E8] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-12">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">02</span>
            <div>
              <span className="label-caps text-[#77736C]">THE PORTFOLIO &bull; CHAPTER II</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#14263D] mt-2 font-normal">
                Curated Landmark Residences.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-sm font-sans-arch text-[#77736C] max-w-md">
              Limited collection of bespoke architectural monoliths. Each private commission is 
              conceived as a permanent sanctuary of acoustic peace and harmonic proportions.
            </p>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-6 border-b border-[#D9D2C6]/60">
          {/* Category Filter Pills (Sharp Edge) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-5 py-2.5 font-sans-arch text-[11px] uppercase tracking-[0.16em] transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#14263D] text-[#FBF9F4] border-[#14263D]'
                      : 'bg-[#FBF9F4] text-[#14263D] border-[#D9D2C6] hover:border-[#A9824C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="w-full lg:w-72 relative">
            <input
              type="text"
              placeholder="Search by stone, typology, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FBF9F4] border border-[#D9D2C6] px-4 py-2.5 pl-10 text-xs font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C] transition-colors"
            />
            <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Residences Grid */}
        {filteredResidences.length === 0 ? (
          <div className="bg-[#FBF9F4] border border-[#D9D2C6] p-16 text-center">
            <p className="font-serif-arch text-2xl text-[#14263D] mb-2">No matching residences found</p>
            <p className="text-sm text-[#77736C] mb-6">
              Adjust your search keywords or explore all available estates.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="bg-[#14263D] text-[#FBF9F4] px-6 py-3 uppercase text-xs tracking-widest cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {filteredResidences.map((residence) => (
              <article
                key={residence.id}
                className="bg-[#FBF9F4] border border-[#D9D2C6] group hover:border-[#A9824C] transition-all flex flex-col justify-between"
              >
                {/* Upper Frame: Photography (100% flush, 0 padding) */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#14263D]">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Typology Tag */}
                  <div className="absolute top-4 left-4 bg-[#14263D]/90 backdrop-blur-sm border border-[#A9824C]/40 px-3 py-1">
                    <span className="label-caps text-[#FBF9F4]">{residence.typology}</span>
                  </div>

                  {/* Price Tag in user currency */}
                  <div className="absolute bottom-4 right-4 bg-[#FBF9F4]/95 backdrop-blur-sm border border-[#D9D2C6] px-4 py-1.5 shadow-sm">
                    <span className="font-serif-arch text-base font-semibold text-[#14263D]">
                      {formatCurrency(residence.priceINR, currency)}
                    </span>
                  </div>
                </div>

                {/* Museum Placard Text Metadata Below */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Completion */}
                    <div className="flex items-center justify-between text-xs text-[#77736C] mb-2 font-mono uppercase tracking-widest">
                      <span>{residence.location}</span>
                      <span>COMPLETION {residence.completionYear}</span>
                    </div>

                    {/* Residence Name & Subtitle */}
                    <h3 className="font-serif-arch text-2xl sm:text-3xl text-[#14263D] font-normal mb-2">
                      {residence.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#A9824C] font-semibold mb-4">
                      {residence.subtitle}
                    </p>

                    {/* Narrative Excerpt */}
                    <p className="text-sm font-sans-arch text-[#20252B] font-light leading-relaxed mb-6 line-clamp-3">
                      {residence.narrative}
                    </p>

                    {/* Key Architectural Specifications Matrix */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#D9D2C6] mb-6 text-center">
                      <div>
                        <div className="flex items-center justify-center space-x-1 text-[#77736C] text-xs mb-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#A9824C]" />
                          <span className="uppercase tracking-widest text-[10px]">LIVING AREA</span>
                        </div>
                        <div className="font-serif-arch text-base font-medium text-[#14263D]">
                          {formatArea(residence.sqft, unit)}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-center space-x-1 text-[#77736C] text-xs mb-1">
                          <BedDouble className="w-3.5 h-3.5 text-[#A9824C]" />
                          <span className="uppercase tracking-widest text-[10px]">SUITES</span>
                        </div>
                        <div className="font-serif-arch text-base font-medium text-[#14263D]">
                          {residence.bedrooms} Bed / {residence.bathrooms} Bath
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-center space-x-1 text-[#77736C] text-xs mb-1">
                          <Shield className="w-3.5 h-3.5 text-[#A9824C]" />
                          <span className="uppercase tracking-widest text-[10px]">CEILING</span>
                        </div>
                        <div className="font-serif-arch text-base font-medium text-[#14263D]">
                          {residence.ceilingHeight}
                        </div>
                      </div>
                    </div>

                    {/* Material Accents */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {residence.materials.map((mat) => (
                        <span
                          key={mat}
                          className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[#F4F0E8] border border-[#D9D2C6] text-[#77736C]"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#D9D2C6]/60">
                    <button
                      onClick={() => onSelectResidence(residence)}
                      className="flex-1 bg-[#14263D] text-[#FBF9F4] py-3.5 px-4 font-sans-arch text-[11px] font-medium uppercase tracking-[0.16em] hover:bg-[#1A304D] transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Examine Archival Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A9824C]" />
                    </button>

                    <button
                      onClick={() => onInquireResidence(residence.id)}
                      className="border border-[#14263D] text-[#14263D] py-3.5 px-5 font-sans-arch text-[11px] font-medium uppercase tracking-[0.16em] hover:bg-[#14263D] hover:text-[#FBF9F4] transition-colors cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
