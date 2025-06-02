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
  console.log(last < secondLast); // true se caiu, false se subiu ou manteve

  return (
    <Card className="flex-1 relative ">
      <CardHeader>
        <CardDescription>Analítico</CardDescription>
        <CardTitle className="text-secondary-foreground">
          Vendas totais
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 ">
        <div>
          <p className="text-5xl font-bold text-secondary-foreground">186k</p>
          <span
            className={`flex items-center gap-2 ${
              last < secondLast ? "text-red-400" : "text-primary"
            } font-semibold`}
          >
            +21.01
            {last < secondLast ? <TrendingDown /> : <TrendingUp />}
          </span>
        </div>
      </CardContent>

      <div className="absolute right-0 top-0 bottom-0 flex justify-center items-center h-full w-[70%] ">
        <SideChart chartData={chartData} decreased={last < secondLast} />
      </div>
    </Card>
  );
};

export default AnalyticalCard;
