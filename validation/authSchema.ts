import { z } from "zod";

export const authSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن نامعتبر است."),
});

export type AuthFormValues = z.infer<typeof authSchema>;
