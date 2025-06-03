"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../shadcn/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../shadcn/ui/chart";
const chartData = [
  { day: "Segunda", pedidos: 1 },
  { day: "Terça", pedidos: 2 },
  { day: "Quarta", pedidos: 8 },
  { day: "Quinta", pedidos: 3 },
  { day: "Sexta", pedidos: 4 },
  { day: "Sábado", pedidos: 10 },
  { day: "Domingo", pedidos: 7 },
];

const chartConfig = {
  desktop: {
    label: "Pedidos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AnalyticalChart() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Pedidos</CardDescription>
        <CardTitle>0</CardTitle>
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
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="pedidos"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
