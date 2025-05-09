import {
  BarChart3,
  Bell,
  ClipboardList,
  Home,
  LogOut,
  ReceiptText,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shadcn/ui/dropdown-menu";
import { logout } from "../../service/auth.service";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { useSession } from "../../application.client/context/session.context";

export function DropdownMenuDemo() {
  const navigate = useNavigate();
  const { session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 items-center">
          <Avatar className="size-14">
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              CN
            </AvatarFallback>
            <AvatarImage src={session?.user.photo} />
          </Avatar>
          <div className="flex flex-col">
            <p className=" text-zinc-800 font-semibold">
              {session?.user.company_name}
            </p>
            <span className="text-zinc-500">{session?.user.email}</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navegação</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Home />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User />
            <span>Minha conta</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReceiptText />
            <span>Pedidos</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ClipboardList />
            <span>Cardapio</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BarChart3 />
            <span>Empresa</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Bell />
            <span>Notificações</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logout();
            navigate("/landing-access");
          }}
        >
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
