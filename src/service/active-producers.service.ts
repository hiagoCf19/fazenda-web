export type ActiveProducer = {
  empresa: string;
  responsavel: string;
  contato: string;
  email: string;
  vendas: string;
  receita: string;
  avaliacao: number;
};

export async function getActiveProducers(): Promise<ActiveProducer[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      {
        empresa: "OrganicFarm",
        responsavel: "João Mbumba",
        contato: "+ 244 923 456 789",
        email: "organicfarm@gmail.com",
        vendas: "16 vendas",
        receita: "Kz 24.589,50",
        avaliacao: 4.3,
      },
      // Você pode repetir esse objeto ou criar mais com valores diferentes
    ];
  } else {
    const res = await fetch("/api/active-producers");
    if (!res.ok) throw new Error("Erro ao buscar produtores ativos");
    return await res.json();
  }
}
