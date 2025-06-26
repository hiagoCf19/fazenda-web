import { Product } from "../../../../../types/product";
//import type { CartItem } from "../../../../service/products.service";
import { OrderCard } from "./order-cart-card.component";

interface OrderListProps {
  items: Product[];
  /* items: CartItem[]; */

  onQuantityChange?: (productId: string, newQuantity: number) => void;
}
export function OrderList({ items }: OrderListProps) {
  return items.map((item) => <OrderCard key={item.id} item={item} />);
}
