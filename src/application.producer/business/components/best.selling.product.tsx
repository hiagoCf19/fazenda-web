import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { Button } from "../../../shadcn/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../shadcn/ui/card";

const mockData = [
  {
    name: "Cenoura",
    image: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
    quantidade: 90,
  },
  {
    name: "Alface",
    image: "https://cdn-icons-png.flaticon.com/512/590/590682.png",
    quantidade: 100,
  },
  {
    name: "Beterraba",
    image: "https://cdn-icons-png.flaticon.com/512/590/590686.png",
    quantidade: 80,
  },
  {
    name: "Milho",
    image: "https://cdn-icons-png.flaticon.com/512/590/590688.png",
    quantidade: 70,
  },
  {
    name: "Couve",
    image: "https://cdn-icons-png.flaticon.com/512/590/590683.png",
    quantidade: 50,
  },
];

export function BestSellingProduct() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-muted-foreground">Produtos</p>
            <CardTitle className="text-sm">Mais vendidos</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-green-600 border-green-100 bg-green-300"
          >
            Mês
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={mockData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickFormatter={() => ""}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}kg`}
            />
            <Tooltip />
            <Bar
              dataKey="quantidade"
              radius={[4, 4, 0, 0]}
              fill="#4ade80"
              barSize={14} //largura da barra
            />
            {mockData.map((entry, index) => (
              <ReferenceDot
                key={index}
                x={entry.name}
                y={entry.quantidade}
                r={9} //raio do circulo no topo da barra
                fill="#22c55e"
                stroke="#22c55e"
                isFront
              />
            ))}
          </BarChart>
        </ResponsiveContainer> 
        <div className="grid grid-cols-5 mt-2 pr-4 px-[67px]">
          {mockData.map((item, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
