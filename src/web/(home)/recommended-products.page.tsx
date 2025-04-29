import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import BottomNav from "../_components/bottom-navigator-mobile.component";
import { ProductList } from "./_components/product-list.component";
import { Footer } from "./_components/footer.component";

export const RecommendedProductsPage = () => {
  const { session } = useSession();

  const recommendedProducts = [
    // Lista de produtos recomendados
    {
      id: "1",
      name: "Milho verde",
      image: "/mock/milho.png",
      priceKg: "Kz 150/Kg",
      priceT: "Kz 130.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image: "/mock/lentilha.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    // ... outros produtos recomendados
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
        <h1 className="text-2xl font-bold p-4">Produtos Recomendados</h1>
        <ProductList title="Recomendados" products={recommendedProducts} />
      </main>

      <BottomNav />
      <Footer />
    </section>
  );
};
