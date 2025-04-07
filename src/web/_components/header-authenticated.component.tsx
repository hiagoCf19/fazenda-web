import {
  ChevronDown,
  LogOut,
  MapIcon,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  TriangleAlert,
  Wallet,
} from "lucide-react";
import { Input } from "../../shadcn/ui/input";
import { Button } from "../../shadcn/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shadcn/ui/popover";
import { Link, useParams } from "react-router";
import { Sheet } from "../../shadcn/ui/sheet";
import { OrdersCartComponent } from "../(home)/_components/cart-sheet/orders-cart-sheet.component";
import { Session } from "../../../types/session.type";
import { useOpenOrders } from "../context/open-orders.context";
import { useState } from "react";

interface HeaderAuthenticadedProps {
  session: Session;
}
export function HeaderAuthenticaded({ session }: HeaderAuthenticadedProps) {
  const { query } = useParams();
  const [error, setError] = useState(false);

  const { isOpenOrders, setIsOpenOrders } = useOpenOrders();
  const EditProfileActions = [
    {
      title: "Meus pedidos",
      description: "Acompanhe seus pedidos",
      navigate: "/my-orders",
      icon: ShoppingCart,
    },
    {
      title: "Pagamentos",
      description: "Métodos de pagamento",
      navigate: "/payment-methods",
      icon: Wallet,
    },
    {
      title: "Endereços",
      description: "Meus endereços de entrega",
      navigate: "/address",
      icon: MapIcon,
    },
    {
      title: "Minha conta",
      description: "Informações de conta",
      navigate: "/my-account",
      icon: Settings,
    },
    {
      title: "Segurança",
      description: "Altere seus dados de acesso",
      navigate: "/security",
      icon: ShieldCheck,
    },
    {
      title: "Ajude",
      description: "Entre em contato para dúvidas e suporte",
      navigate: "/help",
      icon: TriangleAlert,
    },
    {
      title: "Sair",
      description: "Sair da conta",
      navigate: "",
      icon: LogOut,
    },
  ];
  const [search, setSearch] = useState(query);
  return (
    <header className="bg-[#E4EAE7] md:-m-12 p-4   md:p-12 md:mb-12 pb-4 flex gap-8 items-center fixed w-full z-50 md:h-[128px] h-[75px]">
      <div className="md:flex gap-4 w-[50%] hidden">
        <img
          src="/full_logo.svg"
          alt="Fazenda online"
          className="md:w-[166px] md:h-[48px] w-28"
        />

        <div
          className={`bg-white md:flex items-center  space-x-3 rounded-4xl border w-full hidden ${
            error && "border-red-500/50"
          }`}
        >
          <Search className="ml-2" />
          <Input
            type="text"
            className="flex-1 p-2 focus:ring-0 focus:outline-0 focus-visible:border-none focus-visible:ring-none focus-visible:ring-0 shadow-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setError(false);
            }}
          />
          {search ? (
            <Link to={`/search/${search}`}>
              <Button
                className={`bg-secondary-foreground hover:bg-secondary-foreground/70 py-6 px-12 rounded-4xl `}
              >
                Pesquisar
              </Button>
            </Link>
          ) : (
            <Button
              className="bg-secondary-foreground hover:bg-secondary-foreground/70 py-6 px-12 rounded-4xl"
              onClick={() => search === "" && setError(!error)}
            >
              Pesquisar
            </Button>
          )}
        </div>
      </div>
      {/* endereço */}
      <div className="w-[20%] hidden md:block">
        <p className="text-zinc-800 text-lg">Endereço de entrega</p>
        <span className="flex text-zinc-600">
          {session?.user.endereco.logradouro}, {session?.user.endereco.number} -{" "}
          {session?.user.endereco.city} <ChevronDown />
        </span>
      </div>
      {/* user info e carrinho */}
      <div className="flex gap-4 md:w-[30%] items-center justify-between w-full relative">
        <div className="flex gap-2 items-center">
          <Avatar className="md:size-20 size-12">
            <AvatarImage className="object-cover" src={session?.user.photo} />
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
          <div className=" flex justify-baseline items-start flex-col ">
            <p className="md:text-lg tetx-sm text-secondary-foreground">
              Olá, <strong>{session?.user.name}</strong>!
            </p>

            <Popover>
              <PopoverTrigger className="hidden md:block text-[#FE7000]">
                Editar perfil
              </PopoverTrigger>
              <PopoverContent className=" w-full rounded-3xl rounded-t-none flex flex-col gap-4 ">
                <div className="w-2 h-4" />
                {EditProfileActions.map((action) => (
                  <Link to={action.navigate} className="flex flex-col ">
                    <div className="flex items-center gap-3 border-b pb-2">
                      <action.icon className="size-7 text-accent-foreground/50" />
                      <div>
                        <p className="text-zinc-800">{action.title}</p>
                        <span className="text-foreground">
                          {action.description}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}

                <div className="flex items-center flex-col">
                  <Link className="text-zinc-600" to={"/terms-of-use"}>
                    Termos de uso
                  </Link>
                  <Link className="text-zinc-600" to={"privacy-policy"}>
                    Políticas de privacidade
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
            <p className="text-zinc-800 text-sm md:hidden">
              {session?.user.endereco.logradouro}
            </p>
          </div>
        </div>

        <Sheet open={isOpenOrders} onOpenChange={setIsOpenOrders}>
          <Button
            className="bg-secondary text-secondary-foreground rounded-3xl md:w-[184px] h-[48px] md:text-lg "
            onClick={() => setIsOpenOrders(!isOpenOrders)}
          >
            <ShoppingCart className="text-secondary-foreground md:size-7  " />
            Carrinho
          </Button>

          <OrdersCartComponent onOpenChange={setIsOpenOrders} />
        </Sheet>

        {/* carrinho */}
      </div>
    </header>
  );
}
