// src/service/analytical.service.ts

type ChartItem = { month: string; valor: number };

export type AnalyticalData = {
  totalSales: ChartItem[];
  invoicing: ChartItem[];
  profile_visits: ChartItem[];
};

// Lê a variável de ambiente VITE_USE_MOCK
export async function getAnalyticalData(): Promise<AnalyticalData> {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    // Simula tempo de resposta de rede

    return {
      totalSales: [
        { month: "January", valor: 110 },
        { month: "February", valor: 125 },
        { month: "March", valor: 60 },
        { month: "April", valor: 140 },
        { month: "May", valor: 300 },
        { month: "June", valor: 155 },
        { month: "July", valor: 170 },
        { month: "August", valor: 130 },
        { month: "September", valor: 186 },
      ],
      invoicing: [
        { month: "January", valor: 510 },
        { month: "February", valor: 425 },
        { month: "March", valor: 130 },
        { month: "April", valor: 40 },
        { month: "May", valor: 300 },
        { month: "June", valor: 255 },
        { month: "July", valor: 110 },
        { month: "August", valor: 330 },
        { month: "September", valor: 486 },
      ],
      profile_visits: [
        { month: "January", valor: 7 },
        { month: "February", valor: 41 },
        { month: "March", valor: 35 },
        { month: "April", valor: 62 },
        { month: "May", valor: 25 },
        { month: "June", valor: 55 },
        { month: "July", valor: 4 },
        { month: "August", valor: 48 },
        { month: "September", valor: 35 },
      ],
    };
  } else {
    // Quando a API estiver disponível
    const response = await fetch("/api/analytical");
    if (!response.ok) {
      throw new Error("Erro ao buscar dados analíticos");
    }

    return await response.json();
  }
}
