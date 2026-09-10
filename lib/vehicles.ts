export interface Vehicle {
  slug: string;
  name: string;
  type: string;
  seats: number;
  luggage: string;
  priceFrom: number;
  image: string;
  alt: string;
  shortDescription: string;
  description: string;
  features: string[];
  idealFor: string[];
}

export const vehicles: Vehicle[] = [
  {
    slug: 'toyota-camry',
    name: 'Toyota Camry',
    type: 'Sedan',
    seats: 4,
    luggage: '3 medium bags',
    priceFrom: 200,
    image: '/images/toyota-camry.jpg',
    alt: 'Toyota Camry private taxi for Umrah pilgrims in Makkah',
    shortDescription: 'Comfortable 4-seat sedan ideal for couples and small families. From 200 SAR.',
    description: 'The Toyota Camry is our most popular vehicle for individuals and couples performing Umrah. Smooth, air-conditioned, and driven by a professional English-speaking driver, it handles city transfers in Makkah and Jeddah airport runs with ease.',
    features: ['Air conditioning', 'USB charging ports', 'Bottled water', 'Prayer beads', 'Professional driver', 'Fixed pricing'],
    idealFor: ['Solo pilgrims', 'Couples', 'Small families (2 adults + 1 child)'],
  },
  {
    slug: 'hyundai-staria',
    name: 'Hyundai Staria',
    type: 'MPV',
    seats: 7,
    luggage: '5 medium bags',
    priceFrom: 200,
    image: '/images/hyundai-staria.jpg',
    alt: 'Hyundai Staria 7-seater MPV for Umrah group transport Makkah',
    shortDescription: 'Premium 7-seat MPV with sliding doors and generous luggage space. From 200 SAR.',
    description: 'The Hyundai Staria is a modern, spacious MPV offering comfort for families of up to 7. Its wide sliding doors make loading elderly passengers and luggage effortless — ideal for families with grandparents or young children on Umrah.',
    features: ['Sliding rear doors', 'Captain seats', 'Air conditioning', 'USB charging ports', 'Ample luggage space', 'Professional driver'],
    idealFor: ['Families up to 7', 'Mixed-age groups', 'Pilgrims with elderly relatives'],
  },
  {
    slug: 'gmc-yukon-xl',
    name: 'GMC Yukon XL',
    type: 'SUV',
    seats: 7,
    luggage: '6 large bags',
    priceFrom: 250,
    image: '/images/gmc-yukon-xl.jpg',
    alt: 'GMC Yukon XL luxury SUV private transfer Makkah Jeddah',
    shortDescription: 'Full-size luxury SUV. Maximum space and comfort for families up to 7. From 250 SAR.',
    description: 'The GMC Yukon XL is our flagship SUV — a full-size American luxury vehicle with commanding road presence and exceptional luggage capacity. Three rows of seating accommodate families of up to 7 with all their Umrah luggage, without compromise.',
    features: ['Three-row luxury seating', 'Maximum luggage capacity', 'Premium air conditioning', 'Leather seats', 'USB + 12V charging', 'Professional driver'],
    idealFor: ['Families with heavy luggage', 'VIP transfers', 'Groups of 6–7 with maximum baggage'],
  },
  {
    slug: 'toyota-hiace',
    name: 'Toyota Hiace',
    type: 'Van',
    seats: 13,
    luggage: '13 medium bags',
    priceFrom: 250,
    image: '/images/toyota-hiace.jpg',
    alt: 'Toyota Hiace 13-seater van for group Umrah transport Makkah',
    shortDescription: 'Reliable 13-seat minibus for small groups and extended families. From 250 SAR.',
    description: 'The Toyota Hiace is the benchmark group transport vehicle across Saudi Arabia. Trusted, air-conditioned, and able to carry 13 passengers with their luggage, it is the choice for extended families and small group Umrah delegations.',
    features: ['13 passenger seats', 'Central air conditioning', 'Large luggage compartment', 'Step-assist entry', 'Professional driver', 'Fixed group pricing'],
    idealFor: ['Extended families', 'Small Umrah groups', 'Tour group supplements'],
  },
  {
    slug: 'king-long-bus',
    name: 'King Long Bus',
    type: 'Coach',
    seats: 50,
    luggage: 'Underfloor luggage bay',
    priceFrom: 300,
    image: '/images/king-long-bus.jpg',
    alt: 'King Long 50-seat coach bus for Hajj and Umrah group transport Saudi Arabia',
    shortDescription: 'Full-size 50-seat coach for large Umrah and Hajj delegations. From 300 SAR.',
    description: 'The King Long bus is our full-size coach for large Umrah and Hajj delegations. With 50 seats, climate control, and an underfloor luggage bay, it serves mosque groups, travel agencies, and institutional pilgrim programs moving large numbers between Jeddah, Makkah, and Madinah.',
    features: ['50 reclining seats', 'Full underfloor luggage bay', 'Dual air conditioning', 'Overhead storage', 'Professional driver', 'Suitable for 10h+ journeys'],
    idealFor: ['Mosque groups', 'Travel agency packages', 'Institutional Hajj delegations', 'Large family convoys'],
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
