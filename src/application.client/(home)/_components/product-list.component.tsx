import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../shadcn/ui/carousel";
import type { Product } from "../../../../types/product";
import { Link } from "react-router";
import { useState } from "react";
import { ProductCard } from "./product-card.component";

interface ProductListProps {
  products: Product[];
  title: string;
  seeAllPath: string | null;
}

export function ProductList({ products, title, seeAllPath }: ProductListProps) {
  const [hiddenArrow, setHiddenArrow] = useState(true);
  return (
    <div className="space-y-4 pb-0">
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>
        {seeAllPath && (
          <Link to={`/see-all/${seeAllPath}`} className="text-[#FE7000]">
            Ver todos
          </Link>
        )}
      </div>

      <div
        className="group -mx-12 relative"
        onMouseEnter={() => setHiddenArrow(false)}
        onMouseLeave={() => setHiddenArrow(true)}
      >
        <Carousel className="[&::-webkit-scrollbar]  ">
          <CarouselPrevious
            hidden={hiddenArrow}
            className="absolute z-30 left-4 h-12 w-12"
          />

          <CarouselContent className="mr-12  ">
            <CarouselItem className="basis-auto ml-4 px-4 "></CarouselItem>
            {products.slice(0, 10).map((product, i) => (
              <CarouselItem className="basis-auto ml-4 " key={i}>
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            hidden={hiddenArrow}
            className="absolute z-40 right-4 h-12 w-12"
          />
        </Carousel>
      </div>
    </div>
  );
}
