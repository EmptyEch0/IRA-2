/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESIDENCES } from '../data/residencesData';
import { generateDossierReference } from '../utils/architecture';
import { X, Calendar, Clock, Sun, Moon, Sunrise, CheckCircle2, Copy, Check } from 'lucide-react';

interface ViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ViewingModal: React.FC<ViewingModalProps> = ({ isOpen, onClose }) => {
  const [residenceId, setResidenceId] = useState(RESIDENCES[0].id);
  const [selectedSlot, setSelectedSlot] = useState('twilight');
  const [date, setDate] = useState('2026-11-15');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<{
    passNumber: string;
    residenceName: string;
    date: string;
    slotName: string;
    guestName: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const slots = [
    {
      id: 'morning',
      time: '10:00 AM – 11:30 AM',
      name: 'Morning Solar Aperture',
      desc: 'Ideal for evaluating natural daylighting and morning courtyard thermal breeze.',
      icon: Sunrise,
    },
    {
      id: 'twilight',
      time: '05:30 PM – 07:00 PM',
      name: 'Golden Hour Horizon',
      desc: 'Sunset evaluation, transition lighting, and twilight travertine glow.',
      icon: Sun,
    },
    {
      id: 'acoustic',
      time: '07:30 PM – 09:00 PM',
      name: 'Acoustic Stillness Salon',
      desc: 'Complete night isolation, STC 45 decoupling test, and ambient illumination.',
      icon: Moon,
    },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !phone.trim()) return;

    const selectedRes = RESIDENCES.find((r) => r.id === residenceId);
    const chosenSlot = slots.find((s) => s.id === selectedSlot);
    const passCode = generateDossierReference('IRA-VIP');

    setConfirmedBooking({
      passNumber: passCode,
      residenceName: selectedRes ? selectedRes.name : 'The Aurelia Terraces',
      date: date,
      slotName: chosenSlot ? `${chosenSlot.name} (${chosenSlot.time})` : 'Private Salon',
      guestName: guestName,
    });
  };

  const handleCopy = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.passNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-viewing-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001126]/85 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative bg-[#FBF9F4] border-2 border-[#14263D] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-[#14263D] text-[#FBF9F4] px-6 py-4 flex items-center justify-between border-b border-[#A9824C]/40">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#A9824C]"></span>
            <span className="label-caps text-[#FBF9F4]">
              PRIVATE SALON RESERVATION &bull; IRA CONCIERGE
            </span>
          </div>

          <button
            onClick={() => {
              setConfirmedBooking(null);
              onClose();
            }}
            aria-label="Close Reservation"
            className="p-1.5 text-[#cbc6bd] hover:text-white border border-[#A9824C]/40 hover:border-[#A9824C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {confirmedBooking ? (
            /* Confirmation Pass View */
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-[#A9824C]" />
                <span className="label-caps text-[#A9824C]">PRIVATE SALON PASS ISSUED</span>
              </div>

              <h2
                id="modal-viewing-title"
                className="font-serif-arch text-3xl text-[#14263D]"
              >
                Viewing Pass Confirmed.
              </h2>

              <p className="text-sm font-sans-arch text-[#20252B] font-light leading-relaxed">
                Welcome, <strong className="font-semibold">{confirmedBooking.guestName}</strong>. 
                Your private viewing salon for <strong className="font-semibold">{confirmedBooking.residenceName}</strong> has been secured. Our Chief Concierge will welcome you at the private reception gate.
              </p>

              <div className="bg-[#14263D] text-[#FBF9F4] p-6 border border-[#A9824C]/50 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#A9824C]">
                    RESERVATION PASS CODE
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-[#cbc6bd] hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="font-mono text-2xl font-bold tracking-wider">
                  {confirmedBooking.passNumber}
                </div>
                <div className="border-t border-[#A9824C]/30 pt-3 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#cbc6bd] block text-[10px] uppercase">DATE:</span>
                    <span>{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="text-[#cbc6bd] block text-[10px] uppercase">LIGHTING ATELIER:</span>
                    <span>{confirmedBooking.slotName}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  onClose();
                }}
                className="w-full bg-[#14263D] text-[#FBF9F4] py-3.5 text-xs uppercase tracking-widest font-sans-arch hover:bg-[#1A304D] transition-colors cursor-pointer"
              >
                Close Pass
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBook} className="space-y-6">
              <div>
                <span className="label-caps text-[#A9824C]">ATMOSPHERIC EVALUATION</span>
                <h2
                  id="modal-viewing-title"
                  className="font-serif-arch text-3xl text-[#14263D] mt-1"
                >
                  Schedule Private Salon Viewing.
                </h2>
                <p className="text-xs text-[#77736C] font-light mt-1">
                  Private viewings are limited to one client party per session to preserve absolute stillness.
                </p>
              </div>

              {/* Residence Choice */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#14263D] font-semibold mb-2">
                  Select Residence
                </label>
                <select
                  value={residenceId}
                  onChange={(e) => setResidenceId(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm text-[#14263D] focus:outline-none focus:border-[#A9824C]"
                >
                  {RESIDENCES.map((res) => (
                    <option key={res.id} value={res.id}>
                      {res.name} — {res.typology}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lighting & Atmospheric Session Choice */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#14263D] font-semibold mb-2">
                  Choose Lighting &amp; Atmospheric Session
                </label>
                <div className="space-y-2.5">
                  {slots.map((slot) => {
                    const isSelected = selectedSlot === slot.id;
                    const Icon = slot.icon;
                    return (
                      <div
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`p-3.5 border transition-all cursor-pointer flex items-start space-x-3.5 ${
                          isSelected
                            ? 'bg-[#14263D] text-[#FBF9F4] border-[#14263D]'
                            : 'bg-white text-[#14263D] border-[#D9D2C6] hover:border-[#A9824C]'
                        }`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-[#A9824C]' : 'text-[#77736C]'}`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif-arch text-base font-medium">{slot.name}</span>
                            <span className={`text-[11px] font-mono ${isSelected ? 'text-[#A9824C]' : 'text-[#77736C]'}`}>
                              {slot.time}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#cbc6bd]' : 'text-[#77736C]'}`}>
                            {slot.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-[#14263D] font-semibold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C6] px-4 py-3 text-sm text-[#14263D] focus:outline-none focus:border-[#A9824C]"
                  required
                />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#14263D] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white border border-[#D9D2C6] px-4 py-2.5 text-sm text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-[#14263D] font-semibold mb-1">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D9D2C6] px-4 py-2.5 text-sm text-[#14263D] placeholder-[#77736C] focus:outline-none focus:border-[#A9824C]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#14263D] text-[#FBF9F4] py-4 text-xs uppercase tracking-[0.18em] font-sans-arch hover:bg-[#1A304D] border border-[#14263D] transition-colors cursor-pointer"
                >
                  Confirm Private Salon Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
