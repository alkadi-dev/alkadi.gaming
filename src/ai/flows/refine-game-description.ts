'use server';
/**
 * @fileOverview A Genkit flow for refining and translating game descriptions using AI.
 *
 * - refineGameDescription - A function that handles the game description refinement and translation process.
 * - RefineGameDescriptionInput - The input type for the refineGameDescription function.
 * - RefineGameDescriptionOutput - The return type for the refineGameDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RefineGameDescriptionInputSchema = z.object({
  originalDescription: z.string().describe('The original game description.'),
  targetLanguage: z.string().describe('The target language for the output (e.g., "en", "ar").'),
});
export type RefineGameDescriptionInput = z.infer<typeof RefineGameDescriptionInputSchema>;

const RefineGameDescriptionOutputSchema = z.object({
  refinedDescription: z.string().describe('The AI-refined or translated game description.'),
});
export type RefineGameDescriptionOutput = z.infer<typeof RefineGameDescriptionOutputSchema>;

export async function refineGameDescription(input: RefineGameDescriptionInput): Promise<RefineGameDescriptionOutput> {
  return refineGameDescriptionFlow(input);
}

const refineGameDescriptionPrompt = ai.definePrompt({
  name: 'refineGameDescriptionPrompt',
  input: { schema: RefineGameDescriptionInputSchema },
  output: { schema: RefineGameDescriptionOutputSchema },
  prompt: `You are a professional video game localization expert and marketing copywriter.

Your task is to provide the game description in the requested Target Language.

TARGET LANGUAGE: {{{targetLanguage}}}

INSTRUCTIONS FOR ARABIC ("ar"):
- You MUST translate the entire text below into high-quality, professional, and immersive Arabic.
- Use a tone that is exciting, modern, and appealing to a gaming audience.
- Localize gaming terms so they sound natural in Arabic.
- Keep the Game Title in English if it appears, but ALL other prose MUST be in Arabic.
- DO NOT return English text.

INSTRUCTIONS FOR ENGLISH ("en"):
- Refine the text for better marketing impact.
- Ensure the tone is consistent with AAA game descriptions.

ORIGINAL DESCRIPTION:
{{{originalDescription}}}

OUTPUT (ONLY the refined/translated description):`,
});

const refineGameDescriptionFlow = ai.defineFlow(
  {
    name: 'refineGameDescriptionFlow',
    inputSchema: RefineGameDescriptionInputSchema,
    outputSchema: RefineGameDescriptionOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await refineGameDescriptionPrompt(input);
      if (!output || !output.refinedDescription) {
        throw new Error('AI returned empty or invalid output');
      }
      return output;
    } catch (error: any) {
      console.error('Genkit Translation Error:', error?.message || error);
      // Fallback: If translation fails, return original text
      return {
        refinedDescription: input.originalDescription
      };
    }
  }
);
