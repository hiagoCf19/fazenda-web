/* import AnalyticalCard from "./card.analytical.component";
import { AnalyticalChart } from "./chart.orders.analytical.component";

const AnalyticalOrder = () => {
  const totalSales = [
    { month: "January", valor: 110 },
    { month: "February", valor: 125 },
    { month: "March", valor: 60 },
    { month: "April", valor: 140 },
    { month: "May", valor: 300 },
    { month: "June", valor: 155 },
    { month: "July", valor: 170 },
    { month: "August", valor: 130 },
    { month: "September", valor: 186 },
  ];
  const invoicing = [
    { month: "January", valor: 210 },
    { month: "February", valor: 525 },
    { month: "March", valor: 130 },
    { month: "April", valor: 40 },
    { month: "May", valor: 300 },
    { month: "June", valor: 255 },
    { month: "July", valor: 110 },
    { month: "August", valor: 330 },
    { month: "September", valor: 486 },
  ];
  const profile_visits = [
    { month: "January", valor: 7 },
    { month: "February", valor: 41 },
    { month: "March", valor: 35 },
    { month: "April", valor: 62 },
    { month: "May", valor: 25 },
    { month: "June", valor: 55 },
    { month: "July", valor: 4 },
    { month: "August", valor: 48 },
    { month: "September", valor: 35 },
  ];
 */
import { useAnalyticalData } from "../../../../hooks/use.analytical.data";
import { BestSellingProduct } from "../../../business/components/best.selling.product";
import AnalyticalCard from "./card.analytical.component";

const AnalyticalOrder = () => {
  const { data, isLoading, error } = useAnalyticalData();

  if (isLoading) return <p>Carregando dados analíticos...</p>;
  if (error) return <p>Erro ao carregar dados.</p>;
  if (isLoading || !data) return <p>Carregando...</p>;

  return (
    <div className="">
      <h3 className="text-zinc-600 font-semibold text-2xl my-4">Analítico</h3>
      {/* O contêiner principal agora deve ter uma altura para o flexbox poder distribuir */}
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-4 items-stretch">
        <div className="flex-1 min-w-[65%] lg:min-w-[70%] xl:min-w-[72%] 2xl:min-w-[75%]">
          <BestSellingProduct />
        </div>
        {/* Nova Estrutura para a Coluna de Cards: */}
        <div className="flex flex-col gap-2 md:w-[35%] lg:w-[30%] xl:w-[28%] 2xl:w-[25%] flex-grow flex-shrink-0 w-full">
          {" "}
          {/* Ajuste o XL e adicione 2XL */}
          <AnalyticalCard chartData={data.totalSales} />
          <AnalyticalCard chartData={data.invoicing} />
          <AnalyticalCard chartData={data.profile_visits} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticalOrder;
