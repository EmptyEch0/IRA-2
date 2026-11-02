/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, Instagram, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSiteVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenSiteVisit }) => {
  return (
    <footer className="bg-[#14263D] text-[#FDFBF7] border-t border-[#C59B4E]/30 pt-16 pb-20 sm:pb-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Main Footer Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#C59B4E]/25">
          {/* Logo & Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="h-16 w-auto overflow-hidden bg-white p-1 border border-[#C59B4E]">
                <img
                  src={COMPANY_DETAILS.logoUrl}
                  alt="IRA Promoters Official Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-serif-arch text-2xl text-white font-bold">IRA</span>
                  <span className="font-sans-arch text-xs uppercase tracking-[0.2em] text-[#C59B4E] font-semibold">
                    PROMOTERS
                  </span>
                </div>
                <span className="font-sans-arch text-xs text-[#cbc6bd] italic">
                  {COMPANY_DETAILS.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs font-sans-arch text-[#cbc6bd] font-light leading-relaxed max-w-sm">
              IRA Promoters stands apart by putting trust, transparency, and legal verification before every property recommendation. We focus on carefully selected, Vaastu-compliant properties across Visakhapatnam, Srikakulam, and Vizianagaram.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#C59B4E]/40 hover:border-[#C59B4E] bg-[#1A304D] flex items-center justify-center text-[#C59B4E] hover:text-white transition-colors"
                aria-label="Follow IRA Promoters on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#cbc6bd] font-mono">@irapromoters</span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="label-caps text-[#C59B4E]">NAVIGATION</div>
            <ul className="space-y-2 text-xs font-sans-arch text-[#cbc6bd]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Founders &amp; Team
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects (Ongoing &amp; Completed)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery &amp; Site Updates
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-white transition-colors">
                  Buyer Guide &amp; FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Ventures Offered (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="label-caps text-[#C59B4E]">PROPERTY VENTURES</div>
            <ul className="space-y-2 text-xs font-sans-arch text-[#cbc6bd]">
              <li>&bull; VMRDA Approved Open Plots</li>
              <li>&bull; Residential Layouts &amp; Gated Communities</li>
              <li>&bull; High-Yield Farmland Developments</li>
              <li>&bull; 2 &amp; 3 BHK Vaastu Compliant Flats</li>
              <li>&bull; Anandapuram Highway Corridors</li>
              <li>&bull; Bhogapuram Airport Investment Belt</li>
            </ul>
          </div>

          {/* Registered Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#cbc6bd]">
            <div className="label-caps text-[#C59B4E]">OFFICE LOCATION</div>
            <p className="leading-relaxed">
              {COMPANY_DETAILS.address}
            </p>
            <div className="pt-2 space-y-1 font-mono text-[#FDFBF7]">
              <div>Phone: +91 {COMPANY_DETAILS.phone1}</div>
              <div>Phone: +91 {COMPANY_DETAILS.phone2}</div>
              <div>WhatsApp: +91 {COMPANY_DETAILS.whatsappNumber}</div>
              <div className="text-[#C59B4E]">{COMPANY_DETAILS.email}</div>
            </div>
            <div className="pt-1 text-[11px] text-[#cbc6bd]">
              Hours: {COMPANY_DETAILS.businessHours}
            </div>
          </div>
        </div>

        {/* Legal & Privacy Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans-arch text-[#cbc6bd] gap-4">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} IRA Promoters. All rights reserved.</span>
            <span>&bull;</span>
            <span className="italic text-[#C59B4E]">{COMPANY_DETAILS.tagline}</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPrivacy}
              className="text-[#cbc6bd] hover:text-white hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
