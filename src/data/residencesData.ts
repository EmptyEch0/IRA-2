/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Residence } from '../utils/architecture';

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  finish: string;
  acousticOrThermalRating: string;
  description: string;
  architecturalApplication: string;
  imageUrl: string;
}

export const RESIDENCES: Residence[] = [
  {
    id: 'aurelia-terraces',
    name: 'The Aurelia Terraces',
    subtitle: 'Penthouse Sky Pavilion',
    typology: 'Sky Residence',
    location: 'Bangalore Hills Estate, High Ridge',
    sqft: 6400,
    bedrooms: 4,
    bathrooms: 5,
    priceINR: 18.5,
    ceilingHeight: '4.2m',
    acousticIsolation: 'STC 44 (Acoustic Sanctuary)',
    completionYear: 2026,
    tagline: 'Suspended sanctuary overlooking the horizon',
    narrative:
      'Engineered atop the highest elevation, The Aurelia Terraces marries panoramic uninterrupted horizon vistas with deep stone colonnades. Cast monolithic slabs create cantilevered private sky gardens, each equipped with private thermal plunge pools and sheltered acoustic loggias that buffer all urban resonance.',
    materials: ['Honed Roman Travertine', 'Fluted Bronze Glass', 'Smoked European Oak'],
    specs: {
      orientation: 'North-East Dual Aspect',
      totalFloors: 2,
      privatePool: true,
      valetBays: 3,
      solarOffset: '65% Clean Microgrid',
      airPurity: 'MERV 16 Hospital Grade Filtration',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    floorplans: [
      {
        level: 'Lower Reception Level',
        areaSqFt: 3600,
        features: [
          'Double-Height Grand Living Salon (4.2m ceiling)',
          'Chef Culinary Atelier & Cold Storage Vault',
          'Private Formal Dining Room for 14 Guests',
          'East-Facing Morning Tea Courtyard',
        ],
      },
      {
        level: 'Upper Suite Sanctuary',
        areaSqFt: 2800,
        features: [
          'Primary Master Suite with Dual Walk-in Dressing Suites',
          'Private Cantilevered Lap Pool (12m x 3.5m)',
          'Acoustic Library & Executive Work Salon',
          '3 En-suite Guest Pavilions',
        ],
      },
    ],
  },
  {
    id: 'solis-pavilion',
    name: 'Solis Pavilion',
    subtitle: 'Monolithic Travertine Estate',
    typology: 'Estate Pavilion',
    location: 'Mysore Heritage Enclave, Ridge Line',
    sqft: 8200,
    bedrooms: 5,
    bathrooms: 6,
    priceINR: 24.0,
    ceilingHeight: '3.9m',
    acousticIsolation: 'STC 46 (Total Isolation)',
    completionYear: 2026,
    tagline: 'A monumental dialogue between stone and stillness',
    narrative:
      'A ground-hugging masterpiece sculpted from hand-quarried travertine blocks. Solis Pavilion surrounds an expansive internal water courtyard with mature frangipani and sculptural basalt rocks. Floor-to-ceiling recessed glazing retracts seamlessly into stone pockets, erasing boundaries between interior salons and open sky.',
    materials: ['Roman Travertine', 'Cast White Concrete', 'Aged Brushed Brass'],
    specs: {
      orientation: 'Quadruple Compass Orientation',
      totalFloors: 2,
      privatePool: true,
      valetBays: 5,
      solarOffset: '80% Geothermal & Solar Tile',
      airPurity: 'Active Continuous HEPA Positive Pressure',
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    floorplans: [
      {
        level: 'Ground Water Pavilion',
        areaSqFt: 5200,
        features: [
          'Central Water Court with Zero-Edge Reflecting Pool',
          'Expansive Living & Music Salon with Acoustical Slats',
          'Wine Archival Tasting Room (800 Bottles)',
          'Private Wellness Suite with Steam Sanctuary',
        ],
      },
      {
        level: 'Private Bedroom Gallery',
        areaSqFt: 3000,
        features: [
          'Master Sanctuary overlooking Water Court',
          '4 Private Garden Bedroom Wings with En-suites',
          'Screening Salon with Reference Sound Dampening',
          'Dedicated Butler & Staff Residence Wing',
        ],
      },
    ],
  },
  {
    id: 'kanso-residence',
    name: 'The Kanso Residence',
    subtitle: 'Minimalist Courtyard Villa',
    typology: 'Courtyard Villa',
    location: 'Whitefield Green Corridor, South Grove',
    sqft: 5100,
    bedrooms: 4,
    bathrooms: 4,
    priceINR: 15.2,
    ceilingHeight: '3.8m',
    acousticIsolation: 'STC 42 (Honed Quietude)',
    completionYear: 2027,
    tagline: 'The art of reduction and architectural light',
    narrative:
      'Grounded in the Japanese philosophy of Kanso (simplicity and elimination of clutter), this courtyard villa utilizes light lime plaster, linear skylights, and dark oiled cedar screens. Sunlight tracks across bare plaster walls throughout the day, creating an ever-shifting tapestry of shadow and serenity.',
    materials: ['Natural Lime Plaster', 'Quarter-Sawn Smoked Oak', 'Honed Basalt'],
    specs: {
      orientation: 'North-South Biophilic Axis',
      totalFloors: 2,
      privatePool: true,
      valetBays: 3,
      solarOffset: '70% Rooftop Monocrystalline Array',
      airPurity: 'Biophilic Botanical Air Scrubber Integration',
    },
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=85',
    floorplans: [
      {
        level: 'Garden Atrium Level',
        areaSqFt: 3100,
        features: [
          'Central Zen Garden with Japanese Maple & Raked Gravel',
          'Open-Plan Tea & Living Pavilion',
          'Concealed Pantry & Service Quarters',
          'Sunken Fireside Discussion Pit',
        ],
      },
      {
        level: 'Upper Mezzanine',
        areaSqFt: 2000,
        features: [
          'Master Suite with Stone-Carved Soaking Tub',
          '3 En-Suite Bedrooms with Private Timber Balconies',
          'Archival Reading & Meditation Loft',
        ],
      },
    ],
  },
  {
    id: 'meridian-court',
    name: 'Meridian Court',
    subtitle: 'Archival Duplex Residence',
    typology: 'Sky Residence',
    location: 'Central Promenade, Prime District',
    sqft: 4800,
    bedrooms: 3,
    bathrooms: 4,
    priceINR: 13.8,
    ceilingHeight: '4.0m',
    acousticIsolation: 'STC 45 (Gallery Specification)',
    completionYear: 2026,
    tagline: 'Art collector duplex with monumental gallery heights',
    narrative:
      'Designed expressly for custodians of contemporary art and structural literature. Features unbroken 12-meter gallery walls treated with museum-grade non-reflective micro-cement, museum standard UV filtering on all fenestration, and temperature-controlled storage vaults.',
    materials: ['Architectural Micro-Cement', 'Brushed Bronze Hardware', 'Calacatta Marble'],
    specs: {
      orientation: 'Direct North Unfiltered Diffuse Light',
      totalFloors: 2,
      privatePool: false,
      valetBays: 2,
      solarOffset: '55% Clean Grid',
      airPurity: 'Museum-Spec Relative Humidity & Carbon Filters',
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    floorplans: [
      {
        level: 'Grand Gallery Level',
        areaSqFt: 2800,
        features: [
          'Monumental 4-meter Gallery Exhibition Wall',
          'Sculpture Terrace overlooking Skyline',
          'Culinary Laboratory with Concealed Extraction',
          'Guest Reception Salon',
        ],
      },
      {
        level: 'Private Upper Residence',
        areaSqFt: 2000,
        features: [
          'Primary Suite with Architectural Wardrobes',
          '2 Secondary Suites with En-Suite Stone Baths',
          'Archival Study with Steel Bookcases',
        ],
      },
    ],
  },
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'travertine',
    name: 'Honed Roman Travertine',
    category: 'Natural Stone',
    origin: 'Tivoli, Italy',
    finish: 'Vein-Cut, Matte Silk Seal (Zero Gloss)',
    acousticOrThermalRating: 'High Thermal Mass (R-Value 4.8 / m²K)',
    description:
      'Extracted from the ancient quarries of Tivoli, this porous stone is cross-cut and delicately honed to preserve its organic cavities while offering a velvet tactile finish.',
    architecturalApplication:
      'Monolithic facade cladding, exterior colonnades, interior gallery walls, and floor plinths.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'acoustic-glass',
    name: 'Fluted Bronze Glazing',
    category: 'Architectural Glazing',
    origin: 'Saint-Gobain, Germany',
    finish: 'Low-Iron Fluted Bronze, Non-Reflective Coating',
    acousticOrThermalRating: 'STC 44 Sound Isolation, 99.4% UV Rejection',
    description:
      'Custom architectural glass with subtle vertical fluting that diffuses harsh direct sunlight into warm vertical ribbons of ambient luminescence while shielding interior privacy.',
    architecturalApplication:
      'Double-height pavilion curtain walls, private bathroom enclosures, and skylight clerestories.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brushed-brass',
    name: 'Aged Brushed Brass',
    category: 'Metals & Hardware',
    origin: 'Birmingham, United Kingdom',
    finish: 'Hand-Rubbed Organic Wax Patina',
    acousticOrThermalRating: 'Solid Marine Grade Brass, Salt & Moisture Resilient',
    description:
      'Unlacquered architectural brass deliberately hand-finished with natural beeswax. Over decades of human touch, the metal develops an authentic, graceful patina unique to the residence.',
    architecturalApplication:
      'Entry pivot handles, structural framing trims, joinery shadowlines, and lighting fittings.',
    imageUrl:
      'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'white-concrete',
    name: 'Monolithic White Concrete',
    category: 'Structural Elements',
    origin: 'Regional Aggregate, In-Situ Cast',
    finish: 'Board-Formed Douglas Fir Grain Impression',
    acousticOrThermalRating: '65 MPa Compressive Strength, 100-Year Life Cycle',
    description:
      'Crafted with white Portland cement and washed river sands, cast against weathered timber planks to impart a raw yet delicate wood-grain texture upon the monolithic mass.',
    architecturalApplication:
      'Cantilevered roof overhangs, deep loggia lintels, and structural shear walls.',
    imageUrl:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'smoked-oak',
    name: 'Quarter-Sawn Smoked Oak',
    category: 'Architectural Millwork',
    origin: 'FSC-Certified Black Forest, Germany',
    finish: 'Wire-Brushed, Deep Smoke Infused, Matte Hardwax Oil',
    acousticOrThermalRating: 'Acoustic Sound Absorption NRC 0.35',
    description:
      'Slow-smoked oak timber cut with quarter-sawn grain geometry for absolute dimensional stability. Wire-brushed to reveal tactile grain ridges under bare feet.',
    architecturalApplication:
      'Bedroom salon flooring, concealed acoustic wall paneling, and bespoke kitchen joinery.',
    imageUrl:
      'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'The Honed Proportion',
    subtitle: 'Golden Section & Spatial Restraint',
    description:
      'Every ceiling height, corridor breadth, and portal is calculated using classical harmonic ratios. We reject arbitrary geometric forms in favor of deliberate orthogonal volumes that ground the human spirit.',
  },
  {
    number: '02',
    title: 'The Acoustic Sanctuary',
    subtitle: '42+ dB Structural Decoupling',
    description:
      'True luxury in the modern world is absolute auditory stillness. Floating concrete slabs, acoustic isolation gaskets, and triple-laminated glazed membranes isolate each residence into a serene acoustic sanctuary.',
  },
  {
    number: '03',
    title: 'The Living Courtyard',
    subtitle: 'Microclimate & Filtered Light',
    description:
      'Architecture should breathe. Our internal courtyards induce passive thermodynamic cross-ventilation, cooling the residence naturally by 4°C to 6°C while welcoming dappled foliage shadows into every corner.',
  },
  {
    number: '04',
    title: 'Material Truth',
    subtitle: 'Substances that Age with Dignity',
    description:
      'We use only genuine geological stone, solid marine-grade metals, and dense hardwoods. Materials that never peel or degrade, but rather acquire dignity, depth, and character through the decades.',
  },
];

export const METRIC_FACTS = [
  {
    numeral: '01',
    value: '100%',
    metric: 'Bespoke Sourced Materials',
    annotation: 'Every stone block and glazed portal is individually numbered and dry-laid before installation.',
  },
  {
    numeral: '02',
    value: '4.2m',
    metric: 'Monumental Ceiling Heights',
    annotation: 'Full-bleed volumetric spaces delivering uninhibited airflow and museum-grade spatial scale.',
  },
  {
    numeral: '03',
    value: '45 dB',
    metric: 'Acoustic Attenuation Datum',
    annotation: 'Engineered structural membranes delivering complete isolation from exterior urban resonance.',
  },
  {
    numeral: '04',
    value: '40+ Yrs',
    metric: 'Structural Engineering Guarantee',
    annotation: 'Monolithic concrete foundations designed for generational permanence and longevity.',
  },
];
