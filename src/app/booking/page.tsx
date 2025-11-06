import { BookingForm } from "./booking-form";
import { MessageCircle } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Book a Property Viewing</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Easily schedule a property tour via WhatsApp!
        </p>
      </div>

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
  );
}
