import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { teamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building, Home, Search } from "lucide-react";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about");

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About {APP_NAME}</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
          Your trusted partner in navigating the real estate landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="prose prose-lg max-w-none text-foreground">
          <h2 className="font-headline text-3xl">Our Story</h2>
          <p>
            Founded with a vision to simplify the property market, {APP_NAME} has grown into a leading real estate agency known for its integrity, professionalism, and client-centric approach. We believe that finding a property should be an exciting and seamless experience.
          </p>
          <p>
            Our mission is to empower you with the best information and expert guidance to make informed decisions. We're proud to innovate with features like our direct WhatsApp booking system, making property viewings easier than ever.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
      
      <section className="mb-24">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
                <CardHeader className="items-center">
                    <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Home className="w-6 h-6" />
                    </div>
                    <CardTitle>Buying Properties</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    We help you find the perfect home that fits your lifestyle and budget, from initial search to closing the deal.
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center">
                    <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Building className="w-6 h-6" />
                    </div>
                    <CardTitle>Selling & Renting</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    Our strategic marketing and vast network ensure you get the best price for your property, whether you're selling or renting it out.
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center">
                    <div className="p-3 bg-primary text-primary-foreground rounded-full">
                        <Search className="w-6 h-6" />
                    </div>
                    <CardTitle>Investment Advice</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    Leverage our market expertise to make smart real estate investments that deliver long-term value.
                </CardContent>
            </Card>
        </div>
      </section>

      <div>
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const teamImage = PlaceHolderImages.find((img) => img.id === member.imageId);
            return (
              <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    {teamImage && <AvatarImage src={teamImage.imageUrl} alt={`Photo of ${member.name}`} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
