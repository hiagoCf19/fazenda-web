"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Separator } from "../../../shadcn/ui/separator";

const data = [
  { day: "SEG", value: 18 },
  { day: "TER", value: 4 },
  { day: "QUA", value: 8 },
  { day: "QUI", value: 3 },
  { day: "SEX", value: 7 },
  { day: "SÁB", value: 15 },
  { day: "DOM", value: 10 },
];

export const OrdersChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-zinc-500">Pedidos</p>
          <p className="text-2xl font-semibold text-zinc-800">14</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-green-600 font-semibold">34%</p>
          <p className="text-xs text-zinc-400">ÚLTIMA SEMANA</p>
        </div>
      </div>
      <Separator />

      <div className="h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="day"
              interval={0}
              tickLine={false}
              axisLine={false}
              padding={{ left: 16, right: 16 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ backgroundColor: "#1D2939", borderRadius: "6px" }}
              labelStyle={{ display: "none" }}
              formatter={(value: number) => [
                `Kz ${value.toLocaleString()}`,
                "",
              ]}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: "#22C55E", stroke: "#fff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
