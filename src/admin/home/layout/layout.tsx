import { Outlet, useNavigate } from "react-router";
import { AppSidebar } from "./_components/sidebar";
import { SidebarProvider } from "../../../shadcn/ui/sidebar";
import { useSession } from "../../../web/context/session.context";
import NotFound from "../../../web/_components/not-found.component";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { session } = useSession();
  if (!session) navigate("/");
  if (session?.user.role != "ADMIN") return <NotFound />;
  return (
    <div className="flex w-full">
      <SidebarProvider className="w-min ml-6">
        <AppSidebar />
      </SidebarProvider>
      <main className="flex-1 p-8 ">
        <Outlet /> {/* Renderiza as rotas filhas */}
      </main>
    </div>
  );
}
