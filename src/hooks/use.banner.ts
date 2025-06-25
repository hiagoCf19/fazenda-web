// src/hooks/use.banners.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBanners,
  addBanner,
  updateBannerStatus,
  deleteBanner,
  Banner,
} from "../service/banners.service";
export function useBanners() {
  const queryClient = useQueryClient();

  // Hook para buscar a lista de banners
  const { data, isLoading, isError, error } = useQuery<Banner[], Error>({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  // Hook para adicionar um novo banner
  const addBannerMutation = useMutation({
    mutationFn: addBanner,
    onSuccess: (newBanner) => {
      // Invalida o cache 'banners' para que a lista seja recarregada ou atualiza o cache diretamente
      queryClient.invalidateQueries({ queryKey: ["banners"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar banner:", error);
      // Aqui você pode adicionar um toast de erro
    },
  });

  // Hook para atualizar o status (ativo/inativo) de um banner
  const updateBannerStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      updateBannerStatus(id, isActive),
    onMutate: async ({ id, isActive }) => {
      // Otimisticamente atualiza o cache antes da mutação real
      await queryClient.cancelQueries({ queryKey: ["banners"] }); // Cancela queries pendentes
      const previousBanners = queryClient.getQueryData(["banners"]); // Pega o estado atual
      queryClient.setQueryData(["banners"], (old: Banner[] | undefined) =>
        old?.map((banner) =>
          banner.id === id ? { ...banner, isActive } : banner
        )
      );
      return { previousBanners }; // Retorna o contexto para o onError
    },
    onError: (err, variables, context) => {
      console.error("Erro ao atualizar status do banner:", err);
      // Reverte para o estado anterior em caso de erro
      queryClient.setQueryData(["banners"], context?.previousBanners);
    },
    onSettled: () => {
      // Garante que o cache seja invalidado e recarregado após a mutação (sucesso ou falha)
      queryClient.invalidateQueries({ queryKey: ["banners"] });
    },
  });

  // Hook para excluir um banner
  const deleteBannerMutation = useMutation({
    mutationFn: deleteBanner,
    onMutate: async (bannerId) => {
      // Otimisticamente remove o banner do cache
      await queryClient.cancelQueries({ queryKey: ["banners"] });
      const previousBanners = queryClient.getQueryData(["banners"]);
      queryClient.setQueryData(["banners"], (old: Banner[] | undefined) =>
        old?.filter((banner) => banner.id !== bannerId)
      );
      return { previousBanners };
    },
    onError: (err, variables, context) => {
      console.error("Erro ao excluir banner:", err);
      queryClient.setQueryData(["banners"], context?.previousBanners);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
    },
  });

  return {
    banners: data,
    isLoadingBanners: isLoading,
    isErrorBanners: isError,
    bannersError: error,
    addBanner: addBannerMutation.mutate,
    updateBannerStatus: updateBannerStatusMutation.mutate,
    deleteBanner: deleteBannerMutation.mutate,
    isAddingBanner: addBannerMutation.isPending,
    isUpdatingStatus: updateBannerStatusMutation.isPending,
    isDeletingBanner: deleteBannerMutation.isPending,
  };
}
