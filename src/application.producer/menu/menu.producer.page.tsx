import { PlusIcon, X } from "lucide-react";
import { Footer } from "../../application.client/(home)/_components/footer.component";
import { HeaderProducer } from "../_components/header.producer.component";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../../shadcn/ui/sheet";
import { Button } from "../../shadcn/ui/button";
import { useState } from "react";
import { OrderList } from "../../application.client/(home)/_components/cart-sheet/order-cart-list.component";
import { products } from "../../mock-info";
import { MobileNavigator } from "../_components/navigator.producer.component";

type Product = (typeof products)[number];
type CartItem = Product & { quantity: number };

const MenuProducerPage = () => {
  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // Se já tem, só aumenta a quantidade
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setOpen(true);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Evita quantidade negativa
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <section className="overflow-x-hidden min-h-screen">
      <HeaderProducer />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-700 my-4 sm:my-6">
          Adicione produtos ao cardárpio
        </h3>

        <Sheet open={open} onOpenChange={setOpen}>
          {/* Grid responsivo com tamanhos fixos para as imagens */}
          <div
            className="grid gap-4 sm:gap-6 md:gap-8 justify-items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 160px))",
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <Button
                  className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-2xl sm:rounded-3xl shadow-md border relative p-0 bg-transparent hover:bg-transparent hover:shadow-lg transition-all duration-200"
                  onClick={() => handleAddToCart(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full rounded-2xl sm:rounded-3xl object-cover"
                  />
                  <div className="rounded-full bg-background absolute flex items-center justify-center bottom-1 right-1 sm:bottom-2 sm:right-2 size-8 sm:size-10 hover:bg-zinc-50 z-20 shadow-md transition-colors">
                    <PlusIcon className="text-secondary-foreground size-4 sm:size-5" />
                  </div>
                </Button>

                <div className="mt-2 sm:mt-3 w-[140px] sm:w-[160px]">
                  <p className="text-sm sm:text-base md:text-lg text-zinc-800 font-medium leading-tight line-clamp-2">
                    {product.name}
                  </p>
                  <div className="flex flex-col mt-1">
                    <span className="text-xs sm:text-sm md:text-base text-zinc-600">
                      {product.priceT}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-zinc-800 font-medium">
                      {product.priceKg}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SheetContent className="mb-4 z-40 md:w-[398px] w-full">
            <div className="w-full md:h-[80px] h-[60px]" />
            <SheetHeader>
              <div className="flex justify-between items-center">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => setOpen(!open)}
                >
                  <X className="text-orange" />
                </Button>
                <SheetTitle className="text-zinc-700 font-medium text-xl">
                  Cardápio
                </SheetTitle>
                <Button
                  className="text-orange"
                  variant={"link"}
                  onClick={handleClearCart}
                >
                  Limpar
                </Button>
              </div>
              <SheetDescription hidden />
              <div className="flex flex-col justify-between overflow-y-scroll [&::-webkit-scrollbar]:hidden gap-4 pb-4">
                {/* <OrderList items={products.slice(0, 4)} /> */}
                <OrderList
                  items={cartItems}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <MobileNavigator />
      <Footer />
    </section>
  );
};

export default MenuProducerPage;
