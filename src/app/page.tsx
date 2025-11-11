
'use client';

import Image from "next/image";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building, HomeIcon, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Handshake, PencilRuler, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const [filter, setFilter] = useState('All');

  const featuredProperties = properties.slice(0, 6);
  
  const filteredFeaturedProperties = featuredProperties.filter(property => {
    if (filter === 'All') return true;
    return property.category === filter;
  });

  const locations = [
    { city: "Sydney, Australia", properties: 238, imageId: "location1" },
    { city: "New Jersey, New York", properties: 238, imageId: "location2" },
    { city: "London, United Kingdom", properties: 238, imageId: "location3" },
    { city: "Cape Town, South Africa", properties: 238, imageId: "location4" },
    { city: "United Kingdom", properties: 238, imageId: "location5" },
  ];

  const propertyTypes = ['Apartment', 'Villa', 'Studio', 'House', 'Office'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl w-full pt-16 sm:pt-0">
            <div className="text-primary-foreground mb-8">
              <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
                Find Your Dream Home
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?
              </p>
            </div>
            <Tabs defaultValue="for-rent" className="mt-8 w-full">
              <TabsList className="bg-transparent p-0">
                <TabsTrigger value="for-rent" className="data-[state=active]:bg-white data-[state=active]:text-gray-900 text-white mr-2 px-6 py-2 rounded-t-md border-b-0">For Rent</TabsTrigger>
                <TabsTrigger value="for-sale" className="data-[state=active]:bg-white data-[state=active]:text-gray-900 text-white px-6 py-2 rounded-t-md border-b-0">For Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="for-rent" className="bg-white p-6 rounded-b-md rounded-r-md shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Input placeholder="Search Keyword" />
                    <Input placeholder="Search Location" />
                     <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                    <Button variant="ghost" className="flex items-center gap-2 w-full sm:w-auto justify-center text-card-foreground">
                      <SlidersHorizontal className="w-4 h-4"/>
                      Advanced
                    </Button>
                    <Button className="w-full sm:w-auto bg-primary text-primary-foreground">
                      <Search className="w-4 h-4 mr-2" />
                      Find Properties
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="for-sale" className="bg-white p-6 rounded-b-md rounded-r-md shadow-lg">
                 <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Input placeholder="Search Keyword" />
                    <Input placeholder="Search Location" />
                     <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                    <Button variant="ghost" className="flex items-center gap-2 w-full sm:w-auto justify-center text-card-foreground">
                      <SlidersHorizontal className="w-4 h-4"/>
                      Advanced
                    </Button>
                    <Button className="w-full sm:w-auto bg-primary text-primary-foreground">
                      <Search className="w-4 h-4 mr-2" />
                      Find Properties
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm">FEATURED PROPERTIES</span>
            <h2 className="text-3xl font-headline font-bold">Recommended For You</h2>
          </div>
          <div className="flex justify-center items-center gap-2 flex-wrap mb-8">
            <Button size="sm" variant={filter === 'All' ? 'default' : 'ghost'} onClick={() => setFilter('All')}>View All</Button>
            {propertyTypes.map((type) => (
              <Button key={type} variant={filter === type ? 'default' : 'ghost'} size="sm" onClick={() => setFilter(type)}>{type}</Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeaturedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Location For You Section */}
      <section className="py-16 md:py-24 bg-muted px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm">EXPLORE CITIES</span>
            <h2 className="text-3xl font-headline font-bold">Our Location For You</h2>
          </div>
          <Carousel opts={{ loop: true, align: "start", slidesToScroll: 1, }}>
            <CarouselContent className="-ml-4">
              {locations.map((loc, index) => {
                const image = PlaceHolderImages.find(img => img.id === loc.imageId);
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        {image && (
                           <div className="relative aspect-[3/4]">
                            <Image
                              src={image.imageUrl}
                              alt={loc.city}
                              data-ai-hint={image.imageHint}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                               <p className="text-xs">{loc.properties} Property</p>
                               <p className="font-bold">{loc.city}</p>
                            </div>
                           </div>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white" />
          </Carousel>
        </div>
      </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-background px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm">OUR SERVICES</span>
              <h2 className="text-3xl font-headline font-bold">What We Do?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Buy a New Home</h3>
                <p className="text-muted-foreground">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
              </div>
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
                <p className="text-muted-foreground">Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored to suit your unique lifestyle needs.</p>
              </div>
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
                <p className="text-muted-foreground">Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
              </div>
            </div>
          </div>
        </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">61</p>
              <p className="text-muted-foreground">SATISFIED CLIENTS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">81</p>
              <p className="text-muted-foreground">AWARDS RECEIVED</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">23</p>
              <p className="text-muted-foreground">SUCCESSFUL TRANSACTIONS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">47</p>
              <p className="text-muted-foreground">MONTHLY TRAFFIC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
       <section className="py-16 md:py-24 bg-background px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm">OUR BENEFIT</span>
              <h2 className="text-3xl font-headline font-bold">Why Choose Homeya</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                <p className="text-muted-foreground">Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.</p>
              </div>
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <PencilRuler className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                <p className="text-muted-foreground">We pride ourselves on crafting personalized strategies to match and unique goals, ensuring a seamless real estate journey.</p>
              </div>
              <div>
                <div className="inline-block p-4 bg-muted rounded-full mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Partnerships</h3>
                <p className="text-muted-foreground">Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );

    

    

    

    

    

    
