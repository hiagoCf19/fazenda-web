import {
  Bell,
  User,
  Wallet, // Ícone de carteira para 'Pagamentos'
  ShieldCheck, // Ícone de escudo para 'Segurança'
  TriangleAlert,
  LogOut, // Ícone de alerta para 'Ajuda'
} from "lucide-react"; // Importar todos os ícones necessários

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../shadcn/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { useSession } from "../../application.client/context/session.context"; // Certifique-se que setSession está disponível no hook
import { Link, useNavigate } from "react-router";
import { Button } from "../../shadcn/ui/button";
import { logout } from "../../service/auth.service";

const generateFallback = (user: any) => {
  if (!user || !user.name) return "CN";
  const parts = user.name.split(" ");
  if (parts.length > 1) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`;
  }
  return parts[0][0];
};

// Ajustado os itens com base na imagem fornecida e no código anterior.
// A ordem e os ícones foram definidos para refletir o print.
const DropdownMenuActions = [
  {
    title: "Notificações",
    description: "Gerenciar alertas",
    navigateTo: "/notifications",
    icon: Bell,
  },
  {
    title: "Minha carteira", // Título ajustado conforme print
    description: "Métodos de pagamento", // Descrição que faz sentido
    navigateTo: "/payment-methods",
    icon: Wallet,
  },
  {
    title: "Minha conta",
    description: "Informações de conta",
    navigateTo: "/my-account",
    icon: User, // Mantendo User, mas Settings também seria uma boa opção aqui.
    // Se preferir Settings, mude o icon: User para icon: Settings
  },
  {
    title: "Segurança",
    description: "Altere seus dados de acesso",
    navigateTo: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Ajuda",
    description: "Entre em contato para dúvidas e suporte",
    navigateTo: "/help",
    icon: TriangleAlert,
  },
];

export function DropdownMenuDemo() {
  //const navigate = useNavigate();
  const navigate = useNavigate();

  const { setSession } = useSession();
  const { session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer">
          <Avatar className="size-14">
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              {generateFallback(session?.user)}
            </AvatarFallback>
            <AvatarImage src={session?.user.photo} />
          </Avatar>
          <div className="flex flex-col">
            <p className="text-zinc-800 font-semibold">
              {session?.user.company_name}
            </p>
            <Link to="/edit-profile" className="text-orange whitespace-nowrap">
              Editar perfil
            </Link>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[280px] rounded-3xl rounded-t-none flex flex-col gap-0 p-4 mt-2">
        <DropdownMenuGroup className="flex flex-col">
          {DropdownMenuActions.map((action, index) => (
            <DropdownMenuItem asChild key={action.title}>
              <Link
                to={action.navigateTo}
                className="flex w-full min-h-[56px] hover:bg-zinc-200" // min-h para garantir altura mínima e bom alinhamento
              >
                <div
                  className={`flex items-center gap-3 w-full py-3 ${
                    // Aumentado o py para um espaçamento mais uniforme
                    index < DropdownMenuActions.length ? "border-b" : "" // Sempre adiciona borda para todos, se quiser a última sem borda, use length - 1
                  } ${
                    index < DropdownMenuActions.length - 1 ? "pb-3" : "" // Ajuste do padding inferior para a borda
                  }`}
                >
                  <action.icon className="size-6 text-accent-foreground/50 flex-shrink-0" />{" "}
                  {/* Ícone size-6 como no popover, ou size-7 se preferir maior */}
                  <div className="flex-grow">
                    {" "}
                    {/* flex-grow para que o texto ocupe o espaço restante */}
                    <p className="text-zinc-800">{action.title}</p>
                    <span className="text-foreground text-sm leading-tight">
                      {" "}
                      {/* leading-tight para controlar altura da linha */}
                      {action.description}
                    </span>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem asChild>
            <Button
              onClick={() => {
                logout();
                navigate("/landing-access");
                setSession(null);
              }}
              className="flex w-full min-h-[56px] bg-transparent text-start hover:bg-zinc-200" // min-h para garantir altura mínima e bom alinhamento
            >
              <div className={`flex items-center gap-3 w-full py-3 `}>
                <LogOut className="size-6 text-accent-foreground/50 flex-shrink-0" />{" "}
                {/* Ícone size-6 como no popover, ou size-7 se preferir maior */}
                <div className="flex-grow">
                  {" "}
                  {/* flex-grow para que o texto ocupe o espaço restante */}
                  <p className="text-zinc-800">Sair</p>
                  <span className="text-foreground text-sm leading-tight">
                    Sair da conta
                  </span>
                </div>
              </div>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* Links de Termos de Uso e Política de Privacidade */}
        {/* Ajustado mt-4 para criar espaçamento claro do bloco acima */}
        <div className="flex items-center flex-col mt-4 gap-1">
          <Link className="text-zinc-600 text-sm" to={"/terms-of-use"}>
            Termos de uso
          </Link>
          <Link className="text-zinc-600 text-sm" to={"/privacy-policy"}>
            Políticas de privacidade
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
