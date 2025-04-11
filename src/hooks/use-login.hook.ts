// src/hooks/use-login.ts
import { useMutation } from "@tanstack/react-query";
import { login } from "../service/auth.service";

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
