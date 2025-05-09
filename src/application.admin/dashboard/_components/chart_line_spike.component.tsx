"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
} from "../../../shadcn/ui/chart";
const chartData = [
  { week: "MON", usuarios: 200 },
  { week: "TUE", usuarios: 900 },
  { week: "WED", usuarios: 550 },
  { week: "THU", usuarios: 2000 },
  { week: "FRI", usuarios: 1800 },
  { week: "SAT", usuarios: 3300 },
  { week: "SUN", usuarios: 2500 },
];

const chartConfig = {
  usuarios: {
    label: "usuarios",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartLineSpike() {
  return (
    <Card className="w-full h-[448px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="">
            <p className="text-foreground font-normal">Usuários ativos</p>
            <span
              className="text-lg text-zinc-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              6,345
            </span>
          </div>
          <div className="space-y-1">
            <div className="space-x-3 flex items-center justify-end">
              <p className="text-zinc-600">1.3 %</p>
              <div className="size-6 bg-primary rounded-full" />
            </div>
            <span className="uppercase text-sm  font-normal text-foreground">
              vs última semana
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[448px]">
        <ChartContainer config={chartConfig} className="h-[300px] w-[100%]">
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
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={34}
              tickFormatter={(value) => `${Math.round(value / 1000)}k`}
            />
            <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#0D1B2A] text-white px-4 py-2 rounded-lg shadow-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold">
                          {(payload[0]?.value ?? 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              dataKey="usuarios"
              type="linear"
              fill="var(--color-usuarios)"
              fillOpacity={0.4}
              stroke="var(--color-usuarios)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
