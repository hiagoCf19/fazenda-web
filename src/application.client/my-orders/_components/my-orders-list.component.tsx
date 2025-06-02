import { Order } from "../../../../types/order.type";
import { OrderCard } from "../../../common/_components/card.order.component";

interface MyOrdersListProps {
  list: Order[];
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}
export function MyOrdersList({ list, setSelectedOrder }: MyOrdersListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((order) => (
        <div key={order.id} className="basis-full sm:basis-[32%]">
          <OrderCard order={order} setSelectedOrder={setSelectedOrder} />
        </div>
      ))}
    </div>
  );
}
