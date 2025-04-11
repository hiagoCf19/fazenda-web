import { ProfileTypeEnum } from "../src/web/auth/register.page";

export type RegisterPayload = {
  email: string;
  password: string;
  phone: string;
  nif: string;
  profile_type: ProfileTypeEnum;
  first_name?: string;
  last_name?: string;
  photo?: string;
  designation?: string;
  area_of_activity?: string;
  representative_name?: string;
};
