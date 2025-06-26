import { useQuery } from "@tanstack/react-query";
import { getHistoricalReports } from "../service/reports.service";

export function useReportsHistory() {
  return useQuery({
    queryKey: ["reportsHistory"], // Chave única para o cache
    queryFn: getHistoricalReports, // Função que busca os dados
  });
}
