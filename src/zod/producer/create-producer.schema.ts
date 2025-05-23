import { z } from "zod";

export const producerBusinessInfoSchema = z.object({
  businessName: z.string().min(3, "Insira um nome válido"),
  personResponsible: z.string().min(3, "Insira um nome válido"),
  contactPhone: z
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

const fileSchema = z.any();

export const producerDocumentsSchema = z.object({
  nif: fileSchema,
  business_license: fileSchema,
  diario_rep: fileSchema,
  mei_representative: fileSchema,
  commercial_certificate: fileSchema,
});
export type ProducerBusinessInfoSchema = z.infer<
  typeof producerBusinessInfoSchema
>;
export type ProducerDocumentsSchema = z.infer<typeof producerDocumentsSchema>;
