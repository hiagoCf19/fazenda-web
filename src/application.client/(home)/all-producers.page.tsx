import { useSession } from "../context/session.context";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { ProducersList } from "./_components/producers-list.component";
import { Footer } from "./_components/footer.component";
import BottomNav from "../../common/_components/bottom-navigator-mobile.component";
import { producersExtraInfo } from "../../mock-info";

export const AllProducersPage = () => {
  const { session } = useSession();

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
            <ProducersList title="Produtores" producers={producersExtraInfo} />
          </main>

          <BottomNav />
        </section>
      </div>
      <Footer />
    </div>
  );
};
