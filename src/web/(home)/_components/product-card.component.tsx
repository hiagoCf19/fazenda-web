import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { PlusIcon } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import { CarouselItem } from "../../../shadcn/ui/carousel";
import { Product } from "../../../../types/product";
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <CarouselItem className="basis-auto ml-4">
      <div className="rounded-3xl  relative shadow-lg md:w-[190px] md:h-[190px]  w-[160px] h-[160px]">
        <Dialog>
          <DialogTrigger>
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square md:rounded-3xl rounded-xl w-full"
            />
          </DialogTrigger>
          <DialogContent className="flex w-full md:max-w-[50%] h-[40%] border">
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="space-y-4 text-xl text-zinc-700">
                <h3 className="text-4xl font-bold text-zinc-800">
                  {product.name}
                </h3>
                <p>
                  &Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt molestias quasi voluptatem, culpa incidunt error
                  nihil ex corrupti, nobis, ab optio quae velit dolores odio
                  asperiores at sit adipisci obcaecati!
                </p>
                <span className="text-lg">{product.priceT}</span>
                <h3 className="text-2xl text-zinc-800 font-bold">
                  {product.priceKg}
                </h3>
              </div>
              <div className="space-y-4">
                <Button className="bg-secondary w-full rounded-full py-6 text-secondary-foreground text-lg">
                  Adicionar à sacola
                </Button>
                <div className="flex justify-between gap-4">
                  <Button
                    variant={"outline"}
                    className="flex-1 text-zinc-700 py-5 rounded-full text-lg"
                  >
                    {" "}
                    +2kg
                  </Button>
                  <Button
                    variant={"outline"}
                    className="flex-1 text-zinc-700 py-5 rounded-full text-lg "
                  >
                    {" "}
                    +5kg
                  </Button>
                  <Button
                    variant={"outline"}
                    className="flex-1 text-zinc-700 py-5 rounded-full text-lg"
                  >
                    {" "}
                    +1T
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Button
          className=" rounded-full bg-background absolute flex items-center justify-center bottom-0 m-2 right-0 size-10 hover:bg-primary"
          size={"icon"}
        >
          <PlusIcon className="text-secondary-foreground size-6" />
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
  );
}
