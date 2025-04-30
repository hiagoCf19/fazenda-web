import { DeliveryOptionCard } from "./delivery-option-card.component";
import { DeliveryOptions } from "../../../../types/delivery-options";
interface DeliveryOptionListProps {
  list: DeliveryOptions[];
  selectedOption: DeliveryOptions | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<DeliveryOptions>>;
}
export function DeliveryOptionList({
  list,
  selectedOption,
  setSelectedOption,
}: DeliveryOptionListProps) {
  const handleSelect = (option: DeliveryOptions) => {
    setSelectedOption(option);
    //console.log("Selecionado:", option);
  };
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-xl text-zinc-800">Opções de entrega</h3>
      {list.map((option, i) => (
        <DeliveryOptionCard
          key={i}
          option={option}
          isSelected={selectedOption?.option === option.option}
          onSelect={() => handleSelect(option)}
        />
      ))}
    </div>
  );
}
