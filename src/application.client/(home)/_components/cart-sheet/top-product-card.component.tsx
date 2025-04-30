import { Plus } from "lucide-react";
import { Product } from "../../../../../types/product";
import { Button } from "../../../../shadcn/ui/button";

interface TopProductCardProps {
  order: Product;
}
export function TopProductCard({ order }: TopProductCardProps) {
  return (
    <div className=" flex flex-col flex-1">
      <div className="relative ">
        <img
          src={order.image}
          alt={order.name}
          className="size-auto aspect-square rounded-2xl"
        />
        <Button
          size={"icon"}
          className="absolute rounded-full bottom-0 right-0 size-8 m-2 bg-zinc-50 shadow"
        >
          <Plus className="text-secondary-foreground" />
        </Button>
      </div>
      <p className="text-zinc-700">{order.name}</p>
      <div className="leading-3">
        <p className="text-xs">{order.priceT}</p>
        <p className="text-zinc-800 text-sm md:text-base">{order.priceKg}</p>
      </div>
    </div>
  );
}
