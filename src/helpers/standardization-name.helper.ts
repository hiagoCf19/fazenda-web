import { User } from "../../types/session.type";

export function StandardizationName(user: User): string {
  if (user.profile_type === "business" || user.profile_type === "individual") {
    return `${user?.first_name} ${user.last_name}`;
  } else {
    return `${user?.company_name}`;
  }
}
