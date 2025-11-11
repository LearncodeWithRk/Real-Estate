
import { BedDouble, Bath, Car, Wifi, Utensils, Tv, Building, Trees, Dumbbell, Wind, Sun, Waves } from 'lucide-react';
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
  category?: 'Apartment' | 'Villa' | 'Studio' | 'House' | 'Office';
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageId: string;
  bio: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  imageId: string;
  excerpt: string;
  content: string;
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
      { name: 'Pool', icon: Waves }, // Using Waves for Pool
      { name: 'Garage', icon: Car },
      { name: 'Gourmet Kitchen', icon: Utensils },
      { name: 'Air Conditioning', icon: Wind },
    ],
    images: {
      thumbnailId: 'prop1-thumb',
      galleryIds: ['prop1-1', 'prop1-2', 'prop1-3'],
    },
    type: 'For Sale',
    category: 'Villa'
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
    category: 'House'
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
    category: 'Apartment'
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
    category: 'Studio'
  },
   {
    id: '5',
    title: 'Lakeside Mansion',
    location: 'Lake Tahoe, California',
    price: 7250000,
    size: 6000,
    bedrooms: 6,
    bathrooms: 7,
    description: 'An exquisite mansion on the shores of Lake Tahoe. Private dock, expansive decks, and panoramic lake views from every room. A true masterpiece of design and comfort.',
    amenities: [
      { name: 'Private Dock', icon: Waves },
      { name: 'Lake View', icon: Sun },
      { name: 'Fireplace', icon: Trees },
      { name: 'Garage', icon: Car },
    ],
    images: {
      thumbnailId: 'prop5-thumb',
      galleryIds: ['prop5-1'],
    },
    type: 'For Sale',
    category: 'Villa',
  },
  {
    id: '6',
    title: 'Commercial Office Space',
    location: 'San Francisco, California',
    price: 15000,
    size: 5000,
    bedrooms: 0,
    bathrooms: 4,
    description: 'Prime office space in the financial district. Open floor plan, conference rooms, and modern amenities. Perfect for a growing tech company.',
    amenities: [
        { name: 'WiFi', icon: Wifi },
        { name: 'Conference Rooms', icon: Building },
        { name: 'Kitchenette', icon: Utensils },
    ],
    images: {
      thumbnailId: 'prop6-thumb',
      galleryIds: ['prop6-1'],
    },
    type: 'For Rent',
    category: 'Office',
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

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Buying Your First Home',
    author: 'Jane Doe',
    date: 'October 26, 2024',
    imageId: 'blog1-thumb',
    excerpt: 'Navigating the real estate market for the first time can be daunting. This guide breaks down the process into simple, manageable steps to help you secure your dream home.',
    content: '<p>Buying your first home is an exciting milestone, but it can also be a complex process. From securing a mortgage to making an offer, there are many steps involved. This guide will walk you through everything you need to know.</p><h3>Step 1: Financial Preparation</h3><p>Before you start looking at houses, you need to get your finances in order. This includes checking your credit score, saving for a down payment, and getting pre-approved for a mortgage. A pre-approval letter will show sellers that you are a serious buyer.</p><h3>Step 2: Finding the Right Agent</h3><p>A good real estate agent is your most valuable asset. They can provide you with information about neighborhoods, help you negotiate offers, and guide you through the closing process. Look for an agent who has experience working with first-time buyers.</p><h3>Step 3: The Home Search</h3><p>Once you have your finances and agent sorted, the fun part begins: house hunting! Be sure to make a list of your must-haves and nice-to-haves. Attend open houses and schedule private showings to get a feel for what\'s available in your price range.</p><p>By following these steps, you\'ll be well on your way to owning your first home. Happy house hunting!</p>'
  },
  {
    id: '2',
    title: '5 Tips for Staging Your Home to Sell Quickly',
    author: 'John Smith',
    date: 'October 22, 2024',
    imageId: 'blog2-thumb',
    excerpt: 'Want to sell your home fast and for the best price? Home staging is key. These five essential tips will help you make your property irresistible to potential buyers.',
    content: '<p>Staging your home is all about showcasing its best features to potential buyers. A well-staged home can sell faster and for a higher price. Here are five tips to get you started.</p><h3>1. Declutter and Depersonalize</h3><p>Buyers need to be able to envision themselves living in the space. Remove personal photos, clutter, and excess furniture. This will make your home feel larger and more inviting.</p><h3>2. Deep Clean Everything</h3><p>A sparkling clean home is a must. Pay special attention to kitchens and bathrooms. Clean windows, dust surfaces, and make sure there are no lingering odors.</p><h3>3. Let There Be Light</h3><p>Bright, well-lit homes are more appealing. Open up curtains and blinds to let in natural light. Add lamps to darker corners to create a warm and welcoming atmosphere.</p><h3>4. Neutralize Your Color Palette</h3><p>Bold wall colors can be a turn-off for some buyers. Consider painting your walls in neutral colors like beige, gray, or off-white. This creates a blank canvas for buyers to project their own style.</p><h3>5. Enhance Curb Appeal</h3><p>The first impression is crucial. Make sure your home\'s exterior is just as appealing as the interior. Mow the lawn, trim bushes, and add some potted plants to your entryway.</p>'
  },
  {
    id: '3',
    title: 'Investing in Rental Properties: A Beginner\'s Guide',
    author: 'Emily White',
    date: 'October 18, 2024',
    imageId: 'blog3-thumb',
    excerpt: 'Real estate can be a powerful wealth-building tool. If you\'re considering investing in rental properties, this beginner\'s guide will cover the basics to get you started.',
    content: '<p>Investing in rental properties can provide a steady stream of passive income and long-term appreciation. However, it\'s important to do your homework before diving in.</p><h3>Understand the Market</h3><p>Research the local rental market to understand average rent prices, vacancy rates, and desirable neighborhoods. This will help you identify properties with good investment potential.</p><h3>Calculate Your Return on Investment (ROI)</h3><p>Before buying a property, calculate your potential ROI. This involves estimating your rental income and subtracting your expenses, such as mortgage payments, property taxes, insurance, and maintenance costs.</p><h3>Financing Your Investment</h3><p>Investment property mortgages often require a larger down payment and have stricter lending requirements than primary residences. Explore your financing options and get pre-approved before making an offer.</p><p>With the right strategy, investing in rental properties can be a rewarding venture.</p>'
  }
];

    