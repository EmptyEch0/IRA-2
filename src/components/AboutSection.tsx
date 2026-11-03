/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { AnimatedSection } from './AnimatedSection';
import { ShieldCheck, Eye, Compass, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Trust & Transparency',
      desc: 'No hidden conditions or ambiguous clauses. We believe every customer deserves complete legal clarity before placing an investment.',
      icon: Eye,
    },
    {
      title: 'Rigorous Legal Verification',
      desc: 'Every layout and apartment undergo 30+ years link document tracing, encumbrance verification, and regulatory clearance checks.',
      icon: ShieldCheck,
    },
    {
      title: '100% Vaastu Compliance',
      desc: 'Master plans are formulated strictly adhering to traditional Vaastu principles for prosperous, harmonious family living.',
      icon: Compass,
    },
    {
      title: 'Strategic High-Growth Corridors',
      desc: 'We select locations poised for genuine capital appreciation—such as Anandapuram, Bhogapuram Airport belt, and Madhurawada.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8F5EE] border-b border-[#D9D2C6]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D2C6] pb-8 mb-16">
            <div className="flex items-start space-x-5">
              <span className="chapter-numeral text-[#C59B4E] select-none">01</span>
              <div>
                <span className="label-caps text-[#77736C]">ABOUT US &bull; OUR IDENTITY</span>
                <h2 className="font-serif-arch text-3xl sm:text-5xl text-[#0A192F] mt-1 font-bold">
                  Putting Trust &amp; Legal Scrutiny First.
                </h2>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="label-caps text-[#C59B4E] block">OPERATIONAL HERITAGE</span>
              <span className="font-serif-arch text-lg text-[#14263D]">
                3+ Years of Continuous Excellence
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative (6 cols) */}
          <AnimatedSection delay={150} className="lg:col-span-6 space-y-6">
            <div className="bg-white border-l-4 border-[#C59B4E] p-6 sm:p-8 shadow-xs">
              <p className="font-serif-arch text-xl sm:text-2xl text-[#0A192F] font-semibold leading-relaxed italic">
                &ldquo;IRA Promoters stands apart by putting trust, transparency, and legal verification before every property recommendation.&rdquo;
              </p>
            </div>

            <div className="space-y-4 font-sans-arch text-[#20252B] leading-relaxed text-sm sm:text-base font-light">
              <p>
                Founded in Visakhapatnam, IRA Promoters was established with a clear mandate: to provide common buyers and discerning families with dependable, fully-vetted real estate opportunities without the uncertainty and stress often associated with land acquisition.
              </p>
              <p>
                Over the past three years, our team has steered multiple landmark layouts to successful completion and handovers across Visakhapatnam, Srikakulam, and Vizianagaram. We believe that a plot or home is a family&apos;s most cherished financial foundation, deserving uncompromising attention to legal cleanliness and authentic growth value.
              </p>
              <p className="text-xs text-[#77736C]">
                Whether you seek an open plot in an expanding residential layout, high-yield farmland near the upcoming Bhogapuram International Airport, or a Vaastu-compliant apartment flat in PM Palem, IRA Promoters provides end-to-end guidance from preliminary enquiry to final registered deed.
              </p>
            </div>

            {/* Quick 3-Year Milestone Banner */}
            <div className="bg-[#14263D] text-[#FDFBF7] p-6 border border-[#C59B4E]/30 flex items-center space-x-6">
              <div className="border border-[#C59B4E] p-3 text-center shrink-0">
                <span className="font-serif-arch text-3xl font-bold text-[#C59B4E]">3+</span>
                <span className="text-[10px] uppercase tracking-widest block text-[#cbc6bd]">YEARS</span>
              </div>
              <div>
                <h4 className="font-serif-arch text-lg font-medium text-white">Proven Track Record</h4>
                <p className="text-xs text-[#cbc6bd] font-light mt-0.5">
                  Over three years of transparent operations, multiple ventures successfully handed over to proud owners.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Pillars & Visual (6 cols) */}
          <AnimatedSection delay={300} className="lg:col-span-6 space-y-6">
            {/* Visual with logo emblem overlay */}
            <div className="relative border border-[#D9D2C6] bg-white p-2 shadow-sm overflow-hidden aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="IRA Promoters Visakhapatnam Layout Planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/95 border border-[#C59B4E]/40 p-2 shadow-md">
                <img
                  src={COMPANY_DETAILS.logoUrl}
                  alt="IRA Promoters Emblem"
                  className="h-10 w-auto"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-[#14263D]/95 text-white px-4 py-1.5 border border-[#C59B4E]/40">
                <span className="label-caps text-[#C59B4E]">GENUINE PROPERTIES &bull; TRANSPARENT DEEDS</span>
              </div>
            </div>

            {/* 4 Trust Pillars Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white border border-[#D9D2C6] p-5 hover:border-[#C59B4E] transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#C59B4E] mb-2" />
                    <h4 className="font-serif-arch text-base font-semibold text-[#14263D] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#77736C] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
