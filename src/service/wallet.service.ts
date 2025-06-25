// src/application.producer/business/wallet/wallet.service.ts (ou o caminho adequado)

export type TransactionType = "Recebido" | "Transferência";
export type AccountOrigin = "Carteira Fazenda Online" | string; // Para permitir outros bancos/contas

export type Transaction = {
  id: string; // Adicionado ID para o key de renderização do React
  date: string; // Data no formato "DD/MM/AA"
  type: TransactionType;
  value: number; // Valor numérico
  currency: string; // Moeda, ex: "Kz"
  accountOrigin: AccountOrigin;
};

export async function getWalletTransactions(): Promise<Transaction[]> {
  // TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  // Apenas para simular o comportamento de ambiente, como no seu products.service
  // Em produção, a variável VITE_INTEGRATION_IN_PROGRESS seria 'false'
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"; // Ou apenas 'true' para forçar o mock

  if (isDevelopmentIntegration) {
    // Retorna os dados mockados
    return [
      {
        id: "trans_1",
        date: "01/02/25",
        type: "Recebido",
        value: 1450.89,
        currency: "Kz",
        accountOrigin: "Carteira Fazenda Online",
      },
      {
        id: "trans_2",
        date: "01/02/25",
        type: "Transferência",
        value: 1450.0,
        currency: "Kz",
        accountOrigin: "**** **** **** 1234",
      },
      {
        id: "trans_3",
        date: "01/02/25",
        type: "Recebido",
        value: 273.99,
        currency: "Kz",
        accountOrigin: "Carteira Fazenda Online",
      },
      {
        id: "trans_4",
        date: "01/02/25",
        type: "Recebido",
        value: 358.5,
        currency: "Kz",
        accountOrigin: "Carteira Fazenda Online",
      },
      {
        id: "trans_5",
        date: "01/02/25",
        type: "Recebido",
        value: 549.89,
        currency: "Kz",
        accountOrigin: "Carteira Fazenda Online",
      },
      {
        id: "trans_6",
        date: "01/02/25",
        type: "Transferência",
        value: 2100.0,
        currency: "Kz",
        accountOrigin: "**** **** **** 1234",
      },
      {
        id: "trans_7",
        date: "01/02/25",
        type: "Recebido",
        value: 651.5,
        currency: "Kz",
        accountOrigin: "Carteira Fazenda Online",
      },
      {
        id: "trans_8",
        date: "01/02/25",
        type: "Transferência",
        value: 1500.0,
        currency: "Kz",
        accountOrigin: "**** **** **** 1234",
      },
      // Adicione mais transações se quiser
    ];
  } else {
    // Em um cenário real, aqui você faria a chamada para sua API de backend
    const response = await fetch("/api/wallet/transactions"); // Exemplo de endpoint
    if (!response.ok) throw new Error("Erro ao buscar histórico da carteira");
    return await response.json();
  }
}
