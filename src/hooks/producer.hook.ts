// hooks/useRegisterUser.ts

import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "../../types/register-user-payload.type";
import { registerProducer, uploadDocuments } from "../service/producer.service";
import { Session } from "../../types/session.type";

export function useRegisterProducer() {
  return useMutation<Session, any, RegisterPayload>({
    mutationFn: registerProducer,
  });
}
// Hook com mutation
export function useUploadDocuments() {
  return useMutation<void, any, { data: FormData; userId: number }>({
    mutationFn: ({ data, userId }) => uploadDocuments(data, userId),
  });
}
