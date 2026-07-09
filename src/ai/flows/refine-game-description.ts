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
  prompt: `You are a professional marketing copywriter specializing in video game descriptions. 

Target Language: {{{targetLanguage}}}

Your task is to take the original game description provided below and produce a version that is engaging, clear, and marketable in the Target Language.

If the Target Language is "ar" (Arabic), translate and localize the description into high-quality Arabic. The tone should be exciting and professional for a gaming audience. Keep game-specific names or technical terms in English if that is common practice, but ensure the prose is fluent Arabic.

If the Target Language is "en" (English), refine the original text for better flow and impact.

Original Description:
{{{originalDescription}}}

Refined Description:`,
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
      if (!output) throw new Error('AI returned no output');
      return output;
    } catch (error: any) {
      console.error('Genkit Refinement Error:', error?.message || error);
      
      if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
        console.warn('AI Quota exceeded. Falling back to original description.');
      }

      return {
        refinedDescription: input.originalDescription
      };
    }
  }
);
