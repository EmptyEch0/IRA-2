/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESIDENCES } from '../data/residencesData';
import { formatArea } from '../utils/architecture';
import { Compass, Maximize, Sun, VolumeX, ShieldCheck, Download } from 'lucide-react';

interface ChapterFloorplansProps {
  unit: 'sqft' | 'sqm';
  onInquireResidence: (residenceId: string) => void;
}

export const ChapterFloorplans: React.FC<ChapterFloorplansProps> = ({
  unit,
  onInquireResidence,
}) => {
  const [selectedResidenceId, setSelectedResidenceId] = useState<string>(RESIDENCES[0].id);
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const currentResidence =
    RESIDENCES.find((r) => r.id === selectedResidenceId) || RESIDENCES[0];
  const currentLevel =
    currentResidence.floorplans[activeLevelIndex] || currentResidence.floorplans[0];

  return (
    <section id="blueprints" className="py-24 lg:py-36 bg-[#fdf9f1] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-12">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">04</span>
            <div>
              <span className="label-caps text-[#77736C]">BLUEPRINTS &bull; CHAPTER IV</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#14263D] mt-2 font-normal">
                Spatial Matrix &amp; Schematics.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-sm font-sans-arch text-[#77736C] max-w-md">
              Engineered with zero wasted circulation and generous volumetric ceiling clearances.
              Every corridor, colonnade, and aperture aligns with cardinal solar coordinates.
            </p>
          </div>
        </div>

        {/* Residence Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {RESIDENCES.map((res) => {
            const isSelected = res.id === selectedResidenceId;
            return (
              <button
                key={res.id}
                onClick={() => {
                  setSelectedResidenceId(res.id);
                  setActiveLevelIndex(0);
                  setSelectedRoom(null);
                }}
                className={`px-5 py-3 text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#14263D] border-[#14263D] text-[#FBF9F4]'
                    : 'bg-[#FBF9F4] border-[#D9D2C6] text-[#14263D] hover:border-[#A9824C]'
                }`}
              >
                <div className="text-[10px] uppercase tracking-widest text-[#A9824C] font-semibold">
                  {res.typology}
                </div>
                <div className="font-serif-arch text-sm font-medium mt-0.5">
                  {res.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Schematic Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FBF9F4] border border-[#D9D2C6] p-6 lg:p-10">
          {/* Left: Architectural Blueprint Representation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Level Selector Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#D9D2C6] mb-6">
              <div className="flex space-x-2">
                {currentResidence.floorplans.map((lvl, idx) => (
                  <button
                    key={lvl.level}
                    onClick={() => {
                      setActiveLevelIndex(idx);
                      setSelectedRoom(null);
                    }}
                    className={`px-4 py-1.5 text-xs font-sans-arch uppercase tracking-widest cursor-pointer transition-colors border ${
                      activeLevelIndex === idx
                        ? 'bg-[#14263D] text-[#FBF9F4] border-[#14263D]'
                        : 'bg-white text-[#77736C] border-[#D9D2C6] hover:text-[#14263D]'
                    }`}
                  >
                    {lvl.level}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-[#77736C]">
                LEVEL AREA: <span className="font-semibold text-[#14263D]">{formatArea(currentLevel.areaSqFt, unit)}</span>
              </div>
            </div>

            {/* Stylized Architectural CAD / Blueprint Canvas */}
            <div className="relative border border-[#D9D2C6] bg-[#14263D]/5 p-6 aspect-[16/11] flex flex-col justify-between overflow-hidden">
              {/* Architectural Grid Lines Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-[linear-gradient(to_right,#14263D_1px,transparent_1px),linear-gradient(to_bottom,#14263D_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* Cardinal North Indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-1 text-[10px] font-mono tracking-widest text-[#14263D] bg-white/90 border border-[#D9D2C6] px-2.5 py-1">
                <Compass className="w-3.5 h-3.5 text-[#A9824C]" />
                <span>N &bull; {currentResidence.specs.orientation}</span>
              </div>

              {/* Scale datum */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#77736C] bg-white/90 border border-[#D9D2C6] px-2.5 py-1">
                SCALE: 1:100 METRIC &bull; 0m &mdash; 5m &mdash; 10m
              </div>

              {/* Interactive Room Layout Blocks */}
              <div className="relative z-10 my-auto grid grid-cols-2 gap-4 max-w-xl mx-auto w-full p-4">
                {currentLevel.features.map((feature, idx) => {
                  const isHovered = selectedRoom === feature;
                  return (
                    <div
                      key={feature}
                      onMouseEnter={() => setSelectedRoom(feature)}
                      className={`p-4 border transition-all cursor-pointer ${
                        isHovered
                          ? 'bg-[#14263D] text-[#FBF9F4] border-[#A9824C] shadow-md scale-[1.02]'
                          : 'bg-white/90 text-[#14263D] border-[#D9D2C6] hover:border-[#14263D]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest mb-1 text-[#A9824C]">
                        <span>ZONE 0{idx + 1}</span>
                        <span>STC {42 + idx}</span>
                      </div>
                      <div className="font-serif-arch text-sm font-medium leading-snug">
                        {feature}
                      </div>
                      <div className="text-[11px] font-mono mt-2 text-[#77736C]">
                        CL: {currentResidence.ceilingHeight}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-[#77736C]">
              <span className="flex items-center space-x-1.5">
                <VolumeX className="w-3.5 h-3.5 text-[#A9824C]" />
                <span>Structural floating acoustic slab decoupling</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Sun className="w-3.5 h-3.5 text-[#A9824C]" />
                <span>Natural daylight cross-path certified</span>
              </span>
            </div>
          </div>

          {/* Right: Technical Specifications Schedule (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D9D2C6] lg:pl-10 pt-6 lg:pt-0">
            <div>
              <div className="label-caps text-[#A9824C] mb-1">TECHNICAL SCHEDULE</div>
              <h3 className="font-serif-arch text-2xl text-[#14263D] mb-4">
                {currentResidence.name}
              </h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed mb-6">
                {currentResidence.narrative}
              </p>

              {/* Architectural Attributes Table */}
              <div className="space-y-3 border-y border-[#D9D2C6] py-5 mb-6 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">TOTAL FOOTPRINT:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {formatArea(currentResidence.sqft, unit)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">CEILING CLEARANCE:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {currentResidence.ceilingHeight}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">ACOUSTIC RATING:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {currentResidence.acousticIsolation}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">VALET PARKING BAYS:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {currentResidence.specs.valetBays} Dedicated Covered Bays
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">CLEAN ENERGY OFFSET:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {currentResidence.specs.solarOffset}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#77736C] uppercase tracking-wider">AIR PURITY RATING:</span>
                  <span className="font-mono font-semibold text-[#14263D]">
                    {currentResidence.specs.airPurity}
                  </span>
                </div>
              </div>

              {/* Room Hover Feedback */}
              {selectedRoom && (
                <div className="p-3 bg-[#14263D] text-[#FBF9F4] text-xs mb-6 border border-[#A9824C]">
                  <div className="text-[10px] text-[#A9824C] uppercase tracking-widest font-semibold mb-0.5">
                    SELECTED SPACE
                  </div>
                  <div className="font-serif-arch text-sm">{selectedRoom}</div>
                </div>
              )}
            </div>

            {/* Inquire CTA */}
            <div className="pt-4">
              <button
                onClick={() => onInquireResidence(currentResidence.id)}
                className="w-full bg-[#14263D] text-[#FBF9F4] py-3.5 font-sans-arch text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#1A304D] transition-colors flex items-center justify-center space-x-2 cursor-pointer border border-[#14263D]"
              >
                <span>Request Detailed Archival Blueprint PDF</span>
                <Download className="w-4 h-4 text-[#A9824C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
