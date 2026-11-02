/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { buildWhatsAppLink } from '../utils/architecture';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenSiteVisit: () => void;
  onNavigate?: (sectionId: string, sectionName?: string) => void;
  currentSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSiteVisit, onNavigate, currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Founders', href: '#founders', id: 'founders' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Buyer Guide', href: '#guide', id: 'guide' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  // Sync with currentSection if supplied via props
  useEffect(() => {
    if (currentSection) {
      setActiveSection(currentSection.replace('#', ''));
    }
  }, [currentSection]);

  // Real-time ScrollSpy to reflect active page/section in Navbar on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'founders', 'projects', 'gallery', 'guide', 'contact'];

    const handleScroll = () => {
      // Offset for sticky masthead
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string, name: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const cleanId = targetId.replace('#', '');
    setActiveSection(cleanId);

    if (onNavigate) {
      onNavigate(targetId, name);
    } else {
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = buildWhatsAppLink(
    COMPANY_DETAILS.whatsappNumber,
    'Hello IRA Promoters, I am visiting your website and would like to enquire about your property opportunities.'
  );

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#D9D2C6] transition-all shadow-xs">
      {/* Top Office Information Strip */}
      <div className="hidden lg:flex justify-between items-center px-8 lg:px-16 py-1.5 text-[11px] uppercase tracking-wider text-[#77736C] border-b border-[#D9D2C6]/60 bg-[#F8F5EE]">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1.5 text-[#14263D]">
            <MapPin className="w-3.5 h-3.5 text-[#C59B4E]" />
            <span>PM Palem, Madhurawada, Visakhapatnam</span>
          </span>
          <span className="text-[#D9D2C6]">|</span>
          <span className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C59B4E]" />
            <span>Open Every Day: 10:00 AM – 6:00 PM</span>
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={`tel:${COMPANY_DETAILS.phone1}`}
            className="flex items-center space-x-1.5 text-[#14263D] hover:text-[#C59B4E] transition-colors font-medium font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B4E]" />
            <span>Call: +91 {COMPANY_DETAILS.phone1} / {COMPANY_DETAILS.phone2}</span>
          </a>
          <span className="text-[#D9D2C6]">|</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-[#075e54] hover:text-[#128c7e] transition-colors font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: +91 {COMPANY_DETAILS.whatsappNumber}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16 h-20 lg:h-24 flex items-center justify-between">
        {/* Brand Mark with Official Logo */}
        <button
          onClick={(e) => handleNavClick(e, '#home', 'Home')}
          className="flex items-center space-x-3.5 group text-left cursor-pointer"
        >
          <div className="h-14 sm:h-16 w-auto overflow-hidden flex items-center justify-center p-0.5 border border-[#D9D2C6] bg-white shadow-xs">
            <img
              src={COMPANY_DETAILS.logoUrl}
              alt="IRA Promoters Official Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-1.5">
              <span className="font-serif-arch text-2xl sm:text-3xl text-[#14263D] tracking-tight font-bold">
                IRA
              </span>
              <span className="font-sans-arch text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C59B4E] font-semibold">
                PROMOTERS
              </span>
            </div>
            <span className="font-sans-arch text-[11px] tracking-[0.05em] text-[#77736C] italic -mt-0.5">
              {COMPANY_DETAILS.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Links with Active State & Smooth Transition */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`font-sans-arch text-[13px] uppercase tracking-[0.15em] transition-all duration-300 relative py-1.5 cursor-pointer group ${
                  isActive
                    ? 'text-[#C59B4E] font-bold scale-[1.02]'
                    : 'text-[#14263D] hover:text-[#C59B4E] font-medium'
                }`}
              >
                <span>{link.name}</span>
                {/* Active indicator bar with smooth sliding transition */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C59B4E] transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-full opacity-100 shadow-[0_0_6px_rgba(197,155,78,0.6)]'
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Quick Action CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-sans-arch text-xs font-semibold uppercase tracking-[0.12em] px-4 py-3 flex items-center space-x-2 hover:bg-[#20bd5a] transition-colors shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onOpenSiteVisit}
            className="bg-[#14263D] text-[#FDFBF7] font-sans-arch text-xs font-medium uppercase tracking-[0.14em] px-5 py-3 border border-[#14263D] hover:bg-[#1A304D] hover:border-[#C59B4E] transition-all cursor-pointer shadow-xs"
          >
            Schedule Site Visit
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-[#14263D] border border-[#D9D2C6] bg-white cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FDFBF7] border-b border-[#D9D2C6] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`font-sans-arch text-sm uppercase tracking-[0.15em] py-2.5 transition-all text-left cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F8F5EE] text-[#C59B4E] font-bold border-l-4 border-[#C59B4E] pl-3 pr-2'
                      : 'text-[#14263D] font-medium border-b border-[#D9D2C6]/50 hover:text-[#C59B4E] pl-1'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-[#C59B4E] rounded-full"></span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 space-y-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone1}`}
              className="w-full bg-[#14263D] text-white py-3 font-sans-arch text-xs uppercase tracking-widest flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C59B4E]" />
              <span>Call: +91 {COMPANY_DETAILS.phone1}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 font-sans-arch text-xs uppercase tracking-widest flex items-center justify-center space-x-2 font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: {COMPANY_DETAILS.whatsappNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
