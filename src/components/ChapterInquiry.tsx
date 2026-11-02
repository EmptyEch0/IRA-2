/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESIDENCES } from '../data/residencesData';
import {
  InquiryFormData,
  validateInquiryForm,
  generateDossierReference,
} from '../utils/architecture';
import { Check, Copy, Shield, FileCheck, ArrowRight, Printer } from 'lucide-react';

interface ChapterInquiryProps {
  selectedResidenceIdForInquiry?: string;
  onClearPreselection?: () => void;
}

export const ChapterInquiry: React.FC<ChapterInquiryProps> = ({
  selectedResidenceIdForInquiry,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    residenceId: selectedResidenceIdForInquiry || RESIDENCES[0].id,
    timeframe: 'within-6-months',
    viewingType: 'private-salon',
    customNotes: '',
    preferredDate: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    referenceNumber: string;
    submittedAt: string;
    data: InquiryFormData;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  // Update residenceId when prop changes
  React.useEffect(() => {
    if (selectedResidenceIdForInquiry) {
      setFormData((prev) => ({ ...prev, residenceId: selectedResidenceIdForInquiry }));
    }
  }, [selectedResidenceIdForInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const refCode = generateDossierReference();
    setSubmissionResult({
      referenceNumber: refCode,
      submittedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      data: { ...formData },
    });
  };

  const handleCopyRef = () => {
    if (submissionResult) {
      navigator.clipboard.writeText(submissionResult.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selectedResidence = RESIDENCES.find((r) => r.id === formData.residenceId);

  return (
    <section id="inquiry" className="py-24 lg:py-36 bg-[#fdf9f1] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Chapter Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
          <div className="flex items-start space-x-6">
            <span className="chapter-numeral text-[#A9824C] select-none">06</span>
            <div>
              <span className="label-caps text-[#77736C]">PRIVATE ACQUISITION &bull; CHAPTER VI</span>
              <h2 className="font-serif-arch text-3xl sm:text-5xl lg:text-6xl text-[#14263D] mt-2 font-normal">
                Bespoke Archival Dossier.
              </h2>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="label-caps text-[#A9824C] block">CONFIDENTIALITY PLEDGE</span>
            <span className="text-xs font-mono text-[#77736C]">STRICT NON-DISCLOSURE PRIVILEGE</span>
          </div>
        </div>

        {submissionResult ? (
          /* Confirmed Dossier State */
          <div className="bg-[#FBF9F4] border-2 border-[#14263D] p-8 lg:p-16 max-w-3xl mx-auto shadow-lg relative">
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#A9824C]"></div>

            <div className="flex items-center space-x-3 mb-6">
              <FileCheck className="w-6 h-6 text-[#A9824C]" />
              <span className="label-caps text-[#A9824C]">CONFIDENTIAL DOSSIER CONFIRMED</span>
            </div>

            <h3 className="font-serif-arch text-3xl lg:text-4xl text-[#14263D] font-normal mb-4">
              Your Private Commission Request Has Been Registered.
            </h3>

            <p className="text-sm font-sans-arch text-[#20252B] font-light leading-relaxed mb-8">
              Thank you, <strong className="font-semibold text-[#14263D]">{submissionResult.data.fullName}</strong>. 
              Our Managing Director and Chief Concierge have received your acquisition dossier for{' '}
              <strong className="font-semibold text-[#14263D]">{selectedResidence?.name}</strong>. 
              An archival hardcover portfolio and private viewing credentials will be dispatched to your private contact.
            </p>

            {/* Dossier Code Card */}
            <div className="bg-[#14263D] text-[#FBF9F4] p-6 border border-[#A9824C]/40 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#A9824C]">
                  ARCHIVAL DOSSIER REFERENCE NUMBER
                </div>
                <div className="font-mono text-2xl tracking-wider text-[#FBF9F4] font-bold mt-1">
                  {submissionResult.referenceNumber}
                </div>
                <div className="text-[11px] text-[#cbc6bd] mt-1 font-mono">
                  DATE: {submissionResult.submittedAt} &bull; IRA CONCIERGE DESK
                </div>
              </div>

              <button
                onClick={handleCopyRef}
                className="bg-[#1A304D] hover:bg-[#A9824C] hover:text-[#14263D] border border-[#A9824C]/60 text-xs px-4 py-2 flex items-center space-x-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Reference'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-arch text-[#77736C] border-t border-[#D9D2C6] pt-6 mb-8">
              <div>
                <span className="font-semibold text-[#14263D] uppercase block">DIRECT PHONE:</span>
                <span>{submissionResult.data.phone}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block">PRIVATE EMAIL:</span>
                <span>{submissionResult.data.email}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block">PREFERENCE:</span>
                <span className="capitalize">{submissionResult.data.viewingType.replace('-', ' ')}</span>
              </div>
              <div>
                <span className="font-semibold text-[#14263D] uppercase block">TIMEFRAME:</span>
                <span className="capitalize">{submissionResult.data.timeframe.replace('-', ' ')}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => window.print()}
                className="bg-[#14263D] text-[#FBF9F4] font-sans-arch text-xs uppercase tracking-widest px-6 py-3.5 flex items-center space-x-2 hover:bg-[#1A304D] transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#A9824C]" />
                <span>Print Archival Summary</span>
              </button>

              <button
                onClick={() => setSubmissionResult(null)}
                className="border border-[#14263D] text-[#14263D] font-sans-arch text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-[#14263D] hover:text-[#FBF9F4] transition-colors cursor-pointer"
              >
                Submit Additional Inquiry
              </button>
            </div>
          </div>
        ) : (
          /* Inquiry Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif-arch text-2xl lg:text-3xl text-[#14263D] font-normal">
                Private Commission &amp; Archival Portfolio Dispatch.
              </h3>
              <p className="text-sm font-sans-arch text-[#20252B] font-light leading-relaxed">
                ira Promoters limits each release to a finite number of private residences. 
                Prospective custodians are invited to request a complete physical dossier comprising 
                material tactile samples, engineering calculations, and private salon viewing dates.
              </p>

              <div className="border border-[#D9D2C6] bg-[#FBF9F4] p-6 space-y-4">
                <div className="label-caps text-[#A9824C]">THE DOSSIER CONTAINS</div>
                <ul className="text-xs font-sans-arch text-[#20252B] space-y-2.5">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A9824C]"></span>
                    <span>1:50 Scale Architectural Floorplan Drawings &amp; Elevations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A9824C]"></span>
                    <span>Roman Travertine &amp; Aged Brass Physical Material Specimen Swatches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A9824C]"></span>
                    <span>Acoustic Decoupling Certification &amp; Thermal Calculations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#A9824C]"></span>
                    <span>Private Access Credentials for ira Founders Salon</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-3 text-xs text-[#77736C]">
                <Shield className="w-4 h-4 text-[#A9824C] shrink-0" />
                <span>All client correspondence is protected by strict non-disclosure covenants.</span>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FBF9F4] border border-[#D9D2C6] p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Legal Name */}
                <div>
                  <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Lord Alistair Vance or Dr. Ananya Sharma"
                    className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C] transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                      Private Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="private@domain.com"
                      className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C] transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Residence of Interest */}
                <div>
                  <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                    Residence of Interest *
                  </label>
                  <select
                    value={formData.residenceId}
                    onChange={(e) => setFormData({ ...formData, residenceId: e.target.value })}
                    className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] focus:outline-none focus:border-[#A9824C] transition-colors cursor-pointer"
                  >
                    {RESIDENCES.map((res) => (
                      <option key={res.id} value={res.id}>
                        {res.name} — {res.subtitle} ({res.location})
                      </option>
                    ))}
                  </select>
                  {errors.residenceId && (
                    <span className="text-xs text-[#ba1a1a] mt-1 block">{errors.residenceId}</span>
                  )}
                </div>

                {/* Timeframe and Viewing Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                      Acquisition Horizon
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] focus:outline-none focus:border-[#A9824C] transition-colors cursor-pointer"
                    >
                      <option value="immediate">Immediate Commission (0 - 3 Months)</option>
                      <option value="within-6-months">Within 6 Months</option>
                      <option value="within-12-months">Within 12 Months</option>
                      <option value="generational">Generational Portfolio Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                      Viewing Preference
                    </label>
                    <select
                      value={formData.viewingType}
                      onChange={(e) => setFormData({ ...formData, viewingType: e.target.value })}
                      className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] focus:outline-none focus:border-[#A9824C] transition-colors cursor-pointer"
                    >
                      <option value="private-salon">In-Person Private Salon Viewing</option>
                      <option value="architectural-walkthrough">On-Site Architectural Walkthrough</option>
                      <option value="virtual-dossier">Digital Blueprint &amp; Video Review</option>
                    </select>
                  </div>
                </div>

                {/* Custom Notes */}
                <div>
                  <label className="block text-[11px] font-sans-arch uppercase tracking-[0.16em] text-[#14263D] font-semibold mb-2">
                    Specific Architectural Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    placeholder="Specify special floorplan customizations, art vault requirements, or acoustic preferences..."
                    className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm font-sans-arch text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#14263D] text-[#FBF9F4] font-sans-arch text-xs font-medium uppercase tracking-[0.18em] py-4 border border-[#14263D] hover:bg-[#1A304D] hover:border-[#A9824C] transition-all flex items-center justify-center space-x-3 cursor-pointer shadow-sm group"
                  >
                    <span>Request Confidential Archival Dossier</span>
                    <ArrowRight className="w-4 h-4 text-[#A9824C] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
