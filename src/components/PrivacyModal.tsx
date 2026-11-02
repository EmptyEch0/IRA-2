/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001126]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative bg-[#FDFBF7] border-2 border-[#14263D] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-[#D9D2C6] pb-4 mb-6">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-[#C59B4E]" />
            <h2 id="modal-privacy-title" className="font-serif-arch text-2xl text-[#14263D]">
              Privacy Policy &bull; IRA Promoters
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Privacy Policy"
            className="p-1.5 text-[#77736C] hover:text-[#14263D] border border-[#D9D2C6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm font-sans-arch text-[#20252B] leading-relaxed font-light">
          <p>
            At <strong>IRA Promoters</strong>, we respect your privacy and are committed to protecting the personal information you share with us.
          </p>

          <h4 className="font-semibold text-[#14263D] text-sm uppercase tracking-wider">
            1. Information We Collect
          </h4>
          <p>
            When you submit an enquiry or request a site visit through our website or WhatsApp link, we collect your Full Name, Phone Number, and optional messages or project preferences.
          </p>

          <h4 className="font-semibold text-[#14263D] text-sm uppercase tracking-wider">
            2. How We Use Your Information
          </h4>
          <p>
            Your information is collected solely to allow IRA Promoters representatives to respond to your specific property questions, provide verified legal documentation, share price estimates, and coordinate site visits.
          </p>

          <h4 className="font-semibold text-[#14263D] text-sm uppercase tracking-wider">
            3. Data Sharing &amp; Third Parties
          </h4>
          <p>
            We strictly do not sell, rent, or trade your personal contact details to external marketing companies or third-party lead brokers. All communications remain strictly between you and IRA Promoters.
          </p>

          <h4 className="font-semibold text-[#14263D] text-sm uppercase tracking-wider">
            4. Contacting Us
          </h4>
          <p>
            For any questions regarding our privacy practices, you may reach out to us directly at <strong>{COMPANY_DETAILS.email}</strong> or visit our office at {COMPANY_DETAILS.address}.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D9D2C6] text-right">
          <button
            onClick={onClose}
            className="bg-[#14263D] text-white px-6 py-2.5 text-xs uppercase tracking-widest cursor-pointer"
          >
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
