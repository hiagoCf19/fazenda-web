// src/hooks/use.users.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUsers,
  addUser,
  updateUserStatus,
  deleteUser,
  User,
} from "../service/users.service";
export function useUsers() {
  const queryClient = useQueryClient();

  // Hook para buscar a lista de usuários
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // Hook para adicionar um novo usuário
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      // Opcional: Otimisticamente atualiza o cache
      // queryClient.setQueryData(["users"], (old: User[] | undefined) => [...(old || []), newUser]);
    },
    onError: (error) => {
      console.error("Erro ao adicionar usuário:", error);
    },
  });

  // Hook para atualizar o status 'isActive' de um usuário
  const updateUserStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      updateUserStatus(id, isActive),
    onMutate: async ({ id, isActive }) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUsers = queryClient.getQueryData(["users"]);
      queryClient.setQueryData(["users"], (old: User[] | undefined) =>
        old?.map((user) => (user.id === id ? { ...user, isActive } : user))
      );
      return { previousUsers };
    },
    onError: (err, _, context) => {
      console.error("Erro ao atualizar status do usuário:", err);
      queryClient.setQueryData(["users"], context?.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // Hook para excluir um usuário
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUsers = queryClient.getQueryData(["users"]);
      queryClient.setQueryData(["users"], (old: User[] | undefined) =>
        old?.filter((user) => user.id !== userId)
      );
      return { previousUsers };
    },
    onError: (err, _, context) => {
      console.error("Erro ao excluir usuário:", err);
      queryClient.setQueryData(["users"], context?.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    users: data,
    isLoadingUsers: isLoading,
    isErrorUsers: isError,
    usersError: error,
    addUser: addUserMutation.mutate,
    updateUserStatus: updateUserStatusMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    isAddingUser: addUserMutation.isPending,
    isUpdatingUserStatus: updateUserStatusMutation.isPending,
    isDeletingUser: deleteUserMutation.isPending,
  };
}
