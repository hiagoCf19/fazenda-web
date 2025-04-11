import { RegisterPayload } from "../../types/register-user-payload.type";
import { Session } from "../../types/session.type";
import api from "./axios.service";

type Credentials = {
  email: string;
  password: string;
};

// service/auth.service.ts
export async function login(credentials: Credentials): Promise<Session> {
  const response = await api.post(`/auth/login`, credentials);
  const { access_token, user } = response.data;
  return { access_token, user };
}

export async function registerUser(
  data: RegisterPayload
): Promise<{ user_id: number }> {
  const response = await api.post(`/customer/register`, data);
  return { user_id: response.data.user_id };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
