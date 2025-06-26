// src/services/banners.service.ts

// Tipos de categoria para o banner
export type BannerCategory =
  | "Orgânico"
  | "Vegetais"
  | "Frutas"
  | "Laticínios"
  | "Carnes"
  | "Grãos"
  | "Outros";

// Tipos de estação para a disponibilidade
export type BannerSeason = "Verão" | "Inverno" | "Outono" | "Primavera";

// Interface para os dados de um banner
export type Banner = {
  id: string;
  imageUrl: string; // URL da imagem do banner
  title: string; // Título da campanha (ex: "Desconto primavera campo")
  subtitle: string; // Subtítulo do banner (opcional)
  redirectLink: string; // Link para onde o banner redireciona
  imageAltText: string; // Legenda da imagem / alt text
  category: BannerCategory; // Categoria principal do banner
  publishedAt: string; // Data de publicação (DD/MM/AAAA)
  isActive: boolean; // Se o banner está ativo ou inativo
  availableSeasons: BannerSeason[]; // Estações em que o banner está disponível
};

// --- Dados Mockados ---
// Simula um banco de dados em memória para os mocks
let mockBanners: Banner[] = [
  {
    id: "banner_1",
    imageUrl: "/banner1.png", // Ajuste o caminho se mover os mocks para 'public'
    title: "Desconto primavera campo",
    subtitle: "Sua compra pesa mais",
    redirectLink: "/produtos/ofertas-primavera",
    imageAltText: "20% OFF em produtos da primavera",
    category: "Orgânico",
    publishedAt: "12/03/2024",
    isActive: true,
    availableSeasons: ["Primavera"],
  },
  {
    id: "banner_2",
    imageUrl: "/banner2.png", // Ajuste o caminho
    title: "Sua compra pesa mais",
    subtitle: "Compre e ganhe mais",
    redirectLink: "/promocoes",
    imageAltText: "Banner promocional",
    category: "Vegetais",
    publishedAt: "10/02/2024",
    isActive: false, // Exemplo de banner inativo
    availableSeasons: ["Outono", "Inverno"],
  },
  {
    id: "banner_3",
    imageUrl: "/banner2.png", // Ajuste o caminho
    title: "Legumes frescos",
    subtitle: "Direto da fazenda",
    redirectLink: "/produtos/legumes",
    imageAltText: "Legumes variados",
    category: "Frutas", // Categoria incorreta para teste, ajustar conforme necessidade real
    publishedAt: "01/01/2024",
    isActive: true,
    availableSeasons: ["Verão"],
  },
  {
    id: "banner_4",
    imageUrl: "/banner3.png", // Ajuste o caminho
    title: "Tudo orgânico",
    subtitle: "Saúde e sabor",
    redirectLink: "/produtos/organicos",
    imageAltText: "Hortaliças orgânicas",
    category: "Orgânico",
    publishedAt: "15/04/2024",
    isActive: true,
    availableSeasons: ["Primavera", "Verão"],
  },
  {
    id: "banner_5",
    imageUrl: "/banner1.png", // Ajuste o caminho
    title: "Carnes nobres",
    subtitle: "Qualidade superior",
    redirectLink: "/produtos/carnes",
    imageAltText: "Cortes de carne",
    category: "Carnes",
    publishedAt: "20/05/2024",
    isActive: true,
    availableSeasons: ["Inverno"],
  },
];

// --- Funções do Serviço ---

// Simula a busca de todos os banners
export async function getBanners(): Promise<Banner[]> {
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula um atraso de rede
      if (isDevelopmentIntegration) {
        resolve([...mockBanners]); // Retorna uma cópia para evitar modificações diretas
      } else {
        // TODO: Implementar chamada real à API
        console.warn("Implementar fetch real para /api/banners");
        resolve([...mockBanners]); // Retorna vazio em produção se não houver API
      }
    }, 500); // 500ms de atraso
  });
}

// Simula a adição de um novo banner
export async function addBanner(
  newBannerData: Omit<Banner, "id" | "publishedAt">
): Promise<Banner> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBanner: Banner = {
        id: `banner_${Date.now()}_${Math.random()
          .toString(36)
          .substring(2, 9)}`, // ID único
        publishedAt: format(new Date(), "dd/MM/yyyy"), // Data de publicação atual
        ...newBannerData,
      };
      mockBanners.push(newBanner);
      resolve(newBanner);
    }, 300);
  });
}

// Simula a atualização do status 'isActive' de um banner
export async function updateBannerStatus(
  bannerId: string,
  isActive: boolean
): Promise<Banner> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bannerIndex = mockBanners.findIndex((b) => b.id === bannerId);
      if (bannerIndex > -1) {
        mockBanners[bannerIndex] = { ...mockBanners[bannerIndex], isActive };
        resolve(mockBanners[bannerIndex]);
      } else {
        reject(new Error("Banner não encontrado"));
      }
    }, 200);
  });
}

// Simula a exclusão de um banner
export async function deleteBanner(bannerId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const initialLength = mockBanners.length;
      mockBanners = mockBanners.filter((b) => b.id !== bannerId);
      if (mockBanners.length < initialLength) {
        resolve(bannerId); // Retorna o ID do banner excluído
      } else {
        reject(new Error("Banner não encontrado ou já excluído"));
      }
    }, 200);
  });
}

// Helper para formatar data (usado para publishedAt)
import { format } from "date-fns";
