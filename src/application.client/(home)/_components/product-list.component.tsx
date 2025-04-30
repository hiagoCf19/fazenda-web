import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../../../shadcn/ui/carousel";
import { Product } from "../../../../types/product";
import { ProductCard } from "./product-card.component";
import { Link } from "react-router";

interface ProductListProps {
  products: Product[];
  title: string;
  seeAllPath: string | null;
}
export function ProductList({ products, title, seeAllPath }: ProductListProps) {
  return (
    <div className="space-y-4 p-4 pb-0">
      <div className="flex items-center justify-between">
        <h2 className="text-zinc-800 font-semibold text-2xl">{title}</h2>

        <Link to={`/see-all/${seeAllPath}`} className="text-[#FE7000]">
          Ver todos
        </Link>
      </div>
      <Carousel className="[&::-webkit-scrollbar]">
        <CarouselContent className="">
          {products.map((product, i) => (
            <CarouselItem className="basis-auto ml-4" key={i}>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
