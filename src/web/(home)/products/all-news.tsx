import BottomNav from "../../_components/bottom-navigator-mobile.component";
import { HeaderAuthenticaded } from "../../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../../_components/unauthenticated-header.component";
import { useSession } from "../../context/session.context";
import { Footer } from "../_components/footer.component";
import { ProductList } from "../_components/product-list.component";

export const AllNews = () => {
  const { session } = useSession();

  const products = [
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
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
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "4",
      name: "Noz pecan",
      image: "/mock/castanha.png",
      priceKg: "Kz 2.850/Kg",
      priceT: "Kz 2.800.000/T",
    },
    {
      id: "5",
      name: "Melancia",
      image: "/mock/melancia.png",
      priceKg: "Kz 500/Kg",
      priceT: "Kz 300.000/T",
    },
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
    {
      id: "3",
      name: "Bacalhau",
      image: "/mock/bacalhau.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
  ];

  return (
    <div className="md:p-12 overflow-x-hidden relative min-h-screen">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <section className="overflow-x-hidden flex-1 flex flex-col">
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
            <h1 className="text-2xl font-bold p-4"> Novidades</h1>
            <ProductList title="Todas as Novidades" products={products} />
          </main>

          <BottomNav />
        </section>
      </div>
      <Footer />
    </div>
  );
};
