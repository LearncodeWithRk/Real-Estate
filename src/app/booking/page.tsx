
import { BookingForm } from "./booking-form";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function BookingPage() {
  const bookingHeaderImage = PlaceHolderImages.find((img) => img.id === "booking-header");

  return (
    <>
      <section className="relative h-[50vh] w-full">
        {bookingHeaderImage && (
          <Image
            src={bookingHeaderImage.imageUrl}
            alt={bookingHeaderImage.description}
            data-ai-hint={bookingHeaderImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            Book a Property Viewing
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Easily schedule a property tour via WhatsApp!
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="prose max-w-none text-foreground">
            <h2 className="font-headline text-2xl">How It Works</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Fill out the form with your preferred details.</li>
              <li>Click the "Confirm on WhatsApp" button.</li>
              <li>Your WhatsApp will open with a pre-filled message. Just send it!</li>
              <li>Our team will reply to confirm your booking and answer any questions.</li>
            </ol>
            <div className="mt-6 flex items-start gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <MessageCircle className="h-8 w-8 text-primary mt-1 shrink-0"/>
              <p className="text-sm">
                  We use WhatsApp for its speed and convenience, allowing us to provide you with instant support and confirmation.
              </p>
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
