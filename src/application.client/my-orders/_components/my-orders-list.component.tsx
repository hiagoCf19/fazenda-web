import { Order } from "../../../../types/order.type";
import { MyOrdersCard } from "./my-orders-card.component";

interface MyOrdersListProps {
  list: Order[];
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}
export function MyOrdersList({ list, setSelectedOrder }: MyOrdersListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((order) => (
        <div key={order.id} className="basis-full sm:basis-[32%]">
          <MyOrdersCard order={order} setSelectedOrder={setSelectedOrder} />
        </div>
      ))}
    </div>
  );
}
