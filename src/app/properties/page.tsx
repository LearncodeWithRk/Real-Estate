import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";
import { PropertyFilters } from "./property-filters";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filter = typeof searchParams.filter === "string" ? searchParams.filter : "all";
  const propertiesHeaderImage = PlaceHolderImages.find((img) => img.id === "properties-header");

  const filteredProperties = properties.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'sale') return p.type === 'For Sale';
    if (filter === 'rent') return p.type === 'For Rent';
    return true;
  });

  return (
    <>
      <section className="relative h-[50vh] w-full">
        {propertiesHeaderImage && (
          <Image
            src={propertiesHeaderImage.imageUrl}
            alt={propertiesHeaderImage.description}
            data-ai-hint={propertiesHeaderImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            Our Properties
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Browse our curated collection of properties available for sale and rent.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4">
        <PropertyFilters />

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No properties match the current filters.</p>
          </div>
        )}
      </div>
    </>
  );
}
