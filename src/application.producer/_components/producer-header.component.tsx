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
  console.log(session.user);
  return (
    <header className="m-8 md:mx-[200px]">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            src="/full_logo.svg"
            alt="Fazenda online"
            className="md:min-w-[166px] md:h-[48px] w-[166px]"
          />
        </Link>
        <div className="flex gap-2 items-center md:hidden">
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
