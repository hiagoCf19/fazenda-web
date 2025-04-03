import { DeliveryOptions } from "../../../../types/delivery-options";

interface DeliveryOptionCardProps {
  option: DeliveryOptions;
  isSelected: boolean;
  onSelect: () => void;
}
export function DeliveryOptionCard({
  option,
  isSelected,
  onSelect,
}: DeliveryOptionCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`border-2 flex justify-between items-center p-4 rounded-xl cursor-pointer transition-colors ${
          isSelected ? "border-primary" : "border-zinc-300"
        }`}
        onClick={onSelect}
      >
        <div>
          <h5 className="text-lg text-zinc-800 font-medium">
            {option.option}a
          </h5>
          <p>{option.time}</p>
        </div>
        <p
          className={`text-lg font-medium ${
            option.price === "Grátis" ? "text-green-500" : "text-zinc-800"
          }`}
        >
          {option.price}
        </p>
      </div>
    </div>
  );
}
