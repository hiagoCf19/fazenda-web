import { X } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../../../shadcn/ui/sheet";
import { Separator } from "../../../shadcn/ui/separator";
import { TopProductsList } from "./orders/top-product-list.component";
import { OrderList } from "./orders/order-list.component";
import { Link } from "react-router";
import { OrderSummary } from "./orders/order-summary.component";

interface PedidosComponentProps {
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}
export function PedidosComponent({ onOpenChange }: PedidosComponentProps) {
  const items = [
    {
      id: "3",
      name: "Bacalhau",
      image:
        "https://s3-alpha-sig.figma.com/img/85d3/2778/38617ed4ff0eed4b742baafbb974d51b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p1PGaK6s7N6NCimDrhJOyZ-8S9ZuEYqx7RRNWsw~5PZYGj9tgkgsutAxGTwDgw4~Pcl8ISkjennDDsKIJ9o3cJ6puvBirBWFhnydj1OlQmCJW3-ll6248oO0HdPVk-o~KFFV~36jYJ~HafiqlXRd1r~-daeQtkxPjDyx3MoDXq9s7FEHfigCWgo9vVdbK9zsjD-3olhWzZbRPDfJJXlJRGTNKete29E0PiTYZhkQksvmHa-JpFdlvKz6qmpdAdwTaK02~SKuSgsplLNMlwBrkxLOaJ395VS16P2wQocrujvFGCJsmLNjRqkx~mjhJozt7Y41s3wfH2WiCGXLXPTnfw__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image:
        "https://s3-alpha-sig.figma.com/img/df2a/1de6/e6da096563c5a5f4f514c7b9dd692e32?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jEHbbphus7ng6wupEN8GIjX2q3nh8ljCdf7xqhh5ADch5DuY49fqcbaB94k3YqkArIfX9gKkluqgzpsA~KidNRxg5L8sO-uniCYvHhSkqW-4MLRdBeTCgo1tRaqDt0PDSeBUgYwAorieDRw2IIxwT62j6aPgrbT-HsKZ-9Mw0aC9WDSVEUronkpqjTdEZC29apH-mwlybXXsK2PYCHBBXFhSrmx5b6tytcn~UYmBJyX0OuQ42XtOGbippKq4eOKMJsq-oEJeiaam7IgjIkcZGThEwhLgrd5N7A~8sfsM2tzZFjkgsZVP2AhVsAtFFqNIChgWsikk8SfzL2EU-3Jkjg__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image:
        "https://s3-alpha-sig.figma.com/img/0577/e6da/9838e6649678a2b4d1f1c45ff47a7712?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h4UPXx-1z-YIbUmAfJNdgEBwJLRG~~GteXs1tOxG7lVyEN~iq1ObPbS3ox2fjQYKxWzsmb5AYLkQKQhOmK0F2eSDErMu6gXijkKVf3e5rscFClGW-99GY7Fx8TOFIY00jsmUlHQn8WInww8uVg7HLE9jXS5vnuynRELKXMu-ZHu6qfmTJzLPkRJxdhwR0~1OIHLNOxxROZXjc-xUBGnZEZKqxsU9BSmgBX6jPCVbT6gA90DQB~DwIYJJmTw~Oz62o2plz~Uy8xgntgQzwk3HT8r8vNpv-Xh1HS3CLHBfananoAyjixMHqw0MC7Rjh804wIRZHuuyfll3fBV9UitXJQ__", // You'll replace this with the actual image URL
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
  ];

  return (
    <SheetContent className="mb-4 md:w-auto w-full">
      <div className="w-full md:h-[125px] h-[60px]" />

      <SheetHeader className="flex flex-row items-center justify-between p-0 md:px-4 -mb-3 md:-mb-0">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-[#FE7000] "
          onClick={() => onOpenChange(false)}
        >
          <X className="size-5" />
        </Button>
        <SheetTitle className="text-2xl text-zinc-700 text-center w-full md:w-auto">
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
        <Separator />

        <div className="min-h-[20vh] md:h-[20vh] mb-2  flex flex-col justify-between">
          <TopProductsList items={items} />
        </div>
        <Separator />
        <div className="md:h-[18vh] flex flex-col md:space-y-4 space-y-2 mt-2">
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
