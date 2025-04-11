// services/user.service.ts

import api from "./axios.service";
import { CreateAddressPayload } from "../../types/address.type";
export async function createAddress({
  userId,
  ...address
}: CreateAddressPayload) {
  const response = await api.post(`users/${userId}/address`, address);
  return response.data;
}
export async function getUserAddress(userId: number) {
  const response = await api.get(`/users/${userId}/address`);
  return response.data;
}
// services/user.service.ts
export async function deleteUserAddress(userId: number, addressId: number) {
  const response = await api.delete(`/users/${userId}/address/${addressId}`);
  return response.data;
}
