
import { z } from 'zod';

export const step0Schema = z.object({
  icp_type: z.string().min(1, { message: "Please select your role" })
});

export const step1Schema = z.object({
  sectors: z.array(z.string()).min(1, { message: "Please select at least one sector" }),
  markets: z.string().min(1, { message: "Please specify number of markets" }),
  brands: z.string().min(1, { message: "Please specify number of brands" }),
  products: z.string().min(1, { message: "Please specify number of products" })
});

export const step2Schema = z.object({
  challenges: z.array(z.string()).min(1, { message: "Please select at least one challenge" })
});

export const step3Schema = z.object({
  timeframe: z.string().min(1, { message: "Please select a timeframe" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  marketing_consent: z.boolean().optional().default(false)
});

export type Step0Data = z.infer<typeof step0Schema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
