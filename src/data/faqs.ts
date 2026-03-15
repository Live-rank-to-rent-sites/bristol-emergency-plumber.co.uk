import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No, ${BRAND.brandName} does not charge any call-out fees. You only pay for the work completed.`,
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: `For urgent plumbing issues, we aim to arrive within 60-90 minutes across ${BRAND.serviceAreaLabel}, traffic and weather permitting.`,
  },
  {
    question: "Are you available for emergencies?",
    answer: `Yes, we offer 24/7 emergency plumbing services across ${BRAND.serviceAreaLabel}. Call ${BRAND.phoneFormatted} for immediate assistance.`,
  },
  {
    question: "How much does emergency plumbing cost?",
    answer: "Costs depend on the type of problem, access, and parts required. We give a clear fixed quote before work starts, so you know exactly what you are paying for.",
  },
  {
    question: "What is included in your service visit?",
    answer: "A standard visit includes problem diagnosis, access checks, the agreed repair or clearance work, and practical aftercare advice to help prevent repeat issues.",
  },
  {
    question: "Do you work with landlords and commercial properties?",
    answer: "Yes. We support homeowners, landlords, letting agents, and businesses, including offices, restaurants, retail units, and managed properties.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "Yes, all our work is fully guaranteed. We stand behind the quality of our service and workmanship.",
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer: "Yes. All engineers who carry out gas work hold current Gas Safe registration. We can provide our registration number on request.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "emergency-plumber": [
    {
      question: "How quickly can you respond to a plumbing emergency?",
      answer: `We aim to arrive within 60-90 minutes for emergency callouts across ${BRAND.serviceAreaLabel}. Call ${BRAND.phoneFormatted} and we will dispatch the nearest available engineer immediately.`,
    },
    {
      question: "What counts as a plumbing emergency?",
      answer: "Burst pipes, flooding, complete loss of water supply, sewage backup, gas leaks, and boiler failures in cold weather all qualify as emergencies. If you are unsure, call us and we will advise.",
    },
    {
      question: "What should I do while waiting for an emergency plumber?",
      answer: "Turn off your mains water at the stopcock (usually under the kitchen sink). If there is water near electrics, turn off the power at the consumer unit. Contain water with towels and buckets, and move valuables to safety.",
    },
  ],
  "boiler-repair": [
    {
      question: "Can you repair any boiler make and model?",
      answer: "Our Gas Safe engineers are trained to work on all major boiler makes and models including Worcester Bosch, Vaillant, Baxi, Ideal, Potterton, and many others.",
    },
    {
      question: "What if my boiler cannot be repaired?",
      answer: "If a repair is not economical or the boiler is beyond repair, we will advise honestly and can provide quotes for a replacement boiler installation. We never recommend replacement unless it is genuinely the best option for you.",
    },
    {
      question: "How often should my boiler be serviced?",
      answer: "We recommend annual boiler servicing for all Bristol properties. Regular servicing maintains efficiency, extends boiler life, and keeps your warranty valid. Landlords are required by law to carry out annual gas safety checks.",
    },
  ],
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain?",
      answer: "Most blocked drains can be cleared within 1-2 hours of our arrival. For more complex blockages, we will provide a clear timeframe after initial assessment.",
    },
    {
      question: "What causes drains to block?",
      answer: "Common causes include fat and grease buildup, hair accumulation, food waste, tree root ingress, and inappropriate items being flushed. We can identify the exact cause using CCTV inspection.",
    },
    {
      question: "Will clearing a blocked drain damage my pipes?",
      answer: "No, our professional equipment and techniques are designed to clear blockages without damaging your pipes. We select the right method for each situation.",
    },
  ],
  "central-heating": [
    {
      question: "Why do I have cold spots on some radiators?",
      answer: "Cold spots at the top of a radiator usually indicate trapped air — the radiator needs bleeding. Cold spots at the bottom suggest sludge buildup. Power flushing can remove sludge and restore full heat output.",
    },
    {
      question: "What is power flushing and does my system need it?",
      answer: "Power flushing uses high-velocity water to clean sludge, scale, and corrosion products from your heating system. Systems more than 10 years old in Bristol are likely to benefit from power flushing, particularly if radiators have cold areas or the system is noisy.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive plumbing and heating services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 60-90 minutes for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What plumbing services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including emergency plumbing, boiler repair, blocked drains, central heating, gas safety, and plumbing repairs.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to an emergency callout?",
    answer: `We aim to respond to <a href="/services/emergency-plumber/" class="text-primary hover:underline">emergency plumbing callouts</a> within 60-90 minutes across <a href="/locations/bristol/" class="text-primary hover:underline">Bristol</a> and surrounding areas. Our team operates around the clock, so help is available whenever you need it, day or night.`
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "No, we do not charge a call-out fee. You only pay for the work that is carried out. We provide a clear quote before starting any job, so there are no unexpected costs."
  },
  {
    question: "What locations do you cover?",
    answer: `We provide plumbing services throughout <a href="/locations/bristol/" class="text-primary hover:underline">Bristol</a> and surrounding areas, including <a href="/locations/bath/" class="text-primary hover:underline">Bath</a>, <a href="/locations/clifton/" class="text-primary hover:underline">Clifton</a>, <a href="/locations/bedminster/" class="text-primary hover:underline">Bedminster</a>, Redland, Horfield, Filton, Kingswood, Portishead, Clevedon, Nailsea, and Thornbury. See <a href="/locations/" class="text-primary hover:underline">all locations we cover</a>.`
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit and credit card payments, and bank transfers. Payment is typically collected upon completion of the work."
  },
  {
    question: "Can you help with commercial plumbing problems?",
    answer: `Yes, we offer plumbing and heating services for both residential and commercial properties. Whether you manage a shop, office, restaurant, or industrial premises, we can assist with <a href="/services/emergency-plumber/" class="text-primary hover:underline">emergency repairs</a>, <a href="/services/boiler-repair/" class="text-primary hover:underline">boiler servicing</a>, and <a href="/services/blocked-drains/" class="text-primary hover:underline">blocked drains</a>.`
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer: `Yes. All engineers who carry out gas work — including <a href="/services/boiler-repair/" class="text-primary hover:underline">boiler repairs</a> and <a href="/services/gas-safety/" class="text-primary hover:underline">gas safety inspections</a> — hold current Gas Safe registration. This is a legal requirement for all gas work in the UK.`
  },
  {
    question: "How can I prevent plumbing emergencies?",
    answer: `Regular maintenance is the best prevention. Annual boiler servicing, keeping an eye on water pressure, knowing where your stopcock is, and insulating exposed pipes in winter all reduce the risk. Read our <a href="/blog/bristol-hard-water-plumbing-problems/" class="text-primary hover:underline">guide to Bristol's hard water and how it affects your plumbing</a> for more tips.`
  },
  {
    question: "Do you install new boilers?",
    answer: `Yes, if your boiler cannot be repaired economically, we can advise on and install a replacement. Learn more about our <a href="/services/boiler-repair/" class="text-primary hover:underline">boiler repair and installation services</a>.`
  }
];

export const HOMEPAGE_FAQS = PAGE_FAQS;
