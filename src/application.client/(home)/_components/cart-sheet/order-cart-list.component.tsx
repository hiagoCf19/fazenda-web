import { Product } from "../../../../../types/product";
import { OrderCard } from "./order-cart-card.component";

interface OrderListProps {
  items: Product[];
}
export function OrderList({ items }: OrderListProps) {
  return items.map((item) => <OrderCard key={item.id} item={item} />);
}
