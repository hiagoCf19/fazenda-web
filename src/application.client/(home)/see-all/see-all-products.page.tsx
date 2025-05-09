import { Product } from "../../../../types/product";
import { ProductCard } from "../_components/product-card.component";

interface SeeAllProductsProps {
  products: Product[];
}
export function SeeAllProducts({ products }: SeeAllProductsProps) {
  //TODO: buscar produtos do banco e passar no mock
  return (
    <main className="flex gap-8 min-h-[50vh]">
      <div className="flex-col flex gap-4">
        <div className="flex  gap-4">
          {products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex  gap-4">
          {products.slice(10, 20).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
