import {
  BarChart3,
  Bell,
  ClipboardList,
  Home,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";
import { useSession } from "../../application.client/context/session.context";
import { generateFallback } from "../../helpers/create-fallback.helper";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { Button } from "../../shadcn/ui/button";

import { DropdownMenuDemo } from "./drop-down-menu-demo.component";
import { Link } from "react-router";

export function HeaderProducer() {
  const { session } = useSession();
  if (!session) return null;
  const path = window.location.pathname;
  return (
    <>
      <header className=" m-4 md:m-0 z-50 top-0 w-full bg-zinc-50 md:bg-[#E9F4E9] py-3 md:mb-8">
        <div className="flex justify-between items-center md:mx-[40px]">
          {/* logo */}
          <Link to={"/"} className="hidden md:block">
            <img
              src="/full_logo.svg"
              alt="Fazenda online"
              className="md:min-w-[166px] md:h-[48px] w-[166px]"
            />
          </Link>
          {/* navegação  */}
          <nav className="hidden md:flex   w-full  ">
            <ul className="flex justify-around gap-4 text-zinc-400 font-semibold  w-full">
              <li
                className={`flex items-center gap-2 ${
                  path.endsWith("producer") ? "text-primary" : "text-zinc-400"
                }`}
              >
                <Home size={28} />
                <Link to={"/producer"}>Inicio</Link>
              </li>
              <li
                className={`flex items-center gap-2 ${
                  path.endsWith("orders") ? "text-primary" : "text-zinc-400"
                }`}
              >
                <ReceiptText size={28} />
                <Link to={"/producer/orders"}>Pedidos</Link>
              </li>
              <li
                className={`flex items-center gap-2 ${
                  path.endsWith("menu") ? "text-primary" : "text-zinc-400"
                }`}
              >
                <ClipboardList size={28} />
                <Link to={"/producer/menu"}>Cardápio</Link>
              </li>
              <li
                className={`flex items-center gap-2 ${
                  path.endsWith("business") ? "text-primary" : "text-zinc-400"
                }`}
              >
                <BarChart3 size={28} />
                <Link to={"/producer/business"}>Empresa</Link>
              </li>
            </ul>
          </nav>
          <div className=" md:min-w-[20%] flex justify-between md:justify-between w-full md:w-auto pr-6 gap-2">
            {/* avatar */}
            <div className="flex md:hidden gap-2 items-center">
              <Avatar className="size-12">
                <AvatarImage src={session?.user?.photo} alt="Avatar" />
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {generateFallback(session?.user)}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium text-zinc-400">
                  {session.user.company_name}
                </p>
                <p className="text-sm text-orange font-semibold">
                  Aguardando aprovação
                </p>
              </div>
            </div>
            {/* foto e editar perfil notificação*/}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 w-full">
                <DropdownMenuDemo />
                <Button className="bg-secondary rounded-2xl w-28 text-secondary-foreground">
                  <ShoppingCart />
                  Pedidos
                </Button>
              </div>
              <Button
                size={"icon"}
                variant={"outline"}
                className="rounded-full p-5 md:hidden"
              >
                <Bell className="size-6 text-zinc-400" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-[88px]" />
    </>
  );
}
