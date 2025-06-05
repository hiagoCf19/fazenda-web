import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/categories.service";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
