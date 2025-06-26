/* // src/hooks/use.categories.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCategories,
  addCategory,
  updateCategoryStatus,
  Category,
  type ProductItem,
  getProductItems,
  addProductItem,
} from "../service/products-admin.service";
export function useCategories() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const addCategoryMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar categoria:", error);
    },
  });

  const updateCategoryStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: "Ativo" | "Inativo" }) =>
      updateCategoryStatus(id, status),
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ["categories"] });
      const previousCategories = queryClient.getQueryData(["categories"]);
      queryClient.setQueryData(["categories"], (old: Category[] | undefined) =>
        old?.map((cat) => (cat.id === id ? { ...cat, status } : cat))
      );
      return { previousCategories };
    },
    onError: (err, variables, context) => {
      console.error("Erro ao atualizar status da categoria:", err);
      queryClient.setQueryData(["categories"], context?.previousCategories);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    categories: data,
    isLoadingCategories: isLoading,
    isErrorCategories: isError,
    categoriesError: error,
    addCategory: addCategoryMutation.mutate,
    updateCategoryStatus: updateCategoryStatusMutation.mutate,
    isAddingCategory: addCategoryMutation.isPending,
    isUpdatingCategoryStatus: updateCategoryStatusMutation.isPending,
  };
}

export function useProductItems() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<ProductItem[], Error>({
    queryKey: ["productItems"],
    queryFn: getProductItems,
  });

  const addProductItemMutation = useMutation({
    mutationFn: addProductItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productItems"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar item de produto:", error);
    },
  });

  return {
    productItems: data,
    isLoadingProductItems: isLoading,
    isErrorProductItems: isError,
    productItemsError: error,
    addProductItem: addProductItemMutation.mutate,
    isAddingProductItem: addProductItemMutation.isPending,
  };
}
 */
