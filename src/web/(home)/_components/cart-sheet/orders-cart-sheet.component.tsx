import { X } from "lucide-react";
import { Button } from "../../../../shadcn/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../../../../shadcn/ui/sheet";
import { Separator } from "../../../../shadcn/ui/separator";
import { TopProductsList } from "./top-product-list.component";
import { OrderList } from "./order-cart-list.component";
import { Link } from "react-router";
import { OrderSummary } from "./order-cart--summary.component";

interface PedidosComponentProps {
  onOpenChange: (step: boolean) => void;
}
export function OrdersCartComponent({ onOpenChange }: PedidosComponentProps) {
  const items = [
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image: "/mock/lentilha.png", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png", // You'll replace this with the actual image URL
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
  ];

  return (
    <SheetContent className="mb-4 md:w-auto w-full">
      <div className="w-full md:h-[125px] h-[60px] " />

      <SheetHeader className="flex gap-0 flex-row justify-between p-0">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-[#FE7000] "
          onClick={() => onOpenChange(false)}
        >
          <X className="size-5" />
        </Button>
        <SheetTitle className="text-2xl text-zinc-700 text-center w-full">
          Pedidos
        </SheetTitle>
        <SheetDescription />
        <Button size={"sm"} variant={"ghost"} className="text-[#FE7000]">
          Limpar
        </Button>
      </SheetHeader>
      <div className=" md:px-4 px-2 md:space-y-4">
        <div className="md:h-[28vh] h-[30vh] flex flex-col justify-between overflow-y-scroll [&::-webkit-scrollbar]:hidden ">
          <OrderList items={items} />
        </div>
        <Separator className="mt-2" />

        <div className="min-h-[20vh] md:h-[22vh] mb-2 md:mb-0  flex flex-col justify-between">
          <TopProductsList items={items} />
        </div>
        <Separator className="md:mt-2" />
        <div className="md:h-[15vh] flex flex-col md:space-y-4 space-y-2 mt-2">
          <OrderSummary />
        </div>
      </div>

      <div className="px-4">
        <Link to={"/confirm-order"}>
          <Button
            className="bg-secondary text-secondary-foreground rounded-full w-full text-lg"
            size={"lg"}
          >
            Continuar
          </Button>
        </Link>
      </div>
    </SheetContent>
  );
}
