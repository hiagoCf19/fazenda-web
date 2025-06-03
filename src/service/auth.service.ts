import { RegisterPayload } from "../../types/register-user-payload.type";
import { Session } from "../../types/session.type";
import api from "./axios.service";

type Credentials = {
  email: string;
  password: string;
};
//MOCK

const clientSession = {
  /*  user: {
    id: 6,
    email: "fazenda@gmail.com",
    phone: "+244 912 345 678",
    nif: "986453675",
    role: "COMMON" as "COMMON",
    profile_type: "individual" as "individual",
    photo:
      "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas-1024x660.jpg",
    created_at: "2025-04-11T13:03:20.000Z",
    isActive: true,
    twoFactorEnabled: false,
    first_name: "Fazenda",
    last_name: "Client",
  }, */
  user: {
    id: 2,
    email: "producer@gmail.com",
    phone: "+244 912 345 678",
    nif: "264855782",
    role: "COMMON",
    profile_type: "producer",
    photo: "string",
    created_at: "2025-04-10T19:52:04.000Z",
    isActive: true,
    twoFactorEnabled: false,
    company_name: "Organic Farm",
    responsible_name: "Organic Farm",
    contact_phone: "+244 912 345 678",
    is_approved: true,
  },
  access_token: "eyJhbGciOiJIUzI...",
};
const adminSesison = {
  user: {
    id: 6,
    email: "admin@gmail.com",
    phone: "+244 912 345 678",
    nif: "986453675",
    role: "ADMIN" as "ADMIN",
    profile_type: "individual" as "individual",
    photo:
      "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas-1024x660.jpg",
    created_at: "2025-04-11T13:03:20.000Z",
    isActive: true,
    twoFactorEnabled: false,
    first_name: "Fazenda",
    last_name: "Admin",
  },
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlb...",
};
//---------------
// service/auth.service.ts
export async function login(credentials: Credentials): Promise<Session> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    console.log("a");
    localStorage.setItem("access_token", clientSession.access_token);
    localStorage.setItem("user", JSON.stringify(clientSession.user));
    if (credentials.email === "admin@gmail.com") {
      return {
        access_token: adminSesison.access_token,
        user: adminSesison.user,
      };
    } else {
      return {
        access_token: clientSession.access_token,
        user: clientSession.user,
      };
    }
  } else {
    console.log("b");
    const response = await api.post(`/auth/login`, credentials);
    const { access_token, user } = response.data;
    return { access_token, user };
  }
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
