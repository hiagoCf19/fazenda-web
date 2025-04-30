import { z } from "zod";

export const createAddressSchema = z.object({
  country: z.string().min(1, "País é obrigatório"),
  province: z
    .string()
    .min(1, "Província é obrigatória")
    .refine((val) => provinciasDeAngola.includes(val), "Província inválida"),
  municipality: z.string().min(1, "Município é obrigatório"),
  commune: z.string().min(1, "Comuna é obrigatória"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  street: z.string().min(3, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  referencePoint: z.string().min(1, "Ponto de referência é obrigatório"),
  postalCode: z.string().min(1, "Código postal é obrigatório"),
  // Campos extras opcionais:
  address_type: z.enum(["Padrão", "Casa", "Trabalho"], {
    required_error: "É necessário especificar o tipo de endereço",
  }),
  complement: z.string().optional(),
});

// Lista de províncias de Angola (pode ser usada em dropdowns, selects etc)
export const provinciasDeAngola = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Namibe",
  "Uíge",
  "Zaire",
];
