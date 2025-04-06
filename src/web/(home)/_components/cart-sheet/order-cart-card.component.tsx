import { Minus, Plus } from "lucide-react";
import { Product } from "../../../../../types/product";
import { Button } from "../../../../shadcn/ui/button";

interface OrderCardProps {
  item: Product;
}
export function OrderCard({ item }: OrderCardProps) {
  return (
    <div className="flex items-center justify-between  md:mb-0">
      <div className="flex items-center gap-2">
        <img src={item.image} alt={item.name} className="size-20 rounded-xl" />
        <div className="flex flex-col gap-1">
          <p className="text-zinc-700">{item.name}</p>
          <div>
            <p className="text-sm">{item.priceT}</p>
            <p className="md:text-lg text-sm  text-zinc-900">{item.priceKg}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center  border-secondary border-2 rounded-full p-1 gap-2">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-zinc-700 hover:bg-background"
        >
          <Minus />
        </Button>
        <p className="text-zinc-800">2 kg</p>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-zinc-700  hover:bg-background"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
