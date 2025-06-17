import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../service/my-orders.service";

export const useMyOrders = () => {
  return useQuery({
    queryKey: ["my-orders"],
    queryFn: getMyOrders,
  });
};
