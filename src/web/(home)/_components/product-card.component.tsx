import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { PlusIcon, X } from "lucide-react";
import { Button } from "../../../shadcn/ui/button";
import { Product } from "../../../../types/product";
import { DialogClose } from "@radix-ui/react-dialog";
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="md:w-[160px] md:h-[160px]  w-[160px] h-[160px] rounded-3xl shadow-md border relative">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square rounded-3xl content-center object-fit"
          />
          <Button
            className=" rounded-full bg-background absolute flex items-center justify-center bottom-0 m-2 right-0 size-10 hover:bg-zinc-50 "
            size={"icon"}
          >
            <PlusIcon className="text-secondary-foreground size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-[40%] md:h-[512px] md:min-w-[1083px] ">
          {/* image */}
          <div className=" w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className=" h-full aspect-square object-cover rounded-2xl"
            />
          </div>

          <div className="w-1/2 justify-between flex flex-col">
            {/* text */}

            <div className="space-y-4 text-xl text-zinc-700">
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold text-zinc-800">
                  {product.name}
                </h3>
                <DialogClose className="text-primary size-8">
                  <X />
                </DialogClose>
              </div>
              <p className="line-clamp-7">
                &Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt molestias quasi voluptatem, culpa incidunt error nihil
                ex corrupti, nobis, ab optio quae velit dolores odio asperiores
                at sit adipisci obcaecati! &Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Deserunt molestias quasi
                voluptatem, culpa incidunt error nihil ex corrupti, nobis, ab
                optio quae velit dolores odio asperiores at sit adipisci
                obcaecati!
              </p>
              <span className="text-lg">{product.priceT}</span>
              <h3 className="text-2xl text-zinc-800 font-bold">
                {product.priceKg}
              </h3>
            </div>

            {/* bottooes */}
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
    </>
  );
}
