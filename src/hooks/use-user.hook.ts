// hooks/useUserAddress.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAddress,
  deleteUserAddress,
  getUserAddress,
} from "../service/user.service";
import { CreateAddressPayload } from "../../types/address.type";

export function useCreateUserAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAddressPayload) => createAddress(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-address"] });
    },
  });
}

export function useUserAddress(userId: number) {
  return useQuery({
    queryKey: ["user-address", userId],
    queryFn: () => getUserAddress(userId),
    enabled: userId > 0, // só roda se o userId existir
    staleTime: 1000 * 60 * 5, // 5 minutos (ajustável)
  });
}
export function useDeleteUserAddress(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (addressId: number) => deleteUserAddress(userId, addressId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-address", userId],
      });
    },

    onError: (error: any) => {
      console.error("❌ Erro ao deletar endereço:", error);
    },
  });
}
