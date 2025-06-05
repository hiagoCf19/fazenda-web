export type Delivery = {
  numero: string;
  cliente: string;
  realizadoEm: string;
  entrega: string;
  valor: string;
};

export async function getDeliveries(): Promise<Delivery[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        numero: "#321",
        cliente: "Carlos Mendes da Silva Filho",
        realizadoEm: "13:45 10/08/2024",
        entrega: "Padrão",
        valor: "Kz 1.947,50",
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        realizadoEm: "10:30 10/08/2024",
        entrega: "Padrão",
        valor: "Kz 3.480,00",
      },
      {
        numero: "#321",
        cliente: "Lucas Almeida Gomes",
        realizadoEm: "09:44 10/08/2024",
        entrega: "Express",
        valor: "Kz 2.921,50",
      },
      {
        numero: "#321",
        cliente: "Fernando Oliveira de Souza",
        realizadoEm: "08:27 10/08/2024",
        entrega: "Levantar na loja",
        valor: "Kz 850,00",
      },
      {
        numero: "#321",
        cliente: "Roberto Lima",
        realizadoEm: "07:58 10/08/2024",
        entrega: "Padrão",
        valor: "Kz 4.100,00",
      },
    ];
  } else {
    const res = await fetch("/api/entregas/pendentes");
    if (!res.ok) throw new Error("Erro ao buscar entregas pendentes");
    return await res.json();
  }
}
