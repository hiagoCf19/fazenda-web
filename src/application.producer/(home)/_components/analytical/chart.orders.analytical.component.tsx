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
import { useState } from "react";
import { Button } from "../../../../shadcn/ui/button";

const chartConfig = {
  desktop: {
    label: "Pedidos",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AnalyticalChart() {
  const { data, isLoading, error } = useChartOrders();

  const totalPedidos = 10;

  const [selectedPeriod, setSelectedPeriod] = useState<
    "semana" | "mes" | "ano"
  >("semana");
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardDescription>Pedidos</CardDescription>
          <div className="flex gap-2">
            {/* 2. Botão "Semana" */}
            <Button
              //variant="outline"
              size="sm"
              // Aplica classes condicionalmente com base no estado
              className={`${
                selectedPeriod === "semana"
                  ? "text-green-600 border-green-100 bg-green-300" // Classes para selecionado
                  : "bg-gray-100 text-gray-800" // Classes para não selecionado (ajuste as cores conforme sua paleta)
              }`}
              onClick={() => setSelectedPeriod("semana")} // Atualiza o estado ao clicar
            >
              Semana
            </Button>
            {/* 3. Botão "Mês" */}
            <Button
              //variant="outline"
              size="sm"
              className={`${
                selectedPeriod === "mes"
                  ? "text-green-600 border-green-100 bg-green-300"
                  : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => setSelectedPeriod("mes")}
            >
              Mês
            </Button>
          </div>
        </div>
        <CardTitle>
          {isLoading ? "Carregando..." : error ? "Erro" : totalPedidos}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/*
        <div className="w-full h-[200px]">
        */}
        <div className="w-full">
          {" "}
          {/* Removido a altura fixa para melhor responsividade */}
          <ChartContainer
            config={chartConfig}
            className="aspect-[16/9] w-full h-[200px] md:h-[300px]" // Exemplo: Mantém 200px para telas pequenas, 300px para maiores e proporção 16/9
          >
            <AreaChart
              accessibilityLayer
              data={data ?? []}
              margin={{ left: 12, right: 12 }} // Reduzido margem do AreaChart para preencher mais o container
              className="w-full h-full"
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
        </div>
      </CardContent>
    </Card>
  );
}
