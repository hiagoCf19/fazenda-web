import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../shadcn/ui/card";
import { SideChart } from "./side.chart.component";

interface AnalyticalCardProps {
  chartData: any[];
}

const AnalyticalCard = ({ chartData }: AnalyticalCardProps) => {
  const last = chartData[chartData.length - 1].valor;
  const secondLast = chartData[chartData.length - 2].valor;

  const decreased = last < secondLast;

  return (
    <Card className="flex-1 relative min-h-[180px] sm:min-h-[200px] md:min-h-[180px]">
      <CardHeader className="pb-2 sm:pb-4 md:pb-6">
        <CardDescription>Analítico</CardDescription>
        <CardTitle className="text-secondary-foreground">
          Vendas totais
        </CardTitle>
      </CardHeader>

      {/* Desktop: layout com gráfico absoluto */}
      <CardContent className="hidden md:flex gap-4 pt-2">
        <div className="flex-shrink-0 z-10 relative">
          <p className="text-5xl font-bold text-secondary-foreground">186k</p>
          <span
            className={`flex items-center gap-2 ${
              decreased ? "text-red-400" : "text-primary"
            } font-semibold`}
          >
            +21.01
            {decreased ? <TrendingDown /> : <TrendingUp />}
          </span>
        </div>
      </CardContent>

      {/* Mobile/tablet: layout lado a lado */}
      <CardContent className="flex md:hidden gap-3 sm:gap-4 items-center pb-4">
        <div className="flex-shrink-0 min-w-0">
          <p className="text-3xl sm:text-4xl font-bold text-secondary-foreground">
            186k
          </p>
          <span
            className={`flex items-center gap-1 sm:gap-2 ${
              decreased ? "text-red-400" : "text-primary"
            } font-semibold text-xs sm:text-sm`}
          >
            +21.01
            {decreased ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
          </span>
        </div>
        <div className="flex-1 h-20 sm:h-24 min-w-[120px]">
          <SideChart chartData={chartData} decreased={decreased} />
        </div>
      </CardContent>

      {/* Gráfico absoluto - visível apenas em md+ */}
      <div
        className="hidden md:flex absolute right-0 top-0 bottom-0 justify-center items-center h-full 
  md:w-[50%] lg:w-[70%] pointer-events-none"
      >
        <div className="flex-1 h-full">
          <SideChart chartData={chartData} decreased={decreased} />
        </div>
      </div>
    </Card>
  );
};

export default AnalyticalCard;
