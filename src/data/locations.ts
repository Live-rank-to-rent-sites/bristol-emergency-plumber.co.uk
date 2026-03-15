export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "bristol",
  name: "Bristol",
  countyOrRegion: "Bristol",
  latitude: 51.4545,
  longitude: -2.5879,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "bath",
    name: "Bath",
    countyOrRegion: "Somerset",
    latitude: 51.3781,
    longitude: -2.3597,
  },
  {
    slug: "clifton",
    name: "Clifton",
    countyOrRegion: "Bristol",
    latitude: 51.4584,
    longitude: -2.6225,
  },
  {
    slug: "bedminster",
    name: "Bedminster",
    countyOrRegion: "Bristol",
    latitude: 51.4375,
    longitude: -2.5975,
  },
  {
    slug: "redland",
    name: "Redland",
    countyOrRegion: "Bristol",
    latitude: 51.4667,
    longitude: -2.5960,
  },
  {
    slug: "horfield",
    name: "Horfield",
    countyOrRegion: "Bristol",
    latitude: 51.4834,
    longitude: -2.5892,
  },
  {
    slug: "filton",
    name: "Filton",
    countyOrRegion: "Bristol",
    latitude: 51.5002,
    longitude: -2.5765,
  },
  {
    slug: "kingswood",
    name: "Kingswood",
    countyOrRegion: "Bristol",
    latitude: 51.4567,
    longitude: -2.5159,
  },
  {
    slug: "portishead",
    name: "Portishead",
    countyOrRegion: "Somerset",
    latitude: 51.4876,
    longitude: -2.7638,
  },
  {
    slug: "clevedon",
    name: "Clevedon",
    countyOrRegion: "Somerset",
    latitude: 51.4442,
    longitude: -2.8567,
  },
  {
    slug: "nailsea",
    name: "Nailsea",
    countyOrRegion: "Somerset",
    latitude: 51.4303,
    longitude: -2.7573,
  },
  {
    slug: "thornbury",
    name: "Thornbury",
    countyOrRegion: "South Gloucestershire",
    latitude: 51.6106,
    longitude: -2.5226,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
