import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, MapPin, LandPlot } from "lucide-react";
import type { Property } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "./whatsapp-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PropertyCard({ property }: { property: Property }) {
  const image = PlaceHolderImages.find(img => img.id === property.images.thumbnailId);

  const formatPrice = (price: number) => {
    if (property.type === 'For Rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/properties/${property.id}`} aria-label={`View details for ${property.title}`}>
          <div className="aspect-[3/2] w-full relative">
            <Badge variant={property.type === 'For Sale' ? 'default' : 'secondary'} className="absolute top-3 left-3 z-10">{property.type}</Badge>
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">{property.title}</h3>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4 mr-2 shrink-0" />
          <span>{property.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-foreground">
            <div className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-muted-foreground" /> <span>{property.bedrooms} Beds</span></div>
            <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-muted-foreground" /> <span>{property.bathrooms} Baths</span></div>
            <div className="flex items-center gap-2"><LandPlot className="w-4 h-4 text-muted-foreground" /> <span>{property.size.toLocaleString()} sqft</span></div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-2xl font-bold text-primary">{formatPrice(property.price)}</p>
        <WhatsAppButton 
          message="Book"
          prefilledMessage={`Hi, I'm interested in viewing the property "${property.title}" at ${property.location}.`}
          variant="outline"
          size="sm"
          className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent"
        />
      </CardFooter>
    </Card>
  );
}
