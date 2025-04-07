import { z } from "zod";

export const angolaAddressSchema = z.object({
  id: z.any(),
  adress_type: z
    .string()
    .min(1, "Tipo de endereço é obrigatório")
    .refine(
      (val) => ["Casa", "Trabalho", "Outro"].includes(val),
      "Tipo inválido"
    ),
  province: z
    .string()
    .min(1, "Província é obrigatória")
    .refine((val) => provinciasDeAngola.includes(val), "Província inválida"),
  municipality: z.string().min(1, "Município é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  street: z.string().min(3, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
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
