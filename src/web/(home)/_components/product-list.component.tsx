import { PlusIcon } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shadcn/ui/carousel";
import { Product } from "../../../../types/product";
interface ProductListProps {
  products: Product[];
  title: string;
}
export function ProductList({ products, title }: ProductListProps) {
  return (
    <div className="space-y-4 p-4 pb-0">
      <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
      <Carousel className="-mx-4">
        <CarouselContent>
          {products.map((product, i) => (
            <CarouselItem className="basis-auto ml-4" key={i}>
              <div className="rounded-3xl  relative shadow-lg md:w-[190px] md:h-[190px]  w-[160px] h-[160px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square md:rounded-3xl rounded-xl w-full"
                />
                <Button
                  className=" rounded-full bg-background absolute flex items-center justify-center bottom-0 m-4 right-0 size-12 hover:bg-primary"
                  size={"icon"}
                >
                  <PlusIcon className="text-secondary-foreground " size={29} />
                </Button>
              </div>
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
