import {
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
import { Link, useNavigate, useParams } from "react-router";
import { Sheet } from "../../shadcn/ui/sheet";
import { OrdersCartComponent } from "../(home)/_components/cart-sheet/orders-cart-sheet.component";
import { useOpenOrders } from "../context/open-orders.context";
import { useState } from "react";
import { logout } from "../../service/auth.service";
import { useSession } from "../context/session.context";
import { generateFallback } from "../../helpers/create-fallback.helper";
import { useUserAddress } from "../../hooks/use-user.hook";
import { Skeleton } from "../../shadcn/ui/skeleton";
import { toast } from "sonner";
import { Session } from "../../../types/session.type";
import { StandardizationName } from "../../helpers/standardization-name.helper";
interface HeaderAuthenticadedProps {
  session: Session;
}
export function HeaderAuthenticaded({ session }: HeaderAuthenticadedProps) {
  const { setSession } = useSession();
  if (!session) return null;

  const { query } = useParams();
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(query);
  const navigate = useNavigate();
  const {
    data: address,
    isLoading,
    isError,
  } = useUserAddress(session?.user.id);
  console.log(session);
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
  ];
  isError && toast.error("Erro ao carregar endereço");

  return (
    <header className="bg-[#E4EAE7] md:-m-12 p-4 md:p-12 md:mb-12 pb-4 flex gap-8 items-center fixed w-full z-50 md:h-[128px] h-[75px]">
      {/* Logo e busca */}
      <div className="md:flex gap-4 w-[50%] hidden">
        <Link to={"/"}>
          <img
            src="/full_logo.svg"
            alt="Fazenda online"
            className="md:w-[166px] md:h-[48px] w-28"
          />
        </Link>

        <div
          className={`bg-white md:flex items-center space-x-3 rounded-4xl border w-full hidden ${
            error && "border-red-500/50"
          }`}
        >
          <Search className="ml-2" />
          <Input
            type="text"
            className="flex-1 p-2 focus:ring-0 focus:outline-0 shadow-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setError(false);
            }}
          />
          {search ? (
            <Link to={`/search/${search}`}>
              <Button className="bg-secondary-foreground hover:bg-secondary-foreground/70 py-6 px-12 rounded-4xl">
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

      {/* Endereço */}
      <div className="w-[20%] hidden md:block">
        <p className="text-zinc-800 text-lg">Endereço de entrega</p>
        {isLoading ? (
          <span className="flex text-zinc-600 items-center gap-2">
            <Skeleton className="w-32 h-2 bg-sidebar-accent-foreground/20" />,{" "}
            <Skeleton className="w-12 h-2 bg-sidebar-accent-foreground/20" /> -{" "}
            <Skeleton className="w-6 h-2 bg-sidebar-accent-foreground/20" />
          </span>
        ) : address?.[0] ? (
          <span className="flex text-zinc-600">
            {address[0].street}, {address[0].number} - {address[0].province}
          </span>
        ) : (
          <Link to={"/address"} className="text-[#FE7000]">
            Clique para adicionar um endereço
          </Link>
        )}
      </div>

      {/* User info e carrinho */}
      <div className="flex gap-4 md:w-[30%] items-center justify-between w-full relative">
        <div className="flex gap-2 items-center">
          <Avatar className="md:size-20 size-12">
            <AvatarImage className="object-cover" src={session?.user.photo} />
            <AvatarFallback className="text-secondary-foreground bg-secondary text-3xl">
              {generateFallback(session.user)}
            </AvatarFallback>
          </Avatar>
          <div className="flex justify-baseline items-start flex-col">
            <p className="md:text-lg tetx-sm text-secondary-foreground">
              Olá, <strong>{StandardizationName(session.user)}</strong>!
            </p>

            <Popover>
              <PopoverTrigger className="hidden md:block text-[#FE7000]">
                Editar perfil
              </PopoverTrigger>
              <PopoverContent className="w-full rounded-3xl rounded-t-none flex flex-col gap-4">
                <div className="w-2 h-4" />
                {EditProfileActions.map((action) => (
                  <Link
                    to={action.navigate}
                    className="flex flex-col"
                    key={action.title}
                  >
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
                <a
                  onClick={() => {
                    logout();
                    navigate("/landing-access");
                    setSession(null);
                  }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-3 border-b pb-2">
                    <LogOut className="size-7 text-accent-foreground/50" />
                    <div>
                      <p className="text-zinc-800">Sair</p>
                      <span className="text-foreground">Sair da conta</span>
                    </div>
                  </div>
                </a>

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
              {address?.[0]?.street}
            </p>
          </div>
        </div>

        <Sheet open={isOpenOrders} onOpenChange={setIsOpenOrders}>
          <Button
            className="bg-secondary text-secondary-foreground rounded-3xl md:w-[184px] h-[48px] md:text-lg"
            onClick={() => setIsOpenOrders(!isOpenOrders)}
          >
            <ShoppingCart className="text-secondary-foreground md:size-7" />
            Carrinho
          </Button>
          <OrdersCartComponent onOpenChange={setIsOpenOrders} />
        </Sheet>
      </div>
    </header>
  );
}
