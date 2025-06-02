import { useState } from "react";
import { Order } from "../../../types/order.type";
import { FormatDateHelper } from "../../helpers/format-date.helper";
import { Badge } from "../../shadcn/ui/badge";
import { Button } from "../../shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../shadcn/ui/card";
import { cn } from "../../lib/utils";
import { MyOrderDetails } from "../../application.client/my-orders/_components/my-order-details.component";

interface MyOrdersCardProps {
  order: Order;
  className?: string;
}
export function OrderCard({ order, className }: MyOrdersCardProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <>
      <Card
        className={cn(
          "bg-white shadow-md rounded-2xl md-p-8 h-[248px] flex flex-col md:gap-4 border ",
          className
        )}
      >
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
            className="border bg-transparent border-secondary  mt-4 rounded-2xl py-6 w-full"
            onClick={() => setSelectedOrder(order)}
          >
            Detalhes
          </Button>
        </CardFooter>
      </Card>
      {selectedOrder && (
        <MyOrderDetails
          order={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      )}
    </>
  );
}
