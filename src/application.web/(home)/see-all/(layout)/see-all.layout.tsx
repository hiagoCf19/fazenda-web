import { Outlet } from "react-router";
import { useSession } from "../../../context/session.context";
import { UnauthenticatedHeader } from "../../../_components/unauthenticated-header.component";
import { HeaderAuthenticaded } from "../../../_components/header-authenticated.component";

export function SeeAllLayout() {
  const { session } = useSession();
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
        } `}
      />
      <main className="flex-1 px-8 ">
        <h1>Mais pedidos</h1>
        <Outlet /> {/* Renderiza as rotas filhas */}
      </main>
    </section>
  );
}
