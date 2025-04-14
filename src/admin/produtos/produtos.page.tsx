import { Plus, Search } from "lucide-react";
import { Button } from "../../shadcn/ui/button";
import { Card, CardContent, CardHeader } from "../../shadcn/ui/card";
import { useState } from "react";
import { Categorias } from "./_components/categorias.component";
import { Itens } from "./_components/itens.component";
import { CardOptions } from "../(commons)/card-options";

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
      <div
        className="flex items-center space-x-5 mb-5"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h1 className="text-4xl text-zinc-700 font-semibold ">Produtos</h1>
      </div>
      <div
        className="w-full flex space-x-4"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <Button className="flex-1 p-6">
          <Plus />
          Nova categoria
        </Button>
        <Button className="flex-1 p-6">
          <Plus />
          Novo Item
        </Button>
      </div>

      <Card className=" mt-5 pt-0" style={{ fontFamily: "Inter, sans-serif" }}>
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
                placeholder={`Buscar por ${selectedValue.toLowerCase()}`}
                className="border-none ring-none outline-none w-full"
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
