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
import { ScrollProgressBar, ScrollToTopButton, PageFadeOverlay } from './components/ScrollAnimations';
import { Project } from './utils/architecture';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [siteVisitTargetProject, setSiteVisitTargetProject] = useState<Project | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Smooth Fade Page Navigation & Active Section State
  const [isPageFading, setIsPageFading] = useState(false);
  const [fadeTargetTitle, setFadeTargetTitle] = useState<string>('');
  const [currentSection, setCurrentSection] = useState<string>('home');

  const handleOpenSiteVisit = (project?: Project) => {
    setSiteVisitTargetProject(project);
    setIsSiteVisitModalOpen(true);
  };

  /**
   * Smooth fade transition for page / section navigation
   * Triggered when clicking footer links, navbar links, or hero buttons.
   */
  const handleNavigate = (targetId: string, title?: string) => {
    const cleanId = targetId.replace('#', '');
    setFadeTargetTitle(title || cleanId.toUpperCase());
    setCurrentSection(cleanId);
    setIsPageFading(true);

    setTimeout(() => {
      const el = document.getElementById(cleanId);
      if (el) {
        // Scroll smoothly to section accounting for sticky masthead
        const navHeight = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition > 0 ? offsetPosition : 0,
          behavior: 'smooth',
        });
      }

      // Complete the fade out
      setTimeout(() => {
        setIsPageFading(false);
      }, 250);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#20252B] selection:bg-[#C59B4E] selection:text-[#14263D] relative">
      {/* Real-time Golden Reading & Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Cinematic Fade Transition Overlay for Section/Page Navigation */}
      <PageFadeOverlay isFading={isPageFading} targetName={fadeTargetTitle} />

      {/* Top Fixed Masthead Navigation with Active Section Reflection */}
      <Navbar
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      <main className={`transition-opacity duration-300 ${isPageFading ? 'opacity-40' : 'opacity-100'}`}>
        {/* Page 1: Home & Hero Banner */}
        <div id="home-wrapper">
          <Hero
            onExploreProjects={() => handleNavigate('projects', 'Projects')}
            onOpenSiteVisit={() => handleOpenSiteVisit()}
          />
        </div>

        {/* Page 2: About Us */}
        <div id="about-wrapper">
          <AboutSection />
        </div>

        {/* Page 3: Founders & Leadership Team */}
        <div id="founders-wrapper">
          <FoundersSection />
        </div>

        {/* Page 4 & 5: Projects (Ongoing & Completed) & Details */}
        <div id="projects-wrapper">
          <ProjectsSection
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenSiteVisit={(project) => handleOpenSiteVisit(project)}
          />
        </div>

        {/* Page 6: Gallery & Site Ground Progress */}
        <div id="gallery-wrapper">
          <GallerySection />
        </div>

        {/* Page 7: Buyer Guide & FAQs */}
        <div id="guide-wrapper">
          <BuyerGuideSection />
        </div>

        {/* Page 8: Contact Us & Location */}
        <div id="contact-wrapper">
          <ContactSection />
        </div>
      </main>

      {/* Footer with Smooth Fade Page Navigation */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onNavigate={handleNavigate}
      />

      {/* Floating Quick Contact Bar (Call & WhatsApp) for Mobile & Desktop */}
      <FloatingContactBar onOpenSiteVisit={() => handleOpenSiteVisit()} />

      {/* Floating Scroll to Top Button with Smooth Entrance */}
      <ScrollToTopButton onScrollTop={() => handleNavigate('home', 'Home')} />

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
