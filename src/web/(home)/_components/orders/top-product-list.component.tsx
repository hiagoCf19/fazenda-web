import { Product } from "../../../../../types/product";
import { TopProductCard } from "./top-product-card.component";

interface TopProductsListProps {
  items: Product[];
}
export function TopProductsList({ items }: TopProductsListProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-lg text-zinc-700 font-semibold">Peça também</h1>
      <div className="flex gap-4">
        {items.map((item, i) => (
          <TopProductCard key={i} order={item} />
        ))}
      </div>
    </div>
  );
}
