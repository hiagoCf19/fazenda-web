import { Bell } from "lucide-react";
import { useSession } from "../../application.client/context/session.context";
import { generateFallback } from "../../helpers/create-fallback.helper";
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar";
import { Button } from "../../shadcn/ui/button";

import { DropdownMenuDemo } from "./dropDown-manu-demo.component";
import { Link } from "react-router";

export function ProducerHeader() {
  const { session } = useSession();
  if (!session) return null;
  return (
    <header className="m-4 md:mx-[200px] h-[50px] ">
      <div className="flex justify-between items-center">
        <Link to={"/"} className="hidden md:block">
          <img
            src="/full_logo.svg"
            alt="Fazenda online"
            className="md:min-w-[166px] md:h-[48px] w-[166px]"
          />
        </Link>
        <div className="flex md:hidden gap-2 items-center">
          <Avatar className="size-12">
            <AvatarImage src={session?.user?.photo} alt="Avatar" />
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              {generateFallback(session?.user)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium text-zinc-600">
              {session.user.company_name}
            </p>
            <p className="text-sm text-orange font-semibold">
              Aguardando aprovação
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <DropdownMenuDemo />
          </div>
          <Button
            size={"icon"}
            variant={"outline"}
            className="rounded-full p-5 md:hidden"
          >
            <Bell className="size-6 text-zinc-600" />
          </Button>
        </div>
      </div>
    </header>
  );
}
