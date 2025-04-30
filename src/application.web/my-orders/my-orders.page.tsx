import { useState } from "react";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { useSession } from "../context/session.context";
import { MyOrdersList } from "./_components/my-orders-list.component";
import { Order } from "../../../types/order.type";

import { MyOrderDetails } from "./_components/my-order-details.component";
import { OrderStatusEnum } from "../../../enums/order-status.enum";
import BottomNav from "../_components/bottom-navigator-mobile.component";
import NotFound from "../_components/not-found.component";
const pendingOrders = [
  {
    id: 7,
    status: OrderStatusEnum.PENDING,
    address_delivery: "Travessa Fictícia, 789",
    total_value: "100",
    latitude: null,
    longetude: null,
    tipoPedido: "",
    peso: null,
    expectedDeliveryTime: null,
    deliveredAt: "2025-03-28T14:58:02.000Z",
    createdAt: "2025-01-22T11:00:00.000Z",
    items: [
      {
        name: "Milho verde",
        price: "300,00",
        quantity: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/5add/0f9f/0fa1fa125f48f0fc7921899cb0d6c8dd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrlsnBFV1oAYACcXz8RRs6ZVslGDB2gkpFN-lYA~0~oueGDKMXhQd36iOTDfb2TuHckytNlsTs05EZsdjXcIvMaisWDnbEZeSyqxNJTA5k5n1zTKqK9PFTVI9sOldazbDaUnglSd1vuHZMR09SYghUT3SAPvxFKwHBrmlUuiQjuIzrl3~A8lQECvOBiTHR9j9rO5m6H64LZSvF-0vuTJwomiNcbSGKIIIs6IrozJk~o54KTjQgVDtwsA4RXYztV3qGhPUIT~UEkML1OKSv644JvznR6LbWqQlFMBof-Ip1bquRFfzpVC-e7Ipz6II2ZBZUZ893xWgGXle0FiXkvMJA__",
        unit: "kg",
        pricePerUnit: "150/Kg",
      },
      {
        name: "Tomate",
        price: "180,00",
        quantity: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdxrMkx9H2RGH4CnQPQOBpNJY3FCNUj~qJHn5bcT3osXXvYYQ4KWMviYVGobbwGlThgF9DiN8BC0orJWPGuE519aYGsmIUvJpa75nEiyECYaeaCppVLSSTcBQ3yphLNuZfwub9Hv9nvctl934J5gs6neEiEHCLC2QDSK9~IDBmVKH5tY34pjdO9s9SztYJoMrvN8Ft9FElP~rV2cvXq6H~QZ0tnVxbhI1-GtY7IFU3xaQzE2y36E2t5UuDHwNmg8tTZfLIogXLxm2IF3CdVSsLZzHZjZEIMQJO-IACujvHSGmodQg59yBU-hQWho44r0V1ezcIzI7f8S31MwOt8dHg__",
        unit: "kg",
        pricePerUnit: "180/Kg",
      },
    ],
  },
];

