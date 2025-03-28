import { ChevronLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <section className="p-12 flex justify-center flex-col items-center space-y-12">
      <header className="border-b flex items-center w-[80%] pb-2">
        <div className=" flex justify-baseline  w-[8%]">
          <Button
            variant={"ghost"}
            className="hover:bg-background hover:underline "
            onClick={() => console.log("back")}
          >
            <ChevronLeft />
            Voltar
          </Button>
        </div>
        <h1 className="text-2xl text-secondary-foreground w-full  text-center -m-[8%]">
          Cadastro Cliente
        </h1>
      </header>

      <Outlet />
    </section>
  );
}
