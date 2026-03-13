export const services = [
  {
    slug: 'emergency-plumber',
    name: 'Emergency Plumber',
    shortName: 'Emergency',
    description: 'Rapid response emergency plumbing when you need it most',
    subservices: [
      { slug: 'burst-pipes', name: 'Burst Pipes' },
      { slug: 'gas-leaks', name: 'Gas Leaks' },
      { slug: 'flooding-emergency', name: 'Flooding Emergency' },
      { slug: 'leak-detection', name: 'Leak Detection' }
    ]
  },
  {
    slug: '24-hour-plumber',
    name: '24 Hour Plumber',
    shortName: '24 Hour',
    description: 'Round-the-clock plumbing assistance for any situation',
    subservices: [
      { slug: 'overnight-callouts', name: 'Overnight Callouts' },
      { slug: 'weekend-plumber', name: 'Weekend Plumber' },
      { slug: 'bank-holiday-plumber', name: 'Bank Holiday Plumber' }
    ]
  },
  {
    slug: 'boiler-repair',
    name: 'Boiler Repair',
    shortName: 'Boiler Repair',
    description: 'Expert boiler diagnosis and repair by Gas Safe engineers',
    subservices: [
      { slug: 'boiler-installation', name: 'Boiler Installation' },
      { slug: 'boiler-servicing', name: 'Boiler Servicing' },
      { slug: 'central-heating-repair', name: 'Central Heating Repair' },
      { slug: 'powerflush', name: 'Powerflush' }
    ]
  },
  {
    slug: 'blocked-drains',
    name: 'Blocked Drains',
    shortName: 'Drains',
    description: 'Professional drain clearance and advanced diagnostic surveys',
    subservices: [
      { slug: 'blocked-toilet', name: 'Blocked Toilet' },
      { slug: 'blocked-sink', name: 'Blocked Sink' },
      { slug: 'blocked-bath', name: 'Blocked Bath' },
      { slug: 'external-drain-unblocking', name: 'External Drain Unblocking' },
      { slug: 'drain-jetting', name: 'Drain Jetting' },
      { slug: 'cctv-drain-surveys', name: 'CCTV Drain Surveys' },
      { slug: 'drain-repairs', name: 'Drain Repairs' }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}

export function getSubserviceBySlug(serviceSlug: string, subserviceSlug: string) {
  const service = getServiceBySlug(serviceSlug);
  return service?.subservices.find(s => s.slug === subserviceSlug);
}
