import { useParams } from "react-router";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { useSession } from "../context/session.context";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { ProductCard } from "../(home)/_components/product-card.component";
import { Footer } from "../(home)/_components/footer.component";

export function SearchPage() {
  const { query } = useParams();
  const { session } = useSession();
  const mockResult = [
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
      id: "6",
      name: "Cebola roxa",
      image: "/mock/cebola.png",
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "7",
      name: "Tomate",
      image: "/mock/tomate.png",
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
  ];
  const filteredResults = mockResult.filter((item) =>
    item.name.toLowerCase().includes(query?.toLowerCase() ?? "")
  );
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      {session ? (
        <HeaderAuthenticaded session={session} />
      ) : (
        <UnauthenticatedHeader />
      )}
      <div className="w-full md:h-[128px] h-[88px]" />
      <div className="space-y-6">
        <h2 className="text-4xl text-zinc-600 font-medium">
          Resultado da busca por {query}
        </h2>
        <div className="grid grid-cols-7">
          {filteredResults.map((item) => (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-6 w-full">
        <Footer />
      </div>
    </section>
  );
}
