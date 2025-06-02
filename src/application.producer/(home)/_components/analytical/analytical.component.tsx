import AnalyticalCard from "./card.analytical.component";
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

  return (
    <div>
      <h3 className="text-zinc-600 font-semibold text-2xl my-4">Analítico</h3>
      <div className="flex flex-col-reverse md:flex-row gap-12 ">
        <div className="flex-1 ">
          <AnalyticalChart />
        </div>
        <div className="flex md:flex-col gap-8 md:w-[30%] [&::-webkit-scrollbar]:hidden w-full overflow-x-scroll ">
          <AnalyticalCard chartData={totalSales} />
          <AnalyticalCard chartData={invoicing} />
          <AnalyticalCard chartData={profile_visits} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticalOrder;
