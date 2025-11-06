
import { SuggestionForm } from './suggestion-form';
import { Bot, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SuggestionsPage() {
  const suggestionsHeaderImage = PlaceHolderImages.find((img) => img.id === "suggestions-header");

  return (
    <>
      <section className="relative h-[50vh] w-full">
        {suggestionsHeaderImage && (
          <Image
            src={suggestionsHeaderImage.imageUrl}
            alt={suggestionsHeaderImage.description}
            data-ai-hint={suggestionsHeaderImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            Smart Property Suggestions
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Let our AI help you find the perfect property. Just describe what you're looking for.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl py-16 px-4">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8 flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-primary/80 mt-1 shrink-0" />
          <div>
            <h3 className="font-semibold">How it works</h3>
            <p className="text-sm text-muted-foreground">
              Provide details like your desired location, budget, number of bedrooms, or any special features (e.g., "a sunny backyard" or "close to public transit"). Our AI will analyze your request and suggest matching properties.
            </p>
          </div>
        </div>
        
        <SuggestionForm />
      </div>
    </>
  );
}
