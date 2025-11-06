'use server';

/**
 * @fileOverview A flow for providing smart property suggestions based on user criteria.
 *
 * - suggestProperties - A function that takes user criteria and returns a list of suggested properties.
 * - SuggestPropertiesInput - The input type for the suggestProperties function.
 * - SuggestPropertiesOutput - The return type for the suggestProperties function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPropertiesInputSchema = z.object({
  userCriteria: z
    .string()
    .describe('The criteria provided by the user for property suggestions.'),
});
export type SuggestPropertiesInput = z.infer<typeof SuggestPropertiesInputSchema>;

const SuggestPropertiesOutputSchema = z.object({
  suggestedProperties: z
    .string()
    .describe('A list of suggested properties based on the user criteria.'),
});
export type SuggestPropertiesOutput = z.infer<typeof SuggestPropertiesOutputSchema>;

export async function suggestProperties(input: SuggestPropertiesInput): Promise<SuggestPropertiesOutput> {
  return suggestPropertiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPropertiesPrompt',
  input: {schema: SuggestPropertiesInputSchema},
  output: {schema: SuggestPropertiesOutputSchema},
  prompt: `You are a real estate expert. Based on the user's criteria, provide a list of suggested properties.

User Criteria: {{{userCriteria}}}

Suggested Properties:`,
});

const suggestPropertiesFlow = ai.defineFlow(
  {
    name: 'suggestPropertiesFlow',
    inputSchema: SuggestPropertiesInputSchema,
    outputSchema: SuggestPropertiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
