import { useQuery } from "@tanstack/react-query";
import { getDeliveries } from "../service/pendente.service";
import { getFinalizados } from "../service/finalizados.service";
import { getInProgressOrders } from "../service/em-andamento.service";

export function useDeliveries() {
  return useQuery({
    queryKey: ["deliveries"],
    queryFn: getDeliveries,
  });
}

export function useFinalizados() {
  return useQuery({
    queryKey: ["finalizados"],
    queryFn: getFinalizados,
  });
}

export function useInProgressOrders() {
  return useQuery({
    queryKey: ["in-progress-orders"],
    queryFn: getInProgressOrders,
  });
}