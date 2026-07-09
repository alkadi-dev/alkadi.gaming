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

Target Language: {{{targetLanguage}}}

Your absolute priority is to provide a version of the game description in the Target Language.

IF TARGET LANGUAGE IS "ar":
- You MUST translate the entire description into high-quality, professional Arabic.
- Use a tone that is exciting, immersive, and appealing to a gaming audience.
- Localize terms so they sound natural in Arabic.
- Keep the game Title in English if mentioned, but all prose MUST be Arabic.
- DO NOT return English text.

IF TARGET LANGUAGE IS "en":
- Refine the original text for better flow, impact, and marketing appeal.
- Ensure the tone is consistent with modern AAA game descriptions.

Original Description:
{{{originalDescription}}}

Refined Description (in {{{targetLanguage}}}):`,
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
      console.error('Genkit Refinement Error:', error?.message || error);
      
      // Fallback logic: If it was supposed to be Arabic but failed, 
      // we return original but log the failure clearly.
      return {
        refinedDescription: input.originalDescription
      };
    }
  }
);
