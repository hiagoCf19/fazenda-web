import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import BottomNav from "../_components/bottom-navigator-mobile.component";
import { ProductList } from "./_components/product-list.component";
import { Footer } from "./_components/footer.component";

export const NewProductsPage = () => {
  const { session } = useSession();

  const newProducts = [
    // Lista de novos produtos
    {
      id: "1",
      name: "Melancia",
      image: "/mock/melancia.png",
      priceKg: "Kz 500/Kg",
      priceT: "Kz 300.000/T",
    },
    {
      id: "2",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    // ... outros novos produtos
  ];

  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen">
      {!session ? (
        <UnauthenticatedHeader />
      ) : (
        <HeaderAuthenticaded session={session} />
      )}
      <div
        className={`w-full ${
          session ? "md:h-[129px] h-[88px]" : "md:h-0 h-[25px]"
        }`}
      />

      <main className="md:mb-12 md:space-y-8 h-full">
        <h1 className="text-2xl font-bold p-4">Novos Produtos</h1>
        <ProductList title="Novidades" products={newProducts} />
      </main>

      <BottomNav />
      <Footer />
    </section>
  );
};
