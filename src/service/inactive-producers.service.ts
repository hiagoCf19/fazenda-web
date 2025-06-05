export enum Status {
  INATIVO = "Inativo",
  RECUSADO = "Recusado",
}

export type InactiveProducer = {
  empresa: string;
  responsavel: string;
  telefone: string;
  email: string;
  status: Status;
};

export async function getInactiveProducers(): Promise<InactiveProducer[]> {
  
    if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
      await new Promise((res) => setTimeout(res, 200));

      return [
        {
          empresa: "Organic Farm",
          responsavel: "João Mbumba",
          telefone: "+ 244 923 457 789",
          email: "organicfarm@mail.com",
          status: Status.RECUSADO,
        },
        {
          empresa: "#Fazenda Esperança",
          responsavel: "Rodrigo Silva",
          telefone: "+ 244 923 457 789",
          email: "esperanca.fazenda@mail.com",
          status: Status.INATIVO,
        },
        {
          empresa: "Chicken Farm",
          responsavel: "Angela Gomes",
          telefone: "+ 244 923 457 789",
          email: "chickenfarm@mail.com",
          status: Status.INATIVO,
        },
        {
          empresa: "Fazenda luz",
          responsavel: "Luiz Renato",
          telefone: "+ 244 923 457 789",
          email: "fazenda_luz@mail.com",
          status: Status.INATIVO,
        },
        {
          empresa: "Organic Farm",
          responsavel: "João Mbumba",
          telefone: "+ 244 923 457 789",
          email: "organicfarm@mail.com",
          status: Status.RECUSADO,
        },
        {
          empresa: "#Fazenda Esperança",
          responsavel: "Rodrigo Silva",
          telefone: "+ 244 923 457 789",
          email: "esperanca.fazenda@mail.com",
          status: Status.INATIVO,
        },
        {
          empresa: "Chicken Farm",
          responsavel: "Angela Gomes",
          telefone: "+ 244 923 457 789",
          email: "chickenfarm@mail.com",
          status: Status.INATIVO,
        },
        {
          empresa: "Fazenda luz",
          responsavel: "Luiz Renato",
          telefone: "+ 244 923 457 789",
          email: "fazenda_luz@mail.com",
          status: Status.INATIVO,
        },
      ];
    } else {
      const res = await fetch("/api/inactive-producers");
      if (!res.ok) throw new Error("Erro ao buscar produtores inativos");
      return await res.json();
    }
}
