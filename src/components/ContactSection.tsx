/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import {
  ContactFormData,
  validateContactForm,
  buildWhatsAppLink,
  generateWhatsAppEnquiryMessage,
} from '../utils/architecture';
import { AnimatedSection } from './AnimatedSection';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    message: '',
    consent: false,
    projectInterest: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Format pre-filled WhatsApp message
    const formattedMessage = generateWhatsAppEnquiryMessage({
      fullName: formData.fullName,
      phone: formData.phone,
      message: formData.message,
      projectInterest: formData.projectInterest,
    });

    // Build WhatsApp URL to 9573960563 as explicitly specified
    const waUrl = buildWhatsAppLink(COMPANY_DETAILS.whatsappNumber, formattedMessage);

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'MIG-1/443, PM Palem 2nd Bus Stop, Madhurawada, Visakhapatnam, Andhra Pradesh'
  )}`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FDFBF7] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">06</span>
              <div>
                <span className="label-caps text-[#77736C]">DIRECT ASSISTANCE &bull; CONTACT US</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#0A192F] mt-1 font-bold">
                  Connect With IRA Promoters.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="label-caps text-[#C59B4E] block">MADHURAWADA HEADQUARTERS</span>
              <span className="text-xs font-mono text-[#77736C]">OPEN EVERY DAY &bull; 10:00 AM &ndash; 6:00 PM</span>
            </div>
          </div>
        </AnimatedSection>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Office Coordinates, Phones, Map (5 cols) */}
          <AnimatedSection delay={150} className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D9D2C6] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif-arch text-2xl text-[#14263D]">
                Office Coordinates
              </h3>

              {/* Office Address */}
              <div className="flex items-start space-x-3.5 text-xs text-[#20252B] border-b border-[#D9D2C6]/60 pb-5">
                <MapPin className="w-5 h-5 text-[#C59B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#14263D] uppercase tracking-wider block mb-1">
                    MADHURAWADA OFFICE ADDRESS:
                  </span>
                  <p className="leading-relaxed text-[#77736C]">
                    {COMPANY_DETAILS.address}
                  </p>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-semibold text-[#C59B4E] hover:underline mt-2"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start space-x-3.5 text-xs text-[#20252B] border-b border-[#D9D2C6]/60 pb-5">
                <Phone className="w-5 h-5 text-[#C59B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#14263D] uppercase tracking-wider block mb-1">
                    OFFICE PHONE NUMBERS:
                  </span>
                  <div className="space-y-1 font-mono text-sm font-semibold text-[#14263D]">
                    <div>
                      <a href={`tel:${COMPANY_DETAILS.phone1}`} className="hover:text-[#C59B4E]">
                        +91 {COMPANY_DETAILS.phone1}
                      </a>
                    </div>
                    <div>
                      <a href={`tel:${COMPANY_DETAILS.phone2}`} className="hover:text-[#C59B4E]">
                        +91 {COMPANY_DETAILS.phone2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3.5 text-xs text-[#20252B] border-b border-[#D9D2C6]/60 pb-5">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#14263D] uppercase tracking-wider block mb-1">
                    WHATSAPP SUPPORT:
                  </span>
                  <a
                    href={buildWhatsAppLink(COMPANY_DETAILS.whatsappNumber, 'Hello IRA Promoters')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-[#075e54] hover:underline"
                  >
                    +91 {COMPANY_DETAILS.whatsappNumber}
                  </a>
                  <span className="block text-[11px] text-[#77736C] mt-0.5">
                    Fast response for plot brochures &amp; location pins.
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 text-xs text-[#20252B] border-b border-[#D9D2C6]/60 pb-5">
                <Mail className="w-5 h-5 text-[#C59B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#14263D] uppercase tracking-wider block mb-1">
                    OFFICIAL ENQUIRY EMAIL:
                  </span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="font-mono text-xs text-[#14263D] hover:text-[#C59B4E] underline"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3.5 text-xs text-[#20252B]">
                <Clock className="w-5 h-5 text-[#C59B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#14263D] uppercase tracking-wider block mb-1">
                    BUSINESS HOURS:
                  </span>
                  <span className="text-[#14263D] font-medium">{COMPANY_DETAILS.businessHours}</span>
                  <span className="block text-[11px] text-[#77736C] mt-0.5">
                    Assisted site visit vehicles available daily.
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Location Box */}
            <div className="border border-[#D9D2C6] bg-white p-3 shadow-xs">
              <div className="flex justify-between items-center mb-2 px-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#14263D]">
                  OFFICE LOCATION MAP
                </span>
                <span className="text-[10px] text-[#C59B4E] font-mono">MADHURAWADA</span>
              </div>
              <div className="aspect-[16/9] w-full bg-[#14263D]/5 border border-[#D9D2C6] overflow-hidden relative">
                <iframe
                  title="IRA Promoters Office Location"
                  src="https://maps.google.com/maps?q=PM+Palem+2nd+Bus+Stop+Madhurawada+Visakhapatnam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form (7 cols) */}
          <AnimatedSection delay={250} className="lg:col-span-7 bg-white border border-[#D9D2C6] p-8 lg:p-12 shadow-xs">
            <div className="mb-8">
              <span className="label-caps text-[#C59B4E]">QUICK ONLINE ENQUIRY</span>
              <h3 className="font-serif-arch text-2xl sm:text-3xl text-[#0A192F] font-bold mt-1 mb-2">
                Send Your Enquiry to IRA Promoters
              </h3>
              <p className="text-xs text-[#77736C] font-light leading-relaxed">
                Fill in your details below to submit your enquiry directly to our WhatsApp desk. Our founders and team respond promptly with transparent property brochures and verified documents.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-[#F8F5EE] border border-[#25D366] text-xs text-[#14263D] flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <span className="font-semibold block">Thank you, {formData.fullName}!</span>
                  <span>WhatsApp has been launched with your enquiry to +91 {COMPANY_DETAILS.whatsappNumber}. You can also call us directly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. K. Venkata Rao"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FDFBF7] border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#C59B4E] rounded-md"
                />
                {errors.fullName && (
                  <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.fullName}</span>
                )}
              </div>

              {/* Field 2: Phone Number */}
              <div>
                <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9573960563"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#FDFBF7] border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#C59B4E] rounded-md"
                />
                {errors.phone && (
                  <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.phone}</span>
                )}
              </div>

              {/* Optional: Project of Interest */}
              <div>
                <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                  Project of Interest (Optional)
                </label>
                <select
                  value={formData.projectInterest}
                  onChange={(e) => setFormData({ ...formData, projectInterest: e.target.value })}
                  className="w-full bg-[#FDFBF7] border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] focus:outline-none focus:border-[#C59B4E] rounded-md"
                >
                  <option value="">General Property Enquiry (Plots, Flats, Farmland)</option>
                  <option value="IRA Golden Palms Layout (Anandapuram)">IRA Golden Palms Layout (Anandapuram)</option>
                  <option value="IRA Green Meadows Farmland (Bhogapuram)">IRA Green Meadows Farmland (Bhogapuram)</option>
                  <option value="IRA Sri Nilayam Heights (PM Palem)">IRA Sri Nilayam Heights (PM Palem)</option>
                  <option value="IRA Prakruthi Enclave (Tagarapuvalasa)">IRA Prakruthi Enclave (Tagarapuvalasa)</option>
                  <option value="IRA Srikakulam Pride">IRA Srikakulam Pride (Srikakulam NH-16)</option>
                </select>
              </div>

              {/* Field 3: Enquiry Message */}
              <div>
                <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                  Enquiry Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for (e.g. 200 sq.yards East-facing plot in Anandapuram or 3 BHK flat in PM Palem)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FDFBF7] border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#C59B4E] rounded-md"
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.message}</span>
                )}
              </div>

              {/* Field 4: Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#14263D] border-[#D9D2C6] focus:ring-[#C59B4E] cursor-pointer"
                  />
                  <span className="text-xs font-sans-arch text-[#20252B] leading-relaxed">
                    I agree to submit this enquiry.
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.consent}</span>
                )}
              </div>

              {/* Short Privacy Notice */}
              <div className="p-3 bg-[#F8F5EE] border border-[#D9D2C6]/60 flex items-start space-x-2 text-[11px] text-[#77736C] leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#C59B4E] shrink-0 mt-0.5" />
                <span>
                  Privacy Notice: Your information will only be shared with IRA Promoters to respond directly to your property inquiry. We never share your contact details with external third parties.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#075E54] hover:bg-[#054c44] text-white font-sans-arch text-xs font-bold uppercase tracking-[0.16em] py-4 transition-colors flex items-center justify-center space-x-2.5 cursor-pointer shadow-md rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
