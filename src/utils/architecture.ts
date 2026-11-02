/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  category: 'Open Plots' | 'Residential Layout' | 'Flats & Apartments' | 'Farmland';
  status: 'Ongoing' | 'Completed';
  location: string;
  region: 'Visakhapatnam' | 'Bhogapuram' | 'Vizianagaram' | 'Srikakulam';
  areaRange: string;
  priceStartingINR: string;
  vaastuCompliant: boolean;
  legalVerification: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  layoutSpecs: {
    roadWidth: string;
    waterElectricity: string;
    drainage: string;
    security: string;
  };
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  message: string;
  consent: boolean;
  projectInterest?: string;
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const digitsOnly = phone.replace(/\D/g, '');
  const destination = digitsOnly.startsWith('91') ? digitsOnly : `91${digitsOnly}`;
  return `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppEnquiryMessage(data: {
  fullName: string;
  phone: string;
  message: string;
  projectInterest?: string;
}): string {
  let msg = `Hello IRA Promoters,\n\nI would like to enquire about your property opportunities.\n\n*Name:* ${data.fullName.trim()}\n*Phone:* ${data.phone.trim()}`;
  if (data.projectInterest) {
    msg += `\n*Project of Interest:* ${data.projectInterest.trim()}`;
  }
  msg += `\n*Message:* ${data.message.trim()}\n\nPlease share further details and site visit availability.`;
  return msg;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const cleanPhone = (data.phone || '').trim().replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please enter your enquiry message.';
  }

  if (!data.consent) {
    errors.consent = 'You must agree to submit this enquiry to proceed.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterProjects(
  projects: Project[],
  status: 'All' | 'Ongoing' | 'Completed' = 'All',
  category: string = 'All',
  searchQuery: string = ''
): Project[] {
  return projects.filter((p) => {
    const matchesStatus = status === 'All' || p.status === status;
    const matchesCategory =
      category === 'All' || p.category.toLowerCase().includes(category.toLowerCase());

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.region.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.highlights.some((h) => h.toLowerCase().includes(query));

    return matchesStatus && matchesCategory && matchesSearch;
  });
}
