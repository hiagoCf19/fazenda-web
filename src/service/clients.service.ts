export type Client = {
  nome: string;
  contato: string;
  ultimoAcesso: string;
  cadastro: string;
  compras: number;
  receita: string;
};

export async function getClients(): Promise<Client[]> {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    return [
      {
        nome: "João Mbumba",
        contato: "+244 923 456 789",
        ultimoAcesso: "10/09/2024",
        cadastro: "02/09/2024",
        compras: 4,
        receita: "Kz 1.150,00",
      },
      {
        nome: "Ana Tavares",
        contato: "+244 921 987 654",
        ultimoAcesso: "12/09/2024",
        cadastro: "05/09/2024",
        compras: 7,
        receita: "Kz 2.500,00",
      },
      {
        nome: "Carlos Domingos",
        contato: "+244 922 654 321",
        ultimoAcesso: "11/09/2024",
        cadastro: "03/09/2024",
        compras: 3,
        receita: "Kz 900,00",
      },
      {
        nome: "Maria dos Santos",
        contato: "+244 929 333 222",
        ultimoAcesso: "14/09/2024",
        cadastro: "06/09/2024",
        compras: 5,
        receita: "Kz 1.800,00",
      },
      {
        nome: "Pedro Almeida",
        contato: "+244 923 112 334",
        ultimoAcesso: "09/09/2024",
        cadastro: "01/09/2024",
        compras: 2,
        receita: "Kz 750,00",
      },
      {
        nome: "Lúcia Fernandes",
        contato: "+244 921 777 888",
        ultimoAcesso: "13/09/2024",
        cadastro: "04/09/2024",
        compras: 6,
        receita: "Kz 2.200,00",
      },
      {
        nome: "Fernando Gomes",
        contato: "+244 922 555 666",
        ultimoAcesso: "08/09/2024",
        cadastro: "31/08/2024",
        compras: 1,
        receita: "Kz 300,00",
      },
      {
        nome: "Sara Oliveira",
        contato: "+244 929 444 555",
        ultimoAcesso: "15/09/2024",
        cadastro: "07/09/2024",
        compras: 8,
        receita: "Kz 3.000,00",
      },
      {
        nome: "Ricardo Xavier",
        contato: "+244 923 666 777",
        ultimoAcesso: "07/09/2024",
        cadastro: "30/08/2024",
        compras: 3,
        receita: "Kz 1.000,00",
      },
      {
        nome: "Beatriz Costa",
        contato: "+244 921 888 999",
        ultimoAcesso: "12/09/2024",
        cadastro: "05/09/2024",
        compras: 5,
        receita: "Kz 1.600,00",
      },
    ];
  } else {
    const res = await fetch("/api/clients");
    if (!res.ok) throw new Error("Erro ao buscar clientes");
    return await res.json();
  }
}
