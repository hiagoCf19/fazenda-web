import { PaymentMethods } from "../../../../types/payment-method";

interface PaymentCardProps {
  method: PaymentMethods;
  isSelected: boolean;
  onSelect: () => void;
}
export function PaymentCard({
  method,
  onSelect,
  isSelected,
}: PaymentCardProps) {
  return (
    <div
      className={`border-2 ${
        isSelected && "border-primary"
      } flex justify-between items-center p-4 rounded-xl cursor-pointer transition-colors`}
      onClick={onSelect}
    >
      <div className="flex justify-between w-full items-center">
        <div>
          <h5 className="text-lg text-zinc-800 font-medium">{method.method}</h5>
          <p>{method.description}</p>
        </div>
        <span className="text-sm">{method.span}</span>
      </div>
    </div>
  );
}
