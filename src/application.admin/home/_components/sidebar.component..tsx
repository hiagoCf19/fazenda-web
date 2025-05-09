import {
  Bell,
  FileUp,
  Home,
  ImagePlus,
  LogOut,
  ShoppingBag,
  ShoppingCart,
  Truck,
  User,
  UserRoundCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../shadcn/ui/sidebar";
import { Link, useLocation, useNavigate } from "react-router";
import { Avatar, AvatarImage } from "../../../shadcn/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../../../shadcn/ui/button";
import { generateFallback } from "../../../helpers/create-fallback.helper";
import { useSession } from "../../../application.client/context/session.context";
import { logout } from "../../../service/auth.service";
import { TooltipDemo } from "./tooltipDemo.component";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../shadcn/ui/dropdown-menu";

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
  const navigate = useNavigate();

  const { session, setSession } = useSession();
  if (!session) return null;
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
        <SidebarFooter className=" my-8 absolute bottom-0 w-full flex justify-center items-center  ">
          <div
            className=" rounded-full h-16 w-[95%] bg-background shadow-lg flex items-center justify-between
          "
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 gap-2 flex items-center ">
                <Avatar className="size-10">
                  <AvatarImage src={session.user.photo} />
                  <AvatarFallback className="flex items-center justify-center w-full bg-secondary text-secondary-foreground">
                    {generateFallback(session.user)}
                  </AvatarFallback>
                </Avatar>
                <p className="text-secondary-foreground text-lg font-medium">
                  {session.user.first_name} {session.user.last_name}
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px] ml-8">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-700"
                    to={"/admin/profile"}
                  >
                    <User /> Perfil
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => {
                logout();
                navigate("/landing-access");
                setSession(null);
              }}
              size={"icon"}
              className="mr-5 bg-transparent rounded-full hover:bg-transparent shadow-none"
            >
              <TooltipDemo
                hover="Sair"
                button={
                  <Button variant="outline">
                    <LogOut className=" text-destructive round size-6" />
                  </Button>
                }
              />
            </Button>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
