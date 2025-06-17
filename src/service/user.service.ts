// services/user.service.ts

import api from "./axios.service";
import { CreateAddressPayload } from "../../types/address.type";
import { UpdateAccountPayload } from "../zod/client/update-account.schema";

export async function UpdateUserProfile(payload: UpdateAccountPayload) {
  const response = await api.put(`/customer`, payload);
  return response.data;
}
export async function createAddress({
  userId,
  ...address
}: CreateAddressPayload) {
  const response = await api.post(`users/${userId}/address`, address);
  return response.data;
}
export async function getUserAddress(userId: number) {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    return [
      {
        id: 3,
        country: "Angola",
        province: "Uíge",
        municipality: "Uíge",
        commune: "Candombe Novo",
        neighborhood: "Vila Real",
        street: "Avenida Comandante Bula", // rua real e conhecida em Uíge
        number: "147",
        referencePoint: "Próximo ao mercado municipal",
        postalCode: "",
        latitude: null,
        longitude: null,
        createdAt: "2025-04-11T15:04:23.581Z",
        updatedAt: "2025-04-11T15:04:23.581Z",
      },
    ];
  } else {
    const response = await api.get(`/users/${userId}/address`);

    return response.data;
  }
}
// services/user.service.ts
export async function deleteUserAddress(userId: number, addressId: number) {
  const response = await api.delete(`/users/${userId}/address/${addressId}`);
  return response.data;
}
