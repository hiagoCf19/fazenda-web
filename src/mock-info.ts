import { OrderStatusEnum } from "../enums/order-status.enum";
import { Producer } from "../types/producer";

export const pendingOrders = [
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
    ],
  },
];
export const deliveredOrders = [
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
export const producers = [
  {
    empresa: "Organic Farm",
    responsavel: "João Mbumba",
    telefone: "+ 244 923 457 789",
    email: "organicfarm@mail.com",
  },
  {
    empresa: "#Fazenda Esperança",
    responsavel: "Rodrigo Silva",
    telefone: "+ 244 923 457 789",
    email: "esperanca.fazenda@mail.com",
  },
  {
    empresa: "Chicken Farm",
    responsavel: "Angela Gomes",
    telefone: "+ 244 923 457 789",
    email: "chickenfarm@mail.com",
  },
  {
    empresa: "Fazenda luz",
    responsavel: "Luiz Renato",
    telefone: "+ 244 923 457 789",
    email: "fazenda_luz@mail.com",
  },
];
export const products = [
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
    id: "6",
    name: "Cebola roxa",
    image: "/mock/cebola.png",
    priceKg: "Kz 96/Kg",
    priceT: "Kz 90.000/T",
  },
  {
    id: "6",
    name: "Cebola roxa",
    image: "/mock/cebola.png",
    priceKg: "Kz 96/Kg",
    priceT: "Kz 90.000/T",
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
];
export const producersExtraInfo: Producer[] = [
  {
    businessName: "Fazenda esperança",
    image: "/mock/vilela.png",
    assessment: 5,
    id: "1",
  },
  {
    businessName: "Fazenda Filter",
    image: "/mock/filter.png",
    assessment: 5,
    id: "2",
  },
  {
    businessName: "Farm fresh - Organic",
    image: "/mock/fresh.png",
    assessment: 5,
    id: "3",
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
    businessName: "Império das colunas",
    image: "/mock/imperio_col.png",
    assessment: 5,
    id: "9",
  },
  {
    businessName: "Chicken Farm",
    image: "/mock/chicken.png",
    assessment: 5,
    id: "10",
  },
  {
    businessName: "Fazenda Aviação",
    image: "/mock/aviacao.png",
    assessment: 5,
    id: "11",
  },
  {
    businessName: "Ouro da Serra",
    image: "/mock/ouro.png",
    assessment: 5,
    id: "12",
  },
  // Adicione mais produtores aqui conforme necessário
];
