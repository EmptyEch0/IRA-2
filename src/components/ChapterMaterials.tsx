/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MATERIALS } from '../data/residencesData';
import { Layers, ShieldCheck, Sparkles, MapPin, Award } from 'lucide-react';

export const ChapterMaterials: React.FC = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>(MATERIALS[0].id);
  const currentMaterial =
    MATERIALS.find((m) => m.id === selectedMaterialId) || MATERIALS[0];

  return (
    <section id="materials" className="py-24 lg:py-36 bg-[#14263D] text-[#FBF9F4] border-b border-[#A9824C]/30 relative overflow-hidden">
      {/* Subtle fine lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(#A9824C_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#A9824C]/30 pb-8 mb-16">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">03</span>
            <div>
              <span className="label-caps text-[#A9824C]">ANATOMY &bull; CHAPTER III</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#FBF9F4] mt-2 font-normal">
                Architectural Anatomy &amp; Material Truth.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0 text-left md:text-right max-w-sm">
            <p className="text-sm font-sans-arch text-[#cbc6bd] font-light">
              We build exclusively with raw geological minerals, unlacquered metals, and dense slow-grown hardwoods that celebrate time rather than fear it.
            </p>
          </div>
        </div>

        {/* Material Selector Nav (Sharp rectangular tabs with gold hairline active indicator) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {MATERIALS.map((mat) => {
            const isSelected = mat.id === selectedMaterialId;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterialId(mat.id)}
                className={`p-4 text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#1A304D] border-[#A9824C] text-[#FBF9F4]'
                    : 'bg-[#14263D] border-[#A9824C]/20 text-[#cbc6bd] hover:border-[#A9824C]/50 hover:text-white'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#A9824C]"></span>
                )}
                <div className="text-[10px] uppercase tracking-widest text-[#A9824C] font-mono mb-1">
                  {mat.category}
                </div>
                <div className="font-serif-arch text-sm lg:text-base font-normal">
                  {mat.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Material Deep Dive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#1A304D] border border-[#A9824C]/30 p-6 lg:p-12">
          {/* Left: High-Res Material Photography */}
          <div className="lg:col-span-5 relative overflow-hidden aspect-[4/3] lg:aspect-auto border border-[#A9824C]/30 bg-[#001126]">
            <img
              src={currentMaterial.imageUrl}
              alt={currentMaterial.name}
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-[#14263D]/95 border border-[#A9824C]/40 px-3 py-1.5">
              <span className="label-caps text-[#FBF9F4]">SPECIMEN &bull; {currentMaterial.name}</span>
            </div>
          </div>

          {/* Right: Technical Placard & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="label-caps text-[#A9824C]">{currentMaterial.category}</span>
                <span className="text-[#A9824C]/40">&bull;</span>
                <span className="text-xs font-mono text-[#cbc6bd] uppercase flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-[#A9824C]" />
                  <span>ORIGIN: {currentMaterial.origin}</span>
                </span>
              </div>

              <h3 className="font-serif-arch text-3xl lg:text-4xl text-[#FBF9F4] font-normal mb-4">
                {currentMaterial.name}
              </h3>

              <p className="font-sans-arch text-base text-[#e8e2d9] font-light leading-relaxed mb-8">
                {currentMaterial.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#A9824C]/25">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#A9824C] font-semibold mb-1">
                    SURFACE FINISH &amp; POLISH
                  </div>
                  <div className="text-sm font-sans-arch text-[#FBF9F4]">
                    {currentMaterial.finish}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#A9824C] font-semibold mb-1">
                    THERMAL &amp; ACOUSTIC RATING
                  </div>
                  <div className="text-sm font-sans-arch text-[#FBF9F4]">
                    {currentMaterial.acousticOrThermalRating}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#A9824C] font-semibold mb-1">
                    ARCHITECTURAL APPLICATION IN IRA RESIDENCES
                  </div>
                  <div className="text-sm font-sans-arch text-[#FBF9F4] leading-relaxed">
                    {currentMaterial.architecturalApplication}
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Seal */}
            <div className="flex items-center space-x-4 pt-6 border-t border-[#A9824C]/25 text-xs text-[#cbc6bd]">
              <Award className="w-5 h-5 text-[#A9824C] shrink-0" />
              <span>
                Hand-inspected at source quarries and fabrication ateliers under the direct supervision of the Chief Architect.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
