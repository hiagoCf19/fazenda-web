import {
  Bell,
  FileUp,
  Home,
  ImagePlus,
  Package,
  ShoppingBag,
  ShoppingCart,
  Truck,
  UserRoundCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../shadcn/ui/sidebar";
import { useLocation } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Pedidos",
    url: "/admin/pedidos",
    icon: ShoppingBag,
  },
  {
    title: "Produtores",
    url: "/admin/produtores",
    icon: ShoppingCart,
  },
  {
    title: "Clientes",
    url: "/admin/clientes",
    icon: UserRoundCheck,
  },
  {
    title: "Entregadores",
    url: "/admin/entregadores",
    icon: Truck,
  },
  {
    title: "Produtos",
    url: "/admin/produtos",
    icon: Package,
  },
  {
    title: "Emissão de relatório",
    url: "/admin/emissao-relatorio",
    icon: FileUp,
  },
  {
    title: "Banners",
    url: "/admin/banners",
    icon: ImagePlus,
  },
  {
    title: "Notificações",
    url: "/admin/notificacao",
    icon: Bell,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar
      className="border-none w-[320px] "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <SidebarContent className="bg-[#E4EAE780] ">
        <SidebarGroup>
          <SidebarGroupLabel className="my-5">
            <img src="/full_logo_horizontal.svg" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={`${
                    location.pathname === item.url
                      ? "bg-primary text-zinc-50 font-semibold"
                      : "text-zinc-500 font-normal "
                  } rounded-lg h-10 text-lg items-center flex p-2 py-6`}
                >
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-primary/40 hover:h-10"
                  >
                    <a href={item.url}>
                      <item.icon
                        className={`${
                          location.pathname === item.url
                            ? "text-zinc-50"
                            : "text-secondary-foreground"
                        }`}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
