import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import BottomNav from "../_components/bottom-navigator-mobile.component";
import type { Producer } from "../../../types/producer";
import { ProducersList } from "./_components/producers.component";
import { Footer } from "./_components/footer.component";

export const AllProducersPage = () => {
  const { session } = useSession();

  const producers: Producer[] = [
    {
      businessName: "Fazenda esperança",
      image: "/mock/vilela.png",
      assessment: 5,
      id: "1",
    },
    {
      businessName: "Fazenda Filter",
      image: "/mock/filter.png",
      assessment: 5,
      id: "2",
    },
    {
      businessName: "Farm fresh - Organic",
      image: "/mock/fresh.png",
      assessment: 5,
      id: "3",
    },
    {
      businessName: "Império das colunas",
      image: "/mock/imperio_col.png",
      assessment: 5,
      id: "4",
    },
    {
      businessName: "Chicken Farm",
      image: "/mock/chicken.png",
      assessment: 5,
      id: "5",
    },
    {
      businessName: "Fazenda Aviação",
      image: "/mock/aviacao.png",
      assessment: 5,
      id: "6",
    },
    {
      businessName: "Ouro da Serra",
      image: "/mock/ouro.png",
      assessment: 5,
      id: "7",
    },
    {
      businessName: "Farm fresh - Organic",
      image: "/mock/fresh.png",
      assessment: 5,
      id: "8",
    },
    {
      businessName: "Império das colunas",
      image: "/mock/imperio_col.png",
      assessment: 5,
      id: "9",
    },
    {
      businessName: "Chicken Farm",
      image: "/mock/chicken.png",
      assessment: 5,
      id: "10",
    },
    {
      businessName: "Fazenda Aviação",
      image: "/mock/aviacao.png",
      assessment: 5,
      id: "11",
    },
    {
      businessName: "Ouro da Serra",
      image: "/mock/ouro.png",
      assessment: 5,
      id: "12",
    },
    // Adicione mais produtores aqui conforme necessário
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <section className="md:p-12 overflow-x-hidden flex-1 flex flex-col">
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

          <main className="md:mb-12 md:space-y-8 flex-1">
            <h1 className="text-2xl font-bold p-4">Todos os Produtores</h1>
            <ProducersList title="Produtores" producers={producers} />
          </main>

          <BottomNav />
        </section>
      </div>
      <Footer />
    </div>
  );
};
