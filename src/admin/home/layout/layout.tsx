import { Outlet } from "react-router";
import { AppSidebar } from "./_components/sidebar";
import { SidebarProvider } from "../../../components/ui/sidebar";

export default function AdminLayout() {
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
