"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../shadcn/ui/card";
import { ChartConfig, ChartContainer } from "../../../../shadcn/ui/chart";
import { Button } from "../../../../shadcn/ui/button";
import { Separator } from "../../../../shadcn/ui/separator";
const chartData = [
  { month: "Abacaxi", desktop: 50_779 },
  { month: "Cebola", desktop: 121_799 },
  { month: "Tomate", desktop: 50_799 },
  { month: "Cenoura", desktop: 25_567 },
  { month: "Arroz", desktop: 5_789 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#00BE62",
  },
  label: {
    color: "#615E83",
  },
} satisfies ChartConfig;

export function ChartBarVertical() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="">
            <p className="text-foreground font-normal">Produtos</p>
            <span
              className="text-lg text-zinc-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Mais vendidos
            </span>
          </div>
          <div className="space-x-2 bg-foreground/10 px-2 py-1 rounded-2xl">
            <Button className="rounded-xl">Semana</Button>
            <Button variant={"ghost"} className="text-foreground">
              Mês
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      {/* Linha separadora */}
      <div className="w-full px-5">
        <Separator />
      </div>

      <CardContent className="h-full p-2">
        <ChartContainer config={chartConfig} className="overflow-hidden">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ right: 6 }}
          >
            {/* Linhas pontilhadas corrigidas */}
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />

            {/* Ajuste do eixo Y (produtos) */}
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              axisLine={false}
              width={60}
            />

            {/* Ajuste do eixo X (valores) */}
            <XAxis
              type="number"
              domain={[0, 200000]}
              tickFormatter={(value) => `${value / 1000}k`}
              tickCount={5} // Garante os rótulos 0k, 50k, 100k, 200k
              axisLine={false}
            />

            {/* Gráfico de barras */}
            <Bar
              barSize={20}
              dataKey="desktop"
              layout="vertical"
              radius={6}
              height={1}
            >
              {/*Adicionando os valores ao final do eixo Y */}
              <LabelList
                dataKey="desktop"
                position="right"
                formatter={(value: number) => value.toLocaleString("pt-BR")}
                fill="#333"
                fontSize={12}
              />
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.month === "Cebola"
                      ? "var(--color-desktop)"
                      : "#9291A5"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
