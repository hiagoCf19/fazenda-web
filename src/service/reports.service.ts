// src/services/reports.service.ts

export type ReportType =
  | "Pedidos"
  | "Clientes"
  | "Produtores"
  | "Entregadores"
  | "Produtos";
export type DataBy = "Semana" | "Mês" | "Ano";

export type HistoricalReport = {
  id: string;
  generatedOn: string; // Data de geração do relatório (DD/MM/AAAA)
  reportType: ReportType;
  dataBy: DataBy; // Dados por Semana, Mês, Ano
  startDate: string; // Data início do período do relatório (DD/MM/AAAA)
  endDate: string; // Data fim do período do relatório (DD/MM/AAAA)
};

export async function getHistoricalReports(): Promise<HistoricalReport[]> {
  // TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  // Esta variável de ambiente deve ser 'true' em dev para usar o mock, e 'false' em prod para chamar a API
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";

  if (isDevelopmentIntegration) {
    // Retorna dados mockados para o histórico de relatórios
    return [
      {
        id: "rep_1",
        generatedOn: "10/01/2025",
        reportType: "Pedidos",
        dataBy: "Mês",
        startDate: "01/12/2024",
        endDate: "10/01/2025",
      },
      {
        id: "rep_2",
        generatedOn: "05/12/2024",
        reportType: "Clientes",
        dataBy: "Ano",
        startDate: "01/01/2024",
        endDate: "01/12/2024",
      },
      {
        id: "rep_3",
        generatedOn: "30/11/2024",
        reportType: "Produtores",
        dataBy: "Semana",
        startDate: "01/01/2024",
        endDate: "01/12/2024",
      },
      {
        id: "rep_4",
        generatedOn: "01/11/2024",
        reportType: "Pedidos",
        dataBy: "Mês",
        startDate: "01/01/2024",
        endDate: "01/11/2024",
      },
      {
        id: "rep_5",
        generatedOn: "20/12/2024",
        reportType: "Clientes",
        dataBy: "Semana",
        startDate: "01/01/2024",
        endDate: "01/12/2024",
      },
    ];
  } else {
    // Em um cenário real, aqui você faria a chamada para sua API de backend
    const response = await fetch("/api/reports/history"); // Exemplo de endpoint
    if (!response.ok) throw new Error("Erro ao buscar histórico de relatórios");
    return await response.json();
  }
}
