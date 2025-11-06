import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, MapPin, LandPlot, Maximize, Heart, RefreshCw } from "lucide-react";
import type { Property } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function PropertyCard({ property }: { property: Property }) {
  const image = PlaceHolderImages.find(img => img.id === property.images.thumbnailId);
  const agentImage = PlaceHolderImages.find(img => img.id === 'team1'); // Example agent

  const formatPrice = (price: number) => {
    if (property.type === 'For Rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl rounded-lg border">
      <div className="p-0 relative">
        <Link href={`/properties/${property.id}`} aria-label={`View details for ${property.title}`}>
          <div className="aspect-[4/3] w-full relative group">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-t-lg"
              />
            )}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                <Badge variant='secondary' className="bg-green-500/80 text-white border-0">FEATURED</Badge>
                <Badge variant={property.type === 'For Sale' ? 'default' : 'secondary'} className="bg-black/50 text-white border-0">{property.type}</Badge>
            </div>
            <div className="absolute top-3 right-3 z-10 flex gap-2">
                <span className="p-2 bg-black/50 rounded-full cursor-pointer hover:bg-primary"><RefreshCw className="w-4 h-4 text-white"/></span>
                <span className="p-2 bg-black/50 rounded-full cursor-pointer hover:bg-primary"><Heart className="w-4 h-4 text-white"/></span>
                <span className="p-2 bg-black/50 rounded-full cursor-pointer hover:bg-primary"><Maximize className="w-4 h-4 text-white"/></span>
            </div>
            <div className="absolute bottom-3 left-3 z-10">
                <Badge variant="secondary" className="bg-white/90 text-foreground">{property.category || 'House'}</Badge>
            </div>
          </div>
        </Link>
      </div>
      <CardContent className="flex-grow p-4 space-y-3">
        <h3 className="text-lg font-bold truncate">
            <Link href={`/properties/${property.id}`} className="hover:text-primary">{property.title}</Link>
        </h3>
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 mr-2 shrink-0" />
          <span>{property.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-foreground border-b pb-4">
            <div className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-muted-foreground" /> <span>{property.bedrooms} Beds</span></div>
            <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-muted-foreground" /> <span>{property.bathrooms} Baths</span></div>
            <div className="flex items-center gap-2"><LandPlot className="w-4 h-4 text-muted-foreground" /> <span>{property.size.toLocaleString()} sqft</span></div>
        </div>
         <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
                {agentImage && <Avatar className="h-8 w-8">
                    <AvatarImage src={agentImage.imageUrl} alt="Agent" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>}
                <span className="text-sm text-muted-foreground">Jane Doe</span>
            </div>
            <p className="text-lg font-bold text-foreground">{formatPrice(property.price)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
