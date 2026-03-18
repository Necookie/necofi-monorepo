import { z } from 'zod';

export const apiHealthSchema = z.object({
  status: z.literal('ok'),
  timestamp: z.string().datetime(),
});

export const emailSchema = z.string().email();

export type ApiHealthSchema = z.infer<typeof apiHealthSchema>;
