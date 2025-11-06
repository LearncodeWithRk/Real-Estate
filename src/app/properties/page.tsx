import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/data";
import { PropertyFilters } from "./property-filters";

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filter = typeof searchParams.filter === "string" ? searchParams.filter : "all";

  const filteredProperties = properties.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'sale') return p.type === 'For Sale';
    if (filter === 'rent') return p.type === 'For Rent';
    return true;
  });

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Properties</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Browse our curated collection of properties available for sale and rent.
        </p>
      </div>

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
  );
}
