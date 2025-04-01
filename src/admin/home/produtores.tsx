import { Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { useState } from "react";
import { AguardandoAprovacao } from "./_components/produtores/aguardando-aprovacao";
import { Ativos } from "./_components/produtores/ativos";
import { Inativos } from "./_components/produtores/inativos";
import { CardOptions } from "./_components/commons/card-options";
enum ProdutoresTelas {
  AGUARDANDO_APROVACAO = "Aguardando aprovação",
  ATIVOS = "Ativos",
  INATIVOS = "Inativos",
}
export const Produtores = () => {
  const [selectedValue, setSelectedValue] = useState(
    ProdutoresTelas.AGUARDANDO_APROVACAO
  );
  function renderContent() {
    switch (selectedValue) {
      case ProdutoresTelas.AGUARDANDO_APROVACAO:
        return <AguardandoAprovacao />;
      case ProdutoresTelas.ATIVOS:
        return <Ativos />;
      case ProdutoresTelas.INATIVOS:
        return <Inativos />;
      default:
        return <AguardandoAprovacao />;
    }
  }

  return (
    <>
      <div
        className="flex items-center space-x-5 mb-5"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h1
          className="text-4xl text-zinc-700 font-semibold "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Produtores
        </h1>
      </div>

      <Card className=" mt-5 pt-0" style={{ fontFamily: "Inter, sans-serif" }}>
        <CardHeader className="p-0">
          <CardOptions
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            options={[
              ProdutoresTelas.AGUARDANDO_APROVACAO,
              ProdutoresTelas.ATIVOS,
              ProdutoresTelas.INATIVOS,
            ]}
          />

          <div className="p-8 flex justify-between">
            <p className="text-4xl font-semibold">4 {selectedValue}</p>

            <div className="border rounded-lg flex items-center px-4 w-[30%]">
              <input
                placeholder="Buscar por produtor"
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
