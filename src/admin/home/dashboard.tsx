import { DollarSign, Ellipsis, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "../../shadcn/ui/card";
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
    <main className="space-y-4">
      <div className="grid grid-cols-3 space-x-8">
        {cards.map((item, i) => (
          <Card key={i} className=" shadow-lg p-8 relative">
            <CardContent className="flex h-[10vh] justify-center items-center">
              <div className="w-[20%]">
                <div
                  className={`bg-green-300/70 flex items-center justify-center rounded-full h-16 w-16`}
                >
                  <item.icon size={30} />
                </div>
              </div>
              <div className="w-[80%] flex flex-col">
                <p className="text-3xl font-semibold">{item.value}</p>
                <span className="text-lg text-secondary-foreground">
                  {item.title}
                </span>
              </div>
            </CardContent>
            <div className="absolute right-0 p-4 px-8 top-0 w-min rounded-full cursor-pointer">
              <Ellipsis className="text-muted-foreground/50" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full mb-b">
        <ChartBarHorizontal />
        <ChartBarVertical />
        <ChartLineWave />
        <ChartLineSpike />
      </div>
    </main>
  );
}
