import { Order } from "../../../../types/order.type";
import { OrderCard } from "../../../common/_components/card.order.component";

interface MyOrdersListProps {
  list: Order[];
}
export function MyOrdersList({ list }: MyOrdersListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((order) => (
        <div key={order.id} className="basis-full sm:basis-[32%]">
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
}
