import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../../../shadcn/ui/carousel";
import { Product } from "../../../../types/product";
import { ProductCard } from "./product-card.component";
import { Link } from "react-router";
import { useState } from "react";

interface ProductListProps {
  products: Product[];
  title: string;
  seeAllPath: string | null;
}
export function ProductList({ products, title, seeAllPath }: ProductListProps) {
  const [showNext, setShowNext] = useState(false);
  return (
    <div
      className="space-y-4  pb-0  "
      onMouseEnter={() => setShowNext(!showNext)}
      onMouseLeave={() => setShowNext(!showNext)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>

        <Link to={`/see-all/${seeAllPath}`} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>
      <div className=" relative -mr-12 ">
        <Carousel className="[&::-webkit-scrollbar] ">
          <CarouselContent className=" mr-12">
            {products.slice(0, 10).map((product, i) => (
              <CarouselItem className="basis-auto ml-4" key={i}>
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute z-40 right-4 " hidden={!showNext} />
        </Carousel>
      </div>
    </div>
  );
}
