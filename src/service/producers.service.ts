import { Producer } from "../../types/producer";
import api from "./axios.service";



export async function getProducers(): Promise<Producer[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        id: "1",
        businessName: "Fazenda esperança",
        image: "/mock/vilela.png",
        assessment: 5,
      },
      {
        id: "2",
        businessName: "Farm fresh - Organic",
        image: "/mock/fresh.png",
        assessment: 5,
      },
      {
        businessName: "Fazenda Filter",
        image: "/mock/filter.png",
        assessment: 5,
        id: "2",
      },
      {
        businessName: "Império das colunas",
        image: "/mock/imperio_col.png",
        assessment: 5,
        id: "4",
      },
      {
        businessName: "Chicken Farm",
        image: "/mock/chicken.png",
        assessment: 5,
        id: "5",
      },
      {
        businessName: "Fazenda Aviação",
        image: "/mock/aviacao.png",
        assessment: 5,
        id: "6",
      },
      {
        businessName: "Ouro da Serra",
        image: "/mock/ouro.png",
        assessment: 5,
        id: "7",
      },
      {
        businessName: "Farm fresh - Organic",
        image: "/mock/fresh.png",
        assessment: 5,
        id: "8",
      },

      {
        businessName: "Fazenda Filter",
        image: "/mock/filter.png",
        assessment: 5,
        id: "9",
      },
      {
        businessName: "Farm fresh - Organic",
        image: "/mock/fresh.png",
        assessment: 5,
        id: "10",
      },
      {
        businessName: "Império das colunas",
        image: "/mock/imperio_col.png",
        assessment: 5,
        id: "11",
      },
      // ... outros produtores
    ];
  } else {
    const res = await api.get("/v1/producer");
    return await res.data();
  }
}