const deliveredOrders = [
  {
    id: 1,
    status: OrderStatusEnum.DELIVERED,
    address_delivery: "Rua Exemplo, 123",
    total_value: "100",
    latitude: null,
    longetude: null,
    tipoPedido: "",
    peso: null,
    expectedDeliveryTime: null,
    deliveredAt: "2025-03-28T14:57:50.000Z",
    createdAt: "2025-02-20T13:00:00.000Z",
    items: [
      {
        name: "Milho verde",
        price: "300,00",
        quantity: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/5add/0f9f/0fa1fa125f48f0fc7921899cb0d6c8dd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrlsnBFV1oAYACcXz8RRs6ZVslGDB2gkpFN-lYA~0~oueGDKMXhQd36iOTDfb2TuHckytNlsTs05EZsdjXcIvMaisWDnbEZeSyqxNJTA5k5n1zTKqK9PFTVI9sOldazbDaUnglSd1vuHZMR09SYghUT3SAPvxFKwHBrmlUuiQjuIzrl3~A8lQECvOBiTHR9j9rO5m6H64LZSvF-0vuTJwomiNcbSGKIIIs6IrozJk~o54KTjQgVDtwsA4RXYztV3qGhPUIT~UEkML1OKSv644JvznR6LbWqQlFMBof-Ip1bquRFfzpVC-e7Ipz6II2ZBZUZ893xWgGXle0FiXkvMJA__",
        unit: "kg",
        pricePerUnit: "150/Kg",
      },
      {
        name: "Tomate",
        price: "180,00",
        quantity: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdxrMkx9H2RGH4CnQPQOBpNJY3FCNUj~qJHn5bcT3osXXvYYQ4KWMviYVGobbwGlThgF9DiN8BC0orJWPGuE519aYGsmIUvJpa75nEiyECYaeaCppVLSSTcBQ3yphLNuZfwub9Hv9nvctl934J5gs6neEiEHCLC2QDSK9~IDBmVKH5tY34pjdO9s9SztYJoMrvN8Ft9FElP~rV2cvXq6H~QZ0tnVxbhI1-GtY7IFU3xaQzE2y36E2t5UuDHwNmg8tTZfLIogXLxm2IF3CdVSsLZzHZjZEIMQJO-IACujvHSGmodQg59yBU-hQWho44r0V1ezcIzI7f8S31MwOt8dHg__",
        unit: "kg",
        pricePerUnit: "180/Kg",
      },
    ],
  },
  {
    id: 2,
    status: OrderStatusEnum.DELIVERED,
    address_delivery: "Avenida Teste, 456",
    total_value: "150",
    latitude: null,
    longetude: null,
    tipoPedido: "",
    peso: null,
    expectedDeliveryTime: null,
    deliveredAt: "2025-03-28T14:58:19.000Z",
    createdAt: "2025-02-21T17:00:00.000Z",
    items: [
      {
        name: "Milho verde",
        price: "300,00",
        quantity: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/5add/0f9f/0fa1fa125f48f0fc7921899cb0d6c8dd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrlsnBFV1oAYACcXz8RRs6ZVslGDB2gkpFN-lYA~0~oueGDKMXhQd36iOTDfb2TuHckytNlsTs05EZsdjXcIvMaisWDnbEZeSyqxNJTA5k5n1zTKqK9PFTVI9sOldazbDaUnglSd1vuHZMR09SYghUT3SAPvxFKwHBrmlUuiQjuIzrl3~A8lQECvOBiTHR9j9rO5m6H64LZSvF-0vuTJwomiNcbSGKIIIs6IrozJk~o54KTjQgVDtwsA4RXYztV3qGhPUIT~UEkML1OKSv644JvznR6LbWqQlFMBof-Ip1bquRFfzpVC-e7Ipz6II2ZBZUZ893xWgGXle0FiXkvMJA__",
        unit: "kg",
        pricePerUnit: "150/Kg",
      },
      {
        name: "Tomate",
        price: "180,00",
        quantity: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdxrMkx9H2RGH4CnQPQOBpNJY3FCNUj~qJHn5bcT3osXXvYYQ4KWMviYVGobbwGlThgF9DiN8BC0orJWPGuE519aYGsmIUvJpa75nEiyECYaeaCppVLSSTcBQ3yphLNuZfwub9Hv9nvctl934J5gs6neEiEHCLC2QDSK9~IDBmVKH5tY34pjdO9s9SztYJoMrvN8Ft9FElP~rV2cvXq6H~QZ0tnVxbhI1-GtY7IFU3xaQzE2y36E2t5UuDHwNmg8tTZfLIogXLxm2IF3CdVSsLZzHZjZEIMQJO-IACujvHSGmodQg59yBU-hQWho44r0V1ezcIzI7f8S31MwOt8dHg__",
        unit: "kg",
        pricePerUnit: "180/Kg",
      },
    ],
  },
  {
    id: 3,
    status: OrderStatusEnum.DELIVERED,
    address_delivery: "Travessa Fictícia, 789",
    total_value: "200",
    latitude: null,
    longetude: null,
    tipoPedido: "",
    peso: null,
    expectedDeliveryTime: null,
    deliveredAt: "2025-03-28T14:58:11.000Z",
    createdAt: "2025-02-22T11:00:00.000Z",
    items: [
      {
        name: "Milho verde",
        price: "300,00",
        quantity: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/5add/0f9f/0fa1fa125f48f0fc7921899cb0d6c8dd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrlsnBFV1oAYACcXz8RRs6ZVslGDB2gkpFN-lYA~0~oueGDKMXhQd36iOTDfb2TuHckytNlsTs05EZsdjXcIvMaisWDnbEZeSyqxNJTA5k5n1zTKqK9PFTVI9sOldazbDaUnglSd1vuHZMR09SYghUT3SAPvxFKwHBrmlUuiQjuIzrl3~A8lQECvOBiTHR9j9rO5m6H64LZSvF-0vuTJwomiNcbSGKIIIs6IrozJk~o54KTjQgVDtwsA4RXYztV3qGhPUIT~UEkML1OKSv644JvznR6LbWqQlFMBof-Ip1bquRFfzpVC-e7Ipz6II2ZBZUZ893xWgGXle0FiXkvMJA__",
        unit: "kg",
        pricePerUnit: "150/Kg",
      },
      {
        name: "Tomate",
        price: "180,00",
        quantity: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdxrMkx9H2RGH4CnQPQOBpNJY3FCNUj~qJHn5bcT3osXXvYYQ4KWMviYVGobbwGlThgF9DiN8BC0orJWPGuE519aYGsmIUvJpa75nEiyECYaeaCppVLSSTcBQ3yphLNuZfwub9Hv9nvctl934J5gs6neEiEHCLC2QDSK9~IDBmVKH5tY34pjdO9s9SztYJoMrvN8Ft9FElP~rV2cvXq6H~QZ0tnVxbhI1-GtY7IFU3xaQzE2y36E2t5UuDHwNmg8tTZfLIogXLxm2IF3CdVSsLZzHZjZEIMQJO-IACujvHSGmodQg59yBU-hQWho44r0V1ezcIzI7f8S31MwOt8dHg__",
        unit: "kg",
        pricePerUnit: "180/Kg",
      },
    ],
  },
  {
    id: 4,
    status: OrderStatusEnum.DELIVERED,
    address_delivery: "Travessa Fictícia, 789",
    total_value: "100",
    latitude: null,
    longetude: null,
    tipoPedido: "",
    peso: null,
    expectedDeliveryTime: null,
    deliveredAt: "2025-03-28T14:58:02.000Z",
    createdAt: "2025-01-22T11:00:00.000Z",
    items: [
      {
        name: "Milho verde",
        price: "300,00",
        quantity: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/5add/0f9f/0fa1fa125f48f0fc7921899cb0d6c8dd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qrlsnBFV1oAYACcXz8RRs6ZVslGDB2gkpFN-lYA~0~oueGDKMXhQd36iOTDfb2TuHckytNlsTs05EZsdjXcIvMaisWDnbEZeSyqxNJTA5k5n1zTKqK9PFTVI9sOldazbDaUnglSd1vuHZMR09SYghUT3SAPvxFKwHBrmlUuiQjuIzrl3~A8lQECvOBiTHR9j9rO5m6H64LZSvF-0vuTJwomiNcbSGKIIIs6IrozJk~o54KTjQgVDtwsA4RXYztV3qGhPUIT~UEkML1OKSv644JvznR6LbWqQlFMBof-Ip1bquRFfzpVC-e7Ipz6II2ZBZUZ893xWgGXle0FiXkvMJA__",
        unit: "kg",
        pricePerUnit: "150/Kg",
      },
      {
        name: "Tomate",
        price: "180,00",
        quantity: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fdxrMkx9H2RGH4CnQPQOBpNJY3FCNUj~qJHn5bcT3osXXvYYQ4KWMviYVGobbwGlThgF9DiN8BC0orJWPGuE519aYGsmIUvJpa75nEiyECYaeaCppVLSSTcBQ3yphLNuZfwub9Hv9nvctl934J5gs6neEiEHCLC2QDSK9~IDBmVKH5tY34pjdO9s9SztYJoMrvN8Ft9FElP~rV2cvXq6H~QZ0tnVxbhI1-GtY7IFU3xaQzE2y36E2t5UuDHwNmg8tTZfLIogXLxm2IF3CdVSsLZzHZjZEIMQJO-IACujvHSGmodQg59yBU-hQWho44r0V1ezcIzI7f8S31MwOt8dHg__",
        unit: "kg",
        pricePerUnit: "180/Kg",
      },
    ],
  },
];
export function MyOrders() {
  const { session } = useSession();
  if (!session) return <NotFound />;
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen">
      <HeaderAuthenticaded session={session} />
      <div className="w-full md:h-[128px] h-[88px]" />
      {selectedOrder ? (
        <MyOrderDetails
          order={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      ) : (
        <div className="md:h-screen md:p-12 p-4 pt-0">
          {/* Seção: Meus pedidos */}
          <section className="mb-8 w-full">
            <h2 className="text-3xl text-secondary-foreground font-semibold mb-4">
              Meus pedidos
            </h2>
            <MyOrdersList
              setSelectedOrder={setSelectedOrder}
              list={pendingOrders}
            />
          </section>

          {/* Seção: Histórico */}
          <section className="w-full ">
            <h2 className="text-2xl text-zinc-700 font-semibold mb-4">
              Histórico
            </h2>

            <MyOrdersList
              setSelectedOrder={setSelectedOrder}
              list={deliveredOrders}
            />
          </section>
        </div>
      )}
      <div className="h-16" />
      <BottomNav />
    </section>
  );
}
