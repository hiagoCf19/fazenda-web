import { useQuery } from "@tanstack/react-query";
import { getAnalyticalData } from "../service/analytical.service";

export function useAnalyticalData() {
  return useQuery({
    queryKey: ["analyticalData"],
    queryFn: getAnalyticalData,
  });
}
