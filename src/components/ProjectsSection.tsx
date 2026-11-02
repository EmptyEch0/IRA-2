/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECTS, COMPANY_DETAILS } from '../data/companyData';
import { Project, filterProjects, buildWhatsAppLink } from '../utils/architecture';
import { AnimatedSection } from './AnimatedSection';
import {
  MapPin,
  CheckCircle2,
  Maximize2,
  MessageCircle,
  Eye,
  ArrowUpRight,
  Search,
  Filter,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenSiteVisit: (project?: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenSiteVisit,
}) => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Open Plots',
    'Farmland',
    'Flats & Apartments',
    'Residential Layout',
  ];

  const filteredProjects = filterProjects(PROJECTS, statusFilter, categoryFilter, searchQuery);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#F8F5EE] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header Lockup */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-12">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">03</span>
              <div>
                <span className="label-caps text-[#77736C]">PORTFOLIO &bull; ONGOING &amp; COMPLETED VENTURES</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#14263D] mt-1 font-normal">
                  Carefully Selected Properties.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-xs sm:text-sm font-sans-arch text-[#77736C] max-w-md">
                Every venture is 100% Vaastu-compliant with transparent documentation, clear link records, and strategic growth potential.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Controls Bar */}
        <AnimatedSection delay={100}>
          <div className="bg-white border border-[#D9D2C6] p-6 mb-12 shadow-xs space-y-6">
            {/* Status Tabs (Primary segregation required by client: Ongoing vs Completed) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9D2C6]/60 pb-5">
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-widest text-[#77736C] font-semibold mr-2">
                  PROJECT STATUS:
                </span>
                {(['All', 'Ongoing', 'Completed'] as const).map((status) => {
                  const isActive = statusFilter === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 font-sans-arch text-xs uppercase tracking-widest cursor-pointer transition-all border ${
                        isActive
                          ? 'bg-[#14263D] text-[#FDFBF7] border-[#14263D] font-semibold'
                          : 'bg-[#F8F5EE] text-[#14263D] border-[#D9D2C6] hover:border-[#C59B4E]'
                      }`}
                    >
                      {status === 'All' ? 'All Projects' : `${status} Projects`}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="w-full sm:w-72 relative">
                <input
                  type="text"
                  placeholder="Search by location, venture, type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FDFBF7] border border-[#D9D2C6] px-4 py-2 text-xs font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#C59B4E]"
                />
                <Search className="w-4 h-4 text-[#77736C] absolute right-3 top-2.5" />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#77736C] font-semibold mr-2">
                PROPERTY TYPE:
              </span>
              {categories.map((cat) => {
                const isSelected = categoryFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 text-[11px] font-sans-arch uppercase tracking-wider transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-[#C59B4E] text-[#14263D] border-[#C59B4E] font-semibold'
                        : 'bg-white text-[#77736C] border-[#D9D2C6] hover:text-[#14263D] hover:border-[#77736C]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-[#D9D2C6] p-12 text-center">
            <p className="font-serif-arch text-2xl text-[#14263D] mb-2">No matching ventures found</p>
            <p className="text-xs text-[#77736C] mb-4">
              Try adjusting your search criteria or reset filters to browse all ventures.
            </p>
            <button
              onClick={() => {
                setStatusFilter('All');
                setCategoryFilter('All');
                setSearchQuery('');
              }}
              className="bg-[#14263D] text-white px-5 py-2.5 text-xs uppercase tracking-widest cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const whatsappProjectUrl = buildWhatsAppLink(
                COMPANY_DETAILS.whatsappNumber,
                `Hello IRA Promoters, I would like to know more details and pricing for your project: ${project.name} (${project.location}).`
              );

              return (
                <AnimatedSection key={project.id} delay={index * 100}>
                  <article className="bg-white border border-[#D9D2C6] flex flex-col justify-between h-full group hover:border-[#C59B4E] transition-all shadow-xs">
                    {/* Visual Upper Frame */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#14263D]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span
                          className={`label-caps px-2.5 py-1 text-[10px] ${
                            project.status === 'Ongoing'
                              ? 'bg-[#14263D] text-[#FDFBF7] border border-[#C59B4E]'
                              : 'bg-[#25D366] text-white'
                          }`}
                        >
                          {project.status.toUpperCase()}
                        </span>
                        <span className="label-caps px-2.5 py-1 text-[10px] bg-white/90 text-[#14263D] border border-[#D9D2C6]">
                          {project.category}
                        </span>
                      </div>

                      {/* Pricing Tag */}
                      <div className="absolute bottom-3 right-3 bg-white/95 border border-[#D9D2C6] px-3 py-1 shadow-xs">
                        <span className="font-serif-arch text-xs font-semibold text-[#14263D]">
                          {project.priceStartingINR}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Location */}
                        <div className="flex items-center space-x-1.5 text-xs font-mono text-[#77736C] uppercase mb-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#C59B4E] shrink-0" />
                          <span>{project.location}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif-arch text-xl sm:text-2xl text-[#14263D] font-normal mb-2">
                          {project.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs text-[#C59B4E] font-medium mb-3">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xs font-sans-arch text-[#20252B] font-light leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Key Features Bullet List */}
                        <ul className="space-y-1.5 mb-6 text-xs text-[#77736C] border-t border-[#D9D2C6]/60 pt-3">
                          <li className="flex items-center space-x-2 text-[#14263D] font-medium">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C59B4E]" />
                            <span>Plot Size / Area: {project.areaRange}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B4E]" />
                            <span>{project.legalVerification}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Action CTAs */}
                      <div className="space-y-2 pt-4 border-t border-[#D9D2C6]">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="w-full bg-[#14263D] text-[#FDFBF7] py-2.5 font-sans-arch text-xs uppercase tracking-wider hover:bg-[#1A304D] flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C59B4E]" />
                          <span>View Project Details</span>
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={whatsappProjectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white py-2 text-center text-[11px] font-sans-arch uppercase tracking-wider flex items-center justify-center space-x-1.5 hover:bg-[#20bd5a] transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>

                          <button
                            onClick={() => onOpenSiteVisit(project)}
                            className="border border-[#14263D] text-[#14263D] py-2 text-[11px] font-sans-arch uppercase tracking-wider hover:bg-[#14263D] hover:text-white transition-colors cursor-pointer"
                          >
                            Site Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
