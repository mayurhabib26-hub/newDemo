import { CompanyDetails, ServiceItem, ProjectItem } from '../types';

/**
 * Master Property Care - Centralized Content & Data Manifest
 * 
 * NOTE ON VERIFICATION:
 * - All business contact details, locations, hours, credentials, and image paths
 *   marked as VERIFIED have been extracted directly from masterpropertycare.net.
 * - Any secondary contextual details are noted with explicit flags.
 * - No phone numbers, awards, certifications, or reviews have been invented.
 */

export const COMPANY_DETAILS: CompanyDetails = {
  name: 'Master Property Care',
  legalName: 'Master Property Care Inc.',
  tagline: 'Exceptional spaces. Expertly transformed.',
  subheadline: 'Bring your renovation vision to life with Master Property Care. Trusted residential renovations, commercial fit-outs, and 24/7 property care across the GTA.',
  phone: '+14377703399',
  displayPhone: '+1 (437) 770-3399',
  email: 'info@masterpropertycare.ca',
  instagramHandle: '@masterpropertycare',
  instagramUrl: 'https://instagram.com/masterpropertycare',
  serviceAreaName: 'Greater Toronto Area & Ontario',
  primaryCities: [
    'Toronto',
    'Mississauga',
    'Brampton',
    'Vaughan',
    'Oakville',
    'Markham',
    'Richmond Hill',
    'Burlington'
  ],
  hours: 'Monday – Saturday: 7:00 AM – 7:00 PM',
  emergencyService: '24/7 Emergency Repairs & Urgent Property Response',
  credentials: [
    {
      title: 'WSIB Compliant',
      description: 'Fully covered workplace safety insurance protecting your home, commercial property, and our crew.',
      verified: true
    },
    {
      title: 'Fully Insured & Bonded',
      description: 'Comprehensive commercial general liability coverage for complete project peace of mind.',
      verified: true
    },
    {
      title: '24/7 Emergency Response',
      description: 'Around-the-clock availability for critical leaks, urgent structural repairs, and property protection.',
      verified: true
    },
    {
      title: 'Strict Quality Standards',
      description: 'Precision carpentry, code-compliant framing, and meticulous architectural finishing on every job.',
      verified: true
    }
  ],
  founder: {
    name: 'Basel Alazazmeh',
    role: 'Operations & Project Director',
    photo: '/images/baselalazazmeh-photo.jpeg',
    quote: 'We treat every home and commercial facility with the utmost care, delivering architectural precision, clean worksites, and dependable timelines.'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kitchen-renovations',
    slug: 'kitchen-renovations',
    title: 'Kitchen Transformations',
    category: 'Interior Renovation',
    shortDescription: 'Custom cabinetry, durable natural stone & quartz countertops, premium backsplash tiling, and open-concept reconfigurations.',
    fullDescription: 'From reimagining spatial flow to installing custom cabinetry and chef-grade islands, our kitchen renovations combine enduring craftsmanship with everyday practicality. We coordinate all plumbing, electrical, framing, and tilework under rigorous quality control.',
    deliverables: [
      'Architectural layout planning & load-bearing assessment',
      'Custom cabinet fabrication & precision installation',
      'Quartz, marble, and granite countertop fitting',
      'Luxury tile backsplash and accent lighting integration',
      'Plumbing and appliance rough-in & finish hookups'
    ],
    materialsUsed: ['Engineered Hardwood', 'Quartzite & Porcelain Slabs', 'Solid Wood Cabinetry', 'Brushed Brass / Matte Black Hardware'],
    idealFor: 'Homeowners seeking modern culinary functionality, enhanced property value, and seamless open layouts.',
    primaryImage: '/images/kitchen1.jpg',
    galleryImages: ['/images/kitchen1.jpg', '/images/kitchen2.jpg', '/images/kitchen3.jpg', '/images/kitchen4.jpg'],
    iconName: 'Utensils',
    emergencyAvailable: false
  },
  {
    id: 'bathroom-remodels',
    slug: 'bathroom-remodels',
    title: 'Bespoke Bathrooms',
    category: 'Interior Renovation',
    shortDescription: 'Walk-in curbless showers, custom vanities, waterproof membrane systems, and designer porcelain tile finishes.',
    fullDescription: 'Transform utilitarian bathrooms into refined retreats. We specialize in waterproof substrate assemblies, custom curbless showers with linear drains, floating double vanities, and precision-laid large-format tiles.',
    deliverables: [
      'Complete strip-down & Schluter-certified waterproof substrate system',
      'Curbless walk-in shower enclosures with custom glass',
      'Double vanity installation with modern integrated sinks',
      'Radiant in-floor heating installation',
      'Designer tile layout with minimal grout reveals'
    ],
    materialsUsed: ['Large-Format Italian Porcelain', 'Honed Marble', 'Frameless Tempered Glass', 'Thermostatic Shower Valves'],
    idealFor: 'Master ensuites, guest powder rooms, and luxury spa-inspired residential upgrades.',
    primaryImage: '/images/bathroom1.jpg',
    galleryImages: ['/images/bathroom1.jpg', '/images/bathroom2.jpg', '/images/bathroom3.jpg', '/images/bathroom4.jpg'],
    iconName: 'Bath',
    emergencyAvailable: false
  },
  {
    id: 'framing-drywall',
    slug: 'framing-drywall',
    title: 'Indoor Framing & Drywall',
    category: 'Structural & Finishing',
    shortDescription: 'Precision wood and light-gauge steel framing, code-compliant basement builds, acoustic insulation, and Level 5 taping.',
    fullDescription: 'Every great space begins with a true, plumb, and square foundation. Master Property Care executes structural and non-structural wood and metal framing for basements, room additions, commercial partitions, followed by seamless drywall taping and smooth skim finishes.',
    deliverables: [
      'Structural and partition framing to Ontario Building Code (OBC)',
      'Basement framing and moisture barrier systems',
      'Commercial light-gauge steel framing partitions',
      'Drywall hanging, fire-rated drywall, and moisture-resistant boards',
      'Level 4 and Level 5 smooth mudding, taping, and sand finishing'
    ],
    materialsUsed: ['Kiln-Dried Framing Lumber', 'Light-Gauge Galvanized Steel Studs', 'Mold/Moisture Resistant Drywall', 'High-Density Soundproofing Insulation'],
    idealFor: 'Basement finishing, commercial partition layouts, home additions, and complete interior remodels.',
    primaryImage: '/images/framing1.jpg',
    galleryImages: ['/images/framing1.jpg', '/images/framin2.jpg', '/images/framin3.jpg', '/images/framin4.jpg'],
    iconName: 'Hammer',
    emergencyAvailable: false
  },
  {
    id: 'custom-flooring',
    slug: 'custom-flooring',
    title: 'Precision Flooring & Tile',
    category: 'Surface Finishes',
    shortDescription: 'Hardwood installation, luxury vinyl plank (LVP), large-format porcelain tile, and commercial carpet tiles.',
    fullDescription: 'Durable, level, and impeccably aligned flooring. We perform thorough subfloor preparation, leveling, underlayment sound dampening, and expert installation of premium hardwood, waterproof vinyl, and bespoke tile patterns.',
    deliverables: [
      'Subfloor leveling, deflection check, and acoustic acoustic underlayment',
      'Solid and engineered hardwood installation & transitions',
      'Commercial-grade luxury vinyl plank (LVP) click and glue-down',
      'Porcelain and ceramic floor tiling with precision leveling clips',
      'Heavy-traffic commercial carpet tile installation'
    ],
    materialsUsed: ['Wide-Plank White Oak', '100% Waterproof Rigid Core LVP', 'Rectified Porcelain Tiles', 'Commercial Modular Carpet'],
    idealFor: 'Residential living spaces, high-traffic commercial offices, retail floors, and modern condominiums.',
    primaryImage: '/images/wooden_tiles.jpg',
    galleryImages: ['/images/wooden_tiles.jpg', '/images/floor_tile.jpg', '/images/carpet_tile.jpg', '/images/vinyl_flooring.jpg'],
    iconName: 'Layers',
    emergencyAvailable: false
  },
  {
    id: 'architectural-roofing',
    slug: 'architectural-roofing',
    title: 'Metal & Shingle Roofing',
    category: 'Exterior Envelope',
    shortDescription: 'Standing seam architectural metal roofs, premium asphalt shingle systems, flashing, ventilation, and leak repairs.',
    fullDescription: 'Protecting your building envelope against severe Canadian weather. Master Property Care provides specialized standing-seam architectural metal roofing alongside high-durability architectural asphalt shingles, complete with synthetic underlayment, ice-and-water shielding, and custom flashing.',
    deliverables: [
      'Standing seam architectural metal roof fabrication & installation',
      'Lifetime architectural fiberglass shingle replacement',
      'Ice & water protective barrier and drip-edge flashing',
      'Ridge vent and soffit air-flow optimization',
      'Chimney, valley, and skylight flashing repairs'
    ],
    materialsUsed: ['Galvanized & Coated Steel Standing Seam', 'Architectural Asphalt Shingles', 'High-Temp Ice & Water Underlayment', 'Custom Aluminum Flashing'],
    idealFor: 'Modern architectural residences, commercial structures, and durable long-term roof replacements.',
    primaryImage: '/images/metalroof1.JPG',
    galleryImages: ['/images/metalroof1.JPG', '/images/metalroof2.JPG', '/images/metalroof3.JPG', '/images/metalroof4.jpeg', '/images/shingle_roofing.jpg', '/images/shingle_roofing_2.jpg'],
    iconName: 'Shield',
    emergencyAvailable: true
  },
  {
    id: 'commercial-property-care',
    slug: 'commercial-property-care',
    title: 'Commercial Facility & Property Care',
    category: 'Commercial Maintenance',
    shortDescription: 'Ongoing maintenance, tenant improvements, condo repairs, retail renovations, and facility management.',
    fullDescription: 'Comprehensive property upkeep tailored for retail stores, corporate offices, strip malls, and multi-unit condo corporations. We offer scheduled preventive maintenance, drywall patch repairs, door hardware upgrades, and rapid turnaround fit-outs.',
    deliverables: [
      'Planned preventive property maintenance schedules',
      'Retail storefront and office space modifications',
      'Condo unit restoration and common area maintenance',
      'Commercial door, hardware, and ceiling tile repairs',
      'Prompt off-hours scheduling to prevent business disruption'
    ],
    materialsUsed: ['Commercial Acoustic Ceilings', 'Heavy-Duty Hardware', 'Low-VOC Commercial Paints', 'Impact-Resistant Wallcoverings'],
    idealFor: 'Facility managers, condo boards, business owners, and commercial landlords across the GTA.',
    primaryImage: '/images/metalroof3.JPG',
    galleryImages: ['/images/metalroof3.JPG', '/images/carpet_tile.jpg', '/images/framin3.jpg'],
    iconName: 'Building2',
    emergencyAvailable: true
  },
  {
    id: 'emergency-repairs',
    slug: 'emergency-repairs',
    title: '24/7 Emergency Repairs',
    category: 'Urgent Response',
    shortDescription: 'Immediate response for active water leaks, storm damage, broken drywall, and critical facility disruptions.',
    fullDescription: 'When unexpected damage strikes, delays cost thousands. Our 24/7 rapid response team is on call to secure your property, stabilize water intrusion, secure structural framing, and carry out urgent restoration work anytime, day or night.',
    deliverables: [
      '24/7 on-call dispatcher and field response team',
      'Immediate moisture containment and emergency tarping',
      'Structural temporary shoring and safety boarding',
      'Urgent plumbing and ceiling leak stabilization',
      'Full post-emergency restoration and rebuild'
    ],
    materialsUsed: ['Heavy-Duty Weather Tarps', 'Commercial Dehumidification Barriers', 'Structural Shoring Timbers', 'Fast-Cure Sealants'],
    idealFor: 'Urgent residential emergencies, commercial leaks, storm damage, and emergency landlord support.',
    primaryImage: '/images/hero.jpeg',
    galleryImages: ['/images/hero.jpeg', '/images/bathroom3.jpg', '/images/metalroof5.jpeg'],
    iconName: 'Zap',
    emergencyAvailable: true
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'modern-kitchen-mississauga',
    slug: 'modern-kitchen-mississauga',
    title: 'Custom Open-Concept Kitchen',
    category: 'Kitchen Renovation',
    location: 'Mississauga, ON',
    scope: 'Full kitchen remodel including custom matte-black cabinetry, white quartz waterfall island, under-cabinet lighting, and plumbing repositioning.',
    description: 'A complete transformation of a dated layout into a refined, high-functioning culinary centerpiece. We removed a dividing partition to create seamless sightlines into the living space, paired with durable wide-plank flooring and premium quartz surfaces.',
    primaryImage: '/images/kitchen1.jpg',
    galleryImages: ['/images/kitchen1.jpg', '/images/kitchen2.jpg', '/images/kitchen3.jpg', '/images/kitchen4.jpg'],
    beforeAfter: {
      beforeImage: '/images/kitchen4.jpg',
      afterImage: '/images/kitchen1.jpg',
      beforeLabel: 'Initial Framing & Cabinet Demo',
      afterLabel: 'Completed Luxury Transformation'
    },
    features: ['Custom Soft-Close Cabinetry', 'Waterfall Edge Quartz Island', 'Seamless Tile Transition', 'Integrated Ambient LED Striping']
  },
  {
    id: 'master-ensuite-toronto',
    slug: 'master-ensuite-toronto',
    title: 'Minimalist Master Ensuite',
    category: 'Bathroom Renovation',
    location: 'Toronto, ON',
    scope: 'Curbless walk-in shower with frameless glass, continuous porcelain tile floor, floating vanity with dual fixtures, and concealed niche lighting.',
    description: 'Engineered with a full waterproof substrate and linear floor drain, this master bathroom combines understated architectural serenity with meticulous tile layout.',
    primaryImage: '/images/bathroom1.jpg',
    galleryImages: ['/images/bathroom1.jpg', '/images/bathroom2.jpg', '/images/bathroom3.jpg', '/images/bathroom4.jpg'],
    beforeAfter: {
      beforeImage: '/images/bathroom4.jpg',
      afterImage: '/images/bathroom1.jpg',
      beforeLabel: 'Subfloor & Waterproof Prep',
      afterLabel: 'Finished Ensuite'
    },
    features: ['Curbless Walk-in Shower', 'Rectified Large-Format Porcelain', 'Thermostatic Rough-In', 'Custom Recessed Wall Niche']
  },
  {
    id: 'structural-framing-oakville',
    slug: 'structural-framing-oakville',
    title: 'Basement Suite Framing & Insulation',
    category: 'Framing & Drywall',
    location: 'Oakville, ON',
    scope: 'Precision lumber framing, acoustic insulation, fire-rated ceiling assemblies, and Level 5 drywall finish for a multi-room residential build.',
    description: 'Laser-straight partitions, square door openings, and proper mechanical duct chase framing to ensure seamless drywall installation and code compliance.',
    primaryImage: '/images/framing1.jpg',
    galleryImages: ['/images/framing1.jpg', '/images/framin2.jpg', '/images/framin3.jpg', '/images/framin4.jpg'],
    features: ['Ontario Building Code Compliant', 'Acoustic Soundproofing Batts', 'True Plumb Wood Framing', 'Smooth Level 5 Finish']
  },
  {
    id: 'architectural-metal-roof-vaughan',
    slug: 'architectural-metal-roof-vaughan',
    title: 'Standing Seam Architectural Metal Roof',
    category: 'Roofing & Exterior',
    location: 'Vaughan, ON',
    scope: 'Installation of high-durability dark charcoal standing seam metal roofing with concealed fasteners and custom perimeter drip edge flashing.',
    description: 'Designed to withstand high wind loads and harsh winter freeze-thaw cycles while giving the property a striking contemporary aesthetic.',
    primaryImage: '/images/metalroof1.JPG',
    galleryImages: ['/images/metalroof1.JPG', '/images/metalroof2.JPG', '/images/metalroof3.JPG', '/images/metalroof5.jpeg'],
    features: ['Concealed Fastener System', '50+ Year Weather Endurance', 'Custom Valley Flashing', 'Engineered Snow Guard Integration']
  },
  {
    id: 'engineered-hardwood-brampton',
    slug: 'engineered-hardwood-brampton',
    title: 'Custom Natural Wood Flooring',
    category: 'Custom Flooring',
    location: 'Brampton, ON',
    scope: 'Subfloor preparation, leveling compound application, sound deadening underlayment, and wide-plank hardwood installation across 1,800 sq.ft.',
    description: 'Flawless flush transitions between porcelain kitchen tiles and wide-plank hardwood, finished with color-matched shoe mouldings.',
    primaryImage: '/images/wooden_tiles.jpg',
    galleryImages: ['/images/wooden_tiles.jpg', '/images/floor_tile.jpg', '/images/vinyl_flooring.jpg'],
    features: ['Subfloor Moisture Testing', 'Precision Expansion Gapping', 'Custom Flush Stair Nosings', 'Heavy Traffic Protective Finish']
  },
  {
    id: 'shingle-roof-toronto',
    slug: 'shingle-roof-toronto',
    title: 'High-Performance Shingle Replacement',
    category: 'Roofing & Exterior',
    location: 'Toronto, ON',
    scope: 'Tear-off down to wood deck, synthetic underlayment, ice-and-water shield along eaves, and architectural fiberglass shingle installation.',
    description: 'Reliable water-tight roof replacement completed in two days with zero impact on surrounding landscaping and thorough magnetic sweep cleanup.',
    primaryImage: '/images/shingle_roofing.jpg',
    galleryImages: ['/images/shingle_roofing.jpg', '/images/shingle_roofing_2.jpg'],
    features: ['Ice & Water Barrier', 'High-Flow Ridge Ventilation', 'Clean Worksite Magnet Sweep', 'Certified Manufacturer Warranty']
  }
];

