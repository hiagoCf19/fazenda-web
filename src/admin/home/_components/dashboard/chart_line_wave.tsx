"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
const chartData = [
  { month: "January", vendas: 3120 },
  { month: "February", vendas: 2240 },
  { month: "March", vendas: 2670 },
  { month: "April", vendas: 2980 },
  { month: "May", vendas: 1890 },
  { month: "June", vendas: 2340 },
  { month: "July", vendas: 1612 },
  { month: "August", vendas: 2530 },
  { month: "September", vendas: 1348 },
  { month: "October", vendas: 1700 },
  { month: "November", vendas: 3170 },
  { month: "December", vendas: 3220 },
];

const chartConfig = {
  vendas: {
    label: "vendas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartLineWave() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="">
            <p className="text-foreground font-normal">Vendas</p>
            <span
              className=" text-lg text-zinc-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ticket médio
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
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={34}
              tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="bg-secondary-foreground text-white" />
              }
            />
            <defs>
              <linearGradient id="fillvendas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-vendas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-vendas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />

            <Area
              dataKey="vendas"
              type="natural"
              fill="url(#fillvendas)"
              fillOpacity={0.4}
              stroke="var(--color-vendas)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
