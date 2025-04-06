import { ChevronLeft, CreditCard, MapPin } from "lucide-react";
import { Order } from "../../../../types/order.type";
import { FormatDateHelper } from "../../../helpers/format-date.helper";
import { Button } from "../../../shadcn/ui/button";
import { OrderStatusEnum } from "../../../../enums/order-status.enum";

interface MyOrderDetailsProps {
  order: Order;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}
export function MyOrderDetails({
  order,
  setSelectedOrder,
}: MyOrderDetailsProps) {
  const statusStyle =
    order.status === OrderStatusEnum.PENDING
      ? "bg-[#FE70004D]"
      : order.status === OrderStatusEnum.DELIVERED
      ? "bg-[#20202033]"
      : "bg-[#00BE62]";
  return (
    <div className=" px-4 md:p-0  overflow-y-auto">
      <div className="md:hidden flex items-center ">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => setSelectedOrder(null)}
        >
          <ChevronLeft className="size-6 text-[#FE7000]" />
        </Button>
        <h1 className="w-full text-center text-zinc-700 font-medium">
          Detalhes do pedido
        </h1>
      </div>
      <div className="max-w-md mx-auto pb-6 bg-white shadow-lg rounded-2xl mb-12">
        {/* Cabeçalho do pedido */}
        <div className="p-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg text-zinc-700">Pedido #{order.id}</h1>
              <p className="text-xl font-bold text-zinc-800">
                Kz {order.total_value}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {FormatDateHelper(order.createdAt).date}
              </p>
              <p className="text-sm text-gray-500">
                {FormatDateHelper(order.createdAt).time}
              </p>
            </div>
          </div>
        </div>
        {/* Status do pedido */}
        <div className="p-4">
          <div className={`${statusStyle} rounded-full p-1 text-center mb-2`}>
            <p className="font-medium text-zinc-800">{order.status}</p>
          </div>
          <p className="text-center text-sm text-gray-600">
            O pedido foi entregue ao comprador.
          </p>
        </div>
        {/* Itens do pedido */}
        <div className="p-4 space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Imagem do produto */}
              <div className="w-12 h-12 rounded-md flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Detalhes do produto */}
              <div className="flex-1">
                <p className="font-medium text-zinc-700">{item.name}</p>
                <p className="text-sm text-gray-600">Kz {item.pricePerUnit}</p>
              </div>

              {/* Quantidade */}
              <div className="text-right">
                <p className="font-bold">
                  {item.quantity} {item.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Endereço de entrega */}
        <div className="p-4 border-t">
          <h2 className="font-medium mb-3 text-zinc-800">
            Endereço de entrega
          </h2>
          <div className="flex items-start gap-2">
            <div className="mt-1">
              <MapPin className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-sm">{order.address_delivery}</p>
          </div>
        </div>
        {/* Resumo dos valores */}
        <div className="p-4 border-t">
          <h2 className="font-medium mb-3 text-zinc-800">Resumo dos valores</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">Kz y</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Taxa de entrega</p>
              <p className="text-sm">Kz x</p>
            </div>
            <div className="flex justify-between font-bold">
              <p className="text-zinc-800">Total</p>
              <p>Kz {order.total_value}</p>
            </div>
          </div>
        </div>
        {/* Método de pagamento */}
        <div className="p-4 border-t">
          <h2 className="font-medium mb-3 text-zinc-800">Pago pelo app</h2>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">Mastercard Final 123</p>
              <p className="text-xs text-gray-500">1 x</p>
            </div>
          </div>
        </div>
        {order.status === "Pendente" && (
          <div className="flex justify-center px-4">
            <Button
              variant={"outline"}
              className="border-red-600 text-red-600 w-full rounded-2xl md:py-6 py-5"
            >
              Cancelar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
