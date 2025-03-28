import { z } from "zod";

export const nifSchema = z.object({
  nif: z
    .string()
    .min(9, { message: "NIF deve ter no mínimo 9 caracteres" })
    .max(9, { message: "NIF deve ter no máximo 9 caracteres" }),
});

export const passwordSchema = z.object({
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const nameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export const emailPhoneSchema = z.object({
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(9, "Telefone inválido"),
});

export const codeSchema = z.object({
  pin: z.any(),
});

export type NifSchema = z.infer<typeof nifSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type NameSchema = z.infer<typeof nameSchema>;
export type EmailPhoneSchema = z.infer<typeof emailPhoneSchema>;
export type CodeSchema = z.infer<typeof codeSchema>;
