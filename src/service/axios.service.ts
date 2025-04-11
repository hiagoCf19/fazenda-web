// src/services/api.ts
import axios from "axios";
import { ExceptionsEnum } from "../../enums/exceptions.enum";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:3000/backend-fazenda/v1",
});

// Interceptor para adicionar o token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para lidar com erros de token expirado
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401 && message === ExceptionsEnum.EXPIRED_TOKEN) {
      alert("Sua sessão expirou. Faça login novamente.");

      localStorage.removeItem("access_token");

      // Redirecionar manualmente:
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
