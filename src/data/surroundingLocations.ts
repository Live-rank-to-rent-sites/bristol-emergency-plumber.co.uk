export const surroundingLocations = [
  {
    slug: 'bath',
    name: 'Bath',
    postcode: 'BA1',
    distance: '12 miles south',
    description: 'Georgian city with historic properties',
    highlights: ['Georgian properties', 'Historic buildings', 'Limestone construction']
  },
  {
    slug: 'keynsham',
    name: 'Keynsham',
    postcode: 'BS31',
    distance: '8 miles south',
    description: 'Market town south of Bristol',
    highlights: ['Period properties', 'Modern developments', 'Town centre']
  },
  {
    slug: 'clevedon',
    name: 'Clevedon',
    postcode: 'BS21',
    distance: '18 miles west',
    description: 'Seaside town in North Somerset',
    highlights: ['Coastal properties', 'Victorian villas', 'Contemporary homes']
  },
  {
    slug: 'portishead',
    name: 'Portishead',
    postcode: 'BS20',
    distance: '12 miles west',
    description: 'Growing suburb with mix of old and new',
    highlights: ['New-build estates', 'Period terraces', 'Harbourside properties']
  },
  {
    slug: 'nailsea',
    name: 'Nailsea',
    postcode: 'BS48',
    distance: '15 miles west',
    description: 'Vibrant market town',
    highlights: ['Mixed housing stock', 'Town centre', 'Surrounding farms']
  },
  {
    slug: 'yate',
    name: 'Yate',
    postcode: 'BS37',
    distance: '16 miles north',
    description: 'Modern town in South Gloucestershire',
    highlights: ['New-build properties', 'Town centre development', 'Surrounding villages']
  },
  {
    slug: 'thornbury',
    name: 'Thornbury',
    postcode: 'GL12',
    distance: '18 miles north',
    description: 'Historic market town with castle',
    highlights: ['Period properties', 'Castle estate', 'Historic centre']
  },
  {
    slug: 'bradley-stoke',
    name: 'Bradley Stoke',
    postcode: 'BS32',
    distance: '8 miles north',
    description: 'Large planned new-build development',
    highlights: ['New-build homes', 'Modern estates', 'Urban expansion']
  },
  {
    slug: 'filton',
    name: 'Filton',
    postcode: 'BS34',
    distance: '6 miles north',
    description: 'Industrial and residential area',
    highlights: ['Mixed properties', 'Housing associations', 'Commercial areas']
  },
  {
    slug: 'kingswood',
    name: 'Kingswood',
    postcode: 'BS15',
    distance: '7 miles east',
    description: 'Suburban area with historic roots',
    highlights: ['Victorian terraces', 'Modern estates', 'Town centre']
  },
  {
    slug: 'warmley',
    name: 'Warmley',
    postcode: 'BS30',
    distance: '9 miles east',
    description: 'Historic village now suburban expansion',
    highlights: ['Historic properties', 'New developments', 'Surrounding green space']
  },
  {
    slug: 'mangotsfield',
    name: 'Mangotsfield',
    postcode: 'BS16',
    distance: '10 miles east',
    description: 'Village with expanding residential area',
    highlights: ['Period cottages', 'New estates', 'Rural setting']
  }
];

export function getLocationBySlug(slug: string) {
  return surroundingLocations.find(l => l.slug === slug);
}
