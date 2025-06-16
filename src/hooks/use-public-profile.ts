import { useQuery } from "@tanstack/react-query";
import { getPublicProfile } from "../service/public-profile.service";

export function usePublicProfile() {
  return useQuery({
    queryKey: ["public-profile"],
    queryFn: getPublicProfile,
  });
}