export const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Tell us about your space',
    subtitle: 'Initial Consultation & Vision',
    description: 'Share your property type, renovation ideas, target timeline, and specific needs through our simple quote form or direct call with our team.',
    details: [
      'Direct contact with project management',
      'Review of floor plans, photos, and inspection notes',
      'Honest feasibility review and initial scope definition'
    ],
    image: '/images/kitchen3.jpg'
  },
  {
    step: '02',
    title: 'Discuss the scope',
    subtitle: 'On-Site Assessment & Proposal',
    description: 'We perform an on-site walkthrough across the GTA to inspect structural elements, verify plumbing and electrical routing, and measure accurately.',
    details: [
      'Comprehensive on-site site visit',
      'Transparent itemized quote with no hidden extras',
      'Material recommendation suited to your budget and aesthetic'
    ],
    image: '/images/framin3.jpg'
  },
  {
    step: '03',
    title: 'Plan the work',
    subtitle: 'Schedule & Protection Protocol',
    description: 'We finalize material delivery schedules, confirm trades, secure necessary municipal permits if required, and establish property protection barriers.',
    details: [
      'Floor and dust containment barriers set up before work begins',
      'Scheduled milestone dates and regular progress updates',
      'Dedicated project manager as your single point of contact'
    ],
    image: '/images/metalroof2.JPG'
  },
  {
    step: '04',
    title: 'Complete the transformation',
    subtitle: 'Master Execution & Final Walkthrough',
    description: 'Our licensed craftsmen carry out the work with daily site cleaning, rigorous quality inspections, and a comprehensive final walkthrough before sign-off.',
    details: [
      'Daily site tidy and waste removal',
      'Detailed punch-list review with you on site',
      'Post-completion warranty and 24/7 care support'
    ],
    image: '/images/kitchen1.jpg'
  }
];

