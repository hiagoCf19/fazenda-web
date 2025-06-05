export type Product = {
  id: string;
  name: string;
  image: string;
  priceKg: string;
  priceT: string;
};

export async function getProducts(): Promise<Product[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));
    console.log("aaa");

    return [
      {
        id: "1",
        name: "Milho verde",
        image: "/mock/milho.png",
        priceKg: "Kz 150/Kg",
        priceT: "Kz 130.000/T",
      },
      {
        id: "2",
        name: "Lentilha",
        image: "/mock/lentilha.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      {
        id: "3",
        name: "Bacalhau",
        image: "/mock/bacalhau.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      {
        id: "4",
        name: "Noz pecan",
        image: "/mock/castanha.png",
        priceKg: "Kz 2.850/Kg",
        priceT: "Kz 2.800.000/T",
      },
      {
        id: "5",
        name: "Melancia",
        image: "/mock/melancia.png",
        priceKg: "Kz 500/Kg",
        priceT: "Kz 300.000/T",
      },
      {
        id: "6",
        name: "Cebola roxa",
        image: "/mock/cebola.png",
        priceKg: "Kz 96/Kg",
        priceT: "Kz 90.000/T",
      },
      {
        id: "7",
        name: "Bacalhau",
        image: "/mock/bacalhau.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      {
        id: "8",
        name: "Melancia",
        image: "/mock/melancia.png",
        priceKg: "Kz 500/Kg",
        priceT: "Kz 300.000/T",
      },
      {
        id: "9",
        name: "Melancia",
        image: "/mock/melancia.png",
        priceKg: "Kz 500/Kg",
        priceT: "Kz 300.000/T",
      },
      {
        id: "10",
        name: "Milho verde",
        image: "/mock/milho.png",
        priceKg: "Kz 150/Kg",
        priceT: "Kz 130.000/T",
      },
      {
        id: "11",
        name: "Lentilha",
        image: "/mock/lentilha.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      {
        id: "12",
        name: "Bacalhau",
        image: "/mock/bacalhau.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      {
        id: "13",
        name: "Cebola roxa",
        image: "/mock/cebola.png",
        priceKg: "Kz 96/Kg",
        priceT: "Kz 90.000/T",
      },
      {
        id: "14",
        name: "Cebola roxa",
        image: "/mock/cebola.png",
        priceKg: "Kz 96/Kg",
        priceT: "Kz 90.000/T",
      },
      {
        id: "15",
        name: "Lentilha",
        image: "/mock/lentilha.png",
        priceKg: "Kz 180/Kg",
        priceT: "Kz 140.000/T",
      },
      // ... adicione outros como quiser
    ];
  } else {
    const res = await fetch("/api/exemplo/products");
    if (!res.ok) throw new Error("Erro ao buscar produtos");
    return await res.json();
  }
  
}
