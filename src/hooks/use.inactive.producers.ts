import { useQuery } from "@tanstack/react-query";
import { getInactiveProducers } from "../service/inactive-producers.service";
import { getActiveProducers } from "../service/active-producers.service";

export function useInactiveProducers() {
  return useQuery({
    queryKey: ["inactive-producers"],
    queryFn: getInactiveProducers,
  });
}

export function useActiveProducers() {
  return useQuery({
    queryKey: ["api/active-producers"],
    queryFn: getActiveProducers,
  });
}


