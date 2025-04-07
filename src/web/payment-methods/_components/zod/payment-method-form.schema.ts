import { z } from "zod";

export const cartaoSchema = z.object({
  numero: z
    .string()
    .min(13, "Número do cartão deve ter pelo menos 13 dígitos")
    .max(19, "Número do cartão não pode ter mais de 19 dígitos")
    .regex(/^\d+$/, "Apenas números são permitidos"),
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Formato inválido. Use MM/AA"),
  cvv: z
    .string()
    .length(3, "CVV deve ter 3 dígitos")
    .regex(/^\d+$/, "Apenas números são permitidos"),
  titular: z
    .string()
    .min(3, "Nome do titular deve ter pelo menos 3 caracteres"),
  documento: z
    .string()
    .min(11, "CPF/CNPJ deve ter pelo menos 11 dígitos")
    .regex(/^\d+$/, "Apenas números são permitidos"),
});
