// src/hooks/useChartOrders.ts

import { useQuery } from "@tanstack/react-query";
import { getChartOrders } from "../service/chart-orders.service";

export function useChartOrders() {
  return useQuery({
    queryKey: ["chart-orders"],
    queryFn: getChartOrders,
  });
}
