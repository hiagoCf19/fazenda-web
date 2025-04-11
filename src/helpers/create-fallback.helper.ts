import { User } from "../../types/session.type";

export function generateFallback(user: User): string {
  if (user.profile_type === "business" || user.profile_type === "individual") {
    const firstInitial = user.first_name?.trim().charAt(0).toUpperCase() ?? "";
    const lastWords = user.last_name?.trim().split(" ") ?? [];
    const lastInitial =
      lastWords.length > 0
        ? lastWords[lastWords.length - 1].charAt(0).toUpperCase()
        : "";

    return `${firstInitial}${lastInitial}`;
  } else {
    const companyName = user.company_name?.trim() ?? "";
    const companyInitials = companyName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    return companyInitials;
  }
}
