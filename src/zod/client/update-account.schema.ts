import { z } from "zod";

export const updateAccountSchema = z.object({
  first_name: z.string().min(3, "Insira um nome válido"),
  last_name: z.string().min(3, "Insira um sobrenome válido"),
  phone: z.string().min(9, "Telefone inválido"),
});

export type UpdateAccountPayload = z.infer<typeof updateAccountSchema>;
