export type Category = {
  category: string;
  image: string;
};


export async function getCategories(): Promise<Category[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
      { category: "Vegetais", image: "/carrot.png" },
      { category: "Frutas", image: "/apple.png" },
      { category: "Carnes", image: "/meat.png" },
      { category: "Peixes", image: "/fish.png" },
    ];
  } else {
    // Quando a API estiver pronta:
    const res = await fetch("/api/categories");
    if (!res.ok) throw new Error("Erro ao buscar categorias");
    return await res.json();
  }

}
