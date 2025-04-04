export type Order = {
  id: number;
  status: string;
  address_delivery: string;
  total_value: string;
  latitude: number | null;
  longetude: number | null;
  tipoPedido: string;
  peso: number | null;
  expectedDeliveryTime: string | null; // pode ser string ou Date dependendo do uso
  deliveredAt: string; // ou Date se for parseado
  createdAt: string; // ou Date se for parseado
  items: any[]; // pode tipar melhor se souber o formato dos itens
};
