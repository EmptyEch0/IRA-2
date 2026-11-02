/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { buildWhatsAppLink } from '../utils/architecture';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSiteVisit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Buyer Guide', href: '#guide' },
    { name: 'Contact Us', href: '#contact' },
  ];

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
        <a href="#home" className="flex items-center space-x-3.5 group">
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
        </a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans-arch text-[13px] uppercase tracking-[0.15em] text-[#14263D] hover:text-[#C59B4E] font-medium transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C59B4E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
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
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans-arch text-sm uppercase tracking-[0.15em] text-[#14263D] font-medium py-2 border-b border-[#D9D2C6]/50 hover:text-[#C59B4E]"
              >
                {link.name}
              </a>
            ))}
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
