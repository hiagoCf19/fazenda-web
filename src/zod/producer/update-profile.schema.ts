import { z } from "zod";

export const updateProfilePRODUCER = z.object({
  business_name: z.string().min(3, "Insira um nome de empresa válido"),
  responsible: z.string().min(3, "Insira um nome válido"),
  phone: z.string().min(9, "Telefone inválido"),
});
export type updateProfilePRODUCERType = z.infer<typeof updateProfilePRODUCER>;
