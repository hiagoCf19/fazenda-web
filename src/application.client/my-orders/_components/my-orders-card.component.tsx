import React from "react";
import { Order } from "../../../../types/order.type";
import { FormatDateHelper } from "../../../helpers/format-date.helper";
import { Badge } from "../../../shadcn/ui/badge";
import { Button } from "../../../shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../shadcn/ui/card";

interface MyOrdersCardProps {
  order: Order;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}
export function MyOrdersCard({ order, setSelectedOrder }: MyOrdersCardProps) {
  return (
    <Card className="bg-white shadow-md rounded-2xl md-p-8 w-auto h-[248px] flex flex-col md:gap-4 border">
      {/* Status */}
      <CardHeader>
        <Badge
          className={`text-sm px-3 py-1 rounded-full self-start ${
            order.status === "Pendente"
              ? "bg-[#FE70004D] text-zinc-800"
              : "bg-[#D2D2D2] text-zinc-800"
          }`}
        >
          {order.status}
        </Badge>
      </CardHeader>

      {/* Dados do pedido */}
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-lg text-gray-600 font-medium">
            Pedido #{order.id}
          </p>
          <span className="text-lg">
            {FormatDateHelper(order.deliveredAt).date}
          </span>
        </div>

        {/* Data e Hora */}
        <div className="flex justify-between text-sm text-gray-500">
          <p className="text-xl text-zinc-700 font-medium">
            {" "}
            Kz {order.total_value}
          </p>
          <span className="text-lg text-end">
            {FormatDateHelper(order.deliveredAt).time}
          </span>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button
          variant={"outline"}
          className="border bg-background border-secondary  mt-4 rounded-2xl py-6 w-full"
          onClick={() => setSelectedOrder(order)}
        >
          Detalhes
        </Button>
      </CardFooter>
      {/* Botão de detalhes */}
    </Card>
  );
}
