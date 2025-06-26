import { useQuery } from "@tanstack/react-query";
import { getWalletTransactions } from "../service/wallet.service";

export function useWalletTransactions() {
  return useQuery({
    queryKey: ["walletTransactions"], // Chave única para o cache do TanStack Query
    queryFn: getWalletTransactions, // Função que busca os dados
  });
}
