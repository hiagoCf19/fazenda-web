import { PaymentMethods } from "../../../../types/payment-method";
import { PaymentCard } from "./payment-card.component";
interface PaymentListProps {
  list: PaymentMethods[];
  selectedPayment: PaymentMethods;
  setSelectedPayment: React.Dispatch<React.SetStateAction<PaymentMethods>>;
}
export function PaymentList({
  list,
  selectedPayment,
  setSelectedPayment,
}: PaymentListProps) {
  const handleSelect = (option: PaymentMethods) => {
    setSelectedPayment(option);
    //console.log("Selecionado:", option);
  };
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-xl text-zinc-800">Pagamento pelo app</h3>

      {list.map((method, i) => (
        <PaymentCard
          method={method}
          key={i}
          isSelected={selectedPayment?.method === method.method}
          onSelect={() => handleSelect(method)}
        />
      ))}
    </div>
  );
}
