"use client";

import { CartesianGrid, Line, LineChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../shadcn/ui/chart";

interface SideChartProps {
  chartData: any[];
  decreased: boolean;
}
export function SideChart({ chartData, decreased }: SideChartProps) {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: !decreased ? "" : "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  const lineColor = decreased ? "#f87171" : "#00be62";

  return (
    <div className="max-w-[230px]">
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid stroke="none" vertical={false} />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="valor"
            type="linear"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
