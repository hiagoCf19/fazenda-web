import { Product } from "../../../../types/product";
import { ProductCard } from "../_components/product-card.component";

interface SeeAllProductsProps {
  products: Product[];
}
export function SeeAllProducts({ products }: SeeAllProductsProps) {
  //TODO: buscar produtos do banco e passar no mock
  return (
    <main className="md:space-y-8 h-full">
      <div className="grid grid-cols-9 space-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
