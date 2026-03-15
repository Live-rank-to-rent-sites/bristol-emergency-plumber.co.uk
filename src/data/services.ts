export interface SubService {
  slug: string;
  name: string;
  shortLabel?: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: string;
  ogImage?: string;
  subServices?: SubService[];
}

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumber",
    name: "Emergency Plumber",
    shortLabel: "24/7 emergency plumbing response",
    description: "Fast emergency plumbing services in Bristol. Burst pipes, leaks, and plumbing failures fixed day or night.",
    icon: "🚨",
    ogImage: "/og/emergency-plumber-og.jpg",
    subServices: [
      {
        slug: "burst-pipes",
        name: "Burst Pipes",
        shortLabel: "Burst pipe repair",
        description: "Rapid repair of burst pipes to prevent flooding and water damage to your Bristol property.",
      },
      {
        slug: "water-leak-repair",
        name: "Water Leak Repair",
        shortLabel: "Leak detection and repair",
        description: "Expert detection and repair of hidden and visible water leaks in domestic and commercial properties.",
      },
      {
        slug: "frozen-pipes",
        name: "Frozen Pipes",
        shortLabel: "Frozen pipe thawing",
        description: "Safe thawing and repair of frozen pipes to restore water supply and prevent pipe damage.",
      },
    ],
  },
  {
    slug: "boiler-repair",
    name: "Boiler Repair",
    shortLabel: "Emergency boiler repairs and servicing",
    description: "Expert boiler repair and servicing in Bristol. All makes and models covered, Gas Safe registered engineers.",
    icon: "🔥",
    ogImage: "/og/boiler-repair-og.jpg",
    subServices: [
      {
        slug: "boiler-breakdown",
        name: "Boiler Breakdown",
        shortLabel: "Emergency boiler breakdown repair",
        description: "Rapid diagnosis and repair of boiler breakdowns to restore heating and hot water.",
      },
      {
        slug: "no-hot-water",
        name: "No Hot Water",
        shortLabel: "Hot water restoration",
        description: "Fast fixes for loss of hot water from boilers, cylinders, and immersion heaters.",
      },
    ],
  },
  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    shortLabel: "Drains unblocked fast",
    description: "Professional drain unblocking in Bristol. All blockage types cleared with specialist equipment.",
    icon: "🚿",
    ogImage: "/og/blocked-drains-og.jpg",
    subServices: [
      {
        slug: "blocked-toilet",
        name: "Blocked Toilet",
        shortLabel: "Toilet unblocking",
        description: "Fast and effective toilet unblocking service for domestic and commercial properties.",
      },
      {
        slug: "blocked-sink",
        name: "Blocked Sink",
        shortLabel: "Sink unblocking",
        description: "Professional sink unblocking for kitchen and bathroom sinks throughout Bristol.",
      },
    ],
  },
  {
    slug: "plumbing-repairs",
    name: "Plumbing Repairs",
    shortLabel: "All plumbing repairs covered",
    description: "Comprehensive plumbing repairs for homes and businesses in Bristol. Taps, toilets, pipes, and more.",
    icon: "🔧",
    ogImage: "/og/plumbing-repairs-og.jpg",
    subServices: [
      {
        slug: "tap-repair",
        name: "Tap Repair and Replacement",
        shortLabel: "Tap repairs",
        description: "Repair or replacement of dripping taps, faulty mixer valves, and kitchen and bathroom taps.",
      },
      {
        slug: "toilet-repair",
        name: "Toilet Repair",
        shortLabel: "Toilet repairs",
        description: "Fix running toilets, broken cisterns, leaking bases, and faulty flush mechanisms.",
      },
    ],
  },
  {
    slug: "central-heating",
    name: "Central Heating",
    shortLabel: "Heating system repairs and maintenance",
    description: "Central heating repairs, power flushing, and radiator services for Bristol homes and businesses.",
    icon: "🌡️",
    ogImage: "/og/central-heating-og.jpg",
    subServices: [
      {
        slug: "radiator-repair",
        name: "Radiator Repair",
        shortLabel: "Radiator repairs",
        description: "Repair, replacement, and bleeding of radiators to restore full heating efficiency.",
      },
      {
        slug: "power-flushing",
        name: "Power Flushing",
        shortLabel: "System power flush",
        description: "Professional power flushing to remove sludge and improve heating system performance.",
      },
    ],
  },
  {
    slug: "gas-safety",
    name: "Gas Safety",
    shortLabel: "Gas safety checks and certificates",
    description: "Gas Safe registered engineers providing safety inspections, certificates, and gas appliance repairs across Bristol.",
    icon: "⚠️",
    ogImage: "/og/bristol-og.jpg",
    subServices: [
      {
        slug: "gas-safety-certificate",
        name: "Gas Safety Certificate",
        shortLabel: "Landlord gas safety cert",
        description: "Annual gas safety inspections and certificates for landlords and homeowners.",
      },
      {
        slug: "gas-leak-repair",
        name: "Gas Leak Repair",
        shortLabel: "Emergency gas leak repair",
        description: "Immediate response to gas leaks with safe isolation and repair by Gas Safe engineers.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string): SubService | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices?.find((sub) => sub.slug === subServiceSlug);
}

// Related services mapping for improved cross-linking
export const RELATED_SERVICES: Record<string, string[]> = {
  "emergency-plumber": ["boiler-repair", "plumbing-repairs", "blocked-drains"],
  "boiler-repair": ["emergency-plumber", "central-heating", "gas-safety"],
  "blocked-drains": ["emergency-plumber", "plumbing-repairs", "central-heating"],
  "plumbing-repairs": ["emergency-plumber", "blocked-drains", "central-heating"],
  "central-heating": ["boiler-repair", "plumbing-repairs", "gas-safety"],
  "gas-safety": ["boiler-repair", "central-heating", "emergency-plumber"],
};

export function getRelatedServices(slug: string): Service[] {
  const relatedSlugs = RELATED_SERVICES[slug] || [];
  return relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((service): service is Service => service !== undefined);
}
