// services/finalizados.service.ts
export enum Status {
  ENTREGUE = "Entregue",
  CANCELADO = "Cancelado",
}

export type Finalizado = {
  numero: string;
  cliente: string;
  valor: string;
  produtor: string;
  avaliacao: number;
  status: Status;
};

export async function getFinalizados(): Promise<Finalizado[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        numero: "#321",
        cliente: "Carlos Mendes da Silva Filho",
        valor: "Kz 1.847,50",
        produtor: "Fazenda Esperança",
        avaliacao: 0,
        status: Status.ENTREGUE,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 3.480,00",
        produtor: "Fazenda Filter",
        avaliacao: 0,
        status: Status.CANCELADO,
      },
      {
        numero: "#321",
        cliente: "Lucas Almeida Gomes",
        valor: "Kz 2.921,50",
        produtor: "Farm Fresh - Organic",
        avaliacao: 4,
        status: Status.ENTREGUE,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 850,00",
        produtor: "ChickenFarm",
        avaliacao: 3,
        status: Status.ENTREGUE,
      },
      {
        numero: "#321",
        cliente: "Roberto Lima",
        valor: "Kz 4.100,00",
        produtor: "Fazenda Aviação",
        avaliacao: 5,
        status: Status.ENTREGUE,
      },
      {
        numero: "#321",
        cliente: "Carlos Mendes da Silva Filho",
        valor: "Kz 1.847,50",
        produtor: "Ouro da Serra",
        avaliacao: 0,
        status: Status.CANCELADO,
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 3.480,00",
        produtor: "Farm Fresh - Organic",
        avaliacao: 5,
        status: Status.ENTREGUE,
      },
      {
        numero: "#325",
        cliente: "Lucas Almeida Gomes",
        valor: "Kz 2.921,50",
        produtor: "Fazenda Esperança",
        avaliacao: 4,
        status: Status.ENTREGUE,
      },
      {
        numero: "#323",
        cliente: "Fernando Oliveira de Souza",
        valor: "Kz 850,00",
        produtor: "Fazenda Filter",
        avaliacao: 0,
        status: Status.CANCELADO,
      },
      {
        numero: "#322",
        cliente: "Roberto Lima",
        valor: "Kz 4.100,00",
        produtor: "ChickenFarm",
        avaliacao: 5,
        status: Status.ENTREGUE,
      },
      // ...demais mocks
    ];
  } else {
    const res = await fetch("/api/exemplo/finalizados");
    if (!res.ok) throw new Error("Erro ao buscar finalizados");
    return await res.json();
  }
}
