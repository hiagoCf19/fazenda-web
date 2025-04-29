import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converte uma string para um formato slug (URL-friendly)
 * Ex: "Fazenda esperança" -> "fazenda-esperanca"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // normaliza acentos
    .replace(/[\u0300-\u036f]/g, "") // remove diacríticos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // substitui espaços por hífens
    .replace(/[^\w-]+/g, "") // remove caracteres não-alfanuméricos
    .replace(/--+/g, "-"); // substitui múltiplos hífens por um único
}
