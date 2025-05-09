import { BikeIcon, TimerIcon } from "lucide-react";
import { Card } from "../../../../shadcn/ui/card";

interface DeliveryInfoProps {
  restaurant: any;
}
const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <Card className="flex flex-row py-2 sm:py-4 mt-6 rounded-sm  shadow-none border justify-between ">
      <div className="flex flex-1 border-r-1 flex-col items-center">
        {/* custo */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <BikeIcon size={14} />
          <span className="text-xs">Entrega</span>
        </div>
        {Number(restaurant.deliveryFee) > 0 ? (
          <p className="text-xs font-semibold text-green-500">
            {/*  {formatCurrency(Number(restaurant.deliveryFee))} */} Grátis
          </p>
        ) : (
          <p className="text-xs font-semibold"> Grátis</p>
        )}
      </div>
      {/* tempo */}
      <div className="flex flex-1 flex-col items-center">
        {/* custo */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <TimerIcon size={14} />
          <span className="text-xs">Entrega</span>
        </div>
        <p className="text-xs font-semibold">
          {restaurant.deliveryTimeMinutes} min
        </p>
      </div>
    </Card>
  );
};

export default DeliveryInfo;
