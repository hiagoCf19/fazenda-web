// src/service/chart-orders.service.ts

import api from "./axios.service";

type ChartOrderItem = {
  day: string;
  pedidos: number;
};

export async function getChartOrders(): Promise<ChartOrderItem[]> {
  //TODO:import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    return [
      { day: "Segunda", pedidos: 3 },
      { day: "Terça", pedidos: 4 },
      { day: "Quarta", pedidos: 8 },
      { day: "Quinta", pedidos: 5 },
      { day: "Sexta", pedidos: 6 },
      { day: "Sábado", pedidos: 10 },
      { day: "Domingo", pedidos: 9 },
    ];
  } else {
    const res = await api.get("/order/graphic/orders-day");
    return res.data;
  }
}
