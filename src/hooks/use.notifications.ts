// src/hooks/use.notifications.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getNotifications,
  addNotification,
  Notification,
} from "../service/notifications.service";

export function useNotifications() {
  const queryClient = useQueryClient();

  // Hook para buscar a lista de notificações
  const { data, isLoading, isError, error } = useQuery<Notification[], Error>({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  // Hook para adicionar uma nova notificação
  const addNotificationMutation = useMutation({
    mutationFn: addNotification,
    onSuccess: () => {
      // Invalida o cache 'notifications' para que a lista seja recarregada
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      console.error("Erro ao adicionar notificação:", error);
      // Adicione um toast de erro aqui se tiver
    },
  });

  return {
    notifications: data,
    isLoadingNotifications: isLoading,
    isErrorNotifications: isError,
    notificationsError: error,
    addNotification: addNotificationMutation.mutate,
    isAddingNotification: addNotificationMutation.isPending,
  };
}
