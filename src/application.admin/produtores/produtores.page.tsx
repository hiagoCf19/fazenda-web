import { Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../shadcn/ui/card";
import { useState } from "react";
import { Active } from "./_components/active.component";
import { Inactive } from "./_components/inactive.component";
import { CardOptions } from "../(commons)/card-options";
import { AwaitingApproval } from "./_components/awaiting-approval";
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
        return <AwaitingApproval />;
      case ProdutoresTelas.ATIVOS:
        return <Active />;
      case ProdutoresTelas.INATIVOS:
        return <Inactive />;
      default:
        return <AwaitingApproval />;
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
