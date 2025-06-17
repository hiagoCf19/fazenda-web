// hooks/useCategorias.ts
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/categories-products.service";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: getCategories,
  });
};
