export type ProductData = {
  name: string;
  image: string;
  quantidade: number;
};

export async function getBestSellingProducts(): Promise<ProductData[]> {
  // TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    return [
      {
        name: "Cenoura",
        image: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
        quantidade: 90,
      },
      {
        name: "Alface",
        image: "https://cdn-icons-png.flaticon.com/512/590/590682.png",
        quantidade: 100,
      },
      {
        name: "Beterraba",
        image: "https://cdn-icons-png.flaticon.com/512/590/590686.png",
        quantidade: 80,
      },
      {
        name: "Milho",
        image: "https://cdn-icons-png.flaticon.com/512/590/590688.png",
        quantidade: 70,
      },
      {
        name: "Couve",
        image: "https://cdn-icons-png.flaticon.com/512/590/590683.png",
        quantidade: 50,
      },
    ];
  } else {
    const response = await fetch("/api/best-selling-products");
    if (!response.ok) throw new Error("Erro ao buscar produtos mais vendidos");
    return await response.json();
  }
}