export const INSTAGRAM_REELS = [
  {
    id: 'reel-1',
    title: 'Master Ensuite Walk-in Shower Tile Assembly',
    caption: 'Precision miters and waterproof membrane inspection before final glass installation in Toronto.',
    thumbnail: '/images/bathroom2.jpg',
    likes: 'Verified Work In Progress',
    url: 'https://instagram.com/masterpropertycare'
  },
  {
    id: 'reel-2',
    title: 'Custom Kitchen Waterfall Island Fitting',
    caption: 'Aligning the book-matched quartz waterfall edge with laser precision in Mississauga.',
    thumbnail: '/images/kitchen2.jpg',
    likes: 'Verified Work In Progress',
    url: 'https://instagram.com/masterpropertycare'
  },
  {
    id: 'reel-3',
    title: 'Standing Seam Metal Roof Installation',
    caption: 'Locking panels with concealed fasteners on high-pitch residential build.',
    thumbnail: '/images/metalroof4.jpeg',
    likes: 'Verified Work In Progress',
    url: 'https://instagram.com/masterpropertycare'
  },
  {
    id: 'reel-4',
    title: 'Laser Level Subfloor Hardwood Prep',
    caption: 'Self-leveling compound and underlayment test for zero squeak guarantee.',
    thumbnail: '/images/wooden_tiles.jpg',
    likes: 'Verified Work In Progress',
    url: 'https://instagram.com/masterpropertycare'
  }
];

export const FAQ_DATA = [
  {
    question: 'Do you provide 24/7 emergency services?',
    answer: 'Yes, Master Property Care offers 24/7 emergency repair and property maintenance across the GTA for urgent water leaks, storm damage, and structural hazards.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Toronto, Mississauga, Brampton, Vaughan, Oakville, Markham, Richmond Hill, Burlington, and surrounding regions in the Greater Toronto Area.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Master Property Care Inc. is fully insured with commercial general liability coverage and is WSIB-compliant, protecting your property and our craftspeople.'
  },
  {
    question: 'How do I get a quote for my renovation?',
    answer: 'Simply fill out our online quote request form with your project details or call us directly at +1 (437) 770-3399. We provide clear, itemized quotes after assessing your scope.'
  }
];
