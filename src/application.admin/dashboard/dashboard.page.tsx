import { DollarSign, Ellipsis, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "../../shadcn/ui/card";
import { ChartBarHorizontal } from "./_components/chart_bar_horizontal.component";
import { ChartBarVertical } from "./_components/chart_bar_vertical.component";
import { ChartLineWave } from "./_components/chart_line_wave.component";
import { ChartLineSpike } from "./_components/chart_line_spike.component";

export default function Dashboard() {
  const cards = [
    {
      title: "Ganhos do mês",
      value: `Kz 4.35`,
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
      <div className="flex  gap-4 flex-none">
        {cards.map((item, i) => (
          <Card
            key={i}
            className="shadow-lg p-6 relative flex-1 min-h-[155px] "
          >
            <CardContent className="flex items-center space-x-4 h-full">
              <div className="flex items-center justify-center bg-green-300/70 rounded-full h-[67px] w-[67px]">
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

      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div className="w-2/3">
            <ChartBarHorizontal />
          </div>
          <div className="w-1/3">
            <ChartBarVertical />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2/3">
            <ChartLineWave />
          </div>
          <div className="w-1/3">
            <ChartLineSpike />
          </div>
        </div>
      </div>
    </main>
  );
}
