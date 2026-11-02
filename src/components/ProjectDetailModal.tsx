/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Project, buildWhatsAppLink } from '../utils/architecture';
import { COMPANY_DETAILS } from '../data/companyData';
import {
  X,
  MapPin,
  Maximize2,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Compass,
  FileCheck,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenSiteVisit: (project?: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenSiteVisit,
}) => {
  if (!project) return null;

  const whatsappUrl = buildWhatsAppLink(
    COMPANY_DETAILS.whatsappNumber,
    `Hello IRA Promoters, I am enquiring about ${project.name} (${project.location}). Please share current availability, layout brochure, and price quotation.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#001126]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative bg-[#FDFBF7] border-2 border-[#14263D] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Top Masthead */}
        <div className="sticky top-0 z-20 bg-[#14263D] text-[#FDFBF7] px-6 py-4 flex items-center justify-between border-b border-[#C59B4E]/40">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-[#C59B4E]"></span>
            <span className="label-caps text-[#FDFBF7]">
              VENTURE SPECIFICATIONS &bull; {project.category.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Details"
            className="p-1.5 text-[#cbc6bd] hover:text-white border border-[#C59B4E]/40 hover:border-[#C59B4E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#14263D] border border-[#D9D2C6]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="label-caps px-3 py-1 bg-[#14263D] text-white border border-[#C59B4E]">
                {project.status.toUpperCase()}
              </span>
              <span className="label-caps px-3 py-1 bg-white text-[#14263D]">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 px-4 py-1.5 border border-[#D9D2C6]">
              <span className="font-serif-arch text-base font-semibold text-[#14263D]">
                {project.priceStartingINR}
              </span>
            </div>
          </div>

          {/* Heading and Location */}
          <div className="border-b border-[#D9D2C6] pb-6">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#77736C] mb-1">
              <MapPin className="w-4 h-4 text-[#C59B4E]" />
              <span>{project.location}</span>
            </div>
            <h2
              id="modal-project-title"
              className="font-serif-arch text-3xl sm:text-4xl text-[#14263D] font-normal"
            >
              {project.name}
            </h2>
            <p className="text-xs uppercase tracking-wider text-[#C59B4E] font-semibold mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3 font-sans-arch text-sm text-[#20252B] font-light leading-relaxed">
            <h4 className="label-caps text-[#C59B4E]">VENTURE OVERVIEW &amp; LOCATION VALUE</h4>
            <p>{project.description}</p>
          </div>

          {/* Infrastructure Specifications Matrix */}
          <div className="space-y-4">
            <h4 className="label-caps text-[#C59B4E]">DEVELOPMENT &amp; INFRASTRUCTURE SPECIFICATIONS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8F5EE] border border-[#D9D2C6] p-6 text-xs">
              <div>
                <span className="font-semibold text-[#14263D] uppercase block mb-0.5">ROAD ARCHITECTURE:</span>
                <span className="text-[#77736C]">{project.layoutSpecs.roadWidth}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block mb-0.5">WATER &amp; POWER SUPPLY:</span>
                <span className="text-[#77736C]">{project.layoutSpecs.waterElectricity}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block mb-0.5">DRAINAGE SYSTEM:</span>
                <span className="text-[#77736C]">{project.layoutSpecs.drainage}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block mb-0.5">SECURITY INFRASTRUCTURE:</span>
                <span className="text-[#77736C]">{project.layoutSpecs.security}</span>
              </div>
            </div>
          </div>

          {/* Venture Highlights List */}
          <div className="space-y-3">
            <h4 className="label-caps text-[#C59B4E]">KEY PROJECT HIGHLIGHTS &amp; APPROVALS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center space-x-2 text-xs font-sans-arch text-[#20252B] bg-white p-3 border border-[#D9D2C6]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4E] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 bg-[#F8F5EE] border-t border-[#D9D2C6] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="border border-[#D9D2C6] text-[#77736C] hover:text-[#14263D] px-5 py-2.5 text-xs uppercase tracking-widest cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                onClose();
                onOpenSiteVisit(project);
              }}
              className="bg-white border border-[#14263D] text-[#14263D] px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-[#F8F5EE] cursor-pointer flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C59B4E]" />
              <span>Schedule Site Visit</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#20bd5a] flex items-center space-x-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
