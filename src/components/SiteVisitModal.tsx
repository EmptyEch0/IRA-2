/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project, buildWhatsAppLink } from '../utils/architecture';
import { COMPANY_DETAILS, PROJECTS } from '../data/companyData';
import { X, Calendar, Clock, MapPin, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  selectedProject?: Project;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  selectedProject,
  onClose,
}) => {
  const [projectId, setProjectId] = useState(selectedProject ? selectedProject.id : PROJECTS[0].id);
  const [date, setDate] = useState('2026-11-15');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPickupNeeded, setIsPickupNeeded] = useState(true);

  if (!isOpen) return null;

  const currentProject = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const msg = `Hello IRA Promoters,\n\nI would like to schedule a site visit:\n\n*Name:* ${fullName.trim()}\n*Phone:* ${phone.trim()}\n*Project:* ${currentProject.name}\n*Date:* ${date}\n*Time:* ${preferredTime}\n*Pickup Assistance Needed:* ${isPickupNeeded ? 'Yes (from Madhurawada / PM Palem)' : 'No (direct arrival)'}\n\nPlease confirm our appointment and send exact location coordinates.`;

    const waUrl = buildWhatsAppLink(COMPANY_DETAILS.whatsappNumber, msg);
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-visit-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001126]/85 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative bg-[#FDFBF7] border-2 border-[#14263D] w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-[#14263D] text-[#FDFBF7] px-6 py-4 flex items-center justify-between border-b border-[#C59B4E]/40">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 bg-[#C59B4E]"></span>
            <span className="label-caps text-[#FDFBF7]">
              COMPLIMENTARY SITE VISIT COORDINATION
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Site Visit Scheduler"
            className="p-1.5 text-[#cbc6bd] hover:text-white border border-[#C59B4E]/40 hover:border-[#C59B4E] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <span className="label-caps text-[#C59B4E]">ASSISTED VEHICLE TOURS DAILY</span>
            <h2
              id="modal-visit-title"
              className="font-serif-arch text-2xl sm:text-3xl text-[#14263D] mt-1"
            >
              Schedule Your Free Site Inspection.
            </h2>
            <p className="text-xs text-[#77736C] font-light mt-1">
              Visit our ongoing layouts in Anandapuram, Bhogapuram, or Madhurawada with personal guidance from our senior executives.
            </p>
          </div>

          <form onSubmit={handleConfirm} className="space-y-4">
            {/* Project Selection */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#14263D] font-semibold mb-1">
                Select Project
              </label>
              <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="w-full bg-white border border-[#D9D2C6] px-3.5 py-2.5 text-xs text-[#14263D] focus:outline-none focus:border-[#C59B4E]"
              >
                {PROJECTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.category} ({p.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#14263D] font-semibold mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-3.5 py-2 text-xs text-[#14263D] focus:outline-none focus:border-[#C59B4E]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#14263D] font-semibold mb-1">
                  Preferred Time (10 AM &ndash; 6 PM)
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-3.5 py-2.5 text-xs text-[#14263D] focus:outline-none focus:border-[#C59B4E]"
                >
                  <option value="10:30 AM">10:30 AM (Morning Sunlight)</option>
                  <option value="12:00 PM">12:00 PM (Midday)</option>
                  <option value="03:00 PM">03:00 PM (Afternoon)</option>
                  <option value="04:30 PM">04:30 PM (Evening Sunset)</option>
                </select>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#14263D] font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Appala Naidu"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-3.5 py-2 text-xs text-[#14263D] focus:outline-none focus:border-[#C59B4E]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#14263D] font-semibold mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9573960563"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-3.5 py-2 text-xs text-[#14263D] focus:outline-none focus:border-[#C59B4E]"
                />
              </div>
            </div>

            {/* Pickup Checkbox */}
            <div className="pt-1">
              <label className="flex items-center space-x-2.5 text-xs text-[#20252B] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPickupNeeded}
                  onChange={(e) => setIsPickupNeeded(e.target.checked)}
                  className="h-4 w-4 text-[#14263D] border-[#D9D2C6] focus:ring-[#C59B4E]"
                />
                <span>Request complimentary vehicle pick-up from Madhurawada / Visakhapatnam</span>
              </label>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-3.5 font-sans-arch text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Site Visit on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
