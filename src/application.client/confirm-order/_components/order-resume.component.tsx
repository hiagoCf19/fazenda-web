import { OrderList } from "../../(home)/_components/cart-sheet/order-cart-list.component";
import { OrderSummary } from "../../(home)/_components/cart-sheet/order-cart--summary.component";
import { Product } from "../../../../types/product";
interface OrderResumeComponentProps {
  items: Product[];
}
export function OrderResumeComponent({ items }: OrderResumeComponentProps) {
  return (
    <div className="md:min-h-[486px] bg-zinc-50 shadow-lg rounded-xl p-6 space-y-6">
      {/* endereço */}
      <div className="space-y-4">
        <h3 className="font-medium text-xl text-zinc-800">Pedido</h3>
        <OrderList items={items} />
        <OrderSummary />
      </div>
    </div>
  );
}
