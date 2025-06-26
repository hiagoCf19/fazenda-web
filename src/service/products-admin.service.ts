/* // src/services/products.service.ts

import { format } from "date-fns";

// --- Tipos de Dados ---

export type Category = {
  id: string;
  name: string;
  status: "Ativo" | "Inativo"; // Conforme o Figma
  publishedAt: string; // Data de publicação
};

export type ProductItem = {
  id: string;
  type: string; // Tipo do produto (ex: "Milho") - parece ser diferente do nome
  name: string; // Nome do produto (ex: "Milho verde")
  category: string; // Nome da categoria à qual pertence
  stock: number; // Quantidade em estoque
  units: string; // Unidades (ex: "Kg", "L", "un") - no figma "unidades" está vázio
  price: number; // Preço
  rules?: string; // Regras de Venda
  description?: string; // Descrição
  imageUrl: string; // Imagem do item
  // Adicionado para fins de mock/UI, não está no Figma da tabela, mas ajuda no mock
  publishedAt: string;
};

// --- Dados Mockados ---

let mockCategories: Category[] = [
  {
    id: "cat_1",
    name: "Orgânicos",
    status: "Ativo",
    publishedAt: "10/01/2024",
  },
  { id: "cat_2", name: "Grãos", status: "Ativo", publishedAt: "05/02/2024" },
  { id: "cat_3", name: "Carnes", status: "Inativo", publishedAt: "15/03/2024" },
  { id: "cat_4", name: "Vegetais", status: "Ativo", publishedAt: "20/04/2024" },
  {
    id: "cat_5",
    name: "Laticínios",
    status: "Ativo",
    publishedAt: "01/05/2024",
  },
];

let mockProductItems: ProductItem[] = [
  {
    id: "item_1",
    type: "Milho", // "Tipo" no Figma
    name: "Milho verde", // "Produto" no Figma
    category: "Orgânicos",
    stock: 1200,
    units: "Kg",
    price: 150.0,
    rules: "Pedido mínimo 50Kg.",
    description: "Milho verde fresco e cultivado organicamente.",
    imageUrl: "/mock/milho.png", // Ajuste o caminho se necessário
    publishedAt: "10/01/2024",
  },
  {
    id: "item_2",
    type: "Lentilha",
    name: "Lentilha marrom",
    category: "Grãos",
    stock: 500,
    units: "Kg",
    price: 180.0,
    rules: "Disponível para entrega em 2 dias úteis.",
    description: "Lentilha de alta qualidade para diversas receitas.",
    imageUrl: "/mock/lentilha.png",
    publishedAt: "15/01/2024",
  },
  {
    id: "item_3",
    type: "Bacalhau",
    name: "Bacalhau do Porto",
    category: "Carnes",
    stock: 80,
    units: "Kg",
    price: 2500.0,
    rules: "Produto congelado. Retirada apenas na loja.",
    description: "Bacalhau de excelente procedência.",
    imageUrl: "/mock/bacalhau.png",
    publishedAt: "20/01/2024",
  },
  {
    id: "item_4",
    type: "Cebola",
    name: "Cebola roxa",
    category: "Vegetais",
    stock: 300,
    units: "Kg",
    price: 96.0,
    rules: "Venda por atacado apenas.",
    description: "Cebolas roxas frescas.",
    imageUrl: "/mock/cebola.png",
    publishedAt: "25/01/2024",
  },
];

// --- Funções do Serviço ---

// CATEGORIAS
export async function getCategories(): Promise<Category[]> {
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isDevelopmentIntegration) {
        resolve([...mockCategories]);
      } else {
        console.warn("Implementar fetch real para /api/categories");
        resolve([]);
      }
    }, 300);
  });
}

export async function addCategory(newName: string): Promise<Category> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCategory: Category = {
        id: `cat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: newName,
        status: "Ativo", // Nova categoria inicia ativa
        publishedAt: format(new Date(), "dd/MM/yyyy"),
      };
      mockCategories.push(newCategory);
      resolve(newCategory);
    }, 200);
  });
}

export async function updateCategoryStatus(
  categoryId: string,
  status: "Ativo" | "Inativo"
): Promise<Category> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const categoryIndex = mockCategories.findIndex(
        (c) => c.id === categoryId
      );
      if (categoryIndex > -1) {
        mockCategories[categoryIndex] = {
          ...mockCategories[categoryIndex],
          status,
        };
        resolve(mockCategories[categoryIndex]);
      } else {
        reject(new Error("Categoria não encontrada"));
      }
    }, 200);
  });
}

// ITENS DE PRODUTO
export async function getProductItems(): Promise<ProductItem[]> {
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isDevelopmentIntegration) {
        resolve([...mockProductItems]);
      } else {
        console.warn("Implementar fetch real para /api/product-items");
        resolve([]);
      }
    }, 400);
  });
}

export async function addProductItem(
  newItemData: Omit<ProductItem, "id" | "publishedAt">
): Promise<ProductItem> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItem: ProductItem = {
        id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        publishedAt: format(new Date(), "dd/MM/yyyy"),
        ...newItemData,
      };
      mockProductItems.push(newItem);
      resolve(newItem);
    }, 300);
  });
}
 */
