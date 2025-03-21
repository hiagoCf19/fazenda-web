"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../components/ui/chart";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
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
    label: "vendas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export function ChartBarHorizontal() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="">
            <p className="text-foreground font-normal">Vendas</p>
            <span className="text-lg text-zinc-600">
              Maior registro de vendas
            </span>
          </div>
          <div className="space-x-2 bg-foreground/10 px-2 py-1 rounded-2xl">
            <Button variant={"ghost"} className="text-foreground">
              Semana
            </Button>
            <Button variant={"ghost"} className="text-foreground">
              Semestre
            </Button>
            <Button className="rounded-xl">Ano</Button>
          </div>
        </CardTitle>
      </CardHeader>
      <div className="w-full px-5">
        <Separator />
      </div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0, 6000]}
              tickCount={7}
              axisLine={false}
              tickLine={false}
              width={20}
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
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="vendas"
              barSize={16}
              fill="var(--color-vendas)"
              radius={8}
              background={{ fill: "#e5e7eb", radius: 8 }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
