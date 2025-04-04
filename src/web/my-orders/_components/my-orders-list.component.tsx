import { Order } from "../../../../types/order.type";
import { MyOrdersCard } from "./my-orders-card.component";

interface MyOrdersListProps {
  list: Order[];
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}
export function MyOrdersList({ list, setSelectedOrder }: MyOrdersListProps) {
  return (
    <div className="md:grid grid-cols-3 space-y-4 ">
      {list.map((order) => (
        <MyOrdersCard
          key={order.id}
          setSelectedOrder={setSelectedOrder}
          order={order}
        />
      ))}
    </div>
  );
}
