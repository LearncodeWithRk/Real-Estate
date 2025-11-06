"use server";

import { suggestProperties, SuggestPropertiesInput } from "@/ai/flows/smart-property-suggestions";
import { z } from "zod";

const inputSchema = z.object({
  userCriteria: z.string().min(10, "Please provide more details for a better suggestion."),
});

type State = {
  success: boolean;
  message: string | null;
  suggestions: string | null;
};

export async function getSuggestions(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = inputSchema.safeParse({
    userCriteria: formData.get("userCriteria"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.userCriteria?.[0] || "Invalid input.",
      suggestions: null,
    };
  }

  try {
    const input: SuggestPropertiesInput = {
      userCriteria: validatedFields.data.userCriteria,
    };
    const result = await suggestProperties(input);
    
    return {
      success: true,
      message: "Here are your personalized suggestions!",
      suggestions: result.suggestedProperties,
    };
  } catch (error) {
    console.error("AI suggestion failed:", error);
    return {
      success: false,
      message: "Sorry, we couldn't generate suggestions at this time. Please try again later.",
      suggestions: null,
    };
  }
}
