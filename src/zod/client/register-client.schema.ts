import { z } from "zod";

export const nifSchema = z.object({
  nif: z
    .string()
    .min(9, { message: "NIF deve ter no mínimo 9 caracteres" })
    .max(9, { message: "NIF deve ter no máximo 9 caracteres" }),
});

export const passwordSchema = z
  .object({
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Isso indica onde o erro deve aparecer
  });

export const nameSchema = z.object({
  firstName: z.string().min(3, "Insira um nome válido"),
  lastName: z.string().min(3, "Insira um sobrenome válido"),
});
export const companySchema = z.object({
  designation: z.string().min(3, "Insira uma designação válida"),
  activity: z.string().min(3, "Insira uma atividade válida"),
  companyRepresentative: z.string().min(3, "Insira um nome válido"),
});

export const emailPhoneSchema = z.object({
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .min(13, {
      message: "O número de telefone deve ter pelo menos 13 caracteres",
    })
    .max(18, {
      message: "O número de telefone não pode ter mais de 18 caracteres",
    })
    .regex(/^\+244 \d{3} \d{3} \d{3}$/, {
      message: "O número de telefone deve seguir o formato: +244 912 345 678",
    }),
});

export const codeSchema = z.object({
  pin: z.any(),
});

export type NifSchema = z.infer<typeof nifSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type NameSchema = z.infer<typeof nameSchema>;
export type CompanySchema = z.infer<typeof companySchema>;
export type EmailPhoneSchema = z.infer<typeof emailPhoneSchema>;
export type CodeSchema = z.infer<typeof codeSchema>;
