// hooks/useRegisterUser.ts

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../service/auth.service";
import { RegisterPayload } from "../../types/register-user-payload.type";
import { login } from "../service/auth.service";

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
export function useRegisterUser() {
  return useMutation<{ user_id: number }, any, RegisterPayload>({
    mutationFn: registerUser,
  });
}
