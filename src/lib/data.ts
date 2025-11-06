import { BedDouble, Bath, Car, Wifi, Utensils, Tv, Building, Trees, Dumbbell, Wind, Sun, Award } from 'lucide-react';
import type { ComponentType } from 'react';

export type Amenity = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  size: number; // in sqft
  bedrooms: number;
  bathrooms: number;
  description: string;
  amenities: Amenity[];
  images: {
    thumbnailId: string;
    galleryIds: string[];
  };
  type: 'For Sale' | 'For Rent';
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageId: string;
  bio: string;
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    location: 'Malibu, California',
    price: 4500000,
    size: 3200,
    bedrooms: 4,
    bathrooms: 5,
    description: 'Breathtaking ocean views from this stunning modern villa. Features an open floor plan, infinity pool, and state-of-the-art kitchen. Perfect for those who love luxury and coastal living.',
    amenities: [
      { name: 'WiFi', icon: Wifi },
      { name: 'Pool', icon: Award }, // Using Award for Pool
      { name: 'Garage', icon: Car },
      { name: 'Gourmet Kitchen', icon: Utensils },
      { name: 'Air Conditioning', icon: Wind },
    ],
    images: {
      thumbnailId: 'prop1-thumb',
      galleryIds: ['prop1-1', 'prop1-2', 'prop1-3'],
    },
    type: 'For Sale',
  },
  {
    id: '2',
    title: 'Cozy Suburban Family Home',
    location: 'Austin, Texas',
    price: 650000,
    size: 2100,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Charming family home in a quiet suburban neighborhood. Large backyard, newly renovated kitchen, and close to top-rated schools. Ideal for a growing family.',
    amenities: [
      { name: 'Backyard', icon: Trees },
      { name: 'Garage', icon: Car },
      { name: 'Modern Kitchen', icon: Utensils },
      { name: 'Cable TV', icon: Tv },
    ],
    images: {
      thumbnailId: 'prop2-thumb',
      galleryIds: ['prop2-1', 'prop2-2'],
    },
    type: 'For Sale',
  },
  {
    id: '3',
    title: 'Modern Downtown Apartment',
    location: 'New York, New York',
    price: 4500,
    size: 950,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Sleek and stylish apartment in the heart of the city. Floor-to-ceiling windows offer incredible city views. Building includes a gym, rooftop terrace, and 24/7 doorman.',
    amenities: [
      { name: 'City View', icon: Building },
      { name: 'Gym', icon: Dumbbell },
      { name: 'WiFi', icon: Wifi },
      { name: 'Rooftop Terrace', icon: Sun },
    ],
    images: {
      thumbnailId: 'prop3-thumb',
      galleryIds: ['prop3-1'],
    },
    type: 'For Rent',
  },
  {
    id: '4',
    title: 'Spacious Loft in Arts District',
    location: 'Los Angeles, California',
    price: 3200,
    size: 1500,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Industrial-chic loft with open-plan living space, high ceilings, and polished concrete floors. Located in the vibrant Arts District, close to galleries, cafes, and boutiques.',
    amenities: [
      { name: 'High Ceilings', icon: Building },
      { name: 'WiFi', icon: Wifi },
      { name: 'Open Plan', icon: Utensils },
      { name: 'Air Conditioning', icon: Wind },
    ],
    images: {
      thumbnailId: 'prop4-thumb',
      galleryIds: ['prop4-1'],
    },
    type: 'For Rent',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jane Doe',
    role: 'Lead Agent & Founder',
    imageId: 'team1',
    bio: 'With over 15 years of experience, Jane has a passion for matching clients with their perfect homes. Her expertise in market trends is unparalleled.',
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Senior Sales Agent',
    imageId: 'team2',
    bio: 'John specializes in luxury properties and investments. He is dedicated to providing a seamless and personalized experience for every client.',
  },
  {
    id: '3',
    name: 'Emily White',
    role: 'Rental Specialist',
    imageId: 'team3',
    bio: 'Emily is our go-to expert for the rental market. She helps tenants and landlords navigate the process with ease and confidence.',
  },
];
