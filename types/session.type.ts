export type User = {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  email: string;
  phone: string;
  nif: string;
  profile_type: "individual" | "business" | "producer";
  photo: string;
  created_at: string; // ISO 8601 date string
  isActive: boolean;
  twoFactorEnabled: boolean;
  recoveryEmail?: string | null;
  recoveryPhone?: string | null;
  isSubscribed?: boolean;
  role: "ADMIN" | "COMMON";
};
export type Session = {
  access_token: string;
  user: User;
};
