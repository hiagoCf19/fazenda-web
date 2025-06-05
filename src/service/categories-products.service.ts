// services/categorias.service.ts

export enum CategorieStatus {
  ATIVO = "Ativo",
  INATIVO = "Inativo",
}

export interface Categorie {
  titulo: string;
  quantidade: number;
  created_at: string;
  status: CategorieStatus;
}

export const getCategories = async (): Promise<Categorie[]> => {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    return [
      {
        titulo: "Vegetais",
        quantidade: 24,
        created_at: "10/09/2024",
        status: CategorieStatus.ATIVO,
      },
      {
        titulo: "Frutas",
        quantidade: 22,
        created_at: "10/09/2024",
        status: CategorieStatus.ATIVO,
      },
      {
        titulo: "Carnes",
        quantidade: 14,
        created_at: "10/09/2024",
        status: CategorieStatus.ATIVO,
      },
      {
        titulo: "Peixes",
        quantidade: 6,
        created_at: "10/09/2024",
        status: CategorieStatus.INATIVO,
      },
      {
        titulo: "Grãos",
        quantidade: 12,
        created_at: "10/09/2024",
        status: CategorieStatus.ATIVO,
      },
    ];
  } else {
    // Quando a API estiver pronta:
    const res = await fetch("/api/exemplo/categorias");
    if (!res.ok) throw new Error("Erro ao buscar categorias");
    return await res.json();
  }
};
