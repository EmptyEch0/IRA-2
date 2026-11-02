/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppLink,
  generateWhatsAppEnquiryMessage,
  validateContactForm,
  filterProjects,
  type Project,
  type ContactFormData,
} from './architecture';

test('buildWhatsAppLink formats valid WhatsApp URL with encoded message', () => {
  const url = buildWhatsAppLink('9573960563', 'Hello IRA Promoters');
  assert.equal(url, 'https://wa.me/919573960563?text=Hello%20IRA%20Promoters');

  const urlWithCountryCode = buildWhatsAppLink('+91 9573960563', 'Test');
  assert.equal(urlWithCountryCode, 'https://wa.me/919573960563?text=Test');
});

test('generateWhatsAppEnquiryMessage formats name, phone and message', () => {
  const msg = generateWhatsAppEnquiryMessage({
    fullName: 'Ramesh Varma',
    phone: '9573960563',
    message: 'Interested in Anandapuram open plots.',
    projectInterest: 'IRA Golden Palms',
  });
  assert.ok(msg.includes('Ramesh Varma'));
  assert.ok(msg.includes('9573960563'));
  assert.ok(msg.includes('IRA Golden Palms'));
  assert.ok(msg.includes('Interested in Anandapuram open plots.'));
});

test('validateContactForm checks required fields strictly according to spec', () => {
  const invalidData: ContactFormData = {
    fullName: '',
    phone: '123',
    message: '',
    consent: false,
  };

  const validation = validateContactForm(invalidData);
  assert.equal(validation.isValid, false);
  assert.ok(validation.errors.fullName);
  assert.ok(validation.errors.phone);
  assert.ok(validation.errors.message);
  assert.ok(validation.errors.consent);

  const validData: ContactFormData = {
    fullName: 'Suresh Kumar',
    phone: '9848022334',
    message: 'Looking for 200 sq.yards east-facing plot.',
    consent: true,
  };

  const validResult = validateContactForm(validData);
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('filterProjects correctly separates ongoing and completed projects', () => {
  const sampleProjects: Project[] = [
    {
      id: 'p1',
      name: 'IRA Golden Palms',
      category: 'Open Plots',
      status: 'Ongoing',
      location: 'Anandapuram',
      region: 'Visakhapatnam',
      areaRange: '150 - 400 Sq.Yds',
      priceStartingINR: '₹14 Lakhs',
      vaastuCompliant: true,
      legalVerification: 'VMRDA Approved',
      tagline: 'Gated community plots',
      description: 'Strategic plots',
      highlights: ['40ft Blacktop Roads'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      layoutSpecs: {
        roadWidth: '40ft',
        waterElectricity: 'Available',
        drainage: 'Underground',
        security: '24/7 Gated',
      },
    },
    {
      id: 'p2',
      name: 'IRA Prakruthi Enclave',
      category: 'Residential Layout',
      status: 'Completed',
      location: 'Tagarapuvalasa',
      region: 'Visakhapatnam',
      areaRange: '167 - 350 Sq.Yds',
      priceStartingINR: 'Completed',
      vaastuCompliant: true,
      legalVerification: 'Clear Title',
      tagline: 'Fully handed over',
      description: 'Handed over layout',
      highlights: ['Water tap connections'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      layoutSpecs: {
        roadWidth: '33ft',
        waterElectricity: 'Handed over',
        drainage: 'Covered',
        security: 'Compound wall',
      },
    },
  ];

  const ongoingOnly = filterProjects(sampleProjects, 'Ongoing', 'All', '');
  assert.equal(ongoingOnly.length, 1);
  assert.equal(ongoingOnly[0].id, 'p1');

  const completedOnly = filterProjects(sampleProjects, 'Completed', 'All', '');
  assert.equal(completedOnly.length, 1);
  assert.equal(completedOnly[0].id, 'p2');
});
