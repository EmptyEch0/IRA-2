/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FoundersSection } from './components/FoundersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { GallerySection } from './components/GallerySection';
import { BuyerGuideSection } from './components/BuyerGuideSection';
import { ContactSection } from './components/ContactSection';
import { SiteVisitModal } from './components/SiteVisitModal';
import { PrivacyModal } from './components/PrivacyModal';
import { FloatingContactBar } from './components/FloatingContactBar';
import { Footer } from './components/Footer';
import { Project } from './utils/architecture';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [siteVisitTargetProject, setSiteVisitTargetProject] = useState<Project | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenSiteVisit = (project?: Project) => {
    setSiteVisitTargetProject(project);
    setIsSiteVisitModalOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#20252B] selection:bg-[#C59B4E] selection:text-[#14263D]">
      {/* Top Fixed Masthead Navigation */}
      <Navbar onOpenSiteVisit={() => handleOpenSiteVisit()} />

      <main>
        {/* Page 1: Home & Hero Banner */}
        <Hero
          onExploreProjects={handleExploreProjects}
          onOpenSiteVisit={() => handleOpenSiteVisit()}
        />

        {/* Page 2: About Us */}
        <AboutSection />

        {/* Page 3: Founders & Leadership Team */}
        <FoundersSection />

        {/* Page 4 & 5: Projects (Ongoing & Completed) & Details */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenSiteVisit={(project) => handleOpenSiteVisit(project)}
        />

        {/* Page 6: Gallery & Site Ground Progress */}
        <GallerySection />

        {/* Page 7: Buyer Guide & FAQs */}
        <BuyerGuideSection />

        {/* Page 8: Contact Us & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      {/* Floating Quick Contact Bar (Call & WhatsApp) for Mobile & Desktop */}
      <FloatingContactBar onOpenSiteVisit={() => handleOpenSiteVisit()} />

      {/* Dynamic Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSiteVisit={(project) => handleOpenSiteVisit(project)}
      />

      {/* Site Visit Scheduling Modal */}
      <SiteVisitModal
        isOpen={isSiteVisitModalOpen}
        selectedProject={siteVisitTargetProject}
        onClose={() => setIsSiteVisitModalOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
