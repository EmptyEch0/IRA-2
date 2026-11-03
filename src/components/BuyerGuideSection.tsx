/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BUYER_GUIDE_FAQS } from '../data/companyData';
import { AnimatedSection } from './AnimatedSection';
import { HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const BuyerGuideSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      num: '01',
      title: 'Site Visit & Selection',
      desc: 'Tour the ongoing layout in Anandapuram, Bhogapuram or Madhurawada with our executive. Verify facing and Vaastu suitability.',
    },
    {
      num: '02',
      title: 'Complete Document Inspection',
      desc: 'Review 30-year link documents, VMRDA/municipal approvals, Encumbrance Certificate (EC), and patta records with legal peace of mind.',
    },
    {
      num: '03',
      title: 'Booking & Loan Assistance',
      desc: 'Book your selected plot with a nominal advance. Avail swift bank loan coordination through nationalized and leading private banks.',
    },
    {
      num: '04',
      title: 'Sub-Registrar Spot Registration',
      desc: 'Execute immediate legal registration at the Sub-Registrar office with clear ownership deed, possession handover, and boundary pins.',
    },
  ];

  return (
    <section id="guide" className="py-24 lg:py-32 bg-[#F8F5EE] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">05</span>
              <div>
                <span className="label-caps text-[#77736C]">BUYER ADVISORY &bull; FAQs</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#0A192F] mt-1 font-bold">
                  Transparent Property Guidance.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="label-caps text-[#C59B4E] block">INFORMED DECISIONS</span>
              <span className="text-xs font-mono text-[#77736C]">GENUINE VALUE &bull; SAFE INVESTMENT</span>
            </div>
          </div>
        </AnimatedSection>

        {/* 4-Step Purchase Roadmap */}
        <AnimatedSection delay={150}>
          <div className="mb-16">
            <div className="label-caps text-[#C59B4E] mb-6">THE 4-STEP BUYER PROCESS AT IRA PROMOTERS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white border border-[#D9D2C6] p-6 hover:border-[#C59B4E] transition-all"
                >
                  <div className="flex justify-between items-center border-b border-[#D9D2C6] pb-3 mb-4">
                    <span className="font-serif-arch text-2xl text-[#C59B4E]">{step.num}</span>
                    <span className="w-1.5 h-1.5 bg-[#14263D]"></span>
                  </div>
                  <h4 className="font-serif-arch text-base font-semibold text-[#14263D] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#77736C] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQs Accordion */}
        <AnimatedSection delay={250}>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center mb-8">
              <div className="label-caps text-[#C59B4E]">FREQUENTLY ASKED QUESTIONS</div>
              <h3 className="font-serif-arch text-2xl sm:text-3xl text-[#14263D] mt-1">
                Everything You Need to Know Before Investing
              </h3>
            </div>

            {BUYER_GUIDE_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-[#D9D2C6] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-[#FDFBF7]"
                  >
                    <span className="font-serif-arch text-base sm:text-lg text-[#14263D] font-normal">
                      {faq.question}
                    </span>
                    <span className="text-[#C59B4E] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D9D2C6]/50 text-xs sm:text-sm font-sans-arch text-[#20252B] font-light leading-relaxed bg-[#FDFBF7]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
