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
import { useChartOrders } from "../../../../hooks/use.chart.orders";

const chartConfig = {
  desktop: {
    label: "Pedidos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AnalyticalChart() {
  const { data, isLoading, error } = useChartOrders();

  const totalPedidos = data?.reduce((sum, item) => sum + item.pedidos, 0) ?? 0;

  return (
    <Card>
      <CardHeader>
        <CardDescription>Pedidos</CardDescription>
        <CardTitle>
          {isLoading ? "Carregando..." : error ? "Erro" : totalPedidos}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data ?? []}
            margin={{ left: 12, right: 12 }}
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
