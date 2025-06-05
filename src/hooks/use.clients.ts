import { useQuery } from "@tanstack/react-query";
import { getClients } from "../service/clients.service";

export const useClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
};
