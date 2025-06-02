import { PlusIcon, X } from "lucide-react";
import { Footer } from "../../application.client/(home)/_components/footer.component";

import { HeaderProducer } from "../_components/header.producer.component";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../../shadcn/ui/sheet";
import { Button } from "../../shadcn/ui/button";
import { useState } from "react";
import { OrderList } from "../../application.client/(home)/_components/cart-sheet/order-cart-list.component";
import { products } from "../../mock-info";

const MenuProducerPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="overflow-x-hidden h-screen">
      <HeaderProducer />
      <div className="md:mx-12">
        <h3 className="text-2xl font-bold text-zinc-700 my-4">
          Adicione produtos ao cardárpio
        </h3>
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-8 gap-8">
            {products.map((product) => (
              <div className="flex flex-col">
                <Button
                  className="md:w-[160px] md:h-[160px]  w-[160px] h-[160px] rounded-3xl shadow-md border relative p-0 bg-transparent"
                  onClick={() => setOpen(!open)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square rounded-3xl content-center object-fit"
                  />
                  <div className=" rounded-full bg-background absolute flex items-center justify-center bottom-0 m-2 right-0 size-10 hover:bg-zinc-50 z-20 shadow">
                    <PlusIcon className="text-secondary-foreground" />
                  </div>
                </Button>
                <div className=" mt-2">
                  <p className=" md:text-xl text-lg text-zinc-800 font-medium">
                    {product.name}
                  </p>
                  <div className="flex flex-col">
                    <span className="md:text-lg text-base text-zinc-600">
                      {product.priceT}
                    </span>
                    <span className="md:text-lg text-base text-zinc-800">
                      {product.priceKg}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SheetContent className="mb-4 z-40 md:w-[398px] w-full">
            <div className="w-full md:h-[80px] h-[60px] " />
            <SheetHeader>
              <div className="flex justify-between items-center">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => setOpen(!open)}
                >
                  {" "}
                  <X className="text-orange" />
                </Button>
                <SheetTitle className="text-zinc-700 font-medium text-xl">
                  Cardápio
                </SheetTitle>
                <Button className="text-orange" variant={"link"}>
                  Limpar
                </Button>
              </div>
              <SheetDescription hidden />
              <div className=" flex flex-col justify-between overflow-y-scroll [&::-webkit-scrollbar]:hidden  gap-4 pb-4">
                <OrderList items={products.slice(0, 4)} />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Footer />
    </section>
  );
};

export default MenuProducerPage;
