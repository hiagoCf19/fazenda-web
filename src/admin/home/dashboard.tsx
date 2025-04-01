import { DollarSign, Ellipsis, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { ChartBarHorizontal } from "./_components/dashboard/chart_bar_horizontal";
import { ChartBarVertical } from "./_components/dashboard/chart_bar_vertical";
import { ChartLineWave } from "./_components/dashboard/chart_line_wave";
import { ChartLineSpike } from "./_components/dashboard/chart_line_spike";

export default function Page() {
  const cards = [
    {
      title: "Ganhos do mês",
      value: `$ 4.35`,
      icon: DollarSign,
    },
    {
      title: "Clientes",
      value: `583`,
      icon: Users,
    },
    {
      title: "Vendas",
      value: `1289`,
      icon: ShoppingCart,
    },
  ];
  return (
    <main
      className="overflow-hidden flex flex-col gap-4 p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-none">
        {cards.map((item, i) => (
          <Card key={i} className="shadow-lg p-6 relative">
            <CardContent className="flex items-center space-x-4">
              <div className="flex items-center justify-center bg-green-300/70 rounded-full h-16 w-16">
                <item.icon size={30} />
              </div>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">{item.value}</p>
                <span className="text-lg text-secondary-foreground">
                  {item.title}
                </span>
              </div>
            </CardContent>
            <div className="absolute right-2 top-2 p-2 cursor-pointer">
              <Ellipsis className="text-muted-foreground/50" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-hidden ">
        <div className="h-full flex justify-center items-center">
          <ChartBarHorizontal />
        </div>
        <div className="h-full flex justify-center items-center">
          <ChartBarVertical />
        </div>
        <div className="h-full flex justify-center items-center">
          <ChartLineWave />
        </div>
        <div className="h-full flex justify-center items-center">
          <ChartLineSpike />
        </div>
      </div>
    </main>
  );
}
