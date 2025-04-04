import { Session } from "../../types/session.type";
import axios from "axios";
type Credentials = {
  email: string;
  password: string;
};
const mockResponse = {
  token: "JWT aqui posteirormente....",
  user: {
    user_id: "4d0b6485-08a2-4414-89b3-c97d2f5b33bd",
    name: "Fazenda",
    photo:
      "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas-1024x660.jpg",
    endereco: {
      logradouro: "Rua Fazenda",
      number: "444",
      city: "Fazenda City",
      country: "Angola",
      uf: "Uf Fazenda",
    },
  },
};
const API_URL = import.meta.env.VITE_API_URL || "https://httpbin.org/";
export async function login(credentials: Credentials): Promise<Session> {
  const response = await axios.post(`${API_URL}/post`, credentials);
  console.log(response);
  const { token, user } = mockResponse;
  // Salva no localStorage
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return { token, user };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
