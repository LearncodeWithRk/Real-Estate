import Image from "next/image";
import { PropertyCard } from "@/components/property-card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { properties } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building, Home as HomeIcon, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
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
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            Find Your Dream Home or Investment Property with Ease!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Your journey to the perfect property starts here. We offer expert guidance for buying, selling, and renting.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              message="Book a Property Viewing via WhatsApp!"
              prefilledMessage="Hi! I'd like to book a property viewing."
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">Our Services</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            We provide a complete range of real estate services to meet your needs, whether you're a first-time buyer or a seasoned investor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <HomeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buying</h3>
              <p className="text-muted-foreground">Find and purchase your ideal home with our expert agents guiding you every step of the way.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Selling & Renting</h3>
              <p className="text-muted-foreground">Get the best value for your property. We handle marketing, viewings, and negotiations.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investing</h3>
              <p className="text-muted-foreground">Discover lucrative investment opportunities in the real estate market with our data-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
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
    </div>
  );
}
