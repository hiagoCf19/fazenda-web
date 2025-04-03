import { Plus, Search } from "lucide-react";
import { Button } from "../../shadcn/ui/button";
import { Card, CardContent, CardHeader } from "../../shadcn/ui/card";
import { CardOptions } from "./_components/commons/card-options";
import { useState } from "react";
import { Categorias } from "./_components/produtos/categorias";
import { Itens } from "./_components/produtos/itens";

enum ProdutosTelas {
  CATEGORIAS = "Categorias",
  ITENS = "Itens",
}
export const Produtos = () => {
  const [selectedValue, setSelectedValue] = useState(ProdutosTelas.CATEGORIAS);
  function renderContent() {
    switch (selectedValue) {
      case ProdutosTelas.CATEGORIAS:
        return <Categorias />;
      case ProdutosTelas.ITENS:
        return <Itens />;

      default:
        return <Categorias />;
    }
  }
  return (
    <>
      <div className="flex items-center space-x-5 mb-5">
        <h1 className="text-4xl text-zinc-700 font-semibold ">Produtos</h1>
      </div>
      <div className="w-full flex space-x-4">
        <Button className="flex-1 p-6">
          <Plus />
          Nova categoria
        </Button>
        <Button className="flex-1 p-6">
          <Plus />
          Novo Item
        </Button>
      </div>

      <Card className=" mt-5 pt-0">
        <CardHeader className="p-0">
          <CardOptions
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            options={[ProdutosTelas.CATEGORIAS, ProdutosTelas.ITENS]}
          />

          <div className="p-8 flex justify-between">
            <p className="text-4xl font-semibold text-zinc-700">
              2 {selectedValue}
            </p>

            <div className="border rounded-lg flex items-center px-4 w-[30%]">
              <input
                placeholder="Buscar por cliente"
                className=" border-none ring-none outline-none w-full "
              />
              <Search />
            </div>
          </div>
        </CardHeader>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </>
  );
};
