"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getSuggestions } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initialState = {
  success: false,
  message: null,
  suggestions: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
      Get Suggestions
    </Button>
  );
}

export function SuggestionForm() {
  const [state, formAction] = useFormState(getSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Describe Your Dream Property</CardTitle>
        <CardDescription>
          Example: "A 3-bedroom house in Austin with a big yard for my dog, under $700,000."
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <Textarea
            name="userCriteria"
            placeholder="Start typing here..."
            className="min-h-[120px] text-base"
            required
          />
          <SubmitButton />
        </form>

        {state.message && (
          <Alert className="mt-6" variant={state.success ? "default" : "destructive"}>
            <AlertTitle>{state.success ? "Success!" : "Error"}</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        {state.suggestions && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>AI-Powered Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>{state.suggestions}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
