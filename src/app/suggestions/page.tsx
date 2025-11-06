import { SuggestionForm } from './suggestion-form';
import { Bot, Lightbulb } from 'lucide-react';

export default function SuggestionsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <div className="text-center mb-12">
        <Bot className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Smart Property Suggestions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Let our AI help you find the perfect property. Just describe what you're looking for.
        </p>
      </div>

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
  );
}
