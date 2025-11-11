
import Image from "next/image";
import { notFound } from "next/navigation";
import { properties } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/back-button";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    if (property.type === 'For Rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const galleryImages = property.images.galleryIds.map(id => 
    PlaceHolderImages.find(img => img.id === id)
  ).filter(Boolean);

  return (
    <div className="bg-card">
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto mb-8">
            <BackButton />
        </div>
        {/* Image Carousel */}
        <Carousel className="w-full max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden shadow-2xl">
          <CarouselContent>
            {galleryImages.map((image, index) => image && (
              <CarouselItem key={index}>
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl}
                    alt={`${property.title} - image ${index + 1}`}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Property Info */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h1 className="text-4xl font-headline font-bold">{property.title}</h1>
              <p className="text-lg text-muted-foreground mt-1">{property.location}</p>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <p className="text-3xl font-bold text-primary">{formatPrice(property.price)}</p>
              <Badge variant={property.type === 'For Sale' ? 'default' : 'secondary'} className="mt-1">{property.type}</Badge>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About this property</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Key Details</h3>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <p><strong className="font-semibold">Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong className="font-semibold">Bathrooms:</strong> {property.bathrooms}</p>
                <p><strong className="font-semibold">Size:</strong> {property.size.toLocaleString()} sqft</p>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {property.amenities.map(amenity => (
                      <li key={amenity.name} className="flex items-center gap-3">
                        <amenity.icon className="w-5 h-5 text-primary"/>
                        <span>{amenity.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator className="my-8" />

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Interested in this property?</h2>
            <p className="text-muted-foreground mb-6">Book a viewing directly with our team on WhatsApp!</p>
            <WhatsAppButton
                message="Book a Viewing via WhatsApp Now!"
                prefilledMessage={`Hi, I'm interested in viewing the property "${property.title}" at ${property.location}.`}
                className="inline-flex"
                size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
