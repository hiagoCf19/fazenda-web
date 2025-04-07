import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../shadcn/ui/carousel";
import { Product } from "../../../../types/product";
import { ProductCard } from "./product-card.component";

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
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
