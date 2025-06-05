export enum Status {
  PENDENTE = "Pendente",
  PROCESSANDO = "Processando",
  ENTREGA_SOLICITADA = "Entrega solicitada",
  ENVIADO = "Enviado",
}

export type InProgressOrder = {
  numero: string;
  cliente: string;
  valor: string;
  produtor: string;
  status: Status;
};

export async function getInProgressOrders(): Promise<InProgressOrder[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        numero: "#321",
        cliente: "Carlos Mendes da Silva Filho",
        valor: "Kz 1.847,50",
        produtor: "Fazenda Esperança",
        status: Status.PENDENTE,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 3.480,00",
        produtor: "Fazenda Filter",
        status: Status.PROCESSANDO,
      },
      {
        numero: "#321",
        cliente: "Lucas Almeida Gomes",
        valor: "Kz 2.921,50",
        produtor: "Farm Fresh - Organic",
        status: Status.PROCESSANDO,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 850,00",
        produtor: "ChickenFarm",
        status: Status.PROCESSANDO,
      },
      {
        numero: "#321",
        cliente: "Roberto Lima",
        valor: "Kz 4.100,00",
        produtor: "Fazenda Aviação",
        status: Status.PROCESSANDO,
      },
      {
        numero: "#321",
        cliente: "Carlos Mendes da Silva Filho",
        valor: "Kz 1.847,50",
        produtor: "Ouro da Serra",
        status: Status.ENTREGA_SOLICITADA,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 3.480,00",
        produtor: "Farm Fresh - Organic",
        status: Status.ENTREGA_SOLICITADA,
      },
      {
        numero: "#321",
        cliente: "Lucas Almeida Gomes",
        valor: "Kz 2.921,50",
        produtor: "Fazenda Esperança",
        status: Status.ENVIADO,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 850,00",
        produtor: "Fazenda Filter",
        status: Status.ENVIADO,
      },
      {
        numero: "#321",
        cliente: "Roberto Lima",
        valor: "Kz 4.100,00",
        produtor: "ChickenFarm",
        status: Status.ENVIADO,
      },
    ];
  } else {
    const res = await fetch("/api/in-progress-orders");
    if (!res.ok) throw new Error("Erro ao buscar pedidos em andamento");
    return await res.json();
  }
}
