import { Hourglass, Search, ShoppingCart, Timer } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Pendentes } from "./_components/pedidos/pendentes";
import { EmAndamento } from "./_components/pedidos/em-andamento";
import { Finalizados } from "./_components/pedidos/finalizados";
import { CardOptions } from "./_components/commons/card-options";
enum PedidosTela {
  PENDENTES = "Pendentes",
  EM_ANDAMENTO = "Em andamento",
  FINALIZADOS = "Finalizados",
}
export const Pedidos = () => {
  const cards = [
    {
      title: PedidosTela.PENDENTES,
      value: 5,
      icon: Hourglass,
      color: "#FF605880",
    },
    {
      title: PedidosTela.EM_ANDAMENTO,
      value: 15,
      icon: Timer,
      color: "#fe6e008e",
    },
    {
      title: PedidosTela.FINALIZADOS,
      value: 46,
      icon: ShoppingCart,
      color: "#A0F4B1",
    },
  ];
  const [selectedValue, setSelectedValue] = useState(PedidosTela.PENDENTES);
  function renderContent() {
    switch (selectedValue) {
      case PedidosTela.PENDENTES:
        return <Pendentes />;
      case PedidosTela.EM_ANDAMENTO:
        return <EmAndamento />;
      case PedidosTela.FINALIZADOS:
        return <Finalizados />;
      default:
        return PedidosTela.PENDENTES;
    }
  }

  return (
    <>
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <h1
          className=" text-xl sm:text-2xl lg:text-4xl text-zinc-700 font-semibold"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Pedidos
        </h1>
        <div className="flex flex-wrap gap-2 bg-[#E1F3E4] px-2 py-1 rounded-2xl">
          <Button className="">Hoje</Button>
          <Button variant={"ghost"} className="text-foreground">
            Semana
          </Button>
          <Button variant={"ghost"} className="rounded-xl">
            Mês
          </Button>
          <Button variant={"ghost"} className="rounded-xl">
            Todos
          </Button>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((item, i) => (
          <Card key={i} className="shadow-lg p-8">
            <CardContent className="flex items-center gap-4 sm:gap-6">
              {/* Ícone */}
              <div className="flex-shrink-0">
                <div
                  style={{ backgroundColor: item.color }}
                  className="flex items-center justify-center rounded-full h-16 w-16"
                >
                  <item.icon />
                </div>
              </div>

              {/* Informações */}
              <div
                className="flex flex-col"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {item.value}
                </p>
                <span className="text-sm sm:text-lg text-secondary-foreground">
                  {item.title}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Card de Pedidos */}
      <Card
        className="mt-5 pt-0 bd"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <CardHeader className="p-0 ">
          <CardOptions
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            options={[
              PedidosTela.PENDENTES,
              PedidosTela.EM_ANDAMENTO,
              PedidosTela.FINALIZADOS,
            ]}
          />
          <div className="p-4 sm:p-8 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-zinc-700">
              {cards.find((item) => item.title === selectedValue)?.value || 0}{" "}
              {selectedValue}
            </p>
            <div className="border rounded-lg flex items-center px-4 w-full sm:w-[50%] lg:w-[30%]">
              <input
                placeholder="Buscar por cliente"
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
