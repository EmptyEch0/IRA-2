/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from '../utils/architecture';

export const COMPANY_DETAILS = {
  name: 'IRA Promoters',
  tagline: 'Happiness in every nook & corner',
  logoUrl: '/ira-logo.jpg',
  phone1: '9573960563',
  phone2: '8096441881',
  whatsappNumber: '9573960563',
  email: 'irapromoters@gmail.com',
  address: 'MIG-1/443, opposite Ibacco ice cream shop, PM Palem 2nd Bus Stop, Madhurawada, Visakhapatnam, Andhra Pradesh, India.',
  businessHours: 'Every day: 10:00 AM – 6:00 PM',
  instagram: 'https://www.instagram.com/irapromoters/',
  description:
    'IRA Promoters stands apart by putting trust, transparency, and legal verification before every property recommendation. We focus on carefully selected, Vaastu-compliant properties in strategic locations, offering affordable investment options with genuine value, customer-friendly plans, and long-term growth potential.',
  history:
    'With over three years of dedicated operations and multiple successful projects across Visakhapatnam, Vizianagaram, and Srikakulam, IRA Promoters has built a steadfast reputation as a trustworthy partner for open plots, residential layouts, farmland, and apartments.',
};

export const FOUNDERS = [
  {
    name: 'Mr. Ravi Ponduru',
    role: 'Founder',
    qualification: 'MBA in Marketing & Finance',
    experience: '~14 Years in Real-Estate Marketing & Entrepreneurship',
    bio: 'Mr. Ravi Ponduru holds an MBA in Marketing & Finance and brings approximately 14 years of rich, hands-on experience in the real-estate sector. A visionary entrepreneur with successful ventures in travels, fitness, and the restaurant industry, he guides IRA Promoters with strategic market acumen, financial discipline, and a customer-first philosophy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialties: ['Market Strategy', 'Financial Planning', 'Investor Relations', 'Strategic Land Acquisition'],
  },
  {
    name: 'Ms. Sudha Lalitha Pudipeddi',
    role: 'Co-Founder',
    qualification: 'B.Sc. Computers Graduate',
    experience: 'Real-Estate Marketing, Administration & Client Relations',
    bio: 'Ms. Sudha Lalitha Pudipeddi is a B.Sc. Computers graduate with seasoned expertise in real-estate marketing, general administration, team leadership, and client relationship management. After a 6-year career break dedicated to family and children, she resumed her professional journey as an Administrative Officer and honed her real-estate marketing craft with reputed firms including Swathi Promoters, Prakruti, and SSR Developers before co-founding IRA Promoters. She has driven the company’s operations and client trust for over 3 years.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialties: ['Client Relationship', 'Documentation & Compliance', 'Operations Management', 'Customer Guidance'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ira-golden-palms',
    name: 'IRA Golden Palms Layout',
    category: 'Open Plots',
    status: 'Ongoing',
    location: 'Anandapuram Corridor (near Madhurawada)',
    region: 'Visakhapatnam',
    areaRange: '150 – 500 Sq. Yards',
    priceStartingINR: '₹14.5 Lakhs onwards',
    vaastuCompliant: true,
    legalVerification: 'VMRDA Approved Layout • 100% Clear Title',
    tagline: 'Gated community open plots in the prime growth belt of Visakhapatnam',
    description:
      'Strategically positioned along the rapid growth corridor of Anandapuram with swift connectivity to Madhurawada IT SEZ and NH-16. Features 40-foot wide blacktop roads, underground drainage, avenue plantations, and 100% Vaastu alignment.',
    highlights: [
      'VMRDA Approved & Clear Title',
      '40ft & 33ft Wide Blacktop Roads',
      'Electricity with Transformer & Street Lighting',
      'Avenue Plantation & Children Play Park',
      '24/7 Gated Security & Perimeter Compound Wall',
      'Immediate Spot Registration Available',
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    layoutSpecs: {
      roadWidth: '40ft & 33ft BT Roads',
      waterElectricity: 'Piped Water Supply & Dedicated Transformer',
      drainage: 'Covered Drainage System',
      security: 'Gated Entrance Arch & Round-the-clock Security',
    },
  },
  {
    id: 'ira-green-meadows',
    name: 'IRA Green Meadows Farmland',
    category: 'Farmland',
    status: 'Ongoing',
    location: 'Bhogapuram International Airport Belt, NH-16',
    region: 'Bhogapuram',
    areaRange: '200 – 600 Sq. Yards',
    priceStartingINR: '₹9.8 Lakhs onwards',
    vaastuCompliant: true,
    legalVerification: '100% Clear Link Documents • Patta Passbooks',
    tagline: 'High-appreciation managed farmland plots near the upcoming international airport',
    description:
      'Capitalize on the monumental growth of the upcoming Bhogapuram International Airport. IRA Green Meadows offers managed agricultural and villa plots with organic drip irrigation, valuable sandalwood plantation, and wide access roads.',
    highlights: [
      'Minutes from Bhogapuram Greenfield Airport',
      'Valuable Managed Timber / Sandalwood Plantation',
      'Drip Irrigation with Borewell & Overhead Tank',
      'Clubhouse & Weekend Family Leisure Pavilion',
      'Solar Powered Street Lighting',
      'High Long-Term Capital Appreciation Potential',
    ],
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80',
    layoutSpecs: {
      roadWidth: '33ft Wide Metal Roads',
      waterElectricity: 'Continuous Solar Pump & Water Lines',
      drainage: 'Natural Eco-friendly Swales',
      security: 'Chain-link Fenced Perimeter & Caretaker Suite',
    },
  },
  {
    id: 'ira-sri-nilayam',
    name: 'IRA Sri Nilayam Heights',
    category: 'Flats & Apartments',
    status: 'Ongoing',
    location: 'PM Palem, Madhurawada',
    region: 'Visakhapatnam',
    areaRange: '1,150 – 1,680 Sq. Feet (2 & 3 BHK)',
    priceStartingINR: '₹48 Lakhs onwards',
    vaastuCompliant: true,
    legalVerification: 'Municipal Approved Plan • RERA Compliant Documentation',
    tagline: 'Modern 2 & 3 BHK Vaastu apartments in peaceful Madhurawada residential pocket',
    description:
      'Situated in PM Palem, Madhurawada—moments from colleges, hospitals, and transit hubs. Designed with generous natural ventilation, zero common walls for acoustic peace, automatic elevator, covered parking, and solar backup.',
    highlights: [
      'Prime PM Palem, Madhurawada Location',
      '100% East & North Facing Vaastu Floorplans',
      'No Common Walls for Optimal Privacy & Airflow',
      '8-Passenger Automatic Elevator with Generator Backup',
      'Reserved Covered Car & Two-Wheeler Parking',
      'Approved by Leading Nationalized Banks for Home Loans',
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    layoutSpecs: {
      roadWidth: '40ft Municipal Approach Road',
      waterElectricity: '24/7 Borewell & Municipal Drinking Water',
      drainage: 'Underground Sewerage System',
      security: 'CCTV Surveillance & Intercom Gate System',
    },
  },
  {
    id: 'ira-prakruthi-enclave',
    name: 'IRA Prakruthi Enclave',
    category: 'Residential Layout',
    status: 'Completed',
    location: 'Tagarapuvalasa / Bheemili Road',
    region: 'Visakhapatnam',
    areaRange: '167 – 350 Sq. Yards',
    priceStartingINR: '100% Handed Over & Sold Out',
    vaastuCompliant: true,
    legalVerification: 'Clear Title • Fully Handed Over',
    tagline: 'Successfully completed and handed over residential layout with happy homeowners',
    description:
      'One of our landmark completed projects. Delivered with full electrical connectivity, blacktop internal roads, water pipelines, and boundary demarcations. Multiple families have already initiated villa construction.',
    highlights: [
      '100% Sold Out & Registered to Satisfied Buyers',
      'Delivered On Schedule with Full Infrastructure',
      'Active Residential Community Living',
      'Direct Bheemili Beach & Highway Connectivity',
      'Clear Title & Complete Documentation Archiving',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    layoutSpecs: {
      roadWidth: '33ft BT Roads',
      waterElectricity: 'Individual Water Taps & Street Lights',
      drainage: 'Open Masonry Drains',
      security: 'Completed Compound Wall & Name Arch',
    },
  },
  {
    id: 'ira-srikakulam-pride',
    name: 'IRA Srikakulam Pride',
    category: 'Open Plots',
    status: 'Completed',
    location: 'Srikakulam Highway Corridor, NH-16',
    region: 'Srikakulam',
    areaRange: '150 – 400 Sq. Yards',
    priceStartingINR: '100% Handed Over & Sold Out',
    vaastuCompliant: true,
    legalVerification: 'Clear Title • Approved Plotted Development',
    tagline: 'Flagship plotted development project in the emerging commercial corridor of Srikakulam',
    description:
      'Successfully completed venture providing affordable, high-return residential and commercial plots on the Srikakulam NH-16 highway stretch. Backed by impeccable legal records and instant registrations.',
    highlights: [
      '100% Completed, Documented & Handed Over',
      'High Highway Visibility & Immediate Growth',
      'Underground Electrical Cables & Street Lamps',
      'Children Play Area & Avenue Greenery',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    layoutSpecs: {
      roadWidth: '40ft Main Spine Road',
      waterElectricity: 'Overhead Tank & Electrification Completed',
      drainage: 'Underground Drainage',
      security: 'Gated Security Cabin',
    },
  },
];

export const GALLERY_UPDATES = [
  {
    title: 'Anandapuram Layout BT Road Laying & Curbing',
    location: 'IRA Golden Palms, Anandapuram',
    date: 'Recent Site Update',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Customer Site Visit & Plot Demarcation',
    location: 'PM Palem & Madhurawada Vicinity',
    date: 'Weekend Site Visit',
    category: 'Site Visit',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Avenue Plantation & Green Landscaping Work',
    location: 'IRA Green Meadows, Bhogapuram Belt',
    date: 'Landscape Progress',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Overhead Water Tank & Transformer Commissioning',
    location: 'Tagarapuvalasa Sector',
    date: 'Utility Completion',
    category: 'Utilities',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
];

export const BUYER_GUIDE_FAQS = [
  {
    question: 'What legal verification does IRA Promoters conduct before recommending any property?',
    answer:
      'We enforce a strict 4-tier legal verification protocol before offering any property: (1) 30+ years link document tracing by senior civil advocates, (2) Encumbrance Certificate (EC) verification from the sub-registrar office, (3) Layout approval verification from VMRDA or local municipal town planning, and (4) Clear Patta / Revenue title verification. We guarantee 100% legal transparency.',
  },
  {
    question: 'Are all IRA Promoters plots and layouts 100% Vaastu-compliant?',
    answer:
      'Yes. Every layout is master-planned in consultation with experienced traditional Vaastu consultants. We prioritize East and North facing plots, rectangular boundary proportions, correct street-focus alignments (Veedhi Sula avoidance), and auspicious entrance placements.',
  },
  {
    question: 'How do I arrange a free site visit to the ongoing projects?',
    answer:
      'You can schedule a complimentary site visit directly through our website or via WhatsApp (9573960563). We arrange assisted vehicle pick-up and accompanied guidance by our team every day between 10:00 AM and 6:00 PM.',
  },
  {
    question: 'Are bank loans available for open plots and flats?',
    answer:
      'Yes. For our approved layouts and residential apartments, we have tie-ups with leading nationalized and private banks (including SBI, HDFC, ICICI, and LIC Housing Finance) to provide quick loan approvals and competitive interest rates.',
  },
  {
    question: 'Why is Visakhapatnam to Bhogapuram considered a prime real-estate growth corridor?',
    answer:
      'The expansion of the 6-lane NH-16 highway, the development of the Bhogapuram International Airport, IT SEZ expansions in Madhurawada, and upcoming coastal infrastructure projects make this belt the fastest appreciating real-estate corridor in Andhra Pradesh.',
  },
];
