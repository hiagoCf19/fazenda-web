import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  const [showPrevius, setShowPrevius] = useState(false);

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
      <div className="relative group -mr-12  ">
        <Carousel className="[&::-webkit-scrollbar]">
          <CarouselPrevious className="absolute z-40 left-4  " />
          <CarouselContent className="mr-12">
            {products.slice(0, 10).map((product, i) => (
              <CarouselItem className="basis-auto ml-4   " key={i}>
                <ProductCard product={product} setShowNext={setShowNext} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext
            className="absolute z-40 right-4"
            hidden={!showNext}
            onMouseEnter={() => setShowPrevius(!showPrevius)}
          />
        </Carousel>

        {/* Overlay gradiente no canto direito */}

        <div
          className="
          -mt-8
          pointer-events-none
          absolute top-0 right-0 h-full w-32
          bg-gradient-to-r from-black/5 to-black/90
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          z-30
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,black_30%,transparent_90%)]
          [mask-composite:intersect]
          [mask-mode:match-source]
    "
        />
      </div>
    </div>
  );
}
