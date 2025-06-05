export enum MyOrderStatus {
  FINALIZADO = "Finalizado",
  EM_ANDAMENTO = "Em andamento",
}

export type MyOrder = {
  id: string;
  title: string;
  status: MyOrderStatus;
};

export async function getMyOrders(): Promise<MyOrder[]> {
  if (import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true") {
    await new Promise((res) => setTimeout(res, 200));

    return [
      {
        id: "1",
        title: "Pedido #1 - Produtos orgânicos",
        status: MyOrderStatus.FINALIZADO,
      },
      {
        id: "2",
        title: "Pedido #2 - Frutas da estação",
        status: MyOrderStatus.EM_ANDAMENTO,
      },
      {
        id: "3",
        title: "Pedido #3 - Cesta de legumes",
        status: MyOrderStatus.FINALIZADO,
      },
    ];
  } else {
    const res = await fetch("/api/my-orders");
    if (!res.ok) throw new Error("Erro ao buscar pedidos");
    return await res.json();
  }
}
