/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Residence, formatArea, formatCurrency } from '../utils/architecture';
import { X, BedDouble, Bath, Maximize2, Shield, Calendar, ArrowRight, Download } from 'lucide-react';

interface ResidenceModalProps {
  residence: Residence | null;
  unit: 'sqft' | 'sqm';
  currency: 'INR' | 'USD' | 'EUR';
  onClose: () => void;
  onInquire: (residenceId: string) => void;
}

export const ResidenceModal: React.FC<ResidenceModalProps> = ({
  residence,
  unit,
  currency,
  onClose,
  onInquire,
}) => {
  if (!residence) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-residence-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#001126]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative bg-[#FBF9F4] border-2 border-[#14263D] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Top Masthead */}
        <div className="sticky top-0 z-20 bg-[#14263D] text-[#FBF9F4] px-6 lg:px-8 py-4 flex items-center justify-between border-b border-[#A9824C]/40">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A9824C]"></span>
            <span className="label-caps text-[#FBF9F4]">
              ARCHIVAL SPECIFICATION DOSSIER &bull; {residence.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Dossier"
            className="p-1.5 text-[#cbc6bd] hover:text-white border border-[#A9824C]/40 hover:border-[#A9824C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-10 space-y-10">
          {/* Main Hero Photographic Plate */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#14263D] border border-[#D9D2C6]">
            <img
              src={residence.image}
              alt={residence.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-[#14263D]/95 border border-[#A9824C]/40 px-4 py-2">
              <span className="label-caps text-[#FBF9F4]">{residence.typology}</span>
              <div className="font-serif-arch text-lg text-[#FBF9F4]">{residence.name}</div>
            </div>
          </div>

          {/* Title & Basic Specs Lockup */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#77736C]">
                {residence.location}
              </span>
              <h2
                id="modal-residence-title"
                className="font-serif-arch text-3xl sm:text-5xl text-[#14263D] font-normal mt-1"
              >
                {residence.name}
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-[#A9824C] font-semibold mt-1">
                {residence.subtitle}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#77736C] block">
                VALUATION ESTIMATE
              </span>
              <span className="font-serif-arch text-3xl font-semibold text-[#14263D]">
                {formatCurrency(residence.priceINR, currency)}
              </span>
            </div>
          </div>

          {/* Architectural Narrative */}
          <div className="space-y-4">
            <h4 className="label-caps text-[#A9824C]">ARCHITECTURAL NARRATIVE</h4>
            <p className="font-sans-arch text-base text-[#20252B] font-light leading-relaxed">
              {residence.narrative}
            </p>
          </div>

          {/* Metric Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F4F0E8] border border-[#D9D2C6] p-6 text-center">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#77736C] mb-1">
                TOTAL FOOTPRINT
              </div>
              <div className="font-serif-arch text-xl text-[#14263D]">
                {formatArea(residence.sqft, unit)}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#77736C] mb-1">
                SUITES &amp; BATHS
              </div>
              <div className="font-serif-arch text-xl text-[#14263D]">
                {residence.bedrooms} Bed &bull; {residence.bathrooms} Bath
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#77736C] mb-1">
                CEILING HEIGHT
              </div>
              <div className="font-serif-arch text-xl text-[#14263D]">
                {residence.ceilingHeight}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#77736C] mb-1">
                ACOUSTIC ISOLATION
              </div>
              <div className="font-serif-arch text-xl text-[#14263D]">
                {residence.acousticIsolation}
              </div>
            </div>
          </div>

          {/* Level Breakdown Schedule */}
          <div className="space-y-4">
            <h4 className="label-caps text-[#A9824C]">LEVEL-BY-LEVEL SPATIAL BREAKDOWN</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {residence.floorplans.map((lvl) => (
                <div key={lvl.level} className="border border-[#D9D2C6] bg-white p-6">
                  <div className="flex justify-between items-center border-b border-[#D9D2C6] pb-3 mb-4">
                    <span className="font-serif-arch text-lg text-[#14263D]">{lvl.level}</span>
                    <span className="text-xs font-mono font-semibold text-[#A9824C]">
                      {formatArea(lvl.areaSqFt, unit)}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs font-sans-arch text-[#20252B]">
                    {lvl.features.map((feat) => (
                      <li key={feat} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#14263D]"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sourced Material Inclusions */}
          <div className="space-y-4">
            <h4 className="label-caps text-[#A9824C]">MATERIAL ANATOMY FOR THIS RESIDENCE</h4>
            <div className="flex flex-wrap gap-2">
              {residence.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-3 py-1.5 bg-[#14263D] text-[#FBF9F4] text-xs uppercase tracking-wider"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 z-20 bg-[#F4F0E8] border-t border-[#D9D2C6] px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#77736C]">
            COMMISSION CODE: <span className="font-mono text-[#14263D]">IRA-{residence.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="border border-[#D9D2C6] text-[#77736C] hover:text-[#14263D] px-6 py-3 text-xs uppercase tracking-widest cursor-pointer"
            >
              Dismiss
            </button>

            <button
              onClick={() => {
                onClose();
                onInquire(residence.id);
              }}
              className="bg-[#14263D] text-[#FBF9F4] px-8 py-3 font-sans-arch text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#1A304D] transition-colors flex items-center space-x-2 cursor-pointer shadow-sm"
            >
              <span>Initiate Acquisition Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#A9824C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
