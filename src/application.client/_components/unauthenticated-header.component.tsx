import { Search } from "lucide-react";
import { Input } from "../../shadcn/ui/input";
import { Button } from "../../shadcn/ui/button";
import { Link } from "react-router";

export function UnauthenticatedHeader() {
  return (
    <header className="bg-[#E4EAE7] md:-m-12 p-5  -m-4 md:px-12 md:mb-12 pb-4">
      <div className="flex justify-between items-center p-2 md:p-0">
        <img
          src="full_logo.svg"
          alt="Fazenda online"
          className="md:w-[166px] md:h-[48px] w-28"
        />

        <Link to={"/landing-access"}>
          <Button
            className="bg-secondary md:rounded-2xl text-secondary-foreground md:w-[178px] "
            size={"lg"}
          >
            Acessar
          </Button>
        </Link>
      </div>

      <div className="flex justify-between w-full mt-4 md:mt-0">
        <img
          src="/vegetables_1.png"
          alt="Cesta de vegetais"
          className="md:block hidden"
        />
        <div className="flex flex-col space-y-4 text-center  items-center">
          <h2 className="text-primary text-4xl font-semibold">
            Do campo para a sua mesa
          </h2>
          <p className="text-secondary-foreground text-2xl font-semibold">
            Alimentos frescos e naturais, diretamente de quem cultiva
          </p>
          <div className="bg-white md:flex items-center  space-x-3 rounded-4xl border w-full hidden">
            <Search className="ml-2" />
            <Input
              type="text"
              className="flex-1 p-2 focus:ring-0 focus:outline-0 focus-visible:border-none focus-visible:ring-none focus-visible:ring-0 shadow-none"
            />
            <div className="">
              <Button className="bg-secondary-foreground hover:bg-secondary-foreground/70 py-6 px-12 rounded-4xl">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>
        <img
          src="/vegetables_2.png"
          alt="Prato de vegetais"
          className="md:block hidden"
        />
      </div>
    </header>
  );
}
