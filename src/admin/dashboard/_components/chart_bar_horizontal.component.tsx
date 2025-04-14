"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../shadcn/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../shadcn/ui/chart";
import { Button } from "../../../shadcn/ui/button";
import { Separator } from "../../../shadcn/ui/separator";

const chartData = [
  { month: "January", vendas: 500 },
  { month: "February", vendas: 1800 },
  { month: "March", vendas: 2500 },
  { month: "April", vendas: 600 },
  { month: "May", vendas: 1800 },
  { month: "June", vendas: 2500 },
  { month: "July", vendas: 1200 },
  { month: "August", vendas: 700 },
  { month: "September", vendas: 1800 },
  { month: "October", vendas: 600 },
  { month: "November", vendas: 1800 },
  { month: "December", vendas: 2500 },
];

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartBarHorizontal() {
  return (
    <Card className="w-full h-[448px]">
      {/* Cabeçalho do gráfico */}
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>
            <p className="text-foreground font-normal">Vendas</p>
            <span
              className="text-lg text-zinc-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Maior registro de vendas
            </span>
          </div>
          <div className="flex bg-foreground/10 px-2 py-1 rounded-2xl space-x-2">
            <Button variant="ghost" size="sm">
              Semana
            </Button>
            <Button variant="ghost" size="sm">
              Semestre
            </Button>
            <Button size="sm" className="rounded-xl">
              Ano
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      {/* Linha separadora */}
      <div className="w-full px-5">
        <Separator />
      </div>

      {/* Conteúdo do gráfico */}
      <CardContent className="flex justify-center items-center p-4 h-[448px]">
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <BarChart
            data={chartData}
            width={500}
            height={350}
            margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
          >
            {/* Linha pontilhada */}
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            {/*  eixo y */}
            <YAxis
              domain={[0, 6000]}
              tickCount={7}
              axisLine={false}
              tickLine={false}
              width={30}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={
                <ChartTooltipContent
                  indicator="dashed"
                  className="bg-secondary-foreground text-white"
                />
              }
            />

            <Bar
              dataKey="vendas"
              barSize={16}
              fill="var(--color-vendas)"
              radius={[6, 6, 0, 0]}
              background={{ fill: "#e5e7eb", radius: 6 }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
