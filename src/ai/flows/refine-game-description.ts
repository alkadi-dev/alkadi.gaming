'use server';
/**
 * @fileOverview A Genkit flow for refining game descriptions using AI.
 *
 * - refineGameDescription - A function that handles the game description refinement process.
 * - RefineGameDescriptionInput - The input type for the refineGameDescription function.
 * - RefineGameDescriptionOutput - The return type for the refineGameDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RefineGameDescriptionInputSchema = z.object({
  originalDescription: z.string().describe('The original game description fetched from Jotform.'),
});
export type RefineGameDescriptionInput = z.infer<typeof RefineGameDescriptionInputSchema>;

const RefineGameDescriptionOutputSchema = z.object({
  refinedDescription: z.string().describe('The AI-refined game description, improved for clarity, engagement, and marketing appeal.'),
});
export type RefineGameDescriptionOutput = z.infer<typeof RefineGameDescriptionOutputSchema>;

export async function refineGameDescription(input: RefineGameDescriptionInput): Promise<RefineGameDescriptionOutput> {
  return refineGameDescriptionFlow(input);
}

const refineGameDescriptionPrompt = ai.definePrompt({
  name: 'refineGameDescriptionPrompt',
  input: { schema: RefineGameDescriptionInputSchema },
  output: { schema: RefineGameDescriptionOutputSchema },
  prompt: `You are a professional marketing copywriter specializing in video game descriptions. Your task is to take an original game description and refine it to be more engaging, clear, and marketable.

Ensure the refined description retains all essential information and the core essence of the original. Focus on highlighting unique features, player experience, and overall appeal.

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
      // Handle quota exhaustion or other AI errors gracefully by returning the original description
      console.error('Genkit Refinement Error:', error?.message || error);
      
      // If the error is a quota exhaustion (429), we provide a clear log for the developer
      if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
        console.warn('AI Quota exceeded. Falling back to original description.');
      }

      return {
        refinedDescription: input.originalDescription
      };
    }
  }
);
