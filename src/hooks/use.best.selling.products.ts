import { useQuery } from "@tanstack/react-query";
import { getBestSellingProducts } from "../service/best-selling-product.service";

export function useBestSellingProducts() {
  return useQuery({
    queryKey: ["best-selling-products"],
    queryFn: getBestSellingProducts,
  });
}
