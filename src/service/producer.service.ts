import { RegisterPayload } from "../../types/register-user-payload.type";
import { Session } from "../../types/session.type";

import api from "./axios.service";

export async function registerProducer(
  data: RegisterPayload
): Promise<Session> {
  const response = await api.post(`/producer/register`, data);
  return response.data as Session;
}
export async function uploadDocuments(
  data: FormData,
  userId: number
): Promise<void> {
  await api.post(`/producer/uploadDocuments/${userId}`, data);
}
