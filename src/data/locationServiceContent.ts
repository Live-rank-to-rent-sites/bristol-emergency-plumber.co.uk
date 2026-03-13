export interface LocationServiceContent {
  location: string;
  service: string;
  intro: string;
  commonIssues: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const locationServiceContent: LocationServiceContent[] = [
  // Bath - Emergency Plumber
  {
    location: 'bath',
    service: 'emergency-plumber',
    intro: 'Bath\'s historic Georgian properties and period architecture present unique plumbing challenges that demand specialist expertise. Many of Bath\'s iconic stone-built homes feature original lead pipework, gravity-fed systems, and lime mortar that require careful handling during emergency repairs. When plumbing disasters strike in Bath—whether it\'s a burst pipe in a listed Georgian townhouse or flooding in a period basement—our emergency team understands the special considerations these properties demand. We\'re experienced in working within Bath\'s strict conservation guidelines while delivering rapid emergency response. Our emergency plumbers know how to minimise damage to historic fabric whilst resolving your crisis quickly. Bath\'s narrow streets and restricted parking require local knowledge we possess, ensuring our emergency team can reach you efficiently even in the city centre.',
    commonIssues: [
      'Burst lead pipes in Georgian terraces',
      'Freezing pipes in exposed period properties',
      'Lime mortar damage from excavation',
      'Gravity-fed heating system failures',
      'Listed building constraint complications'
    ],
    faqs: [
      {
        question: 'Do you have experience with listed buildings in Bath?',
        answer: 'Yes, we work regularly with Bath\'s listed properties and understand conservation requirements. We have the expertise to navigate planning considerations while delivering rapid emergency repairs.'
      },
      {
        question: 'What\'s your typical response time to Bath emergencies?',
        answer: 'We typically reach Bath city centre within 35-45 minutes, and surrounding areas within 40-50 minutes, depending on traffic and exact location.'
      },
      {
        question: 'Can you help with emergency lead pipe replacement?',
        answer: 'Yes, we specialise in safe lead pipe identification and replacement. We\'re experienced with Bath\'s unique requirements and can coordinate with conservation officers if needed.'
      }
    ]
  },
  // Bath - 24 Hour Plumber
  {
    location: 'bath',
    service: '24-hour-plumber',
    intro: 'Bath\'s popularity as a visitor destination means plumbing issues don\'t follow business hours—they happen when hotel guests arrive, when restaurants are full, when historic buildings are hosting events. Our 24-hour plumbing service means professional help is always available, whether you\'re dealing with a commercial property emergency at midnight or a residential issue at 6am. We serve Bath\'s mix of tourist accommodation, commercial establishments, and period residences with equal expertise. Our round-the-clock service includes weekend coverage for Bath\'s busy social calendar and bank holidays when regular plumbers aren\'t available. Whether it\'s a hotel with a burst pipe affecting guest rooms or a home owner with a sudden leak, our 24-hour team responds with the same professionalism and speed regardless of the time.',
    commonIssues: [
      'Commercial property emergencies during operating hours',
      'Guest accommodation water issues',
      'Period property problems outside business hours',
      'Weekend and bank holiday plumbing failures',
      'Late-night heating breakdowns in winter'
    ],
    faqs: [
      {
        question: 'Are your 24-hour rates more expensive?',
        answer: 'Our 24-hour service charges apply for calls outside 8am-6pm. We\'re transparent about pricing—you\'ll receive a quote before work begins.'
      },
      {
        question: 'How quickly can you respond during nights and weekends?',
        answer: 'We maintain availability throughout Bath 24/7. Response times vary based on engineer availability, but we prioritise emergencies accordingly.'
      },
      {
        question: 'Do you service commercial properties as well as homes?',
        answer: 'Yes, we serve Bath\'s commercial sector including hotels, restaurants, and offices with dedicated 24-hour response capabilities.'
      }
    ]
  },
  // Keynsham - Emergency Plumber
  {
    location: 'keynsham',
    service: 'emergency-plumber',
    intro: 'Keynsham\'s mix of traditional market town properties and modern developments means our emergency plumbers regularly deal with diverse plumbing infrastructure. From Victorian terraces to contemporary builds, each property type brings different emergency scenarios. When catastrophic leaks, burst pipes, or flooding strikes in Keynsham, our emergency team responds with local knowledge of the town\'s specific characteristics. We understand which areas are prone to certain issues—tree root damage in older properties, combi boiler failures in newer homes—allowing us to diagnose problems faster. Our strategic positioning means we can typically reach Keynsham within 25-35 minutes from our Bristol base. We carry comprehensive emergency equipment in our vehicles, ensuring most situations can be resolved on the first visit without requiring additional trips.',
    commonIssues: [
      'Tree root damage in Victorian properties',
      'Leaking combination boilers in modern homes',
      'Frozen pipes in exposed properties',
      'Failed washers in period properties',
      'Drainage issues in older terraced streets'
    ],
    faqs: [
      {
        question: 'How far does your emergency service extend from Bristol?',
        answer: 'Keynsham is within our regular emergency coverage area. We typically respond within 25-35 minutes depending on traffic and specific location.'
      },
      {
        question: 'What should I do while waiting for the emergency plumber?',
        answer: 'Turn off your mains water at the stop tap if you can locate it safely. Identify the affected area and move valuables away from water damage risk. We can guide you further when you call.'
      },
      {
        question: 'Do you offer emergency drain clearance in Keynsham?',
        answer: 'Yes, we provide emergency drain clearance including high-pressure jetting and CCTV surveying for blocked or damaged drains.'
      }
    ]
  },
  // Keynsham - Boiler Repair
  {
    location: 'keynsham',
    service: 'boiler-repair',
    intro: 'Keynsham\'s newer developments feature predominantly modern combination boilers, whilst the town centre retains period properties with traditional heating systems. This diversity means our boiler repair specialists need expertise across both traditional and contemporary systems—which we have. Whether your modern combi boiler has failed or your period property\'s traditional system needs urgent attention, our Gas Safe registered engineers serve Keynsham\'s varied heating needs. Many boiler breakdowns occur at the most inconvenient times, particularly during cold weather when heating becomes essential. Our boiler repair service includes emergency callouts for heating failures, maintenance to prevent breakdown, and full replacement services. We carry most common replacement parts and can often complete repairs during a single visit.',
    commonIssues: [
      'Combi boiler failures in modern homes',
      'Low water pressure issues',
      'Heating system breakdowns in winter',
      'Leaking pipework around boilers',
      'System corrosion and sludge buildup'
    ],
    faqs: [
      {
        question: 'Can you repair all boiler brands in Keynsham?',
        answer: 'Yes, our Gas Safe registered engineers service all major boiler manufacturers. We carry comprehensive parts inventory and can often fix issues same-day.'
      },
      {
        question: 'Should I get my boiler serviced annually?',
        answer: 'Annual boiler servicing is recommended to maintain efficiency and reliability. Regular maintenance helps prevent emergency breakdowns and maintains warranty coverage.'
      },
      {
        question: 'What\'s included in a boiler service?',
        answer: 'A boiler service includes system pressure check, safety valve inspection, burner cleaning, efficiency assessment, and a full safety report.'
      }
    ]
  },
  // Clevedon - Emergency Plumber
  {
    location: 'clevedon',
    service: 'emergency-plumber',
    intro: 'Clevedon\'s seafront location and Victorian heritage create specific plumbing challenges. Properties near the coast face unique issues—salt air accelerates copper pipe corrosion, and coastal damp exacerbates problems. Victorian and Edwardian villas that line Clevedon\'s clifftops often feature original plumbing installed over a century ago, creating emergency vulnerabilities. Contemporary properties inland face different challenges but benefit from newer infrastructure. When emergency plumbing strikes in Clevedon, whether it\'s a catastrophic leak in a Victorian villa or a burst pipe in modern accommodation, our emergency team understands the area\'s specific characteristics. Our coastally-experienced engineers know how to rapidly diagnose and resolve emergencies in Clevedon\'s distinctive properties, and we understand local access considerations including the town\'s hills and narrow streets.',
    commonIssues: [
      'Copper pipe corrosion from salt air',
      'Coastal damp affecting plumbing systems',
      'Victorian property plumbing failures',
      'Burst pipes in exposed cliff-top properties',
      'Drainage difficulties in sloping terrain'
    ],
    faqs: [
      {
        question: 'Do you work on Clevedon\'s Victorian properties?',
        answer: 'Yes, we specialise in Victorian property plumbing. We understand their unique systems and can handle emergency repairs whilst respecting period features.'
      },
      {
        question: 'Why is copper corrosion a problem in coastal areas?',
        answer: 'Salt air accelerates copper oxidation, eventually creating pinhole leaks. We can identify corrosion early and plan replacement before emergencies occur.'
      },
      {
        question: 'What\'s your response time to Clevedon emergencies?',
        answer: 'Clevedon is about 18 miles from our Bristol base. We typically respond within 40-50 minutes depending on traffic and exact location.'
      }
    ]
  },
  // Portishead - 24 Hour Plumber
  {
    location: 'portishead',
    service: '24-hour-plumber',
    intro: 'Portishead\'s rapid expansion has created a diverse mix of properties—established period terraces in the town centre alongside modern harbourside developments and recent estate expansions. This mix means plumbing needs vary significantly across the town, and emergencies require specialists who understand both period and contemporary systems. Our 24-hour plumbing service serves Portishead\'s growing population with round-the-clock availability. Whether you\'re in an established Victorian property or a newly completed modern home, whether it\'s 2am on a Tuesday or 6pm on Sunday, professional help is available. Portishead\'s growth means increasingly busy periods—we ensure you\'re not waiting for plumbing help regardless of the time. Our 24-hour team handles routine issues as well as genuine emergencies, providing flexibility for your schedule.',
    commonIssues: [
      'New-build snagging issues in modern properties',
      'Victorian terrace problems in town centre',
      'Harbourside property maintenance',
      'Modern system failures in new developments',
      'Combination boiler issues across all properties'
    ],
    faqs: [
      {
        question: 'Do you handle new-build snagging in Portishead?',
        answer: 'Yes, we specialise in new-build snagging and post-completion work. We can coordinate with builders and developers.'
      },
      {
        question: 'Can I call for non-emergency plumbing at 3am?',
        answer: 'Our 24-hour service includes both emergency and non-emergency calls. Pricing differs, and we\'ll discuss this when you call.'
      },
      {
        question: 'What areas of Portishead do you cover?',
        answer: 'We serve all of Portishead including town centre, harbourside, Weston-super-Mare direction properties, and surrounding newer developments.'
      }
    ]
  },
  // Nailsea - Blocked Drains
  {
    location: 'nailsea',
    service: 'blocked-drains',
    intro: 'Nailsea\'s mix of established town properties and surrounding farmland means drain issues vary significantly. The town centre features traditional Victorian and Edwardian properties with older drainage infrastructure, whilst surrounding areas have more modern systems. Environmental factors around Nailsea—including clay soil common to the region, mature trees affecting older properties, and seasonal changes—create specific drainage challenges. Our professional drain clearance service uses modern technology including high-pressure jetting and CCTV surveying to diagnose and clear blockages. We understand Nailsea\'s specific drainage characteristics and can advise on preventative measures. Whether you\'re dealing with a blocked toilet in a town centre Victorian house or investigating recurring drainage issues in a modern property, our drain specialists offer comprehensive solutions.',
    commonIssues: [
      'Tree root damage in established properties',
      'Clay soil drainage difficulties',
      'Blocked drains from fats and oils',
      'Victorian property drainage complications',
      'Seasonal drainage problems'
    ],
    faqs: [
      {
        question: 'What causes blocked drains in older properties like Nailsea\'s?',
        answer: 'Historic properties often have clay pipes susceptible to damage, tree roots infiltrating joined sections, and years of buildup. CCTV surveying reveals the cause.'
      },
      {
        question: 'Can you clear drains without digging up my garden?',
        answer: 'Often yes. High-pressure jetting clears blockages from the surface. We only excavate if structural damage is discovered via CCTV survey.'
      },
      {
        question: 'How much does drain clearance cost?',
        answer: 'Costs vary based on blockage severity and type. We\'ll provide a quote before work begins, and CCTV surveying helps identify the issue.'
      }
    ]
  },
  // Yate - Boiler Repair
  {
    location: 'yate',
    service: 'boiler-repair',
    intro: 'Yate\'s modern development as a planned town means properties predominantly feature contemporary combination boilers and modern heating systems. Our Gas Safe registered engineers specialise in keeping these modern systems running efficiently. Unlike older towns with period heating systems, Yate properties benefit from contemporary technology—but also depend on reliable modern boiler systems. Heating failures in Yate affect residents who expect contemporary comfort standards. We maintain boiler expertise appropriate to Yate\'s housing stock, understand modern system configurations, and carry parts for the boiler brands predominantly installed here. Annual boiler servicing becomes particularly important in Yate, where new-build properties should maintain warranty compliance. Our boiler repair and maintenance service keeps Yate\'s modern heating systems operating at peak efficiency.',
    commonIssues: [
      'Combi boiler pressure loss',
      'New-build boiler installation issues',
      'System balancing problems',
      'Water pressure fluctuations',
      'Modern radiator system bleeding'
    ],
    faqs: [
      {
        question: 'Are Yate\'s modern boilers more reliable than older systems?',
        answer: 'Modern boilers are more efficient but require proper maintenance. Regular servicing prevents most common failures.'
      },
      {
        question: 'What happens if my boiler breaks during winter?',
        answer: 'Call us immediately. Our engineers prioritise heating failures during cold weather to restore comfort quickly.'
      },
      {
        question: 'Should I get a new boiler or repair my existing one?',
        answer: 'This depends on age, repair costs, and efficiency. We advise based on your specific situation.'
      }
    ]
  },
  // Thornbury - 24 Hour Plumber
  {
    location: 'thornbury',
    service: '24-hour-plumber',
    intro: 'Thornbury\'s historic significance includes period properties of great character—Victorian villas, Georgian townhouses, and medieval-era properties. The castle estate area features grand period properties requiring specialist plumbing knowledge. Our 24-hour plumbing service serves Thornbury\'s heritage properties as well as contemporary developments. Period properties present specific challenges outside standard business hours—heating system failures in winter affecting properties without modern combi boilers, burst pipes in historic properties that require conservation-aware repairs. Our 24-hour team includes specialists experienced with historic property plumbing, ensuring your emergency is handled by someone who understands the unique requirements. Thornbury\'s distance from Bristol means our 24-hour service is particularly valuable—you\'re guaranteed professional help regardless of time, weather, or holiday.',
    commonIssues: [
      'Historic property heating failures',
      'Gravity-fed system breakdowns',
      'Lead pipe concerns in period properties',
      'Castle estate property issues',
      'Listed building repair complications'
    ],
    faqs: [
      {
        question: 'Do you understand historic property requirements?',
        answer: 'Yes, we regularly work on Thornbury\'s historic properties and understand conservation constraints and period systems.'
      },
      {
        question: 'How far is Thornbury from Bristol?',
        answer: 'Thornbury is about 18 miles north. Response times vary based on traffic, typically 45-55 minutes.'
      },
      {
        question: 'What if my period property needs evening repairs?',
        answer: 'Our 24-hour service ensures professional help is available. We understand historic properties and can advise on emergency temporary measures.'
      }
    ]
  },
  // Bradley Stoke - Emergency Plumber
  {
    location: 'bradley-stoke',
    service: 'emergency-plumber',
    intro: 'Bradley Stoke represents Bristol\'s largest new-build expansion, with modern estates built predominantly from the 1980s onwards. Properties feature contemporary plastic plumbing, modern boiler systems, and modern drainage infrastructure. New-build properties present different emergency challenges than older areas—common issues include combi boiler failures, leaking flexi-hoses under kitchen sinks, pressure system problems, and modern plastic pipe issues. Our emergency plumbers specialising in new-build properties understand these contemporary systems intimately and carry parts specifically for modern installations. Bradley Stoke\'s rapid response requirement means we maintain strong coverage here—our emergency team can typically reach most Bradley Stoke locations within 15-25 minutes. We work frequently with Bradley Stoke\'s property management companies and landlords managing rental properties.',
    commonIssues: [
      'Combi boiler pressure failures',
      'Leaking flexi-hoses and connections',
      'Newer plastic pipe issues',
      'Central heating system air locks',
      'New-build commissioning problems'
    ],
    faqs: [
      {
        question: 'What are the common emergency issues in Bradley Stoke new-builds?',
        answer: 'Combi boiler failures and leaking flexi-hoses are most common. We specialise in these issues and resolve most same-day.'
      },
      {
        question: 'Are my new-build pipes still under warranty?',
        answer: 'New-build warranties typically last 10 years on structural elements but 2-5 years for systems. We can discuss warranty coverage.'
      },
      {
        question: 'What\'s your response time to Bradley Stoke?',
        answer: 'Bradley Stoke is only 8 miles from Bristol. We typically respond within 15-25 minutes for emergencies.'
      }
    ]
  }
];

export function getLocationServiceContent(location: string, service: string): LocationServiceContent | undefined {
  return locationServiceContent.find(
    c => c.location === location && c.service === service
  );
}
